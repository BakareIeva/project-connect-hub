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
  component: Home,
});
