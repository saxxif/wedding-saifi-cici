"use client";

import { motion } from "framer-motion";

const particles = Array.from({ length: 18 }, (_, i) => ({
  id: i,
  left: (i * 67) % 100,
  size: 2 + (i % 3),
  duration: 18 + (i % 8),
  delay: i * 0.6,
}));

export default function Hero() {
  const scrollToNext = () => {
    const target = document.getElementById("bride-groom");

    if (!target) return;

    target.scrollIntoView({
      behavior: "smooth",
      block: "start",
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
      px-5
      "
    >
      {/* Background Image */}
      <motion.div
        animate={{
          scale: [1.05, 1, 1.05],
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

      {/* Dark Layer */}
      <div className="absolute inset-0 bg-black/55" />

      {/* Cinematic Vignette */}
      <div
        className="
        absolute
        inset-0
        bg-[radial-gradient(circle_at_center,transparent_15%,rgba(0,0,0,0.88)_100%)]
        "
      />

      {/* Gold Glow */}
      <motion.div
        animate={{
          opacity: [0.25, 0.45, 0.25],
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
        }}
        className="
        absolute
        left-1/2
        top-1/2
        -translate-x-1/2
        -translate-y-1/2

        w-[500px]
        h-[500px]

        md:w-[1200px]
        md:h-[1200px]

        rounded-full

        bg-[#d4b483]/20

        blur-[180px]
        "
      />

      {/* Floating Particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {particles.map((particle) => (
          <motion.div
            key={particle.id}
            animate={{
              y: [0, -1200],
              x: [0, 20, -15, 10],
              opacity: [0, 1, 1, 0],
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
            shadow-[0_0_20px_rgba(212,180,131,0.8)]
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

      {/* Content */}
      <div
        className="
        relative
        z-20

        w-full
        max-w-4xl

        mx-auto
        text-center
        "
      >
        {/* Top Ornament */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="flex justify-center mb-6"
        >
          <div
            className="
            h-px
            w-20

            bg-gradient-to-r
            from-transparent
            via-[#d4b483]
            to-transparent
            "
          />
        </motion.div>

        {/* Subtitle */}
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
          uppercase

          tracking-[4px]
          md:tracking-[10px]

          text-[10px]
          md:text-sm

          text-[#d4b483]

          font-light
          "
        >
          THE WEDDING OF
        </motion.p>

        {/* Names */}
        <motion.h1
          initial={{
            opacity: 0,
            y: 40,
            filter: "blur(10px)",
          }}
          animate={{
            opacity: 1,
            y: 0,
            filter: "blur(0px)",
          }}
          transition={{
            duration: 1.8,
          }}
          className="
          mt-6

          leading-[0.95]

          text-white

          text-[48px]
          sm:text-[60px]
          md:text-[120px]
          lg:text-[150px]

          font-light

          tracking-[-0.03em]

          drop-shadow-[0_10px_40px_rgba(0,0,0,0.9)]
          "
          style={{
            fontFamily: "var(--font-cormorant)",
          }}
        >
          Saifi

          <motion.div
            animate={{
              scale: [1, 1.08, 1],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
            }}
            className="
            text-[#d4b483]

            text-[28px]
            md:text-[60px]

            my-1
            "
          >
            &
          </motion.div>

          Nicky
        </motion.h1>

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
          mt-5

          uppercase

          tracking-[2px]
          md:tracking-[8px]

          text-[11px]
          md:text-base

          text-white/75
          "
        >
          Forever Begins Here
        </motion.p>

        {/* Divider */}
        <motion.div
          initial={{
            opacity: 0,
          }}
          animate={{
            opacity: 1,
          }}
          transition={{
            delay: 1,
          }}
          className="flex justify-center mt-6"
        >
          <div
            className="
            h-px
            w-28
            md:w-44

            bg-gradient-to-r
            from-transparent
            via-[#d4b483]
            to-transparent
            "
          />
        </motion.div>

        {/* Date */}
        <motion.p
          initial={{
            opacity: 0,
          }}
          animate={{
            opacity: 1,
          }}
          transition={{
            delay: 1.2,
          }}
          className="
          mt-6

          text-white/90

          text-xs
          md:text-lg

          tracking-[2px]
          md:tracking-[6px]
          "
        >
          12 JULY 2026
        </motion.p>

        {/* Button */}
        <motion.div
          initial={{
            opacity: 0,
            y: 20,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            delay: 1.5,
          }}
          className="flex justify-center"
        >
          <button
            onClick={scrollToNext}
            className="
            mt-8

            px-8
            md:px-14

            py-3
            md:py-4

            rounded-full

            border
            border-[#d4b483]

            bg-white/5
            backdrop-blur-xl

            text-[#d4b483]

            text-xs
            md:text-sm

            tracking-[2px]

            transition-all
            duration-500

            hover:bg-[#d4b483]
            hover:text-black
            "
          >
            OPEN INVITATION
          </button>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          animate={{
            y: [0, 10, 0],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
          }}
          className="
          flex
          justify-center
          mt-12
          "
        >
          <div
            className="
            w-7
            h-12

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
                y: [0, 16, 0],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
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
    </section>
  );
}