"use client";

import { useState, useEffect, useRef } from "react";
import { db } from "@/lib/firebase";
import { collection, addDoc, onSnapshot, query, orderBy, deleteDoc, doc, updateDoc } from "firebase/firestore";

interface GalleryPhoto {
  id: string;
  url: string;
  createdAt: number;
}

export default function AdminGallery() {
  const [photos, setPhotos] = useState<GalleryPhoto[]>([]);
  const [password, setPassword] = useState("");
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [uploading, setUploading] = useState(false);

  // State Cropping Gambar
  const [selectedImageSrc, setSelectedImageSrc] = useState<string | null>(null);
  const [cropTargetId, setCropTargetId] = useState<string | null>(null);
  
  // Mengunci area awal (Lebar 60% dan Tinggi 45% -> Rasio Pasti Landscape 4:3 murni)
  const [cropArea, setCropArea] = useState({ x: 10, y: 10, width: 60, height: 45 });
  const imageRef = useRef<HTMLImageElement>(null);

  // Ambil data real-time dari Firebase
  useEffect(() => {
    if (!isAuthenticated) return;
    const q = query(collection(db, "gallery"), orderBy("createdAt", "asc"));
    const unsubscribe = onSnapshot(q, (snapshot) => {
      const loadedPhotos = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      })) as GalleryPhoto[];
      setPhotos(loadedPhotos);
    });
    return () => unsubscribe();
  }, [isAuthenticated]);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (password === "saificici2026") {
      setIsAuthenticated(true);
    } else {
      alert("Sandi salah, Bro!");
    }
  };

  const onFileChange = (e: React.ChangeEvent<HTMLInputElement>, targetPhotoId: string | null = null) => {
    const file = e.target.files?.[0];
    if (!file) return;

    if (!targetPhotoId && photos.length >= 24) {
      alert("⚠️ Slot penuh! Batas maksimal adalah 24 foto.");
      return;
    }

    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
      setSelectedImageSrc(reader.result as string);
      setCropTargetId(targetPhotoId);
      // Reset ukuran kotak potong awal agar presisi Landscape 4:3
      setCropArea({ x: 15, y: 15, width: 60, height: 45 });
    };
  };

  const executeCropAndUpload = () => {
    if (!selectedImageSrc || !imageRef.current) return;
    setUploading(true);

    const img = imageRef.current;
    const canvas = document.createElement("canvas");
    const ctx = canvas.getContext("2d");

    const naturalWidth = img.naturalWidth;
    const naturalHeight = img.naturalHeight;

    // Hitung koordinat nyata potongan gambar
    const cropX = (cropArea.x / 100) * naturalWidth;
    const cropY = (cropArea.y / 100) * naturalHeight;
    const cropW = (cropArea.width / 100) * naturalWidth;
    const cropH = (cropArea.height / 100) * naturalHeight;

    // Kunci target output Canvas murni sejajar Landscape 4:3
    canvas.width = cropW;
    canvas.height = cropH;

    // Render potongan asli tanpa ditarik paksa
    ctx?.drawImage(img, cropX, cropY, cropW, cropH, 0, 0, cropW, cropH);
    
    const finalBase64 = canvas.toDataURL("image/jpeg", 0.85);

    setTimeout(async () => {
      try {
        if (cropTargetId) {
          await updateDoc(doc(db, "gallery", cropTargetId), { url: finalBase64 });
          alert("Foto berhasil diperbarui!");
        } else {
          await addDoc(collection(db, "gallery"), { url: finalBase64, createdAt: Date.now() });
          alert("Foto berhasil ditambahkan!");
        }
      } catch (err) {
        console.error(err);
        alert("Gagal menyimpan ke Firebase.");
      } finally {
        setUploading(false);
        setSelectedImageSrc(null);
        setCropTargetId(null);
      }
    }, 100);
  };

  const handleDelete = async (id: string) => {
    if (confirm("Hapus foto ini dari slot?")) {
      try {
        await deleteDoc(doc(db, "gallery", id));
        alert("Foto berhasil dihapus.");
      } catch (error) {
        alert("Gagal menghapus.");
      }
    }
  };

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-[#0a0a0a] flex items-center justify-center px-4">
        <form onSubmit={handleLogin} className="bg-white/[0.02] border border-white/[0.08] p-8 rounded-3xl w-full max-w-sm text-center">
          <h1 className="text-white text-xl font-medium mb-6">Gallery Admin Panel</h1>
          <input
            type="password"
            placeholder="Masukkan Password"
            className="w-full bg-white/[0.05] border border-white/[0.1] text-white rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#d4b483] mb-4 text-center"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button type="submit" className="w-full bg-[#d4b483] text-[#0a0a0a] font-semibold py-3 rounded-xl text-sm">
            Masuk
          </button>
        </form>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white p-3 md:p-12 pb-32">
      <div className="max-w-5xl mx-auto">
        
        {/* HEADER */}
        <div className="border-b border-white/[0.08] pb-4 mb-6 flex flex-col items-center text-center gap-3">
          <div>
            <h1 className="text-2xl font-light text-[#d4b483]" style={{ fontFamily: "var(--font-cormorant)" }}>
              Studio Management Galeri (Landscape)
            </h1>
            <p className="text-[11px] text-white/40 mt-0.5">
              Slot Terisi: <span className="text-[#d4b483] font-bold">{photos.length}</span> / 24
            </p>
          </div>
          
          {photos.length < 24 && (
            <label className="cursor-pointer bg-[#d4b483] text-[#0a0a0a] text-[11px] font-bold px-5 py-2.5 rounded-xl shadow-lg">
              ➕ ISI SLOT BARU
              <input type="file" accept="image/*" className="hidden" onChange={(e) => onFileChange(e, null)} />
            </label>
          )}
        </div>

        {/* GRID SLOT PANEL - LANDSCAPE 4:3 */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3">
          {Array.from({ length: 24 }).map((_, index) => {
            const photo = photos[index];

            return (
              <div key={index} className="relative w-full overflow-hidden rounded-xl border bg-white/[0.02] border-white/[0.08] flex flex-col" style={{ aspectRatio: "4/3" }}>
                <span className="absolute top-1 left-1 bg-black/70 text-[9px] text-white/80 font-sans px-1.5 py-0.5 rounded z-10 border border-white/15">
                  {index + 1}
                </span>

                <div className="absolute inset-0 w-full h-full z-0">
                  {photo ? (
                    <img src={photo.url} alt={`Slot ${index + 1}`} className="w-full h-full object-cover block" />
                  ) : (
                    <label className="w-full h-full flex flex-col justify-center items-center cursor-pointer bg-white/[0.01] hover:bg-white/[0.04] transition-colors p-1 text-center">
                      <span className="text-sm opacity-20 mb-0.5">📷</span>
                      <span className="text-[9px] text-white/20 font-light tracking-tight">Isi Slot</span>
                      <input type="file" accept="image/*" className="hidden" onChange={(e) => onFileChange(e, null)} />
                    </label>
                  )}
                </div>

                {photo && (
                  <div className="absolute inset-x-0 bottom-0 bg-black/80 p-1 flex justify-between items-center gap-1 z-10 border-t border-white/5">
                    <label className="flex-1 text-center cursor-pointer bg-[#d4b483] text-black text-[8px] font-bold py-1 rounded-md">
                      🔄 Edit
                      <input type="file" accept="image/*" className="hidden" onChange={(e) => onFileChange(e, photo.id)} />
                    </label>
                    <button onClick={() => handleDelete(photo.id)} className="bg-red-600 hover:bg-red-700 text-white p-1 text-[8px] font-bold rounded-md">🗑️</button>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* MODAL CROPPER LANDSCAPE ANTI DISTORSI */}
        {selectedImageSrc && (
          <div className="fixed inset-0 bg-black/95 z-50 flex flex-col items-center justify-center p-4">
            <div className="bg-[#141414] border border-white/10 w-full max-w-sm p-4 rounded-3xl flex flex-col shadow-2xl">
              
              <div className="text-center mb-3">
                <h3 className="text-sm font-medium text-[#d4b483]">Atur Area Potongan Foto (Landscape 4:3)</h3>
                <p className="text-[10px] text-white/30 mt-0.5">Kotak terkunci aman dalam rasio landscape melebar</p>
              </div>

              <div className="relative bg-black rounded-xl overflow-hidden flex items-center justify-center border border-white/5 max-h-[240px] p-2">
                <img ref={imageRef} src={selectedImageSrc} alt="Crop" className="max-w-full max-h-[220px] object-contain opacity-40" />
                <div 
                  className="absolute border-2 border-dashed border-[#d4b483] bg-[#d4b483]/10 shadow-[0_0_0_9999px_rgba(0,0,0,0.7)] pointer-events-none rounded-sm"
                  style={{ left: `${cropArea.x}%`, top: `${cropArea.y}%`, width: `${cropArea.width}%`, height: `${cropArea.height}%` }}
                />
              </div>

              {/* CONTROLLER LOCKED RATIO SLIDERS (LANDSCAPE 4:3) */}
              <div className="mt-3 space-y-2 bg-white/[0.02] p-3 rounded-xl border border-white/5 text-[11px]">
                <div>
                  <div className="text-white/40 mb-0.5">Geser Posisi Kiri/Kanan (X)</div>
                  <input type="range" min="0" max={100 - cropArea.width} value={cropArea.x} onChange={(e) => setCropArea(prev => ({ ...prev, x: parseInt(e.target.value) }))} className="w-full accent-[#d4b483]" />
                </div>
                <div>
                  <div className="text-white/40 mb-0.5">Geser Posisi Atas/Bawah (Y)</div>
                  <input type="range" min="0" max={100 - cropArea.height} value={cropArea.y} onChange={(e) => setCropArea(prev => ({ ...prev, y: parseInt(e.target.value) }))} className="w-full accent-[#d4b483]" />
                </div>
                <div>
                  <div className="text-white/40 mb-0.5">Ukuran Kotak (Skala Tetap 4:3)</div>
                  <input type="range" min="30" max="80" value={cropArea.width} onChange={(e) => {
                    const nextWidth = parseInt(e.target.value);
                    // Tinggi dikunci otomatis mengikuti kelipatan rasio LANDSCAPE 4:3 (Lebar dikali 0.75)
                    const nextHeight = Math.round(nextWidth * 0.75); 
                    
                    if (nextHeight <= 90) {
                      setCropArea(prev => ({
                        ...prev,
                        width: nextWidth,
                        height: nextHeight,
                        x: Math.min(prev.x, 100 - nextWidth),
                        y: Math.min(prev.y, 100 - nextHeight)
                      }));
                    }
                  }} className="w-full accent-[#d4b483]" />
                </div>
              </div>

              <div className="flex gap-2 mt-4">
                <button onClick={() => { setSelectedImageSrc(null); setCropTargetId(null); }} className="flex-1 bg-white/5 text-white text-xs py-2 rounded-xl">Batal</button>
                <button onClick={executeCropAndUpload} disabled={uploading} className="flex-1 bg-[#d4b483] text-black text-xs font-bold py-2 rounded-xl">{uploading ? "Proses..." : "✂️ Simpan Landscape"}</button>
              </div>

            </div>
          </div>
        )}

      </div>
    </div>
  );
}