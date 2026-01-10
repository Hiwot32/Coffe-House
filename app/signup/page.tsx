"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";

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
      router.push("/booking");
    } else {
      const error = await res.text();
      alert(error);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4 max-w-md mx-auto mt-20">
      <input
        name="name"
        placeholder="Name"
        onChange={handleChange}
        className="border p-2 rounded"
      />
      <input
        name="email"
        placeholder="Email"
        onChange={handleChange}
        className="border p-2 rounded"
      />
      <input
        type="password"
        name="password"
        placeholder="Password"
        onChange={handleChange}
        className="border p-2 rounded"
      />
      <button type="submit" className="bg-blue-600 text-white p-2 rounded">
        Sign Up
      </button>
    </form>
  );
}
