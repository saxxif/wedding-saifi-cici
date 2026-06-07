"use client";

import { motion } from "framer-motion";
import GoldLeaves from "@/components/GoldLeaves";

export default function EventDetail() {
  return (
    <section
      id="event"
      className="
      relative
      overflow-hidden
      py-[180px]
      bg-[#f8f4ee]
      "
    >
      {/* Gold Leaves */}
      <GoldLeaves />

      {/* Luxury Background */}
      <div className="absolute inset-0">

        <div
          className="
          absolute
          inset-0
          bg-[radial-gradient(circle_at_center,#ffffff,transparent_65%)]
          "
        />

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
          w-[1500px]
          h-[1500px]
          rounded-full
          bg-[#d4af37]/10
          blur-[240px]
          "
        />

        {/* Giant Date Watermark */}
        <div
          className="
          absolute
          left-1/2
          top-1/2
          -translate-x-1/2
          -translate-y-1/2
          text-[420px]
          text-[#d4af37]/[0.04]
          leading-none
          pointer-events-none
          "
          style={{
            fontFamily: "var(--font-cormorant)",
          }}
        >
          12
        </div>

        {/* Floating Dust */}
        {[...Array(40)].map((_, i) => (
          <motion.div
            key={i}
            animate={{
              y: [0, -40, 0],
              opacity: [0.2, 1, 0.2],
            }}
            transition={{
              duration: 4 + Math.random() * 4,
              repeat: Infinity,
            }}
            className="
            absolute
            rounded-full
            bg-[#d4af37]
            "
            style={{
              width: 2 + Math.random() * 4,
              height: 2 + Math.random() * 4,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              filter: "blur(1px)",
            }}
          />
        ))}
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">

        {/* Heading */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="
          text-center
          uppercase
          tracking-[10px]
          text-[#b08d57]
          text-sm
          "
        >
          Save The Date
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="
          text-center
          text-6xl
          md:text-[120px]
          leading-none
          text-[#1b1b1b]
          mt-4
          "
          style={{
            fontFamily: "var(--font-cormorant)",
          }}
        >
          Our Wedding Day
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="
          text-center
          max-w-3xl
          mx-auto
          mt-8
          text-gray-600
          leading-8
          "
        >
          Dengan memohon rahmat dan ridho Allah SWT,
          kami mengundang Bapak/Ibu/Saudara/i untuk
          hadir dan memberikan doa restu pada hari
          bahagia kami.
        </motion.p>

        {/* Giant Date */}
        <div className="text-center my-24">

          <p className="uppercase tracking-[8px] text-[#b08d57]">
            Sunday
          </p>

          <h3
            className="
            text-[120px]
            md:text-[220px]
            leading-none
            text-[#b08d57]
            "
            style={{
              fontFamily: "var(--font-cormorant)",
            }}
          >
            12
          </h3>

          <p className="text-2xl md:text-3xl text-gray-500">
            July 2026
          </p>

        </div>

        {/* Events */}
        <div className="relative">

          <div
            className="
            hidden
            lg:block
            absolute
            left-1/2
            top-0
            h-full
            w-px
            bg-gradient-to-b
            from-transparent
            via-[#d4af37]
            to-transparent
            "
          />

          <div className="grid lg:grid-cols-2 gap-12">

            {/* Akad */}
            <motion.div
              initial={{ opacity: 0, x: -80 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
              className="
              relative
              bg-white/70
              backdrop-blur-3xl
              rounded-[50px]
              border
              border-[#d4af37]/20
              overflow-hidden
              shadow-[0_40px_120px_rgba(0,0,0,0.08)]
              "
            >
              <div
                className="
                h-[340px]
                bg-cover
                bg-center
                "
                style={{
                  backgroundImage: "url('/images/akad.jpg')",
                }}
              />

              <div className="p-12">

                <p className="uppercase tracking-[8px] text-[#b08d57] text-xs mb-4">
                  Wedding Ceremony
                </p>

                <h3
                  className="text-6xl text-[#1b1b1b]"
                  style={{
                    fontFamily: "var(--font-cormorant)",
                  }}
                >
                  Akad Nikah
                </h3>

                <div className="w-20 h-px bg-[#d4af37] my-8" />

                <div className="space-y-4 text-gray-600 text-lg">
                  <p>12 Juli 2026</p>
                  <p>07.00 WIB</p>
                  <p>Masjid Agung Sampang</p>
                </div>
              </div>
            </motion.div>

            {/* Resepsi */}
            <motion.div
              initial={{ opacity: 0, x: 80 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
              className="
              relative
              bg-white/70
              backdrop-blur-3xl
              rounded-[50px]
              border
              border-[#d4af37]/20
              overflow-hidden
              shadow-[0_40px_120px_rgba(0,0,0,0.08)]
              lg:mt-24
              "
            >
              <div
                className="
                h-[340px]
                bg-cover
                bg-center
                "
                style={{
                  backgroundImage: "url('/images/resepsi.jpg')",
                }}
              />

              <div className="p-12">

                <p className="uppercase tracking-[8px] text-[#b08d57] text-xs mb-4">
                  Wedding Reception
                </p>

                <h3
                  className="text-6xl text-[#1b1b1b]"
                  style={{
                    fontFamily: "var(--font-cormorant)",
                  }}
                >
                  Resepsi
                </h3>

                <div className="w-20 h-px bg-[#d4af37] my-8" />

                <div className="space-y-4 text-gray-600 text-lg">
                  <p>12 Juli 2026</p>
                  <p>09.00 - 12.00 WIB</p>
                  <p>Gedung Rato Ebu, Sampang</p>
                </div>
              </div>
            </motion.div>

          </div>
        </div>

        {/* Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="
          flex
          flex-col
          md:flex-row
          justify-center
          gap-5
          mt-20
          "
        >
          <a
            href="https://maps.google.com"
            target="_blank"
            className="
            px-12
            py-5
            rounded-full
            bg-[#b08d57]
            text-white
            uppercase
            tracking-[3px]
            shadow-[0_20px_60px_rgba(176,141,87,0.35)]
            hover:scale-105
            transition-all
            "
          >
            View Venue
          </a>

          <button
            className="
            px-12
            py-5
            rounded-full
            border
            border-[#b08d57]
            text-[#b08d57]
            backdrop-blur-xl
            hover:bg-[#b08d57]
            hover:text-white
            transition-all
            "
          >
            Save The Date
          </button>
        </motion.div>

      </div>
    </section>
  );
}