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
      className="bg-[#f8f4ec] py-24 overflow-hidden"
    >
      <div className="max-w-6xl mx-auto px-6">

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center uppercase tracking-[8px] text-gray-500"
        >
          Precious Moments
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="text-center text-5xl md:text-6xl mt-4 mb-16"
          style={{
            fontFamily: "var(--font-cormorant)",
          }}
        >
          Our Gallery
        </motion.h2>

        <div className="grid grid-cols-2 gap-4 md:grid-cols-3">

          {photos.map((photo, index) => (
            <motion.div
              key={index}
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
                delay: index * 0.1,
              }}
              whileHover={{
                scale: 1.05,
              }}
              className="
                overflow-hidden
                rounded-3xl
                shadow-2xl
                cursor-pointer
              "
            >
              <img
                src={photo}
                alt={`Gallery ${index + 1}`}
                className="
                  w-full
                  h-[250px]
                  md:h-[400px]
                  object-cover
                  transition-all
                  duration-700
                  hover:scale-110
                "
              />
            </motion.div>
          ))}

        </div>

      </div>
    </section>
  );
}