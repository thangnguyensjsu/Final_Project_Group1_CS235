import { useEffect } from "react";

function OrderConfirm() {
    useEffect(() => {
        const audio = new Audio("/sounds/order-success-chime.wav");
        audio.volume = 0.8;
        audio.play().catch(() => {
            // browser may block autoplay until user interaction
        });
    }, []);

    return (
        <main className="min-h-screen min-w-screen bg-[#faf7f5] text-gray-800">
            <section className="mx-auto min-h-screen w-full max-w-md px-4 pt-20 pb-8">
                <div className="overflow-hidden rounded-[32px] border border-white/80 bg-white/95 shadow-[0_20px_60px_rgba(226,55,68,0.08),0_4px_16px_rgba(0,0,0,0.06)] backdrop-blur">
                    <div className="flex items-center justify-between px-4 pt-4 pb-3 border-b border-red-50">
                        <button
                            type="button"
                            onClick={() => (window.location.href = "/")}
                            className="rounded-full border border-gray-200 bg-white px-4 py-2 text-sm font-semibold text-gray-700 shadow-sm transition hover:bg-gray-50"
                        >
                            Home
                        </button>

                        <span className="rounded-full bg-red-50 px-3 py-1 text-xs font-bold text-red-500">
                            Confirmed
                        </span>
                    </div>

                    <div className="px-5 py-10 text-center">
                        <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-red-50 text-3xl shadow-sm">
                            ✓
                        </div>

                        <p className="mt-6 text-[11px] font-bold uppercase tracking-[0.18em] text-red-500">
                            Order placed
                        </p>

                        <h1 className="mt-2 text-[30px] font-extrabold leading-[1.08] tracking-[-0.025em] text-slate-900">
                            Your order is confirmed
                        </h1>

                        <p className="mt-3 text-[14px] leading-7 text-slate-500">
                            We’ve sent your order to the restaurant. You can track it from the
                            orders page.
                        </p>

                        <div className="mt-8 grid gap-3">
                            <button
                                type="button"
                                onClick={() => (window.location.href = "/orders")}
                                className="w-full rounded-[14px] px-5 py-[14px] text-[15px] font-bold text-white shadow-[0_8px_24px_rgba(226,55,68,0.30)] transition-all hover:-translate-y-0.5 hover:shadow-[0_12px_32px_rgba(226,55,68,0.38)] active:scale-[0.985]"
                                style={{ background: "linear-gradient(135deg,#e23744 0%,#c62b36 100%)" }}
                            >
                                Track Order
                            </button>

                            <button
                                type="button"
                                onClick={() => (window.location.href = "/")}
                                className="w-full rounded-[14px] border border-[#f0e8e8] bg-white px-5 py-[14px] text-[14px] font-semibold text-slate-700 shadow-sm transition hover:bg-gray-50"
                            >
                                Return Home
                            </button>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}

export default OrderConfirm;