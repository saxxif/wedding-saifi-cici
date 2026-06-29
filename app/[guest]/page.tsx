// app/[guest]/page.tsx
import Home from "@/app/page";

interface GuestPageProps {
  params: Promise<{
    guest: string;
  }>;
}

// 1. Ubah fungsi menjadi async
export default async function GuestPage({ params }: GuestPageProps) {
  // 2. Await objek params terlebih dahulu
  const resolvedParams = await params;
  
  // 3. Ambil data guest dengan aman dan berikan fallback jika kosong
  const guestParam = resolvedParams?.guest || "";
  
  // Mengubah format URL "Budi-Santoso" menjadi "Budi Santoso"
  const formattedGuestName = guestParam.replace(/-/g, " ");

  // Mengirimkan nama tamu ke komponen utama Home
  return <Home guestName={formattedGuestName} />;
}