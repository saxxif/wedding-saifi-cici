"use client";

import { motion } from "framer-motion";

export default function HeroEditorial() {
  return (
    <section
      className="
      relative
      min-h-screen
      overflow-hidden
      bg-[#f8f5ef]
      border-b
      border-[#d8c8aa]
      "
    >
      {/* Background Glow */}
      <div className="absolute inset-0">
        <div
          className="
          absolute
          left-[-200px]
          top-[-200px]

          h-[700px]
          w-[700px]

          rounded-full

          bg-[#efe3cc]

          blur-[180px]
          opacity-50
          "
        />
      </div>

      <div
        className="
        relative
        z-10

        mx-auto
        max-w-[1400px]

        min-h-screen

        grid
        lg:grid-cols-[42%_58%]

        items-center
        "
      >
        {/* LEFT SIDE */}
        <div
          className="
          relative

          px-10
          md:px-20

          py-20
          lg:py-0
          "
        >
          {/* Vertical Line */}
          <div
            className="
            absolute
            left-6
            top-20
            bottom-20

            hidden
            lg:block

            w-px

            bg-[#d8c8aa]
            "
          />

          {/* Monogram */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            <h3
              className="
              text-[70px]
              leading-none

              text-[#c2a06a]

              font-light
              "
              style={{
                fontFamily: "var(--font-cormorant)",
              }}
            >
              N
              <span className="mx-2 text-[#d9c7a0]">|</span>
              S
            </h3>
          </motion.div>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="
            mt-16

            uppercase

            tracking-[0.5em]

            text-[11px]

            text-[#b9965c]
            "
          >
            THE WEDDING OF
          </motion.p>

          {/* Names */}
          <motion.div
            initial={{
              opacity: 0,
              y: 50,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 1.2,
              delay: 0.2,
            }}
            className="mt-10"
          >
            <h1
              className="
              leading-[0.88]

              text-[#b28b57]

              font-light

              text-[80px]
              md:text-[120px]
              xl:text-[140px]
              "
              style={{
                fontFamily: "var(--font-cormorant)",
              }}
            >
              NICY
            </h1>

            <div
              className="
              my-2

              text-[#d1b178]

              text-[70px]
              md:text-[90px]

              leading-none
              "
              style={{
                fontFamily: "var(--font-cormorant)",
              }}
            >
              &
            </div>

            <h1
              className="
              leading-[0.88]

              text-[#b28b57]

              font-light

              text-[80px]
              md:text-[120px]
              xl:text-[140px]
              "
              style={{
                fontFamily: "var(--font-cormorant)",
              }}
            >
              SAIFI
            </h1>
          </motion.div>

          {/* Tagline */}
          <motion.p
            initial={{
              opacity: 0,
            }}
            animate={{
              opacity: 1,
            }}
            transition={{
              delay: 0.8,
            }}
            className="
            mt-14

            uppercase

            tracking-[0.35em]

            text-[12px]

            text-[#8f7c5d]
            "
          >
            TWO SOULS. ONE DESTINY.
          </motion.p>

          {/* Scroll */}
          <motion.div
            animate={{
              y: [0, 10, 0],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
            }}
            className="mt-24"
          >
            <p
              className="
              text-[10px]

              uppercase

              tracking-[0.35em]

              text-[#b9965c]
              "
            >
              SCROLL DOWN
            </p>

            <div
              className="
              mt-4

              text-[#b9965c]

              text-xl
              "
            >
              ↓
            </div>
          </motion.div>
        </div>

        {/* RIGHT SIDE */}
        <motion.div
          initial={{
            opacity: 0,
            scale: 1.08,
          }}
          animate={{
            opacity: 1,
            scale: 1,
          }}
          transition={{
            duration: 1.5,
          }}
          className="
          relative

          h-[70vh]
          lg:h-screen

          overflow-hidden
          "
        >
          {/* Arch Background */}
          <div
            className="
            absolute
            left-0
            top-0

            h-full
            w-[75%]

            rounded-t-full

            bg-[#f3ede3]
            "
          />

          {/* Couple Image */}
          <motion.img
            src="/images/couple.jpg"
            alt="Couple"
            animate={{
              scale: [1, 1.03, 1],
            }}
            transition={{
              duration: 12,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="
            absolute
            inset-0

            h-full
            w-full

            object-cover
            object-center
            "
          />

          {/* Reflection */}
          <motion.div
            animate={{
              x: ["-150%", "250%"],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "linear",
            }}
            className="
            absolute
            inset-y-0

            w-32

            bg-gradient-to-r
            from-transparent
            via-white/20
            to-transparent

            blur-2xl
            "
          />
        </motion.div>
      </div>
    </section>
  );
}