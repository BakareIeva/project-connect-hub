"use client";

import { useEffect, useState } from "react";
import { useRouter, useParams } from "next/navigation";
import Link from "next/link";

const inputCls =
  "w-full bg-white/5 border border-white/10 text-white rounded px-4 py-3 text-sm outline-none focus:border-[#C9A84C] transition-colors resize-none";

function Field({ label, hint, children }: { label: string; hint?: string; children: React.ReactNode }) {
  return (
    <div>
      <label className="block text-white/40 text-xs tracking-widest uppercase mb-2">{label}</label>
      {hint && <p className="text-white/25 text-xs mb-2">{hint}</p>}
      {children}
    </div>
  );
}

type TranscriptEntry = { time: string; heading: string; body: string };

export default function EditVlogPage() {
  const router = useRouter();
  const { id } = useParams<{ id: string }>();
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState("");
  const [form, setFormState] = useState({
    title: "",
    summary: "",
    video_url: "",
    duration: "",
    published: false,
  });
  const [transcript, setTranscript] = useState<TranscriptEntry[]>([
    { time: "", heading: "", body: "" },
  ]);

  useEffect(() => {
    async function load() {
      const res = await fetch("/api/admin/vlogs");
      const vlogs = await res.json();
      const vlog = vlogs.find((v: { id: string }) => v.id === id);
      if (vlog) {
        setFormState({
          title: vlog.title,
          summary: vlog.summary,
          video_url: vlog.video_url,
          duration: vlog.duration,
          published: vlog.published,
        });
        setTranscript(
          Array.isArray(vlog.transcript) && vlog.transcript.length > 0
            ? vlog.transcript
            : [{ time: "", heading: "", body: "" }]
        );
      }
      setLoading(false);
    }
    load();
  }, [id]);

  function set(field: string, value: string | boolean) {
    setFormState((prev) => ({ ...prev, [field]: value }));
  }

  function setEntry(i: number, field: keyof TranscriptEntry, value: string) {
    setTranscript((prev) => prev.map((e, idx) => (idx === i ? { ...e, [field]: value } : e)));
  }

  function addEntry() {
    setTranscript((prev) => [...prev, { time: "", heading: "", body: "" }]);
  }

  function removeEntry(i: number) {
    setTranscript((prev) => prev.filter((_, idx) => idx !== i));
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSaving(true);
    setError("");

    const payload = {
      id,
      ...form,
      transcript: transcript.filter((e) => e.time || e.heading || e.body),
    };

    const res = await fetch("/api/admin/vlogs", {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });

    if (res.ok) {
      router.push("/admin/vlogs");
    } else {
      const data = await res.json();
      setError(data.error ?? "Failed to save");
      setSaving(false);
    }
  }

  if (loading) {
    return (
      <div className="min-h-screen bg-[#111111] flex items-center justify-center">
        <p className="text-white/30">Loading…</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#111111] text-white">
      <header className="border-b border-white/10 px-8 py-5 flex items-center justify-between">
        <div>
          <p className="text-[#C9A84C] text-xs tracking-[0.2em] uppercase">Admin</p>
          <h1 className="text-white font-serif text-xl mt-0.5">Edit Vlog</h1>
        </div>
        <Link href="/admin/vlogs" className="text-white/40 hover:text-white text-sm transition-colors">
          ← Vlogs
        </Link>
      </header>

      <main className="max-w-3xl mx-auto px-8 py-10">
        <form onSubmit={handleSubmit} className="space-y-6">
          <Field label="Title">
            <input
              type="text"
              required
              value={form.title}
              onChange={(e) => set("title", e.target.value)}
              className={inputCls}
            />
          </Field>

          <Field label="Summary">
            <textarea
              required
              rows={3}
              value={form.summary}
              onChange={(e) => set("summary", e.target.value)}
              className={inputCls}
            />
          </Field>

          <div className="grid grid-cols-2 gap-4">
            <Field label="Video URL">
              <input
                type="text"
                required
                value={form.video_url}
                onChange={(e) => set("video_url", e.target.value)}
                className={inputCls}
              />
            </Field>
            <Field label="Duration">
              <input
                type="text"
                value={form.duration}
                onChange={(e) => set("duration", e.target.value)}
                className={inputCls}
              />
            </Field>
          </div>

          <div>
            <div className="flex items-center justify-between mb-3">
              <label className="text-white/40 text-xs tracking-widest uppercase">
                Transcript
              </label>
              <button
                type="button"
                onClick={addEntry}
                className="text-[#C9A84C] text-xs hover:underline"
              >
                + Add section
              </button>
            </div>

            <div className="space-y-4">
              {transcript.map((entry, i) => (
                <div key={i} className="border border-white/10 rounded-lg p-4 space-y-3">
                  <div className="grid grid-cols-3 gap-3">
                    <input
                      type="text"
                      value={entry.time}
                      onChange={(e) => setEntry(i, "time", e.target.value)}
                      placeholder="0:00"
                      className={inputCls}
                    />
                    <input
                      type="text"
                      value={entry.heading}
                      onChange={(e) => setEntry(i, "heading", e.target.value)}
                      placeholder="Section heading"
                      className={`${inputCls} col-span-2`}
                    />
                  </div>
                  <textarea
                    rows={3}
                    value={entry.body}
                    onChange={(e) => setEntry(i, "body", e.target.value)}
                    placeholder="Transcript text…"
                    className={inputCls}
                  />
                  {transcript.length > 1 && (
                    <button
                      type="button"
                      onClick={() => removeEntry(i)}
                      className="text-white/20 hover:text-red-400 text-xs transition-colors"
                    >
                      Remove section
                    </button>
                  )}
                </div>
              ))}
            </div>
          </div>

          <div className="flex items-center gap-3">
            <input
              type="checkbox"
              id="published"
              checked={form.published}
              onChange={(e) => set("published", e.target.checked)}
              className="accent-[#C9A84C] w-4 h-4"
            />
            <label htmlFor="published" className="text-white/70 text-sm">
              Published
            </label>
          </div>

          {error && <p className="text-red-400 text-sm">{error}</p>}

          <button
            type="submit"
            disabled={saving}
            className="bg-[#C9A84C] text-[#111111] font-semibold px-8 py-3 rounded hover:bg-[#A8872E] transition-colors disabled:opacity-50"
          >
            {saving ? "Saving…" : "Save changes"}
          </button>
        </form>
      </main>
    </div>
  );
}
