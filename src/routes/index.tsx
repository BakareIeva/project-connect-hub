import { createFileRoute } from "@tanstack/react-router";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import CareerTimeline from "@/components/CareerTimeline";
import PracticeSection from "@/components/PracticeSection";
import Certifications from "@/components/Certifications";
import BlogPreview from "@/components/BlogPreview";
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
        <BlogPreview />
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
