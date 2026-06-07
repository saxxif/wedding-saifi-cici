"use client";

import { motion } from "framer-motion";

const particles = Array.from({ length: 15 }, (_, i) => ({
  id: i,
  left: (i * 73) % 100,
  size: 2 + (i % 3),
  duration: 20 + (i % 8),
  delay: i * 0.8,
}));

export default function Hero() {
  const scrollToNext = () => {
    const target = document.getElementById("bride-groom");

    if (!target) return;

    window.scrollTo({
      top: target.offsetTop,
      behavior: "smooth",
    });
  };

  return (
    <section
      className="
      relative
      min-h-screen
      overflow-hidden
      flex
      items-center
      justify-center
      "
    >
      {/* Background */}
      <motion.div
        animate={{
          scale: [1.08, 1, 1.03],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="
        absolute
        inset-0
        bg-cover
        bg-center
        "
        style={{
          backgroundImage: "url('/images/hero.jpg')",
        }}
      />

      {/* Cinematic Overlay */}
      <div
        className="
        absolute
        inset-0

        bg-[radial-gradient(circle_at_center,rgba(0,0,0,0.15),rgba(0,0,0,0.88))]
        "
      />

      {/* Vignette */}
      <div
        className="
        absolute
        inset-0

        bg-[radial-gradient(circle,transparent_35%,rgba(0,0,0,0.85)_100%)]
        "
      />

      {/* Gold Glow */}
      <div
        className="
        absolute

        left-1/2
        top-1/2

        -translate-x-1/2
        -translate-y-1/2

        w-[1200px]
        h-[1200px]

        rounded-full

        bg-[#d4b483]/10

        blur-[250px]
        "
      />

      {/* Floating Gold Dust */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {particles.map((particle) => (
          <motion.div
            key={particle.id}
            animate={{
              y: [0, -1200],
              opacity: [0, 0.9, 0.9, 0],
              x: [0, 20, -15, 10],
            }}
            transition={{
              duration: particle.duration,
              repeat: Infinity,
              ease: "linear",
              delay: particle.delay,
            }}
            className="
            absolute
            rounded-full

            bg-[#d4b483]

            shadow-[0_0_25px_rgba(212,180,131,0.8)]
            "
            style={{
              left: `${particle.left}%`,
              width: `${particle.size}px`,
              height: `${particle.size}px`,
              bottom: "-100px",
            }}
          />
        ))}
      </div>

      <div
        className="
        relative
        z-20

        w-full
        max-w-6xl

        mx-auto
        px-6
        "
      >
        <div
          className="
          relative

          rounded-[40px]
          md:rounded-[60px]

          border
          border-[#d4b483]/15

          bg-black/20

          backdrop-blur-md

          px-6
          md:px-16

          py-14
          md:py-24
          "
        >
          {/* Inner Border */}
          <div
            className="
            absolute
            inset-[1px]

            rounded-[40px]
            md:rounded-[60px]

            border
            border-[#d4b483]/10

            pointer-events-none
            "
          />

          {/* Top Ornament */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="flex justify-center"
          >
            <div
              className="
              w-24
              h-px

              bg-gradient-to-r
              from-transparent
              via-[#d4b483]
              to-transparent
              "
            />
          </motion.div>

          <motion.p
            initial={{
              opacity: 0,
              y: -20,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 1,
            }}
            className="
            text-center

            uppercase

            tracking-[12px]

            text-[11px]
            md:text-sm

            text-[#d4b483]

            mt-6
            "
          >
            THE WEDDING OF
          </motion.p>

          <motion.h1
            initial={{
              opacity: 0,
              scale: 0.9,
              filter: "blur(20px)",
            }}
            animate={{
              opacity: 1,
              scale: 1,
              filter: "blur(0px)",
            }}
            transition={{
              duration: 2,
            }}
            className="
            text-center

            mt-8

            leading-[0.85]

            text-[72px]
            sm:text-[110px]
            md:text-[180px]
            xl:text-[220px]

            tracking-[-0.03em]

            text-white

            drop-shadow-[0_15px_80px_rgba(0,0,0,0.9)]
            "
            style={{
              fontFamily: "var(--font-cormorant)",
            }}
          >
            Saifi
            <br />
            &
            <br />
            Nicky
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
            className="
            text-center

            mt-6

            uppercase

            tracking-[0.4em]

            text-white/70

            text-sm
            md:text-lg
            "
          >
            Forever Begins Here
          </motion.p>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2 }}
            className="flex justify-center mt-8"
          >
            <div
              className="
              h-px
              w-40

              bg-gradient-to-r

              from-transparent
              via-[#d4b483]
              to-transparent
              "
            />
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.4 }}
            className="
            text-center

            mt-8

            text-base
            md:text-xl

            tracking-[6px]

            text-white/85
            "
          >
            12 JULY 2026
          </motion.p>

          <motion.div
            initial={{
              opacity: 0,
              y: 30,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              delay: 1.7,
            }}
            className="
            flex
            justify-center
            "
          >
            <button
              onClick={scrollToNext}
              className="
              mt-10

              px-10
              md:px-14

              py-4

              rounded-full

              border
              border-[#d4b483]

              text-[#d4b483]

              tracking-[3px]

              transition-all
              duration-500

              hover:bg-[#d4b483]
              hover:text-black

              hover:scale-105
              "
            >
              OPEN INVITATION
            </button>
          </motion.div>

          <motion.div
            animate={{
              y: [0, 10, 0],
            }}
            transition={{
              repeat: Infinity,
              duration: 2,
            }}
            className="
            flex
            justify-center

            mt-16
            "
          >
            <div
              className="
              w-8
              h-14

              rounded-full

              border

              border-white/20

              flex
              justify-center

              pt-2
              "
            >
              <motion.div
                animate={{
                  y: [0, 18, 0],
                }}
                transition={{
                  repeat: Infinity,
                  duration: 2,
                }}
                className="
                w-1.5
                h-1.5

                rounded-full

                bg-[#d4b483]
                "
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}