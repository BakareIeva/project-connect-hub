import { createFileRoute } from "@tanstack/react-router";
import { ArrowLeft } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { VlogClient } from "@/components/VlogClient";
import type { VlogEntry } from "@/lib/types";

function VlogPage() {
  const entries: VlogEntry[] = [];



  return (
    <>
      <Navbar />
      <main>
        {/* Header */}
        <section className="pt-40 pb-20" style={{ background: "#111111" }}>
          <div className="max-w-7xl mx-auto px-6 lg:px-12">
            <a
              href="/"
              className="inline-flex items-center gap-2 text-xs font-medium tracking-widest uppercase text-white/50 hover:text-white/80 transition-colors mb-10"
            >
              <ArrowLeft size={12} />
              Back
            </a>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-8 h-px" style={{ background: "#C9A84C" }} />
              <span
                className="text-xs font-medium tracking-[0.3em] uppercase"
                style={{ color: "#C9A84C" }}
              >
                Video Blog
              </span>
            </div>
            <h1
              className="font-serif font-light text-white leading-[1.05] mb-6"
              style={{ fontSize: "clamp(2.4rem, 5vw, 3.8rem)" }}
            >
              Videos With
              <br />
              Full Transcripts
            </h1>
            <p className="text-white/55 font-light max-w-xl leading-relaxed">
              Watch the video or read the full transcript — each entry includes both so you can
              engage with it however works for you.
            </p>
          </div>
        </section>

        {/* Entries */}
        <section className="py-16 lg:py-24" style={{ background: "#F2F1EF" }}>
          <VlogClient entries={entries ?? []} />
        </section>

        {/* CTA */}
        <section className="py-20 text-center" style={{ background: "#111111" }}>
          <div className="max-w-xl mx-auto px-6">
            <p className="text-white/60 font-light mb-6">
              Have questions after watching? Feel free to get in touch.
            </p>
            <a
              href="/#contact"
              className="inline-block px-8 py-4 text-xs font-medium tracking-widest uppercase transition-colors duration-300 hover:opacity-80"
              style={{ background: "#C9A84C", color: "#111111" }}
            >
              Get in Touch
            </a>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

export const Route = createFileRoute("/vlog")({ component: VlogPage });
