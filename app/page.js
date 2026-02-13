'use client';

import About from "./components/About";
import Header from "./components/Header";
import NavBar from "./components/NavBar";
import Work from "./components/Work";

export default function Home() {
  return (
    <>
      <NavBar />
      <Header />
      <About />
      <Work />
    </>
  );
}
