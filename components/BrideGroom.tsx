"use client";

import { motion } from "framer-motion";

export default function BrideGroom() {
  return (
    <section
      id="bride-groom"
      className="
      relative
      overflow-hidden
      bg-[#0a0a0a]
      pt-16
      pb-24
      select-none
      w-full
      flex
      flex-col
      items-center
      "
    >
      {/* ========================================== */}
      {/* LIGHTING & LUXURY BACKGROUND EFFECTS       */}
      {/* ========================================== */}
      <div className="absolute inset-0 w-full h-full pointer-events-none">
        {/* Radial Dark Gradient Overlay */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(212,180,131,0.05),transparent_70%)]" />

        {/* Golden Ambient Glow Premium */}
        <motion.div
          animate={{
            scale: [1, 1.08, 1],
            opacity: [0.15, 0.3, 0.15],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="
          absolute
          left-1/2
          top-1/2
          -translate-x-1/2
          -translate-y-1/2
          h-[700px]
          w-[700px]
          rounded-full
          bg-[#d4b483]/5
          blur-[140px]
          "
        />

        {/* Monogram Huruf Besar Transparan di Background */}
        <div
          className="
          absolute
          inset-0
          opacity-[0.02]
          flex
          items-center
          justify-center
          text-[240px]
          text-[#d4b483]
          leading-none
          select-none
          "
          style={{
            fontFamily: "var(--font-cormorant)",
          }}
        >
          NS
        </div>
      </div>

      {/* FALLING LEAVES */}
      {[...Array(18)].map((_, i) => (
        <motion.div
          key={i}
          animate={{
            y: ["-10vh", "120vh"],
            x: [0, 40, -30, 20, 0],
            rotate: [0, 120, 240, 360],
            opacity: [0, 0.6, 0.6, 0],
          }}
          transition={{
            duration: 18 + i,
            repeat: Infinity,
            ease: "linear",
            delay: i * 0.8,
          }}
          className="
          absolute
          z-[2]
          text-[#d4b483]/40
          pointer-events-none
          "
          style={{
            left: `${(i * 7.5) % 100}%`,
            top: "-50px",
            fontSize: `${16 + (i % 4) * 4}px`,
          }}
        >
          ❦
        </motion.div>
      ))}

      {/* FLOATING SPARKLES */}
      {[...Array(10)].map((_, i) => (
        <motion.div
          key={`sparkle-${i}`}
          animate={{
            opacity: [0, 0.7, 0],
            scale: [0.5, 1.2, 0.5],
          }}
          transition={{
            duration: 3 + i,
            repeat: Infinity,
            delay: i * 0.8,
          }}
          className="
          absolute
          text-[#d4b483]/60
          text-lg
          "
          style={{
            left: `${10 + i * 8}%`,
            top: `${15 + (i % 5) * 12}%`,
          }}
        >
          ✦
        </motion.div>
      ))}

      <div
        className="
        relative
        z-10
        max-w-[700px]
        w-full
        mx-auto
        px-7
        flex
        flex-col
        items-center
        "
      >
        {/* ========================================== */}
        {/* HEADER SECTION                             */}
        {/* ========================================== */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="flex flex-col items-center text-center w-full"
        >
          <motion.div
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.4, 1, 0.4],
            }}
            transition={{ duration: 4, repeat: Infinity }}
            className="text-[#d4b483] text-sm flex justify-center items-center h-4"
          >
            ✦
          </motion.div>

          <motion.h2
            animate={{ y: [0, -4, 0] }}
            transition={{ duration: 4, repeat: Infinity }}
            className="
            mt-3
            text-[46px]
            md:text-[58px]
            text-white
            font-light
            drop-shadow-md
            leading-tight
            w-full
            text-center
            "
            style={{
              fontFamily: "var(--font-cormorant)",
            }}
          >
            Bride & Groom
          </motion.h2>

          <div className="flex items-center justify-center gap-3 mt-4 h-4">
            <div className="w-12 h-[0.5px] bg-[#d4b483]/40" />
            <div className="text-[#d4b483]/60 text-xs flex items-center justify-center">✦</div>
            <div className="w-12 h-[0.5px] bg-[#d4b483]/40" />
          </div>

          <p className="mt-6 uppercase tracking-[0.25em] text-[10px] leading-6 text-white/40 max-w-[340px] text-center font-light">
            With The Grace Of Allah, We Joyfully Invite You
            <br />
            To Our Beginning Of Forever
          </p>
        </motion.div>

        {/* ========================================== */}
        {/* THE BRIDE SECTION                          */}
        {/* ========================================== */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="mt-16 flex flex-col items-center text-center w-full"
        >
          <motion.p
            animate={{ letterSpacing: ["0.25em", "0.35em", "0.25em"] }}
            transition={{ duration: 5, repeat: Infinity }}
            className="uppercase text-[13px] text-[#d4b483] font-medium tracking-[0.25em] text-center"
          >
            ✦ THE BRIDE ✦
          </motion.p>

          <div className="w-8 h-[0.5px] bg-[#d4b483]/40 mx-auto mt-3 mb-8" />

          {/* Premium Foto Frame (Dark Glassmorphism) */}
          <div className="relative w-[280px] mx-auto flex justify-center">
            <div className="bg-white/[0.02] backdrop-blur-xl border border-white/[0.08] rounded-[28px] p-[6px] shadow-[0_20px_50px_rgba(0,0,0,0.5)] w-full">
              <div className="relative overflow-hidden rounded-[22px] grayscale-[15%] aspect-[4/5] w-full">
                <motion.img
                  src="/images/cici.jpg"
                  alt="The Bride"
                  animate={{ scale: [1, 1.03, 1] }}
                  transition={{ duration: 10, repeat: Infinity }}
                  className="w-full h-full object-cover"
                />
                <motion.div
                  animate={{ x: ["-250%", "350%"] }}
                  transition={{ duration: 7, repeat: Infinity, ease: "linear" }}
                  className="absolute inset-0 w-24 bg-gradient-to-r from-transparent via-white/10 to-transparent blur-md"
                />
              </div>
            </div>
          </div>

          <h3
            className="mt-6 text-[34px] text-[#d4b483] font-light text-center leading-tight"
            style={{ fontFamily: "var(--font-cormorant)" }}
          >
            Nicy Citra Auliya
          </h3>

          <motion.div
            animate={{ width: ["40px", "70px", "40px"] }}
            transition={{ duration: 4, repeat: Infinity }}
            className="h-[0.5px] bg-[#d4b483]/40 mx-auto my-4"
          />

          <p className="uppercase tracking-[0.25em] text-[10px] leading-6 text-white/40 text-center font-light">
            A Beautiful Chapter
            <br />
            Written By The Hand Of Allah
          </p>
        </motion.div>

        {/* ========================================== */}
        {/* CENTER DIVIDER (&)                         */}
        {/* ========================================== */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="my-14 flex items-center justify-center w-full max-w-[340px]"
        >
          <div className="flex-1 h-[0.5px] bg-[#d4b483]/30" />

          <motion.div
            animate={{
              rotate: [0, 360],
              boxShadow: [
                "0 0 0px rgba(212,180,131,0)",
                "0 0 30px rgba(212,180,131,0.15)",
                "0 0 0px rgba(212,180,131,0)",
              ],
            }}
            transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
            className="mx-5 h-[60px] w-[64px] rounded-full border border-[#d4b483]/30 flex items-center justify-center bg-[#0a0a0a]"
          >
            <span
              className="text-[38px] text-[#d4b483] font-light flex items-center justify-center leading-none -mt-1 h-full select-none"
              style={{ fontFamily: "var(--font-cormorant)" }}
            >
              &
            </span>
          </motion.div>

          <div className="flex-1 h-[0.5px] bg-[#d4b483]/30" />
        </motion.div>

        {/* ========================================== */}
        {/* THE GROOM SECTION                          */}
        {/* ========================================== */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="flex flex-col items-center text-center w-full"
        >
          <motion.p
            animate={{ letterSpacing: ["0.25em", "0.35em", "0.25em"] }}
            transition={{ duration: 5, repeat: Infinity }}
            className="uppercase text-[13px] text-[#d4b483] font-medium tracking-[0.25em] text-center"
          >
            ✦ THE GROOM ✦
          </motion.p>

          <div className="w-8 h-[0.5px] bg-[#d4b483]/40 mx-auto mt-3 mb-8" />

          {/* Premium Foto Frame (Dark Glassmorphism) */}
          <div className="relative w-[280px] mx-auto flex justify-center">
            <div className="bg-white/[0.02] backdrop-blur-xl border border-white/[0.08] rounded-[28px] p-[6px] shadow-[0_20px_50px_rgba(0,0,0,0.5)] w-full">
              <div className="relative overflow-hidden rounded-[22px] grayscale-[15%] aspect-[4/5] w-full">
                <motion.img
                  src="/images/saifi.jpg"
                  alt="The Groom"
                  animate={{ scale: [1, 1.03, 1] }}
                  transition={{ duration: 10, repeat: Infinity }}
                  className="w-full h-full object-cover"
                />
                <motion.div
                  animate={{ x: ["-250%", "350%"] }}
                  transition={{ duration: 7, repeat: Infinity, ease: "linear" }}
                  className="absolute inset-0 w-24 bg-gradient-to-r from-transparent via-white/10 to-transparent blur-md"
                />
              </div>
            </div>
          </div>

          <h3
            className="mt-6 text-[34px] text-[#d4b483] font-light text-center leading-tight"
            style={{ fontFamily: "var(--font-cormorant)" }}
          >
            Saifi Hidayatullah
          </h3>

          <motion.div
            animate={{ width: ["40px", "70px", "40px"] }}
            transition={{ duration: 4, repeat: Infinity }}
            className="h-[0.5px] bg-[#d4b483]/40 mx-auto my-4"
          />

          <p className="uppercase tracking-[0.25em] text-[10px] leading-6 text-white/40 text-center font-light">
            And I Found You,
            <br />
            And My Life Found Its Home
          </p>
        </motion.div>

        {/* ========================================== */}
        {/* BOTTOM MONOGRAM END                        */}
        {/* ========================================== */}
        <div className="mt-24 flex items-center justify-center gap-3 w-full max-w-[340px]">
          <div className="flex-1 h-[0.5px] bg-[#d4b483]/20" />

          <div className="relative w-[80px] h-[80px] flex items-center justify-center">
            <motion.div
              animate={{ rotate: [0, 360] }}
              transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
              className="absolute inset-0 rounded-full border border-[#d4b483]/15 w-full h-full"
            />

            <div
              className="text-[34px] text-[#d4b483] font-light flex items-center justify-center leading-none select-none h-full"
              style={{ fontFamily: "var(--font-cormorant)" }}
            >
              NS
            </div>
          </div>

          <div className="flex-1 h-[0.5px] bg-[#d4b483]/20" />
        </div>
      </div>
    </section>
  );
}