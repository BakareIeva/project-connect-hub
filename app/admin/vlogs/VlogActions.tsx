"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

export function DeleteVlogButton({ id }: { id: string }) {
  const router = useRouter();
  const [confirming, setConfirming] = useState(false);

  async function handleDelete() {
    if (!confirming) {
      setConfirming(true);
      setTimeout(() => setConfirming(false), 3000);
      return;
    }
    await fetch("/api/admin/vlogs", {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ id }),
    });
    router.refresh();
  }

  return (
    <button
      onClick={handleDelete}
      className={`text-sm transition-colors ${
        confirming ? "text-red-400" : "text-white/30 hover:text-red-400"
      }`}
    >
      {confirming ? "Confirm?" : "Delete"}
    </button>
  );
}

export function ToggleVlogPublishButton({ id, published }: { id: string; published: boolean }) {
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  async function toggle() {
    setLoading(true);
    await fetch("/api/admin/vlogs", {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ id, published: !published }),
    });
    router.refresh();
    setLoading(false);
  }

  return (
    <button
      onClick={toggle}
      disabled={loading}
      className="text-white/30 hover:text-white text-sm transition-colors disabled:opacity-50"
    >
      {published ? "Unpublish" : "Publish"}
    </button>
  );
}
