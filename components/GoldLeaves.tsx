"use client";

import { motion } from "framer-motion";

export default function GoldLeaves() {
  return (
    <>
      {[...Array(20)].map((_, i) => (
        <motion.div
          key={i}
          initial={{
            y: -200,
            x: Math.random() * 2000,
            rotate: 0,
            opacity: 0,
          }}
          animate={{
            y: "120vh",
            rotate: 360,
            opacity: [0, 1, 1, 0],
          }}
          transition={{
            duration: 15 + Math.random() * 10,
            repeat: Infinity,
            delay: Math.random() * 10,
            ease: "linear",
          }}
          className="absolute top-0 z-10 pointer-events-none"
        >
          <svg
            width="28"
            height="28"
            viewBox="0 0 24 24"
            fill="#D4AF37"
          >
            <path d="M12 2C7 5 4 10 4 14c0 4 3 8 8 8s8-4 8-8c0-4-3-9-8-12z" />
          </svg>
        </motion.div>
      ))}
    </>
  );
}