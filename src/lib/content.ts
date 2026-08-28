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
    slug: "employer-missed-deadline-reapply-residence-permit-lithuania",
    title: "Your Employer Missed a Migration Department Deadline, Could You Be Unable to Reapply for a Residence Permit for a Year?",
    date: "2026-08-24",
    category: "Immigration Law",
    excerpt:
      "A refusal under Article 35(1)(13) of the UTPĮ can trigger a one-year ban on reapplying for a residence permit in Lithuania — even when the missed deadline was the employer's fault.",
    readTime: "7 min read",
    content: `By Ieva Bakare

Sometimes the most interesting legal questions arise not from the decision itself, but from what happens afterwards.

I recently came across such a situation in the context of a temporary residence permit application in Lithuania.

A foreign national had applied for a temporary residence permit on the basis of employment. During the assessment of the application, the Migration Department asked the inviting company to provide additional documents and information concerning its business activities.

The company did not provide everything within the deadline set by the Migration Department. It did, however, request additional time to submit the information.

The residence permit application was ultimately refused under Article 35(1)(13) of the Law on the Legal Status of Aliens (UTPĮ).

On its own, that may not appear particularly unusual. If information requested during an administrative procedure is not provided within the prescribed time, there may naturally be consequences.

What caught my attention was something else: the consequence that followed for the foreign national.

## The refusal does not end with one application

Under Article 35(2) of the UTPĮ, where a residence permit is refused on certain grounds, the foreign national cannot simply correct the problem and immediately submit a new application.

A one year waiting period applies.

In practical terms, the company's failure to provide the requested documents on time meant that the foreign national was not only unsuccessful with that particular application. The person also became unable to submit a new residence permit application for twelve months.

That is a significant consequence, particularly when the failure itself was attributable to the inviting company rather than to the foreign national.

But the situation becomes even more interesting when this ground for refusal is compared with another one contained in the same law.

## What if the documents were actually false?

Article 35(1)(19) deals with a rather different situation.

It concerns cases where information submitted by the natural or legal person inviting the foreign national does not correspond to reality, or where illegally obtained or forged documents have been submitted.

Intuitively, one might expect such circumstances to carry at least the same consequences as simply failing to provide requested information on time.

Yet Article 35(2) produces an unusual result.

Where the refusal is based on Article 35(1)(13), the one-year restriction applies.

Where the refusal arises under Article 35(1)(19) because the inviting person provided information that did not correspond to reality or submitted illegally obtained or forged documents, that same one-year restriction does not apply.

The foreign national may therefore submit another application without waiting twelve months.

And this is where, in my view, the legal regulation becomes difficult to reconcile.

## A less serious failure, but a more serious practical consequence?

Consider the two situations side by side.

In the first, an employer fails to provide documents requested by the Migration Department within the prescribed deadline.

The residence permit is refused and the foreign national must wait a year before applying again.

In the second, the inviting person provides information that does not correspond to reality or submits illegally obtained or forged documents.

The residence permit may again be refused, but the foreign national is not subject to the same one-year restriction.

The difficulty is obvious.

The failure to submit information on time may be regarded as a procedural failure. Providing false information or forged documents is, by its nature, something considerably different.

Yet when we look at the practical consequences for the foreign national, the procedural failure can leave them in the more difficult position.

This raises a legitimate question: are the consequences sufficiently aligned with the nature of the conduct that caused the refusal?

## The issue is not whether deadlines should matter

Of course, this should not be understood as suggesting that employers can simply disregard requests from the Migration Department.

They cannot.

The Migration Department must be able to request information necessary to assess an application, establish deadlines and make a decision where the requested information is not provided.

The more difficult question is what should happen to the foreign national afterwards.

Where an employer misses a deadline, should that automatically prevent the foreign national from making another residence permit application for an entire year?

And if the answer is yes, how should that be reconciled with a situation in which the inviting person actually provides information that is found to be false or submits forged documents, yet the foreign national is not subject to the same twelve-month restriction?

That is where I see a possible inconsistency in the current legal framework.

## Who actually bears the consequence?

There is another aspect that should not be overlooked.

The person facing the twelve month restriction is the foreign national.

Yet in the situation considered here, it was the inviting company that had been asked to provide information concerning its activities, clients, contracts and other aspects of its business.

This makes the practical effect of the rule particularly significant.

A foreign national may find themselves unable to submit another residence permit application for a year because a third party failed to comply with an administrative deadline.

Whether that outcome is sufficiently proportionate, particularly when compared with the exceptions already provided elsewhere in Article 35, is in my view a question deserving further legal discussion.

## A possible gap in the regulation?

I would be cautious about suggesting that the refusal itself was necessarily unlawful simply because the consequence appears severe. These are two separate questions.

The Migration Department may have a legal basis to refuse an application where documents required for its assessment are not submitted.

The broader concern lies in what Article 35(2) automatically attaches to that refusal.

When one ground leads to a twelve-month inability to reapply, while another ground involving potentially more serious conduct does not, it is reasonable to ask whether the distinction reflects a deliberate and sufficiently balanced legislative choice.

Perhaps the issue is therefore not the institution of refusal itself.

Perhaps it lies in the way the law differentiates or does not sufficiently differentiate between the consequences attached to different grounds for refusal.

For the foreign national concerned, this is far from an abstract legal question.

It can mean twelve months without the possibility of submitting a new temporary residence permit application in Lithuania.

And that is why I believe the question deserves attention:

Should a company's failure to submit documents on time really result in a one year restriction for the foreign national when the same restriction does not apply where the inviting person has submitted information that does not correspond to reality or forged documents?

The current wording of the law appears to produce precisely that result.

Whether this represents an intentional legislative distinction or a gap that should be reconsidered is a question worth discussing.

## Legal provisions discussed

- Article 35(1)(13) of the Law of the Republic of Lithuania on the Legal Status of Aliens (UTPĮ)
- Article 35(1)(19) of the UTPĮ
- Article 35(2) of the UTPĮ

*The views expressed in this article are those of the author and are intended to contribute to legal and professional discussion. This article is provided for general informational purposes and does not constitute individual legal advice.*`,
  },
  {
    slug: "can-you-lose-permanent-residence-permit-forgot-language-lithuania",
    title: "CAN YOU LOSE YOUR PERMANENT RESIDENCE PERMIT IN LITHUANIA BECAUSE YOU FORGOT THE LANGUAGE?",
    date: "2026-08-19",
    category: "Immigration Law",
    excerpt:
      "He passed the Lithuanian language exam and held a valid certificate. Years later, the Migration Department revoked his permanent residence permit. Was that enough to prove deception?",
    readTime: "Video",
    content: `By Ieva Bakare

He had already passed the Lithuanian language exam and had a valid certificate.

Years later, he struggled to answer simple questions in Lithuanian and the Migration Department revoked his permanent residence permit.

So, was that enough to prove he had obtained his permit through deception?

Watch the video to find out what the Supreme Administrative Court decided.

@[video](https://www.youtube.com/embed/Agh6NJ9Dpo8)

---

*The views expressed in this article are those of the author and are intended to contribute to legal and professional discussion. This article is for general informational purposes and does not constitute individual legal advice. Each residence permit case is assessed according to its individual circumstances.*`,
  },
  {
    slug: "study-residence-permit-interview-refusal-lithuania",
    title: "Study Residence Permits in Lithuania: Can an Interview Be Enough to Refuse an Application?",
    date: "2026-08-18",
    category: "Immigration Law",
    excerpt:
      "A Supreme Administrative Court judgment clarifies that an unsatisfying interview answer is not automatically a false answer — and that refusal decisions must rest on evidence, not assumptions.",
    readTime: "7 min read",
    content: `By Ieva Bakare

For foreign students applying for a temporary residence permit in Lithuania, the interview with the Migration Department can be an important part of the application process.

Applicants may be asked why they chose Lithuania, why they selected a particular university, what they know about their study programme and what they intend to do with the qualification.

But what happens when the authorities are not satisfied with the answers?

A case examined by the Supreme Administrative Court of Lithuania (LVAT) provides an interesting example of how interview answers should be assessed before they are used as a basis for refusing a study-based residence permit.

## The residence permit was refused after an interview

The case concerned a foreign national who had applied for a temporary residence permit in Lithuania for the purpose of studies.

As part of the procedure, she participated in a remote interview with the Migration Department.

Following that interview, the Migration Department refused to issue the permit. It relied on Article 35(1)(2) and (12) of the Law on the Legal Status of Aliens.

The Department considered that the information provided by the applicant did not correspond to reality and that there were serious grounds to believe that a risk of illegal migration could arise.

A significant part of that conclusion came from the applicant's answers during the interview.

According to the Migration Department, she had not been able to properly explain why she wanted to study in Lithuania, why she had chosen the particular university or why she had selected that specific programme.

The applicant challenged the refusal.

## The first-instance court agreed with the Migration Department

Initially, the applicant was unsuccessful.

The first-instance court dismissed her complaint and agreed that her interview answers had not adequately explained the reasons and circumstances behind her decision to study in Lithuania.

In particular, the court considered that she had not sufficiently substantiated her intention to come to Lithuania to study at the chosen institution and in the selected programme.

When the case reached LVAT, however, the Court looked more closely at what had actually been said during the interview.

That made a difference.

## What did the interview actually show?

LVAT examined the transcript of the remote interview rather than relying only on the conclusions that had been drawn from it.

The Court did not find that the applicant's answers established that she had provided information which did not correspond to reality, attempted to mislead the Migration Department or intended to legalise her stay in Lithuania for some purpose other than studying.

One point is particularly worth noting.

During the interview, the Migration Department employee had to repeat or clarify some questions. That fact had contributed to concerns about the applicant's answers.

LVAT did not consider this sufficient.

The need to repeat or clarify a question does not automatically mean that an applicant has failed to understand it, avoided answering it or provided information that is unclear or illogical.

What mattered was the substance of the answers that followed.

After looking at the transcript, the Court considered that the applicant had actually provided sufficiently detailed responses in light of the questions she had been asked.

## Her answers were not perfect

The judgment is also interesting because LVAT did not suggest that every answer given during the interview was particularly strong.

There were weaknesses.

The applicant had not explained in detail why Lithuania specifically had been chosen. She had not provided an extensive comparison between the study programmes available in Lithuania and those in other European countries. There was also a six-year period between the completion of her Bachelor's studies and the Master's programme she intended to pursue.

But the Court drew an important distinction.

An answer that could have been more detailed is not necessarily a false answer.

A person who does not provide the most convincing explanation possible has not, for that reason alone, provided information that does not correspond to reality.

That distinction became important when assessing whether the legal grounds relied upon by the Migration Department had actually been established.

## What had she explained?

The interview transcript showed that the applicant had explained her choice of Master's programme and identified subjects she expected to study.

She also explained, in substance, what she expected to gain from completing the programme and gave a reason for choosing Lithuania, including that studying here was more accessible to her than studying in Italy.

LVAT considered those answers as part of the evidence as a whole.

The question was therefore not whether she could have answered every question better. The question was whether the answers and other evidence were sufficient to establish that she had provided false information or that her real purpose for coming to Lithuania was something other than studies.

The Court concluded that they were not.

## Suspicion still has to be supported by evidence

This is perhaps the most useful part of the judgment.

Where the Migration Department relies on concerns about the truthfulness of information provided by an applicant or the possibility of another purpose behind the intended stay, those conclusions must be supported by the evidence in the individual case.

LVAT found that the material before it did not clearly and unequivocally establish that the applicant had given incomplete or false answers or had deliberately pursued a purpose different from the one she had declared.

Importantly, the Migration Department had not proved those circumstances.

The Court therefore found that the established facts did not provide a legal basis for refusing the temporary residence permit under Article 35(1)(2) and (12) of the Law on the Legal Status of Aliens.

LVAT partially upheld the applicant's appeal and quashed the Migration Department's decision.

## The Court did not grant the residence permit

There is an important distinction here.

The judgment did 'not' mean that LVAT itself granted the applicant a temporary residence permit.

Nor did the Court separately order the Migration Department to reconsider the application.

The reason was procedural: the administrative procedure concerning the residence permit application had not yet been completed.

Once the refusal decision was quashed, the Migration Department remained responsible for completing that procedure.

This distinction matters because successfully challenging a refusal does not necessarily mean that a residence permit is automatically issued. What the judgment removed was the particular refusal decision that the Court found was not sufficiently supported by the evidence.

## What can students take from this judgment?

Interviews remain an important part of the residence permit process, and applicants should be able to explain genuinely and consistently why they have chosen their studies, institution and Lithuania.

This judgment should therefore not be understood as saying that interview answers do not matter.

They clearly do.

What the ruling shows is that an interview must be assessed carefully and in context.

Having difficulty with a question, asking for clarification or giving an answer that could have been more detailed does not automatically establish dishonesty or an intention to use studies merely as a way of obtaining legal residence.

There is a meaningful difference between an 'unconvincing answer' and an 'untrue answer'.

In this case, LVAT went back to the interview transcript, examined what the applicant had actually said and concluded that the evidence did not prove the grounds on which the refusal had been based.

For me, that is the most important point arising from the judgment. Administrative decisions with serious consequences for an individual should ultimately rest on what the evidence establishes, rather than on assumptions drawn from how perfectly an applicant performed during an interview.

## Legal sources

- Article 35(1)(2) and (12) of the Law of the Republic of Lithuania on the Legal Status of Aliens (UTPĮ)
- Judgment of the Supreme Administrative Court of Lithuania discussed in this commentary

*The views expressed in this article are those of the author and are intended to contribute to legal and professional discussion. This article is for general informational purposes and does not constitute individual legal advice. Each residence permit application is assessed according to its individual circumstances.*`,
  },
  {
    slug: "two-years-or-three-family-reunification-lithuania",
    title: "Two Years or Three? What Foreigners in Lithuania Should Know About the Family Reunification Rule.",
    date: "2026-08-16",
    category: "Family",
    excerpt:
      "A recent Supreme Administrative Court ruling clarifies how the two-year residence requirement and three-year employment evidence interact in Lithuanian family reunification cases.",
    readTime: "8 min read",
    content: `By Ieva Bakare

One question that continues to cause confusion in Lithuanian family reunification cases is whether a person needs to have lived in Lithuania for two years or worked here for three years before their family member can qualify for a temporary residence permit.

The confusion is understandable because both periods appear in the legal framework, but they do not refer to exactly the same requirement.

A recent ruling of the Supreme Administrative Court of Lithuania (LVAT) provides a useful example of how these requirements are assessed in practice.

## The dispute

The case concerned a refusal by the Migration Department to issue a temporary residence permit on the basis of family reunification.

The Regional Administrative court initially ruled in favour of the applicant and annulled the Migration Department's decision. Among other things, it took into account that the sponsoring spouse's temporary residence permit remained valid, had not been revoked, and that the employment contract had not been terminated.

The Supreme Administrative Court took a different view.

The Court looked beyond whether the sponsor formally held a valid residence permit and employment contract and considered whether the substantive requirements for family reunification had actually been met.

This distinction became central to the case.

## Where do the two years and three years come from?

Under Article 43(6) of the Law on the Legal Status of Aliens, the relevant family reunification conditions include that the foreign national whose family members are joining them:

- Has lived in Lithuania for the previous two years;
- Holds a temporary residence permit valid for at least one year; and
- Has reasonable prospects of acquiring the right of permanent residence in Lithuania.

The two year requirement, therefore concerns the period of residence in Lithuania.

But that is not the end of the assessment.

The authorities must also determine whether the person has reasonable prospects of acquiring permanent residence.

This is where the three-year period became important in the case.

Under point 36.3 of the Procedure for Issuing Temporary Residence Permits in the Republic of Lithuania to Aliens, approved by Order No. 1V-329 of the Minister of the Interior of 12 October 2005, one of the forms of evidence used to demonstrate reasonable prospects is continuous full-time employment under an employment contract for at least three years, with no more than two employers.

In other words, the two periods should not simply be treated as competing answers to the same question.

The fact that a person has lived in Lithuania for two years may satisfy one part of the legal test, while the authorities must still separately assess whether there are reasonable prospects of that person eventually acquiring permanent residence.

## An employment contract alone was not enough

This is perhaps the most important part of the judgment.

The sponsoring spouse had an employment contract. Formally, the contract continued to exist.

However, the Supreme Administrative Court considered what had actually happened during the employment relationship.

The Court established that between 1 May 2024 and 14 December 2025, the spouse had not actually worked and had not received wages for 202 days out of a total period of 593 days.

For the Court, the continued existence of the employment contract was therefore not enough.

What mattered was whether there had been genuine and continuous full-time employment in practice: work had to actually be performed and remuneration had to actually be received.

The Supreme Administrative Court agreed with the Migration Department that, in those circumstances, the requirement of continuous full-time employment for at least three years had not been satisfied.

This is an important distinction for applicants to understand.

Having an employment contract on paper and having an actual, continuous employment relationship are not necessarily treated as the same thing when the authorities assess reasonable prospects of obtaining permanent residence.

## A valid residence permit did not resolve the issue either

Another interesting aspect of the case concerned the sponsor's existing temporary residence permit.

No procedure had been initiated to revoke it.

The Regional Administrative Court considered this relevant when ruling in the applicant's favour. The Supreme Administrative Court, however, found that the absence of revocation proceedings did not itself demonstrate that the sponsor had reasonable prospects of acquiring permanent residence.

Again, the Court distinguished between the person's current legal status and their future prospects of obtaining permanent residence.

A valid temporary residence permit confirms the person's present residence status. It does not, by itself, answer the separate question of whether the person has reasonable prospects of qualifying for permanent residence in the future.

## What did the Supreme Administrative Court decide?

The Supreme Administrative Court upheld the Migration Department's appeal, annulled the judgment of the lower court and adopted a new decision dismissing the applicant's complaint.

The significance of the ruling goes beyond the outcome of this particular family reunification application.

It shows that these applications may involve a substantive assessment of the sponsor's circumstances rather than a simple check of whether the required documents exist.

A valid residence permit matters.

An employment contract matters.

The required period of residence matters.

But none of these should necessarily be looked at in isolation.

Where the law also requires reasonable prospects of acquiring permanent residence, the authorities may examine the reality behind the documents, including whether employment has actually been continuous and whether salary has actually been received.

## So, is it two years or three years?

This is probably the most useful question to address directly.

Based on the legal provisions considered in this case, two years of residence and three years of employment concern different elements of the assessment.

The two-year period relates to how long the sponsoring foreign national has lived in Lithuania.

The three-year employment history discussed by the Court was relevant to demonstrating the separate requirement of having reasonable prospects of acquiring permanent residence.

That is why simply saying that the rule is "two years" or "three years" can be misleading without explaining which legal requirement is being discussed.

This ruling also illustrates why two people who appear to have similar residence permits may receive different outcomes. The assessment can depend on the person's actual residence and employment history, not simply the expiry date printed on the residence permit or the existence of an employment contract.

## What applicants should take from this ruling?

For family reunification applications where the reasonable-prospects requirement applies, it is important to look at the sponsor's immigration and employment history as a whole.

Periods during which the person did not actually work or receive employment income may become relevant to the assessment. Likewise, the fact that the person's existing temporary residence permit has not been revoked does not automatically establish reasonable prospects of acquiring permanent residence.

This does not mean that every family reunification case requires exactly the same circumstances. The applicable legal basis and the individual facts still matter.

What this judgment makes particularly clear is that formal documents alone may not tell the whole story.

When the law requires the authorities to assess a person's prospects of remaining in Lithuania on a long-term basis, they may look beyond the existence of a residence permit or employment contract and examine whether the underlying circumstances support that conclusion.

For applicants, that distinction can make the difference between meeting one part of the family reunification test and satisfying the legal requirements as a whole.

## Legal sources

- Article 43(6) of the Law of the Republic of Lithuania on the Legal Status of Aliens (UTPĮ)
- Point 36.3 of the Procedure for Issuing Temporary Residence Permits in the Republic of Lithuania to Aliens, approved by Order No. 1V-329 of the Minister of the Interior of the Republic of Lithuania of 12 October 2005
- Judgment of the Supreme Administrative Court of Lithuania discussed in this commentary

*The views expressed in this article are those of the author and are intended to contribute to legal and professional discussion. This article is for general informational purposes and does not constitute individual legal advice. The circumstances and applicable legal basis of each family reunification case should be assessed individually.*`,
  },
  {
    slug: "can-maternity-leave-cost-residence-permit-lithuania",
    title: "Can Maternity Leave Cost You Your Residence Permit in Lithuania?",
    date: "2026-08-04",
    category: "Immigration Law",
    excerpt:
      "A recent judgment of the Supreme Administrative Court of Lithuania suggests the answer is not as straightforward as many might think.",
    readTime: "5 min read",
    content: `By Ieva Bakare

A recent judgment of the Supreme Administrative Court of Lithuania considers an important question for foreign nationals living and working in Lithuania:

## Can a temporary residence permit be revoked simply because a person goes on maternity or parental leave?

The case involved a third-country national who had been granted a temporary residence permit on the basis of employment. Several months later, she gave birth and exercised her right to maternity and parental leave.

The Migration Department subsequently revoked her residence permit, taking the view that she no longer satisfied the conditions on which it had originally been granted.

The Regional Administrative Court agreed and dismissed her appeal.

The Supreme Administrative Court, however, reached a different conclusion.

## What the Supreme Administrative Court Decided

One of the key issues before the Court was whether the applicant had obtained her residence permit dishonestly. The evidence showed otherwise. She had entered into a genuine employment relationship, started working, received her salary and remained employed while on maternity and parental leave.

The Court found no evidence that she had intended to mislead the authorities when applying for her residence permit.

What makes this judgment particularly interesting is the Court's approach to financial resources.

The Migration Department focused primarily on the fact that the applicant was no longer receiving her salary. According to the Court, that was not enough.

Before concluding that the residence permit requirements were no longer met, the authorities should have examined whether she had other lawful and sufficient means of subsistence and should have given her an opportunity to provide that information.

Because this assessment was not carried out, the Supreme Administrative Court annulled the Migration Department's decision.

## A Question of Administrative Principle

In my view, the judgment reinforces an important principle of administrative decision-making: exercising a statutory employment right, such as maternity or parental leave, cannot by itself justify the revocation of a residence permit. Administrative authorities must examine the individual circumstances of each case rather than rely on assumptions arising from a temporary interruption of salary.

The judgment also reflects broader principles of European Union law.

Although Member States retain the power to regulate access to their labour markets, those powers must be exercised objectively, proportionately and in accordance with the principle of equal treatment, as reflected in Directive 2011/98/EU (the Single Permit Directive).

Equally important is the recognition that pregnancy, maternity leave and parental leave are protected rights. A temporary absence from work during these periods does not automatically mean that a person no longer satisfies the requirements for lawful residence.

That does not mean financial requirements cease to exist.

The Court's reasoning recognises that an applicant must still have sufficient means of subsistence during maternity or parental leave. However, those resources do not necessarily have to come from employment income alone. Other lawful and regular sources of income may also be relevant and should be properly assessed by the authorities.

## Conclusion

Ultimately, this judgment is not simply about maternity leave.

It is about the obligation of public authorities to make decisions based on evidence rather than assumptions. Where the law requires an individual assessment, that assessment must genuinely be carried out.

For foreign nationals living in Lithuania, the decision also provides an important reminder that residence permits cannot be revoked solely because someone has exercised rights that are recognised and protected by both Lithuanian and European Union law.

---

## Legal Sources

- Directive 2011/98/EU (Single Permit Directive)
- Article 33 of the Charter of Fundamental Rights of the European Union
- Articles 26(1)(3), 35(1)(2), 44 and 50(1)(2) of the Lithuanian Law on the Legal Status of Aliens
- Relevant provisions of the Lithuanian Labour Code`,
  },
  {
    slug: "residence-permit-national-security-lithuania",
    title: "CAN A PERMANENT RESIDENCE PERMIT IN LITHUANIA BE REVOKED SIMPLY BECAUSE A PERSON IS SUSPECTED OF A CRIME?",
    date: "2026-07-25",
    category: "Immigration Law",
    excerpt:
      "Does being suspected of a criminal offence automatically justify revoking a permanent residence permit in Lithuania?",
    readTime: "3 min watch",
    content: `@[video](https://www.youtube.com/embed/CuA1PZ-HLjQ)

Does being suspected of a criminal offence automatically justify revoking a permanent residence permit in Lithuania?

In this video, I examine a judgment of the Supreme Administrative Court of Lithuania that clarifies the legal standard authorities must satisfy before relying on public order grounds to revoke the enhanced protection afforded to permanent residents. The case highlights the importance of an individual and proportionate assessment rather than assumptions based solely on criminal proceedings.`,
  },
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
    title: "Professional Lecture: Current Issues and Latest Jurisprudence of the Court of Justice",
    issuer: "Ministry of Justice of the Republic of Lithuania",
    year: "2026",
    description:
      "Attended a professional lecture delivered by Prof. Dr. Irmantas Jarukaitis, Judge of the Court of Justice of the European Union, exploring recent trends in CJEU case law. The lecture focused on selected significant judgments from 2025–2026 and current developments in EU jurisprudence.\n\nVenue: Ministry of Justice of the Republic of Lithuania",
    type: "certificate",
  },
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
