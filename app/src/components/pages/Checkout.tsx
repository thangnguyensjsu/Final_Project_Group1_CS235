function Checkout() {
    const storedItems = JSON.parse(localStorage.getItem("cartItems") || "[]");
    const items = storedItems;

    const subtotal = items.reduce(
        (sum: number, item: any) => sum + item.price * (item.quantity || 1),
        0
    );
    const deliveryFee = items.length > 0 ? 5 : 0;
    const tax = +(subtotal * 0.06).toFixed(2);
    const total =
        items.length > 0 ? +(subtotal + deliveryFee + tax).toFixed(2) : 0;

    return (
        <main className="min-h-screen min-w-screen bg-[#faf7f5] text-gray-800">
            <section className="mx-auto min-h-screen w-full max-w-md px-4 pt-20 pb-8">
                <div className="overflow-hidden rounded-[32px] border border-white/80 bg-white/95 shadow-[0_20px_60px_rgba(226,55,68,0.08),0_4px_16px_rgba(0,0,0,0.06)] backdrop-blur">
                    <div className="flex items-center justify-between px-4 pt-4 pb-3 border-b border-red-50">
                        <button
                            type="button"
                            onClick={() => window.history.back()}
                            className="rounded-full border border-gray-200 bg-white px-4 py-2 text-sm font-semibold text-gray-700 shadow-sm transition hover:bg-gray-50"
                        >
                            Back
                        </button>

                        <span className="rounded-full bg-red-50 px-3 py-1 text-xs font-bold text-red-500">
                            Checkout
                        </span>
                    </div>

                    <div className="px-5 pt-5 pb-8">
                        <div className="mb-6">
                            <p className="mb-2 text-[10px] font-bold uppercase tracking-[0.18em] text-red-500">
                                Order Summary
                            </p>
                            <h1 className="text-[30px] font-extrabold leading-[1.08] tracking-[-0.025em] text-slate-900">
                                Review your order
                            </h1>
                            <p className="mt-2 text-[14px] leading-7 text-slate-500">
                                Check your items, remove anything you do not want, and place the order when ready.
                            </p>
                        </div>

                        <div className="rounded-[20px] border border-red-100 bg-gradient-to-br from-white to-red-50/40 p-4 shadow-[0_4px_20px_rgba(226,55,68,0.07)]">
                            {items.length === 0 ? (
                                <div className="rounded-[22px] border border-dashed border-gray-300 bg-white px-4 py-10 text-center shadow-sm">
                                    <p className="text-lg font-bold text-slate-900">Your cart is empty</p>
                                    <p className="mt-2 text-sm leading-6 text-slate-500">
                                        Please add items from the menu to continue.
                                    </p>
                                </div>
                            ) : (
                                <>
                                    <div className="space-y-3">
                                        {items.map((item: any) => (
                                            <div
                                                key={item.id}
                                                className="rounded-[18px] border border-[#f0e8e8] bg-white px-4 py-4 shadow-sm"
                                            >
                                                <div className="flex items-start justify-between gap-3">
                                                    <div>
                                                        <p className="text-[15px] font-bold text-slate-900">
                                                            {item.name}
                                                        </p>
                                                        <p className="mt-1 text-[13px] text-slate-500">
                                                            Quantity: {item.quantity || 1}
                                                        </p>
                                                        {item.restaurantName && (
                                                            <p className="mt-1 text-[12px] text-slate-400">
                                                                From {item.restaurantName}
                                                            </p>
                                                        )}
                                                    </div>

                                                    <div className="text-right">
                                                        <span className="block text-[14px] font-bold text-slate-800">
                                                            ${(item.price * (item.quantity || 1)).toFixed(2)}
                                                        </span>
                                                        <button
                                                            type="button"
                                                            onClick={() => {
                                                                const updatedItems = items.filter(
                                                                    (cartItem: any) => cartItem.id !== item.id
                                                                );
                                                                localStorage.setItem("cartItems", JSON.stringify(updatedItems));
                                                                window.location.reload();
                                                            }}
                                                            className="mt-2 text-[12px] font-semibold text-red-500 hover:text-red-600"
                                                        >
                                                            Remove
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>
                                        ))}
                                    </div>

                                    <div className="mt-5 rounded-[18px] border border-[#f0e8e8] bg-white p-4 shadow-sm">
                                        <div className="flex items-center justify-between py-2 text-[13px] text-slate-500">
                                            <span>Subtotal</span>
                                            <span className="font-semibold text-slate-900">${subtotal.toFixed(2)}</span>
                                        </div>
                                        <div className="flex items-center justify-between py-2 text-[13px] text-slate-500">
                                            <span>Delivery fee</span>
                                            <span className="font-semibold text-slate-900">${deliveryFee.toFixed(2)}</span>
                                        </div>
                                        <div className="flex items-center justify-between py-2 text-[13px] text-slate-500">
                                            <span>Tax</span>
                                            <span className="font-semibold text-slate-900">${tax.toFixed(2)}</span>
                                        </div>
                                        <div className="mt-2 flex items-center justify-between border-t border-red-50 pt-4">
                                            <span className="text-base font-bold text-slate-900">Total</span>
                                            <span className="text-xl font-extrabold text-red-500">
                                                ${total.toFixed(2)}
                                            </span>
                                        </div>
                                    </div>

                                    <button
                                        type="button"
                                        onClick={() => {
                                            const existingOrders = JSON.parse(localStorage.getItem("placedOrders") || "[]");

                                            const newOrder = {
                                                id: Date.now(),
                                                items,
                                                status: "Preparing",
                                                eta: "18 mins",
                                                restaurant: items[0]?.restaurantName || "Selected Restaurant",
                                            };

                                            localStorage.setItem(
                                                "placedOrders",
                                                JSON.stringify([newOrder, ...existingOrders])
                                            );
                                            localStorage.removeItem("cartItems");
                                            window.location.href = "/confirm";
                                        }}
                                        className="mt-5 w-full rounded-[14px] px-5 py-[14px] text-[15px] font-bold text-white shadow-[0_8px_24px_rgba(226,55,68,0.30)] transition-all hover:-translate-y-0.5 hover:shadow-[0_12px_32px_rgba(226,55,68,0.38)] active:scale-[0.985]"
                                        style={{ background: "linear-gradient(135deg,#e23744 0%,#c62b36 100%)" }}
                                    >
                                        Place Order
                                    </button>
                                </>
                            )}
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}

export default Checkout;