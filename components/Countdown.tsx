"use client";

import { motion } from "framer-motion";
import { useEffect, useMemo, useState } from "react";

export default function Countdown() {
  const weddingDate = useMemo(() => new Date("2026-07-12T08:00:00").getTime(), []);
  
  // State untuk mengunci render client (mencegah hydration mismatch)
  const [isMounted, setIsMounted] = useState(false);

  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  const particles = useMemo(
    () =>
      Array.from({ length: 24 }, (_, i) => ({
        id: i,
        left: (i * 37) % 100, // Mengganti Math.random() dengan deterministik matematika agar tidak memicu mismatch
        size: 2 + (i % 4),
        duration: 18 + (i % 10),
        delay: i * 0.4,
        drift: (i % 2 === 0 ? 1 : -1) * (40 + (i % 40)),
      })),
    []
  );

  useEffect(() => {
    setIsMounted(true);

    const interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = weddingDate - now;

      setTimeLeft({
        days: Math.max(0, Math.floor(distance / (1000 * 60 * 60 * 24))),
        hours: Math.max(0, Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))),
        minutes: Math.max(0, Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60))),
        seconds: Math.max(0, Math.floor((distance % (1000 * 60)) / 1000)),
      });
    }, 1000);

    return () => clearInterval(interval);
  }, [weddingDate]);

  return (
    <section
      className="
      relative
      overflow-hidden
      py-24
      bg-black
      w-full
      max-w-md
      mx-auto
      box-border
      "
    >
      {/* Background Image */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <motion.div
          animate={{
            scale: [1, 1.05, 1],
          }}
          transition={{
            duration: 30,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url('/images/infinity-castle.jpg')",
          }}
        />
        <div className="absolute inset-0 bg-black/80" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(212,180,131,0.12),transparent_75%)]" />
      </div>

      {/* Monogram Background */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-10 select-none">
        <span
          className="text-[220px] leading-none text-white/[0.03]"
          style={{
            fontFamily: "var(--font-cormorant)",
          }}
        >
          ∞
        </span>
      </div>

      {/* Ambient Gold Glow (Dioptimalkan ukurannya untuk HP) */}
      <motion.div
        animate={{
          opacity: [0.25, 0.45, 0.25],
          scale: [1, 1.08, 1],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
        }}
        className="
        absolute
        left-1/2
        top-1/2
        -translate-x-1/2
        -translate-y-1/2
        w-[340px]
        h-[340px]
        rounded-full
        bg-[#d4b483]/15
        blur-[80px]
        pointer-events-none
        z-10
        "
      />

      {/* Floating Dust (Hanya merender ketika isMounted true di browser) */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-10">
        {isMounted && particles.map((particle) => (
          <motion.div
            key={particle.id}
            animate={{
              y: [0, -1200],
              x: [0, particle.drift, -particle.drift * 0.5, particle.drift * 0.2],
              opacity: [0, 1, 1, 0],
              scale: [0.6, 1, 1.3, 0.6],
            }}
            transition={{
              duration: particle.duration,
              repeat: Infinity,
              ease: "linear",
              delay: particle.delay,
            }}
            className="absolute rounded-full bg-[#d4b483] shadow-[0_0_15px_rgba(212,180,131,0.8)]"
            style={{
              left: `${particle.left}%`,
              width: `${particle.size}px`,
              height: `${particle.size}px`,
              bottom: "-100px",
            }}
          />
        ))}
      </div>

      {/* Main Content Area */}
      <div className="relative z-20 w-full px-6 box-border">
        
        {/* Header Countdown */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center select-none"
        >
          <p className="uppercase tracking-[5px] text-[#d4b483] text-[9.5px] font-semibold">
            WEDDING COUNTDOWN
          </p>

          <div className="flex justify-center mt-6">
            <div className="px-6 py-2.5 rounded-full border border-[#d4b483]/20 bg-white/[0.04] backdrop-blur-md text-[#d4b483] tracking-[3px] text-[10.5px] font-medium">
              12 JULY 2026
            </div>
          </div>
        </motion.div>

        {/* Countdown Grid Box */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mt-10 rounded-[32px] border border-white/10 bg-white/[0.04] backdrop-blur-xl p-4 shadow-[0_30px_100px_rgba(0,0,0,0.6)]"
        >
          <div className="grid grid-cols-2 gap-3.5">
            {[
              { label: "DAYS", value: timeLeft.days },
              { label: "HOURS", value: timeLeft.hours },
              { label: "MINUTES", value: timeLeft.minutes },
              { label: "SECONDS", value: timeLeft.seconds },
            ].map((item) => (
              <motion.div
                key={item.label}
                whileTap={{ scale: 0.98 }}
                className="relative rounded-[22px] border border-white/5 bg-white/[0.02] py-6 overflow-hidden"
              >
                <div className="absolute inset-0 bg-[#d4b483]/[0.02] pointer-events-none" />
                <div className="relative text-center select-none">
                  <div
                    className="text-[44px] leading-none text-white font-medium drop-shadow-[0_2px_10px_rgba(0,0,0,0.3)]"
                    style={{
                      fontFamily: "var(--font-cormorant), serif",
                    }}
                  >
                    {String(item.value).padStart(2, "0")}
                  </div>
                  <div className="mt-2 text-[#d4b483] text-[9px] tracking-[3px] uppercase opacity-90">
                    {item.label}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Love Quote */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="mt-12 text-center select-none"
        >
          <div className="w-20 h-px bg-gradient-to-r from-transparent via-[#d4b483]/60 to-transparent mx-auto mb-6" />
          <p
            className="text-[24px] leading-relaxed italic text-white/80 px-2"
            style={{
              fontFamily: "var(--font-cormorant), serif",
            }}
          >
            “And at the end of all roads, I still found my way back to you.”
          </p>
        </motion.div>

      </div>
    </section>
  );
}