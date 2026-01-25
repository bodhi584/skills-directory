import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Sidebar from "@/components/Sidebar";
import { Providers } from "@/components/Providers";

const inter = Inter({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Antigravity Skills - Find Awesome AI Agent Skills for Claude, Cursor & Gemini",
  description: "The largest collection of AI Skills for Google Antigravity, Claude Code, Cursor, Gemini CLI and other AI agents. 244+ curated awesome skills for agent development, MCP servers, and AI automation.",
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
    title: "Antigravity Skills - Awesome AI Agent Skills Directory",
    description: "244+ curated AI Skills for Claude Code, Cursor, Gemini CLI and Google Antigravity agents.",
    url: "https://antigravityskills.org",
    siteName: "Antigravity Skills",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Antigravity Skills - AI Agent Skills Directory",
    description: "244+ curated AI Skills for Claude, Cursor, Gemini and Antigravity agents.",
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
    canonical: "https://antigravityskills.org",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} antialiased min-h-screen bg-white`}>
        <Providers>
          <Sidebar />
          <main className="ml-[220px] min-h-screen">
            {children}
          </main>
        </Providers>
      </body>
    </html>
  );
}
