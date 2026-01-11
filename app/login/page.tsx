"use client";
import { useState } from "react";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const res = await signIn("credentials", {
      redirect: false,
      email,
      password,
    });

    if (res?.error) setError("Invalid email or password");
    else router.push("/booking");
  };

  return (
    <div className="bg-[rgb(18,29,35)] text-white py-10">
      <p className="text-2xl text-center">Sign in first</p>
    <form onSubmit={handleSubmit} className="flex flex-col gap-4 max-w-md mx-auto mt-8">
      {error && <p className="text-red-600">{error}</p>}
      <input type="email" className="border mb-3 py-2" placeholder="Email" required value={email} onChange={e => setEmail(e.target.value)} />
      <input type="password" className="border mb-3 py-2" placeholder="Password" required value={password} onChange={e => setPassword(e.target.value)} />
      <button type="submit" className="bg-blue-600 text-white p-2 rounded">Login</button>
    </form>

    <p className="text-center py-3">If you do not have account <Link href="/signup" className="text-blue-600 underline">Sign Up</Link></p>
    </div>
  );
}
