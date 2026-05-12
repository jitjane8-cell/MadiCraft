export default function Home() {
  return (
    <main className="min-h-screen bg-[#0a0a0a] text-white">
      
      {/* Navbar */}
      <nav className="flex items-center justify-between px-8 py-5 border-b border-white/10">
        <h1 className="text-3xl font-bold text-cyan-400">
          MadiCraft
        </h1>

        <div className="flex gap-6 text-gray-300">
          <a href="#">หน้าหลัก</a>
          <a href="#">คู่มือ</a>
          <a href="#">ร้านค้า</a>
          <a href="#">เติมเงิน</a>
          <a href="#">Discord</a>
        </div>
      </nav>

      {/* Hero */}
      <section className="flex flex-col items-center justify-center text-center py-28 px-6">
        <h1 className="text-7xl font-extrabold bg-gradient-to-r from-cyan-400 to-purple-500 text-transparent bg-clip-text">
          MadiCraft
        </h1>

        <p className="mt-6 text-gray-400 max-w-2xl text-xl">
          เซิร์ฟเวอร์ Minecraft Survival สุดมันส์ เล่นฟรี
        </p>

        <div className="mt-10 flex gap-5">
          <button className="bg-cyan-500 hover:bg-cyan-400 transition px-8 py-4 rounded-2xl font-bold text-lg shadow-lg shadow-cyan-500/30">
            เข้าเล่นเซิร์ฟ
          </button>

          <button className="bg-purple-500 hover:bg-purple-400 transition px-8 py-4 rounded-2xl font-bold text-lg shadow-lg shadow-purple-500/30">
            เข้าดิสคอร์ด
          </button>
        </div>

        <div className="mt-10 text-gray-500">
          IP : play.madicraft.online
        </div>
      </section>

      {/* Product Section */}
      <section className="px-8 pb-24">
        <h2 className="text-4xl font-bold mb-10">
          สินค้าแนะนำ
        </h2>

        <div className="grid md:grid-cols-3 gap-8">

          <div className="bg-white/5 border border-white/10 rounded-3xl p-6 hover:border-cyan-400 transition">
            <h3 className="text-2xl font-bold text-cyan-400">
              VIP Rank
            </h3>

            <p className="mt-3 text-gray-400">
              ยศสุดคุ้ม พร้อมสิทธิพิเศษมากมาย
            </p>

            <div className="mt-6 text-3xl font-bold">
              99฿
            </div>

            <button className="mt-6 w-full bg-cyan-500 hover:bg-cyan-400 py-3 rounded-xl font-semibold">
              ซื้อสินค้า
            </button>
          </div>

          <div className="bg-white/5 border border-white/10 rounded-3xl p-6 hover:border-purple-400 transition">
            <h3 className="text-2xl font-bold text-purple-400">
              Crate Key
            </h3>

            <p className="mt-3 text-gray-400">
              เปิดกล่องลุ้นของแรร์สุดเทพ
            </p>

            <div className="mt-6 text-3xl font-bold">
              49฿
            </div>

            <button className="mt-6 w-full bg-purple-500 hover:bg-purple-400 py-3 rounded-xl font-semibold">
              ซื้อสินค้า
            </button>
          </div>

          <div className="bg-white/5 border border-white/10 rounded-3xl p-6 hover:border-pink-400 transition">
            <h3 className="text-2xl font-bold text-pink-400">
              Battle Pass
            </h3>

            <p className="mt-3 text-gray-400">
              ปลดล็อครางวัลสุดพิเศษ
            </p>

            <div className="mt-6 text-3xl font-bold">
              149฿
            </div>

            <button className="mt-6 w-full bg-pink-500 hover:bg-pink-400 py-3 rounded-xl font-semibold">
              ซื้อสินค้า
            </button>
          </div>

        </div>
      </section>
    </main>
  );
}