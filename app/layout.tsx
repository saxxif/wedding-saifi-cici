import type { Metadata } from "next";
import {
  Cormorant_Garamond,
  Montserrat,
} from "next/font/google";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  variable: "--font-cormorant",
  weight: ["300", "400", "500", "600", "700"],
});

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-body",
  weight: ["300", "400", "500", "600"],
});

export const metadata: Metadata = {
  title: "Saifi & Cici Wedding",
  description: "Luxury Wedding Invitation",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`
        ${cormorant.variable}
        ${montserrat.variable}
      `}
    >
      <body
        className="
        bg-[#111111]
        antialiased
        overflow-x-hidden
        "
      >
        <main
          className="
          relative

          w-full

          max-w-[430px]

          min-h-screen

          mx-auto

          bg-[#faf8f4]

          overflow-hidden

          shadow-[0_0_100px_rgba(0,0,0,0.35)]
          "
        >
          {children}
        </main>
      </body>
    </html>
  );
}