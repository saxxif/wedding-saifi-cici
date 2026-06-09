"use client";

import { motion } from "framer-motion";

export default function BrideGroom() {
  return (
    <section
      id="bride-groom"
      className="
      relative
      overflow-hidden
      bg-[#faf8f4]
      pt-10
      pb-24
      "
    >
      {/* BACKGROUND */}

      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[#faf8f4]" />

        <motion.div
          animate={{
            scale: [1, 1.08, 1],
            opacity: [0.2, 0.35, 0.2],
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

          h-[700px]
          w-[700px]

          rounded-full

          bg-[#ead9bb]/20

          blur-[180px]
          "
        />

        <div
          className="
          absolute
          inset-0

          opacity-[0.03]

          flex
          items-center
          justify-center

          text-[240px]

          text-[#b08d57]
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
            opacity: [0, 1, 1, 0],
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

          text-[#d4b483]/80

          pointer-events-none
          "
          style={{
            left: `${(i * 7) % 100}%`,
            top: "-50px",
            fontSize: `${18 + (i % 4) * 4}px`,
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
            opacity: [0, 1, 0],
            scale: [0.5, 1.4, 0.5],
          }}
          transition={{
            duration: 3 + i,
            repeat: Infinity,
            delay: i * 0.8,
          }}
          className="
          absolute

          text-[#e6c58f]

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
        mx-auto

        px-7
        "
      >
        {/* HEADER */}

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
          transition={{
            duration: 1,
          }}
          className="
          text-center
          "
        >
          <motion.div
            animate={{
              scale: [1, 1.3, 1],
              opacity: [0.4, 1, 0.4],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
            }}
            className="
            text-[#d4b483]
            text-xl
            "
          >
            ✦
          </motion.div>

          <motion.h2
            animate={{
              y: [0, -4, 0],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
            }}
            className="
            mt-2

            text-[46px]
            md:text-[62px]

            text-[#b08d57]

            leading-none
            "
            style={{
              fontFamily: "var(--font-cormorant)",
            }}
          >
            Bride & Groom
          </motion.h2>

          <div
            className="
            flex
            items-center
            justify-center

            gap-3

            mt-4
            "
          >
            <div className="w-12 h-px bg-[#d4b483]" />
            <div className="text-[#d4b483]">✦</div>
            <div className="w-12 h-px bg-[#d4b483]" />
          </div>

          <p
            className="
            mt-7

            uppercase

            tracking-[0.3em]

            text-[10px]

            leading-7

            text-[#7a6f61]
            "
          >
            With The Grace Of Allah, We Joyfully Invite You
            <br />
            To Our Beginning Of Forever
          </p>
        </motion.div>

        {/* BRIDE */}

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
          mt-8

          text-center
          "
        >
          <motion.p
            animate={{
              letterSpacing: ["0.3em", "0.45em", "0.3em"],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
            }}
            className="
            uppercase

            text-[15px]

            text-[#b08d57]
            "
          >
            ✦ THE BRIDE ✦
          </motion.p>

          <div
            className="
            w-10
            h-px

            bg-[#d4b483]

            mx-auto

            mt-3
            mb-6
            "
          />

          <div
            className="
            relative

            max-w-[300px]
            mx-auto
            "
          >
            <div
              className="
              border-[2px]
              border-[#d9c49a]

              rounded-[24px]

              p-[6px]

              bg-white
              "
            >
              <div className="relative overflow-hidden rounded-[18px]">
                <motion.img
                  src="/images/cici.jpg"
                  alt=""
                  animate={{
                    scale: [1, 1.03, 1],
                  }}
                  transition={{
                    duration: 10,
                    repeat: Infinity,
                  }}
                  className="
                  w-full
                  aspect-[4/5]
                  object-cover
                  "
                />

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

                  w-24

                  bg-gradient-to-r
                  from-transparent
                  via-white/30
                  to-transparent

                  blur-lg
                  "
                />
              </div>
            </div>
          </div>

          <motion.h3
            animate={{
              y: [0, 0, 0],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
            }}
            className="
            mt-5

            text-[32px]

            text-[#b08d57]
            "
            style={{
              fontFamily: "var(--font-cormorant)",
            }}
          >
            Nicy Citra Auliya
          </motion.h3>

          <motion.div
            animate={{
              width: ["40px", "80px", "40px"],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
            }}
            className="
            h-px

            bg-[#d4b483]

            mx-auto

            my-4
            "
          />

          <p
            className="
            uppercase

            tracking-[0.28em]

            text-[10px]

            leading-7

            text-[#746a5e]
            "
          >
            A Beautiful Chapter
            <br />
            Written By The Hand Of Allah
          </p>
        </motion.div>

        {/* CENTER */}

        <motion.div
          initial={{
            opacity: 0,
            scale: 0.8,
          }}
          whileInView={{
            opacity: 1,
            scale: 1,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: 1,
          }}
          className="
          my-14

          flex
          items-center
          justify-center
          "
        >
          <div className="flex-1 h-px bg-[#d4b483]" />

          <motion.div
            animate={{
              rotate: [0, 360],
              boxShadow: [
                "0 0 0px rgba(212,180,131,0)",
                "0 0 40px rgba(212,180,131,0.3)",
                "0 0 0px rgba(212,180,131,0)",
              ],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "linear",
            }}
            className="
            mx-5

            h-[70px]
            w-[70px]

            rounded-full

            border
            border-[#d4b483]

            flex
            items-center
            justify-center
            "
          >
            <span
              className="
              text-[46px]

              text-[#c8a970]
              "
              style={{
                fontFamily: "var(--font-cormorant)",
              }}
            >
              &
            </span>
          </motion.div>

          <div className="flex-1 h-px bg-[#d4b483]" />
        </motion.div>

        {/* GROOM */}

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
          text-center
          "
        >
          <motion.p
            animate={{
              letterSpacing: ["0.3em", "0.45em", "0.3em"],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
            }}
            className="
            uppercase

            text-[15px]

            text-[#b08d57]
            "
          >
            ✦ THE GROOM ✦
          </motion.p>

          <div
            className="
            w-10
            h-px

            bg-[#d4b483]

            mx-auto

            mt-3
            mb-6
            "
          />

          <div
            className="
            relative

            max-w-[300px]
            mx-auto
            "
          >
            <div
              className="
              border-[2px]
              border-[#d9c49a]

              rounded-[24px]

              p-[6px]

              bg-white
              "
            >
              <div className="relative overflow-hidden rounded-[18px]">
                <motion.img
                  src="/images/saifi.jpg"
                  alt=""
                  animate={{
                    scale: [1, 1.03, 1],
                  }}
                  transition={{
                    duration: 10,
                    repeat: Infinity,
                  }}
                  className="
                  w-full
                  aspect-[4/5]
                  object-cover
                  "
                />

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

                  w-24

                  bg-gradient-to-r
                  from-transparent
                  via-white/30
                  to-transparent

                  blur-lg
                  "
                />
              </div>
            </div>
          </div>

          <motion.h3
            animate={{
              y: [0, -3, 0],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
            }}
            className="
            mt-5

            text-[32px]

            text-[#b08d57]
            "
            style={{
              fontFamily: "var(--font-cormorant)",
            }}
          >
            Saifi Hidayatullah
          </motion.h3>

          <motion.div
            animate={{
              width: ["40px", "80px", "40px"],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
            }}
            className="
            h-px

            bg-[#d4b483]

            mx-auto

            my-4
            "
          />

          <p
            className="
            uppercase

            tracking-[0.28em]

            text-[10px]

            leading-7

            text-[#746a5e]
            "
          >
            And I Found You,
            <br />
            And My Life Found Its Home
          </p>
        </motion.div>

        {/* BOTTOM */}

        <div
          className="
          mt-16

          flex
          items-center
          justify-center

          gap-3
          "
        >
          <div className="flex-1 h-px bg-[#d4b483]" />

          <div className="relative">
            <motion.div
              animate={{
                rotate: [0, 360],
              }}
              transition={{
                duration: 25,
                repeat: Infinity,
                ease: "linear",
              }}
              className="
              absolute

              left-1/2
              top-1/2

              -translate-x-1/2
              -translate-y-1/2

              h-[90px]
              w-[90px]

              rounded-full

              border

              border-[#d4b483]/20
              "
            />

            <div
              className="
              text-[40px]

              text-[#c8a970]
              "
              style={{
                fontFamily: "var(--font-cormorant)",
              }}
            >
              NS
            </div>
          </div>

          <div className="flex-1 h-px bg-[#d4b483]" />
        </div>
      </div>
    </section>
  );
}