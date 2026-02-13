import { Outfit, Ovo } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  subsets: ["latin"],
  weight: ["400", "500", "600","700"],
});

const ovo = Ovo({
  subsets: ["latin"],
  weight: ["400"],
});

export const metadata = {
  title: "Portfolio - Ayomal Banneka",
  description: "Ayomal Banneka's personal portfolio showcasing projects, skills, and experience in software development & devops.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${outfit.className} ${ovo.className} antialiased leading-8 overflow-x-hidden 
        dark:bg-dark-theme dark:text-white`}
      >
        {children}
      </body>
    </html>
  );
}
