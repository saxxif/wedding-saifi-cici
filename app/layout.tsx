import type { Metadata, Viewport } from "next";
import {
  Cormorant_Garamond,
  Montserrat,
} from "next/font/google";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  variable: "--font-cormorant",
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-body",
  weight: ["300", "400", "500", "600"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Saifi & Cici Wedding",
  description: "Luxury Wedding Invitation",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  viewportFit: "cover",
  userScalable: false,
  themeColor: "#faf8f4",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="id"
      suppressHydrationWarning
      className={`
        ${cormorant.variable}
        ${montserrat.variable}
      `}
    >
      <body
        className="
          antialiased
          overflow-x-hidden
          bg-[#181818]
          text-[#222]
        "
      >
        <div
          className="
            min-h-[100svh]
            flex
            justify-center
            items-start
            bg-[#181818]
          "
        >
          <main
            className="
              relative
              w-full
              max-w-[430px]
              min-h-[100svh]
              bg-[#faf8f4]
              overflow-hidden
              shadow-[0_0_60px_rgba(0,0,0,0.35)]
            "
          >
            {children}
          </main>
        </div>
      </body>
    </html>
  );
}