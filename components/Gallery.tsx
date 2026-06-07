"use client";

import { motion } from "framer-motion";

const photos = [
  "/images/gallery1.jpg",
  "/images/gallery2.jpg",
  "/images/gallery3.jpg",
  "/images/gallery4.jpg",
  "/images/gallery5.jpg",
  "/images/gallery6.jpg",
];

export default function Gallery() {
  return (
    <section
      id="gallery"
      className="
      relative
      overflow-hidden
      bg-[#f8f5ef]
      py-28
      "
    >
      {/* Background */}

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
            scale: [1, 1.1, 1],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{
            duration: 12,
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

          blur-[200px]
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
          md:text-[380px]

          text-[#d4af37]/[0.03]

          pointer-events-none

          leading-none
          "
          style={{
            fontFamily: "var(--font-cormorant)",
          }}
        >
          SN
        </div>
      </div>

      {/* Floating Dust */}

      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(35)].map((_, i) => (
          <motion.div
            key={i}
            animate={{
              y: [0, -80, 0],
              opacity: [0.1, 0.8, 0.1],
            }}
            transition={{
              duration: 5 + (i % 6),
              repeat: Infinity,
              delay: i * 0.2,
            }}
            className="
            absolute
            rounded-full
            bg-[#d4af37]
            "
            style={{
              width: `${2 + (i % 3)}px`,
              height: `${2 + (i % 3)}px`,
              left: `${(i * 11) % 100}%`,
              top: `${(i * 23) % 100}%`,
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
        {/* Heading */}

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
            PRECIOUS MOMENTS
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
            Our Gallery
          </h2>

          <div
            className="
            w-24
            h-px

            mx-auto
            mt-8

            bg-gradient-to-r
            from-transparent
            via-[#d4af37]
            to-transparent
            "
          />

          <p
            className="
            mt-8

            text-gray-600

            text-[15px]

            leading-8
            "
          >
            Setiap foto menyimpan cerita, tawa,
            perjalanan, dan kenangan yang membawa kami
            hingga sampai di hari bahagia ini.
          </p>
        </motion.div>

        {/* Featured Photo */}

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
          mt-14

          overflow-hidden

          rounded-[38px]

          bg-white

          border
          border-[#d4af37]/10

          shadow-[0_30px_90px_rgba(0,0,0,0.08)]
          "
        >
          <div className="relative h-[450px] overflow-hidden">
            <motion.img
              animate={{
                scale: [1.05, 1.12, 1.05],
              }}
              transition={{
                duration: 15,
                repeat: Infinity,
              }}
              src={photos[0]}
              alt="Gallery"
              className="
              w-full
              h-full
              object-cover
              "
            />

            <div
              className="
              absolute
              inset-0

              bg-gradient-to-t
              from-black/50
              to-transparent
              "
            />

            <div
              className="
              absolute
              bottom-6
              left-6

              px-5
              py-2

              rounded-full

              bg-white/90

              text-[#b08d57]

              text-[10px]

              tracking-[4px]

              uppercase
              "
            >
              Featured Moment
            </div>
          </div>
        </motion.div>

        {/* Gallery Grid */}

        <div className="grid grid-cols-2 gap-4 mt-5">
          {photos.slice(1).map((photo, index) => (
            <motion.div
              key={index}
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
                duration: 0.8,
                delay: index * 0.1,
              }}
              whileHover={{
                y: -6,
              }}
              className="
              overflow-hidden

              rounded-[28px]

              bg-white

              border
              border-[#d4af37]/10

              shadow-[0_15px_50px_rgba(0,0,0,0.06)]
              "
            >
              <div className="overflow-hidden">
                <motion.img
                  whileHover={{
                    scale: 1.08,
                  }}
                  transition={{
                    duration: 0.8,
                  }}
                  src={photo}
                  alt={`Gallery ${index + 2}`}
                  className="
                  w-full
                  h-[220px]

                  object-cover
                  "
                />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Closing Quote */}

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
            delay: 0.3,
          }}
          className="
          text-center

          mt-16
          "
        >
          <div
            className="
            w-20
            h-px

            mx-auto

            bg-gradient-to-r
            from-transparent
            via-[#d4af37]
            to-transparent
            "
          />

          <p
            className="
            mt-8

            text-[34px]

            leading-tight

            text-[#1b1b1b]
            "
            style={{
              fontFamily:
                "var(--font-cormorant)",
            }}
          >
            Capturing Moments,
            <br />
            Creating Memories.
          </p>
        </motion.div>
      </div>
    </section>
  );
}