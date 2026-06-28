"use client";

import { motion } from "framer-motion";
import { useEffect, useState, useCallback, useMemo } from "react";

// ==========================================
// 1. STYLES (Gradasi Emas Mewah)
// ==========================================
const goldTextStyle = {
  fontFamily: "var(--font-cormorant), serif",
  background: "linear-gradient(135deg, #fdfbf7 0%, #d4af37 35%, #9b6a2e 60%, #e6c887 80%, #fdfbf7 100%)",
  WebkitBackgroundClip: "text",
  color: "transparent",
};

const premiumNoiseLayer = `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`;

// ==========================================
// 2. MAIN COMPONENT
// ==========================================
export default function Hero() {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const scrollToNext = useCallback(() => {
    document.getElementById("bride-groom")?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  }, []);

  // --- PARTICLE ENGINES ---
  const backgroundDust = useMemo(() => Array.from({ length: 25 }, (_, i) => ({
    id: `bg-dust-${i}`,
    left: (i * 17) % 100,
    size: 1 + (i % 2),
    duration: 18 + (i % 12),
    delay: (i % 5) * 0.4,
    drift: (i % 2 === 0 ? 1 : -1) * (15 + (i % 20)),
  })), []);

  const midSparks = useMemo(() => Array.from({ length: 12 }, (_, i) => ({
    id: `mid-spark-${i}`,
    left: (i * 31) % 100,
    size: 2 + (i % 2),
    duration: 14 + (i % 8),
    delay: (i % 3) * 0.7,
    drift: (i % 2 === 0 ? 1 : -1) * (20 + (i % 25)),
  })), []);

  return (
    <section
      className="
      relative
      h-screen
      w-full
      max-w-md
      mx-auto
      overflow-hidden
      bg-[#050505]
      box-border
      flex
      flex-col
      justify-between
      px-6
      py-12
      "
    >
      {/* ========================================== */}
      {/* BACKGROUND & ATMOSPHERE RENDERER */}
      {/* ========================================== */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <div 
          className="absolute inset-0 opacity-[0.05] mix-blend-screen"
          style={{ backgroundImage: premiumNoiseLayer }}
        />
        <div className="absolute inset-0 bg-gradient-to-br from-[#120e0a] via-[#050505] to-[#0a0805]" />
        
        {/* Pendaran Cahaya Spot di Tengah (Aura) */}
        <motion.div
          animate={{ opacity: [0.15, 0.35, 0.15], scale: [1, 1.1, 1] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute left-1/2 top-[40%] -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full bg-[#c89b56]/20 blur-[130px]"
        />
      </div>

      {/* ========================================== */}
      {/* INLINE HIGH-RESOLUTION SVG ORNAMENTS */}
      {/* ========================================== */}
      <div className="absolute inset-0 pointer-events-none z-20 p-5">
        <div className="relative w-full h-full border-[0.5px] border-[#d4af37]/20 rounded-xl">
          <svg className="absolute -top-[1px] -left-[1px] w-8 h-8 text-[#d4af37]/60" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 40V0H40" stroke="currentColor" strokeWidth="1" />
            <circle cx="4" cy="4" r="2" fill="currentColor" />
          </svg>
          <svg className="absolute -top-[1px] -right-[1px] w-8 h-8 text-[#d4af37]/60" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M40 40V0H0" stroke="currentColor" strokeWidth="1" />
            <circle cx="36" cy="4" r="2" fill="currentColor" />
          </svg>
          <svg className="absolute -bottom-[1px] -left-[1px] w-8 h-8 text-[#d4af37]/60" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M40 40H0V0" stroke="currentColor" strokeWidth="1" />
            <circle cx="4" cy="36" r="2" fill="currentColor" />
          </svg>
          <svg className="absolute -bottom-[1px] -right-[1px] w-8 h-8 text-[#d4af37]/60" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 40H40V0" stroke="currentColor" strokeWidth="1" />
            <circle cx="36" cy="36" r="2" fill="currentColor" />
          </svg>
        </div>
      </div>

      {/* ========================================== */}
      {/* PARTICLE RENDERER */}
      {/* ========================================== */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-10">
        {isMounted && (
          <>
            {backgroundDust.map((p) => (
              <motion.div
                key={p.id}
                animate={{ y: [0, -1000], x: [0, p.drift], opacity: [0, 0.4, 0] }}
                transition={{ duration: p.duration, repeat: Infinity, ease: "linear", delay: p.delay }}
                className="absolute rounded-full bg-[#f9f5e8] blur-[1px]"
                style={{ left: `${p.left}%`, width: `${p.size}px`, height: `${p.size}px`, bottom: "-20px" }}
              />
            ))}
            {midSparks.map((p) => (
              <motion.div
                key={p.id}
                animate={{ y: [0, -1000], x: [0, -p.drift], opacity: [0, 0.8, 0] }}
                transition={{ duration: p.duration, repeat: Infinity, ease: "linear", delay: p.delay }}
                className="absolute rounded-full bg-[#d4af37] shadow-[0_0_8px_rgba(212,175,55,0.8)]"
                style={{ left: `${p.left}%`, width: `${p.size}px`, height: `${p.size}px`, bottom: "-20px" }}
              />
            ))}
          </>
        )}
      </div>

      {/* ========================================== */}
      {/* TOP SECTION: KOP */}
      {/* ========================================== */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={isMounted ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 1.5, ease: "easeOut" }}
        className="relative z-30 text-center w-full mt-4 select-none flex flex-col items-center"
      >
        <div className="flex items-center justify-center gap-3 opacity-80 mb-4">
          <div className="h-[1px] w-8 bg-gradient-to-r from-transparent to-[#c89b56]" />
          <div className="w-1.5 h-1.5 rotate-45 bg-[#c89b56]" />
          <div className="h-[1px] w-8 bg-gradient-to-l from-transparent to-[#c89b56]" />
        </div>
        <p className="uppercase tracking-[0.5em] text-[8.5px] text-[#b09467] font-medium pl-[0.5em]">
          THE WEDDING OF
        </p>
      </motion.div>

      {/* ========================================== */}
      {/* MIDDLE SECTION: TYPOGRAPHY (BUG FIXED) */}
      {/* ========================================== */}
      <div className="relative z-30 text-center w-full flex-1 flex flex-col justify-center select-none pt-2">
        
        {/* NAMA PERTAMA: NICKY */}
        <div className="relative inline-block w-full">
          <motion.h1
            initial={{ opacity: 0, y: 30, filter: "blur(12px)", scale: 0.95 }}
            animate={isMounted ? { opacity: 1, y: 0, filter: "blur(0px)", scale: 1.2 } : {}}
            transition={{ duration: 1.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="text-[68px] font-bold leading-[0.85] tracking-[-0.03em] flex justify-center drop-shadow-[0_5px_15px_rgba(0,0,0,0.8)]"
            style={goldTextStyle}
          >
            NICKY
          </motion.h1>
          {isMounted && (
            <motion.div
              animate={{ x: ["-100%", "300%"] }}
              transition={{ duration: 4.5, repeat: Infinity, ease: "linear", delay: 1 }}
              className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent blur-[5px] pointer-events-none mix-blend-overlay"
            />
          )}
        </div>

        {/* ORNAMEN AMPERSAND (&) */}
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={isMounted ? { opacity: 0.9, scale: 1 } : {}}
          transition={{ delay: 0.8, duration: 1.5, ease: "easeOut" }}
          className="text-[#c89b56] text-[36px] my-3 italic font-light relative"
          style={{ fontFamily: "var(--font-cormorant), serif" }}
        >
          &
        </motion.div>

        {/* NAMA KEDUA: SAIFI */}
        <div className="relative inline-block w-full">
          <motion.h1
            initial={{ opacity: 0, y: 30, filter: "blur(12px)", scale: 0.95 }}
            animate={isMounted ? { opacity: 1, y: 0, filter: "blur(0px)", scale: 1.2 } : {}}
            transition={{ duration: 1.8, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="text-[68px] font-bold leading-[0.85] tracking-[-0.03em] flex justify-center drop-shadow-[0_5px_15px_rgba(0,0,0,0.8)]"
            style={goldTextStyle}
          >
            SAIFI
          </motion.h1>
          {isMounted && (
            <motion.div
              animate={{ x: ["-100%", "300%"] }}
              transition={{ duration: 4.5, repeat: Infinity, ease: "linear", delay: 2.5 }}
              className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent blur-[5px] pointer-events-none mix-blend-overlay"
            />
          )}
        </div>

        {/* TAGLINE DESTINY */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={isMounted ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 1.2, duration: 1.2 }}
          className="mt-8 flex flex-col items-center gap-4"
        >
          <p className="uppercase tracking-[0.35em] text-[9px] text-[#fdfbf7] opacity-80 font-light pl-[0.35em]">
            Two Souls, One Destiny
          </p>
        </motion.div>
      </div>

      {/* ========================================== */}
      {/* BOTTOM SECTION: FOTO & ACTION */}
      {/* ========================================== */}
      <div className="relative z-20 w-full flex flex-col items-center justify-end">
        
        {/* Parallax Orbital Rings */}
        <div className="absolute inset-x-0 bottom-[100px] h-[250px] pointer-events-none z-10 flex justify-center items-center">
          <motion.div
            animate={{ rotateZ: 360, rotateX: 60, rotateY: 10 }}
            transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
            className="absolute w-[140%] h-[200px] rounded-full border-[0.5px] border-[#d4af37]/20 border-t-[#d4af37]/60"
          />
          <motion.div
            animate={{ rotateZ: -360, rotateX: 65, rotateY: -10 }}
            transition={{ duration: 35, repeat: Infinity, ease: "linear" }}
            className="absolute w-[120%] h-[180px] rounded-full border-[0.5px] border-[#c89b56]/15 border-b-[#c89b56]/50"
          />
        </div>

        {/* Kontainer Foto Mempelai */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={isMounted ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 1.4, duration: 2, ease: [0.16, 1, 0.3, 1] }}
          className="relative w-[120%] max-w-[450px] drop-shadow-[0_20px_40px_rgba(0,0,0,0.8)] z-20"
        >
          <motion.img
            src="/images/image.png"
            alt="Wedding Couple"
            animate={{ y: [-160, -180, -160] }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
            className="relative w-full h-auto object-contain block"
            loading="eager"
          />
        </motion.div>

        {/* Tombol Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isMounted ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 1.8, duration: 1.5 }}
          className="relative z-40 w-full flex flex-col items-center mt-6 mb-2"
        >
          <button
            onClick={scrollToNext}
            className="group relative flex flex-col items-center justify-center bg-transparent border-none cursor-pointer focus:outline-none"
          >
            <span className="uppercase tracking-[0.4em] text-[8.5px] text-[#c89b56] font-semibold mb-2 group-hover:text-[#fdfbf7] transition-colors duration-500 pl-[0.4em]">
              Scroll to Explore
            </span>
            <motion.div
              animate={{ y: [0, 6, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              className="w-5 h-8 rounded-full border-[0.5px] border-[#c89b56]/40 flex justify-center pt-[3px] group-hover:border-[#fdfbf7]/60 transition-colors duration-500"
            >
              <div className="w-[2px] h-2 rounded-full bg-[#c89b56] group-hover:bg-[#fdfbf7] transition-colors duration-500" />
            </motion.div>
          </button>
        </motion.div>

      </div>
    </section>
  );
}