import { createFileRoute } from "@tanstack/react-router";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import PracticeSection from "@/components/PracticeSection";
import Certifications from "@/components/Certifications";
import CareerTimeline from "@/components/CareerTimeline";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <CareerTimeline />
        <PracticeSection />
        <Certifications />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

export const Route = createFileRoute("/")({
  head: () => ({ meta: [
      { title: "Ieva Bakare — Legal Professional in Lithuania" },
      { name: "description", content: "Legal insights and professional experience across criminal, civil, corporate, immigration, administrative, European Union and human rights law." },
      { property: "og:title", content: "Ieva Bakare — Legal Professional in Lithuania" },
      { property: "og:description", content: "Legal insights and professional experience across criminal, civil, corporate, immigration, administrative, European Union and human rights law." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ] }),
  component: Home,
});
