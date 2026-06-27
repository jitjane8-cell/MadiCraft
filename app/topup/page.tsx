"use client";

import { useState } from "react";
import TopupCard from "@/app/components/TopupCard";
import QRModal from "@/app/components/QRModal";
import { TOPUP_OPTIONS } from "@/app/lib/topup";

export default function TopupPage() {
  const [selected, setSelected] = useState<number | null>(null);
  const [openQR, setOpenQR] = useState(false);

  const current = TOPUP_OPTIONS.find(o => o.amount === selected);

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white p-6">

      {/* HEADER */}
      <div className="text-center mb-6">
        <h1 className="text-3xl font-bold">💰 เติมเงิน</h1>
        <p className="text-white/60">เลือกจำนวนที่ต้องการเติม</p>
      </div>

      {/* OPTIONS */}
      <div className="grid grid-cols-2 gap-4 max-w-xl mx-auto">
        {TOPUP_OPTIONS.map(option => (
          <TopupCard
            key={option.amount}
            option={option}
            selected={selected === option.amount}
            onClick={() => setSelected(option.amount)}
          />
        ))}
      </div>

      {/* BUTTON */}
      <div className="max-w-xl mx-auto mt-6">
        <button
          disabled={!selected}
          onClick={() => setOpenQR(true)}
          className="w-full p-3 rounded-xl bg-green-500 disabled:bg-white/10"
        >
          สร้าง QR Code
        </button>
      </div>

      {/* QR MODAL */}
      {openQR && current && (
        <QRModal
          amount={current.amount}
          point={current.point}
          bonus={current.bonus}
          onClose={() => setOpenQR(false)}
        />
      )}
    </div>
  );
}