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
      Array.from({ length: 120 }, (_, i) => ({
        id: i,
        left: Math.random() * 100,
        size: Math.random() * 4 + 1,
        duration: Math.random() * 20 + 18,
        delay: Math.random() * 10,
        drift: Math.random() * 200 - 100,
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
            (distance % (1000 * 60 * 60 * 24)) /
              (1000 * 60 * 60)
          )
        ),
        minutes: Math.max(
          0,
          Math.floor(
            (distance % (1000 * 60 * 60)) /
              (1000 * 60)
          )
        ),
        seconds: Math.max(
          0,
          Math.floor(
            (distance % (1000 * 60)) / 1000
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
      overflow-hidden
      py-24
      bg-black
      "
    >
      {/* Background */}

      <motion.div
        animate={{
          scale: [1, 1.08, 1],
        }}
        transition={{
          duration: 30,
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

      <div className="absolute inset-0 bg-black/80" />

      <div
        className="
        absolute
        inset-0
        bg-[radial-gradient(circle_at_center,rgba(212,180,131,0.10),transparent_70%)]
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
          text-[180px]
          md:text-[700px]
          leading-none
          text-white/[0.03]
          "
          style={{
            fontFamily: "var(--font-cormorant)",
          }}
        >
          ∞
        </span>
      </div>

      {/* Gold Glow */}

      <motion.div
        animate={{
          opacity: [0.25, 0.5, 0.25],
          scale: [1, 1.1, 1],
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
        w-[1200px]
        h-[1200px]
        rounded-full
        bg-[#d4b483]/10
        blur-[250px]
        "
      />

      {/* Floating Dust */}

      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {particles.map((particle) => (
          <motion.div
            key={particle.id}
            animate={{
              y: [0, -1600],
              x: [
                0,
                particle.drift,
                -particle.drift * 0.5,
                particle.drift * 0.3,
              ],
              opacity: [0, 1, 1, 0],
              scale: [0.5, 1, 1.4, 0.5],
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
            shadow-[0_0_25px_rgba(212,180,131,0.9)]
            "
            style={{
              left: `${particle.left}%`,
              width: `${particle.size}px`,
              height: `${particle.size}px`,
              bottom: "-120px",
            }}
          />
        ))}
      </div>

      <div
        className="
        relative
        z-20
        max-w-md
        mx-auto
        px-5
        "
      >
        {/* Header */}

        <motion.div
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
          className="text-center"
        >
          <p
            className="
            uppercase
            tracking-[6px]
            text-[#d4b483]
            text-[10px]
            "
          >
            WEDDING COUNTDOWN
          </p>

          <h2
            className="
            mt-5
            text-[60px]
            leading-[0.9]
            text-white
            "
            style={{
              fontFamily: "var(--font-cormorant)",
            }}
          >
          </h2>

          <div
            className="
            flex
            justify-center
            mt-8
            "
          >
            <div
              className="
              px-8
              py-3
              rounded-full
              border
              border-[#d4b483]/20
              bg-white/[0.04]
              backdrop-blur-xl
              text-[#d4b483]
              tracking-[4px]
              text-[11px]
              "
            >
              12 JULY 2026
            </div>
          </div>
        </motion.div>

        {/* Countdown Card */}

        <motion.div
          initial={{
            opacity: 0,
            y: 60,
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
          mt-12

          rounded-[42px]

          border
          border-white/10

          bg-white/[0.05]

          backdrop-blur-3xl

          p-5

          shadow-[0_40px_140px_rgba(0,0,0,0.5)]
          "
        >
          <div className="grid grid-cols-2 gap-4">
            {[
              {
                label: "DAYS",
                value: timeLeft.days,
              },
              {
                label: "HOURS",
                value: timeLeft.hours,
              },
              {
                label: "MINUTES",
                value: timeLeft.minutes,
              },
              {
                label: "SECONDS",
                value: timeLeft.seconds,
              },
            ].map((item) => (
              <motion.div
                key={item.label}
                whileHover={{
                  y: -5,
                  scale: 1.02,
                }}
                className="
                relative

                rounded-[28px]

                border
                border-white/10

                bg-white/[0.03]

                py-8
                "
              >
                <div
                  className="
                  absolute
                  inset-0
                  rounded-[28px]
                  bg-[#d4b483]/[0.03]
                  "
                />

                <div
                  className="
                  relative
                  text-center
                  "
                >
                  <div
                    className="
                    text-[52px]
                    leading-none
                    text-white
                    "
                    style={{
                      fontFamily:
                        "var(--font-cormorant)",
                    }}
                  >
                    {String(item.value).padStart(
                      2,
                      "0"
                    )}
                  </div>

                  <div
                    className="
                    mt-3

                    text-[#d4b483]

                    text-[10px]

                    tracking-[4px]

                    uppercase
                    "
                  >
                    {item.label}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Quote */}

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
            delay: 0.5,
          }}
          className="
          mt-14
          text-center
          "
        >
          <div
            className="
            w-24
            h-px
            bg-gradient-to-r
            from-transparent
            via-[#d4b483]
            to-transparent
            mx-auto
            mb-8
            "
          />

          <p
            className="
            text-[28px]

            leading-relaxed

            italic

            text-white/80
            "
            style={{
              fontFamily:
                "var(--font-cormorant)",
            }}
          >
            “And at the end of all roads,
            I still found my way back
            to you.”
          </p>
        </motion.div>
      </div>
    </section>
  );
}