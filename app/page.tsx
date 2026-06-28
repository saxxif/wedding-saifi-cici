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
// 1. Impor komponen RSVP yang baru dibuat
import RSVP from "@/components/RSVP"; 

export default function Home() {
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
        <MusicPlayer />

        <Hero />

        <BrideGroom />

        <OurStory />
        
        <Countdown />

        <EventDetail />

        <Gallery />

        <WeddingGift />
        
        {/* 2. Tambahkan komponen RSVP di sini */}
        <RSVP />
      </div>
    </main>
  );
}