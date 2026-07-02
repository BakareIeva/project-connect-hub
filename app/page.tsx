import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import CareerTimeline from "@/components/CareerTimeline";
import CasesSection from "@/components/CasesSection";
import Certifications from "@/components/Certifications";
import BlogPreview from "@/components/BlogPreview";
import Testimonials from "@/components/Testimonials";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <CareerTimeline />
        <CasesSection />
        <Testimonials />
        <BlogPreview />
        <Certifications />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
