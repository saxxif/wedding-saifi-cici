"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import Cropper from "react-easy-crop";
import confetti from "canvas-confetti";
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

  // State react-easy-crop
  const [imageSrc, setImageSrc] = useState<string | null>(null);
  const [crop, setCrop] = useState({ x: 0, y: 0 });
  const [zoom, setZoom] = useState(1);
  const [croppedAreaPixels, setCroppedAreaPixels] = useState<any>(null);

  const cropTargetIdRef = useRef<string | null>(null);

  useEffect(() => {
    if (!isAuthenticated) return;
    const q = query(collection(db, "gallery"), orderBy("createdAt", "asc"));
    const unsubscribe = onSnapshot(q, (snapshot) => {
      setPhotos(snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() })) as GalleryPhoto[]);
    });
    return () => unsubscribe();
  }, [isAuthenticated]);

  const onFileChange = (e: React.ChangeEvent<HTMLInputElement>, targetPhotoId: string | null = null) => {
    const file = e.target.files?.[0];
    if (!file) return;

    if (!targetPhotoId && photos.length >= 24) {
      alert("⚠️ Slot penuh! Batas maksimal adalah 24 foto.");
      return;
    }

    cropTargetIdRef.current = targetPhotoId;
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
      setImageSrc(reader.result as string);
      setZoom(1);
      setCrop({ x: 0, y: 0 });
    };
  };

  const onCropComplete = useCallback((croppedArea: any, croppedAreaPixels: any) => {
    setCroppedAreaPixels(croppedAreaPixels);
  }, []);

  // Fungsi pemotong gambar super smooth menggunakan koordinat matrix pixel asli
  const createCroppedImage = async () => {
    if (!imageSrc || !croppedAreaPixels) return;
    setUploading(true);

    try {
      const image = new Image();
      image.src = imageSrc;
      await new Promise((resolve) => (image.onload = resolve));

      const canvas = document.createElement("canvas");
      const ctx = canvas.getContext("2d");

      // Ukuran output HD Landscape berkelas (800x600)
      canvas.width = 800;
      canvas.height = 600;

      if (ctx) {
        ctx.imageSmoothingEnabled = true;
        ctx.imageSmoothingQuality = "high";
        ctx.drawImage(
          image,
          croppedAreaPixels.x,
          croppedAreaPixels.y,
          croppedAreaPixels.width,
          croppedAreaPixels.height,
          0,
          0,
          800,
          600
        );
      }

      const finalBase64 = canvas.toDataURL("image/jpeg", 0.9);
      const currentTargetId = cropTargetIdRef.current;

      if (currentTargetId) {
        await updateDoc(doc(db, "gallery", currentTargetId), { url: finalBase64 });
      } else {
        await addDoc(collection(db, "gallery"), { url: finalBase64, createdAt: Date.now() });
      }

      // Efek selebrasi sukses premium
      confetti({ particleCount: 80, spread: 60, origin: { y: 0.8 } });
      setImageSrc(null);
    } catch (err) {
      console.error(err);
      alert("Gagal memproses gambar.");
    } finally {
      setUploading(false);
      cropTargetIdRef.current = null;
    }
  };

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-[#070707] flex items-center justify-center px-4">
        <form onSubmit={(e) => { e.preventDefault(); if(password === "1") setIsAuthenticated(true); }} className="bg-white/[0.02] border border-white/[0.06] p-8 rounded-[32px] w-full max-w-sm text-center shadow-2xl backdrop-blur-md">
          <h1 className="text-white text-md tracking-[4px] font-light mb-6">STUDIO CONTROL PANEL</h1>
          <input type="password" placeholder="ENTER ACCESS KEY" className="w-full bg-white/[0.04] border border-white/[0.1] text-white rounded-xl px-4 py-3 text-xs focus:outline-none focus:border-[#d4b483] mb-4 text-center tracking-widest" value={password} onChange={(e) => setPassword(e.target.value)} />
          <button type="submit" className="w-full bg-[#d4b483] text-black font-semibold py-3 rounded-xl text-xs tracking-widest uppercase hover:opacity-90 transition-all">Unlock Dashboard</button>
        </form>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#070707] text-white p-4 md:p-12 pb-32">
      <div className="max-w-6xl mx-auto">
        
        {/* HEADER */}
        <div className="border-b border-white/[0.06] pb-5 mb-8 flex flex-col sm:flex-row justify-between items-center gap-4">
          <div>
            <h1 className="text-2xl font-light text-[#d4b483] tracking-wide" style={{ fontFamily: "var(--font-cormorant)" }}>Gallery Production Board</h1>
            <p className="text-[10px] text-white/30 font-mono mt-0.5">SLOTS FILLED: <span className="text-[#d4b483] font-bold">{photos.length}</span> / 24</p>
          </div>
          {photos.length < 24 && (
            <label className="cursor-pointer bg-[#d4b483] text-black text-[10px] font-bold tracking-widest px-6 py-3 rounded-xl uppercase hover:bg-[#c4a373] transition-colors shadow-lg">
              ➕ UPLOAD NEW PHOTO
              <input type="file" accept="image/*" className="hidden" onChange={(e) => onFileChange(e, null)} />
            </label>
          )}
        </div>

        {/* WORKSPACE GRID */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
          {Array.from({ length: 24 }).map((_, index) => {
            const photo = photos[index];
            return (
              <div key={index} className="relative w-full overflow-hidden rounded-2xl border bg-white/[0.01] border-white/[0.06] group transition-all duration-300 hover:border-white/20 shadow-md" style={{ aspectRatio: "4/3" }}>
                <span className="absolute top-2 left-2 bg-black/70 text-[9px] text-white/60 font-mono px-1.5 py-0.5 rounded z-10">#{String(index + 1).padStart(2, '0')}</span>
                
                {photo ? (
                  <>
                    <img src={photo.url} className="w-full h-full object-cover" alt="Uploaded" />
                    <div className="absolute inset-0 bg-black/70 opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex flex-col justify-center items-center p-3 gap-2 z-10">
                      <label className="w-full text-center cursor-pointer bg-white/10 hover:bg-white/20 text-white text-[10px] font-medium py-2 rounded-lg border border-white/10 transition-all">
                        🔄 Replace / Crop
                        <input type="file" accept="image/*" className="hidden" onChange={(e) => onFileChange(e, photo.id)} />
                      </label>
                      <button onClick={() => { if(confirm("Hapus foto ini?")) deleteDoc(doc(db, "gallery", photo.id)); }} className="w-full bg-red-600/80 hover:bg-red-600 text-white text-[10px] py-2 rounded-lg transition-all">🗑️ Delete</button>
                    </div>
                  </>
                ) : (
                  <label className="absolute inset-0 flex flex-col justify-center items-center cursor-pointer hover:bg-white/[0.02] transition-colors">
                    <span className="text-lg opacity-20 mb-1">📷</span>
                    <span className="text-[9px] text-white/20 font-light">Empty Slot</span>
                    <input type="file" accept="image/*" className="hidden" onChange={(e) => onFileChange(e, null)} />
                  </label>
                )}
              </div>
            );
          })}
        </div>

        {/* MODAL CROPPER INTERAKTIF PRO (REACT-EASY-CROP) */}
        {imageSrc && (
          <div className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-4">
            <div className="bg-[#121212] border border-white/10 w-full max-w-md rounded-[32px] overflow-hidden shadow-2xl flex flex-col p-6">
              <h3 className="text-center text-sm font-medium text-[#d4b483] tracking-wider mb-4">ADJUST IMAGE BOUNDS</h3>
              
              {/* Container Cropper Intuitif */}
              <div className="relative w-full h-64 bg-black rounded-2xl overflow-hidden border border-white/5">
                <Cropper
                  image={imageSrc}
                  crop={crop}
                  zoom={zoom}
                  aspect={4 / 3} // RASIO DIKUNCI MATI LANDSCAPE BERKELAS
                  onCropChange={setCrop}
                  onZoomChange={setZoom}
                  onCropComplete={onCropComplete}
                  showGrid={true}
                />
              </div>

              {/* Slider Zoom Premium */}
              <div className="mt-5 bg-white/[0.02] p-4 rounded-xl border border-white/5">
                <div className="flex justify-between text-[10px] text-white/40 mb-1.5 font-mono">
                  <span>ZOOM ROTATION SCALE</span>
                  <span>{Math.round(zoom * 100)}%</span>
                </div>
                <input type="range" min={1} max={3} step={0.05} value={zoom} onChange={(e) => setZoom(parseFloat(e.target.value))} className="w-full accent-[#d4b483] h-1 bg-white/10 rounded" />
              </div>

              <div className="flex gap-3 mt-6">
                <button onClick={() => setImageSrc(null)} className="flex-1 bg-white/5 text-white text-xs py-3 rounded-xl uppercase tracking-wider font-medium text-[10px]">Cancel</button>
                <button onClick={createCroppedImage} disabled={uploading} className="flex-1 bg-[#d4b483] text-black text-xs font-bold py-3 rounded-xl uppercase tracking-wider text-[10px]">{uploading ? "Processing..." : "Save Artwork"}</button>
              </div>
            </div>
          </div>
        )}

      </div>
    </div>
  );
}