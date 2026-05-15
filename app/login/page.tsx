"use client";

import React, { useState } from "react";
import { X } from "lucide-react";

export default function LoginPage() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();

    console.log("USERNAME:", username);
    console.log("PASSWORD:", password);

    alert(`ล็อกอินด้วยชื่อ ${username}`);
  };

  return (
    <main className="min-h-screen bg-[#02040a] text-white flex items-center justify-center overflow-hidden relative">

      {/* BACKGROUND */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[url('/images/8022.png')] bg-cover bg-center opacity-20 blur-sm scale-105" />
        <div className="absolute top-0 left-0 w-[60%] h-[60%] bg-cyan-500/10 blur-[140px]" />
        <div className="absolute bottom-0 right-0 w-[60%] h-[60%] bg-purple-500/10 blur-[140px]" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/30 to-black/80" />
      </div>

      {/* LOGIN CARD */}
      <div className="relative z-10 w-full max-w-md px-6">

        <div className="
          bg-white/5
          border border-white/10
          backdrop-blur-2xl
          rounded-3xl
          p-8
          shadow-[0_0_50px_rgba(34,211,238,0.15)]
        ">
          {/* CLOSE BUTTON */}
          <a
            href="/"
            className="
              absolute top-5 right-5
              w-10 h-10
              rounded-xl
              bg-white/5
              border border-white/10
              flex items-center justify-center
              hover:bg-red-500/20
              hover:border-red-400/40
              hover:scale-110
              transition-all duration-300
            "
          >
            <X size={18} />
          </a>
          {/* LOGO */}
          <div className="text-center mb-8">

            <h1 className="
              text-4xl font-black
              bg-gradient-to-r from-cyan-300 via-white to-purple-400
              bg-clip-text text-transparent
              drop-shadow-[0_0_25px_rgba(34,211,238,0.35)]
            ">
              MADICRAFT
            </h1>

            <p className="
              text-zinc-400 text-sm mt-2
              tracking-[0.25em] uppercase
            ">
              Java & Bedrock
            </p>

          </div>

          {/* FORM */}
          <form onSubmit={handleLogin} className="space-y-5">

            {/* USERNAME */}
            <div>

              <label className="text-sm text-zinc-300 mb-2 block">
                ชื่อในเกม Minecraft
              </label>

              <input
                type="text"
                placeholder="เช่น MadiCraft"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="
                  w-full px-5 py-4 rounded-2xl
                  bg-white/5
                  border border-white/10
                  outline-none
                  focus:border-cyan-400/50
                  focus:bg-white/10
                  transition-all duration-300
                  placeholder:text-zinc-500
                "
              />

            </div>

            {/* PASSWORD */}
            <div>

              <label className="text-sm text-zinc-300 mb-2 block">
                รหัสผ่านเซิร์ฟเวอร์
              </label>

              <input
                type="password"
                placeholder="••••••••"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="
                  w-full px-5 py-4 rounded-2xl
                  bg-white/5
                  border border-white/10
                  outline-none
                  focus:border-cyan-400/50
                  focus:bg-white/10
                  transition-all duration-300
                  placeholder:text-zinc-500
                "
              />

            </div>

            {/* BUTTON */}
            <button
              type="submit"
              className="
                w-full py-4 rounded-2xl
                font-bold
                bg-gradient-to-r from-cyan-500 to-purple-600
                hover:scale-[1.02]
                hover:shadow-[0_0_40px_rgba(34,211,238,0.35)]
                transition-all duration-300
              "
            >
              เข้าสู่ระบบ
            </button>

          </form>

          {/* INFO */}
          <div className="
            mt-6 text-center text-sm
            text-zinc-400 leading-relaxed
          ">
            ใช้ชื่อและรหัสเดียวกับที่สมัครในเซิร์ฟเวอร์ Minecraft
          </div>

        </div>

      </div>

    </main>
  );
}