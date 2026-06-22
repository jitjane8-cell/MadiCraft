"use client";

import { useEffect, useState } from "react";

export default function ProfilePage() {

  const [user, setUser] = useState<string | null>(null);

  useEffect(() => {
    const username = localStorage.getItem("mc_user");

    if (username) {
      setUser(username);
    }
  }, []);

  return (
    <main className="min-h-screen bg-[#02040a] text-white">

      <div className="max-w-5xl mx-auto px-6 py-10">

        {/* Profile Card */}
        <div className="
        rounded-3xl
        border border-cyan-500/20
        bg-black/40
        backdrop-blur-xl
        p-8">

          <div className="flex items-center gap-5">

            <img
              src={`https://mc-heads.net/avatar/${user}/100`}
              className="w-24 h-24 rounded-3xl"
            />

            <div>

              <h1 className="text-3xl font-black">
                {user}
              </h1>

              <div className="text-zinc-400">
                Minecraft Account
              </div>

              <div className="
              mt-3
              inline-block
              px-4 py-1
              rounded-full
              bg-gradient-to-r
              from-cyan-500
              to-purple-600">
                VIP+
              </div>

            </div>

          </div>

        </div>

      </div>

    </main>
  );
}