import "./globals.css";
import type { Metadata } from "next";
import { Bricolage_Grotesque, Hanken_Grotesk } from "next/font/google";
import LayoutComponent from "@/components/Layout";
import { profile } from "@/data/portfolio";

const display = Bricolage_Grotesque({ subsets: ["latin"], variable: "--font-bricolage", display: "swap" });
const body = Hanken_Grotesk({ subsets: ["latin"], variable: "--font-hanken", display: "swap" });

export const metadata: Metadata = {
  // Set NEXT_PUBLIC_SITE_URL in Vercel (e.g. https://your-name.vercel.app) for correct social previews.
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000"),
  title: { default: `${profile.name} — ${profile.headline}`, template: `%s | ${profile.name}` },
  description: profile.siteDescription,
  openGraph: {
    title: `${profile.name} — ${profile.headline}`,
    description: profile.siteDescription,
    type: "website",
  },
};

// Runs before first paint so the saved theme never flashes. Default is dark (same as before).
const themeScript = `try{var t=localStorage.getItem("theme")||"dark";document.documentElement.classList.toggle("dark",t==="dark")}catch(e){}`;

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${display.variable} ${body.variable}`} suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body suppressHydrationWarning>
        <LayoutComponent>{children}</LayoutComponent>
      </body>
    </html>
  );
}
