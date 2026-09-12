'use client';

import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Header from "./components/Header";
import NavBar from "./components/NavBar";
import Skills from "./components/Skills";
import Work from "./components/Work";
import Services from "./components/Services";
import Script from "next/script";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://ayomalbanneka.me";

const jsonLd = [
  // ── Person ────────────────────────────────────────────────────────────────
  {
    "@context": "https://schema.org",
    "@type": "Person",
    "@id": `${siteUrl}/#person`,
    name: "Ayomal Banneka",
    givenName: "Ayomal",
    familyName: "Banneka",
    url: siteUrl,
    image: `${siteUrl}/og-image.png`,
    jobTitle: "Full Stack Software Engineer",
    description:
      "Undergraduate Full Stack Software Engineer & aspiring DevOps Engineer from Sri Lanka, specialising in React, Next.js, Node.js, cloud platforms (AWS, Azure), Docker, and CI/CD pipelines.",
    email: "ayomalkaushalya@gmail.com",
    nationality: {
      "@type": "Country",
      name: "Sri Lanka",
    },
    sameAs: [
      "https://github.com/ayomalbanneka",
      "https://www.linkedin.com/in/ayomalbanneka/",
      "https://www.instagram.com/_ayomal____/",
      "https://web.facebook.com/ayomal.kaushalya",
    ],
    knowsAbout: [
      "JavaScript",
      "TypeScript",
      "React",
      "Next.js",
      "Node.js",
      "Express",
      "Java",
      "PHP",
      "Docker",
      "AWS",
      "Azure",
      "DevOps",
      "CI/CD",
      "GitHub Actions",
      "Terraform",
      "PostgreSQL",
      "MongoDB",
      "MySQL",
    ],
  },

  // ── WebSite ───────────────────────────────────────────────────────────────
  {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${siteUrl}/#website`,
    name: "Ayomal Banneka",
    url: siteUrl,
    description:
      "Personal portfolio of Ayomal Banneka — Full Stack Software Engineer & DevOps enthusiast from Sri Lanka.",
    author: {
      "@type": "Person",
      "@id": `${siteUrl}/#person`,
    },
    inLanguage: "en-US",
  },

  // ── WebPage ───────────────────────────────────────────────────────────────
  {
    "@context": "https://schema.org",
    "@type": "ProfilePage",
    "@id": `${siteUrl}/#webpage`,
    url: siteUrl,
    name: "Ayomal Banneka | Full Stack Software Engineer & DevOps",
    isPartOf: { "@id": `${siteUrl}/#website` },
    mainEntity: { "@id": `${siteUrl}/#person` },
    about: { "@id": `${siteUrl}/#person` },
    description:
      "Portfolio website of Ayomal Banneka showcasing projects, skills, and experience in full stack development, cloud engineering, and DevOps.",
    inLanguage: "en-US",
    breadcrumb: {
      "@type": "BreadcrumbList",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Home",
          item: siteUrl,
        },
      ],
    },
  },
];

export default function Home() {
  return (
    <>
      <Script
        id="json-ld"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        strategy="beforeInteractive"
      />
      <NavBar />
      <main>
        <Header />
        <About />
        <Skills />
        <Services />
        <Work />
        <Contact />
      </main>
      <Footer />
    </>
  );
}