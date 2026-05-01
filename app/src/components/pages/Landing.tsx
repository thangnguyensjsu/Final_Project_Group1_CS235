import { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../layout/Navbar";

const quickIdeas = [
    { label: "Cheap comfort food near me", emoji: "🍜" },
    { label: "Cozy Italian dinner", emoji: "🍝" },
    { label: "Healthy lunch nearby", emoji: "🥗" },
    { label: "Best ramen tonight", emoji: "🍱" },
];

const features = [
    {
        tag: "Top Pick",
        title: "One strong option first.",
        desc: "No decision fatigue. Best match, not a wall of choices.",
        accent: "#e23744",
    },
    {
        tag: "Natural",
        title: "Search like you speak.",
        desc: "Type how you think. We'll understand.",
        accent: "#f97316",
    },
    {
        tag: "Calm UX",
        title: "Less scrolling, less stress.",
        desc: "Quiet interface. Fast, focused results.",
        accent: "#ec4899",
    },
];

export default function Landing() {
    const [query, setQuery] = useState("");
    const [focused, setFocused] = useState(false);
    const navigate = useNavigate();
    const textareaRef = useRef(null);

    const handleSearch = () => {
        const trimmed = query.trim();
        if (!trimmed) return;
        navigate(`/search?q=${encodeURIComponent(trimmed)}`);
    };

    const handleKey = (e) => {
        if (e.key === "Enter" && !e.shiftKey) {
            e.preventDefault();
            handleSearch();
        }
    };

    return (
        <main className="min-h-screen min-w-screen bg-[#faf7f5] text-gray-800">
            <Navbar />

            <section className="mx-auto min-h-screen w-full max-w-md px-4 pt-20 pb-8">
                <div className="overflow-hidden rounded-[32px] border border-white/80 bg-white/95 shadow-[0_20px_60px_rgba(226,55,68,0.08),0_4px_16px_rgba(0,0,0,0.06)] backdrop-blur">

                    {/* Hero */}
                    <div className="bg-gradient-to-b from-red-50/60 via-white to-white px-5 pt-8 pb-7 border-b border-red-50">
                        {/* Live pill */}
                        <div className="inline-flex items-center gap-2 bg-red-50 border border-red-100 rounded-full px-3 py-1.5 mb-5">
                            <span className="w-1.5 h-1.5 rounded-full bg-red-500 animate-pulse" />
                            <span className="text-[10px] font-bold tracking-widest text-red-500 uppercase">Smart Search</span>
                        </div>

                        <h1 className="text-[38px] font-extrabold leading-[1.07] tracking-[-0.025em] text-slate-900 mb-3">
                            Find your next{" "}
                            <span className="text-red-500 relative inline-block">
                                meal faster
                                <span className="absolute bottom-0.5 left-0 right-0 h-[3px] bg-red-200 rounded-full -z-10" />
                            </span>
                        </h1>

                        <p className="text-[14px] leading-[1.7] text-slate-500 max-w-[30ch]">
                            Describe what you want in plain language and get one strong recommendation first.
                        </p>
                    </div>

                    {/* Search */}
                    <div className="px-5 pt-5 pb-0">
                        <div
                            className={[
                                "relative overflow-hidden rounded-[24px] border p-4 transition-all duration-300",
                                focused
                                    ? "border-red-300 bg-white shadow-[0_10px_36px_rgba(226,55,68,0.14),0_0_0_4px_rgba(226,55,68,0.06)]"
                                    : "border-red-100 bg-gradient-to-br from-white via-[#fffafa] to-red-50/70 shadow-[0_10px_28px_rgba(226,55,68,0.08)]",
                            ].join(" ")}
                        >
                            <div className="pointer-events-none absolute inset-x-0 top-0 h-16 bg-gradient-to-b from-red-50/70 to-transparent" />

                            <div className="relative mb-3 flex items-center justify-between">
                                <div>
                                    <p className="text-[13px] font-bold text-slate-700">
                                        What are you craving?
                                    </p>
                                    <p className="mt-1 text-[11px] text-slate-400">
                                        Describe your craving naturally
                                    </p>
                                </div>

                                <span className="rounded-full border border-red-100 bg-white px-3 py-1 text-[9px] font-extrabold tracking-[0.14em] uppercase text-red-500 shadow-sm">
                                    Smart Search
                                </span>
                            </div>

                            <div className="relative">
                                <textarea
                                    ref={textareaRef}
                                    value={query}
                                    onChange={(e) => setQuery(e.target.value)}
                                    onFocus={() => setFocused(true)}
                                    onBlur={() => setFocused(false)}
                                    onKeyDown={handleKey}
                                    placeholder="Describe what you want!"
                                    className="min-h-[118px] w-full resize-none rounded-[18px] border border-slate-200/80 bg-white px-4 py-4 text-[15px] leading-relaxed text-slate-900 shadow-[inset_0_1px_2px_rgba(15,23,42,0.04),0_6px_16px_rgba(15,23,42,0.04)] outline-none transition placeholder:text-slate-300 focus:border-red-200"
                                />

                                <div className="pointer-events-none absolute inset-x-4 bottom-3 h-px bg-gradient-to-r from-transparent via-red-100 to-transparent" />
                            </div>

                            <button
                                type="button"
                                onClick={handleSearch}
                                className="mt-4 w-full rounded-[16px] px-5 py-[15px] text-[15px] font-extrabold text-white shadow-[0_12px_28px_rgba(226,55,68,0.28)] transition-all hover:-translate-y-0.5 hover:shadow-[0_16px_36px_rgba(226,55,68,0.36)] active:scale-[0.985] flex items-center justify-center gap-2 group"
                                style={{ background: "linear-gradient(135deg,#e23744 0%,#c62b36 55%,#b91c2c 100%)" }}
                            >
                                <span>Search</span>
                                <span className="text-lg transition-transform duration-200 group-hover:translate-x-1">→</span>
                            </button>
                        </div>

                        {/* Quick ideas */}
                        <div className="mt-5">
                            <div className="flex items-center justify-between mb-3">
                                <p className="text-[11px] font-bold uppercase tracking-[0.08em] text-slate-400">Quick ideas</p>
                                <span className="text-[11px] font-semibold text-red-400">Tap to autofill</span>
                            </div>
                            <div className="flex flex-wrap gap-2 pb-1">
                                {quickIdeas.map((idea) => (
                                    <button
                                        key={idea.label}
                                        type="button"
                                        onClick={() => {
                                            setQuery(idea.label);
                                            textareaRef.current?.focus();
                                        }}
                                        className="flex items-center gap-1.5 rounded-full border-[1.5px] border-[#f0e8e8] bg-white px-3.5 py-2 text-[12.5px] font-medium text-slate-600 shadow-sm transition-all hover:-translate-y-px hover:border-red-400 hover:bg-red-50 hover:text-red-500 hover:shadow-[0_4px_12px_rgba(226,55,68,0.12)]"
                                    >
                                        <span>{idea.emoji}</span>
                                        {idea.label}
                                    </button>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Feature cards */}
                    <div className="mt-6 grid grid-cols-3 gap-2.5 px-5">
                        {features.map((f) => (
                            <div
                                key={f.tag}
                                className="relative overflow-hidden rounded-[16px] border border-red-50 bg-white p-3.5 shadow-sm transition-all hover:-translate-y-0.5 hover:shadow-md"
                            >
                                <div
                                    className="absolute top-0 left-0 right-0 h-[3px] rounded-t-[16px]"
                                    style={{ background: f.accent }}
                                />
                                <p
                                    className="mt-1 text-[8.5px] font-extrabold uppercase tracking-[0.14em] mb-1.5"
                                    style={{ color: f.accent }}
                                >
                                    {f.tag}
                                </p>
                                <p className="text-[10.5px] font-bold text-slate-800 leading-[1.35] mb-1">{f.title}</p>
                                <p className="text-[9.5px] text-slate-400 leading-[1.55]">{f.desc}</p>
                            </div>
                        ))}
                    </div>

                    {/* Footer */}
                    <div className="flex items-center justify-between px-5 py-4 mt-4 border-t border-red-50">
                        <span className="text-[12px] font-bold tracking-[0.02em] text-slate-600">
                            Crafted with care @ SJSU
                        </span>
                        <div className="flex items-center gap-1.5 text-[10.5px] font-semibold text-slate-400">
                            <span className="w-1.5 h-1.5 rounded-full bg-green-400 shadow-[0_0_0_2px_rgba(34,197,94,0.2)]" />
                            Live near you
                        </div>
                    </div>

                </div>
            </section>
        </main>
    );
}