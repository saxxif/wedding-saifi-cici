"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function LoveQuote() {
  const ref = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  // cinematic camera drift (ufotable-like parallax)
  const y = useTransform(scrollYProgress, [0, 1], [0, 120]);
  const scale = useTransform(scrollYProgress, [0, 1], [1.1, 1]);

  return (
    <section ref={ref} className="relative h-[200vh] bg-black">

      {/* Sticky cinematic stage */}
      <div className="sticky top-0 h-screen overflow-hidden">

        {/* Background Video (soft anime film tone) */}
        <motion.video
          style={{ scale, y }}
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src="/videos/love.mp4" type="video/mp4" />
        </motion.video>

        {/* 🎨 Ufotable cinematic color grading */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/30 to-black/90" />
        <div className="absolute inset-0 bg-blue-500/5 mix-blend-screen" />

        {/* 🌫️ Atmospheric fog layer */}
        <div className="absolute inset-0 opacity-40">
          <div className="absolute w-[1200px] h-[1200px] bg-white/10 blur-[180px] rounded-full top-[-30%] left-1/2 -translate-x-1/2" />
        </div>

        {/* ✨ Light rays (anime cinematic signature) */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.12),transparent_60%)]" />

        {/* 🎬 vignette (film framing) */}
        <div className="absolute inset-0 shadow-[inset_0_0_200px_rgba(0,0,0,0.95)]" />

        {/* Content */}
        <div className="relative z-10 flex h-full items-center justify-center px-6">

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.6, ease: [0.16, 1, 0.3, 1] }}
            className="max-w-4xl text-center text-white"
          >

            {/* small cinematic label */}
            <p className="tracking-[14px] text-[11px] text-white/50 uppercase">
              Ar-Rum · 21
            </p>

            {/* main quote (ufotable style typography = soft + emotional) */}
            <h2
              className="mt-10 text-2xl md:text-5xl leading-[1.8] font-extralight text-white/90"
              style={{ fontFamily: "var(--font-cormorant)" }}
            >
              “Dan di antara tanda-tanda kekuasaan-Nya,
              Dia menciptakan untukmu pasangan hidup dari jenismu sendiri,
              agar kamu merasa tenteram kepadanya,
              dan Dia menjadikan di antaramu rasa kasih dan sayang.”
            </h2>

            {/* cinematic divider (very subtle glow line) */}
            <motion.div
              initial={{ width: 0, opacity: 0 }}
              whileInView={{ width: 200, opacity: 1 }}
              transition={{ delay: 0.8, duration: 1.4 }}
              className="h-[1px] mx-auto my-12 bg-gradient-to-r from-transparent via-white/70 to-transparent"
            />

            {/* couple name (hero key visual feel) */}
            <p
              className="text-2xl md:text-3xl tracking-[10px] text-white/80 uppercase"
              style={{ fontFamily: "var(--font-cormorant)" }}
            >
              Saifi · Cici
            </p>

            {/* subtitle like anime ending card */}
            <p className="mt-4 text-xs tracking-[6px] text-white/30 uppercase">
              A Moment That Becomes Eternity
            </p>

          </motion.div>
        </div>
      </div>
    </section>
  );
}