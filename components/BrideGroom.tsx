"use client";

import { motion } from "framer-motion";
import GoldLeaves from "@/components/GoldLeaves";
export default function BrideGroom() {
  return (
    <section
      id="bride-groom"
      className="relative overflow-hidden py-40 bg-[#faf8f4]"
    >
  <GoldLeaves />

  {/* Background Glow */}
  <div className="absolute inset-0">
    ...
  </div>  
    {/* Luxury Background */}
<div className="absolute inset-0">

  {/* Vignette */}
  <div
    className="
    absolute
    inset-0
    bg-[radial-gradient(circle_at_center,transparent_40%,rgba(0,0,0,0.08))]
    "
  />

  {/* Gold Spotlight */}
  <motion.div
    animate={{
      scale: [1, 1.1, 1],
      opacity: [0.3, 0.5, 0.3],
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
    blur-[250px]
    "
  />

  {/* Luxury Monogram Background */}
  <div
    className="
    absolute
    left-1/2
    top-1/2
    -translate-x-1/2
    -translate-y-1/2
    text-[600px]
    leading-none
    text-[#d4af37]/[0.03]
    pointer-events-none
    "
    style={{
      fontFamily: "var(--font-cormorant)",
    }}
  >
    &
  </div>
</div>
      {/* Background Glow */}
      <div className="absolute inset-0">
        <div
          className="
          absolute
          top-1/2
          left-1/2
          -translate-x-1/2
          -translate-y-1/2
          w-[1200px]
          h-[1200px]
          bg-[#d4b483]/10
          blur-[220px]
          "
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="
          text-center
          uppercase
          tracking-[8px]
          text-[#a98d64]
          mb-4
          "
        >
          بِسْمِ اللّٰهِ الرَّحْمٰنِ الرَّحِيْمِ
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="
          text-center
          text-6xl
          md:text-8xl
          text-[#1b1b1b]
          "
          style={{
            fontFamily: "var(--font-cormorant)",
          }}
        >
          Bride & Groom
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="
          text-center
          max-w-3xl
          mx-auto
          text-gray-600
          mt-8
          mb-24
          leading-8
          "
        >
          Dengan memohon rahmat dan ridho Allah SWT,
          kami bermaksud menyelenggarakan pernikahan
          putra-putri kami.
        </motion.p>

        <div className="relative grid lg:grid-cols-2 gap-24">
          {/* Bride */}
          <motion.div
            initial={{ opacity: 0, y: 80 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="relative"
          >
            <div
              className="
              relative
              bg-white
              rounded-[56px]
              overflow-hidden
              border
              border-[#d4b483]/20
              shadow-[0_40px_140px_rgba(0,0,0,0.08)]
              "
            >
              <div
                className="
                absolute
                inset-[10px]
                rounded-[46px]
                border
                border-[#d4b483]/10
                pointer-events-none
                "
              />

              <div className="p-6">
                <div className="overflow-hidden rounded-[38px]">
                  <motion.img
                    whileHover={{
                      scale: 1.05,
                    }}
                    transition={{
                      duration: 1.5,
                    }}
                    src="/images/cici.jpg"
                    alt="Cici"
                    className="
                    w-full
                    h-[760px]
                    object-cover
                    "
                  />
                </div>
              </div>

              <div className="px-12 pb-16 text-center">
                <p
                  className="
                  uppercase
                  tracking-[12px]
                  text-[#b08d57]
                  text-[11px]
                  mb-6
                  "
                >
                  THE BRIDE
                </p>

                <h3
                  className="
                  text-6xl
                  md:text-7xl
                  leading-none
                  text-[#1b1b1b]
                  "
                  style={{
                    fontFamily: "var(--font-cormorant)",
                  }}
                >
                  Nicky
                </h3>

                <p className="text-xl text-gray-400 mt-4">
                  S.Kep., Ns
                </p>

                <div
                  className="
                  w-24
                  h-px
                  bg-gradient-to-r
                  from-transparent
                  via-[#d4b483]
                  to-transparent
                  mx-auto
                  my-10
                  "
                />

                <p
                  className="
                  text-gray-600
                  leading-9
                  text-lg
                  "
                >
                  Putri Pertama dari
                  <br />
                  Bapak XXXXX
                  <br />
                  & Ibu XXXXX
                </p>
              </div>
            </div>
          </motion.div>

          {/* Groom */}
          <motion.div
            initial={{ opacity: 0, y: 80 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 1,
              delay: 0.2,
            }}
            className="relative lg:mt-28"
          >
            <div
              className="
              relative
              bg-white
              rounded-[56px]
              overflow-hidden
              border
              border-[#d4b483]/20
              shadow-[0_40px_140px_rgba(0,0,0,0.08)]
              "
            >
              <div
                className="
                absolute
                inset-[10px]
                rounded-[46px]
                border
                border-[#d4b483]/10
                pointer-events-none
                "
              />

              <div className="p-6">
                <div className="overflow-hidden rounded-[38px]">
                  <motion.img
                    whileHover={{
                      scale: 1.05,
                    }}
                    transition={{
                      duration: 1.5,
                    }}
                    src="/images/saifi.jpg"
                    alt="Saifi"
                    className="
                    w-full
                    h-[760px]
                    object-cover
                    "
                  />
                </div>
              </div>

              <div className="px-12 pb-16 text-center">
                <p
                  className="
                  uppercase
                  tracking-[12px]
                  text-[#b08d57]
                  text-[11px]
                  mb-6
                  "
                >
                  THE GROOM
                </p>

                <h3
                  className="
                  text-6xl
                  md:text-7xl
                  leading-none
                  text-[#1b1b1b]
                  "
                  style={{
                    fontFamily: "var(--font-cormorant)",
                  }}
                >
                  Saifi
                </h3>

                <p className="text-xl text-gray-400 mt-4">
                  S.Tr.T.
                </p>

                <div
                  className="
                  w-24
                  h-px
                  bg-gradient-to-r
                  from-transparent
                  via-[#d4b483]
                  to-transparent
                  mx-auto
                  my-10
                  "
                />

                <p
                  className="
                  text-gray-600
                  leading-9
                  text-lg
                  "
                >
                  Putra Pertama dari
                  <br />
                  Bapak XXXXX
                  <br />
                  & Ibu XXXXX
                </p>
              </div>
            </div>
          </motion.div>

          {/* Luxury Center Monogram */}
          <div
            className="
            hidden
            lg:flex
            absolute
            left-1/2
            top-1/2
            -translate-x-1/2
            -translate-y-1/2
            z-30
            "
          >
            <div className="relative">
              <div
                className="
                w-36
                h-36
                rounded-full
                bg-white
                border
                border-[#d4b483]/20
                shadow-[0_25px_90px_rgba(0,0,0,0.08)]
                flex
                items-center
                justify-center
                "
              >
                <span
                  className="
                  text-[82px]
                  leading-none
                  text-[#b08d57]
                  "
                  style={{
                    fontFamily: "var(--font-cormorant)",
                  }}
                >
                  &
                </span>
              </div>

              <div
                className="
                absolute
                inset-[-10px]
                rounded-full
                border
                border-[#d4b483]/10
                "
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}