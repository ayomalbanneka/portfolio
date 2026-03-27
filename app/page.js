'use client';

import { useEffect, useState } from "react";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Header from "./components/Header";
import NavBar from "./components/NavBar";
import Work from "./components/Work";
import Services from "./components/Services";
import Script from "next/script";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://ayomalbanneka.me";

const jsonLd = [
  {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Ayomal Banneka",
    url: siteUrl,
    jobTitle: "Full Stack Software Engineer",
    description:
      "Full Stack Software Engineer & aspiring DevOps Engineer from Sri Lanka, specialising in React, Next.js, cloud, and DevOps.",
    email: "ayomalkaushalya@gmail.com",
    sameAs: [
      "https://github.com/ayomalbanneka",
      "https://www.linkedin.com/in/ayomalbanneka/",
      "https://www.instagram.com/_ayomal____/",
      "https://web.facebook.com/ayomal.kaushalya",
    ],
    knowsAbout: [
      "JavaScript",
      "Java",
      "PHP",
      "Docker",
      "AWS",
      "Azure",
      "DevOps",
      "CI/CD",
    ],
  },
  {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Ayomal Banneka",
    url: siteUrl,
    author: {
      "@type": "Person",
      name: "Ayomal Banneka",
    },
  },
];

export default function Home() {

  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    if (localStorage.theme === 'dark' || (!('theme' in localStorage) &&
      window.matchMedia('(prefers-color-scheme: dark)').matches)) {
      setIsDarkMode(true);
    } else {
      setIsDarkMode(false);
    }
  }, []);

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
      localStorage.theme = 'dark';
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.theme = '';
    }
  }, [isDarkMode]);

  return (
    <>
      <Script
        id="json-ld"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        strategy="beforeInteractive"
      />
      <NavBar isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} />
      <main>
        <Header isDarkMode={isDarkMode} />
        <About isDarkMode={isDarkMode} />
        <Services isDarkMode={isDarkMode} />
        <Work isDarkMode={isDarkMode} />
        <Contact isDarkMode={isDarkMode} />
      </main>
      <Footer isDarkMode={isDarkMode} />
    </>
  );
}