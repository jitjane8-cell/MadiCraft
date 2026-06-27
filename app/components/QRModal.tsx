"use client";

import { useEffect, useState } from "react";

interface Props {
  amount: number;
  point: number;
  bonus: number;
  onClose: () => void;
}

export default function QRModal({ amount, point, bonus, onClose }: Props) {
  const [timeLeft, setTimeLeft] = useState(600);
  const [status, setStatus] = useState("pending");

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(t => {
        if (t <= 1) {
          clearInterval(timer);
          setStatus("expired");
          return 0;
        }
        return t - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  // จำลอง "จ่ายสำเร็จ" หลัง 7 วิ (เอาไว้ต่อ backend จริงทีหลัง)
  useEffect(() => {
    const fake = setTimeout(() => {
      if (status === "pending") setStatus("paid");
    }, 7000);

    return () => clearTimeout(fake);
  }, [status]);

  return (
    <div className="fixed inset-0 bg-black/70 flex items-center justify-center">
      <div className="bg-[#111] p-6 rounded-xl w-[320px] text-center border border-white/10">
        
        <h2 className="text-xl font-bold mb-2">PromptPay QR</h2>

        <div className="bg-white p-3 rounded-lg mb-3">
          <div className="text-black font-bold">QR MOCK</div>
        </div>

        <div className="text-sm mb-2">ยอด: {amount} บาท</div>
        <div className="text-sm mb-2">💎 {point} Point (+{bonus})</div>

        {status === "pending" && (
          <div className="text-yellow-400">
            ⏳ เหลือเวลา {timeLeft}s
          </div>
        )}

        {status === "paid" && (
          <div className="text-green-400 font-bold">
            ✅ ชำระสำเร็จ
          </div>
        )}

        {status === "expired" && (
          <div className="text-red-400 font-bold">
            ❌ QR หมดอายุ
          </div>
        )}

        <button
          onClick={onClose}
          className="mt-4 w-full bg-white/10 hover:bg-white/20 p-2 rounded-lg"
        >
          ปิด
        </button>
      </div>
    </div>
  );
}