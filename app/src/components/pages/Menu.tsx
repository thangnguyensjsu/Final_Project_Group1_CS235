import { useMemo, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { MagnifyingGlassIcon, PlusIcon } from "@heroicons/react/24/outline";

type MenuItem = {
    id: number;
    name: string;
    price: number;
    image: string;
    description: string;
};

type RestaurantData = {
    id: number;
    name: string;
    image: string;
    cuisine: string;
    distance: string;
    badge?: string;
    description: string;
    menu: MenuItem[];
};

const restaurantMenus: RestaurantData[] = [
    {
        id: 1,
        name: "Luna Bistro",
        image: "/photos/Restaurant2.jpg",
        cuisine: "Italian Pizza & Pasta",
        distance: "1.2 mi away",
        badge: "Top Pick",
        description: "A warm, modern spot with comforting Italian favorites and polished plating.",
        menu: [
            { id: 1, name: "Truffle Pasta", price: 18, image: "/photos/Food1.jpg", description: "Creamy pasta with mushrooms, parmesan, and truffle oil." },
            { id: 2, name: "Margherita Pizza", price: 16, image: "/photos/Food2.jpg", description: "Wood-fired pizza with tomato, mozzarella, and basil." },
            { id: 3, name: "Tiramisu", price: 9, image: "/photos/Food4.jpg", description: "Classic coffee-forward dessert with cocoa finish." },
        ],
    },
    {
        id: 2,
        name: "Ember Table",
        image: "/photos/Restaurant1.jpg",
        cuisine: "Contemporary",
        distance: "2.0 mi away",
        description: "Elevated comfort dishes in a relaxed, modern setting.",
        menu: [
            { id: 21, name: "Roasted Chicken Plate", price: 19, image: "/photos/Food3.jpg", description: "Tender chicken with seasonal vegetables and jus." },
            { id: 22, name: "Smoked Fries", price: 8, image: "/photos/Food2.jpg", description: "Crispy fries with smoky seasoning and aioli." },
            { id: 23, name: "Chocolate Cake", price: 10, image: "/photos/Food4.jpg", description: "Rich dark chocolate cake with soft center." },
        ],
    },
    {
        id: 3,
        name: "Saffron House",
        image: "/photos/Restaurant3.jpg",
        cuisine: "Indian",
        distance: "1.8 mi away",
        description: "Warm spices, generous portions, and deeply satisfying comfort food.",
        menu: [
            { id: 31, name: "Chicken Biryani", price: 17, image: "/photos/Food1.jpg", description: "Fragrant rice, spiced chicken, and aromatic herbs." },
            { id: 32, name: "Paneer Butter Masala", price: 15, image: "/photos/Food3.jpg", description: "Creamy tomato gravy with soft paneer cubes." },
            { id: 33, name: "Garlic Naan", price: 5, image: "/photos/Food2.jpg", description: "Soft naan brushed with garlic butter." },
        ],
    },
    {
        id: 4,
        name: "Green Bowl",
        image: "/photos/Restaurant4.jpg",
        cuisine: "Healthy",
        distance: "0.9 mi away",
        description: "Fresh, lighter options for quick meals and healthy routines.",
        menu: [
            { id: 41, name: "Avocado Grain Bowl", price: 14, image: "/photos/Food3.jpg", description: "Quinoa, greens, avocado, chickpeas, and citrus dressing." },
            { id: 42, name: "Protein Salad", price: 13, image: "/photos/Food1.jpg", description: "Greens, seeds, grilled protein, and house vinaigrette." },
            { id: 43, name: "Green Smoothie", price: 7, image: "/photos/Food4.jpg", description: "Refreshing blended greens and tropical fruit." },
        ],
    },
    {
        id: 5,
        name: "Ramen House",
        image: "/photos/Restaurant1.jpg",
        cuisine: "Japanese Ramen",
        distance: "1.4 mi away",
        description: "Rich broths, cozy bowls, and satisfying late-night comfort food.",
        menu: [
            { id: 51, name: "Tonkotsu Ramen", price: 16, image: "/photos/Food1.jpg", description: "Slow-cooked creamy broth with noodles and chashu." },
            { id: 52, name: "Spicy Miso Ramen", price: 17, image: "/photos/Food2.jpg", description: "Deep umami broth with heat and tender toppings." },
            { id: 53, name: "Gyoza", price: 8, image: "/photos/Food4.jpg", description: "Pan-seared dumplings with savory filling." },
        ],
    },
    {
        id: 6,
        name: "Harvest Kitchen",
        image: "/photos/Restaurant4.jpg",
        cuisine: "Healthy Bowls & Salads",
        distance: "0.7 mi away",
        description: "Fresh ingredients, lighter meals, and quick healthy lunch options.",
        menu: [
            { id: 61, name: "Harvest Bowl", price: 13, image: "/photos/Food3.jpg", description: "Roasted veggies, grains, greens, and tahini drizzle." },
            { id: 62, name: "Citrus Salad", price: 12, image: "/photos/Food1.jpg", description: "Crunchy greens with citrus, nuts, and feta." },
            { id: 63, name: "Greek Yogurt Parfait", price: 6, image: "/photos/Food4.jpg", description: "Layered yogurt, berries, and granola." },
        ],
    },
];

function Menu() {
    const [searchParams] = useSearchParams();
    const restaurantId = Number(searchParams.get("restaurantId")) || 1;
    const restaurant =
        restaurantMenus.find((item) => item.id === restaurantId) || restaurantMenus[0];

    const [search, setSearch] = useState("");
    const [cart, setCart] = useState(() =>
        JSON.parse(localStorage.getItem("cartItems") || "[]")
    );

    const filteredItems = useMemo(() => {
        const q = search.trim().toLowerCase();
        if (!q) return restaurant.menu;
        return restaurant.menu.filter(
            (item) =>
                item.name.toLowerCase().includes(q) ||
                item.description.toLowerCase().includes(q)
        );
    }, [search, restaurant]);

    return (
        <main className="min-h-screen min-w-screen bg-transparent text-gray-800">
            <section className="mx-auto min-h-screen w-full max-w-md px-4 pt-20 pb-8">
                <div className="rounded-[32px] border border-white/80 bg-white/95 shadow-[0_20px_60px_rgba(226,55,68,0.08),0_4px_16px_rgba(0,0,0,0.06)] backdrop-blur">
                    <div className="flex items-center justify-between px-4 pt-4 pb-3 border-b border-red-50">
                        <button
                            type="button"
                            onClick={() => window.history.back()}
                            className="rounded-full border border-gray-200 bg-white px-4 py-2 text-sm font-semibold text-gray-700 shadow-sm transition hover:bg-gray-50"
                        >
                            Back
                        </button>

                        <span className="rounded-full bg-red-50 px-3 py-1 text-xs font-bold text-red-500">
                            {restaurant.badge || "Menu"}
                        </span>
                    </div>

                    <div className="overflow-hidden">
                        <img
                            src={restaurant.image}
                            alt={restaurant.name}
                            className="h-52 w-full object-cover"
                        />
                    </div>

                    <div className="px-4 pt-5 pb-6">
                        <div className="flex items-start justify-between gap-3">
                            <div>
                                <p className="text-2xl font-bold text-slate-900">{restaurant.name}</p>
                                <p className="mt-1 text-sm text-slate-500">
                                    {restaurant.cuisine} • {restaurant.distance}
                                </p>
                            </div>
                        </div>

                        <p className="mt-3 text-sm leading-6 text-slate-600">
                            {restaurant.description}
                        </p>

                        <div className="mt-5 rounded-[20px] border border-red-100 bg-gradient-to-br from-white to-red-50/40 p-4 shadow-[0_4px_20px_rgba(226,55,68,0.07)]">
                            <div className="flex items-center gap-2 rounded-[14px] border border-slate-100 bg-[#fafafa] px-3 py-3 shadow-inner">
                                <MagnifyingGlassIcon className="h-5 w-5 text-red-400" />
                                <input
                                    value={search}
                                    onChange={(e) => setSearch(e.target.value)}
                                    placeholder="Search the menu"
                                    className="w-full bg-transparent text-sm text-slate-900 outline-none placeholder:text-slate-300"
                                />
                            </div>
                        </div>

                        <div className="mt-6 space-y-3">
                            {filteredItems.map((item) => (
                                <div
                                    key={item.id}
                                    className="rounded-[22px] border border-[#f0e8e8] bg-white p-3 shadow-sm"
                                >
                                    <div className="grid grid-cols-[92px_1fr] gap-3">
                                        <img
                                            src={item.image}
                                            alt={item.name}
                                            className="h-24 w-full rounded-[16px] object-cover"
                                        />

                                        <div className="flex min-w-0 flex-col justify-between">
                                            <div>
                                                <div className="flex items-start justify-between gap-2">
                                                    <p className="text-[15px] font-bold text-slate-900">
                                                        {item.name}
                                                    </p>
                                                    <span className="rounded-full bg-red-50 px-2.5 py-1 text-[11px] font-bold text-red-500">
                                                        ${item.price}
                                                    </span>
                                                </div>

                                                <p className="mt-2 text-[12.5px] leading-5 text-slate-500">
                                                    {item.description}
                                                </p>
                                            </div>

                                            <div className="mt-3 flex justify-end">
                                                {(() => {
                                                    const cartItem = cart.find((cartEntry: any) => cartEntry.id === item.id);
                                                    const quantity = cartItem?.quantity || 0;

                                                    if (quantity === 0) {
                                                        return (
                                                            <button
                                                                type="button"
                                                                onClick={() => {
                                                                    const existingCart = JSON.parse(localStorage.getItem("cartItems") || "[]");
                                                                    const existingItemIndex = existingCart.findIndex((cartItem: any) => cartItem.id === item.id);

                                                                    let updatedCart;
                                                                    if (existingItemIndex >= 0) {
                                                                        updatedCart = [...existingCart];
                                                                        updatedCart[existingItemIndex].quantity += 1;
                                                                    } else {
                                                                        updatedCart = [
                                                                            ...existingCart,
                                                                            { ...item, quantity: 1, restaurantName: restaurant.name },
                                                                        ];
                                                                    }

                                                                    localStorage.setItem("cartItems", JSON.stringify(updatedCart));
                                                                    setCart(updatedCart);
                                                                }}
                                                                className="inline-flex items-center gap-2 rounded-full bg-[#e23744] px-4 py-2 text-sm font-semibold text-white shadow-sm transition hover:brightness-105"
                                                            >
                                                                <PlusIcon className="h-4 w-4" />
                                                                Add
                                                            </button>
                                                        );
                                                    }

                                                    return (
                                                        <div className="inline-flex items-center gap-3 rounded-full bg-[#e23744] px-4 py-2 text-sm font-semibold text-white shadow-sm">
                                                            <button
                                                                type="button"
                                                                onClick={() => {
                                                                    const existingCart = JSON.parse(localStorage.getItem("cartItems") || "[]");
                                                                    const updatedCart = existingCart
                                                                        .map((cartItem: any) =>
                                                                            cartItem.id === item.id
                                                                                ? { ...cartItem, quantity: cartItem.quantity - 1 }
                                                                                : cartItem
                                                                        )
                                                                        .filter((cartItem: any) => cartItem.quantity > 0);

                                                                    localStorage.setItem("cartItems", JSON.stringify(updatedCart));
                                                                    setCart(updatedCart);
                                                                }}
                                                                className="text-lg leading-none"
                                                            >
                                                                -
                                                            </button>

                                                            <span>{quantity}</span>

                                                            <button
                                                                type="button"
                                                                onClick={() => {
                                                                    const existingCart = JSON.parse(localStorage.getItem("cartItems") || "[]");
                                                                    const updatedCart = existingCart.map((cartItem: any) =>
                                                                        cartItem.id === item.id
                                                                            ? { ...cartItem, quantity: cartItem.quantity + 1 }
                                                                            : cartItem
                                                                    );

                                                                    localStorage.setItem("cartItems", JSON.stringify(updatedCart));
                                                                    setCart(updatedCart);
                                                                }}
                                                                className="text-lg leading-none"
                                                            >
                                                                +
                                                            </button>
                                                        </div>
                                                    );
                                                })()}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}

                            {filteredItems.length === 0 && (
                                <div className="rounded-[24px] border border-dashed border-gray-300 bg-gray-50 px-4 py-8 text-center text-sm text-slate-500">
                                    No menu items match your search.
                                </div>
                            )}
                        </div>

                        <div className="pt-6">
                            <button
                                type="button"
                                onClick={() => (window.location.href = "/checkout")}
                                className="w-full rounded-[14px] px-5 py-[14px] text-[15px] font-bold text-white shadow-[0_8px_24px_rgba(226,55,68,0.30)] transition-all hover:-translate-y-0.5 hover:shadow-[0_12px_32px_rgba(226,55,68,0.38)] active:scale-[0.985]"
                                style={{ background: "linear-gradient(135deg,#e23744 0%,#c62b36 100%)" }}
                            >
                                Continue to Checkout
                            </button>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}

export default Menu;