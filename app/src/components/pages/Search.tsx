import { useMemo, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { FunnelIcon, MapPinIcon, StarIcon } from "@heroicons/react/24/solid";

type Restaurant = {
    id: number;
    name: string;
    image: string;
    cuisine: string;
    rating: number;
    price: string;
    distance: string;
    matchReason: string;
    topPick?: boolean;
};

const allRestaurants: Restaurant[] = [
    {
        id: 1,
        name: "Luna Bistro",
        image: "/photos/Restaurant2.jpg",
        cuisine: "Italian",
        rating: 4.8,
        price: "$$",
        distance: "1.2 mi",
        matchReason: "Cozy atmosphere and highly rated comfort dishes.",
        topPick: true,
    },
    {
        id: 2,
        name: "Ember Table",
        image: "/photos/Restaurant1.jpg",
        cuisine: "Contemporary",
        rating: 4.6,
        price: "$$$",
        distance: "2.0 mi",
        matchReason: "Great for a relaxed dinner and elevated plates.",
    },
    {
        id: 3,
        name: "Saffron House",
        image: "/photos/Restaurant3.jpg",
        cuisine: "Indian",
        rating: 4.7,
        price: "$$",
        distance: "1.8 mi",
        matchReason: "Flavorful food with fast service and warm portions.",
    },
    {
        id: 4,
        name: "Green Bowl",
        image: "/photos/Restaurant4.jpg",
        cuisine: "Healthy",
        rating: 4.5,
        price: "$",
        distance: "0.9 mi",
        matchReason: "Fresh, lighter options for quick meals.",
    },
    {
        id: 5,
        name: "Ramen House",
        image: "/photos/Restaurant1.jpg",
        cuisine: "Japanese Ramen",
        rating: 4.7,
        price: "$$",
        distance: "1.4 mi",
        matchReason: "Rich broth, cozy bowls, and satisfying late-night comfort food.",
    },
    {
        id: 6,
        name: "Harvest Kitchen",
        image: "/photos/Restaurant4.jpg",
        cuisine: "Healthy Bowls & Salads",
        rating: 4.4,
        price: "$",
        distance: "0.7 mi",
        matchReason: "Fresh ingredients, lighter meals, and quick healthy lunch options.",
    },
];

export default function Search() {
    const [searchParams] = useSearchParams();
    const navigate = useNavigate();
    const initialQuery = searchParams.get("q") || "";
    const [query, setQuery] = useState(initialQuery);

    const restaurants = useMemo(() => {
        return allRestaurants;
    }, []);

    const topPick =
        restaurants.find((restaurant) => restaurant.topPick) || restaurants[0];

    const otherResults = restaurants.filter(
        (restaurant) => restaurant.id !== topPick?.id
    );

    const handleSearch = () => {
        const trimmed = query.trim();
        navigate(`/search?q=${encodeURIComponent(trimmed)}`);
    };

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
                            Results
                        </span>
                    </div>

                    <div className="px-5 pt-5 pb-6">
                        <div className="mb-6">
                            <p className="mb-2 text-[10px] font-bold uppercase tracking-[0.18em] text-red-500">
                                Search Results
                            </p>
                            <h1 className="text-[30px] font-extrabold leading-[1.08] tracking-[-0.025em] text-slate-900">
                                Top pick for you
                            </h1>
                            <p className="mt-2 text-[14px] leading-7 text-slate-500">
                                {initialQuery
                                    ? `Results for "${initialQuery}"`
                                    : "Smart recommendations based on your search."}
                            </p>
                        </div>

                        <div className="rounded-[20px] border border-red-100 bg-gradient-to-br from-white to-red-50/40 p-4 shadow-[0_4px_20px_rgba(226,55,68,0.07)]">
                            <div className="flex items-center justify-between mb-3">
                                <p className="text-[11px] font-bold text-slate-600 tracking-wide">
                                    Search Input
                                </p>
                                <span className="text-[9px] font-bold tracking-[0.1em] uppercase text-red-500 bg-red-50 border border-red-100 rounded-full px-2.5 py-1">
                                    Refine
                                </span>
                            </div>

                            <input
                                value={query}
                                onChange={(e) => setQuery(e.target.value)}
                                placeholder="Describe what you want!"
                                className="w-full rounded-[14px] border border-slate-100 bg-[#fafafa] px-4 py-3 text-[14px] text-slate-900 shadow-inner outline-none transition placeholder:text-slate-300 focus:border-red-200 focus:bg-white"
                            />

                            <div className="mt-3 grid grid-cols-2 gap-3">
                                <button
                                    type="button"
                                    className="flex items-center justify-center gap-2 rounded-[14px] border border-[#f0e8e8] bg-white px-4 py-3 text-[13px] font-semibold text-slate-600 shadow-sm"
                                >
                                    <FunnelIcon className="h-4 w-4 text-red-500" />
                                    Filter
                                </button>

                                <button
                                    type="button"
                                    onClick={handleSearch}
                                    className="rounded-[14px] px-4 py-3 text-[14px] font-bold text-white shadow-[0_8px_24px_rgba(226,55,68,0.30)] transition-all hover:-translate-y-0.5 hover:shadow-[0_12px_32px_rgba(226,55,68,0.38)] active:scale-[0.985]"
                                    style={{ background: "linear-gradient(135deg,#e23744 0%,#c62b36 100%)" }}
                                >
                                    Search
                                </button>
                            </div>
                        </div>

                        {restaurants.length === 0 ? (
                            <div className="mt-6 rounded-[24px] border border-dashed border-gray-300 bg-gray-50 px-4 py-12 text-center">
                                <p className="text-lg font-bold text-slate-900">No results found</p>
                                <p className="mt-2 text-sm leading-6 text-slate-500">
                                    Try another search to discover a better match.
                                </p>
                            </div>
                        ) : (
                            <>
                                {topPick && (
                                    <button
                                        type="button"
                                        onClick={() => navigate(`/menu?restaurantId=${topPick.id}`)}
                                        className="mt-6 w-full overflow-hidden rounded-[26px] border border-red-100 bg-white text-left shadow-[0_10px_30px_rgba(226,55,68,0.08)] transition hover:-translate-y-0.5"
                                    >
                                        <div className="relative">
                                            <img
                                                src={topPick.image}
                                                alt={topPick.name}
                                                className="h-48 w-full object-cover"
                                            />
                                            <div className="absolute left-4 top-4 rounded-full bg-white/95 px-3 py-1 text-[11px] font-bold uppercase tracking-wide text-red-500 shadow-sm">
                                                Top Pick
                                            </div>
                                        </div>

                                        <div className="p-4">
                                            <div className="flex items-start justify-between gap-3">
                                                <div>
                                                    <p className="text-xl font-bold text-slate-900">
                                                        {topPick.name}
                                                    </p>
                                                    <p className="mt-1 text-sm text-slate-500">
                                                        {topPick.cuisine}
                                                    </p>
                                                </div>

                                                <span className="rounded-full bg-red-50 px-3 py-1 text-xs font-bold text-red-500">
                                                    {topPick.price}
                                                </span>
                                            </div>

                                            <div className="mt-3 flex items-center gap-4 text-sm text-slate-600">
                                                <span className="flex items-center gap-1 font-semibold">
                                                    <StarIcon className="h-4 w-4 text-amber-400" />
                                                    {topPick.rating}
                                                </span>
                                                <span className="flex items-center gap-1">
                                                    <MapPinIcon className="h-4 w-4 text-red-400" />
                                                    {topPick.distance}
                                                </span>
                                            </div>

                                            <p className="mt-3 text-sm leading-6 text-slate-600">
                                                {topPick.matchReason}
                                            </p>
                                        </div>
                                    </button>
                                )}

                                <div className="mt-6">
                                    <div className="mb-3 flex items-center justify-between">
                                        <p className="text-sm font-bold text-slate-900">More options</p>
                                        <span className="text-xs font-semibold text-slate-400">
                                            {restaurants.length} results
                                        </span>
                                    </div>

                                    <div className="space-y-3">
                                        {otherResults.map((restaurant) => (
                                            <button
                                                key={restaurant.id}
                                                type="button"
                                                onClick={() => navigate(`/menu?restaurantId=${restaurant.id}`)}
                                                className="w-full rounded-[22px] border border-[#f0e8e8] bg-white p-3 text-left shadow-sm transition-all hover:-translate-y-px hover:border-red-200 hover:shadow-[0_6px_18px_rgba(226,55,68,0.08)]"
                                            >
                                                <div className="grid grid-cols-[92px_1fr] gap-3">
                                                    <img
                                                        src={restaurant.image}
                                                        alt={restaurant.name}
                                                        className="h-24 w-full rounded-[16px] object-cover"
                                                    />

                                                    <div className="min-w-0">
                                                        <div className="flex items-start justify-between gap-2">
                                                            <div>
                                                                <p className="text-[15px] font-bold text-slate-900">
                                                                    {restaurant.name}
                                                                </p>
                                                                <p className="mt-1 text-[13px] text-slate-500">
                                                                    {restaurant.cuisine}
                                                                </p>
                                                            </div>

                                                            <span className="rounded-full bg-red-50 px-2.5 py-1 text-[11px] font-bold text-red-500">
                                                                {restaurant.price}
                                                            </span>
                                                        </div>

                                                        <div className="mt-2 flex items-center gap-3 text-[13px] text-slate-600">
                                                            <span className="flex items-center gap-1 font-semibold">
                                                                <StarIcon className="h-4 w-4 text-amber-400" />
                                                                {restaurant.rating}
                                                            </span>
                                                            <span className="flex items-center gap-1">
                                                                <MapPinIcon className="h-4 w-4 text-red-400" />
                                                                {restaurant.distance}
                                                            </span>
                                                        </div>

                                                        <p className="mt-2 text-[12.5px] leading-5 text-slate-500">
                                                            {restaurant.matchReason}
                                                        </p>
                                                    </div>
                                                </div>
                                            </button>
                                        ))}
                                    </div>
                                </div>
                            </>
                        )}
                    </div>
                </div>
            </section>
        </main>
    );
}