"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { useForm } from "react-hook-form";

export default function RSVP() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [file, setFile] = useState<File | null>(null);

  const { register, handleSubmit, reset } = useForm();

  const onSubmit = async (data: any) => {
    setIsSubmitting(true);
    console.log("Data RSVP:", data);
    console.log("File yang diupload:", file);
    
    setTimeout(() => {
      setIsSubmitting(false);
      alert("Terima kasih! Konfirmasi kehadiran Anda telah diterima.");
      reset();
      setFile(null);
    }, 2000);
  };

  return (
    <section id="rsvp" className="relative w-full max-w-md mx-auto py-24 px-6 bg-[#fcfaf7] overflow-hidden">
      {/* Background Ornaments */}
      <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-[#d4af37]/5 blur-[100px] rounded-full" />
      
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="relative z-10"
      >
        <h2 className="text-[48px] text-[#2a2622] text-center" style={{ fontFamily: "var(--font-cormorant), serif" }}>
          RSVP
        </h2>
        <p className="text-[12px] uppercase tracking-[3px] text-[#b08d57] text-center mt-2 mb-10">
          Konfirmasi Kehadiran
        </p>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          <input 
            {...register("name", { required: true })}
            placeholder="Nama Lengkap Anda"
            className="w-full bg-white/50 backdrop-blur-md border border-[#d4af37]/20 rounded-2xl p-4 text-[13px] outline-none focus:border-[#d4af37]"
          />

          <select 
            {...register("attendance", { required: true })}
            className="w-full bg-white/50 backdrop-blur-md border border-[#d4af37]/20 rounded-2xl p-4 text-[13px] outline-none"
          >
            <option value="yes">Hadir dengan Bahagia</option>
            <option value="no">Berhalangan Hadir</option>
          </select>

          <div className="border-2 border-dashed border-[#d4af37]/20 rounded-2xl p-6 text-center">
            <label className="cursor-pointer block">
              <span className="text-[11px] uppercase tracking-[2px] text-[#b08d57]">
                {file ? file.name : "Upload Bukti / Foto Ucapan"}
              </span>
              <input 
                type="file" 
                className="hidden" 
                onChange={(e) => setFile(e.target.files ? e.target.files[0] : null)} 
              />
            </label>
          </div>

          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            disabled={isSubmitting}
            className="w-full py-4 rounded-full bg-[#2a2622] text-white text-[11px] uppercase tracking-[4px] font-medium shadow-xl"
          >
            {isSubmitting ? "Mengirim..." : "Kirim Konfirmasi"}
          </motion.button>
        </form>
      </motion.div>
    </section>
  );
}