import { useState } from "react";
import Navbar from "../layout/Navbar";

function Register() {
    const [form, setForm] = useState({
        firstName: "",
        email: "",
        password: "",
        confirmPassword: "",
        agreed: false,
    });

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement>
    ) => {
        const { name, value, type, checked } = e.target;
        setForm((prev) => ({
            ...prev,
            [name]: type === "checkbox" ? checked : value,
        }));
    };

    return (
        <main className="min-h-screen min-w-screen bg-transparent text-gray-800">

            <section className="mx-auto min-h-screen w-full max-w-md px-4 pt-20 pb-8">
                <div className="rounded-[32px] border border-white/60 bg-white/90 shadow-[0_20px_60px_rgba(15,23,42,0.08)] backdrop-blur">
                    <div className="flex items-center justify-between px-4 pt-4 pb-3">
                        <button
                            type="button"
                            onClick={() => window.history.back()}
                            className="rounded-full border border-gray-200 bg-white px-4 py-2 text-sm font-semibold text-gray-700 shadow-sm transition hover:bg-gray-50"
                        >
                            Back
                        </button>

                        <span className="rounded-full bg-red-50 px-3 py-1 text-xs font-bold text-red-500">
                            Account
                        </span>
                    </div>
                    <div className="px-5 pt-8 pb-8">
                        <div className="mb-8">
                            <p className="mb-2 text-xs font-bold uppercase tracking-[0.22em] text-red-500">
                                Create account
                            </p>
                            <h1 className="text-3xl font-bold leading-tight text-gray-900">
                                Join BiteDecide
                            </h1>
                            <p className="mt-3 text-[15px] leading-7 text-gray-600">
                                Save preferences, place orders faster, and keep your food choices simple.
                            </p>
                        </div>

                        <div className="rounded-[28px] border border-red-100 bg-gradient-to-br from-white to-red-50/60 p-4 shadow-[0_10px_30px_rgba(226,55,68,0.08)]">
                            <form className="space-y-4">
                                <div>
                                    <label className="mb-2 block text-sm font-semibold text-gray-700">
                                        First Name
                                    </label>
                                    <input
                                        name="firstName"
                                        type="text"
                                        value={form.firstName}
                                        onChange={handleChange}
                                        placeholder="Enter your first name"
                                        className="w-full rounded-2xl border border-gray-200 bg-white px-4 py-3 text-sm text-gray-900 shadow-sm outline-none focus:border-red-300"
                                    />
                                </div>

                                <div>
                                    <label className="mb-2 block text-sm font-semibold text-gray-700">
                                        Email Address
                                    </label>
                                    <input
                                        name="email"
                                        type="email"
                                        value={form.email}
                                        onChange={handleChange}
                                        placeholder="Enter your email"
                                        className="w-full rounded-2xl border border-gray-200 bg-white px-4 py-3 text-sm text-gray-900 shadow-sm outline-none focus:border-red-300"
                                    />
                                </div>

                                <div>
                                    <label className="mb-2 block text-sm font-semibold text-gray-700">
                                        Password
                                    </label>
                                    <input
                                        name="password"
                                        type="password"
                                        value={form.password}
                                        onChange={handleChange}
                                        placeholder="Create a password"
                                        className="w-full rounded-2xl border border-gray-200 bg-white px-4 py-3 text-sm text-gray-900 shadow-sm outline-none focus:border-red-300"
                                    />
                                </div>

                                <div>
                                    <label className="mb-2 block text-sm font-semibold text-gray-700">
                                        Confirm Password
                                    </label>
                                    <input
                                        name="confirmPassword"
                                        type="password"
                                        value={form.confirmPassword}
                                        onChange={handleChange}
                                        placeholder="Confirm your password"
                                        className="w-full rounded-2xl border border-gray-200 bg-white px-4 py-3 text-sm text-gray-900 shadow-sm outline-none focus:border-red-300"
                                    />
                                </div>

                                <label className="flex items-start gap-3 rounded-2xl border border-gray-200 bg-white px-4 py-3 shadow-sm">
                                    <input
                                        name="agreed"
                                        type="checkbox"
                                        checked={form.agreed}
                                        onChange={handleChange}
                                        className="mt-1 h-4 w-4 rounded border-gray-300"
                                    />
                                    <span className="text-sm leading-6 text-gray-700">
                                        I have read and agreed to the{" "}
                                        <span className="font-semibold text-red-500">
                                            Terms of Service
                                        </span>
                                    </span>
                                </label>

                                <button
                                    type="button"
                                    className="w-full rounded-2xl bg-[#e23744] px-5 py-4 text-base font-semibold text-white shadow-[0_12px_24px_rgba(226,55,68,0.28)] transition hover:brightness-105"
                                >
                                    Create Account
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}

export default Register;