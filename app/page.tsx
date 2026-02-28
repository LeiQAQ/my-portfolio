import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Timeline from "@/components/sections/Timeline";
import Learning from "@/components/sections/Learning";
import Contact from "@/components/sections/Contact";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0a0a0f]">
      <Hero />
      <About />
      <Timeline />
      <Learning />
      <Contact />
    </main>
  );
}
