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
  type: "bar" | "degree" | "certificate" | "award";
};

// ─── BLOG POSTS ──────────────────────────────────────────────────────────────

export const blogPosts: BlogPost[] = [
  {
    slug: "residence-permit-lithuania-guide",
    title: "A Complete Guide to Temporary Residence Permits in Lithuania",
    date: "2026-05-14",
    category: "Residence",
    readTime: "8 min read",
    excerpt:
      "Everything you need to know about applying for a temporary residence permit in Lithuania — from eligibility to documents to expected timelines.",
    content: `
## Who Can Apply?

Lithuania offers temporary residence permits (TRP) to non-EU nationals who have a valid reason to stay in the country for longer than 90 days within a 180-day period. Common grounds include:

- **Employment** — You have a confirmed job offer or work contract with a Lithuanian employer
- **Business** — You are establishing or managing a company in Lithuania
- **Family** — You are reuniting with a spouse, child, or parent who is a Lithuanian resident or citizen
- **Studies** — You are enrolled in a Lithuanian university or academic institution
- **Other grounds** — Humanitarian reasons, long-term visa holders, and more

## Required Documents

The exact document list varies depending on your grounds, but the core set almost always includes:

1. Completed application form (D1 form)
2. Valid passport (at least 6 months validity beyond your intended stay)
3. Biometric photo
4. Proof of the grounds (e.g., work contract, university acceptance letter)
5. Proof of accommodation in Lithuania
6. Proof of sufficient financial means
7. Health insurance valid in Lithuania
8. State fee payment receipt

All documents in a foreign language must be officially translated into Lithuanian and notarised.

## The Application Process

**Step 1: Obtain a National D Visa (if required)**
Most non-EU nationals need to enter Lithuania on a National D Visa before applying for a TRP from within the country. You apply for this at the Lithuanian embassy or consulate in your home country.

**Step 2: Submit the TRP Application**
Once in Lithuania, you submit your application in person at the Migration Department (Migracijos departamentas) in Vilnius or one of its regional branches.

**Step 3: Biometric Registration**
You will be called in for fingerprinting and a photograph. This is required for the residence permit card.

**Step 4: Decision**
The Migration Department has up to 4 months to process a standard application. In practice, employment-based permits are often processed faster — within 6–8 weeks.

**Step 5: Receive Your Permit Card**
Once approved, you collect your residence permit card at the Migration Department.

## Common Reasons for Refusal

The most frequent reasons for TRP refusals include:

- Incomplete or inconsistent documentation
- Failure to prove sufficient financial means
- Criminal record or security concerns
- Misrepresentation in the application

If your application is refused, you have the right to appeal. The appeal must be filed within 14 days of receiving the refusal notice.

## Important Notes

- A temporary residence permit is typically issued for 1–2 years and can be extended
- After 5 years of continuous legal residence, you may be eligible to apply for a permanent residence permit
- Holders of a Lithuanian TRP can travel within the Schengen Area for up to 90 days within 180 days

If you have questions about your specific situation or need help preparing your application, I offer a free 30-minute consultation to assess your case.
    `,
  },
  {
    slug: "visa-refusal-what-to-do",
    title: "Your Visa Was Refused. Here's What to Do Next.",
    date: "2026-04-28",
    category: "Appeals",
    readTime: "6 min read",
    excerpt:
      "A visa or residence permit refusal is not the end of the road. Understanding your rights and the appeal process is the first step to reversing the decision.",
    content: `
## Don't Panic — A Refusal Is Not Final

Receiving a visa or residence permit refusal can feel devastating, especially when a job, a family reunion, or a new life chapter is on the other side of it. But a refusal is a legal decision, and legal decisions can be challenged.

In Lithuania, every applicant who receives a negative decision from the Migration Department has the right to appeal. This right is protected by Lithuanian administrative law.

## Step 1: Read the Refusal Notice Carefully

The Migration Department is required by law to provide written reasons for every refusal. This notice is your most important document. Read it carefully and identify:

- **The specific legal grounds** cited for the refusal
- **The deadline** for filing an appeal (usually 14 days from the date you received the decision)
- **The body** to which the appeal must be submitted

## Step 2: Don't Miss the Appeal Deadline

This is critical. In most cases, you have **14 calendar days** from the date of notification to file an administrative appeal with the Migration Department, or **30 days** to file a complaint directly with the Administrative Court. Missing these deadlines can permanently close the door on your appeal.

If you are close to the deadline, contact a lawyer immediately.

## Step 3: Understand the Grounds for Appeal

A successful appeal requires more than simply disagreeing with the decision. You need to demonstrate one or more of the following:

- The Migration Department misapplied the law
- Your documentation was complete and was incorrectly assessed
- The decision was procedurally flawed
- New evidence is available that was not considered

## Step 4: Gather Additional Evidence

If the refusal cited missing or insufficient documentation, the appeal is your opportunity to supplement your file. This might include:

- Additional proof of financial means
- Clarifying letters from employers
- Updated or corrected translations
- Statements from Lithuanian residents who can confirm your circumstances

## What Happens During the Appeal?

An administrative appeal is first reviewed by the Migration Department itself. If they uphold the refusal, you can escalate to the Administrative Court of Lithuania, which independently reviews the case.

During this process, you are generally entitled to remain in Lithuania if your valid status has not expired — but this is situation-dependent and should be confirmed with a lawyer.

## My Success Rate with Refusal Cases

Appeals and refusal cases form a significant part of my practice. I have successfully overturned refusals across a range of case types — employment visas, family reunification, and complex multi-ground applications.

The key is acting fast and building a structured, documented legal argument. If you have received a refusal, contact me as soon as possible so we can assess your options before any deadline passes.
    `,
  },
  {
    slug: "family-reunification-lithuania",
    title: "Family Reunification in Lithuania: Bringing Your Loved Ones",
    date: "2026-04-05",
    category: "Family",
    readTime: "7 min read",
    excerpt:
      "If you hold a Lithuanian residence permit or citizenship, you have the right to bring qualifying family members to live with you. Here's how the process works.",
    content: `
## Who Qualifies as a Family Member?

Lithuanian immigration law recognises the following as qualifying family members for reunification purposes:

- **Spouse or registered partner**
- **Minor children** (under 18) of the permit holder or their spouse
- **Adult dependent children** who are unable to support themselves due to health reasons
- **Dependent parents**, in certain circumstances

Same-sex partnerships are recognised for reunification purposes in Lithuania if the partnership was registered in a country where such registration is legally valid.

## Requirements for the Sponsor

To sponsor a family member's residence in Lithuania, you must:

1. Hold a valid Lithuanian residence permit (temporary or permanent) or Lithuanian citizenship
2. Have been legally residing in Lithuania for at least 2 years (with some exceptions)
3. Demonstrate sufficient financial means to support yourself and your family member
4. Have adequate accommodation

The income threshold is set periodically by Lithuanian authorities and is expressed as a multiple of the minimum monthly salary.

## The Application Process

**For the family member:**

1. Apply for a National D (family reunification) visa at the Lithuanian embassy in their country
2. Enter Lithuania on the D visa
3. Submit a residence permit application at the Migration Department within 30 days of arrival
4. Attend biometric registration
5. Await decision (typically 2–4 months)

**Documents typically required:**

- Marriage certificate (for spouse) or birth certificate (for children) — officially translated and apostilled
- Proof of sponsor's residence and status in Lithuania
- Proof of sponsor's income and accommodation
- Health insurance for the family member
- Clean criminal record certificate

## Children and Education

Children who receive a Lithuanian residence permit on family reunification grounds have the right to attend Lithuanian public schools, which are free of charge. There are also international and English-language private schools in Vilnius for families transitioning.

## Path to Permanent Residence

Family members granted a temporary residence permit can apply for a permanent residence permit after 5 years of continuous legal residence in Lithuania. Continuous residence means not leaving Lithuania for more than 10 months in total, and not more than 6 consecutive months, during the 5-year period.

## Important: Don't Start the Process Without Advice

Family reunification cases look straightforward but frequently hit complications around income thresholds, document apostillation, and timing. Starting the process with correct documentation from the beginning significantly reduces the risk of delays or refusals.

I offer a free consultation to walk through your specific situation before you commit to any steps.
    `,
  },
  {
    slug: "eu-blue-card-lithuania",
    title: "The EU Blue Card: Working in Lithuania as a Skilled Professional",
    date: "2026-03-18",
    category: "Work",
    readTime: "5 min read",
    excerpt:
      "The EU Blue Card is a fast-track residence permit for highly qualified non-EU professionals. Here's what you need to qualify and how to apply in Lithuania.",
    content: `
## What is the EU Blue Card?

The EU Blue Card is a work and residence permit available across most EU member states, designed specifically for highly qualified non-EU nationals. It offers a faster processing time, easier renewal conditions, and — crucially — a path to EU-wide mobility after 18 months.

Lithuania implemented the revised EU Blue Card Directive in 2023, expanding eligibility and improving conditions for applicants.

## Eligibility Requirements

To qualify for an EU Blue Card in Lithuania, you must:

1. **Hold a qualifying job offer** — A signed work contract or binding job offer from a Lithuanian employer for a position lasting at least 6 months
2. **Meet the salary threshold** — Your gross annual salary must be at least **1.5× the average annual gross salary** in Lithuania (approximately €35,000–€40,000 per year as of 2026, adjusted annually)
3. **Hold a higher education qualification** — A university degree (Bachelor's or higher) or at least 5 years of equivalent professional experience in highly regulated professions such as IT, engineering, or healthcare
4. **Have valid travel documents** — Passport valid for the duration of the permit

## How to Apply

1. Your employer submits a notification to the Lithuanian Employment Service (LDB) — in most cases, a labour market test is no longer required for Blue Card applicants
2. You apply at the Lithuanian embassy or consulate in your country for a National D visa, submitting Blue Card documentation
3. After entering Lithuania, you (or your employer) may submit the Blue Card application directly to the Migration Department
4. Processing time: **30–90 days**

## Benefits of the EU Blue Card

- **2-year permit**, renewable
- **Family members** can join you in Lithuania immediately — they also receive work authorisation
- After **18 months**, you may relocate to another EU member state under simplified conditions
- After **5 years** of legal EU residence (at least 2 of which in Lithuania), you may apply for an EU Long-Term Residence Permit

## Compared to a Standard Work Permit

| | EU Blue Card | Standard Work Permit |
|---|---|---|
| Salary requirement | High (1.5× average) | Minimum wage applies |
| Labour market test | Generally exempt | May be required |
| Family work rights | Immediate | Separate application |
| EU mobility | Yes (after 18 months) | No |
| Processing time | 30–90 days | Up to 4 months |

The EU Blue Card is the most advantageous route for qualified professionals. If you meet the salary and qualification thresholds, it is almost always the better option.
    `,
  },
  {
    slug: "lithuanian-citizenship-guide",
    title: "Becoming a Lithuanian Citizen: The Naturalisation Path Explained",
    date: "2026-02-22",
    category: "Citizenship",
    readTime: "9 min read",
    excerpt:
      "Naturalisation as a Lithuanian citizen is possible after 10 years of legal residence. Here's a detailed overview of the requirements, exceptions, and process.",
    content: `
## The Standard Path: 10 Years of Residence

The primary route to Lithuanian citizenship for non-EU nationals is naturalisation based on long-term legal residence. The key requirements are:

1. **10 years of continuous, legal residence** in Lithuania
2. Permanent residence permit holder (you must have converted from TRP to PRP before applying)
3. Passed the **Lithuanian language exam** (B1 level minimum)
4. Passed the **Lithuanian Constitution exam**
5. **Renounced your previous citizenship** (Lithuania generally does not permit dual citizenship, with specific exceptions)
6. Sufficient and stable income
7. No serious criminal record

## The 5-Year Exception

For certain categories of applicants, the residence requirement is reduced to **5 years**:

- Spouses of Lithuanian citizens (married for at least 3 years)
- Persons who were citizens of Lithuania before 1940 or descendants of such persons who re-acquired Lithuanian citizenship
- Persons granted refugee status or subsidiary protection in Lithuania

## The Dual Citizenship Exception

Lithuania's constitutional ban on dual citizenship has important exceptions. You **may** hold dual citizenship if you:

- Acquired foreign citizenship **involuntarily** (e.g., through marriage without choosing to naturalise)
- Were a citizen of Lithuania before 1990 and emigrated, acquiring another citizenship while stateless
- Are a descendant of Lithuanian citizens who emigrated before 1990

This is a nuanced area of law. Many people assume they must give up their current citizenship — some do not. An individualised assessment is essential.

## The Language Requirement

The Lithuanian language exam (B1 level) is administered by the State Language Inspectorate. It tests reading, writing, speaking, and listening. Preparation resources are available online, and language schools in Vilnius offer courses specifically designed for naturalisation applicants.

Exemptions apply for those over 65 years of age and for persons with certain documented health conditions.

## Timeline

From beginning the naturalisation process to receiving your passport, expect the process to take **12–24 months**, including:

- Gathering and apostilling all documents
- Language and Constitution exam preparation and testing
- Processing by the Migration Department and Presidential Commission
- Citizenship ceremony (if applicable)

## Is It Worth It?

For most long-term residents, Lithuanian citizenship offers significant advantages: EU freedom of movement across 27 countries, visa-free access to 180+ countries, full political rights, and security of status with no renewal requirements.

The process is demanding, but for those who qualify, the outcome is transformative.

I offer full naturalisation case management — from eligibility assessment through to ceremony. Book a consultation to discuss your situation.
    `,
  },
  {
    slug: "working-remotely-lithuania",
    title: "Digital Nomads and Remote Workers: Your Options in Lithuania",
    date: "2026-01-30",
    category: "Work",
    readTime: "5 min read",
    excerpt:
      "Lithuania has become an increasingly attractive destination for remote workers. Here's a breakdown of your legal options if you want to live and work remotely from Vilnius.",
    content: `
## The Remote Work Boom and Lithuanian Immigration Law

Lithuania has seen a significant influx of remote workers and digital nomads since 2021. Vilnius, with its fast internet, affordable living costs, rich culture, and central EU location, has become one of the most attractive cities in Europe for location-independent professionals.

But how do you stay legally? The answer depends on your nationality and employment situation.

## Option 1: EU/EEA Citizens — No Permit Needed

If you are a citizen of an EU or EEA country, you have the right to live and work in Lithuania without any visa or permit. You should register your residence with the municipality if staying longer than 90 days, and you are entitled to the same rights as Lithuanian citizens in most respects.

## Option 2: Non-EU Citizens — Visa + Permit Required

If you are a non-EU national, you cannot legally work remotely from Lithuania on a standard 90-day tourist stay. You need a legal basis for residence.

**Your main options:**

### Temporary Residence Permit — Self-Employment Grounds
If you register as a self-employed person (individuali veikla) or establish a single-person company in Lithuania, you can apply for a TRP on business/self-employment grounds. This is the most common route for freelancers and remote workers.

Requirements include:
- Registered business activity in Lithuania
- Proof of sufficient income (minimum threshold applies)
- Proof of accommodation
- Health insurance

### Startup Visa (for Entrepreneurs)
Lithuania has a Startup Visa programme administered by Startup Lithuania. If your remote work involves a scalable tech or innovation product, you may qualify. The programme requires approval from Startup Lithuania before you can apply for the visa.

### Employment-Based Permit from a Foreign Employer
If your employer is willing to establish a legal entity or branch in Lithuania, you could be employed by that entity locally. This is less common but offers full employment rights.

## Practical Considerations

- **Tax residency**: If you spend more than 183 days in Lithuania in a calendar year, you are likely a Lithuanian tax resident. This comes with obligations and rights — including access to the healthcare system.
- **Social insurance**: Self-employed residents must contribute to the social insurance system (Sodra), which grants access to health coverage, sick pay, and pension accrual.
- **Banking**: Having a Lithuanian residence permit makes opening a bank account significantly easier.

## Is Vilnius Worth It?

From my perspective as a lawyer who has helped hundreds of foreign nationals settle here — yes, for the right person. The city offers a very high quality of life, a growing English-speaking expat community, and genuine warmth. The bureaucratic processes are manageable with the right guidance.

If you're considering making the move, I'm happy to assess your specific situation in a free consultation.
    `,
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
    title: "Member of the Lithuanian Bar Association",
    issuer: "Lietuvos advokatūra",
    year: "2015",
    description:
      "Full membership and practising certificate with the Lithuanian Bar Association, authorising practice as an attorney in Lithuania.",
    type: "bar",
  },
  {
    title: "Master of Laws (LLM) — International and European Law",
    issuer: "Vilnius University Faculty of Law",
    year: "2013",
    description:
      "Specialisation in EU free movement law, human rights, and international migration frameworks.",
    type: "degree",
  },
  {
    title: "Bachelor of Laws (LLB)",
    issuer: "Vilnius University Faculty of Law",
    year: "2011",
    description:
      "Foundation in Lithuanian civil, administrative, and constitutional law.",
    type: "degree",
  },
  {
    title: "Certificate in EU Immigration and Asylum Law",
    issuer: "European Law Academy (ERA), Trier",
    year: "2017",
    description:
      "Intensive professional training in EU immigration directives, asylum procedures, and the Dublin Regulation.",
    type: "certificate",
  },
  {
    title: "Recognised Expert — Migration Law",
    issuer: "Lithuanian Bar Association — Immigration Law Committee",
    year: "2020",
    description:
      "Designated expert status in immigration and foreign nationals law by the Lithuanian Bar Association specialist committee.",
    type: "award",
  },
  {
    title: "Certificate in Human Rights Law",
    issuer: "Council of Europe Human Rights Education for Legal Professionals",
    year: "2018",
    description:
      "Completed HELP (Human Rights Education for Legal Professionals) programme in human rights standards and legal practice.",
    type: "certificate",
  },
];
