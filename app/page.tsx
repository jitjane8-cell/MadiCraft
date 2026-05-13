"use client";

import React from "react";
import { Home, ShoppingCart, Wallet, Trophy, BookOpen, Play, MessageCircle } from "lucide-react";

export default function Page() {
  return (
    <main className="min-h-screen bg-[#02040a] text-white overflow-x-hidden">

      {/* BACKGROUND */}
      <div className="fixed inset-0 z-0">
        <div className="absolute inset-0 bg-[url('/images/8022.png')] bg-cover bg-center opacity-40 blur-sm scale-105" />
        <div className="absolute top-0 left-0 w-[60%] h-[60%] bg-cyan-500/10 blur-[140px]" />
        <div className="absolute bottom-0 right-0 w-[60%] h-[60%] bg-purple-500/10 blur-[140px]" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/30 to-black/80" />
      </div>

      {/* MOBILE NAV */}
      <div className="fixed bottom-4 left-1/2 -translate-x-1/2 flex lg:hidden gap-3 bg-white/5 border border-white/10 backdrop-blur px-4 py-2 rounded-2xl z-50">
        {[
          [<Home size={18} />, "หน้าหลัก"],
          [<BookOpen size={18} />, "คู่มือ"],
          [<ShoppingCart size={18} />, "ร้านค้า"],
          [<Wallet size={18} />, "เติมเงิน"],
          [<Trophy size={18} />, "อันดับ"],
        ].map((i, idx) => (
          <button key={idx} className="p-2 rounded-xl hover:bg-white/10 transition">
            {i[0]}
          </button>
        ))}
      </div>

      {/* SIDE NAV (desktop) */}
      <nav className="fixed left-6 top-1/2 -translate-y-1/2 z-50 hidden lg:flex flex-col gap-10">
        {[
          [<Home />, "หน้าหลัก"],
          [<BookOpen />, "คู่มือ"],
          [<ShoppingCart />, "ร้านค้า"],
          [<Wallet />, "เติมเงิน"],
          [<Trophy />, "อันดับ"],
        ].map((i, idx) => (
          <div key={idx} className="group relative">
            <button 
              className="
                w-14 h-14 rounded-2xl
                bg-white/5 border border-white/10
                flex items-center justify-center
                hover:bg-cyan-500/20
                hover:border-cyan-400/40
                hover:shadow-[0_0_25px_rgba(34,211,238,0.35)]
                hover:scale-110
                transition-all duration-300
              "
            >
              {i[0]}
            </button>
            <span
              className="
                absolute left-16 top-1/2 -translate-y-1/2
                px-4 py-2 rounded-xl
                bg-black/70 backdrop-blur-xl
                border border-white/10
                text-white text-sm font-medium tracking-wide
                opacity-0 translate-x-2
                group-hover:opacity-100
                group-hover:translate-x-0
                transition-all duration-300
                whitespace-nowrap
                shadow-[0_0_20px_rgba(0,0,0,0.35)]
              "
            >
              {i[1]}
            </span>
          </div>
        ))}
      </nav>

      {/* CONTENT */}
      <div className="relative z-10">

        {/* HEADER */}
        <header className="
        sticky top-0 z-50
        flex justify-between items-center
        px-6 md:px-10 py-5
        bg-black/30 backdrop-blur-xl
        border-b border-white/10
        ">
          {/* LOGO */}
          <div className="flex flex-col">
            <div className="
              font-black text-2xl tracking-tight
              bg-gradient-to-r from-cyan-300 via-white to-purple-400
              bg-clip-text text-transparent
              drop-shadow-[0_0_20px_rgba(34,211,238,0.35)]
            ">
              MADICRAFT
            </div>

            <div className="
              text-[10px] text-zinc-400
              tracking-[0.35em] uppercase
              text-center mt-[-2px]
            ">
              JAVA & BEDROCK
            </div>
          </div>

          {/* BUTTONS */}
          <div className="flex items-center gap-3">

            {/* DISCORD */}
            <button className="
              flex items-center gap-2
              px-5 py-2 rounded-2xl
              bg-gradient-to-r from-cyan-500 to-purple-600
              hover:scale-105
              transition-all duration-300
              font-medium
              shadow-[0_0_30px_rgba(34,211,238,0.35)]
            ">
              <MessageCircle size={18} />
              Discord
            </button>

          </div>
        </header>

        {/* HERO SECTION */}
        <section className="relative pt-4 md:pt-10 pb-4 text-center flex flex-col items-center justify-start min-h-[60vh] md:min-h-[65vh]">

          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-[600px] h-[600px] bg-cyan-500/20 blur-[140px] rounded-full animate-pulse" />
            <div className="w-[500px] h-[500px] bg-purple-500/20 blur-[140px] rounded-full animate-pulse" />
          </div>

          <img 
            src="/images/8024.png"
            className="
            w-[320px]
            sm:w-[450px]
            md:w-[680px]
            lg:w-[760px]
            relative z-10
            drop-shadow-[0_0_80px_rgba(34,211,238,0.4)]
            hover:scale-105
            transition duration-700
            select-none
            pointer-events-none
            "
          />

          {/* PLAY BUTTONS */}
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mt-6 md:mt-8 relative z-10">

            {/* LOGIN BUTTON */}
            <button
              className="
                px-8 py-3
                bg-gradient-to-r from-cyan-500 to-purple-600
                rounded-2xl font-bold
                hover:scale-105
                hover:shadow-[0_0_30px_rgba(34,211,238,0.35)]
                transition-all duration-300
                flex items-center justify-center gap-2
              "
            >
              เข้าสู่ระบบ
            </button>

            {/* COPY IP BUTTON */}
            <button
              onClick={() => {
                navigator.clipboard.writeText("play.madicraft.online");

                alert("คัดลอก IP เซิร์ฟเวอร์แล้ว!");
              }}
              className="
                px-6 py-3
                bg-white/5
                border border-white/10
                backdrop-blur-md
                rounded-2xl
                hover:bg-white/10
                hover:border-cyan-400/30
                hover:shadow-[0_0_25px_rgba(34,211,238,0.2)]
                transition-all duration-300
                font-medium
                cursor-pointer
              "
            >
              PLAY.MADICRAFT.ONLINE
            </button>

          </div>

          {/* STATUS BAR - ทำเป็นแถบยาวตามรูปตัวอย่าง */}
          <div className="mt-12 md:mt-16 w-full max-w-5xl px-6 relative z-10 mx-auto">
            <div className="bg-black/40 border border-white/10 backdrop-blur-xl rounded-2xl py-6 px-4 md:px-10 flex flex-wrap justify-between items-center gap-6">
              {[
                ["🟢 Online", "Status"],
                ["👥 604 Players", "Online"],
                ["⚡ 1.21 + ", "Version"],
                ["🔥 24/7", "Uptime"],
              ].map((i, idx) => (
                <div key={idx} className="flex flex-col items-center md:items-start">
                  <div className="text-lg font-bold">{i[0]}</div>
                  <div className="text-zinc-400 text-xs uppercase tracking-widest">{i[1]}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* NEWS / UPDATE BAR */}
        <div className="mt-12 md:mt-16 w-full max-w-5xl px-6 relative z-10 mx-auto">
          <div className="bg-black/40 border border-white/10 backdrop-blur-xl rounded-2xl p-6 md:p-8">

            {/* HEADER */}
            <div className="flex flex-col items-center justify-center gap-3 mb-6 text-center">
              <div className="text-lg font-bold">📰 ข่าวสารล่าสุด</div>
              <button className="text-xs px-3 py-1 rounded-full bg-white/5 border border-white/10 hover:bg-white/10 transition">
                ดูทั้งหมด
              </button>
            </div>

            {/* NEWS LIST */}
            <div className="space-y-4 text-center">

              {/* ITEM 1 */}
              <div className="flex flex-col items-center justify-center gap-3 p-4 rounded-xl bg-white/5 hover:bg-white/10 transition text-center">
                <div className="flex-1">
                  <div className="font-semibold text-white">
                    🎉 อัปเดตเวอร์ชัน 1.21 พร้อมระบบใหม่
                  </div>
                  <div className="text-sm text-zinc-400">
                    เพิ่มระบบเควส + ของรางวัลใหม่ในเซิร์ฟเวอร์
                  </div>
                </div>
                <div className="text-xs text-zinc-500 whitespace-nowrap">
                  วันนี้
                </div>
              </div>

              {/* ITEM 2 */}
              <div className="flex flex-col items-center justify-center gap-3 p-4 rounded-xl bg-white/5 hover:bg-white/10 transition text-center">
                <div className="flex-1">
                  <div className="font-semibold text-white">
                    🔥 กิจกรรมแจกของพิเศษเริ่มแล้ว
                  </div>
                  <div className="text-sm text-zinc-400">
                    เข้าเล่นทุกวันรับ Token ฟรี + ของรางวัลรายวัน
                  </div>
                </div>
                <div className="text-xs text-zinc-500 whitespace-nowrap">
                  2 วันที่แล้ว
                </div>
              </div>

              {/* ITEM 3 */}
              <div className="flex flex-col items-center justify-center gap-3 p-4 rounded-xl bg-white/5 hover:bg-white/10 transition text-center">
                <div className="flex-1">
                  <div className="font-semibold text-white">
                    🛠️ ปรับสมดุลระบบเศรษฐกิจใหม่
                  </div>
                  <div className="text-sm text-zinc-400">
                    ปรับราคาไอเทมในร้านค้าให้สมดุลมากขึ้น
                  </div>
                </div>
                <div className="text-xs text-zinc-500 whitespace-nowrap">
                  5 วันที่แล้ว
                </div>
              </div>

            </div>
          </div>
        </div>

        {/* FOOTER */}
        <footer className="text-center py-10 border-t border-white/10 text-zinc-500 text-sm">
          เราไม่มีส่วนเกี่ยวข้องกับ Mojang AB.
          <br />
          © 2026 MADICRAFT - ขอสงวนลิขสิทธิ์
        </footer>

      </div>
    </main>
  );
}