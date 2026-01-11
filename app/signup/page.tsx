"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function SignUpPage() {
  const [form, setForm] = useState({ name: "", email: "", password: "" });
  const router = useRouter();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const res = await fetch("/api/auth/signup", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    });

    if (res.ok) {
      router.push("/login");
    } else {
      const error = await res.text();
      alert(error);
    }
  };

  return (
    <div className="bg-[rgb(18,29,35)] text-white">
      <p className="text-center text-3xl pb-8">Register for Booking </p>
    <form onSubmit={handleSubmit} className="flex flex-col gap-4 max-w-md mx-auto pb-3">
      <input
        name="name"
        placeholder="Name"
        onChange={handleChange}
        className="border p-2 rounded text-white"
        required
      />
      <input
        name="email"
        placeholder="Email"
        onChange={handleChange}
        className="border p-2 rounded text-white"
        required
      />
      <input
        type="password"
        name="password"
        placeholder="Password"
        onChange={handleChange}
        className="border p-2 rounded text-white"
        required
      />
      <button type="submit" className="bg-blue-600 text-white p-2 rounded">
        Sign Up
      </button>
    </form>
    <p className="text-center pb-8">If you have account you can <Link href="/login" className="underline text-blue-600">Sign in</Link></p>
    </div>
  );
}
