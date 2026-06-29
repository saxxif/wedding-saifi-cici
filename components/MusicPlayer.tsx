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

interface MusicPlayerProps {
  guestName?: string;
}

export default function MusicPlayer({ guestName = "Tamu Undangan" }: MusicPlayerProps) {
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
            w-full
            max-w-md
            mx-auto
            box-border
            "
          >
            {/* Background Image */}
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

            {/* Overlays */}
            <div className="absolute inset-0 bg-black/55" />

            <div
              className="
              absolute
              inset-0
              bg-[radial-gradient(circle_at_center,transparent_10%,rgba(0,0,0,0.92)_100%)]
              "
            />

            {/* Ambient Golden Glow (Responsive Size) */}
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
              w-[280px]
              h-[280px]
              rounded-full
              bg-[#d4b483]/20
              blur-[100px]
              pointer-events-none
              "
            />

            {/* Floating Particles */}
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

            {/* Main Content Area */}
            <div
              className="
              relative
              z-20
              h-full
              w-full
              flex
              items-center
              justify-center
              px-6
              py-8
              overflow-y-auto
              "
            >
              <div
                className="
                w-full
                max-w-[320px]
                text-center
                my-auto
                "
              >
                {/* Top Line Divider */}
                <motion.div
                  initial={{
                    opacity: 0,
                    y: -15,
                  }}
                  animate={{
                    opacity: 1,
                    y: 0,
                  }}
                  className="
                  flex
                  justify-center
                  mb-5
                  "
                >
                  <div
                    className="
                    h-px
                    w-16
                    bg-gradient-to-r
                    from-transparent
                    via-[#d4b483]/70
                    to-transparent
                    "
                  />
                </motion.div>

                {/* Subtitle */}
                <motion.p
                  initial={{
                    opacity: 0,
                    y: -15,
                  }}
                  animate={{
                    opacity: 1,
                    y: 0
                  }}
                  transition={{
                    duration: 1,
                  }}
                  className="
                  uppercase
                  tracking-[0.5em]
                  text-[#d4b483]
                  text-[8.5px]
                  font-medium
                  pl-[0.5em]
                  "
                >
                  THE WEDDING OF
                </motion.p>

                {/* Bride & Groom Name */}
                <motion.h1
                  initial={{
                    opacity: 0,
                    y: 30,
                    filter: "blur(15px)",
                  }}
                  animate={{
                    opacity: 1,
                    y: 0,
                    filter: "blur(0px)",
                  }}
                  transition={{
                    duration: 1.5,
                  }}
                  className="
                  mt-5
                  text-white
                  text-[48px]
                  leading-[0.85]
                  tracking-[-0.02em]
                  drop-shadow-[0_8px_25px_rgba(0,0,0,0.5)]
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
                  my-1
                  text-[#d4b483]/90
                  text-[22px]
                  italic
                  font-light
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
                    y: 30,
                    filter: "blur(15px)",
                  }}
                  animate={{
                    opacity: 1,
                    y: 0,
                    filter: "blur(0px)",
                  }}
                  transition={{
                    duration: 1.7,
                  }}
                  className="
                  text-white
                  text-[48px]
                  leading-[0.85]
                  tracking-[-0.02em]
                  drop-shadow-[0_8px_25px_rgba(0,0,0,0.5)]
                  "
                  style={{
                    fontFamily:
                      "var(--font-cormorant)",
                  }}
                >
                  Nicky
                </motion.h1>

                {/* Tagline */}
                <motion.p
                  initial={{
                    opacity: 0,
                  }}
                  animate={{
                    opacity: 0.8,
                  }}
                  transition={{
                    delay: 0.6,
                  }}
                  className="
                  mt-5
                  text-white/80
                  uppercase
                  tracking-[0.3em]
                  text-[9px]
                  font-light
                  pl-[0.3em]
                  "
                >
                  Forever Begins Here
                </motion.p>

                {/* Center Line Divider */}
                <div
                  className="
                  w-20
                  h-px
                  mx-auto
                  mt-5
                  bg-gradient-to-r
                  from-transparent
                  via-[#d4b483]/50
                  to-transparent
                  "
                />

                {/* Wedding Date */}
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
                  text-white/90
                  text-[10px]
                  tracking-[0.35em]
                  font-medium
                  pl-[0.35em]
                  "
                >
                  12 JULY 2026
                </motion.p>

                {/* ========================================== */}
                {/* AREA PERSONALISASI NAMA TAMU (TEROPTIMASI) */}
                {/* ========================================== */}
                <motion.div
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1, duration: 1 }}
                  className="mt-9 px-2 flex flex-col items-center select-none"
                >
                  <p className="text-white/45 text-[8.5px] tracking-[0.25em] uppercase font-medium pl-[0.25em]">
                    Kepada Yth. Bapak/Ibu/Saudara/i:
                  </p>
                  
                  {/* Garis aksen tipis di atas nama */}
                  <div className="h-[0.5px] w-8 bg-[#d4b483]/30 mt-3" />
                  
                  <h3 
                    className="text-[#d4b483] text-[24px] font-bold mt-2.5 tracking-wide capitalize drop-shadow-[0_2px_10px_rgba(0,0,0,0.3)] leading-snug"
                    style={{ fontFamily: "var(--font-cormorant)" }}
                  >
                    {guestName}
                  </h3>
                  
                  {/* Garis aksen tipis di bawah nama */}
                  <div className="h-[0.5px] w-8 bg-[#d4b483]/30 mt-2.5" />
                </motion.div>

                {/* Open Invitation Button */}
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
                    delay: 1.2,
                  }}
                  whileHover={{
                    scale: 1.02,
                  }}
                  whileTap={{
                    scale: 0.98,
                  }}
                  onClick={openInvitation}
                  className="
                  mt-7
                  w-full
                  py-3.5
                  rounded-full
                  border
                  border-[#d4b483]/80
                  bg-white/5
                  backdrop-blur-md
                  text-[#d4b483]
                  text-[9.5px]
                  tracking-[0.3em]
                  font-semibold
                  pl-[0.3em]
                  transition-all
                  duration-500
                  hover:bg-[#d4b483]
                  hover:text-black
                  "
                >
                  OPEN INVITATION
                </motion.button>

                {/* Mouse/Scroll Icon Indicator */}
                <motion.div
                  animate={{
                    y: [0, 6, 0],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                  }}
                  className="
                  flex
                  justify-center
                  mt-9
                  "
                >
                  <div
                    className="
                    w-5
                    h-9
                    rounded-full
                    border
                    border-white/15
                    flex
                    justify-center
                    pt-1.5
                    "
                  >
                    <motion.div
                      animate={{
                        y: [0, 10, 0],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                      }}
                      className="
                      w-[3px]
                      h-[3px]
                      rounded-full
                      bg-[#d4b483]/80
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