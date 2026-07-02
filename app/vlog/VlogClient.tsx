"use client";

import { useRef, useState } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { ChevronDown, Clock } from "lucide-react";
import type { VlogEntry } from "@/lib/supabase";

function TranscriptSection({
  entries,
}: {
  entries: { time: string; heading: string; body: string }[];
}) {
  const [open, setOpen] = useState(false);

  return (
    <div className="mt-6 border-t" style={{ borderColor: "#E4E4E2" }}>
      <button
        onClick={() => setOpen((v) => !v)}
        className="w-full flex items-center justify-between py-4 text-left"
      >
        <span
          className="text-xs font-medium tracking-[0.25em] uppercase"
          style={{ color: "#C9A84C" }}
        >
          Read Transcript
        </span>
        <ChevronDown
          size={14}
          style={{
            color: "#C9A84C",
            transform: open ? "rotate(180deg)" : "rotate(0)",
            transition: "transform 0.3s",
          }}
        />
      </button>

      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            key="transcript"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.4 }}
            className="overflow-hidden"
          >
            <div className="pb-8 space-y-6">
              {entries.map((e, i) => (
                <div key={i} className="grid grid-cols-[5rem_1fr] gap-4">
                  <div
                    className="text-[11px] font-medium font-mono pt-0.5 flex-shrink-0"
                    style={{ color: "#C9A84C" }}
                  >
                    [{e.time}]
                  </div>
                  <div>
                    <h4 className="font-serif font-medium text-[#111111] text-base mb-1.5">
                      {e.heading}
                    </h4>
                    <p className="text-[#6B6B6B] text-sm font-light leading-relaxed">{e.body}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

function VlogEntryCard({ entry }: { entry: VlogEntry }) {
  const entryRef = useRef(null);
  const entryInView = useInView(entryRef, { once: true, margin: "-60px" });

  const isYouTube =
    entry.video_url.includes("youtube.com") || entry.video_url.includes("youtu.be");

  return (
    <motion.article
      ref={entryRef}
      initial={{ opacity: 0, y: 28 }}
      animate={entryInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7 }}
      className="bg-white border"
      style={{ borderColor: "#E4E4E2" }}
    >
      <div className="relative w-full bg-[#111111]" style={{ aspectRatio: "16/9" }}>
        {isYouTube ? (
          <iframe
            src={entry.video_url}
            title={entry.title}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="absolute inset-0 w-full h-full"
          />
        ) : (
          <video controls preload="none" playsInline className="absolute inset-0 w-full h-full">
            <source src={entry.video_url} type="video/mp4" />
          </video>
        )}
      </div>

      <div className="p-6 lg:p-8">
        <div className="flex items-center gap-4 mb-4 text-[11px] font-medium tracking-widest uppercase text-[#6B6B6B]/50">
          <span>
            {new Date(entry.created_at).toLocaleDateString("en-GB", {
              day: "numeric",
              month: "long",
              year: "numeric",
            })}
          </span>
          {entry.duration && (
            <>
              <span>·</span>
              <span className="flex items-center gap-1.5">
                <Clock size={11} />
                {entry.duration}
              </span>
            </>
          )}
        </div>

        <h2
          className="font-serif font-light text-[#111111] mb-3"
          style={{ fontSize: "clamp(1.3rem, 3vw, 1.75rem)" }}
        >
          {entry.title}
        </h2>
        <p className="text-[#6B6B6B] text-sm font-light leading-relaxed mb-2">{entry.summary}</p>

        {Array.isArray(entry.transcript) && entry.transcript.length > 0 && (
          <TranscriptSection entries={entry.transcript} />
        )}
      </div>
    </motion.article>
  );
}

export function VlogClient({ entries }: { entries: VlogEntry[] }) {
  return (
    <div className="max-w-5xl mx-auto px-6 lg:px-12 space-y-16">
      {entries.length === 0 ? (
        <p className="text-center text-[#6B6B6B]/50 py-20">No videos yet — check back soon.</p>
      ) : (
        entries.map((entry) => <VlogEntryCard key={entry.id} entry={entry} />)
      )}
    </div>
  );
}
