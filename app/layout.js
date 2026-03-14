import { Outfit, Ovo } from "next/font/google";
import "./globals.css";
import { Analytics } from "@vercel/analytics/next";
import ToastProvider from "./components/ToastProvider";

const outfit = Outfit({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const ovo = Ovo({
  subsets: ["latin"],
  weight: ["400"],
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://ayomalbanneka.me";

export const metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Ayomal Banneka | Full Stack Software Engineer & DevOps",
    template: "%s | Ayomal Banneka",
  },
  description:
    "Ayomal Banneka — Full Stack Software Engineer & aspiring DevOps Engineer from Sri Lanka. Explore projects, skills, and experience in web development, cloud, and DevOps.",
  manifest: "/manifest.json",
  keywords: [
    "Ayomal Banneka",
    "Full Stack Developer",
    "Software Engineer",
    "DevOps Engineer",
    "Web Developer",
    "React",
    "Next.js",
    "Sri Lanka",
    "Portfolio",
    "Cloud Development",
    "AWS",
    "Azure",
    "Docker",
  ],
  authors: [{ name: "Ayomal Banneka", url: siteUrl }],
  creator: "Ayomal Banneka",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteUrl,
    siteName: "Ayomal Banneka Portfolio",
    title: "Ayomal Banneka | Full Stack Software Engineer & DevOps",
    description:
      "Full Stack Software Engineer & aspiring DevOps Engineer from Sri Lanka. Building beautiful, performant, and accessible web applications.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Ayomal Banneka — Full Stack Software Engineer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Ayomal Banneka | Full Stack Software Engineer & DevOps",
    description:
      "Full Stack Software Engineer & aspiring DevOps Engineer from Sri Lanka.",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
};

export const viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#11001f" },
  ],
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${outfit.className} ${ovo.className} antialiased leading-8 overflow-x-hidden 
        dark:bg-dark-theme dark:text-white`}
      >
        {children}
        <ToastProvider />
        <Analytics />
      </body>
    </html>
  );
}
