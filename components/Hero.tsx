"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function Hero() {
  const [heroReady, setHeroReady] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setHeroReady(true);
    }, 300);

    return () => clearTimeout(timer);
  }, []);

  const scrollToNext = () => {
    document
      .getElementById("bride-groom")
      ?.scrollIntoView({
        behavior: "smooth",
      });
  };

  return (
    <section
      className="
      relative
      h-screen
      overflow-hidden
      bg-[#f8f4ed]
      "
    >
      {/* BACKGROUND */}

      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[#f8f4ed]" />

        <motion.div
          initial={{
            scale: 1.25,
            opacity: 0,
          }}
          animate={
            heroReady
              ? {
                  scale: 1,
                  opacity: 1,
                }
              : {}
          }
          transition={{
            duration: 2,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="
          absolute
          left-1/2
          top-0
          -translate-x-1/2
          h-[120%]
          w-[125%]
          rounded-t-[1000px]
          bg-[#fbf8f2]
          shadow-[inset_0_0_120px_rgba(0,0,0,0.04)]
          "
        />

        <motion.div
          initial={{
            x: 150,
            opacity: 0,
          }}
          animate={
            heroReady
              ? {
                  x: 0,
                  opacity: 1,
                }
              : {}
          }
          transition={{
            duration: 2,
          }}
          className="
          absolute
          right-[-30%]
          top-0
          h-full
          w-[70%]
          rounded-l-[400px]
          bg-[#e9dfd0]
          "
        />

        <motion.div
          animate={{
            opacity: [0.2, 0.45, 0.2],
            scale: [1, 1.15, 1],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
          }}
          className="
          absolute
          left-1/2
          top-[30%]
          -translate-x-1/2
          h-[500px]
          w-[500px]
          rounded-full
          bg-[#d6b27c]/25
          blur-[160px]
          "
        />
      </div>

      {/* FLOWERS */}

      <motion.img
        src="/images/flower.png"
        alt=""
        initial={{
          opacity: 0,
          x: -100,
          y: -100,
        }}
        animate={{
          opacity: 0.5,
          x: 0,
          y: [0, -15, 0],
          rotate: [0, 5, 0],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
        }}
        className="
        absolute
        left-[-60px]
        top-[-30px]
        w-[220px]
        blur-[2px]
        "
      />

      <motion.img
        src="/images/flower.png"
        alt=""
        initial={{
          opacity: 0,
          x: 100,
          y: 100,
        }}
        animate={{
          opacity: 0.4,
          x: 0,
          y: [0, 15, 0],
          rotate: [0, -5, 0],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
        }}
        className="
        absolute
        right-[-80px]
        bottom-[-20px]
        w-[260px]
        blur-[4px]
        "
      />

      {/* GOLD SPARKLES */}

      <motion.div
        animate={{
          opacity: [0.3, 1, 0.3],
          scale: [1, 1.3, 1],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
        }}
        className="
        absolute
        left-[12%]
        top-[28%]
        text-[#d4b483]/70
        text-xl
        "
      >
        ✦
      </motion.div>

      <motion.div
        animate={{
          opacity: [0.3, 1, 0.3],
          scale: [1, 1.4, 1],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
        }}
        className="
        absolute
        right-[14%]
        top-[35%]
        text-[#d4b483]/60
        text-lg
        "
      >
        ✦
      </motion.div>

      {/* GOLD DUST */}

      {[...Array(18)].map((_, i) => (
        <motion.div
          key={i}
          animate={{
            y: [0, -800],
            opacity: [0, 1, 1, 0],
            x: [0, 20, -10],
          }}
          transition={{
            duration: 15 + i,
            repeat: Infinity,
            ease: "linear",
            delay: i * 0.5,
          }}
          className="
          absolute
          h-[3px]
          w-[3px]
          rounded-full
          bg-[#d4b483]
          shadow-[0_0_15px_rgba(212,180,131,0.8)]
          "
          style={{
            left: `${(i * 7) % 100}%`,
            bottom: "-50px",
          }}
        />
      ))}

      {/* MONOGRAM */}

      <motion.div
        initial={{
          opacity: 0,
          scale: 0.5,
          y: -60,
          rotate: -15,
        }}
        animate={
          heroReady
            ? {
                opacity: 1,
                scale: 1,
                y: 0,
                rotate: 0,
              }
            : {}
        }
        transition={{
          duration: 1.5,
          ease: [0.22, 1, 0.36, 1],
        }}
        className="
        absolute
        top-10
        left-1/2
        -translate-x-1/2
        z-30
        text-center
        "
      >
        <h2
          className="text-[55px] leading-none"
          style={{
            fontFamily: "var(--font-cormorant)",
            background:
              "linear-gradient(180deg,#efd8aa,#c89b56,#9e6b2c)",
            WebkitBackgroundClip: "text",
            color: "transparent",
          }}
        >
          N | S
        </h2>

        <p
          className="
          mt-4
          uppercase
          tracking-[0.4em]
          text-[10px]
          text-[#826840]
          "
        >
          THE WEDDING OF
        </p>
      </motion.div>

      {/* DIVIDER */}

      <motion.div
        initial={{
          opacity: 0,
          scaleX: 0,
        }}
        animate={
          heroReady
            ? {
                opacity: 1,
                scaleX: 1,
              }
            : {}
        }
        transition={{
          delay: 0.4,
          duration: 1,
        }}
        className="
        absolute
        top-[115px]
        left-1/2
        -translate-x-1/2
        flex
        items-center
        gap-4
        z-30
        "
      >
        <div className="h-px w-16 bg-[#c89b56]" />
        <div className="text-[#c89b56]">✦</div>
        <div className="h-px w-16 bg-[#c89b56]" />
      </motion.div>

      {/* NAMES */}

      <div
        className="
        absolute
        top-[125px]
        left-1/2
        -translate-x-1/2
        z-30
        text-center
        "
      >
        <div className="relative">
          <motion.h1
            initial={{
              opacity: 0,
              y: 80,
              filter: "blur(20px)",
            }}
            animate={
              heroReady
                ? {
                    opacity: 1,
                    y: 0,
                    filter: "blur(0px)",
                  }
                : {}
            }
            transition={{
              delay: 0.8,
              duration: 1.5,
            }}
            className="
            text-[78px]
            leading-[0.82]
            tracking-[-0.05em]
            "
            style={{
              fontFamily: "var(--font-cormorant)",
              background:
                "linear-gradient(180deg,#f5e2bb,#c89b56,#9b6a2e)",
              WebkitBackgroundClip: "text",
              color: "transparent",
            }}
          >
            NICKY
          </motion.h1>

          <motion.div
            animate={{
              x: ["-200%", "300%"],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "linear",
            }}
            className="
            absolute
            inset-0
            w-20
            bg-gradient-to-r
            from-transparent
            via-white/40
            to-transparent
            blur-md
            "
          />
        </div>

        <motion.div
          initial={{
            opacity: 0,
            scale: 0.4,
          }}
          animate={
            heroReady
              ? {
                  opacity: 1,
                  scale: 1,
                }
              : {}
          }
          transition={{
            delay: 1.2,
            duration: 1,
          }}
          className="text-[42px] leading-none"
          style={{
            fontFamily: "var(--font-cormorant)",
            background:
              "linear-gradient(180deg,#f5e2bb,#c89b56,#9b6a2e)",
            WebkitBackgroundClip: "text",
            color: "transparent",
          }}
        >
          &
        </motion.div>

        <div className="relative">
          <motion.h1
            initial={{
              opacity: 0,
              y: 80,
              filter: "blur(20px)",
            }}
            animate={
              heroReady
                ? {
                    opacity: 1,
                    y: 0,
                    filter: "blur(0px)",
                  }
                : {}
            }
            transition={{
              delay: 1.5,
              duration: 1.5,
            }}
            className="
            text-[78px]
            leading-[0.82]
            tracking-[-0.05em]
            "
            style={{
              fontFamily: "var(--font-cormorant)",
              background:
                "linear-gradient(180deg,#f5e2bb,#c89b56,#9b6a2e)",
              WebkitBackgroundClip: "text",
              color: "transparent",
            }}
          >
            SAIFI
          </motion.h1>

          <motion.div
            animate={{
              x: ["-200%", "300%"],
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: "linear",
            }}
            className="
            absolute
            inset-0
            w-20
            bg-gradient-to-r
            from-transparent
            via-white/40
            to-transparent
            blur-md
            "
          />
        </div>

        <motion.p
          initial={{
            opacity: 0,
          }}
          animate={
            heroReady
              ? {
                  opacity: 1,
                }
              : {}
          }
          transition={{
            delay: 2.2,
            duration: 1,
          }}
          className="
          mt-4
          uppercase
          tracking-[0.25em]
          text-[11px]
          text-[#4f4437]
          "
        >
          TWO SOULS, ONE DESTINY
        </motion.p>
      </div>

      {/* LIGHT RINGS */}

      <motion.div
        initial={{
          opacity: 0,
          scale: 0.6,
        }}
        animate={{
          opacity: 1,
          scale: 1,
          rotate: 360,
        }}
        transition={{
          opacity: {
            delay: 1.8,
            duration: 2,
          },
          scale: {
            delay: 1.8,
            duration: 2,
          },
          rotate: {
            duration: 30,
            repeat: Infinity,
            ease: "linear",
          },
        }}
        className="
        absolute
        left-1/2
        bottom-[170px]
        -translate-x-1/2
        h-[250px]
        w-[700px]
        rounded-full
        border
        border-[#d4b483]/30
        "
      />

      <motion.div
        animate={{
          rotate: [360, 0],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "linear",
        }}
        className="
        absolute
        left-1/2
        bottom-[170px]
        -translate-x-1/2
        h-[210px]
        w-[620px]
        rounded-full
        border-t-2
        border-[#f7dca5]
        "
      />

      {/* GOLD SWEEP */}

      <motion.div
        initial={{
          x: "-150%",
        }}
        animate={
          heroReady
            ? {
                x: "350%",
              }
            : {}
        }
        transition={{
          delay: 2,
          duration: 3,
          ease: "easeInOut",
        }}
        className="
        absolute
        inset-y-0
        w-32
        bg-gradient-to-r
        from-transparent
        via-white/40
        to-transparent
        blur-3xl
        z-40
        "
      />

      {/* COUPLE */}

      <motion.div
        initial={{
          opacity: 0,
          y: 220,
          scale: 0.88,
        }}
        animate={
          heroReady
            ? {
                opacity: 1,
                y: 0,
                scale: 1,
              }
            : {}
        }
        transition={{
          delay: 1.8,
          duration: 2.4,
          ease: [0.22, 1, 0.36, 1],
        }}
        className="
        absolute
        bottom-0
        left-1/2
        -translate-x-1/2
        z-20
        w-[92%]
        max-w-[720px]
        "
      >
        <motion.img
          src="/images/image.png"
          alt="Wedding Couple"
          animate={{
            y: [100, 90, 100],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
          }}
          className="
          w-full
          object-contain
          "
        />
      </motion.div>

      {/* SCROLL */}

      <motion.button
        onClick={scrollToNext}
        initial={{
          opacity: 0,
          y: 30,
        }}
        animate={
          heroReady
            ? {
                opacity: 1,
                y: 0,
              }
            : {}
        }
        transition={{
          delay: 3.8,
          duration: 3,
        }}
        className="
        absolute
        bottom-5
        left-1/2
        -translate-x-1/2
        z-30
        text-center
        "
      >
        <p
          className="
          uppercase
          tracking-[0.35em]
          text-[10px]
          text-[#9a7b4d]
          "
        >
          Scroll Down
        </p>

        <motion.div
          animate={{
            y: [0, 10, 0],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
          }}
          className="
          mt-1
          text-xl
          text-[#9a7b4d]
          "
        >
          ˅
        </motion.div>
      </motion.button>
    </section>
  );
}