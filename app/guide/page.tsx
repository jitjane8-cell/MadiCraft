"use client";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { useState } from "react";
import {
  ChevronDown,
  Rocket,
  Laptop,
  Smartphone,
  Wallet,
  Gift,
  Sword,
  HelpCircle,
} from "lucide-react";

const guides = [
  {
    title: "เริ่มต้นเล่น",
    icon: <Rocket size={22} />,
    content: (
      <>
        <p>1. สมัครสมาชิก</p>
        <p>2. Login หน้าเว็บไซต์</p>
        <p>3. เปิด Minecraft</p>
        <p>4. เข้า IP</p>

        <div className="mt-4 p-4 rounded-xl bg-cyan-500/10 border border-cyan-500/30">
          <b>play.madicraft.online</b>
        </div>
      </>
    ),
  },
  {
    title: "Java Edition",
    icon: <Laptop size={22} />,
    content: (
      <>
        <p>Version : 1.21+</p>
        <p>Server IP</p>

        <div className="mt-4 p-4 rounded-xl bg-cyan-500/10 border border-cyan-500/30">
          play.madicraft.online
        </div>
      </>
    ),
  },
  {
    title: "Bedrock Edition",
    icon: <Smartphone size={22} />,
    content: (
      <>
        <p>IP : play.madicraft.online</p>
        <p>Port : 19132</p>
      </>
    ),
  },
  {
    title: "เติมเงิน",
    icon: <Wallet size={22} />,
    content: (
      <>
        <p>เข้าเมนู เติมเงิน</p>
        <p>เลือกจำนวนเงิน</p>
        <p>สแกน QR พร้อมเพย์</p>
      </>
    ),
  },
  {
    title: "MadiPass",
    icon: <Gift size={22} />,
    content: (
      <>
        <p>ระบบ Battle Pass</p>
        <p>สะสมเลเวล</p>
        <p>รับของรางวัลพิเศษ</p>
      </>
    ),
  },
  {
    title: "ระบบเซิร์ฟเวอร์",
    icon: <Sword size={22} />,
    content: (
      <>
        <p>Economy</p>
        <p>Quest</p>
        <p>Dungeon</p>
        <p>Fishing</p>
      </>
    ),
  },
  {
    title: "FAQ",
    icon: <HelpCircle size={22} />,
    content: (
      <>
        <p>เข้าเซิร์ฟไม่ได้?</p>
        <p>ลองรีสตาร์ท Minecraft</p>
        <br />
        <p>ยังไม่ได้?</p>
        <p>ติดต่อ Discord</p>
      </>
    ),
  },
];

export default function GuidePage() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <main className="min-h-screen bg-[#02040a] text-white">

      {/* Background */}
      <div className="fixed inset-0 -z-10">
        <div className="absolute inset-0 bg-[url('/images/8022.png')] bg-cover opacity-40" />
        <div className="absolute inset-0 bg-black/60" />
      </div>
<div className="sticky top-0 z-50 backdrop-blur-xl bg-black/40 border-b border-white/10">

  <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">

    <Link
      href="/"
      className="flex items-center gap-2 text-cyan-400 hover:text-cyan-300 transition"
    >
      <ArrowLeft size={18} />
      กลับหน้าหลัก
    </Link>

    <div className="font-black text-xl bg-gradient-to-r from-cyan-300 to-purple-400 bg-clip-text text-transparent">
      MADICRAFT
    </div>

  </div>

</div>
      <div className="max-w-5xl mx-auto px-5 py-14">

        <div className="text-center mb-12">

          <h1 className="text-5xl font-black bg-gradient-to-r from-cyan-300 to-purple-400 bg-clip-text text-transparent">
            MADICRAFT GUIDE
          </h1>

          <p className="text-zinc-400 mt-4">
            คู่มือสำหรับผู้เล่นใหม่และผู้เล่นทุกคน
          </p>

        </div>

        <div className="space-y-5">

          {guides.map((item, index) => (

            <div
              key={index}
              className="
              rounded-3xl
              border border-white/10
              bg-white/5
              backdrop-blur-xl
              overflow-hidden"
            >

              <button
                onClick={() =>
                  setOpen(open === index ? null : index)
                }
                className="
                w-full
                flex
                items-center
                justify-between
                p-6"
              >

                <div className="flex items-center gap-4">

                  <div className="text-cyan-400">
                    {item.icon}
                  </div>

                  <span className="font-bold text-lg">
                    {item.title}
                  </span>

                </div>

                <ChevronDown
                  className={`transition ${
                    open === index ? "rotate-180" : ""
                  }`}
                />

              </button>

              {open === index && (
                <div className="px-6 pb-6 text-zinc-300 space-y-2 animate-in fade-in">
                  {item.content}
                </div>
              )}

            </div>

          ))}

        </div>

      </div>

    </main>
  );
}