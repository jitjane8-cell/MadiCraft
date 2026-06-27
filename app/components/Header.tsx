"use client";

import React, { useEffect, useState, useRef } from "react";
import { FaDiscord } from "react-icons/fa";
import {
  Home,
  ShoppingCart,
  Wallet,
  Trophy,
  BookOpen,
  MessageCircle,
  Gamepad2,
  Menu,
  User,
  LogOut,
  Settings,
} from "lucide-react";


export default function Header() {
  const [user, setUser] = useState<string | null>(null);
  const [points, setPoints] = useState(0);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [desktopMenuOpen, setDesktopMenuOpen] = useState(false);
  const [onlineCount, setOnlineCount] = useState(0);

  const mobileMenuRef = useRef<HTMLDivElement>(null);
  const desktopMenuRef = useRef<HTMLDivElement>(null);

  const [serverData, setServerData] = useState({
    online: 0,
    max: 0,
    version: "Loading...",
  });
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as Node;
  
      if (
        mobileMenuRef.current &&
        !mobileMenuRef.current.contains(target)
      ) {
        setMobileMenuOpen(false);
      }
  
      if (
        desktopMenuRef.current &&
        !desktopMenuRef.current.contains(target)
      ) {
        setDesktopMenuOpen(false);
      }
    };
  
    document.addEventListener("mousedown", handleClickOutside);
  
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);
  useEffect(() => {
    if (!user) return;
  
    const fetchPoints = () => {
  fetch(`/api/profile?username=${user}`)
    .then(async (res) => {
      const text = await res.text();
      console.log(text);
  
      if (!text) return { points: 0 };
  
      return JSON.parse(text);
    })
    .then((data) => setPoints(data.points || 0))
    .catch(console.error);
    };
  
    fetchPoints();
  
    const interval = setInterval(fetchPoints, 5000); // ทุก 5 วินาที
  
    return () => clearInterval(interval);
  
  }, [user]);
    useEffect(() => {
      const fetchDiscord = () => {
        fetch("https://discord.com/api/guilds/1474899729631678557/widget.json")
          .then((res) => res.json())
          .then((data) => {
            setOnlineCount(data.presence_count || 0);
          });
      };
  
      fetchDiscord();
  
      const interval = setInterval(fetchDiscord, 30000);
  
      return () => clearInterval(interval);
    }, []);
  useEffect(() => {
    const username = localStorage.getItem("mc_user");
  
    if (username) {
      setUser(username);
    }
  
  }, []);
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
  <>

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

      {/* CONTENT */}
      <div className="relative z-10">
{/* MOBILE HEADER */}
<div className="lg:hidden sticky top-0 z-[9999]">
  <div className="flex items-center justify-between px-4 py-3 bg-black/50 backdrop-blur-xl border-b border-white/10">

    <div>
      <div className="font-black text-xl bg-gradient-to-r from-cyan-300 to-purple-400 bg-clip-text text-transparent">
        MADICRAFT
      </div>

      <div className="text-[9px] tracking-[0.2em] text-zinc-400">
        JAVA & BEDROCK
      </div>
    </div>

    {!user ? (

      <div className="flex items-center gap-2">

        <a
          href="/login"
          className="px-4 py-2 rounded-xl bg-gradient-to-r from-cyan-500 to-purple-600 text-sm"
        >
          เข้าสู่ระบบ
        </a>

      </div>

) : (

<div ref={mobileMenuRef} className="relative">
    <div
      onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
      className="flex items-center gap-2 cursor-pointer"
    >
      <img
        src={`https://mc-heads.net/avatar/${user}/100`}
        className="w-10 h-10 rounded-xl"
      />

      <Menu size={18} />
    </div>

{mobileMenuOpen && (
  <div
    className="
      absolute
      top-full
      right-0
      mt-3
      w-72
      rounded-3xl
      overflow-hidden
      border border-cyan-500/20
      bg-[#070b12]/95
      backdrop-blur-2xl
      shadow-[0_0_40px_rgba(34,211,238,0.15)]
      z-[9999]
      animate-in
      fade-in
      slide-in-from-top-2
      duration-200
    "
  >

    {/* PROFILE HEADER */}
    <div className="p-5 border-b border-white/10">

      <div className="flex items-center gap-3">

        <img
          src={`https://mc-heads.net/avatar/${user}/100`}
          className="
            w-14 h-14
            rounded-2xl
            border border-cyan-400/20
          "
        />

<div>
  <div className="font-bold text-lg">
    {user}
  </div>

  <div className="text-sm text-cyan-300">
    💎 {points.toLocaleString()} Points
  </div>
</div>

      </div>

    </div>

    {/* MENU */}

    <div className="py-2">

      <a
        href="/profile"
        className="
          flex items-center gap-3
          px-5 py-3
          hover:bg-white/5
          transition
        "
      >
        <User size={18} />
        <span>โปรไฟล์</span>
      </a>

      <a
        href="/topup"
        className="
          flex items-center gap-3
          px-5 py-3
          hover:bg-white/5
          transition
        "
      >
        <Wallet size={18} />
        <span>เติมเงิน</span>
      </a>

      <a
        href="/madipass"
        className="
          flex items-center gap-3
          px-5 py-3
          hover:bg-white/5
          transition
        "
      >
        🎁
        <span>MadiPass</span>
      </a>

      <a
        href="/settings"
        className="
          flex items-center gap-3
          px-5 py-3
          hover:bg-white/5
          transition
        "
      >
        <Settings size={18} />
        <span>ตั้งค่า</span>
      </a>

    </div>

    {/* LOGOUT */}

    <div className="border-t border-white/10 p-2">

      <button
        onClick={() => {
          localStorage.removeItem("mc_user");
          setUser(null);
          setMobileMenuOpen(false);
        }}
        className="
          w-full
          flex items-center gap-3
          px-4 py-3
          rounded-xl
          text-red-400
          hover:bg-red-500/10
          transition
        "
      >
        <LogOut size={18} />
        ออกจากระบบ
      </button>

    </div>

  </div>
)}
  </div>

)}

  </div>
</div>
        {/* HEADER */}
<header
  className="
    hidden lg:grid
    sticky top-0 z-50
    grid-cols-[220px_1fr_320px]
    items-center
    px-8 py-4
    bg-black/40
    backdrop-blur-xl
    border-b border-white/10
  "
>

          {/* LOGO */}
          <div className="flex flex-col items-center">
            <div
              className="
                font-black text-3xl tracking-tight
                bg-gradient-to-r
                from-cyan-300
                via-white
                to-purple-400
                bg-clip-text
                text-transparent
                drop-shadow-[0_0_20px_rgba(255,255,255,0.15)]
              "
            >
              MADICRAFT
            </div>

            <div
              className="
                text-[10px]
                text-purple-300
                tracking-[0.35em]
                uppercase
                mt-[-2px]
                text-center
                w-full
              "
            >
              JAVA & BEDROCK
            </div>
          </div>

          {/* CENTER MENU */}
          <nav className="hidden lg:flex items-center justify-center gap-8 justify-self-center">

            <a
              href="/"
              className="flex items-center gap-2 hover:text-cyan-400 transition"
            >
              <Home size={18} />
              หน้าหลัก
            </a>

            <a
              href="/guide"
              className="flex items-center gap-2 hover:text-cyan-400 transition"
            >
              <BookOpen size={18} />
              คู่มือ
            </a>

            <a
              href="/shop"
              className="flex items-center gap-2 hover:text-cyan-400 transition"
            >
              <ShoppingCart size={18} />
              ร้านค้า
            </a>

            <a
              href="/topup"
              className="flex items-center gap-2 hover:text-cyan-400 transition"
            >
              <Wallet size={18} />
              เติมเงิน
            </a>

            <a
              href="/leaderboard"
              className="flex items-center gap-2 hover:text-cyan-400 transition"
            >
              <Trophy size={18} />
              อันดับ
            </a>

          </nav>

          {/* RIGHT */}
          <div className="flex items-center gap-3 justify-self-end">

{/* LOGIN / PROFILE */}
{!user ? (
  <a
    href="/login"
    className="
      px-4 py-2
      rounded-xl
      bg-gradient-to-r
      from-cyan-500
      to-purple-600
      text-sm
      font-semibold
      hover:scale-105
      transition-all
      whitespace-nowrap
    "
  >
    เข้าสู่ระบบ
  </a>
) : (
<div ref={desktopMenuRef} className="relative">

    
<div
  onClick={() => setDesktopMenuOpen(!desktopMenuOpen)}
  className="
    flex items-center gap-8
    cursor-pointer
    px-3 py-1
    rounded-xl
    hover:bg-white/5
  "
>
  <img
    src={`https://mc-heads.net/avatar/${user}/100`}
    className="w-10 h-10 rounded-xl"
  />

  <Menu size={16} />
</div>

{desktopMenuOpen && (
  <div
    className="
      absolute
      top-full
      right-0
      mt-3
      w-72
      rounded-3xl
      overflow-hidden
      border border-cyan-500/20
      bg-[#070b12]/95
      backdrop-blur-2xl
      shadow-[0_0_40px_rgba(34,211,238,0.15)]
      z-[9999]
      animate-in
      fade-in
      slide-in-from-top-2
      duration-200
    "
  >

    {/* PROFILE HEADER */}
    <div className="p-5 border-b border-white/10">

      <div className="flex items-center gap-3">

        <img
          src={`https://mc-heads.net/avatar/${user}/100`}
          className="
            w-14 h-14
            rounded-2xl
            border border-cyan-400/20
          "
        />

        <div>
          <div className="font-bold text-lg">
            {user}
          </div>

<div className="text-sm text-cyan-300 font-medium">
  💎 {points.toLocaleString()} Points
</div>
        </div>

      </div>

    </div>

    {/* MENU */}

    <div className="py-2">

      <a
        href="/profile"
        className="
          flex items-center gap-3
          px-5 py-3
          hover:bg-white/5
          transition
        "
      >
        <User size={18} />
        <span>โปรไฟล์</span>
      </a>

      <a
        href="/topup"
        className="
          flex items-center gap-3
          px-5 py-3
          hover:bg-white/5
          transition
        "
      >
        <Wallet size={18} />
        <span>เติมเงิน</span>
      </a>

      <a
        href="/madipass"
        className="
          flex items-center gap-3
          px-5 py-3
          hover:bg-white/5
          transition
        "
      >
        🎁
        <span>MadiPass</span>
      </a>

      <a
        href="/settings"
        className="
          flex items-center gap-3
          px-5 py-3
          hover:bg-white/5
          transition
        "
      >
        <Settings size={18} />
        <span>ตั้งค่า</span>
      </a>

    </div>

    {/* LOGOUT */}

    <div className="border-t border-white/10 p-2">

      <button
        onClick={() => {
          localStorage.removeItem("mc_user");
          setUser(null);
          setDesktopMenuOpen(false);
        }}
        className="
          w-full
          flex items-center gap-3
          px-4 py-3
          rounded-xl
          text-red-400
          hover:bg-red-500/10
          transition
        "
      >
        <LogOut size={18} />
        ออกจากระบบ
      </button>

    </div>

  </div>
)}
  </div>
)}

          {/* COPY IP */}
          <button
            onClick={() => {
              navigator.clipboard.writeText("play.madicraft.online");
              alert("คัดลอก IP แล้ว");
            }}
            className="
              flex items-center gap-2
              px-4 py-2
              rounded-xl
              bg-white/5
              border border-cyan-500/20
              hover:border-cyan-400/50
              hover:bg-cyan-500/10
              transition-all
              font-semibold
              text-sm
            "
          >
            <Gamepad2 size={16} />
            PLAY.MADICRAFT.ONLINE
          </button>

{/* DISCORD */}
<a
  href="https://discord.gg/rGsa43aAQc"
  target="_blank"
  rel="noopener noreferrer"
  className="
    group
    relative
    overflow-hidden
    flex items-center
    gap-4
    px-6 py-3
    rounded-2xl
    bg-gradient-to-r
    from-[#5865F2]
    via-[#5663f5]
    to-[#7289da]
    border border-white/10
    hover:border-cyan-300/40
    shadow-[0_0_30px_rgba(88,101,242,.35)]
    hover:shadow-[0_0_55px_rgba(88,101,242,.65)]
    transition-all
    duration-300
  "
>

  {/* Glow */}
  <div
    className="
      absolute inset-0
      opacity-0
      group-hover:opacity-100
      transition
      bg-gradient-to-r
      from-white/5
      to-cyan-300/10
    "
  />

  {/* Icon */}
  <div
    className="
      relative
      flex
      items-center
      justify-center
      w-12
      h-12
      rounded-xl
      bg-white/15
      border border-white/10
      backdrop-blur
      group-hover:rotate-6
      transition
    "
  >
    <FaDiscord
      size={28}
      className="text-white drop-shadow-lg"
    />
  </div>

  {/* Text */}
  <div className="relative flex flex-col">

    <div className="flex items-center gap-2">

      <span className="font-bold text-white">
        Discord
      </span>

      <span
        className="
          px-2
          py-0.5
          rounded-full
          bg-green-500/20
          text-green-300
          text-[10px]
          font-bold
        "
      >
        LIVE
      </span>

    </div>

    <span className="text-xs text-white/75">
      👥 {onlineCount.toLocaleString()} Online
    </span>

  </div>

  {/* Arrow */}
  <div
    className="
      ml-auto
      text-white/60
      group-hover:text-white
      group-hover:translate-x-1
      transition
    "
  >
    →
  </div>

</a>

        </div>

</header>

</div>

</>
);
}