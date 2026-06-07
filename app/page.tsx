"use client";

import Hero from "@/components/Hero";
import BrideGroom from "@/components/BrideGroom";
import Countdown from "@/components/Countdown";
import OurStory from "@/components/OurStory";
import EventDetail from "@/components/EventDetail";
import Gallery from "@/components/Gallery";
import LoveQuote from "@/components/LoveQuote";


export default function Home() {
  return (
    <main className="overflow-x-hidden">

      <Hero />

      <BrideGroom />

      <Countdown />

      <OurStory />

      <EventDetail />
      <Gallery />
      <LoveQuote />
    </main>
  );
}