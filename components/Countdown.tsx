"use client";

import { motion } from "framer-motion";
import { useEffect, useMemo, useState } from "react";

export default function Countdown() {
  const weddingDate = new Date("2026-07-12T08:00:00").getTime();

  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });
  const particles = useMemo(
  () =>
    Array.from({ length: 70 }, (_, i) => ({
      id: i,
      left: Math.random() * 100,
      size: Math.random() * 5 + 1,
      duration: Math.random() * 20 + 18,
      delay: Math.random() * 10,
      drift: Math.random() * 150 - 75,
    })),
  []
);

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = weddingDate - now;

      setTimeLeft({
        days: Math.max(
          0,
          Math.floor(distance / (1000 * 60 * 60 * 24))
        ),
        hours: Math.max(
          0,
          Math.floor(
            (distance %
              (1000 * 60 * 60 * 24)) /
              (1000 * 60 * 60)
          )
        ),
        minutes: Math.max(
          0,
          Math.floor(
            (distance %
              (1000 * 60 * 60)) /
              (1000 * 60)
          )
        ),
        seconds: Math.max(
          0,
          Math.floor(
            (distance % (1000 * 60)) /
              1000
          )
        ),
      });
    }, 1000);

    return () => clearInterval(interval);
  }, [weddingDate]);

  return (
    <section
      className="
      relative
      min-h-screen
      overflow-hidden

      flex
      items-center
      justify-center

      bg-black
      text-white
      "
    >
      {/* Background */}
      <motion.div
        animate={{
          scale: [1, 1.08, 1],
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
          backgroundImage:
            "url('/images/infinity-castle.jpg')",
        }}
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/75" />

      {/* Top Gold Light */}
      <div
        className="
        absolute
        top-0
        left-1/2
        -translate-x-1/2

        w-[1400px]
        h-[600px]

        bg-[#d4b483]/10

        blur-[180px]
        "
      />

      {/* Center Glow */}
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

      {/* Infinity */}
      <div
        className="
        absolute
        inset-0

        flex
        items-center
        justify-center

        text-[250px]
        md:text-[700px]

        text-white/[0.03]

        pointer-events-none

        leading-none
        "
      >
        ∞
      </div>

      {/* Floating Gold Dust */}
<div className="absolute inset-0 overflow-hidden pointer-events-none">

  {particles.map((particle) => (
    <motion.div
      key={particle.id}
      animate={{
        y: [0, -1400],
        x: [
          0,
          particle.drift,
          -particle.drift * 0.5,
          particle.drift * 0.8,
        ],
        opacity: [0, 1, 1, 0],
        scale: [0.5, 1, 1.2, 0.5],
        rotate: [0, 180, 360],
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

      {/* Fog */}
      <motion.div
        animate={{
          x: [-100, 100, -100],
        }}
        transition={{
          duration: 40,
          repeat: Infinity,
          ease: "linear",
        }}
        className="
        absolute
        bottom-0
        left-0

        w-full
        h-[400px]

        bg-gradient-to-t
        from-white/10
        via-white/5
        to-transparent

        blur-[80px]
        "
      />

      <div className="relative z-20 w-full max-w-7xl mx-auto px-6">

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
          className="
          text-center

          uppercase

          tracking-[12px]

          text-[#d4b483]

          text-xs
          md:text-sm
          "
        >
          Wedding Countdown
        </motion.p>

        <motion.h1
          initial={{
            opacity: 0,
            y: 50,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: 1,
          }}
          className="
          text-center

          text-[70px]
          md:text-[180px]

          leading-none

          font-light

          text-white/15
          "
          style={{
            fontFamily:
              "var(--font-cormorant)",
          }}
        >
          SAIFI
        </motion.h1>

   <motion.h1
  initial={{
    opacity: 0,
    scale: 1.3,
    filter: "blur(20px)",
  }}
  whileInView={{
    opacity: 1,
    scale: 1,
    filter: "blur(0px)",
  }}
  viewport={{ once: true }}
  transition={{
    duration: 2.2,
    ease: [0.16, 1, 0.3, 1],
  }}
          className="
          text-center

          text-[70px]
          md:text-[180px]

          leading-none

          font-light

          text-[#d4b483]

          -mt-4
          "
          style={{
            fontFamily:
              "var(--font-cormorant)",
          }}
        >
          & NICKY
        </motion.h1>

        <div className="flex justify-center mt-10 mb-16">
          <div
            className="
            px-12
            py-4

            rounded-full

            bg-white/5

            backdrop-blur-xl

            border
            border-white/10

            text-[#d4b483]

            uppercase

            tracking-[6px]
            "
          >
            12 July 2026
          </div>
        </div>

        <div className="relative">

          {/* Reflection Glow */}
          <div
            className="
            absolute

            left-1/2
            top-1/2

            -translate-x-1/2
            -translate-y-1/2

            w-[900px]
            h-[450px]

            bg-[#d4b483]/10

            blur-[140px]
            "
          />

          <motion.div
            initial={{
              opacity: 0,
              y: 80,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
            }}
            transition={{
              duration: 1,
            }}
            className="
            relative

            backdrop-blur-3xl

            bg-white/[0.05]

            border
            border-white/10

            rounded-[50px]

            p-6
            md:p-16

            shadow-[0_40px_150px_rgba(0,0,0,0.5)]
            "
          >
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-10">

              {[
                {
                  label: "Days",
                  value: timeLeft.days,
                },
                {
                  label: "Hours",
                  value: timeLeft.hours,
                },
                {
                  label: "Minutes",
                  value: timeLeft.minutes,
                },
                {
                  label: "Seconds",
                  value: timeLeft.seconds,
                },
              ].map((item) => (
                <motion.div
                  key={item.label}
                  whileHover={{
                    y: -10,
                    scale: 1.03,
                  }}
                  className="
                  relative
                  text-center
                  "
                >
                  <div
                    className="
                    absolute
                    inset-0

                    rounded-[30px]

                    bg-[#d4b483]/5

                    blur-2xl
                    "
                  />

                  <div
                    className="
                    relative

                    rounded-[30px]

                    border
                    border-white/10

                    bg-white/[0.03]

                    py-8
                    md:py-12
                    "
                  >
                    <div
                      className="
                      text-5xl
                      md:text-8xl

                      font-light
                      "
                    >
                      {String(item.value).padStart(
                        2,
                        "0"
                      )}
                    </div>

                    <div
                      className="
                      mt-4

                      uppercase

                      tracking-[6px]

                      text-[#d4b483]

                      text-xs
                      md:text-sm
                      "
                    >
                      {item.label}
                    </div>
                  </div>
                </motion.div>
              ))}

            </div>
          </motion.div>

          {/* Floor Reflection */}
          <div
            className="
            absolute

            left-1/2
            -translate-x-1/2

            top-full

            w-[70%]
            h-[220px]

            bg-[#d4b483]/10

            blur-[120px]
            "
          />

        </div>

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
            delay: 0.6,
          }}
          className="
          text-center
          mt-24
          "
        >
          <p
            className="
            text-2xl
            md:text-5xl

            italic

            text-white/80

            max-w-5xl
            mx-auto
            "
            style={{
              fontFamily:
                "var(--font-cormorant)",
            }}
          >
            “And at the end of all roads,
            I still found my way back to
            you.”
          </p>
        </motion.div>

      </div>
    </section>
  );
}