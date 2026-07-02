"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

const CATEGORIES = [
  "Immigration Law",
  "EU Residency",
  "Family Reunification",
  "Work Permits",
  "Lithuanian Citizenship",
  "News & Updates",
];

export default function NewPostPage() {
  const router = useRouter();
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState("");
  const [form, setForm] = useState({
    title: "",
    slug: "",
    excerpt: "",
    content: "",
    category: CATEGORIES[0],
    read_time: "5 min read",
    published: false,
  });

  function set(field: string, value: string | boolean) {
    setForm((prev) => ({ ...prev, [field]: value }));
  }

  function autoSlug(title: string) {
    return title
      .toLowerCase()
      .replace(/[^a-z0-9\s-]/g, "")
      .trim()
      .replace(/\s+/g, "-");
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSaving(true);
    setError("");

    const res = await fetch("/api/admin/posts", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    });

    if (res.ok) {
      router.push("/admin/posts");
    } else {
      const data = await res.json();
      setError(data.error ?? "Failed to save");
      setSaving(false);
    }
  }

  return (
    <div className="min-h-screen bg-[#111111] text-white">
      <header className="border-b border-white/10 px-8 py-5 flex items-center justify-between">
        <div>
          <p className="text-[#C9A84C] text-xs tracking-[0.2em] uppercase">Admin</p>
          <h1 className="text-white font-serif text-xl mt-0.5">New Post</h1>
        </div>
        <Link href="/admin/posts" className="text-white/40 hover:text-white text-sm transition-colors">
          ← Posts
        </Link>
      </header>

      <main className="max-w-3xl mx-auto px-8 py-10">
        <form onSubmit={handleSubmit} className="space-y-6">
          <Field label="Title">
            <input
              type="text"
              required
              value={form.title}
              onChange={(e) => {
                set("title", e.target.value);
                set("slug", autoSlug(e.target.value));
              }}
              className={inputCls}
            />
          </Field>

          <Field label="Slug (URL)">
            <input
              type="text"
              required
              value={form.slug}
              onChange={(e) => set("slug", e.target.value)}
              className={inputCls}
            />
          </Field>

          <div className="grid grid-cols-2 gap-4">
            <Field label="Category">
              <select
                value={form.category}
                onChange={(e) => set("category", e.target.value)}
                className={inputCls}
              >
                {CATEGORIES.map((c) => (
                  <option key={c} value={c}>{c}</option>
                ))}
              </select>
            </Field>
            <Field label="Read time">
              <input
                type="text"
                value={form.read_time}
                onChange={(e) => set("read_time", e.target.value)}
                placeholder="5 min read"
                className={inputCls}
              />
            </Field>
          </div>

          <Field label="Excerpt (shown in card previews)">
            <textarea
              required
              rows={3}
              value={form.excerpt}
              onChange={(e) => set("excerpt", e.target.value)}
              className={inputCls}
            />
          </Field>

          <Field label="Content (plain text or Markdown)">
            <textarea
              required
              rows={14}
              value={form.content}
              onChange={(e) => set("content", e.target.value)}
              className={`${inputCls} font-mono text-sm`}
            />
          </Field>

          <div className="flex items-center gap-3">
            <input
              type="checkbox"
              id="published"
              checked={form.published}
              onChange={(e) => set("published", e.target.checked)}
              className="accent-[#C9A84C] w-4 h-4"
            />
            <label htmlFor="published" className="text-white/70 text-sm">
              Publish immediately
            </label>
          </div>

          {error && <p className="text-red-400 text-sm">{error}</p>}

          <button
            type="submit"
            disabled={saving}
            className="bg-[#C9A84C] text-[#111111] font-semibold px-8 py-3 rounded hover:bg-[#A8872E] transition-colors disabled:opacity-50"
          >
            {saving ? "Saving…" : "Save post"}
          </button>
        </form>
      </main>
    </div>
  );
}

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div>
      <label className="block text-white/40 text-xs tracking-widest uppercase mb-2">{label}</label>
      {children}
    </div>
  );
}

const inputCls =
  "w-full bg-white/5 border border-white/10 text-white rounded px-4 py-3 text-sm outline-none focus:border-[#C9A84C] transition-colors resize-none";
