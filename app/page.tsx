"use client";

import {
  Home,
  ShoppingCart,
  Wallet,
  Trophy,
  Users,
  Play,
  MessageCircle,
} from "lucide-react";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-black text-white overflow-hidden">

      {/* Background */}
      <div className="fixed inset-0 bg-[radial-gradient(circle_at_top,#1e3a8a_0%,#000000_60%)] z-0" />

      {/* Navbar */}
      <header className="relative z-10 border-b border-white/10 backdrop-blur">
        <div className="max-w-7xl mx-auto flex items-center justify-between px-8 py-5">

          {/* Logo */}
          <div className="flex items-center gap-3">

            <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-cyan-400 to-purple-500 flex items-center justify-center shadow-[0_0_30px_#3b82f6]">
              <span className="text-2xl font-black">M</span>
            </div>

            <div>
              <h1 className="text-2xl font-black">
                MADICRAFT
              </h1>

              <p className="text-cyan-400 text-sm">
                JAVA & BEDROCK
              </p>
            </div>
          </div>

          {/* Menu */}
          <nav className="hidden md:flex items-center gap-6">

            <button className="flex items-center gap-2 bg-cyan-500/20 border border-cyan-400 px-5 py-3 rounded-2xl text-cyan-300 shadow-[0_0_20px_rgba(34,211,238,.35)]">
              <Home size={18} />
              หน้าแรก
            </button>

            <button className="flex items-center gap-2 hover:text-cyan-400 transition">
              <Users size={18} />
              คู่มือ
            </button>

            <button className="flex items-center gap-2 hover:text-cyan-400 transition">
              <ShoppingCart size={18} />
              ร้านค้า
            </button>

            <button className="flex items-center gap-2 hover:text-cyan-400 transition">
              <Wallet size={18} />
              เติมเงิน
            </button>

            <button className="flex items-center gap-2 hover:text-cyan-400 transition">
              <Trophy size={18} />
              อันดับ
            </button>
          </nav>

          {/* Login */}
          <button className="bg-gradient-to-r from-cyan-500 to-purple-500 px-6 py-3 rounded-2xl font-bold shadow-[0_0_25px_rgba(59,130,246,.5)] hover:scale-105 transition">
            เข้าสู่ระบบ
          </button>
        </div>
      </header>

      {/* Hero */}
      <section className="relative z-10 pt-24 pb-20">

        <div className="max-w-6xl mx-auto px-6 text-center">

          {/* Big Title */}
          <h1 className="text-7xl md:text-8xl font-black bg-gradient-to-r from-cyan-300 via-blue-400 to-purple-500 bg-clip-text text-transparent drop-shadow-[0_0_25px_#3b82f6]">
            MADICRAFT
          </h1>

          <p className="mt-4 text-2xl text-cyan-300 tracking-[6px]">
            JAVA & BEDROCK
          </p>

          {/* Buttons */}
          <div className="flex justify-center gap-6 mt-12">

            <button className="flex items-center gap-3 bg-gradient-to-r from-blue-500 to-cyan-400 px-10 py-5 rounded-2xl text-lg font-bold shadow-[0_0_30px_rgba(59,130,246,.5)] hover:scale-105 transition">
              <Play />
              ร้านค้า
            </button>

            <button className="flex items-center gap-3 border border-white/20 px-10 py-5 rounded-2xl text-lg font-bold hover:border-cyan-400 hover:text-cyan-300 transition">
              <Wallet />
              เติมเงิน
            </button>
          </div>
        </div>
      </section>

      {/* Cards */}
      <section className="relative z-10 max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-8 pb-20">

        {/* Server Card */}
        <div className="rounded-3xl border border-cyan-500/30 bg-cyan-500/10 backdrop-blur p-8 shadow-[0_0_50px_rgba(34,211,238,.15)]">

          <p className="text-cyan-400 font-bold">
            👥 604 กำลังเล่น
          </p>

          <div className="mt-8 flex flex-col items-center">

            <div className="w-32 h-32 rounded-full bg-gradient-to-br from-cyan-400 to-blue-700 flex items-center justify-center shadow-[0_0_40px_rgba(34,211,238,.5)]">
              <span className="text-6xl font-black">M</span>
            </div>

            <h2 className="text-4xl font-black mt-6">
              MadiCraft
            </h2>

            <button className="mt-8 w-full py-4 rounded-2xl border border-cyan-400 bg-black/30 hover:bg-cyan-500/20 transition font-bold text-xl">
              PLAY.MADICRAFT.ONLINE
            </button>
          </div>
        </div>

        {/* Discord */}
        <div className="rounded-3xl border border-purple-500/30 bg-purple-500/10 backdrop-blur p-8 shadow-[0_0_50px_rgba(168,85,247,.15)]">

          <p className="text-purple-400 font-bold">
            💬 4,010 ออนไลน์
          </p>

          <div className="mt-8 flex flex-col items-center">

            <div className="w-32 h-32 rounded-full bg-gradient-to-br from-purple-400 to-indigo-700 flex items-center justify-center shadow-[0_0_40px_rgba(168,85,247,.5)]">
              <MessageCircle size={60} />
            </div>

            <h2 className="text-4xl font-black mt-6">
              Discord
            </h2>

            <button className="mt-8 w-full py-4 rounded-2xl border border-purple-400 bg-black/30 hover:bg-purple-500/20 transition font-bold text-xl">
              เข้าร่วมดิสคอร์ด
            </button>
          </div>
        </div>
      </section>

      {/* Announcement */}
      <section className="relative z-10 max-w-6xl mx-auto px-6 pb-24">

        <h2 className="text-4xl font-black mb-8">
          📢 ประกาศ
        </h2>

        <div className="rounded-3xl border border-cyan-500/30 bg-cyan-500/5 backdrop-blur p-8">

          <h3 className="text-2xl font-bold text-cyan-300">
            ยินดีต้อนรับเข้าสู่ MadiCraft!
          </h3>

          <p className="text-zinc-300 mt-4 text-lg">
            เซิร์ฟเวอร์ Survival เปิดให้เล่นแล้ววันนี้ พร้อมระบบใหม่มากมาย
          </p>

          <p className="text-zinc-500 mt-4">
            3 ชั่วโมงที่แล้ว
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative z-10 border-t border-white/10 py-10 text-center text-zinc-500">
        <p>เราไม่มีส่วนเกี่ยวข้องกับ Mojang AB.</p>

        <p className="mt-2">
          © 2026 MadiCraft. All Right Reserved.
        </p>
      </footer>
    </main>
  );
}