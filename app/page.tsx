"use client";

import React, { useEffect, useState, useRef } from "react";
import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";

export default function Page() {
const [serverData, setServerData] = useState({
  online: 0,
  max: 0,
  version: "Loading...",
});
  useEffect(() => {
  const fetchServer = () => {
    fetch("/api/server")
      .then((res) => res.json())
      .then((data) => {
        setServerData(data);
      })
      .catch(console.error);
  };

  fetchServer();

  const interval = setInterval(fetchServer, 30000);

  return () => clearInterval(interval);
}, []);
  

  return (
  <main className="min-h-screen bg-[#02040a] text-white overflow-x-hidden">
    <Header />



{/* BACKGROUND */}
<div className="fixed inset-0 z-0">
  <div
    className="
      absolute inset-0
      bg-[url('/images/8022.png')]
      bg-cover
      bg-center
      opacity-70
      scale-105
    "
  />

  <div className="absolute top-0 left-0 w-[60%] h-[60%] bg-cyan-500/10 blur-[140px]" />
  <div className="absolute bottom-0 right-0 w-[60%] h-[60%] bg-purple-500/10 blur-[140px]" />

  <div className="absolute inset-0 bg-black/40" />
</div>

        
        {/* HERO SECTION */}
        <section className="relative pt-4 md:pt-10 pb-4 text-center flex flex-col items-center justify-start min-h-[60vh] md:min-h-[55vh]">

          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-[600px] h-[600px] bg-cyan-500/20 blur-[140px] rounded-full animate-pulse" />
            <div className="w-[500px] h-[500px] bg-purple-500/20 blur-[140px] rounded-full animate-pulse" />
          </div>
        {/* HERO IMAGE */}
        <div className="relative z-10 mb-8 group">

          {/* GLOW */}
          <div
            className="
              absolute inset-0
              bg-cyan-500/20
              blur-[90px]
              scale-75
              opacity-80
              transition-all duration-500
              group-hover:scale-90
              group-hover:opacity-100
            "
          />

          <img
            src="/images/8024.png"
            alt="Madicraft Logo"
            className="
w-[300px]
sm:w-[320px]
md:w-[680px]
lg:w-[680px]

              relative z-10

              drop-shadow-[0_0_50px_rgba(34,211,238,0.35)]

              transition-all duration-700 ease-out

              hover:scale-[1.03]
              hover:-translate-y-1
            "
          />
        </div>
          {/* STATUS BAR - ทำเป็นแถบยาวตามรูปตัวอย่าง */}
          <div className="mt-12 md:mt-16 w-full max-w-5xl px-6 relative z-10 mx-auto">
            <div
  className="
    bg-black/40
    border border-white/10
    backdrop-blur-xl
    rounded-2xl
    py-6
    px-4
    md:px-10

    grid
    grid-cols-2
    gap-5

    md:flex
    md:justify-between
  "
>
              {[
                [
                  serverData.version === "Offline"
                    ? "🔴 Offline"
                    : "🟢 Online",
                  "Status",
                ],
                [`👥 ${serverData.online} / ${serverData.max}`, "Online"],
                ["⚡ 1.21 + ", "Version"],
                ["🔥 24/7", "Uptime"],
              ].map((i, idx) => (
                <div key={idx} className="flex flex-col items-center md:items-start">
                  <div className="text-2xl font-bold">{i[0]}</div>
                  <div className="text-zinc-400 text-xs uppercase tracking-widest">
                    {i[1]}
                  </div>
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
              <div className="flex flex-col items-center justify-center gap-3 p-4 rounded-xl bg-white/5 hover:border-cyan-500/20 border border-transparent transition text-center">
                <div className="flex-1">
                  <div className="font-semibold text-white">
                    🎉 อัปเดตเวอร์ชันใหม่ล่าสุด พร้อมระบบใหม่
                  </div>
                  <div className="text-sm text-zinc-400">
                    เพิ่มระบบเควส + ของรางวัลใหม่ในเซิร์ฟเวอร์
                  </div>
                </div>
              </div>

              {/* ITEM 2 */}
              <div className="flex flex-col items-center justify-center gap-3 p-4 rounded-xl bg-white/5 hover:bg-white/10 transition text-center">
                <div className="flex-1">
                  <div className="font-semibold text-white">
                    🔥 ภารกิจรายวันสุดง่าย
                  </div>
                  <div className="text-sm text-zinc-400">
                    เข้าเล่นทุกวันรับ + ของรางวัลรายวัน
                  </div>
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
              </div>

            </div>

          </div>
          
        </div>
        <Footer />
    </main>
  );
}