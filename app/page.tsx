"use client";

import MusicPlayer from "@/components/MusicPlayer";
import Hero from "@/components/Hero";
import BrideGroom from "@/components/BrideGroom";
import OurStory from "@/components/OurStory";
import Countdown from "@/components/Countdown";
import EventDetail from "@/components/EventDetail";
import Gallery from "@/components/Gallery";
import LoveQuote from "@/components/LoveQuote";
import WeddingGift from "@/components/WeddingGift";
import RSVP from "@/components/RSVP"; 

// 1. Tambahkan interface untuk mendefinisikan tipe data props
interface HomeProps {
  guestName?: string;
}

// 2. Terima parameter guestName di dalam fungsi Home
export default function Home({ guestName }: HomeProps) {
  return (
    <main
      className="
      min-h-[100svh]
      bg-[#faf8f4]
      flex
      justify-center
      overflow-x-hidden
      "
    >
      <div
        className="
        relative
        w-full
        max-w-[430px]
        bg-[#faf8f4]
        overflow-hidden
        shadow-[0_0_50px_rgba(0,0,0,0.08)]
        "
      >
        {/* 3. Sekarang guestName sudah bisa dibaca tanpa eror */}
        <MusicPlayer guestName={guestName} />

        <Hero />

        <BrideGroom />
         <EventDetail />

        
        <Countdown />
                <OurStory />

        <Gallery />

        <WeddingGift />
        
        <RSVP />
      </div>
    </main>
  );
}