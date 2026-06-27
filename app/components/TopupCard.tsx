"use client";

import { motion } from "framer-motion";
import { TopupOption } from "@/lib/topup";

interface Props {
  option: TopupOption;
  selected: boolean;
  onClick: () => void;
}

export default function TopupCard({ option, selected, onClick }: Props) {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.98 }}
      onClick={onClick}
      className={`cursor-pointer rounded-xl border p-4 transition-all ${
        selected
          ? "border-green-400 bg-green-500/10 shadow-lg"
          : "border-white/10 bg-white/5"
      }`}
    >
      <div className="text-lg font-bold">{option.amount} บาท</div>
      <div className="text-sm text-white/70">
        💎 {option.point} Point
      </div>
      {option.bonus > 0 && (
        <div className="text-xs text-green-400 mt-1">
          🎁 โบนัส +{option.bonus}
        </div>
      )}
    </motion.div>
  );
}