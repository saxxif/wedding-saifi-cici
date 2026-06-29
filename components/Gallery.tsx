"use client";

import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useMemo, useState } from "react";

const photos = [
  "/images/gallery1.jpg",
  "/images/gallery2.jpg",
  "/images/gallery3.jpg",
  "/images/gallery4.jpg",
  "/images/gallery5.jpg",
  "/images/gallery6.jpg",
  "/images/gallery7.jpg",
  "/images/gallery8.jpg",
  "/images/gallery9.jpg",
  "/images/gallery10.jpg",
  "/images/gallery11.jpg",
  "/images/gallery12.jpg",
];

export default function Gallery() {
  const [page, setPage] = useState(0);

  const particles = useMemo(
    () =>
      Array.from({ length: 10 }, (_, i) => ({
        id: i,
        left: `${(i * 11) % 100}%`,
        top: `${(i * 23) % 100}%`,
      })),
    []
  );

  const totalPages = Math.ceil(photos.length / 4);

  useEffect(() => {
    const interval = setInterval(() => {
      setPage((prev) => (prev + 1) % totalPages);
    }, 3500);

    return () => clearInterval(interval);
  }, [totalPages]);

  const visiblePhotos = photos.slice(
    page * 4,
    page * 4 + 4
  );

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
      <div className="absolute inset-0">
        <div
          className="
          absolute
          inset-0
          bg-[radial-gradient(circle_at_center,rgba(212,175,55,0.08),transparent_60%)]
          "
        />

        <div
          className="
          absolute
          left-1/2
          top-1/2
          -translate-x-1/2
          -translate-y-1/2
          w-[700px]
          h-[700px]
          rounded-full
          bg-[#d4af37]/10
          blur-[80px]
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

      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {particles.map((item) => (
          <motion.div
            key={item.id}
            animate={{
              y: [0, -40, 0],
              opacity: [0.1, 0.5, 0.1],
            }}
            transition={{
              duration: 6 + (item.id % 4),
              repeat: Infinity,
              delay: item.id * 0.3,
            }}
            className="
            absolute
            rounded-full
            bg-[#d4af37]
            "
            style={{
              width: `${2 + (item.id % 2)}px`,
              height: `${2 + (item.id % 2)}px`,
              left: item.left,
              top: item.top,
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
              fontFamily: "var(--font-cormorant)",
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

        <div className="mt-14 relative min-h-[520px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={page}
              initial={{
                opacity: 0,
                y: 40,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              exit={{
                opacity: 0,
                y: -40,
              }}
              transition={{
                duration: 0.8,
              }}
              className="
              grid
              grid-cols-2
              gap-4
              "
            >
              {visiblePhotos.map((photo, index) => (
                <motion.div
                  key={photo}
                  initial={{
                    opacity: 0,
                    scale: 0.9,
                  }}
                  animate={{
                    opacity: 1,
                    scale: 1,
                  }}
                  transition={{
                    delay: index * 0.08,
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
                  <div
                    className="
                    relative
                    aspect-[3/4]
                    overflow-hidden
                    "
                  >
                    <Image
                      src={photo}
                      alt={`Gallery ${index}`}
                      fill
                      loading="lazy"
                      sizes="50vw"
                      className="
                      object-cover
                      transition-transform
                      duration-700
                      hover:scale-110
                      "
                    />
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>

        <div
          className="
          flex
          justify-center
          gap-2
          mt-8
          "
        >
          {Array.from({
            length: totalPages,
          }).map((_, index) => (
            <button
              key={index}
              onClick={() => setPage(index)}
              className={`
                h-2
                rounded-full
                transition-all
                duration-300
                ${
                  page === index
                    ? "w-8 bg-[#d4af37]"
                    : "w-2 bg-[#d4af37]/30"
                }
              `}
            />
          ))}
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
              fontFamily: "var(--font-cormorant)",
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