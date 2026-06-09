"use client";

import { useRef, useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const particles = Array.from({ length: 24 }, (_, i) => ({
  id: i,
  left: (i * 47) % 100,
  size: 2 + (i % 4),
  duration: 18 + (i % 10),
  delay: i * 0.4,
}));

export default function MusicPlayer() {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [opened, setOpened] = useState(false);

  useEffect(() => {
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);

  const openInvitation = async () => {
    try {
      await audioRef.current?.play();

      window.dispatchEvent(
        new Event("open-invitation")
      );

      setTimeout(() => {
        setOpened(true);
        document.body.style.overflow = "auto";
      }, 100);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <audio
        ref={audioRef}
        loop
        preload="auto"
      >
        <source
          src="/music/wedding.mp3"
          type="audio/mpeg"
        />
      </audio>

      <AnimatePresence>
        {!opened && (
          <motion.div
            initial={{
              opacity: 1,
              scale: 1,
            }}
            exit={{
              opacity: 0,
              scale: 1.12,
              filter: "blur(10px)",
              transition: {
                duration: 1.6,
                ease: [0.22, 1, 0.36, 1],
              },
            }}
            className="
            fixed
            inset-0
            z-[99999]
            overflow-hidden
            "
          >
            <motion.div
              animate={{
                scale: [1.08, 1, 1.08],
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
                  "url('/images/hero.jpg')",
              }}
            />

            <div className="absolute inset-0 bg-black/55" />

            <div
              className="
              absolute
              inset-0
              bg-[radial-gradient(circle_at_center,transparent_10%,rgba(0,0,0,0.92)_100%)]
              "
            />

            <motion.div
              animate={{
                opacity: [0.2, 0.45, 0.2],
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
              rounded-full
              bg-[#d4b483]/20
              blur-[180px]
              "
            />

            <div className="absolute inset-0 overflow-hidden pointer-events-none">
              {particles.map((particle) => (
                <motion.div
                  key={particle.id}
                  animate={{
                    y: [0, -1200],
                    x: [0, 15, -10, 5],
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
              min-h-screen
              flex
              items-center
              justify-center
              px-8
              "
            >
              <div
                className="
                w-full
                max-w-[380px]
                text-center
                "
              >
                <motion.div
                  initial={{
                    opacity: 0,
                    y: -20,
                  }}
                  animate={{
                    opacity: 1,
                    y: 0,
                  }}
                  className="
                  flex
                  justify-center
                  mb-8
                  "
                >
                  <div
                    className="
                    h-px
                    w-24
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
                  uppercase
                  tracking-[0.5em]
                  text-[#d4b483]
                  text-[10px]
                  "
                >
                  THE WEDDING OF
                </motion.p>

                <motion.h1
                  initial={{
                    opacity: 0,
                    y: 40,
                    filter: "blur(15px)",
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
                  mt-8
                  text-white
                  text-[58px]
                  leading-[0.88]
                  tracking-[-0.05em]
                  drop-shadow-[0_10px_40px_rgba(0,0,0,0.8)]
                  "
                  style={{
                    fontFamily:
                      "var(--font-cormorant)",
                  }}
                >
                  Saifi
                </motion.h1>

                <motion.div
                  animate={{
                    scale: [1, 1.08, 1],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                  }}
                  className="
                  my-2
                  text-[#d4b483]
                  text-[28px]
                  "
                  style={{
                    fontFamily:
                      "var(--font-cormorant)",
                  }}
                >
                  &
                </motion.div>

                <motion.h1
                  initial={{
                    opacity: 0,
                    y: 40,
                    filter: "blur(15px)",
                  }}
                  animate={{
                    opacity: 1,
                    y: 0,
                    filter: "blur(0px)",
                  }}
                  transition={{
                    duration: 2,
                  }}
                  className="
                  text-white
                  text-[58px]
                  leading-[0.88]
                  tracking-[-0.05em]
                  drop-shadow-[0_10px_40px_rgba(0,0,0,0.8)]
                  "
                  style={{
                    fontFamily:
                      "var(--font-cormorant)",
                  }}
                >
                  Nicky
                </motion.h1>

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
                  mt-8
                  text-white/75
                  uppercase
                  tracking-[0.25em]
                  text-[11px]
                  leading-6
                  "
                >
                  Forever Begins Here
                </motion.p>

                <div
                  className="
                  w-32
                  h-px
                  mx-auto
                  mt-8
                  bg-gradient-to-r
                  from-transparent
                  via-[#d4b483]
                  to-transparent
                  "
                />

                <motion.p
                  initial={{
                    opacity: 0,
                  }}
                  animate={{
                    opacity: 1,
                  }}
                  transition={{
                    delay: 1,
                  }}
                  className="
                  mt-8
                  text-white/90
                  text-[12px]
                  tracking-[0.35em]
                  "
                >
                  12 JULY 2026
                </motion.p>

                <motion.button
                  initial={{
                    opacity: 0,
                    y: 20,
                  }}
                  animate={{
                    opacity: 1,
                    y: 0,
                  }}
                  transition={{
                    delay: 1.4,
                  }}
                  whileHover={{
                    scale: 1.03,
                  }}
                  whileTap={{
                    scale: 0.98,
                  }}
                  onClick={openInvitation}
                  className="
                  mt-12
                  w-full
                  py-4
                  rounded-full
                  border
                  border-[#d4b483]
                  bg-white/5
                  backdrop-blur-xl
                  text-[#d4b483]
                  text-[11px]
                  tracking-[0.3em]
                  transition-all
                  duration-500
                  hover:bg-[#d4b483]
                  hover:text-black
                  "
                >
                  OPEN INVITATION
                </motion.button>

                <motion.div
                  animate={{
                    y: [0, 8, 0],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                  }}
                  className="
                  flex
                  justify-center
                  mt-14
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
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}