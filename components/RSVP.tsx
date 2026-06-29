"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { db } from "@/lib/firebase";
import { collection, addDoc, query, orderBy, onSnapshot } from "firebase/firestore";

interface GuestComment {
  id?: string;
  name: string;
  attendance: string;
  message: string;
  timestamp: number;
}

export default function RSVP() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [comments, setComments] = useState<GuestComment[]>([]);

  const { register, handleSubmit, reset } = useForm();

  // Real-time listener ke Firebase Firestore
  useEffect(() => {
    const q = query(collection(db, "wishes"), orderBy("timestamp", "desc"));
    
    const unsubscribe = onSnapshot(q, (snapshot) => {
      const loadedComments: GuestComment[] = [];
      snapshot.forEach((doc) => {
        loadedComments.push({ id: doc.id, ...doc.data() } as GuestComment);
      });
      setComments(loadedComments);
    });

    return () => unsubscribe();
  }, []);

  const onSubmit = async (data: any) => {
    setIsSubmitting(true);
    setIsSuccess(false);

    try {
      await addDoc(collection(db, "wishes"), {
        name: data.name,
        attendance: data.attendance,
        message: data.message,
        timestamp: Date.now(),
      });

      setIsSuccess(true);
      
      setTimeout(() => {
        setIsSuccess(false);
        reset();
      }, 3000);
    } catch (error) {
      console.error("Error saving to Firebase:", error);
      alert("Gagal mengirim ucapan, pastikan config lib/firebase.ts sudah benar.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="rsvp" className="relative w-full max-w-md mx-auto py-24 px-6 bg-[#fcfaf7] overflow-hidden">
      {/* Efek Pendaran Latar Belakang */}
      <div className="absolute top-0 right-0 w-[280px] h-[280px] bg-[#d4af37]/4 blur-[90px] rounded-full pointer-events-none" />
      <div className="absolute bottom-10 left-[-50px] w-[200px] h-[200px] bg-[#b08d57]/3 blur-[80px] rounded-full pointer-events-none" />
      
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="relative z-10"
      >
        {/* ========================================== */}
        {/* LAYER 1: HEADER TITLE RSVP                */}
        {/* ========================================== */}
        <h2 className="text-[46px] text-[#2a2622] text-center tracking-wide" style={{ fontFamily: "var(--font-cormorant), serif" }}>
          RSVP
        </h2>
        <div className="w-12 h-[1px] bg-[#b08d57]/40 mx-auto mt-1 mb-2" />
        <p className="text-[10px] uppercase tracking-[0.35em] text-[#b08d57] text-center mb-12 pl-[0.35em]">
          Konfirmasi Kehadiran
        </p>

        {/* ========================================== */}
        {/* LAYER 2: FORM INPUT                       */}
        {/* ========================================== */}
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <input 
            {...register("name", { required: true })}
            placeholder="Nama Lengkap Anda"
            className="w-full bg-white/60 backdrop-blur-md border border-[#d4af37]/15 rounded-2xl p-4 text-[13px] outline-none focus:border-[#b08d57] text-[#2a2622] transition-all placeholder:text-neutral-400"
          />

          <select 
            {...register("attendance", { required: true })}
            className="w-full bg-white/60 backdrop-blur-md border border-[#d4af37]/15 rounded-2xl p-4 text-[13px] outline-none focus:border-[#b08d57] text-[#2a2622] transition-all"
          >
            <option value="yes">Hadir dengan Bahagia</option>
            <option value="no">Berhalangan Hadir</option>
          </select>

          <textarea 
            {...register("message", { required: true })}
            placeholder="Tuliskan doa restu, pesan & kesan Anda di sini..."
            rows={4}
            className="w-full bg-white/60 backdrop-blur-md border border-[#d4af37]/15 rounded-2xl p-4 text-[13px] outline-none focus:border-[#b08d57] text-[#2a2622] resize-none transition-all placeholder:text-neutral-400"
          />

          <motion.button
            whileHover={{ scale: 1.01 }}
            whileTap={{ scale: 0.99 }}
            disabled={isSubmitting || isSuccess}
            className={`w-full py-4 rounded-full text-[10px] uppercase tracking-[0.3em] font-medium shadow-lg transition-colors duration-500 pl-[0.3em] ${
              isSuccess ? "bg-[#b08d57] text-white" : "bg-[#2a2622] text-white"
            }`}
          >
            {isSubmitting ? (
              "Mengirim..."
            ) : isSuccess ? (
              <span className="flex items-center justify-center gap-2 font-semibold tracking-widest text-[12px] normal-case">
                ✓ Ucapan Berhasil Dikirim
              </span>
            ) : (
              "Kirim Konfirmasi"
            )}
          </motion.button>
        </form>

        {/* ========================================== */}
        {/* LAYER 3: AREA LIVE GUEST WISHES BOX       */}
        {/* ========================================== */}
        <div className="mt-20 pt-8 border-t border-[#d4af37]/15">
          <div className="flex items-center justify-between mb-6 px-1">
            <div>
              <h3 className="text-[20px] font-medium text-[#2a2622]" style={{ fontFamily: "var(--font-cormorant), serif" }}>
                Wedding Wishes
              </h3>
              <p className="text-[9px] text-[#b08d57] uppercase tracking-widest mt-0.5 font-medium">
                Doa Restu Para Tamu
              </p>
            </div>
            
            {/* Counter Badge Bulat */}
            <div className="bg-[#2a2622] text-[#d4af37] text-[11px] font-mono px-3 py-1 rounded-full shadow-inner">
              {comments.length}
            </div>
          </div>

          {/* Kotak Kontainer Scroll Keren */}
          <div className="space-y-4 max-h-[420px] overflow-y-auto pr-1 scrollbar-thin scrollbar-thumb-neutral-200">
            <AnimatePresence initial={false}>
              {comments.map((item) => (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, scale: 0.95, y: 15 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.4 }}
                  className="bg-white/50 backdrop-blur-sm border border-[#d4af37]/10 p-5 rounded-2xl shadow-[0_4px_20px_rgba(0,0,0,0.01)] relative flex flex-col gap-3 group"
                >
                  {/* Tanda Kutip Estetik Latar Belakang */}
                  <span className="absolute right-4 top-2 text-[45px] font-serif text-[#d4af37]/10 leading-none pointer-events-none select-none">
                    ”
                  </span>

                  {/* 1. ISI PESAN (Di Atas) */}
                  <p className="text-[12.5px] text-[#5c5042] leading-relaxed italic pr-4 font-light whitespace-pre-line">
                    "{item.message}"
                  </p>
                  
                  {/* Garis Aksen Pembatas Horizontal Tipis */}
                  <div className="w-8 h-[0.5px] bg-[#d4af37]/30 mt-1" />

                  {/* 2. IDENTITAS NAMA TAMU (Di Bawah Pesan) */}
                  <div className="flex items-center justify-between mt-0.5">
                    <div className="flex flex-col">
                      <h4 
                        className="text-[15px] font-semibold text-[#2a2622] tracking-wide max-w-[200px] truncate"
                        style={{ fontFamily: "var(--font-cormorant), serif" }}
                      >
                        {item.name}
                      </h4>
                      <span className="text-[8.5px] text-[#b08d57]/60 font-light mt-0.5">
                        {new Date(item.timestamp).toLocaleDateString("id-ID", {
                          day: "numeric",
                          month: "short",
                          hour: "2-digit",
                          minute: "2-digit",
                        })}
                      </span>
                    </div>

                    {/* Badge Status Kehadiran Minimalis */}
                    <span className={`text-[8px] px-2.5 py-0.5 rounded-full font-semibold tracking-wider uppercase border ${
                      item.attendance === "yes" 
                        ? "bg-[#e2f0d9]/60 text-[#385723] border-[#385723]/10" 
                        : "bg-[#fce4d6]/60 text-[#c65911] border-[#c65911]/10"
                    }`}>
                      {item.attendance === "yes" ? "✓ Hadir" : "✕ Absen"}
                    </span>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </div>

      </motion.div>
    </section>
  );
}