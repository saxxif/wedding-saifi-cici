"use client";

import { motion } from "framer-motion";
import { useMemo, useState, useEffect } from "react";
// Pastikan komponen GoldLeaves sudah ada di folder components
import GoldLeaves from "@/components/GoldLeaves"; 

const events = [
  {
    type: "Wedding Ceremony",
    title: "Akad Nikah",
    image: "/images/akad.jpg",
    time: "07.00 WIB - Selesai",
    place: "Masjid Agung Bangkalan",
    address: "Jl. KH. Moh. Kholil, Bangkalan, Madura",
    mapLink: "https://maps.app.goo.gl/bmVAXHddyEqWpqhE6", // Ganti dengan link maps aslimu
  },
  {
    type: "Wedding Reception",
    title: "Resepsi",
    image: "/images/resepsi.jpg",
    time: "09.00 - 12.00 WIB",
    place: "Gedung Rato Ebu",
    address: "Jl. Jend. A. Yani, Bangkalan, Madura",
    mapLink: "https://maps.app.goo.gl/TUZzpRyyXkAUYRXL7", // Ganti dengan link maps aslimu
  },
];

// Tekstur Kertas (Pure CSS - Light Theme)
const paperTexture = `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`;

export default function EventDetail() {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const particles = useMemo(() => {
    return Array.from({ length: 20 }).map((_, i) => ({
      id: i,
      size: 2 + (i % 3),
      left: (i * 37) % 100,
      duration: 15 + (i % 12),
      delay: i * 0.4,
      drift: (i % 2 === 0 ? 1 : -1) * (15 + (i % 20)),
    }));
  }, []);

  return (
    <section
      id="event"
      className="relative overflow-hidden bg-[#fcfaf7] py-24 w-full max-w-md mx-auto box-border"
    >
      <GoldLeaves />

      {/* ================= 1. BACKGROUND ATMOSPHERE ================= */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <div 
          className="absolute inset-0 opacity-[0.03] mix-blend-multiply"
          style={{ backgroundImage: paperTexture }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#f8f4ed] via-[#fcfaf7] to-[#f8f4ed]" />
        <motion.div
          animate={{ scale: [1, 1.15, 1], opacity: [0.1, 0.2, 0.1] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          className="absolute left-1/2 top-[20%] -translate-x-1/2 w-[500px] h-[500px] rounded-full bg-[#d4af37]/20 blur-[100px]"
        />
      </div>

      {/* ================= 2. PARTICLE ENGINE ================= */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-10">
        {isMounted && particles.map((p) => (
          <motion.div
            key={p.id}
            animate={{
              y: [0, -1000],
              x: [0, p.drift, -p.drift * 0.5],
              opacity: [0, 0.7, 0.7, 0],
            }}
            transition={{ duration: p.duration, repeat: Infinity, ease: "linear", delay: p.delay }}
            className="absolute rounded-full bg-[#d4af37] shadow-[0_0_10px_rgba(212,175,55,0.4)]"
            style={{ left: `${p.left}%`, width: `${p.size}px`, height: `${p.size}px`, bottom: "-20px" }}
          />
        ))}
      </div>

      {/* ================= 3. MAIN CONTENT ================= */}
      <div className="relative z-20 px-6">
        
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="text-center flex flex-col items-center"
        >
          <div className="flex items-center gap-3 mb-6 opacity-80">
            <div className="h-[1px] w-10 bg-gradient-to-r from-transparent to-[#c89b56]" />
            <div className="text-[#c89b56] text-[10px]">✦</div>
            <div className="h-[1px] w-10 bg-gradient-to-l from-transparent to-[#c89b56]" />
          </div>

          <p className="uppercase tracking-[0.45em] text-[#b08d57] text-[9px] font-medium pl-[0.45em]">
            Save The Date
          </p>

          <h2
            className="mt-4 text-[56px] leading-none text-[#2a2622]"
            style={{ fontFamily: "var(--font-cormorant), serif" }}
          >
            The Celebration
          </h2>
          
          <div className="w-12 h-[1px] bg-[#d4af37]/40 mx-auto mt-6 mb-8" />

          <p className="text-[#685f54] leading-[1.8] text-[14px] font-light max-w-[280px] italic">
            "Maha suci Allah yang telah menciptakan makhluk-Nya berpasang-pasangan. Ya Allah, perkenankanlah kami merangkai kasih sayang yang Kau ciptakan di antara kami."
          </p>
        </motion.div>

        {/* ================= 4. EVENT CARDS ================= */}
        <div className="space-y-10 mt-16">
          {events.map((event, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="group overflow-hidden rounded-[28px] bg-white/60 backdrop-blur-xl border border-[#d4af37]/15 shadow-[0_15px_40px_rgba(0,0,0,0.05)]"
            >
              <div className="relative h-[240px] overflow-hidden">
                <img src={event.image} alt={event.title} className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1a1816]/90 to-transparent" />
                <div className="absolute bottom-5 left-6 px-6 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-[#fdfbf7] uppercase tracking-[3px] text-[9.5px] font-medium">
                  {event.type}
                </div>
              </div>

              <div className="px-6 py-8 text-center">
                <h3 className="text-[42px] text-[#2a2622]" style={{ fontFamily: "var(--font-cormorant), serif" }}>
                  {event.title}
                </h3>
                <div className="w-12 h-[1px] bg-[#d4af37]/50 mx-auto my-6" />
                <div className="space-y-3 text-[#5c544a] text-[13px] font-light">
                  <p>{event.time}</p>
                  <p className="font-medium text-[#2a2622]">{event.place}</p>
                  <p className="opacity-80 text-[12px]">{event.address}</p>
                </div>

                {/* INTERACTIVE BUTTON */}
                <div className="mt-8">
                  <motion.a
                    href={event.mapLink}
                    target="_blank"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-[#2a2622] text-white text-[10px] uppercase tracking-[2px] font-semibold shadow-[0_10px_20px_rgba(0,0,0,0.1)] hover:bg-[#d4af37] transition-all"
                  >
                    <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    View Location
                  </motion.a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* ================= 5. FINAL CTA ================= */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1.5 }}
          className="text-center mt-20 mb-12"
        >
          <p className="text-[14px] italic text-[#5c544a] mb-8" style={{ fontFamily: "var(--font-cormorant), serif" }}>
            We look forward to sharing this joy with you.
          </p>
        </motion.div>
      </div>
    </section>
  );
}