export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white">

      {/* Background Grid */}
      <div
        className="fixed inset-0 opacity-20"
        style={{
          backgroundImage:
            "linear-gradient(to right, #222 1px, transparent 1px), linear-gradient(to bottom, #222 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      />

      {/* Navbar */}
      <nav className="relative z-10 flex items-center justify-between px-10 py-5 border-b border-zinc-800 bg-black/70 backdrop-blur">
        <h1 className="text-2xl font-bold text-orange-400">
          MadiCraft
        </h1>

        <div className="flex gap-6 text-zinc-300">
          <button>หน้าแรก</button>
          <button>ผู้เล่น</button>
          <button>ร้านค้า</button>
          <button>เติมเงิน</button>
        </div>

        <button className="bg-orange-400 text-black px-5 py-2 rounded-xl font-bold hover:scale-105 transition">
          เข้าสู่ระบบ
        </button>
      </nav>

      {/* Hero */}
      <section className="relative z-10 flex flex-col items-center justify-center text-center pt-32">

        <h1 className="text-7xl font-black text-orange-400 drop-shadow-[0_0_25px_orange]">
          MadiCraft
        </h1>

        <p className="mt-5 text-zinc-400 text-xl">
          JAVA & BEDROCK SERVER
        </p>

        <div className="mt-10 flex gap-5">
          <button className="bg-orange-400 text-black px-8 py-4 rounded-2xl font-bold hover:scale-105 transition">
            ดูเล่น
          </button>

          <button className="border border-zinc-700 px-8 py-4 rounded-2xl hover:bg-zinc-900 transition">
            เติมเงิน
          </button>
        </div>

      </section>

      {/* Cards */}
      <section className="relative z-10 max-w-6xl mx-auto grid md:grid-cols-2 gap-6 mt-24 px-6">

        {/* Server Card */}
        <div className="bg-orange-400 text-black rounded-3xl p-8 shadow-[0_0_40px_rgba(255,165,0,0.4)]">

          <p className="font-bold">
            604 กำลังเล่น
          </p>

          <div className="mt-10 flex flex-col items-center">

            <div className="w-20 h-20 rounded-2xl bg-white" />

            <h2 className="mt-5 text-3xl font-black">
              MadiCraft
            </h2>

            <button className="mt-6 bg-black/20 px-6 py-3 rounded-xl font-bold">
              PLAY.MADICRAFT.NET
            </button>

          </div>
        </div>

        {/* Discord Card */}
        <div className="bg-indigo-500 rounded-3xl p-8 shadow-[0_0_40px_rgba(99,102,241,0.4)]">

          <p className="font-bold">
            4,010 ออนไลน์
          </p>

          <div className="mt-10 flex flex-col items-center">

            <div className="w-20 h-20 rounded-2xl bg-white" />

            <h2 className="mt-5 text-3xl font-black">
              Discord
            </h2>

            <button className="mt-6 bg-black/20 px-6 py-3 rounded-xl font-bold">
              เข้าร่วม Discord
            </button>

          </div>
        </div>

      </section>

      {/* Announcement */}
      <section className="relative z-10 max-w-6xl mx-auto mt-16 px-6 pb-24">

        <h2 className="text-3xl font-black">
          ประกาศ
        </h2>

        <div className="mt-6 border border-orange-500/40 bg-orange-500/10 rounded-2xl p-6">

          <h3 className="text-orange-300 font-bold text-xl">
            ยินดีต้อนรับเข้าสู่เซิร์ฟเวอร์ MadiCraft
          </h3>

          <p className="mt-2 text-zinc-400">
            ระบบ Survival เปิดให้เล่นแล้ววันนี้
          </p>

        </div>

      </section>

    </main>
  )
}