"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError("");
    setLoading(true);

    const res = await fetch("/api/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ password }),
    });

    if (res.ok) {
      router.push("/");
      router.refresh();
    } else {
      setError("비밀번호가 올바르지 않습니다");
      setLoading(false);
    }
  }

  return (
    <div className="min-h-screen bg-[#0f111a] flex items-center justify-center p-4">
      <form
        onSubmit={handleSubmit}
        className="bg-[#1a1d2e] border border-[#2a2d3e] rounded-2xl p-8 w-full max-w-sm text-center"
      >
        <h1 className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent mb-2">
          Project Dashboard
        </h1>
        <p className="text-slate-400 text-sm mb-6">비밀번호를 입력하세요</p>

        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
          autoFocus
          className="w-full px-4 py-3 rounded-xl bg-[#0f111a] border border-[#2a2d3e] text-white text-center text-base focus:border-purple-500 focus:outline-none mb-4"
        />

        <button
          type="submit"
          disabled={loading}
          className="w-full py-3 rounded-xl bg-purple-600 hover:bg-purple-500 text-white font-semibold text-base transition disabled:opacity-50"
        >
          {loading ? "..." : "로그인"}
        </button>

        {error && (
          <p className="text-red-400 text-sm mt-3">{error}</p>
        )}
      </form>
    </div>
  );
}
