import { useState, useRef } from "react";

interface OrderItem {
    name: string;
    quantity?: number;
}

interface StoredOrder {
    id: string;
    restaurant: string;
    items: OrderItem[];
    status: string;
    eta: string;
}

interface ActiveOrder {
    id: string;
    restaurant: string;
    itemCount: number;
    itemNames: string;
    status: string;
    eta: string;
}

function Orders() {
    const [orders, setOrders] = useState<ActiveOrder[]>(() => {
        const stored: StoredOrder[] = JSON.parse(localStorage.getItem("placedOrders") || "[]");
        return stored.map((order) => ({
            id: order.id,
            restaurant: order.restaurant,
            itemCount: order.items.reduce((sum, item) => sum + (item.quantity || 1), 0),
            itemNames: order.items
                .map((item) => `${item.name}${item.quantity && item.quantity > 1 ? ` x${item.quantity}` : ""}`)
                .join(", "),
            status: order.status,
            eta: order.eta,
        }));
    });

    // Confirm modal state
    const [modalOrder, setModalOrder] = useState<ActiveOrder | null>(null);

    // Undo toast state
    const [toastOrder, setToastOrder] = useState<ActiveOrder | null>(null);
    const [toastVisible, setToastVisible] = useState(false);
    const undoTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
    const pendingRemoveRef = useRef<ActiveOrder | null>(null);

    // Step 1: User clicks "Cancel Order" → open confirm modal
    const handleCancelClick = (order: ActiveOrder) => {
        setModalOrder(order);
    };

    // Step 2: User confirms in modal → hide modal, show undo toast, soft-remove card
    const handleConfirmCancel = () => {
        if (!modalOrder) return;
        const cancelled = modalOrder;
        setModalOrder(null);

        // Remove immediately from UI
        setOrders((prev) => prev.filter((o) => o.id !== cancelled.id));

        // Remove immediately from localStorage too
        const stored: StoredOrder[] = JSON.parse(localStorage.getItem("placedOrders") || "[]");
        const updated = stored.filter((o) => String(o.id) !== String(cancelled.id));
        localStorage.setItem("placedOrders", JSON.stringify(updated));

        // Keep for undo
        pendingRemoveRef.current = cancelled;
        setToastOrder(cancelled);
        setToastVisible(true);

        if (undoTimerRef.current) clearTimeout(undoTimerRef.current);
        undoTimerRef.current = setTimeout(() => {
            setToastVisible(false);
            setToastOrder(null);
            pendingRemoveRef.current = null;
        }, 5000);
    };

    // Step 3a: User hits Undo → restore order
    const handleUndo = () => {
        if (undoTimerRef.current) clearTimeout(undoTimerRef.current);

        if (pendingRemoveRef.current) {
            const restoredOrder = pendingRemoveRef.current;

            // Restore in UI
            setOrders((prev) => [...prev, restoredOrder]);

            // Restore in localStorage
            const stored: StoredOrder[] = JSON.parse(localStorage.getItem("placedOrders") || "[]");
            const restoredStoredOrder: StoredOrder = {
                id: restoredOrder.id,
                restaurant: restoredOrder.restaurant,
                items: restoredOrder.itemNames.split(", ").map((entry) => {
                    const match = entry.match(/^(.*?)(?: x(\d+))?$/);
                    return {
                        name: match?.[1] || entry,
                        quantity: match?.[2] ? Number(match[2]) : 1,
                    };
                }),
                status: restoredOrder.status,
                eta: restoredOrder.eta,
            };

            localStorage.setItem(
                "placedOrders",
                JSON.stringify([restoredStoredOrder, ...stored])
            );

            pendingRemoveRef.current = null;
        }

        setToastVisible(false);
        setToastOrder(null);
    };

    // Step 3b: Timer fires → commit removal to localStorage
    const finalizeCancel = (orderId: string) => {
        const stored: StoredOrder[] = JSON.parse(localStorage.getItem("placedOrders") || "[]");
        const updated = stored.filter((o) => o.id !== orderId);
        localStorage.setItem("placedOrders", JSON.stringify(updated));
        setToastVisible(false);
        setToastOrder(null);
        pendingRemoveRef.current = null;
    };

    return (
        <main className="min-h-screen min-w-screen bg-transparent text-gray-800">
            <section className="mx-auto min-h-screen w-full max-w-md px-4 pt-20 pb-8">
                <div className="rounded-[32px] border border-white/60 bg-white/90 shadow-[0_20px_60px_rgba(15,23,42,0.08)] backdrop-blur">
                    {/* Header */}
                    <div className="flex items-center justify-between px-4 pt-4 pb-3">
                        <button
                            type="button"
                            onClick={() => window.history.back()}
                            className="rounded-full border border-gray-200 bg-white px-4 py-2 text-sm font-semibold text-gray-700 shadow-sm transition hover:bg-gray-50"
                        >
                            Back
                        </button>
                        <span className="rounded-full bg-red-50 px-3 py-1 text-xs font-bold text-red-500">
                            Orders
                        </span>
                    </div>

                    <div className="px-5 pt-2 pb-8">
                        {/* Title */}
                        <div className="mb-8">
                            <p className="mb-2 text-xs font-bold uppercase tracking-[0.22em] text-red-500">
                                Live order tracking
                            </p>
                            <h1 className="text-3xl font-bold leading-tight text-gray-900">
                                Your current orders
                            </h1>
                            <p className="mt-3 text-[15px] leading-7 text-gray-600">
                                Track active orders, cancel if needed, or head back home to keep browsing.
                            </p>
                        </div>

                        {/* Empty state */}
                        {orders.length === 0 ? (
                            <div className="rounded-[28px] border border-dashed border-gray-300 bg-gray-50 px-5 py-12 text-center">
                                <p className="text-xl font-bold text-gray-900">No active orders</p>
                                <p className="mt-2 text-sm leading-6 text-gray-500">
                                    Place an order from the menu and it will appear here.
                                </p>
                                <button
                                    type="button"
                                    onClick={() => { window.location.href = "/"; }}
                                    className="mt-6 rounded-2xl bg-[#e23744] px-5 py-3 text-sm font-semibold text-white shadow-[0_12px_24px_rgba(226,55,68,0.22)] transition hover:brightness-105"
                                >
                                    Go Home
                                </button>
                            </div>
                        ) : (
                            <div className="space-y-4">
                                {orders.map((order) => {
                                    // Derive active step from status string
                                    // Step 0 (Order Placed) is ALWAYS done — user is already on the orders page
                                    const statusLower = order.status.toLowerCase();
                                    const activeStep =
                                        statusLower.includes("delivered") ? 3
                                            : statusLower.includes("way") || statusLower.includes("picked") ? 2
                                                : 1; // preparing / confirmed

                                    const steps = [
                                        { label: "Order Placed", sub: "We've received your order", icon: "📋" },
                                        { label: "Preparing", sub: "Kitchen is working on it", icon: "👨‍🍳" },
                                        { label: "On the way", sub: "Your rider is heading over", icon: "🛵" },
                                        { label: "Delivered", sub: `Estimated: ${order.eta}`, icon: "✅" },
                                    ];

                                    return (
                                        <div
                                            key={order.id}
                                            className="overflow-hidden rounded-[28px] border border-red-100 bg-gradient-to-br from-white via-white to-red-50/70 shadow-[0_12px_30px_rgba(226,55,68,0.08)]"
                                        >
                                            {/* Card header */}
                                            <div className="border-b border-red-100/80 px-4 py-4">
                                                <div className="flex items-start justify-between gap-3">
                                                    <div>
                                                        <p className="text-lg font-bold text-gray-900">{order.restaurant}</p>
                                                        <p className="mt-1 text-sm text-gray-500">
                                                            {order.itemCount} item{order.itemCount > 1 ? "s" : ""} · {order.itemNames}
                                                        </p>
                                                    </div>
                                                    <span className="shrink-0 rounded-full bg-amber-50 px-3 py-1 text-xs font-bold text-amber-600 border border-amber-100">
                                                        {order.status}
                                                    </span>
                                                </div>
                                            </div>

                                            {/* Vertical timeline */}
                                            <div className="px-5 py-5">
                                                <div className="relative">
                                                    {steps.map((step, i) => {
                                                        const done = i < activeStep;
                                                        const active = i === activeStep;
                                                        const pending = i > activeStep;
                                                        const isLast = i === steps.length - 1;

                                                        return (
                                                            <div key={step.label} className="flex gap-3">
                                                                {/* Left column: dot + line */}
                                                                <div className="flex flex-col items-center" style={{ width: 28 }}>
                                                                    {/* Dot */}
                                                                    <div
                                                                        className={[
                                                                            "relative z-10 flex h-7 w-7 shrink-0 items-center justify-center rounded-full border-2 text-[13px] transition-all",
                                                                            done ? "border-red-500 bg-red-500 shadow-[0_0_0_3px_rgba(226,55,68,0.15)]" : "",
                                                                            active ? "border-red-500 bg-white shadow-[0_0_0_4px_rgba(226,55,68,0.18)]" : "",
                                                                            pending ? "border-gray-200 bg-gray-50" : "",
                                                                        ].join(" ")}
                                                                    >
                                                                        {done
                                                                            ? <span className="text-white text-[10px] font-black">✓</span>
                                                                            : active
                                                                                ? <span className="h-2.5 w-2.5 rounded-full bg-red-500 animate-pulse" />
                                                                                : <span className="h-2 w-2 rounded-full bg-gray-300" />
                                                                        }
                                                                    </div>

                                                                    {/* Connector line */}
                                                                    {!isLast && (
                                                                        <div className="relative mt-0.5 w-[2px] flex-1" style={{ minHeight: 32 }}>
                                                                            {/* Grey base */}
                                                                            <div className="absolute inset-0 rounded-full bg-gray-100" />
                                                                            {/* Red fill for completed segments */}
                                                                            {done && (
                                                                                <div className="absolute inset-0 rounded-full bg-red-400" />
                                                                            )}
                                                                            {/* Animated partial fill for active segment */}
                                                                            {active && (
                                                                                <div
                                                                                    className="absolute top-0 left-0 right-0 rounded-full bg-gradient-to-b from-red-400 to-red-200"
                                                                                    style={{ height: "55%", transition: "height 1s ease" }}
                                                                                />
                                                                            )}
                                                                        </div>
                                                                    )}
                                                                </div>

                                                                {/* Right column: text */}
                                                                <div className={["pb-5", isLast ? "pb-0" : ""].join(" ")} style={{ paddingTop: 2 }}>
                                                                    <p className={[
                                                                        "text-[13px] font-bold leading-tight",
                                                                        done || active ? "text-gray-900" : "text-gray-300",
                                                                    ].join(" ")}>
                                                                        {step.label}
                                                                        {active && (
                                                                            <span className="ml-2 text-[10px] font-bold text-red-500 bg-red-50 border border-red-100 rounded-full px-2 py-0.5 align-middle">
                                                                                Now
                                                                            </span>
                                                                        )}
                                                                    </p>
                                                                    <p className={[
                                                                        "mt-0.5 text-[11px] leading-relaxed",
                                                                        done ? "text-gray-400" : "",
                                                                        active ? "text-gray-500" : "",
                                                                        pending ? "text-gray-200" : "",
                                                                    ].join(" ")}>
                                                                        {step.sub}
                                                                    </p>
                                                                </div>
                                                            </div>
                                                        );
                                                    })}
                                                </div>
                                            </div>

                                            {/* Action buttons */}
                                            <div className="px-4 pb-4 grid grid-cols-2 gap-3 border-t border-red-50 pt-4">
                                                <button
                                                    type="button"
                                                    onClick={() => handleCancelClick(order)}
                                                    className="rounded-2xl border border-red-200 bg-red-50 px-4 py-3 text-sm font-semibold text-red-500 transition hover:bg-red-100"
                                                >
                                                    Cancel Order
                                                </button>
                                                <button
                                                    type="button"
                                                    onClick={() => { window.location.href = "/"; }}
                                                    className="rounded-2xl bg-[#e23744] px-4 py-3 text-sm font-semibold text-white shadow-[0_12px_24px_rgba(226,55,68,0.22)] transition hover:brightness-105"
                                                >
                                                    Go Home
                                                </button>
                                            </div>
                                        </div>
                                    );
                                })}
                            </div>
                        )}
                    </div>
                </div>
            </section>

            {/* ── CONFIRM MODAL ── */}
            {modalOrder && (
                <div
                    className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm px-5"
                    onClick={(e) => { if (e.target === e.currentTarget) setModalOrder(null); }}
                >
                    <div className="w-full max-w-md animate-in zoom-in-95 duration-200 rounded-[28px] bg-white px-6 pt-7 pb-8 shadow-2xl">
                        {/* Icon */}
                        <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-[18px] border-[1.5px] border-red-200 bg-red-50 text-2xl">
                            🗑️
                        </div>

                        <h2 className="text-xl font-extrabold text-gray-900">Cancel this order?</h2>
                        <p className="mt-1.5 text-[13px] leading-relaxed text-gray-500">
                            You're about to cancel your order from
                        </p>

                        {/* Restaurant name chip */}
                        <div className="mt-3 mb-6 rounded-[10px] border border-red-100 bg-red-50 px-4 py-2.5 text-[13px] font-bold text-red-500">
                            {modalOrder.restaurant}
                        </div>

                        <div className="h-px bg-gray-100 mb-6" />

                        <div className="flex flex-col gap-3">
                            <button
                                type="button"
                                onClick={handleConfirmCancel}
                                className="w-full rounded-[14px] bg-[#e23744] py-4 text-[15px] font-bold text-white shadow-[0_8px_24px_rgba(226,55,68,0.3)] transition hover:-translate-y-0.5 hover:shadow-[0_12px_32px_rgba(226,55,68,0.38)]"
                                style={{ background: "linear-gradient(135deg,#e23744 0%,#c62b36 100%)" }}
                            >
                                Yes, cancel my order
                            </button>
                            <button
                                type="button"
                                onClick={() => setModalOrder(null)}
                                className="w-full rounded-[14px] border-[1.5px] border-gray-200 bg-gray-50 py-4 text-[15px] font-bold text-gray-700 transition hover:bg-gray-100"
                            >
                                Keep my order 🍽️
                            </button>
                        </div>

                        <p className="mt-4 text-center text-[11px] text-gray-700">
                            This action can be undone within 5 seconds
                        </p>
                    </div>
                </div>
            )}

            {/* ── UNDO TOAST ── */}
            <div
                className={[
                    "fixed bottom-6 left-1/2 z-50 -translate-x-1/2 flex items-center gap-3 rounded-2xl bg-gray-900 px-4 py-3.5 shadow-2xl transition-all duration-300",
                    toastVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6 pointer-events-none",
                ].join(" ")}
                style={{ minWidth: 280 }}
            >
                <span className="text-base">✓</span>
                <span className="flex-1 text-[13px] font-semibold text-white">
                    "{toastOrder?.restaurant}" cancelled
                </span>
                <button
                    type="button"
                    onClick={handleUndo}
                    className="rounded-[10px] bg-[#e23744] px-3.5 py-1.5 text-[12px] font-bold text-white transition hover:bg-[#c62b36]"
                >
                    Undo
                </button>
                {/* Progress bar */}
                {toastVisible && (
                    <div className="absolute bottom-0 left-0 h-[3px] rounded-b-2xl bg-red-500 animate-[shrink_5s_linear_forwards]" />
                )}
            </div>
        </main>
    );
}

export default Orders;