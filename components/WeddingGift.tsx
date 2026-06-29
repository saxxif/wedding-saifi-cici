"use client";

import { motion } from "framer-motion";
import {
  Gift,
  CreditCard,
  Copy,
  Check,
} from "lucide-react";
import { useState } from "react";

export default function WeddingGift() {
  const [copied, setCopied] = useState("");

  const copyText = async (text: string, type: string) => {
    await navigator.clipboard.writeText(text);
    setCopied(type);
    setTimeout(() => setCopied(""), 2000);
  };

  return (
    <section id="gift" className="relative overflow-hidden bg-[#0a0a0a] py-28 select-none">
      
      {/* ========================================== */}
      {/* LIGHTING & LUXURY BACKGROUND EFFECTS       */}
      {/* ========================================== */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Radial Dark Gradient Overlay */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(212,180,131,0.05),transparent_70%)]" />
        
        {/* Golden Ambient Glow Premium */}
        <motion.div
          animate={{ scale: [1, 1.05, 1], opacity: [0.15, 0.3, 0.15] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-[#d4b483]/5 blur-[120px] pointer-events-none"
        />
        
        {/* Monogram Huruf Besar Transparan di Background */}
        <div
          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-[200px] text-[#d4b483]/[0.02] pointer-events-none select-none leading-none"
          style={{ fontFamily: "var(--font-cormorant)" }}
        >
          GIFT
        </div>
      </div>

      <div className="relative z-10 max-w-[430px] mx-auto px-6">
        
        {/* ========================================== */}
        {/* HEADER TITLE (TYPOGRAPHY LUXURY)           */}
        {/* ========================================== */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <div className="flex justify-center">
            <div className="w-14 h-14 rounded-full bg-white/[0.03] border border-white/[0.08] backdrop-blur-md flex items-center justify-center shadow-2xl">
              <Gift size={22} className="text-[#d4b483]" />
            </div>
          </div>
          <p className="mt-6 uppercase tracking-[0.5em] text-[#d4b483] text-[9px] font-medium pl-[0.5em]">
            Wedding Gift
          </p>
          <h2 className="mt-4 text-[54px] leading-none text-white font-light drop-shadow-md" style={{ fontFamily: "var(--font-cormorant)" }}>
            Send Love
          </h2>
          <div className="w-16 h-[0.5px] mx-auto mt-6 bg-gradient-to-r from-transparent via-[#d4b483]/60 to-transparent" />
          <p className="mt-6 text-white/50 text-[13.5px] leading-relaxed max-w-[310px] mx-auto font-light">
            Kehadiran dan doa restu Anda merupakan hadiah terindah bagi kami. 
            Namun apabila ingin memberikan tanda kasih, dapat melalui informasi berikut.
          </p>
        </motion.div>

        {/* ========================================== */}
        {/* REKENING CARD (BLACK LUXURY DESIGN)        */}
        {/* ========================================== */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-12 bg-white/[0.02] backdrop-blur-2xl rounded-[32px] border border-white/[0.06] shadow-[0_30px_70px_rgba(0,0,0,0.6)] p-8 relative overflow-hidden group"
        >
          {/* Ornamen Kilatan Gradasi Lembut di Card */}
          <div className="absolute inset-0 bg-gradient-to-br from-white/[0.02] via-transparent to-transparent pointer-events-none" />

          <div className="flex items-center gap-2.5">
            <CreditCard size={16} className="text-[#d4b483]" />
            <span className="uppercase tracking-[0.25em] text-[#d4b483] text-[10px] font-medium pl-[0.25em]">Bank BCA</span>
          </div>

          <h3 className="mt-6 text-[38px] leading-none text-white tracking-wide font-normal" style={{ fontFamily: "var(--font-cormorant)" }}>
            5120629125
          </h3>
          
          <p className="mt-2.5 text-white/60 text-[13px] font-light tracking-wide">
            Nicky Citra Auliya
          </p>

          <button
            onClick={() => copyText("5120629125", "bca")}
            className={`mt-8 w-full py-4 rounded-full text-[10px] uppercase tracking-[0.25em] font-semibold flex items-center justify-center gap-2 transition-all duration-300 active:scale-[0.98] border shadow-lg ${
              copied === "bca"
                ? "bg-[#d4b483] text-black border-[#d4b483]"
                : "bg-white/[0.04] text-[#d4b483] border-[#d4b483]/30 hover:bg-[#d4b483] hover:text-black hover:border-[#d4b483]"
            }`}
          >
            {copied === "bca" ? (
              <>
                <Check size={14} className="stroke-[3]" /> Copied
              </>
            ) : (
              <>
                <Copy size={14} /> Copy Account Number
              </>
            )}
          </button>
        </motion.div>
      </div>
    </section>
  );
}