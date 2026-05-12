"use client";

import React from "react";
import { Home, ShoppingCart, Wallet, Trophy, Users, Play, MessageCircle } from "lucide-react";

export default function Page() {
  return (
    <main className="min-h-screen bg-[#02040a] text-white overflow-x-hidden">

      {/* BACKGROUND */}
      <div className="fixed inset-0 z-0">
        <div className="absolute inset-0 bg-[url('/images/8022.png')] bg-cover bg-center opacity-40 blur-sm scale-105" />
        <div className="absolute top-0 left-0 w-[60%] h-[60%] bg-cyan-500/10 blur-[140px]" />
        <div className="absolute bottom-0 right-0 w-[60%] h-[60%] bg-purple-500/10 blur-[140px]" />
      </div>

      {/* SIDE NAV */}
      <nav className="fixed left-6 top-1/2 -translate-y-1/2 z-60 hidden lg:flex flex-col gap-10">
        {[
          [<Home />, "หน้าหลัก"],
          [<Users />, "คู่มือ"],
          [<ShoppingCart />, "ร้านค้า"],
          [<Wallet />, "เติมเงิน"],
          [<Trophy />, "อันดับ"],
        ].map((i, idx) => (
          <div key={idx} className="group relative">
            <button className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center hover:bg-white/10 transition">
              {i[0]}
            </button>
            <span className="absolute left-16 top-1/2 -translate-y-1/2 text-xs bg-white text-black px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition">
              {i[1]}
            </span>
          </div>
        ))}
      </nav>

      {/* CONTENT */}
      <div className="relative z-10">

        {/* HEADER */}
        <header className="flex justify-between items-center px-10 py-6">
          <div className="font-black text-2xl tracking-tight">MADICRAFT</div>

          <button className="flex items-center gap-2 px-5 py-2 bg-white/5 border border-white/10 rounded-full hover:bg-white/10 transition">
            <MessageCircle size={18} /> Discord
          </button>
        </header>

        {/* HERO */}
        <section className="relative pt-16 md:pt-10 pb-16 md:pb-20 text-center flex flex-col items-center justify-center min-h-[80vh]">

          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-[600px] h-[600px] bg-cyan-500/20 blur-[140px] rounded-full animate-pulse" />
            <div className="w-[500px] h-[500px] bg-purple-500/20 blur-[140px] rounded-full animate-pulse" />
          </div>
          <img 
            src="/images/8023.png" 
            className="w-[320px] sm:w-[420px] md:w-[650px] relative z-10 -mt-6 md:mt-0"
            style={{ mixBlendMode: 'screen' }} 
          />

          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mt-8 relative z-10">
            <button className="px-6 sm:px-8 py-3 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-2xl font-bold hover:scale-105 transition flex items-center justify-center gap-2 w-full sm:w-auto">
              PLAY <Play size={18} />
            </button>

            <button className="px-6 sm:px-8 py-3 bg-white/5 border border-white/10 rounded-2xl hover:bg-white/10 transition w-full sm:w-auto">
              PLAY.MADICRAFT.ONLINE
            </button>
          </div>

        </section>

        {/* STATUS */}
        <section className="max-w-6xl mx-auto px-6 grid md:grid-cols-4 gap-4">

          {[
            ["🟢 Online", "Status"],
            ["👥 604 Players", "Online"],
            ["⚡ 1.21 + ", "Version"],
            ["🔥 24/7", "Uptime"],
          ].map((i, idx) => (
            <div key={idx} className="bg-white/5 border border-white/10 rounded-2xl p-5 hover:scale-105 transition">
              <div className="text-lg font-bold">{i[0]}</div>
              <div className="text-zinc-400 text-sm">{i[1]}</div>
            </div>
          ))}

        </section>

        {/* SHOP */}
        <section className="max-w-6xl mx-auto px-6 py-24">

          <h2 className="text-3xl font-black mb-10 text-center">STORE</h2>

          <div className="grid md:grid-cols-3 gap-6">

            {[
              ["VIP", "Basic Perks", "49 THB", "from-cyan-500"],
              ["MVP", "Fly + Kit", "99 THB", "from-purple-500"],
              ["LEGEND", "All Unlock", "199 THB", "from-pink-500"],
            ].map((i, idx) => (
              <div key={idx} className="p-[1px] bg-gradient-to-r from-white/10 to-white/5 rounded-3xl">

                <div className="bg-[#0a0c14] p-8 rounded-3xl hover:scale-[1.03] transition">

                  <h3 className="text-2xl font-black">{i[0]}</h3>
                  <p className="text-zinc-400 mt-2">{i[1]}</p>

                  <div className="text-green-400 text-2xl font-black mt-6">
                    {i[2]}
                  </div>

                  <button className={`mt-6 w-full py-3 rounded-xl bg-gradient-to-r ${i[3]} text-black font-bold`}>
                    BUY
                  </button>

                </div>

              </div>
            ))}

          </div>

        </section>

        {/* FOOTER */}
        <footer className="text-center py-10 border-t border-white/10 text-zinc-500 text-sm">
            เราไม่มีส่วนเกี่ยวข้องกับ Mojang AB.
          © 2026 MADICRAFT - ขอสงวนลิขสิทธิ์
        </footer>

      </div>

    </main>
  );
}