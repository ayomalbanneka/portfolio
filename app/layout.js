import { Martian_Mono, IBM_Plex_Mono } from "next/font/google";
import "./globals.css";
import { Analytics } from "@vercel/analytics/next";
import ToastProvider from "./components/ToastProvider";
import { SpeedInsights } from "@vercel/speed-insights/next";
import MotionProvider from "./components/MotionProvider";
import EasterEgg from "./components/EasterEgg";

const martianMono = Martian_Mono({
  subsets: ["latin"],
  weight: ["400", "500", "700", "800"],
  variable: "--font-martian",
  display: "swap",
});

const plexMono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-plex",
  display: "swap",
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://ayomalbanneka.me";

export const metadata = {
  metadataBase: new URL(siteUrl),
  applicationName: "Ayomal Banneka",
  title: {
    default: "Ayomal Banneka | Full Stack Software Engineer & DevOps",
    template: "%s | Ayomal Banneka",
  },
  description:
    "Ayomal Banneka — undergraduate Full Stack Software Engineer & aspiring DevOps Engineer from Sri Lanka. Specialising in React, Next.js, Node.js, cloud (AWS, Azure), Docker, and CI/CD. Open to collaborations.",
  alternates: { canonical: siteUrl },
  keywords: [
    "Ayomal Banneka",
    "Full Stack Developer",
    "Full Stack Software Engineer",
    "DevOps Engineer",
    "Web Developer Sri Lanka",
    "React Developer",
    "Next.js Developer",
    "Node.js Developer",
    "Express Developer",
    "Sri Lanka Software Engineer",
    "Portfolio",
    "Cloud Engineering",
    "AWS",
    "Azure",
    "Docker",
    "CI/CD",
    "GitHub Actions",
    "Terraform",
    "PostgreSQL",
    "MongoDB",
    "Open Source Developer",
    "Undergraduate Software Engineer",
  ],
  authors: [{ name: "Ayomal Banneka", url: siteUrl }],
  creator: "Ayomal Banneka",
  publisher: "Ayomal Banneka",
  manifest: "/manifest.json",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteUrl,
    siteName: "Ayomal Banneka",
    title: "Ayomal Banneka | Full Stack Software Engineer & DevOps",
    description:
      "Undergraduate Full Stack Software Engineer & aspiring DevOps Engineer from Sri Lanka. Building beautiful, performant, and accessible web applications with React, Next.js, and cloud technologies.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Ayomal Banneka — Full Stack Software Engineer & DevOps",
        type: "image/png",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Ayomal Banneka | Full Stack Software Engineer & DevOps",
    description:
      "Undergraduate Full Stack Software Engineer & aspiring DevOps Engineer from Sri Lanka. React, Next.js, cloud, and DevOps.",
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
    { media: "(prefers-color-scheme: light)", color: "#f7f5ee" },
    { media: "(prefers-color-scheme: dark)", color: "#0a0d0a" },
  ],
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`scroll-smooth ${martianMono.variable} ${plexMono.variable}`}
    >
      <body className="font-mono antialiased leading-relaxed overflow-x-hidden bg-bg text-fg selection:bg-accent selection:text-bg">
        <MotionProvider>
          {children}
          <EasterEgg />
        </MotionProvider>
        <ToastProvider />
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}