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
  {
    slug: "legal-limbo-lithuanian-immigration-law",
    title: "Legal Limbo in Lithuanian Immigration Law: When a Person Cannot Be Deported but Cannot Regularise Their Status",
    date: "2026-07-07",
    category: "Immigration Law",
    excerpt:
      "The Foreigner Registration Certificate (SURP) is a welcome reform, but what happens when a foreign national cannot lawfully be deported from Lithuania, yet has no legal mechanism to regularise their immigration status?",
    readTime: "9 min read",
    content: `## Introduction

The recent introduction of the Foreigner Registration Certificate (SURP) marks an important development in Lithuanian immigration law. Although SURP is not a residence permit, it provides temporary legal recognition to certain foreign nationals while their immigration status is being examined.

Its introduction reflects an important principle: not every immigration case fits neatly within the traditional categories of lawful residence or unlawful stay. In some situations, the law recognises that a person's legal position remains unresolved and therefore requires temporary administrative recognition.

While this reform is a welcome step, it also highlights a more fundamental question.

**What happens when a foreign national cannot lawfully be deported from Lithuania, yet has no legal mechanism to regularise their immigration status?**

In my view, this is one of the more complex issues currently facing Lithuanian immigration law. It raises questions not only about immigration legislation but also about legal certainty, good administration, and the protection of fundamental rights.

## A Situation That Reveals a Legal Contradiction

Consider the following scenario.

A foreign national has remained in Lithuania without lawful immigration status for several years. The Migration Department refuses to issue a residence permit and adopts a decision ordering deportation.

The individual challenges that decision before the courts.

The Supreme Administrative Court of Lithuania concludes that deportation would disproportionately interfere with the person's right to respect for family life. The individual is legally married to a Lithuanian citizen, and together they are raising a minor child who is also a Lithuanian citizen.

The Court therefore annuls the deportation decision.

At first glance, this appears to resolve the case.

In reality, however, it creates another problem.

Although deportation is no longer legally possible, the individual is still regarded as unlawfully present under the Law on the Legal Status of Aliens. At the same time, Lithuanian legislation generally requires residence permit applications to be submitted either while the person is lawfully present or from outside Lithuania.

The result is a legal contradiction.

The individual cannot be deported, yet has no realistic legal pathway to regularise their immigration status.

## A State of Permanent Legal Uncertainty

This situation places the individual in an unusual legal position.

- They cannot lawfully be removed because doing so would violate protected family life.
- They cannot regularise their immigration status because the existing legislative framework does not provide an in-country procedure in these circumstances.
- Leaving Lithuania voluntarily may separate them from their Lithuanian family and could trigger immigration consequences that undermine the very family life protected by the Court.
- Remaining in Lithuania means continuing to live without lawful immigration status despite a final judicial decision preventing deportation.

This is more than an unfortunate consequence of immigration legislation.

It represents a situation in which different legal rules operate correctly on their own, yet together produce a result that appears difficult to reconcile.

## The Role of the Foreigner Registration Certificate (SURP)

The introduction of SURP demonstrates that Lithuanian immigration law increasingly recognises the need to document temporary legal situations.

SURP is not intended to grant permanent residence rights. Instead, it acknowledges that certain individuals occupy a legally recognised temporary position while administrative procedures continue.

Among those who may receive SURP are asylum applicants, unaccompanied minors, victims of trafficking during recovery periods, applicants awaiting decisions on residence permits, and other categories specifically provided for by law.

The underlying idea is straightforward.

Where a person's legal position has not yet been finally resolved, the legal system may provide temporary documentary recognition instead of leaving the individual entirely outside the administrative framework.

This raises an interesting legal question.

**Could the same principle apply where the highest administrative court has already concluded that deportation is not legally permissible?**

## Does the Current Framework Leave a Legislative Gap?

The situation described above appears to share several important characteristics with the purpose behind SURP.

- The individual's legal status remains unresolved.
- Their continued presence in Lithuania is supported not merely by administrative discretion but by a final judgment of the Supreme Administrative Court.
- The State has accepted that removal cannot lawfully take place.
- Yet no administrative mechanism currently exists that recognises this temporary legal reality.

In my opinion, this raises a legitimate question as to whether Lithuanian immigration law contains a legislative gap rather than simply producing an unfavourable outcome in an individual case.

The issue is not whether the person should automatically receive a residence permit.

Rather, it is whether the legal system should recognise that some temporary form of lawful administrative status may be necessary while this exceptional situation is resolved.

## Article 8 of the European Convention on Human Rights

The discussion should also be considered in light of Article 8 of the European Convention on Human Rights, which protects the right to respect for private and family life.

The European Court of Human Rights has repeatedly recognised that Article 8 may impose positive obligations on States, requiring them not only to avoid unjustified interference with family life but also, in appropriate circumstances, to adopt measures that make those rights effective in practice.

Where a State accepts that deportation would violate Article 8, but simultaneously maintains procedural rules that permanently prevent any possibility of regularising immigration status, an important legal question arises.

**Has the State fully discharged its positive obligations?**

Protecting family life may require more than simply refraining from deportation.

In some circumstances, effective protection may also require an accessible legal mechanism capable of resolving the individual's immigration status.

## The Principle of Good Administration

This issue also engages the principle of good administration, a principle recognised in both European Union law and Lithuanian administrative law.

Administrative authorities should seek to provide procedures capable of resolving legal conflicts rather than allowing individuals to remain indefinitely in situations of uncertainty.

A system that prevents lawful residence, prohibits deportation, and offers no effective administrative pathway risks undermining legal certainty, proportionality, and the effective implementation of judicial decisions.

## Possible Approaches

Several possible solutions could be considered.

1. **Broader interpretation of SURP** — extending the existing framework where a final court judgment prevents deportation but immigration status remains unresolved.
2. **Legislative reform** — creating an exceptional in-country procedure allowing residence permit applications in cases where removal has become legally impossible because of protected family life.
3. **Judicial development** — recognising that requiring departure solely to submit a residence permit application may, in exceptional circumstances, be disproportionate and incompatible with Article 8 of the European Convention on Human Rights.

Each of these approaches would seek to address the same underlying problem: ensuring that judicial protection of fundamental rights is supported by effective administrative procedures.

## Conclusion

The introduction of the Foreigner Registration Certificate represents a positive development in Lithuanian immigration law and demonstrates an increasing willingness to recognise temporary legal situations that fall outside traditional immigration categories.

At the same time, cases in which deportation is judicially prohibited while regularisation remains legally unavailable reveal a question that, in my view, deserves further discussion.

When the highest administrative court concludes that a person cannot lawfully be removed because of protected family life, yet immigration legislation offers no practical mechanism for resolving that person's status, the result is a state of legal uncertainty that is difficult to reconcile with the principles of legal certainty, proportionality, good administration, and the effective protection of fundamental rights.

Whether the answer ultimately lies in a broader interpretation of the SURP framework, legislative reform, or future judicial development remains to be seen.

What is clear, however, is that this issue extends beyond the circumstances of a single individual. It invites a broader discussion about how immigration law should respond when the protection of fundamental rights and administrative procedure no longer operate in harmony.

---

*The views expressed in this article are those of the author and are intended to contribute to academic and professional discussion. They do not constitute legal advice or represent the views of any institution with which the author is affiliated.*`,
  },
  {
    slug: "when-political-speech-lawful-ethical-questions",
    title: "When Political Speech Is Lawful but Still Raises Ethical Questions",
    date: "2026-07-08",
    category: "Constitutional Law",
    excerpt:
      "Freedom of expression is a cornerstone of democracy, but lawfulness is not the only question. This article examines the distinction between legal protection and ethical responsibility in political speech.",
    readTime: "5 min read",
    content: `## Introduction

This article examines legal and constitutional principles arising from a publicly available statement made by a political figure. The discussion is intended solely as legal commentary on matters of public interest and should not be understood as support for or opposition to any political party, candidate or public office holder. The views expressed are those of the author alone.

Freedom of expression is one of the cornerstones of every democratic society. Political speech enjoys particularly strong protection because open debate—including controversial and unpopular views—is essential to democratic life.

For that reason, legal analysis should not begin and end with a single question: Was the statement lawful?

## A Recent Public Debate

A recent public debate in Lithuania illustrates why this distinction matters.

![Screenshot of the social media post by Vytautas Sinica referenced in the discussion.](/__l5e/assets-v1/165e6a98-7d5b-4786-9667-43512fe56010/sinica-post.png)

Lithuanian Member of Parliament and candidate for Mayor of Vilnius, Vytautas Sinica, recently published a social media post calling for the deportation of “Africans” and subsequently stated publicly that there was “no trace of racism” in the post. The publication generated considerable public discussion, with some viewing it as an exercise of political free expression and others questioning whether the language reflected the standards expected of someone seeking elected office.

Whatever one’s political views, the legal questions raised by this discussion extend well beyond the facts of a single case. They invite a broader examination of the relationship between freedom of expression, democratic values and the ethical responsibilities of those who seek public office.

## Law and Ethics Are Not the Same Question

From a legal perspective, these are not necessarily the same question.

Under the European Convention on Human Rights, restrictions on political expression are interpreted narrowly. The European Court of Human Rights has consistently recognised that political speech receives one of the highest levels of protection within a democratic society. As a result, speech that many people consider offensive, provocative or insensitive will not automatically amount to unlawful hate speech.

That, however, does not end the discussion.`,
  },
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
    type: "certificate",
  },
  {
    title: "Civil Resistance",
    issuer: "Mobilisation and Civil Resistance Department under the Ministry of National Defence of the Republic of Lithuania",
    year: "2026",
    description:
      "Professional training organised by the Mobilisation and Civil Resistance Department under the Ministry of National Defence of the Republic of Lithuania, focusing on the principles of civil resistance, civic preparedness, national resilience, and the role of society in responding to national emergencies and security challenges.",
    type: "certificate",
  },
  {
    title: "Mobilisation Preparedness",
    issuer: "Mobilisation and Civil Resistance Department under the Ministry of National Defence of the Republic of Lithuania",
    year: "2026",
    description:
      "Professional training organised by the Mobilisation and Civil Resistance Department under the Ministry of National Defence of the Republic of Lithuania, examining the legal and practical framework of mobilisation preparedness, institutional responsibilities, and national readiness during emergency and mobilisation situations.",
    type: "certificate",
  },
];
