import { About } from "@/components/About";
import { Contact } from "@/components/Contact";
import { Experience } from "@/components/Experience";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Marquee } from "@/components/Marquee";
import { SelectedWork } from "@/components/SelectedWork";

export default function Home() {
  return (
    <>
      <Header />
      <main className="mx-auto w-full max-w-[1440px] px-margin md:px-margin-desktop">
        <Hero />
        <Marquee />
        <SelectedWork />
        <About />
        <Experience />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
