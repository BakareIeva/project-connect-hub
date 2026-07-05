export type BlogPost = {
  slug: string;
  title: string;
  date: string;
  category: string;
  excerpt: string;
  readTime: string;
  content: string;
};

export type Video = {
  id: string;
  title: string;
  description: string;
  embedUrl: string;
  thumbnail: string;
  duration: string;
  date: string;
};

export type Certification = {
  title: string;
  issuer: string;
  year: string;
  description: string;
  type: "degree" | "certificate" | "award";
};

// ─── BLOG POSTS ──────────────────────────────────────────────────────────────

export const blogPosts: BlogPost[] = [
  // Temporarily removed
];

export function getPostBySlug(slug: string): BlogPost | undefined {
  return blogPosts.find((p) => p.slug === slug);
}

export function getAllSlugs(): string[] {
  return blogPosts.map((p) => p.slug);
}

// ─── VIDEOS ──────────────────────────────────────────────────────────────────

export const videos: Video[] = [
  {
    id: "v1",
    title: "How to Apply for a Lithuanian Residence Permit — Step by Step",
    description:
      "A complete walkthrough of the residence permit application process in Lithuania, from gathering documents to the Migration Department appointment.",
    embedUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    thumbnail: "",
    duration: "12:34",
    date: "2026-05-01",
  },
  {
    id: "v2",
    title: "What to Do If Your Visa Is Refused",
    description:
      "Ieva explains the appeal process, common refusal grounds, and what steps to take immediately after receiving a negative decision.",
    embedUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    thumbnail: "",
    duration: "08:47",
    date: "2026-04-10",
  },
  {
    id: "v3",
    title: "EU Blue Card Lithuania — Am I Eligible?",
    description:
      "An overview of the EU Blue Card requirements for Lithuania, salary thresholds, the application process, and who this permit is best suited for.",
    embedUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    thumbnail: "",
    duration: "10:15",
    date: "2026-03-22",
  },
  {
    id: "v4",
    title: "Family Reunification — A Lawyer Answers Your Questions",
    description:
      "Live Q&A session answering the most common questions about bringing family members to Lithuania under EU family reunification law.",
    embedUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    thumbnail: "",
    duration: "22:08",
    date: "2026-03-05",
  },
];

// ─── CERTIFICATIONS ───────────────────────────────────────────────────────────

export const certifications: Certification[] = [
  {
    title: "Annual Conference of the European Forum of the Legal Professions",
    issuer: "Academy of European Law (ERA)",
    year: "2025",
    description:
      "Participated in the Annual Conference of the European Forum of the Legal Professions, organised by the Academy of European Law (ERA), focusing on contemporary legal developments and professional issues affecting legal practitioners across Europe.\n\nTraining Hours: 6.18 hours",
    type: "certificate",
  },
  {
    title: "Current Issues in Administrative Law and Procedure",
    issuer: "Mykolas Romeris University (MRU) Law School",
    year: "2026",
    description:
      "Venue: Seimas of the Republic of Lithuania, Vilnius\n\nParticipated in the scientific-practical conference \"Current Issues in Administrative Law and Procedure,\" organised by the Mykolas Romeris University (MRU) Law School. The conference, held at the Parliament of the Republic of Lithuania, explored recent developments, emerging challenges, and judicial practice in administrative law and administrative procedure.\n\nDuration: 6 academic hours",
    type: "certificate",
  },
  {
    title: "Understanding Corruption",
    issuer: "Special Investigation Service of the Republic of Lithuania (STT)",
    year: "2026",
    description:
      "Successfully completed the professional training \"Understanding Corruption,\" conducted by the Special Investigation Service of the Republic of Lithuania (STT), Lithuania's national anti-corruption authority. The programme examined the legal framework of corruption prevention, integrity, ethical standards, and anti-corruption principles within the Lithuanian public sector.\n\nDuration: 1 academic hour",
  },
  {
    title: "Civil Resistance",
    issuer: "Mobilisation and Civil Resistance Department under the Ministry of National Defence of the Republic of Lithuania",
    year: "2026",
    description:
      "Professional training organised by the Mobilisation and Civil Resistance Department under the Ministry of National Defence of the Republic of Lithuania, focusing on the principles of civil resistance, civic preparedness, national resilience, and the role of society in responding to national emergencies and security challenges.",
    type: "certificate",
    type: "certificate",
  },
];
