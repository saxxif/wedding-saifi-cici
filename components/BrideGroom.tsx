"use client";

import { motion } from "framer-motion";

export default function BrideGroom() {
  return (
    <section
      id="bride-groom"
      className="
      relative
      overflow-hidden
      py-24
      bg-[#f8f5ef]
      "
    >
      {/* Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div
          className="
          absolute
          inset-0
          bg-[radial-gradient(circle_at_center,rgba(212,175,55,0.08),transparent_70%)]
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

          text-[#d4af37]/[0.03]

          pointer-events-none
          "
          style={{
            fontFamily: "var(--font-cormorant)",
          }}
        >
          SN
        </div>
      </div>

      <div
        className="
        relative
        z-10

        max-w-md
        mx-auto

        px-5
        "
      >
        {/* Heading */}

        <motion.div
          initial={{
            opacity: 0,
            y: 20,
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

            tracking-[5px]

            text-[#b08d57]

            text-[10px]
            "
          >
            Bride & Groom
          </p>

          <h2
            className="
            mt-3

            text-[42px]

            leading-[0.95]

            text-[#1b1b1b]
            "
            style={{
              fontFamily: "var(--font-cormorant)",
            }}
          >
            Meet The Couple
          </h2>

          <div
            className="
            w-20
            h-px

            bg-gradient-to-r
            from-transparent
            via-[#d4af37]
            to-transparent

            mx-auto
            mt-5
            "
          />

          <p
            className="
            mt-6

            text-sm

            text-gray-500

            leading-7
            "
          >
            Dengan memohon rahmat dan ridho Allah SWT,
            kami mempersembahkan kedua mempelai yang
            akan melangsungkan pernikahan.
          </p>
        </motion.div>

        {/* BRIDE */}

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
          transition={{
            duration: 0.8,
          }}
          className="
          mt-14

          bg-white

          rounded-[32px]

          overflow-hidden

          shadow-[0_20px_60px_rgba(0,0,0,0.06)]
          "
        >
          <img
            src="/images/cici.jpg"
            alt="Nicky"
            className="
            w-full
            h-[300px]
            object-cover
            "
          />

          <div className="p-8 text-center">
            <p
              className="
              uppercase

              tracking-[4px]

              text-[#b08d57]

              text-[10px]
              "
            >
              THE BRIDE
            </p>

            <h3
              className="
              mt-3

              text-[42px]

              leading-none

              text-[#1b1b1b]
              "
              style={{
                fontFamily: "var(--font-cormorant)",
              }}
            >
              Nicky
            </h3>

            <p className="text-gray-500 mt-2">
              S.Kep., Ns
            </p>

            <div
              className="
              w-20
              h-px

              bg-[#d4af37]

              mx-auto

              my-6
              "
            />

            <p
              className="
              text-gray-600

              leading-8
              "
            >
              Putri Pertama dari
              <br />
              Bapak XXXXX
              <br />
              & Ibu XXXXX
            </p>
          </div>
        </motion.div>

        {/* AMPERSAND */}

        <motion.div
          initial={{
            scale: 0,
            opacity: 0,
          }}
          whileInView={{
            scale: 1,
            opacity: 1,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: 0.8,
          }}
          className="
          flex
          justify-center

          my-10
          "
        >
          <div
            className="
            w-24
            h-24

            rounded-full

            bg-white

            shadow-[0_20px_50px_rgba(0,0,0,0.08)]

            flex
            items-center
            justify-center
            "
          >
            <span
              className="
              text-[60px]

              text-[#b08d57]
              "
              style={{
                fontFamily: "var(--font-cormorant)",
              }}
            >
              &
            </span>
          </div>
        </motion.div>

        {/* GROOM */}

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
          transition={{
            duration: 0.8,
          }}
          className="
          bg-white

          rounded-[32px]

          overflow-hidden

          shadow-[0_20px_60px_rgba(0,0,0,0.06)]
          "
        >
          <img
            src="/images/saifi.jpg"
            alt="Saifi"
            className="
            w-full
            h-[300px]
            object-cover
            "
          />

          <div className="p-8 text-center">
            <p
              className="
              uppercase

              tracking-[4px]

              text-[#b08d57]

              text-[10px]
              "
            >
              THE GROOM
            </p>

            <h3
              className="
              mt-3

              text-[42px]

              leading-none

              text-[#1b1b1b]
              "
              style={{
                fontFamily: "var(--font-cormorant)",
              }}
            >
              Saifi
            </h3>

            <p className="text-gray-500 mt-2">
              S.Tr.T.
            </p>

            <div
              className="
              w-20
              h-px

              bg-[#d4af37]

              mx-auto

              my-6
              "
            />

            <p
              className="
              text-gray-600

              leading-8
              "
            >
              Putra Pertama dari
              <br />
              Bapak XXXXX
              <br />
              & Ibu XXXXX
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}