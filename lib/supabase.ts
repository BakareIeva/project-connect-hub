import { createClient } from "@supabase/supabase-js";

export type BlogPost = {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  category: string;
  read_time: string;
  published: boolean;
  created_at: string;
};

export type VlogEntry = {
  id: string;
  title: string;
  summary: string;
  video_url: string;
  transcript: { time: string; heading: string; body: string }[];
  duration: string;
  published: boolean;
  created_at: string;
};

const url = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const key = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;

export const supabase = createClient(url, key);
