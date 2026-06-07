"use client";

import { motion } from "framer-motion";

const particles = Array.from({ length: 12 }, (_, i) => ({
  id: i,
  left: (i * 43) % 100,
  top: (i * 57) % 100,
}));

export default function LoveQuote() {
  return (
    <section
      className="
      relative
      overflow-hidden
      bg-[#050505]
      py-28
      "
    >
      {/* Background Video */}

      <video
        autoPlay
        muted
        loop
        playsInline
        className="
        absolute
        inset-0
        w-full
        h-full
        object-cover
        scale-105
        opacity-20
        "
      >
        <source src="/videos/love.mp4" type="video/mp4" />
      </video>

      {/* Overlay */}

      <div className="absolute inset-0 bg-black/85" />

      <div
        className="
        absolute
        inset-0
        bg-[radial-gradient(circle_at_center,rgba(212,180,131,0.08),transparent_70%)]
        "
      />

      {/* Monogram */}

      <div
        className="
        absolute
        inset-0

        flex
        items-center
        justify-center

        pointer-events-none
        "
      >
        <span
          className="
          text-[140px]

          text-white/[0.025]

          leading-none
          "
          style={{
            fontFamily: "var(--font-cormorant)",
          }}
        >
          SN
        </span>
      </div>

      {/* Particles */}

      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          animate={{
            y: [0, -30, 0],
            opacity: [0.1, 0.5, 0.1],
          }}
          transition={{
            duration: 6 + particle.id,
            repeat: Infinity,
          }}
          className="
          absolute
          w-[2px]
          h-[2px]
          rounded-full
          bg-[#d4b483]
          "
          style={{
            left: `${particle.left}%`,
            top: `${particle.top}%`,
          }}
        />
      ))}

      {/* Content */}

      <div
        className="
        relative
        z-20

        max-w-[320px]
        mx-auto

        px-6
        text-center
        "
      >
        <motion.p
          initial={{
            opacity: 0,
            y: 20,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
          }}
          className="
          uppercase

          tracking-[8px]

          text-[#c9a86a]

          text-[10px]
          "
        >
          Ar-Rum • 21
        </motion.p>

        <motion.div
          initial={{
            width: 0,
            opacity: 0,
          }}
          whileInView={{
            width: 60,
            opacity: 1,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: 1,
          }}
          className="
          h-px
          mx-auto
          mt-6

          bg-gradient-to-r
          from-transparent
          via-[#c9a86a]
          to-transparent
          "
        />

        <motion.h2
          initial={{
            opacity: 0,
            y: 30,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            delay: 0.2,
          }}
          className="
          mt-10

          text-white

          text-[18px]

          leading-[2.1]

          font-light
          "
          style={{
            fontFamily: "var(--font-cormorant)",
          }}
        >
          “Dan di antara tanda-tanda kekuasaan-Nya,
          Dia menciptakan untukmu pasangan hidup
          dari jenismu sendiri agar kamu merasa
          tenteram kepadanya, dan Dia menjadikan
          di antaramu rasa kasih dan sayang.”
        </motion.h2>

        <motion.div
          initial={{
            opacity: 0,
          }}
          whileInView={{
            opacity: 1,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            delay: 0.4,
          }}
          className="
          mt-10

          text-[#c9a86a]

          text-[11px]

          tracking-[6px]

          uppercase
          "
        >
          A Love Written By Destiny
        </motion.div>

        <motion.h3
          initial={{
            opacity: 0,
            y: 20,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            delay: 0.5,
          }}
          className="
          mt-8

          text-white

          text-[42px]

          leading-none
          "
          style={{
            fontFamily: "var(--font-cormorant)",
          }}
        >
          Saifi
          <span className="mx-2 text-[#c9a86a]">&</span>
          Nicky
        </motion.h3>

        <motion.div
          initial={{
            width: 0,
            opacity: 0,
          }}
          whileInView={{
            width: 100,
            opacity: 1,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            delay: 0.8,
            duration: 1,
          }}
          className="
          h-px
          mx-auto
          mt-8

          bg-gradient-to-r
          from-transparent
          via-[#c9a86a]
          to-transparent
          "
        />

        <motion.p
          initial={{
            opacity: 0,
          }}
          whileInView={{
            opacity: 1,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            delay: 1,
          }}
          className="
          mt-6

          text-white/50

          text-[10px]

          uppercase

          tracking-[5px]
          "
        >
          12 July 2026
        </motion.p>
      </div>
    </section>
  );
}