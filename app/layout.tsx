import type { Metadata } from "next";
import { Suspense } from "react";
import Script from "next/script";
import { Inter } from "next/font/google";
import "./globals.css";
import Sidebar from "@/components/Sidebar";
import StickyMemberCTA from "@/components/StickyMemberCTA";
import { Providers } from "@/components/Providers";
import { initialSkills } from "@/lib/data";

const inter = Inter({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const siteUrl = "https://www.antigravityskills.org";
const totalSkills = `${initialSkills.length}+`;

export const metadata: Metadata = {
  title: "Antigravity Skills - Security-Reviewed AI Skills for Claude, Cursor & Gemini",
  description: `Discover ${totalSkills} security-reviewed AI skills for Claude Code, Cursor, Gemini CLI, and Antigravity. Browse public previews, then register to unlock full install guides, compatibility checks, and safety reviews.`,
  keywords: [
    // Top trending keywords from search data
    "antigravity skills",
    "google antigravity skills",
    "antigravity agent skills",
    "claude skills",
    "claude code skills",
    "ai skills",
    "agent skills",
    "gemini skills",
    "gemini agent skills",
    "cursor skills",
    "mcp",
    "awesome skills",
    "anthropic skills",
    "github skills",
    "opencode skills",
    "antigravity cli",
    "antigravity tools",
    "antigravity agent",
    "claude agent skills",
  ],
  authors: [{ name: "Antigravity Skills Community" }],
  creator: "Antigravity Skills",
  publisher: "Antigravity Skills",
  openGraph: {
    title: "Antigravity Skills - Security-Reviewed AI Skills Directory",
    description: `${totalSkills} security-reviewed AI skills for Claude Code, Cursor, Gemini CLI, and Antigravity with member-only install guides and safety details.`,
    url: siteUrl,
    siteName: "Antigravity Skills",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Antigravity Skills - Security-Reviewed AI Skills",
    description: `${totalSkills} security-reviewed AI skills with public previews and member-only install guides for Claude, Cursor, Gemini, and Antigravity.`,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
  alternates: {
    canonical: siteUrl,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} antialiased min-h-screen bg-white dark:bg-[#0f0f0f] transition-colors`}>
        {/* Google Analytics */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-J56JCF02B1"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-J56JCF02B1');
          `}
        </Script>

        <Providers>
          <Sidebar />
          <main className="lg:ml-[220px] min-h-screen pb-24">
            {children}
          </main>
          <Suspense fallback={null}>
            <StickyMemberCTA />
          </Suspense>
        </Providers>
      </body>
    </html>
  );
}
