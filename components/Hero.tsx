"use client";

import { motion } from "framer-motion";
import { useEffect, useState, useCallback, useMemo } from "react";

// ==========================================
// 1. ANIMATION CONSTANTS & CONFIGURATIONS
// ==========================================
const AMBIENT_GLOW_ANIMATION = {
  opacity: [0.2, 0.45, 0.2],
  scale: [1, 1.15, 1],
};

const LUXURY_GOLD_GRADIENT = {
  fontFamily: "var(--font-cormorant)",
  background: "linear-gradient(180deg, #f5e2bb, #c89b56, #9b6a2e)",
  WebkitBackgroundClip: "text",
  color: "transparent",
};

const TITLE_GOLD_GRADIENT = {
  fontFamily: "var(--font-cormorant)",
  background: "linear-gradient(180deg, #efd8aa, #c89b56, #9e6b2c)",
  WebkitBackgroundClip: "text",
  color: "transparent",
};

const goldTextStyle = LUXURY_GOLD_GRADIENT;

// ==========================================
// 2. MAIN HERO COMPONENT
// ==========================================
export default function Hero() {
  const [heroReady, setHeroReady] = useState(false);

  // Listener untuk membuka cover undangan
  useEffect(() => {
    const handleOpenInvitation = () => {
      setHeroReady(true);
    };

    window.addEventListener("open-invitation", handleOpenInvitation);
    return () => {
      window.removeEventListener("open-invitation", handleOpenInvitation);
    };
  }, []);

  // Handler navigasi smooth scroll
  const scrollToNextSection = useCallback(() => {
    document.getElementById("bride-groom")?.scrollIntoView({
      behavior: "smooth",
    });
  }, []);

  // Generator Partikel Emas Bermutu Tinggi
  const calculatedGoldDust = useMemo(
    () =>
      Array.from({ length: 18 }, (_, i) => ({
        id: `dust-particle-${i}`,
        left: `${(i * 7) % 100}%`,
        duration: 15 + i,
        delay: i * 0.5,
      })),
    []
  );

  return (
    <section className="relative h-screen overflow-hidden bg-[#f8f4ed]">
      
      {/* ========================================== */}
      {/* LAYER 1: BACKGROUND & ATMOSPHERE OVALS    */}
      {/* ========================================== */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute inset-0 bg-[#f8f4ed]" />

        {/* Kubah Besar Latar Belakang */}
        <motion.div
          initial={{ scale: 1.25, opacity: 0 }}
          animate={heroReady ? { scale: 1, opacity: 1 } : undefined}
          transition={{ duration: 2, ease: [0.22, 1, 0.36, 1] }}
          className="absolute left-1/2 top-0 -translate-x-1/2 h-[120%] w-[125%] rounded-t-[1000px] bg-[#fbf8f2] shadow-[inset_0_0_120px_rgba(0,0,0,0.04)]"
        />

        {/* Sayap Kanan Melengkung */}
        <motion.div
          initial={{ x: 150, opacity: 0 }}
          animate={heroReady ? { x: 0, opacity: 1 } : undefined}
          transition={{ duration: 2 }}
          className="absolute right-[-30%] top-0 h-full w-[70%] rounded-l-[400px] bg-[#e9dfd0]"
        />

        {/* Pendaran Energi Aura Emas Tengah */}
        <motion.div
          animate={AMBIENT_GLOW_ANIMATION}
          transition={{ duration: 10, repeat: Infinity, repeatType: "loop" }}
          className="absolute left-1/2 top-[30%] -translate-x-1/2 h-[500px] w-[500px] rounded-full bg-[#d6b27c]/25 blur-[60px]"
        />
      </div>

      {/* ========================================== */}
      {/* LAYER 2: DECORATIVE FLOATING FLOWERS      */}
      {/* ========================================== */}
      <motion.img
        src="/images/flower.png"
        alt="Top Left Flower Ornament"
        initial={{ opacity: 0, x: -100, y: -100 }}
        animate={{ opacity: 0.5, x: 0, y: [0, -15, 0], rotate: [0, 5, 0] }}
        transition={{ duration: 8, repeat: Infinity, repeatType: "mirror" }}
        className="absolute left-[-60px] top-[-30px] w-[220px] blur-[2px] will-change-transform z-10"
      />

      <motion.img
        src="/images/flower.png"
        alt="Bottom Right Flower Ornament"
        initial={{ opacity: 0, x: 100, y: 100 }}
        animate={{ opacity: 0.4, x: 0, y: [0, 15, 0], rotate: [0, -5, 0] }}
        transition={{ duration: 10, repeat: Infinity, repeatType: "mirror" }}
        className="absolute right-[-80px] bottom-[-20px] w-[260px] blur-[4px] will-change-transform z-10"
      />

      {/* ========================================== */}
      {/* LAYER 3: SPARKLES & GOLD DUST PARTICLES   */}
      {/* ========================================== */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-10">
        {/* Bintang Sparkle Kiri */}
        <motion.div
          animate={{ opacity: [0.3, 1, 0.3], scale: [1, 1.3, 1] }}
          transition={{ duration: 4, repeat: Infinity }}
          className="absolute left-[12%] top-[28%] text-[#d4b483]/70 text-xl"
        >
          ✦
        </motion.div>

        {/* Bintang Sparkle Kanan */}
        <motion.div
          animate={{ opacity: [0.3, 1, 0.3], scale: [1, 1.4, 1] }}
          transition={{ duration: 5, repeat: Infinity }}
          className="absolute right-[14%] top-[35%] text-[#d4b483]/60 text-lg"
        >
          ✦
        </motion.div>

        {/* Floating Particle Engine Mapping */}
        {calculatedGoldDust.map((dust) => (
          <motion.div
            key={dust.id}
            animate={{ y: [0, -800], opacity: [0, 1, 1, 0], x: [0, 20, -10] }}
            transition={{ duration: dust.duration, repeat: Infinity, ease: "linear", delay: dust.delay }}
            className="absolute h-[3px] w-[3px] rounded-full bg-[#d4b483] shadow-[0_0_15px_rgba(212,180,131,0.8)] will-change-transform"
            style={{ left: dust.left, bottom: "-50px" }}
          />
        ))}
      </div>

      {/* ========================================== */}
      {/* LAYER 4: TOP HEADERS (INITIALS & KOP)     */}
      {/* ========================================== */}
      <motion.div
        initial={{ opacity: 0, scale: 0.5, y: -60, rotate: -15 }}
        animate={heroReady ? { opacity: 1, scale: 1, y: 0, rotate: 0 } : undefined}
        transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1] }}
        className="absolute top-10 left-1/2 -translate-x-1/2 z-30 text-center tracking-[0.1em]"
      >
        <h2 className="text-[52px] font-medium leading-none tracking-[0.05em]" style={TITLE_GOLD_GRADIENT}>
          N &bull; S
        </h2>
        <p className="mt-3.5 uppercase tracking-[0.5em] text-[8.5px] text-[#826840] font-medium pl-[0.5em]">
          THE WEDDING OF
        </p>
      </motion.div>

      {/* Garis Pembatas Horisontal Atas */}
      <motion.div
        initial={{ opacity: 0, scaleX: 0 }}
        animate={heroReady ? { opacity: 1, scaleX: 1 } : undefined}
        transition={{ delay: 0.4, duration: 1 }}
        className="absolute top-[115px] left-1/2 -translate-x-1/2 flex items-center gap-4 z-30"
      >
        <div className="h-px w-14 bg-gradient-to-r from-transparent to-[#c89b56]" />
        <div className="text-[#c89b56] text-xs">✦</div>
        <div className="h-px w-14 bg-gradient-to-l from-transparent to-[#c89b56]" />
      </motion.div>

      {/* ========================================== */}
      {/* LAYER 5: TYPOGRAPHY BRANDING MAIN NAMES   */}
      {/* ========================================== */}
      <div className="absolute top-[155px] left-1/2 -translate-x-1/2 z-30 text-center w-full px-4">
        
        {/* NAMA MEMPELAI 1: NICKY */}
        <div className="relative inline-block w-full">
          <motion.h1
            initial={{ opacity: 0, y: 60, filter: "blur(20px)" }}
            animate={heroReady ? { opacity: 1, y: 0, filter: "blur(0px)" } : undefined}
            transition={{ delay: 0.8, duration: 1.5 }}
            className="text-[72px] font-bold leading-[0.85] tracking-[-0.04em] drop-shadow-[0_4px_12px_rgba(0,0,0,0.05)]"
            style={goldTextStyle}
          >
            NICKY
          </motion.h1>

          {/* Efek Kilatan Laser Shimmer (Nicky) */}
          <motion.div
            animate={{ x: ["-200%", "300%"] }}
            transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
            className="absolute inset-0 bg-gradient-to-r from-transparent via-white/35 to-transparent blur-md pointer-events-none mix-blend-overlay"
          />
        </div>

        {/* Simbol Pembagi Ampersand */}
        <motion.div
          initial={{ opacity: 0, scale: 0.4 }}
          animate={heroReady ? { opacity: 1, scale: 1 } : undefined}
          transition={{ delay: 1.2, duration: 1 }}
          className="text-[52px] leading-none my-1.5 italic font-light drop-shadow-sm"
          style={goldTextStyle}
        >
          &
        </motion.div>

        {/* NAMA MEMPELAI 2: SAIFI */}
        <div className="relative inline-block w-full">
          <motion.h1
            initial={{ opacity: 0, y: 60, filter: "blur(20px)" }}
            animate={heroReady ? { opacity: 1, y: 0, filter: "blur(0px)" } : undefined}
            transition={{ delay: 1.5, duration: 1.5 }}
            className="text-[72px] font-bold leading-[0.85] tracking-[-0.04em] drop-shadow-[0_4px_12px_rgba(0,0,0,0.05)]"
            style={goldTextStyle}
          >
            SAIFI
          </motion.h1>

          {/* Efek Kilatan Laser Shimmer (Saifi) */}
          <motion.div
            animate={{ x: ["-200%", "300%"] }}
            transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
            className="absolute inset-0 bg-gradient-to-r from-transparent via-white/35 to-transparent blur-md pointer-events-none mix-blend-overlay"
          />
        </div>

        {/* Tagline Visi */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={heroReady ? { opacity: 0.9 } : undefined}
          transition={{ delay: 2.2, duration: 1 }}
          className="mt-5 uppercase tracking-[0.35em] text-[9.5px] text-[#5c5042] font-medium pl-[0.35em]"
        >
          TWO SOULS, ONE DESTINY
        </motion.p>
      </div>

      {/* ========================================== */}
      {/* LAYER 6: PARALLAX GEOMETRIC ORBITAL RINGS */}
      {/* ========================================== */}
      <motion.div
        initial={{ opacity: 0, scale: 0.6 }}
        animate={{ opacity: 1, scale: 1, rotate: 360 }}
        transition={{
          opacity: { delay: 1.8, duration: 2 },
          scale: { delay: 1.8, duration: 2 },
          rotate: { duration: 30, repeat: Infinity, ease: "linear" },
        }}
        className="absolute left-1/2 bottom-[170px] -translate-x-1/2 h-[250px] w-[700px] rounded-full border border-[#d4b483]/30 will-change-transform"
      />

      <motion.div
        animate={{ rotate: [360, 0] }}
        transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
        className="absolute left-1/2 bottom-[170px] -translate-x-1/2 h-[210px] w-[620px] rounded-full border-t-2 border-[#f7dca5] will-change-transform"
      />

      {/* Sapuan Cahaya Flash Menyilang Layar */}
      <motion.div
        initial={{ x: "-150%" }}
        animate={heroReady ? { x: "350%" } : undefined}
        transition={{ delay: 2, duration: 3, ease: "easeInOut" }}
        className="absolute inset-y-0 w-32 bg-gradient-to-r from-transparent via-white/40 to-transparent blur-3xl z-40 will-change-transform"
      />

      {/* ========================================== */}
      {/* LAYER 7: CENTRAL COUPLE IMMERSIVE PHOTO   */}
      {/* ========================================== */}
      <motion.div
        initial={{ opacity: 0, y: 220, scale: 0.88 }}
        animate={heroReady ? { opacity: 1, y: 0, scale: 1 } : undefined}
        transition={{ delay: 1.8, duration: 2.4, ease: [0.22, 1, 0.36, 1] }}
        className="absolute bottom-14 left-1/2 -translate-x-1/2 z-20 w-[100%] max-w-[720px]"
      >
        <motion.img
          src="/images/image.png"
          alt="Wedding Couple Main Frame"
          animate={{ y: [50, 30, 50] }}
          transition={{ duration: 6, repeat: Infinity, repeatType: "mirror" }}
          className="w-full object-contain will-change-transform"
          loading="eager"
          decoding="async"
        />
      </motion.div>

      {/* ========================================== */}
      {/* LAYER 8: INTERACTIVE SCROLL DOWN ACTIONS  */}
      {/* ========================================== */}
      <motion.button
        onClick={scrollToNextSection}
        initial={{ opacity: 0, y: 30 }}
        animate={heroReady ? { opacity: 1, y: 0 } : undefined}
        transition={{ delay: 3.8, duration: 3 }}
        className="absolute bottom-0 left-1/2 -translate-x-1/2 z-30 text-center"
      >
        <p className="uppercase tracking-[0.4em] text-[8.5px] text-[#9a7b4d] font-semibold pl-[0.4em]">
          Scroll Down
        </p>

        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          className="mt-1 text-lg text-[#9a7b4d] will-change-transform font-light"
        >
          ˅
        </motion.div>
      </motion.button>
    </section>
  );
}