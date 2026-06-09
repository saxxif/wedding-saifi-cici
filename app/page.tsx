"use client";

import MusicPlayer from "@/components/MusicPlayer";
import Hero from "@/components/Hero";
import BrideGroom from "@/components/BrideGroom";
import Countdown from "@/components/Countdown";
import OurStory from "@/components/OurStory";
import EventDetail from "@/components/EventDetail";
import Gallery from "@/components/Gallery";
import LoveQuote from "@/components/LoveQuote";
import WeddingGift from "@/components/WeddingGift";

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

        <Countdown />

        <OurStory />

        <EventDetail />

        <Gallery />

        <WeddingGift />
      </div>
    </main>
  );
}