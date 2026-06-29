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
      justify-center
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
            scale: [1, 1.05, 1],
            opacity: [0.15, 0.25, 0.15],
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
          h-[80vw]
          w-[80vw]
          max-h-[600px]
          max-w-[600px]
          rounded-full
          bg-[#d4b483]/5
          blur-[100px]
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
          text-[180px]
          md:text-[240px]
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

      {/* FALLING LEAVES (Dioptimasi untuk performa mobile) */}
      <div className="absolute inset-0 w-full h-full overflow-hidden pointer-events-none z-[2]">
        {[...Array(12)].map((_, i) => (
          <motion.div
            key={i}
            animate={{
              y: ["-10vh", "110vh"],
              x: [0, 25, -25, 0],
              rotate: [0, 360],
              opacity: [0, 0.5, 0.5, 0],
            }}
            transition={{
              duration: 20 + i * 2,
              repeat: Infinity,
              ease: "linear",
              delay: i * 1.2,
            }}
            className="absolute text-[#d4b483]/30"
            style={{
              left: `${(i * 9) % 100}%`,
              top: "-50px",
              fontSize: `${14 + (i % 3) * 4}px`,
            }}
          >
            ❦
          </motion.div>
        ))}
      </div>

      <div
        className="
        relative
        z-10
        max-w-[430px]
        w-full
        mx-auto
        px-6
        flex
        flex-col
        items-center
        "
      >
        {/* ========================================== */}
        {/* HEADER SECTION                             */}
        {/* ========================================== */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col items-center text-center w-full"
        >
          <div className="text-[#d4b483] text-sm flex justify-center items-center h-4">✦</div>

          <h2
            className="
            mt-3
            text-[44px]
            md:text-[54px]
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
          </h2>

          <div className="flex items-center justify-center gap-3 mt-4 h-4 w-full">
            <div className="w-10 h-[0.5px] bg-[#d4b483]/30" />
            <div className="text-[#d4b483]/50 text-[10px] flex items-center justify-center">✦</div>
            <div className="w-10 h-[0.5px] bg-[#d4b483]/30" />
          </div>

          <p className="mt-5 uppercase tracking-[0.2em] text-[10px] leading-relaxed text-white/40 max-w-[290px] text-center font-light">
            With The Grace Of Allah, We Joyfully Invite You
            <br />
            To Our Beginning Of Forever
          </p>
        </motion.div>

        {/* ========================================== */}
        {/* THE BRIDE SECTION                          */}
        {/* ========================================== */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-14 flex flex-col items-center text-center w-full"
        >
          <p className="uppercase text-[12px] text-[#d4b483] font-medium tracking-[0.3em] text-center w-full pl-[0.3em]">
            ✦ THE BRIDE ✦
          </p>

          <div className="w-6 h-[0.5px] bg-[#d4b483]/30 mt-3 mb-8" />

          {/* Premium Foto Frame */}
          <div className="w-full flex justify-center items-center">
            <div className="bg-white/[0.02] backdrop-blur-xl border border-white/[0.08] rounded-[28px] p-[6px] shadow-[0_20px_40px_rgba(0,0,0,0.6)] w-[260px] md:w-[280px]">
              <div className="relative overflow-hidden rounded-[22px] grayscale-[10%] aspect-[4/5] w-full">
                <img
                  src="/images/cici.jpg"
                  alt="The Bride"
                  className="w-full h-full object-cover"
                />
                <motion.div
                  animate={{ x: ["-250%", "250%"] }}
                  transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
                  className="absolute inset-0 w-20 bg-gradient-to-r from-transparent via-white/10 to-transparent blur-md"
                />
              </div>
            </div>
          </div>

          <h3
            className="mt-5 text-[32px] text-[#d4b483] font-light text-center leading-tight w-full"
            style={{ fontFamily: "var(--font-cormorant)" }}
          >
            Nicy Citra Auliya
          </h3>

          <div className="w-10 h-[0.5px] bg-[#d4b483]/30 my-4" />

          <p className="uppercase tracking-[0.2em] text-[9.5px] leading-relaxed text-white/40 text-center font-light max-w-[265px]">
            A Beautiful Chapter
            <br />
            Written By The Hand Of Allah
          </p>
        </motion.div>

        {/* ========================================== */}
        {/* CENTER DIVIDER (&) - PIXEL PERFECT RING    */}
        {/* ========================================== */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="my-12 flex items-center justify-center w-full max-w-[280px]"
        >
          <div className="flex-1 h-[0.5px] bg-[#d4b483]/20" />
          
          {/* Dimensi dikunci bulat sempurna w-14 h-14 agar tidak oval di mobile webview */}
          <div className="mx-4 h-14 w-14 rounded-full border border-[#d4b483]/20 flex items-center justify-center bg-[#0a0a0a] shrink-0 shadow-[0_0_20px_rgba(212,180,131,0.03)]">
            <span
              className="text-[32px] text-[#d4b483] font-light flex items-center justify-center leading-none -mt-0.5 select-none"
              style={{ fontFamily: "var(--font-cormorant)" }}
            >
              &
            </span>
          </div>
          
          <div className="flex-1 h-[0.5px] bg-[#d4b483]/20" />
        </motion.div>

        {/* ========================================== */}
        {/* THE GROOM SECTION                          */}
        {/* ========================================== */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col items-center text-center w-full"
        >
          <p className="uppercase text-[12px] text-[#d4b483] font-medium tracking-[0.3em] text-center w-full pl-[0.3em]">
            ✦ THE GROOM ✦
          </p>

          <div className="w-6 h-[0.5px] bg-[#d4b483]/30 mt-3 mb-8" />

          {/* Premium Foto Frame */}
          <div className="w-full flex justify-center items-center">
            <div className="bg-white/[0.02] backdrop-blur-xl border border-white/[0.08] rounded-[28px] p-[6px] shadow-[0_20px_40px_rgba(0,0,0,0.6)] w-[260px] md:w-[280px]">
              <div className="relative overflow-hidden rounded-[22px] grayscale-[10%] aspect-[4/5] w-full">
                <img
                  src="/images/saifi.jpg"
                  alt="The Groom"
                  className="w-full h-full object-cover"
                />
                <motion.div
                  animate={{ x: ["-250%", "250%"] }}
                  transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
                  className="absolute inset-0 w-20 bg-gradient-to-r from-transparent via-white/10 to-transparent blur-md"
                />
              </div>
            </div>
          </div>

          <h3
            className="mt-5 text-[32px] text-[#d4b483] font-light text-center leading-tight w-full"
            style={{ fontFamily: "var(--font-cormorant)" }}
          >
            Saifi Hidayatullah
          </h3>

          <div className="w-10 h-[0.5px] bg-[#d4b483]/30 my-4" />

          <p className="uppercase tracking-[0.2em] text-[9.5px] leading-relaxed text-white/40 text-center font-light max-w-[265px]">
            And I Found You,
            <br />
            And My Life Found Its Home
          </p>
        </motion.div>

        {/* ========================================== */}
        {/* BOTTOM MONOGRAM END                        */}
        {/* ========================================== */}
        <div className="mt-20 flex items-center justify-center gap-3 w-full max-w-[280px]">
          <div className="flex-1 h-[0.5px] bg-[#d4b483]/15" />
          
          <div className="relative w-16 h-16 flex items-center justify-center shrink-0">
            <motion.div
              animate={{ rotate: [0, 360] }}
              transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
              className="absolute inset-0 rounded-full border border-[#d4b483]/10 w-full h-full"
            />
            <div
              className="text-[26px] text-[#d4b483] font-light leading-none select-none"
              style={{ fontFamily: "var(--font-cormorant)" }}
            >
              NS
            </div>
          </div>
          
          <div className="flex-1 h-[0.5px] bg-[#d4b483]/15" />
        </div>
      </div>
    </section>
  );
}