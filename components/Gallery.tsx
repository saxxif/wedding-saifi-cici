"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useMemo, useState } from "react";
import { db } from "@/lib/firebase";
import { collection, onSnapshot, query, orderBy } from "firebase/firestore";

interface GalleryPhoto {
  id: string;
  url: string;
  createdAt: number;
}

export default function Gallery() {
  const [photos, setPhotos] = useState<GalleryPhoto[]>([]);
  const [page, setPage] = useState(0);

  useEffect(() => {
    const q = query(collection(db, "gallery"), orderBy("createdAt", "asc"));
    const unsubscribe = onSnapshot(q, (snapshot) => {
      const loadedPhotos = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      })) as GalleryPhoto[];
      setPhotos(loadedPhotos);
    });
    return () => unsubscribe();
  }, []);

  const particles = useMemo(
    () =>
      Array.from({ length: 10 }, (_, i) => ({
        id: i,
        left: `${(i * 11) % 100}%`,
        top: `${(i * 23) % 100}%`,
      })),
    []
  );

  // KUNCI: Sekarang membagi halaman menjadi 6 foto per slide (format 2x3)
  const totalPages = Math.ceil(photos.length / 6) || 1;

  useEffect(() => {
    if (totalPages <= 1) return;
    const interval = setInterval(() => {
      setPage((prev) => (prev + 1) % totalPages);
    }, 5000); // 5 detik per slide agar tamu puas melihat gambar
    return () => clearInterval(interval);
  }, [totalPages]);

  // Ambil 6 foto aktif berdasarkan index halaman
  const visiblePhotos = photos.slice(page * 6, page * 6 + 6);

  return (
    <section id="gallery" className="relative overflow-hidden bg-[#f8f5ef] py-24 w-full flex flex-col items-center">
      {/* BACKGROUND PREMIUM EFFECTS */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(212,175,55,0.06),transparent_60%)]" />
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[80vw] h-[80vw] max-w-[600px] rounded-full bg-[#d4af37]/5 blur-[100px]" />
        <div className="absolute inset-0 flex items-center justify-center text-[180px] md:text-[320px] text-[#d4af37]/[0.02] pointer-events-none leading-none select-none" style={{ fontFamily: "var(--font-cormorant)" }}>
          SN
        </div>
      </div>

      {/* PARTICLES */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-[2]">
        {particles.map((item) => (
          <motion.div
            key={item.id}
            animate={{ y: [0, -40, 0], opacity: [0.1, 0.4, 0.1] }}
            transition={{ duration: 7 + (item.id % 3), repeat: Infinity, delay: item.id * 0.4 }}
            className="absolute rounded-full bg-[#d4af37]"
            style={{ width: `${2 + (item.id % 2)}px`, height: `${2 + (item.id % 2)}px`, left: item.left, top: item.top }}
          />
        ))}
      </div>

      <div className="relative z-10 max-w-[440px] w-full mx-auto px-5 flex flex-col items-center">
        {/* HEADER */}
        <motion.div initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center w-full flex flex-col items-center">
          <p className="uppercase tracking-[8px] text-[#b08d57] text-[10px] font-medium">PRECIOUS MOMENTS</p>
          <h2 className="mt-4 text-[52px] leading-none text-[#1b1b1b]" style={{ fontFamily: "var(--font-cormorant)" }}>Our Gallery</h2>
          <div className="w-20 h-px mx-auto mt-6 bg-gradient-to-r from-transparent via-[#d4af37] to-transparent" />
          <p className="mt-6 text-gray-500 text-[14px] leading-7 max-w-[320px] font-light">
            Setiap foto menyimpan cerita, tawa, perjalanan, dan kenangan indah kami.
          </p>
        </motion.div>

        {/* PHOTOS GRID SLIDE FORMAT (Mewah 2x3 Kolom) */}
        <div className="mt-10 relative min-h-[460px] w-full flex items-center justify-center">
          {photos.length === 0 ? (
            <div className="text-center text-gray-400 text-xs py-16">Belum ada foto aktif.</div>
          ) : (
            <AnimatePresence mode="wait">
              <motion.div 
                key={page} 
                initial={{ opacity: 0, scale: 0.96 }} 
                animate={{ opacity: 1, scale: 1 }} 
                exit={{ opacity: 0, scale: 0.96 }} 
                transition={{ duration: 0.6, ease: "easeInOut" }} 
                className="grid grid-cols-2 gap-3.5 w-full justify-center"
              >
                {visiblePhotos.map((photo) => (
                  <div 
                    key={photo.id} 
                    className="overflow-hidden rounded-[22px] border border-[#d4af37]/15 shadow-[0_10px_35px_rgba(0,0,0,0.04)] w-full relative bg-white/40 backdrop-blur-sm"
                    style={{ aspectRatio: "4/3" }}
                  >
                    <img 
                      src={photo.url} 
                      alt="Gallery Wedding" 
                      style={{
                        position: "absolute",
                        top: 0,
                        left: 0,
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                        display: "block"
                      }}
                      className="transition-transform duration-700 hover:scale-105" 
                    />
                  </div>
                ))}
              </motion.div>
            </AnimatePresence>
          )}
        </div>

        {/* PAGINATION DOTS */}
        {totalPages > 1 && (
          <div className="flex justify-center gap-2.5 mt-8">
            {Array.from({ length: totalPages }).map((_, index) => (
              <button 
                key={index} 
                onClick={() => setPage(index)} 
                className={`h-1.5 rounded-full transition-all duration-300 ${page === index ? "w-6 bg-[#d4af37]" : "w-1.5 bg-[#d4af37]/30"}`} 
              />
            ))}
          </div>
        )}

        {/* FOOTER TEXT */}
        <div className="text-center mt-12 w-full">
          <div className="w-16 h-px mx-auto bg-gradient-to-r from-transparent via-[#d4af37] to-transparent" />
          <p className="mt-6 text-[30px] leading-tight text-[#1b1b1b] font-light tracking-wide" style={{ fontFamily: "var(--font-cormorant)" }}>
            Capturing Moments,<br />Creating Memories.
          </p>
        </div>
      </div>
    </section>
  );
}