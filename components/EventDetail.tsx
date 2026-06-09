"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useMemo, useState } from "react";
import GoldLeaves from "@/components/GoldLeaves";

const events = [
  {
    type: "Wedding Ceremony",
    title: "Akad Nikah",
    image: "/images/akad.jpg",
    date: "12 Juli 2026",
    time: "07.00 WIB",
    place: "Masjid Agung Bangkalan",
  },
  {
    type: "Wedding Reception",
    title: "Resepsi",
    image: "/images/resepsi.jpg",
    date: "12 Juli 2026",
    time: "09.00 - 12.00 WIB",
    place: "Gedung Rato Ebu, Bangkalan",
  },
];

export default function EventDetail() {
  const [activeCard, setActiveCard] = useState<number | null>(0);

  const weddingDate = new Date("2026-07-12T07:00:00");

  const daysLeft = useMemo(() => {
    return Math.max(
      0,
      Math.floor(
        (weddingDate.getTime() - Date.now()) /
          (1000 * 60 * 60 * 24)
      )
    );
  }, []);

  return (
    <section
      id="event"
      className="
      relative
      overflow-hidden
      bg-[#f8f5ef]
      py-28
      "
    >
      <GoldLeaves />

      <div className="absolute inset-0">
        <div
          className="
          absolute
          inset-0
          bg-[radial-gradient(circle_at_center,rgba(212,175,55,0.08),transparent_60%)]
          "
        />

        <motion.div
          animate={{
            scale: [1, 1.08, 1],
            opacity: [0.18, 0.3, 0.18],
          }}
          transition={{
            duration: 14,
            repeat: Infinity,
          }}
          className="
          absolute
          left-1/2
          top-1/2
          -translate-x-1/2
          -translate-y-1/2
          w-[900px]
          h-[900px]
          rounded-full
          bg-[#d4af37]/10
          blur-[180px]
          "
        />

        <div
          className="
          absolute
          inset-0
          flex
          items-center
          justify-center
          text-[180px]
          md:text-[400px]
          text-[#d4af37]/[0.03]
          pointer-events-none
          leading-none
          "
          style={{
            fontFamily: "var(--font-cormorant)",
          }}
        >
          12
        </div>
      </div>

      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {Array.from({ length: 12 }).map((_, i) => (
          <motion.div
            key={i}
            animate={{
              y: [0, -50, 0],
              opacity: [0.15, 0.5, 0.15],
            }}
            transition={{
              duration: 6 + (i % 4),
              repeat: Infinity,
              delay: i * 0.25,
            }}
            className="
            absolute
            rounded-full
            bg-[#d4af37]
            "
            style={{
              width: `${2 + (i % 2)}px`,
              height: `${2 + (i % 2)}px`,
              left: `${(i * 17) % 100}%`,
              top: `${(i * 29) % 100}%`,
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
            tracking-[8px]
            text-[#b08d57]
            text-[11px]
            "
          >
            SAVE THE DATE
          </p>

          <h2
            className="
            mt-5
            text-[58px]
            leading-none
            text-[#1b1b1b]
            "
            style={{
              fontFamily:
                "var(--font-cormorant)",
            }}
          >
            Our Wedding Day
          </h2>

          <div
            className="
            w-24
            h-px
            bg-gradient-to-r
            from-transparent
            via-[#d4af37]
            to-transparent
            mx-auto
            mt-8
            "
          />

          <p
            className="
            mt-8
            text-gray-600
            leading-8
            text-[15px]
            "
          >
            Dengan memohon rahmat dan ridho Allah SWT,
            kami mengundang Bapak/Ibu/Saudara/i untuk
            hadir dan memberikan doa restu pada hari
            bahagia kami.
          </p>
        </motion.div>

        <motion.div
          initial={{
            opacity: 0,
            scale: 0.9,
          }}
          whileInView={{
            opacity: 1,
            scale: 1,
          }}
          viewport={{
            once: true,
          }}
          className="
          my-12
          text-center
          "
        >
          <div
            className="
            inline-flex
            flex-col
            items-center
            px-8
            py-5
            rounded-[30px]
            bg-white/80
            backdrop-blur-xl
            border
            border-[#d4af37]/10
            shadow-[0_20px_60px_rgba(0,0,0,0.06)]
            "
          >
            <p
              className="
              uppercase
              tracking-[4px]
              text-[#b08d57]
              text-[10px]
              "
            >
              Countdown
            </p>

            <span
              className="
              text-[58px]
              leading-none
              text-[#b08d57]
              "
              style={{
                fontFamily:
                  "var(--font-cormorant)",
              }}
            >
              {daysLeft}
            </span>

            <p className="text-sm text-gray-500">
              Hari Menuju Pernikahan
            </p>
          </div>
        </motion.div>

        <motion.div
          initial={{
            opacity: 0,
            scale: 0.9,
          }}
          whileInView={{
            opacity: 1,
            scale: 1,
          }}
          viewport={{
            once: true,
          }}
          className="
          text-center
          my-16
          "
        >
          <p
            className="
            uppercase
            tracking-[6px]
            text-[#b08d57]
            text-[11px]
            "
          >
            Sunday
          </p>

          <h3
            className="
            text-[120px]
            leading-none
            text-[#b08d57]
            "
            style={{
              fontFamily:
                "var(--font-cormorant)",
            }}
          >
            12
          </h3>

          <p
            className="
            text-gray-500
            text-xl
            tracking-[3px]
            "
          >
            JULY 2026
          </p>
        </motion.div>

        <div className="space-y-10">
          {events.map((event, index) => (
            <motion.div
              key={event.title}
              layout
              onClick={() =>
                setActiveCard(
                  activeCard === index
                    ? null
                    : index
                )
              }
              initial={{
                opacity: 0,
                y: 60,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              whileHover={{
                y: -8,
              }}
              viewport={{
                once: true,
              }}
              transition={{
                duration: 0.6,
              }}
              className={`
                overflow-hidden
                rounded-[36px]
                bg-white/80
                backdrop-blur-xl
                border
                cursor-pointer
                shadow-[0_25px_90px_rgba(0,0,0,0.08)]
                transition-all
                ${
                  activeCard === index
                    ? "border-[#d4af37] ring-2 ring-[#d4af37]/20"
                    : "border-[#d4af37]/10"
                }
              `}
            >
              <div className="relative h-[250px] overflow-hidden">
                <motion.img
                  src={event.image}
                  alt={event.title}
                  whileHover={{
                    scale: 1.06,
                  }}
                  transition={{
                    duration: 0.6,
                  }}
                  className="
                  w-full
                  h-full
                  object-cover
                  "
                />

                <motion.div
                  animate={{
                    x: [
                      "-200%",
                      "300%",
                    ],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    repeatDelay: 8,
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
                  "
                />

                <div
                  className="
                  absolute
                  inset-0
                  bg-gradient-to-t
                  from-black/60
                  to-transparent
                  "
                />

                <div
                  className="
                  absolute
                  left-5
                  bottom-5
                  px-4
                  py-2
                  rounded-full
                  bg-white/90
                  text-[#b08d57]
                  uppercase
                  tracking-[3px]
                  text-[10px]
                  "
                >
                  {event.type}
                </div>
              </div>

              <div className="p-8 text-center">
                <h3
                  className="
                  text-[52px]
                  leading-none
                  text-[#1b1b1b]
                  "
                  style={{
                    fontFamily:
                      "var(--font-cormorant)",
                  }}
                >
                  {event.title}
                </h3>

                <div
                  className="
                  w-20
                  h-px
                  bg-gradient-to-r
                  from-transparent
                  via-[#d4af37]
                  to-transparent
                  mx-auto
                  my-6
                  "
                />

                <div
                  className="
                  space-y-3
                  text-gray-600
                  text-[15px]
                  "
                >
                  <p>{event.date}</p>
                  <p>{event.time}</p>
                  <p>{event.place}</p>
                </div>

                <AnimatePresence>
                  {activeCard === index && (
                    <motion.div
                      initial={{
                        opacity: 0,
                        height: 0,
                      }}
                      animate={{
                        opacity: 1,
                        height: "auto",
                      }}
                      exit={{
                        opacity: 0,
                        height: 0,
                      }}
                      className="
                      overflow-hidden
                      "
                    >
                      <div
                        className="
                        mt-6
                        pt-6
                        border-t
                        border-[#d4af37]/10
                        "
                      >
                        <p
                          className="
                          text-sm
                          text-gray-500
                          leading-7
                          "
                        >
                          Klik tombol lokasi di
                          bawah untuk membuka
                          Google Maps dan melihat
                          rute menuju lokasi acara.
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{
            opacity: 0,
            y: 40,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
          }}
          className="
          flex
          flex-col
          gap-4
          mt-14
          "
        >
          <a
            href="https://maps.app.goo.gl/TUZzpRyyXkAUYRXL7"
            target="_blank"
            className="
            text-center
            py-4
            rounded-full
            bg-[#b08d57]
            text-white
            uppercase
            tracking-[3px]
            shadow-[0_20px_60px_rgba(176,141,87,0.35)]
            transition-all
            duration-300
            hover:scale-[1.02]
            "
          >
            VIEW VENUE
          </a>

          <button
            onClick={() =>
              navigator.clipboard.writeText(
                "12 Juli 2026"
              )
            }
            className="
            py-4
            rounded-full
            border
            border-[#b08d57]
            text-[#b08d57]
            uppercase
            tracking-[3px]
            transition-all
            duration-300
            hover:bg-[#b08d57]
            hover:text-white
            "
          >
            SAVE THE DATE
          </button>
        </motion.div>
      </div>
    </section>
  );
}