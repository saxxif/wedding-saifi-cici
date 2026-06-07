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
      relative
      overflow-x-hidden
      bg-[#faf8f4]
      "
    >
      <MusicPlayer />
      {/* Hero */}
      <Hero />

      {/* Bride & Groom */}
      <BrideGroom />

      {/* Countdown */}
      <Countdown />

      {/* Love Journey */}
      <OurStory />

      {/* Wedding Event */}
      <EventDetail />

      {/* Gallery */}
      <Gallery />

      {/* Wedding Gift */}
      <WeddingGift />

     


    </main>
  );
}