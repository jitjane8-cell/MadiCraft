export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-6xl font-bold text-cyan-400">
          MadiCraft
        </h1>

        <p className="mt-4 text-gray-300 text-xl">
          เซิร์ฟเวอร์ Minecraft Survival ที่ดีที่สุด
        </p>

        <div className="mt-8 flex gap-4 justify-center">
          <button className="bg-cyan-500 hover:bg-cyan-400 px-6 py-3 rounded-xl text-lg font-semibold">
            เข้าเล่นเซิร์ฟ
          </button>

          <button className="bg-purple-500 hover:bg-purple-400 px-6 py-3 rounded-xl text-lg font-semibold">
            Discord
          </button>
        </div>

        <div className="mt-10 text-gray-400">
          IP: play.madicraft.net
        </div>
      </div>
    </main>
  );
}