"use client";

import { motion } from "framer-motion";
import {
  Copy,
  Gift,
  CreditCard,
  MapPin,
  Check,
} from "lucide-react";
import { useState } from "react";

export default function WeddingGift() {
  const [copied, setCopied] = useState("");

  const copyText = async (
    text: string,
    type: string
  ) => {
    await navigator.clipboard.writeText(text);
    setCopied(type);

    setTimeout(() => {
      setCopied("");
    }, 2000);
  };

  return (
    <section
      id="gift"
      className="
      relative
      overflow-hidden

      bg-[#faf8f4]

      py-28
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

        <motion.div
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.2, 0.4, 0.2],
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

          w-[700px]
          h-[700px]

          rounded-full

          bg-[#d4af37]/10

          blur-[180px]
          "
        />

        <div
          className="
          absolute

          left-1/2
          top-1/2

          -translate-x-1/2
          -translate-y-1/2

          text-[220px]

          text-[#d4af37]/[0.03]

          pointer-events-none
          "
          style={{
            fontFamily: "var(--font-cormorant)",
          }}
        >
          GIFT
        </div>
      </div>

      <div
        className="
        relative
        z-10

        max-w-[430px]
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
          <div className="flex justify-center">
            <div
              className="
              w-16
              h-16

              rounded-full

              bg-white

              shadow-[0_15px_40px_rgba(0,0,0,0.08)]

              flex
              items-center
              justify-center
              "
            >
              <Gift
                size={28}
                className="text-[#b08d57]"
              />
            </div>
          </div>

          <p
            className="
            mt-6

            uppercase

            tracking-[5px]

            text-[#b08d57]

            text-[10px]
            "
          >
            Wedding Gift
          </p>

          <h2
            className="
            mt-4

            text-[48px]

            leading-none

            text-[#1b1b1b]
            "
            style={{
              fontFamily:
                "var(--font-cormorant)",
            }}
          >
            Send Love
          </h2>

          <p
            className="
            mt-5

            text-gray-500

            text-sm

            leading-7
            "
          >
            Kehadiran dan doa restu Anda
            merupakan hadiah terindah bagi kami.
            Namun apabila ingin memberikan tanda
            kasih, dapat melalui informasi berikut.
          </p>
        </motion.div>

        {/* BANK 1 */}

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
          mt-12

          bg-white/90

          backdrop-blur-xl

          rounded-[36px]

          border
          border-[#d4af37]/10

          shadow-[0_25px_80px_rgba(0,0,0,0.08)]

          p-8
          "
        >
          <div className="flex items-center gap-3">
            <CreditCard
              size={22}
              className="text-[#b08d57]"
            />

            <span
              className="
              uppercase

              tracking-[3px]

              text-[#b08d57]

              text-xs
              "
            >
              Bank BCA
            </span>
          </div>

          <h3
            className="
            mt-6

            text-[34px]

            text-[#1b1b1b]
            "
            style={{
              fontFamily:
                "var(--font-cormorant)",
            }}
          >
            1234567890
          </h3>

          <p className="mt-2 text-gray-500">
            Saifi Hidayatullah
          </p>

          <button
            onClick={() =>
              copyText(
                "1234567890",
                "bca"
              )
            }
            className="
            mt-6

            w-full

            py-4

            rounded-full

            bg-[#b08d57]

            text-white

            flex
            items-center
            justify-center
            gap-2

            transition-all

            hover:scale-[1.02]
            "
          >
            {copied === "bca" ? (
              <>
                <Check size={18} />
                Copied
              </>
            ) : (
              <>
                <Copy size={18} />
                Copy Account Number
              </>
            )}
          </button>
        </motion.div>

        {/* BANK 2 */}

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
            delay: 0.1,
          }}
          className="
          mt-5

          bg-white/90

          backdrop-blur-xl

          rounded-[36px]

          border
          border-[#d4af37]/10

          shadow-[0_25px_80px_rgba(0,0,0,0.08)]

          p-8
          "
        >
          <div className="flex items-center gap-3">
            <CreditCard
              size={22}
              className="text-[#b08d57]"
            />

            <span
              className="
              uppercase

              tracking-[3px]

              text-[#b08d57]

              text-xs
              "
            >
              Bank Mandiri
            </span>
          </div>

          <h3
            className="
            mt-6

            text-[34px]

            text-[#1b1b1b]
            "
            style={{
              fontFamily:
                "var(--font-cormorant)",
            }}
          >
            9876543210
          </h3>

          <p className="mt-2 text-gray-500">
            Saifi Hidayatullah
          </p>

          <button
            onClick={() =>
              copyText(
                "9876543210",
                "mandiri"
              )
            }
            className="
            mt-6

            w-full

            py-4

            rounded-full

            border
            border-[#b08d57]

            text-[#b08d57]

            flex
            items-center
            justify-center
            gap-2

            transition-all

            hover:bg-[#b08d57]
            hover:text-white
            "
          >
            {copied === "mandiri" ? (
              <>
                <Check size={18} />
                Copied
              </>
            ) : (
              <>
                <Copy size={18} />
                Copy Account Number
              </>
            )}
          </button>
        </motion.div>

        {/* ADDRESS */}

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
            delay: 0.2,
          }}
          className="
          mt-10

          bg-white/90

          backdrop-blur-xl

          rounded-[36px]

          border
          border-[#d4af37]/10

          shadow-[0_25px_80px_rgba(0,0,0,0.08)]

          p-8
          "
        >
          <div className="flex items-center gap-3">
            <MapPin
              size={22}
              className="text-[#b08d57]"
            />

            <span
              className="
              uppercase

              tracking-[3px]

              text-[#b08d57]

              text-xs
              "
            >
              Gift Address
            </span>
          </div>

          <p
            className="
            mt-6

            text-gray-600

            leading-8

            text-sm
            "
          >
            Jl. Contoh No. 123
            <br />
            Surabaya, Jawa Timur
            <br />
            Indonesia 60111
          </p>

          <button
            onClick={() =>
              copyText(
                "Jl. Contoh No.123 Surabaya",
                "address"
              )
            }
            className="
            mt-6

            w-full

            py-4

            rounded-full

            border
            border-[#b08d57]

            text-[#b08d57]

            flex
            items-center
            justify-center
            gap-2
            "
          >
            {copied === "address" ? (
              <>
                <Check size={18} />
                Copied
              </>
            ) : (
              <>
                <Copy size={18} />
                Copy Address
              </>
            )}
          </button>
        </motion.div>
      </div>
    </section>
  );
}