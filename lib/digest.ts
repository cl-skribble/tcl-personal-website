/**
 * Daily Digest: mental models for leaders.
 * One concept per entry, from Chan Leong's daily digest. Carousel cards live in /public/digest/<slug>/<slug>-01.jpg ... -06.jpg
 * (the 4:5 LinkedIn carousel, rendered from the PDF). Card alt text carries the card's words so the carousel is readable
 * by screen readers, search engines and AI crawlers.
 *
 * Ground rules (same as the carousels): no invented personal stories; quotes in quote marks must be exact and correctly
 * attributed; shaky stories are labelled as parables.
 */
import type { Article } from "./insights";

const cards = (slug: string, alts: string[]) =>
  alts.map((alt, i) => ({ src: `/digest/${slug}/${slug}-${String(i + 1).padStart(2, "0")}.jpg`, alt }));

export const digestArticles: Article[] = [
  /* ───────────────────────── Survivorship bias ───────────────────────── */
  {
    slug: "survivorship-bias",
    title: "Survivorship Bias: Why Copying Winners So Often Fails",
    seoTitle: "Survivorship Bias: A Mental Model for Leaders",
    description:
      "Survivorship bias: judging by the winners you can see and missing the failures you can't. Abraham Wald's bombers, marketing examples and how to avoid it.",
    topics: ["mental-models", "leadership"],
    published: "2026-11-24",
    digestDate: "2026-11-24",
    summary:
      "Survivorship bias is the mistake of drawing conclusions only from the cases that survived, while the failures that dropped out stay invisible. The classic illustration is statistician Abraham Wald's work on damaged bombers in World War II. In marketing, it shows up whenever we copy viral campaigns or famous founders without asking how many people tried the same thing and failed.",
    takeaways: [
      "Survivorship bias: you only see the survivors, so the evidence is skewed.",
      "The classic example is Abraham Wald's analysis of bombers that made it home in World War II.",
      "The missing data, the failures, often holds the real lesson.",
      "In marketing it shows up as copying viral campaigns, famous founders and one-off hit ads.",
      "Before copying a success, ask what didn't make it, and why.",
    ],
    carousel: cards("survivorship-bias", [
      "Card 1 of 6. Photo of Chan Leong. Mental models for leaders: survivorship bias. Why copying winners so often fails.",
      "Card 2 of 6. The idea: you only see the survivors. The trap: it worked for them, let's copy it. The fix: ask what didn't make it, and why.",
      "Card 3 of 6. The origin: World War II. Statistician Abraham Wald studied damage on bombers that made it home. The lesson: the planes hit in other places never came back. Armour where the survivors weren't hit.",
      "Card 4 of 6. In agencies: loud winners, quiet failures. The viral case study: you don't see the ones that flopped. The dropout founder: you don't hear from the ones who failed. The one ad that worked: same format, many quiet misses.",
      "Card 5 of 6. Try it this week: study what didn't make it. One, pick one success you want to copy. Two, find attempts that tried the same and failed. Three, copy what differs, not just what's visible.",
      "Card 6 of 6. Remember: study the failures too. After Abraham Wald, World War II. Which winning formula did you copy that didn't work? Chan Leong, CEO, Speaker, Builder.",
    ]),
    body: [
      { type: "p", text: "A campaign goes viral. Within a week, everyone is copying its format, its hook and its music. Most of the copies go nowhere." },
      { type: "p", text: "The problem isn't the copying. It's that we only studied the one that won." },

      { type: "h2", text: "What is survivorship bias?" },
      { type: "p", text: "Survivorship bias is the error of drawing conclusions from the cases that \"survived\" a selection process, while ignoring the ones that didn't. Because the failures disappear from view, the evidence we're left with makes success look more common, more repeatable and more about the visible traits than it really is." },

      { type: "h2", text: "Where does the idea come from?" },
      { type: "p", text: "The best-known illustration comes from World War II. The mathematician **Abraham Wald**, working with the Statistical Research Group at Columbia University, studied how to protect bombers given that armour adds weight. The data came from planes that made it back, marked with damage in some areas and not others." },
      { type: "p", text: "The obvious answer was to armour where the holes were. Wald's insight was the reverse: those planes survived despite being hit there. The planes hit in other places, such as the engines, were the ones that never came back, and they were missing from the data." },
      { type: "p", text: "Historians note that the popular version of the story is simplified. Wald did write technical memos on estimating aircraft vulnerability from the damage on surviving planes, but some dramatic details are hard to confirm. The lesson holds either way: **the missing data matters.**" },

      { type: "h2", text: "Why does it catch us out?" },
      { type: "p", text: "Survivors are visible by definition. They write books, give talks and get featured in case studies. Failures rarely do. So our sample of \"what works\" is filtered before we ever see it, and we mistake common traits of the winners for causes of their success." },
      { type: "p", text: "It's a cousin of [second-order thinking](/insights/second-order-thinking): both ask you to look past what's in front of you to what's happening out of view." },

      { type: "h2", text: "How does survivorship bias show up in marketing and agencies?" },
      { type: "ul", items: [
        "**The viral case study.** Award entries and LinkedIn posts show the campaigns that worked. The many that used the same format and flopped don't get written up.",
        "**The dropout founder.** A few famous founders left school and won. Many more did the same and their stories are never told.",
        "**The one ad that worked.** A brand's best-performing creative gets cloned, but the same idea may have failed in other tests that nobody looked at.",
        "**\"Best practice\" from top performers.** Tactics shared by the biggest accounts may be common to failures too; you just never see those accounts.",
      ] },

      { type: "h2", text: "How do you avoid survivorship bias?" },
      { type: "ol", items: [
        "Pick one success you're tempted to copy.",
        "Ask: how many people tried the same thing? Look for the attempts that failed, in your own data, in past tests or by asking around.",
        "Compare winners and losers. Copy what actually differs between them, not just what the winner happened to do.",
        "Keep a record of your own failed tests, so your team learns from the full picture.",
      ] },

      { type: "h2", text: "What are the common mistakes?" },
      { type: "p", text: "One mistake is to dismiss every success story. Winners still have lessons; the point is to check them against the failures. Another is to treat the missing data as unknowable. Often you can find it: archived campaigns, rejected concepts, A/B tests that lost. Like [inversion](/insights/inversion-mental-model), the habit is to look deliberately at the side of the picture you'd naturally ignore." },

      { type: "h2", text: "Which \"winning formula\" did you copy that didn't work?" },
      { type: "p", text: "Think of the last success you tried to repeat. What did the attempts that failed have in common? That's often where the real lesson is." },
    ],
    faq: [
      { q: "What is survivorship bias?", a: "It's the error of judging from the cases that survived a selection process, such as successful companies or campaigns, while ignoring the failures that dropped out of view." },
      { q: "What is the Abraham Wald bomber story?", a: "In World War II, statistician Abraham Wald studied damage on bombers that returned. His point was that the areas without holes on survivors, like the engines, were where hits brought planes down, so those areas needed protection." },
      { q: "Is the bomber story true?", a: "Wald did work on aircraft vulnerability using damage on surviving planes, but the popular retelling is simplified and some details are debated. The lesson about missing data stands." },
      { q: "How can marketers avoid survivorship bias?", a: "Before copying a successful campaign, look for similar attempts that failed, compare what differed, and keep records of your own failed tests." },
    ],
    sources: [
      { label: "Bill Casselman, \"The Legend of Abraham Wald\", American Mathematical Society Feature Column (2016)", href: "https://www.ams.org/samplings/feature-column/fc-2016-06" },
      { label: "Abraham Wald, A Method of Estimating Plane Vulnerability Based on Damage of Survivors (Statistical Research Group memoranda, 1943; reprinted by the Center for Naval Analyses, 1980)" },
    ],
    keywords: ["survivorship bias", "Abraham Wald", "bomber bullet holes", "selection bias", "mental models", "marketing case studies", "leadership", "decision making"],
  },
  /* ───────────────────────── Hanlon's razor ───────────────────────── */
  {
    slug: "hanlons-razor",
    title: "Hanlon's Razor: Assume a Mistake Before You Assume Malice",
    seoTitle: "Hanlon's Razor: A Mental Model for Leaders",
    description:
      "Hanlon's razor: never attribute to malice what a mistake explains. Where the saying comes from, agency examples, and how leaders can use it day to day.",
    topics: ["mental-models", "leadership"],
    published: "2026-11-22",
    digestDate: "2026-11-22",
    summary:
      "Hanlon's razor is the rule of thumb \"Never attribute to malice that which is adequately explained by stupidity.\" It was printed under that name in Murphy's Law Book Two (1980). For leaders, it means looking for the simplest honest explanation, usually a mistake, a gap or a rush, before assuming someone acted against you.",
    takeaways: [
      "Hanlon's razor: don't assume bad intent when a mistake explains what happened.",
      "The saying was printed as \"Hanlon's razor\" in Murphy's Law Book Two (1980).",
      "Assuming malice starts a fight; assuming a mistake lets you fix the system.",
      "Most late replies, missed briefs and curt emails come from overload or unclear ownership.",
      "It's a starting assumption, not blind trust: check the facts before you react.",
    ],
    carousel: cards("hanlons-razor", [
      "Card 1 of 6. Photo of Chan Leong. Mental models for leaders: Hanlon's razor. Mistake or malice? Bet on the mistake first.",
      "Card 2 of 6. The idea: mistake before malice. The trap: they're ignoring us on purpose. The fix: look for the simplest honest explanation first.",
      "Card 3 of 6. The origin: 1980. Murphy's Law Book Two printed a reader's line, credited as Hanlon's razor: \"Never attribute to malice that which is adequately explained by stupidity.\"",
      "Card 4 of 6. In agencies: looks like malice, usually isn't. A late reply: their inbox may simply be full. A missed brief: often nobody clearly owned it. A rude email: likely written in a rush.",
      "Card 5 of 6. Try it this week: check before you react. One, notice when you assume bad intent. Two, ask what's the simplest honest explanation. Three, check the facts, then fix the system together.",
      "Card 6 of 6. Remember: mistake before malice. After Hanlon's razor, 1980. When did a malicious move turn out to be a simple mistake? Chan Leong, CEO, Speaker, Builder.",
    ]),
    body: [
      { type: "p", text: "A client goes quiet for a week. A colleague skips your update in the meeting. A reply lands in your inbox with no greeting and one line of text." },
      { type: "p", text: "It's tempting to read intent into all of it. Hanlon's razor suggests a better first guess." },

      { type: "h2", text: "What is Hanlon's razor?" },
      { type: "p", text: "Hanlon's razor is a rule of thumb: **\"Never attribute to malice that which is adequately explained by stupidity.\"** In gentler words, when something goes wrong, assume a mistake, an oversight or a rush before you assume someone meant to hurt you." },
      { type: "p", text: "Like Occam's razor, it \"shaves away\" the less likely explanation. Deliberate bad intent takes planning and motive. Mistakes just need a busy day." },

      { type: "h2", text: "Where does Hanlon's razor come from?" },
      { type: "p", text: "The line was printed under the title \"Hanlon's razor\" in Arthur Bloch's 1980 collection Murphy's Law Book Two: More Reasons Why Things Go Wrong!, a book of reader-submitted laws in the spirit of Murphy's law. It is usually credited to Robert J. Hanlon of Scranton, Pennsylvania, although the book itself didn't say who Hanlon was." },
      { type: "p", text: "Similar ideas are much older. Writers have long noted that confusion and neglect cause more trouble in the world than cunning does. Hanlon's version stuck because it is short and easy to remember." },

      { type: "h2", text: "Why does it work?" },
      { type: "p", text: "Most of what goes wrong at work is ordinary: overloaded inboxes, unclear ownership, handovers that drop a detail, messages typed between meetings. Bad intent exists, but it is rarer than these everyday causes." },
      { type: "p", text: "Our minds tend to do the opposite. When something affects us, we explain it by the other person's character rather than their situation. Hanlon's razor is a deliberate correction to that habit." },
      { type: "p", text: "It also changes what you do next. **Assume malice, and you start a fight. Assume a mistake, and you fix the system.** The first leaves you defending yourself; the second gets you asking how the miss happened and how to stop it repeating." },

      { type: "h2", text: "How does Hanlon's razor apply in marketing and agencies?" },
      { type: "p", text: "Agency life is full of moments that look personal and usually aren't:" },
      { type: "ul", items: [
        "**The late client reply.** It can feel like you've been dropped. More often, their inbox is full, or the decision is waiting on someone above them.",
        "**The missed brief.** It looks like carelessness or a snub. Often nobody clearly owned the handover between account and creative teams.",
        "**The curt email.** It reads as rude. It was probably written on a phone, in a rush, between two other meetings.",
        "**The changed feedback.** A client reverses an approved direction. It can feel like bad faith, but it is often a new stakeholder seeing the work for the first time.",
      ] },
      { type: "p", text: "In each case, the razor buys you a calmer first move: a friendly check-in, a clearer owner, a quick call instead of an angry reply." },

      { type: "h2", text: "How do you practise Hanlon's razor?" },
      { type: "ol", items: [
        "Notice the moment you assume someone did it on purpose.",
        "Ask: what's the simplest honest explanation? List two or three ordinary causes.",
        "Check before you react. A short, neutral question usually tells you which explanation is true.",
        "Fix the system, not the person: clarify ownership, deadlines or the handover that failed.",
      ] },

      { type: "h2", text: "What are the common mistakes?" },
      { type: "p", text: "The razor is a starting assumption, not blind trust. If the same \"mistake\" keeps happening after you've fixed the system, the pattern is information too. Patterns deserve a direct conversation." },
      { type: "p", text: "It also isn't a way to excuse your own errors. Use it generously on others, and hold yourself to the fix. It pairs well with [Chesterton's fence](/insights/chestertons-fence): before you assume a rule or a person is being difficult, find out what's really going on." },

      { type: "h2", text: "When did a \"malicious\" move turn out to be a simple mistake?" },
      { type: "p", text: "Think of the last time you were sure someone did it on purpose. Was it a mistake after all? This week, try the simplest honest explanation first." },
    ],
    faq: [
      { q: "What is Hanlon's razor?", a: "It is the rule of thumb \"Never attribute to malice that which is adequately explained by stupidity\": assume a mistake before you assume bad intent." },
      { q: "Who came up with Hanlon's razor?", a: "It was printed as \"Hanlon's razor\" in Arthur Bloch's Murphy's Law Book Two (1980) and is usually credited to Robert J. Hanlon of Scranton, Pennsylvania." },
      { q: "Does Hanlon's razor mean people are never malicious?", a: "No. It's a starting assumption. If the same problem keeps happening after you've fixed the system, address the pattern directly." },
      { q: "How can leaders use Hanlon's razor?", a: "Before reacting, ask what the simplest honest explanation is, check the facts with a neutral question, then fix the process that allowed the mistake." },
    ],
    sources: [
      { label: "Arthur Bloch, Murphy's Law Book Two: More Reasons Why Things Go Wrong! (1980)" },
      { label: "Quote Investigator, \"Never Attribute to Malice That Which Is Adequately Explained by Stupidity\"", href: "https://quoteinvestigator.com/2016/12/30/not-malice/" },
    ],
    keywords: ["Hanlon's razor", "never attribute to malice", "Robert J. Hanlon", "Murphy's Law Book Two", "mental models", "leadership", "agency leadership", "assume positive intent"],
  },
  /* ───────────────────────── Chesterton's fence ───────────────────────── */
  {
    slug: "chestertons-fence",
    title: "Chesterton's Fence: Find Out Why a Rule Exists Before You Remove It",
    seoTitle: "Chesterton's Fence: A Mental Model for Leaders",
    description:
      "Chesterton's fence: don't remove a rule or process until you know why it was put there. Where the idea comes from, agency examples and how to apply it.",
    topics: ["mental-models", "leadership"],
    published: "2026-11-21",
    digestDate: "2026-11-21",
    summary:
      "Chesterton's fence is the principle that you shouldn't remove a rule, process or tradition until you understand why it was put there. The idea comes from G.K. Chesterton's 1929 book The Thing, where a reformer wants to clear away a fence he sees no use for. Finding the original reason first lets you remove what's truly obsolete and keep, or improve, what still protects you.",
    takeaways: [
      "Chesterton's fence: understand why something exists before you remove it.",
      "It comes from G.K. Chesterton's 1929 book The Thing.",
      "Rules and processes often hide reasons nobody remembers, like a past mistake or a legal risk.",
      "The point isn't to keep everything. It's to change things knowingly.",
      "Before you scrap a rule, ask who set it up and what problem it solved.",
    ],
    carousel: cards("chestertons-fence", [
      "Card 1 of 6. Photo of Chan Leong. Mental models for leaders: Chesterton's fence. Before you remove a rule, find out why it's there.",
      "Card 2 of 6. The idea: know why before you remove. The trap: this rule makes no sense, let's scrap it. The fix: find out why it was put up, then decide.",
      "Card 3 of 6. The origin: 1929. In The Thing, G.K. Chesterton imagines a reformer who finds a fence across a road and wants it gone. His reply: if you can't see what it's for, you're not ready to clear it away.",
      "Card 4 of 6. In agencies: old rules, hidden reasons. A slow approval step: it may be what stopped a costly mistake. An odd brand rule: it may come from a legal or market issue. A pointless report: someone upstream may rely on it.",
      "Card 5 of 6. Try it this week: ask before you scrap. One, pick one rule or process you want to cut. Two, ask who set it up and what problem it solved. Three, if the reason is gone, remove it; if it's still valid, improve it.",
      "Card 6 of 6. Remember: \"Go away and think.\" G.K. Chesterton, The Thing, 1929. Which rule at work would you scrap, and do you know why it exists? Chan Leong, CEO, Speaker, Builder.",
    ]),
    body: [
      { type: "p", text: "Every team has a rule that makes no sense. A sign-off nobody reads. A form nobody likes. The urge is to scrap it." },
      { type: "p", text: "Chesterton's fence says: not yet. First, find out why it's there." },

      { type: "h2", text: "What is Chesterton's fence?" },
      { type: "p", text: "Chesterton's fence is the principle that you shouldn't remove a rule, process or tradition until you understand the reason it was put in place. If you can explain why it exists, you can judge whether that reason still applies. If you can't, you don't yet know what you'd be breaking." },
      { type: "p", text: "It isn't an argument for keeping everything. It's an argument for **changing things knowingly**." },

      { type: "h2", text: "Where does Chesterton's fence come from?" },
      { type: "p", text: "The idea comes from the English writer G.K. Chesterton, in his 1929 book The Thing, in the chapter \"The Drift from Domesticity\". He asks us to picture \"a fence or gate erected across a road\". A modern reformer walks up, sees no use for it and wants it cleared away." },
      { type: "p", text: "Chesterton's answer, given by \"the more intelligent type of reformer\", is the heart of the model: \"If you don't see the use of it, I certainly won't let you clear it away. Go away and think. Then, when you can come back and tell me that you do see the use of it, I may allow you to destroy it.\"" },
      { type: "p", text: "His point is that fences don't build themselves. Someone put it there for a reason. That reason may be out of date, but you can only know that once you've found it." },

      { type: "h2", text: "Why does it work?" },
      { type: "p", text: "Rules are often the scar tissue of past problems. Over time, people forget the problem but keep the rule. To a newcomer, the rule looks like friction with no purpose." },
      { type: "p", text: "Removing it can quietly bring the old problem back, sometimes months later, when nobody links the two. Asking \"why is this here?\" is a cheap way to avoid that. It's closely related to [second-order thinking](/insights/second-order-thinking): considering what happens next, not just the immediate win of removing friction." },

      { type: "h2", text: "How does Chesterton's fence apply in marketing and agencies?" },
      { type: "p", text: "Agencies inherit a lot of fences, from past leaders, past clients and past mistakes. A few common ones:" },
      { type: "ul", items: [
        "**A slow approval step.** An extra sign-off on artwork can feel like bureaucracy. It may exist because a wrong price or logo once went to print.",
        "**An odd brand rule.** A client insists a word never appears in their ads. It may come from a legal issue or a market where that word means something else.",
        "**A \"pointless\" report.** A weekly sheet nobody on the team reads may be feeding someone's finance forecast upstream.",
        "**A strange client habit.** A client who wants every email copied to a second person may have been burned by a missed decision before.",
      ] },
      { type: "p", text: "In each case, the reason might be gone. But a two-minute question to the right person usually tells you, and saves you from rediscovering the problem the hard way." },

      { type: "h2", text: "How do you practise Chesterton's fence?" },
      { type: "ol", items: [
        "Pick one rule, process or habit you want to cut.",
        "Ask who set it up and what problem it was meant to solve. Check old notes, tickets or the longest-serving person on the team.",
        "If the reason no longer applies, remove it with confidence and tell people why.",
        "If the reason still applies, keep the protection but improve how it works: faster, simpler, automated.",
        "Write the reason down, so the next person doesn't have to go fence-hunting.",
      ] },
      { type: "p", text: "That last step matters. Many fences become mysteries simply because nobody recorded why they went up." },

      { type: "h2", text: "What are the common mistakes?" },
      { type: "p", text: "The first mistake is treating the model as a veto on change. Chesterton's reformer is allowed to remove the fence. He just has to understand it first. Some fences really are useless, and finding that out is a good result." },
      { type: "p", text: "The second is endless investigation. For small, easily reversed changes, a quick question is enough. Save deeper digging for changes that are costly or hard to undo. [Inversion](/insights/inversion-mental-model) helps here: ask what could go wrong if this rule disappeared tomorrow." },

      { type: "h2", text: "Which rule would you scrap, and do you know why it exists?" },
      { type: "p", text: "Pick one this week. Find its reason. Then decide whether it stays, goes or gets better." },
    ],
    faq: [
      { q: "What is Chesterton's fence?", a: "It is the principle that you shouldn't remove a rule, process or tradition until you understand why it was put there in the first place." },
      { q: "Where does Chesterton's fence come from?", a: "From G.K. Chesterton's 1929 book The Thing, in the chapter \"The Drift from Domesticity\", where a reformer wants to clear away a fence across a road without knowing its purpose." },
      { q: "Does Chesterton's fence mean you should never change rules?", a: "No. It means you should find out why a rule exists before changing it. If the reason no longer applies, removing it is the right call." },
      { q: "How can leaders use Chesterton's fence?", a: "Before cutting a process, ask who set it up and what problem it solved, then remove it, keep it or improve it, and record the reason for the next person." },
    ],
    sources: [
      { label: "G.K. Chesterton, The Thing (1929), chapter \"The Drift from Domesticity\"" },
      { label: "The Society of G.K. Chesterton, \"Taking a Fence Down\"", href: "https://www.chesterton.org/taking-a-fence-down/" },
    ],
    keywords: ["Chesterton's fence", "Chesterton fence", "G.K. Chesterton", "second-order thinking", "mental models", "decision making", "change management", "agency leadership"],
  },
  /* ───────────────────────── Sunk cost fallacy ───────────────────────── */
  {
    slug: "sunk-cost-fallacy",
    title: "The Sunk Cost Fallacy: Why Leaders Keep Funding What Isn't Working",
    seoTitle: "Sunk Cost Fallacy: A Guide for Business Leaders",
    description:
      "The sunk cost fallacy: continuing something because of what you've already spent. The 1985 research behind it, agency examples and the fresh-start question.",
    topics: ["mental-models", "leadership"],
    published: "2026-11-20",
    digestDate: "2026-11-20",
    summary:
      "The sunk cost fallacy is the habit of continuing a project, plan or relationship because of the time, money or effort already put in, rather than because of what lies ahead. Those past costs are gone whatever you decide. Better decisions compare only future costs and benefits, which is why the simplest test is: if we were starting today, would we choose this?",
    takeaways: [
      "A sunk cost is time, money or effort already spent that you can't get back.",
      "The fallacy is letting that past spend push you to keep going.",
      "Arkes and Blumer's 1985 theatre-ticket study showed people who paid more used their tickets more.",
      "It is also called the Concorde fallacy, after the supersonic jet that kept being funded.",
      "Ask the fresh-start question: if we were starting today, would we choose this?",
    ],
    carousel: cards("sunk-cost-fallacy", [
      "Card 1 of 6. Photo of Chan Leong. Mental models for leaders: The sunk cost fallacy. Why we keep going just because we've already paid.",
      "Card 2 of 6. The idea: what's spent is spent. The trap: we've already put so much in, we can't stop now. Why it's a trap: that money and time are gone whatever you decide next. The fix: decide on what's ahead, not what's behind.",
      "Card 3 of 6. The research: in 1985, psychologists Hal Arkes and Catherine Blumer sold theatre season tickets at three prices. People who paid full price went to more plays than those who got a discount. Same shows; only the money already spent was different. The Concorde fallacy: it's also named after the supersonic jet, which kept getting funded long after it was clear it wouldn't pay off.",
      "Card 4 of 6. In agencies: hard to walk away. A losing pitch: weeks of work in, but the fit was never right. A tired campaign: it's not working, but we paid for the shoot. A wrong hire: months of training already invested.",
      "Card 5 of 6. Try it this week: the fresh-start question. One, pick one project, client or tool you're quietly doubting. Two, ask: if we were starting today, would we choose this? Three, ignore what's spent and compare only what's still to come. Four, if the answer is no, stop, shrink or change it.",
      "Card 6 of 6. Remember: past costs are gone. Decide on what's ahead. What are you keeping only because you've paid for it? Chan Leong, CEO, Speaker, Builder.",
    ]),
    body: [
      { type: "p", text: "\"We've come too far to stop now.\" It sounds like grit. Often, it's a trap." },
      { type: "p", text: "The sunk cost fallacy explains why smart teams keep pouring time and money into things that stopped making sense a while ago." },

      { type: "h2", text: "What is the sunk cost fallacy?" },
      { type: "p", text: "A sunk cost is anything you have already spent and cannot get back: money, time, effort or reputation. The fallacy is letting that past spend drive your next decision." },
      { type: "p", text: "Rationally, sunk costs are gone whatever you choose next, so they shouldn't count. The only question that matters is whether the future benefits of continuing beat the future costs. In practice, the more we have put in, the harder it feels to walk away." },

      { type: "h2", text: "What does the research on sunk costs show?" },
      { type: "p", text: "In a well-known 1985 study, psychologists Hal Arkes and Catherine Blumer arranged for theatre season tickets at Ohio University to be sold at three different prices: full price and two discounts. Over the following months, people who had paid full price attended more plays than those who had paid less." },
      { type: "p", text: "The plays were the same and so were the seats. The only difference was how much each person had already spent, and that alone changed their behaviour." },
      { type: "p", text: "The same pattern is sometimes called the Concorde fallacy, a term used by biologists Richard Dawkins and Tamsin Carlisle in 1976. It refers to the supersonic airliner, which kept being funded long after it was clear it would not pay off, partly because so much had already been invested." },

      { type: "h2", text: "Why is the sunk cost fallacy so hard to resist?" },
      { type: "ul", items: [
        "**Stopping feels like admitting a mistake.** Continuing protects our pride, at least for a while.",
        "**Losses hurt more than gains please.** Walking away makes the loss feel real and final.",
        "**We don't want to look wasteful.** Abandoning something we paid for feels irresponsible, even when continuing wastes more.",
      ] },

      { type: "h2", text: "Where does the sunk cost fallacy show up in agencies?" },
      { type: "ul", items: [
        "**A losing pitch.** Weeks of strategy and creative have gone in, but it's clear the client wants something you don't do well. The work done is not a reason to keep chasing it.",
        "**A tired campaign.** The results are flat, but \"we paid for the shoot\" keeps it running. The production budget is spent either way; the media budget isn't.",
        "**A wrong hire or partner.** Months of onboarding make it tempting to give it \"one more quarter\", long after the signals are clear.",
        "**A tool or system.** A platform that never fit gets kept because of the licence fees and setup time already paid.",
      ] },
      { type: "p", text: "It is the mirror image of [the Pareto principle](/insights/pareto-principle): instead of freeing time for the vital few, sunk costs lock time into things that no longer earn it. And [second-order thinking](/insights/second-order-thinking) helps here too: ask what keeping the project going will cost next quarter, not what it cost last quarter." },

      { type: "h2", text: "How do you avoid the sunk cost fallacy?" },
      { type: "ol", items: [
        "Pick one project, client, campaign or tool you are quietly doubting.",
        "Ask the fresh-start question: if we were starting today, knowing what we know now, would we choose this?",
        "Compare only what is still to come: the remaining cost, effort and likely benefit.",
        "If the answer is no, stop it, shrink it or change it, and say so openly so the team learns it is safe to call time.",
      ] },
      { type: "p", text: "It also helps to set stop rules at the start: \"if this campaign isn't hitting X by week four, we pause and rethink.\" Deciding the exit before you are invested is much easier than deciding it after." },

      { type: "h2", text: "Is it always wrong to keep going?" },
      { type: "p", text: "No. Persistence is often exactly right. The difference is the reason. Keep going because the future looks worth it, not because the past was expensive. If the honest answer to the fresh-start question is yes, carry on with confidence." },

      { type: "h2", text: "What are you keeping only because you've paid for it?" },
      { type: "p", text: "Most teams have at least one. Name it this week, and decide on what's ahead." },
    ],
    faq: [
      { q: "What is the sunk cost fallacy?", a: "It is continuing a project or decision because of the time, money or effort already spent, instead of judging it on future costs and benefits." },
      { q: "What is an example of the sunk cost fallacy?", a: "In a 1985 study by Hal Arkes and Catherine Blumer, people who paid full price for theatre season tickets went to more plays than those who got discounts, even though the plays were the same." },
      { q: "Why is it called the Concorde fallacy?", a: "The supersonic Concorde kept receiving funding long after it was clear it would not pay off, partly because so much had already been invested. Biologists Dawkins and Carlisle used the term in 1976." },
      { q: "How can leaders avoid the sunk cost fallacy?", a: "Ask whether you would start the project today knowing what you know now, compare only future costs and benefits, and set stop rules before you are heavily invested." },
    ],
    sources: [
      { label: "Hal R. Arkes and Catherine Blumer, \"The Psychology of Sunk Cost\", Organizational Behavior and Human Decision Processes, 1985" },
      { label: "Richard Dawkins and Tamsin R. Carlisle, \"Parental investment, mate desertion and a fallacy\", Nature, 1976" },
      { label: "Hal R. Arkes and Peter Ayton, \"The Sunk Cost and Concorde Effects: Are Humans Less Rational Than Lower Animals?\", Psychological Bulletin, 1999" },
    ],
    keywords: ["sunk cost fallacy", "sunk cost", "Concorde fallacy", "escalation of commitment", "mental models", "decision making", "agency leadership"],
  },
  /* ───────────────────────── Pareto principle ───────────────────────── */
  {
    slug: "pareto-principle",
    title: "The Pareto Principle: Find the Vital Few That Drive Your Results",
    seoTitle: "Pareto Principle (80/20 Rule) for Business Leaders",
    description:
      "The Pareto principle, or 80/20 rule: a few causes usually drive most results. Where it comes from, how agencies can use it, and the mistakes to avoid.",
    topics: ["mental-models", "leadership"],
    published: "2026-11-20",
    digestDate: "2026-11-20",
    summary:
      "The Pareto principle, also called the 80/20 rule, says that a small share of causes usually drives most of the results. It is a rule of thumb, not a law: the split might be 70/30 or 90/10. The useful habit is to rank your clients, channels, tasks or problems by impact, then give the vital few more attention and handle the rest more efficiently.",
    takeaways: [
      "A small share of causes usually drives most of the results; 80/20 is shorthand, not an exact law.",
      "Vilfredo Pareto noticed the pattern in land ownership in Italy in the 1890s.",
      "Quality pioneer Joseph Juran generalised it and called it \"the vital few and the trivial many\".",
      "Rank by results, not effort, to find your vital few.",
      "Don't ignore the rest: Juran later called them \"the useful many\".",
    ],
    carousel: cards("pareto-principle", [
      "Card 1 of 6. Photo of Chan Leong presenting. Mental models for leaders: The Pareto principle. Why a few things drive most of your results.",
      "Card 2 of 6. The idea: a few things do most of the work. A chart shows 20% of effort producing 80% of results. The vital few: a small share of causes drives most of the results. 80/20 is a rule of thumb, not a law. The split might be 70/30 or 90/10.",
      "Card 3 of 6. Where it comes from: in the 1890s, economist Vilfredo Pareto noticed about 20% of people owned about 80% of Italy's land. From land to factories: decades later, quality expert Joseph Juran saw the same pattern in manufacturing defects, and named the idea after Pareto.",
      "Card 4 of 6. In agencies: find your vital few. Clients: a few accounts often bring most of the profit, others take most of the time. Channels: one or two usually drive most of a campaign's results. Revisions: most rounds trace back to a few causes, like an unclear brief.",
      "Card 5 of 6. Try it this week: rank, then focus. One, pick one list: clients, channels, tasks or problems. Two, rank it by results: profit, leads or pain caused. Three, circle the top 20% and spot what they share. Four, give them more time, and cut, delegate or fix the rest.",
      "Card 6 of 6. Remember: the vital few and the trivial many. Joseph Juran's phrase for the Pareto principle. What's your vital few this month? Chan Leong, CEO, Speaker, Builder.",
    ]),
    body: [
      { type: "p", text: "Most businesses spread their time evenly. Results almost never arrive evenly." },
      { type: "p", text: "The Pareto principle is a simple reminder of that gap, and a practical way to close it." },

      { type: "h2", text: "What is the Pareto principle?" },
      { type: "p", text: "The Pareto principle, often called the 80/20 rule, says that a small share of causes usually produces most of the effects. Roughly 20% of customers bring 80% of revenue; 20% of bugs cause 80% of crashes; 20% of tasks deliver 80% of the value." },
      { type: "p", text: "The numbers are shorthand. The real split might be 70/30, 90/10 or 95/5, and the two numbers don't have to add up to 100. What matters is the shape: results are lopsided, so effort should be too." },

      { type: "h2", text: "Where does the Pareto principle come from?" },
      { type: "p", text: "In the 1890s, the Italian economist Vilfredo Pareto observed in his work on political economy that roughly 80% of the land in Italy was owned by about 20% of the population, and found similar patterns elsewhere." },
      { type: "p", text: "Decades later, the quality pioneer Joseph M. Juran came across Pareto's work and saw the same pattern in manufacturing: a few causes produced most of the defects. He generalised the idea, named it after Pareto, and coined the phrase \"the vital few and the trivial many\". The Pareto chart, which ranks causes from biggest to smallest, became a standard quality tool." },

      { type: "h2", text: "Why does the Pareto principle matter for leaders?" },
      { type: "ul", items: [
        "**Even effort is mostly wasted effort.** If a few things drive most results, spreading time evenly means most of it goes where it matters least.",
        "**It tells you what to drop.** Ranking by impact makes it obvious which tasks, clients or channels to cut, delegate or automate.",
        "**It works on problems too.** A handful of root causes usually create most of the complaints, delays and rework. Fix those first.",
      ] },

      { type: "h2", text: "How does the Pareto principle apply in agencies and marketing?" },
      { type: "ul", items: [
        "**Clients.** A few accounts often bring most of the profit, while others take most of the team's time. Knowing which is which changes how you staff, price and renew.",
        "**Channels.** In most campaigns, one or two channels drive the bulk of results. Moving budget toward them usually beats spreading it thinly everywhere.",
        "**Revisions.** Most revision rounds trace back to a few causes: an unclear brief, a missing decision-maker, or feedback that arrives too late. Fixing the brief template can remove more rework than any amount of overtime.",
      ] },
      { type: "p", text: "It pairs well with [Parkinson's law](/insights/parkinsons-law): once you know the vital few tasks, give them tight, focused time instead of letting the trivial many expand to fill the week. And it helps define your [circle of competence](/insights/circle-of-competence): the work in your top 20% is often the work you are best at." },

      { type: "h2", text: "How do you run a quick Pareto analysis?" },
      { type: "ol", items: [
        "Pick one list: clients, channels, tasks, products or problems.",
        "Choose the result that matters: profit, leads, hours saved, or pain caused.",
        "Rank the list from biggest to smallest contributor, using real numbers where you have them.",
        "Circle the top group that drives most of the result, and look at what those items have in common.",
        "Give them more time, budget and attention. Cut, delegate, automate or fix the rest.",
      ] },

      { type: "h2", text: "What are the common mistakes with the 80/20 rule?" },
      { type: "ul", items: [
        "**Treating 80/20 as exact.** It is a pattern, not a formula. Use your own data to find your real split.",
        "**Ranking by effort instead of results.** The tasks that feel biggest are not always the ones that move the numbers.",
        "**Ignoring everything else.** Juran himself later preferred \"the useful many\" to \"the trivial many\": the rest still matters, it just needs a cheaper, simpler way of being handled.",
        "**Doing it once.** Your vital few change as clients, markets and channels change. Re-rank every quarter.",
      ] },

      { type: "h2", text: "What's your vital few this month?" },
      { type: "p", text: "Pick one list today and rank it. The answer is usually obvious within ten minutes, and it is rarely where most of your time is going." },
    ],
    faq: [
      { q: "What is the Pareto principle?", a: "It is the observation that a small share of causes usually drives most of the results, often summarised as the 80/20 rule. The exact split varies." },
      { q: "Who came up with the 80/20 rule?", a: "It is named after the economist Vilfredo Pareto, who noticed in the 1890s that about 20% of people owned about 80% of the land in Italy. Joseph Juran later generalised it as \"the vital few and the trivial many\"." },
      { q: "Is the 80/20 rule always 80 and 20?", a: "No. It is a rule of thumb. The real split might be 70/30 or 90/10, and the two numbers don't need to add up to 100." },
      { q: "How can an agency use the Pareto principle?", a: "Rank clients by profit, channels by results and revision rounds by cause, then focus time and budget on the top few and simplify, delegate or fix the rest." },
    ],
    sources: [
      { label: "Vilfredo Pareto, Cours d'économie politique, 1896" },
      { label: "Joseph M. Juran, Quality Control Handbook, 1951" },
    ],
    keywords: ["Pareto principle", "80/20 rule", "vital few", "Joseph Juran", "mental models", "prioritisation", "agency productivity"],
  },
  /* ───────────────────────── Circle of competence ───────────────────────── */
  {
    slug: "circle-of-competence",
    title: "Circle of Competence: Know Where Your Expertise Ends",
    seoTitle: "Circle of Competence for Leaders: Know Your Edges",
    description:
      "The circle of competence, Warren Buffett's idea that knowing the edge of your expertise matters more than its size. What it means and how agency leaders can use it.",
    topics: ["mental-models", "leadership"],
    published: "2026-11-19",
    digestDate: "2026-11-19",
    summary:
      "Your circle of competence is the set of things you understand deeply enough to judge well. Warren Buffett's point is that the size of the circle matters far less than knowing exactly where it ends. Inside it, you can spot quality and problems early. Just outside it is where confident people make their most expensive mistakes.",
    takeaways: [
      "Your circle of competence is what you understand deeply enough to judge well.",
      "Warren Buffett described it in his 1996 letter to Berkshire Hathaway shareholders.",
      "Knowing the boundary matters more than the size of the circle.",
      "The costliest mistakes happen just outside the circle, where confidence runs ahead of knowledge.",
      "For every new brief, choose: decline, partner with a specialist, or invest to grow the circle.",
    ],
    carousel: cards("circle-of-competence", [
      "Card 1 of 6. Mental models for leaders: Circle of competence. The edge of what you know matters more than its size.",
      "Card 2 of 6. The idea: know where your circle ends. Inside the circle: what you understand deeply, so play here. The edge: where you think you know more than you do. Outside: say no, learn first, or bring in someone who knows.",
      "Card 3 of 6. Where it comes from: in 1996, Warren Buffett, in his letter to Berkshire Hathaway shareholders. You don't have to be an expert on every company, he wrote. You only need to judge the ones inside your circle of competence. Small circle, clear edges: the size of the circle matters far less than knowing exactly where it ends.",
      "Card 4 of 6. In agencies: tempting briefs. A brief in a new industry: win it, and you learn on the client's money. We can do that too: extra services stretch a team past what it does well. The partner route: bring in a specialist, and be honest about it.",
      "Card 5 of 6. Try it this week: draw your circle. One, list what your team does better than almost anyone. Two, list what you say yes to but do only adequately. Three, for the next brief, check which list it falls on. Four, decide: decline, partner, or grow the circle.",
      "Card 6 of 6. Remember: the size of that circle is not very important; knowing its boundaries, however, is vital. Warren Buffett, 1996 letter to shareholders. Which brief should you have said no to? Chan Leong, CEO, Speaker, Builder.",
    ]),
    body: [
      { type: "p", text: "Nobody is good at everything. The problem is that most of us are not very precise about where \"good\" stops." },
      { type: "p", text: "The circle of competence is a simple way to draw that line, and to notice when you are about to step over it." },

      { type: "h2", text: "What is the circle of competence?" },
      { type: "p", text: "Your circle of competence is the set of subjects, markets and skills you understand deeply enough to judge well. Inside it, you can tell good work from average work, spot problems before they grow, and price risk sensibly." },
      { type: "p", text: "Outside it, you are guessing, even if it does not feel like guessing. The idea is not to make the circle as big as possible. It is to know exactly where its edge is, and to act differently on each side of it." },

      { type: "h2", text: "Where does the circle of competence come from?" },
      { type: "p", text: "Warren Buffett described it in his 1996 letter to Berkshire Hathaway shareholders. An investor, he wrote, does not need to be an expert on every company, or even many. They only need to be able to evaluate the companies within their circle of competence." },
      { type: "p", text: "Then came the line most people remember: \"The size of that circle is not very important; knowing its boundaries, however, is vital.\" His partner Charlie Munger applied the same thinking well beyond investing, to careers and to life." },

      { type: "h2", text: "Why does knowing your circle of competence work?" },
      { type: "ul", items: [
        "**You judge better where you know more.** Deep knowledge lets you see quality, risk and opportunity that others miss.",
        "**The danger zone is the edge.** Expensive mistakes rarely happen deep inside your expertise or far outside it. They happen just beyond the edge, where confidence runs ahead of knowledge.",
        "**It makes saying no easier.** A clear boundary turns a vague feeling of doubt into a simple test: is this inside the circle or not?",
      ] },

      { type: "h2", text: "How does the circle of competence apply in agencies and marketing?" },
      { type: "p", text: "Agencies are constantly invited to step outside their circle. Three situations come up again and again:" },
      { type: "ul", items: [
        "**A big brief in a new industry.** It is flattering and the budget is attractive. But if you win it, you are learning the category on the client's money, and they will feel it.",
        "**\"We can do that too.\"** Adding a service to keep a client happy, such as building an app when you are a creative shop, can stretch a team well past what it does well.",
        "**The partner route.** Bringing in a specialist for the part outside your circle, and being upfront about it, protects the client and your reputation. It is also the thinking behind [collaborating to go regional](/insights/independent-agencies-collaborate-to-go-regional): local partners know their market better than any outsider can.",
      ] },
      { type: "p", text: "None of this means never trying anything new. It means knowing when you are trying something new, and pricing, staffing and promising accordingly." },

      { type: "h2", text: "How do you find and use your circle of competence?" },
      { type: "ol", items: [
        "List what your team does better than almost anyone you compete with.",
        "List what you say yes to but only do adequately. Be honest; this list is usually longer.",
        "When the next brief arrives, check which list it falls on.",
        "Decide deliberately: decline it, partner with a specialist, or treat it as an investment in growing the circle, with the time and budget that learning really needs.",
      ] },
      { type: "p", text: "Pair it with [inversion](/insights/inversion-mental-model): ask what would guarantee failure on a project outside your circle, and you will usually find the answer is \"we didn't know what we didn't know\"." },

      { type: "h2", text: "Can you expand your circle of competence?" },
      { type: "p", text: "Yes, but slowly and on purpose. A circle grows through study, practice and small, low-risk projects, not by saying yes to a big brief and hoping. The honest test is whether you could explain the work, its risks and its economics to an expert without bluffing." },
      { type: "p", text: "It is also worth remembering that the circle can shrink. Markets, platforms and tools change. Something you were expert in five years ago may now sit at the edge." },

      { type: "h2", text: "Which brief should you have said no to?" },
      { type: "p", text: "Look back at the projects that hurt most last year. Many of them will turn out to have sat just outside the circle. Draw the line now, before the next one arrives." },
    ],
    faq: [
      { q: "What is a circle of competence?", a: "It is the set of subjects, markets and skills you understand deeply enough to judge well. The idea is to know its boundaries and act differently inside and outside it." },
      { q: "Who came up with the circle of competence?", a: "Warren Buffett described it in his 1996 letter to Berkshire Hathaway shareholders, and Charlie Munger applied it more widely to careers and life." },
      { q: "What does \"knowing its boundaries is vital\" mean?", a: "Buffett's point is that the size of your expertise matters less than being honest about where it ends, because the costliest mistakes happen just outside that edge." },
      { q: "How can a business apply the circle of competence?", a: "List what you do exceptionally and what you do only adequately, then for each new opportunity decide whether to decline it, partner with a specialist, or invest deliberately to grow your expertise." },
    ],
    sources: [
      { label: "Warren Buffett, Berkshire Hathaway 1996 letter to shareholders" },
    ],
    keywords: ["circle of competence", "Warren Buffett circle of competence", "mental models", "know your limits", "decision making", "agency strategy"],
  },
  /* ───────────────────────── Second-order thinking ───────────────────────── */
  {
    slug: "second-order-thinking",
    title: "Second-Order Thinking: Ask \"And Then What?\" Before You Decide",
    seoTitle: "Second-Order Thinking for Leaders: And Then What?",
    description:
      "Second-order thinking means asking \"and then what?\" before you decide. What it is, where it comes from, and how agency and business leaders can use it this week.",
    topics: ["mental-models", "leadership"],
    published: "2026-11-18",
    digestDate: "2026-11-17",
    summary:
      "Second-order thinking is the habit of asking one more question before you decide: and then what? First-order thinking stops at what happens right after a decision. Second-order thinking follows the chain to the second and third consequences, which is usually where the real cost, or the real payoff, shows up.",
    takeaways: [
      "Most people stop at step one. The real cost or payoff usually arrives in the second or third consequence.",
      "Howard Marks made \"second-level thinking\" famous in his 2011 book The Most Important Thing.",
      "In any connected system you can never do just one thing: every action has side effects.",
      "Quick wins often become slow costs: discounting, unlimited revisions and single points of failure.",
      "Before deciding, write down what the choice means in 10 minutes, 10 months and 10 years.",
    ],
    carousel: cards("second-order-thinking", [
      "Card 1 of 6. Mental models for leaders: Second-order thinking. The habit of asking one more question: and then what?",
      "Card 2 of 6. The idea: most people stop at step one. First-order thinking asks what happens right after I decide. Second-order thinking asks and then what, and after that? The real cost, or the real payoff, usually shows up in the second or third consequence.",
      "Card 3 of 6. Where it comes from: in 2011 investor Howard Marks made second-level thinking famous in his book The Most Important Thing. His point: if you think the same way as everyone else, you'll get the same results as everyone else. You can never do just one thing: ecologist Garrett Hardin's reminder that in any connected system, every action has side effects.",
      "Card 4 of 6. In agencies: quick wins, slow costs. Cut your fee to win a pitch; then what? The client anchors to that price and every project runs on thin margins. Say yes to every revision; then what? The client learns scope has no limit. Hire one senior star; then what? Does the team grow, or does everything route through one person?",
      "Card 5 of 6. Try it this week: go two steps deeper. One, pick one decision on your desk this week. Two, write what it means in 10 minutes, 10 months and 10 years. Three, ask who else it affects and how they'll react. Four, decide only after you've gone two steps deep.",
      "Card 6 of 6. Remember: and then what? The one question behind second-order thinking. Which quick win today could become next year's problem? Chan Leong, CEO, Speaker, Builder.",
    ]),
    body: [
      { type: "p", text: "Most bad decisions are not stupid. They are incomplete." },
      { type: "p", text: "They answer the first question, \"what happens right after I decide?\", and stop there. Second-order thinking asks one more: and then what?" },

      { type: "h2", text: "What is second-order thinking?" },
      { type: "p", text: "First-order thinking looks at the immediate result of a decision. Second-order thinking follows the chain: and then what, and after that? It is a simple habit, but it changes outcomes, because the real cost or the real payoff usually shows up in the second or third consequence, not the first." },
      { type: "p", text: "Cut prices and sales go up this month. That is first order. Customers learn to wait for the next discount, competitors match you, and your margins never recover. That is second and third order." },

      { type: "h2", text: "Where does second-order thinking come from?" },
      { type: "p", text: "The idea is old, but investor Howard Marks made \"second-level thinking\" famous in his 2011 book The Most Important Thing. His point: if you think the same way as everyone else, you will get the same results as everyone else. An edge comes from seeing one step further than the crowd." },
      { type: "p", text: "Ecologist Garrett Hardin put a related idea memorably: you can never do just one thing. In any connected system, and a company is one, every action has side effects." },

      { type: "h2", text: "How does second-order thinking apply in agencies and business?" },
      { type: "p", text: "Agencies are full of quick wins that turn into slow costs. Three I come back to:" },
      { type: "ul", items: [
        "**Cut your fee to win a pitch.** Then what? The client anchors to that price, and every project after it runs on thin margins.",
        "**Say yes to every revision.** Then what? The client learns that scope has no limit, and so does the next one they refer.",
        "**Hire one senior star.** Then what? Does the team grow around them, or does every decision now route through one person?",
      ] },
      { type: "p", text: "None of these are wrong in themselves. They are wrong when nobody asks the second question before saying yes." },

      { type: "h2", text: "How do you practise second-order thinking?" },
      { type: "p", text: "Go two steps deeper on one real decision this week:" },
      { type: "ol", items: [
        "Pick one decision on your desk.",
        "Write down what it means in 10 minutes, 10 months and 10 years.",
        "Ask who else it affects, and how they will react.",
        "Decide only after you have gone two steps deep.",
      ] },
      { type: "p", text: "It pairs well with [inversion](/insights/inversion-mental-model): inversion asks what would guarantee failure; second-order thinking asks what your fix will cause next." },

      { type: "h2", text: "Which quick win today could become next year's problem?" },
      { type: "p", text: "That is the question to take into your next leadership meeting. And then what?" },
    ],
    faq: [
      { q: "What is second-order thinking?", a: "Second-order thinking is considering the consequences of the consequences of a decision, by repeatedly asking \"and then what?\", instead of stopping at the immediate result." },
      { q: "Who came up with second-order thinking?", a: "The idea is old, but investor Howard Marks popularised \"second-level thinking\" in his 2011 book The Most Important Thing." },
      { q: "What is an example of second-order thinking in business?", a: "Cutting a fee to win a pitch wins the client now (first order), but the client then anchors to the low price and every later project runs on thin margins (second order)." },
      { q: "How do you practise second-order thinking?", a: "Take one decision and write down what it means in 10 minutes, 10 months and 10 years, ask who else it affects and how they will react, then decide." },
    ],
    sources: [
      { label: "Howard Marks, The Most Important Thing (2011)" },
      { label: "Garrett Hardin's \"you can never do just one thing\", his first law of ecology" },
    ],
    keywords: ["second-order thinking", "second-level thinking", "mental models", "decision making", "Howard Marks", "and then what"],
  },

  /* ───────────────────────── Parkinson's law ───────────────────────── */
  {
    slug: "parkinsons-law",
    title: "Parkinson's Law: Why Work Takes Exactly as Long as You Let It",
    seoTitle: "Parkinson's Law Explained: Why Work Fills the Time",
    description:
      "Parkinson's law says work expands to fill the time available. What it means, where it comes from, how it shows up in agencies, and how to shrink the container.",
    topics: ["mental-models", "leadership"],
    published: "2026-11-18",
    digestDate: "2026-11-16",
    summary:
      "Parkinson's law is the observation that work expands to fill the time available for its completion. Give a task a week and it takes a week; give it a day and it often gets done in a day. The extra time goes into polish nobody notices, overthinking and starting late. Shorter, deliberate deadlines force decisions about what matters.",
    takeaways: [
      "Same task, different deadline: the work barely changes, the time it takes does.",
      "C. Northcote Parkinson described it in a satirical essay in The Economist in 1955.",
      "Spare time becomes polish nobody notices; far deadlines feel safe, so we start late.",
      "In agencies: two-week pitches finished the night before, hour-long meetings, budgets spent in full.",
      "Shrink the container, but go easy on complex work: cut too deep and you trade speed for mistakes.",
    ],
    carousel: cards("parkinsons-law", [
      "Card 1 of 6. Mental models for leaders: Parkinson's law. Why tasks take exactly as long as you let them.",
      "Card 2 of 6. The idea: same task, different deadline. Given one week, it takes a week. Given one day, it often gets done in a day. The work barely changes. What fills the gap is extra polish, overthinking and putting it off.",
      "Card 3 of 6. Where it comes from: in 1955 C. Northcote Parkinson, a British naval historian, wrote a satirical essay for The Economist. He noticed government departments kept hiring even as their actual workload shrank. People created work for each other to fill the time. Why it happens: spare time becomes polish nobody notices; far deadlines feel safe, so we start late; tight deadlines force us to decide what matters.",
      "Card 4 of 6. In agencies: sound familiar? A two-week pitch is finished the night before. In a one-hour meeting every minute gets used, needed or not. A full budget is spent in full, whatever the scope. Open revisions become rounds that never quite end.",
      "Card 5 of 6. Try it this week: shrink the container. One, pick one task on your list this week. Two, give it half the time you'd normally allow. Three, book meetings for 25 minutes, not an hour. Four, ship version one; refine only if it matters. Go easy on complex work: cut too deep and you trade speed for mistakes.",
      "Card 6 of 6. Remember: Work expands so as to fill the time available for its completion. C. Northcote Parkinson, 1955. What's taking a week in your business that deserves a day? Chan Leong, CEO, Speaker, Builder.",
    ]),
    body: [
      { type: "p", text: "Same task. Different deadline. Different result." },
      { type: "p", text: "Give a task a week and it takes a week. Give it a day and it often gets done in a day. The work itself barely changes. What fills the gap is extra polish, overthinking and putting it off." },

      { type: "h2", text: "What is Parkinson's law?" },
      { type: "quote", text: "Work expands so as to fill the time available for its completion.", cite: "C. Northcote Parkinson, The Economist, 1955" },
      { type: "p", text: "Parkinson's law is the observation that the time a task takes depends less on the task than on the time you allow for it. Deadlines are not just a measure of the work. They shape it." },

      { type: "h2", text: "Where does Parkinson's law come from?" },
      { type: "p", text: "C. Northcote Parkinson was a British naval historian. In 1955 he wrote a satirical essay for The Economist about government departments that kept hiring even as their actual workload shrank. People created work for each other to fill the time. The joke landed because everyone recognised it." },

      { type: "h2", text: "Why does work expand to fill the time?" },
      { type: "ol", items: [
        "**Spare time becomes polish nobody notices.** The last 20% of effort often changes nothing the client sees.",
        "**Far deadlines feel safe, so we start late.** A deadline two weeks away is not urgent until it is two days away.",
        "**Tight deadlines force decisions.** With less time, you have to decide what matters, and that is usually the useful part.",
      ] },

      { type: "h2", text: "How does Parkinson's law show up in agencies?" },
      { type: "p", text: "If you run or work in an agency, this will sound familiar:" },
      { type: "ul", items: [
        "**A two-week pitch** is finished the night before.",
        "**A one-hour meeting** uses every minute, needed or not.",
        "**A full project budget** is spent in full, whatever the scope.",
        "**Open-ended revisions** become rounds that never quite end.",
      ] },

      { type: "h2", text: "How do you beat Parkinson's law?" },
      { type: "p", text: "Shrink the container. Try it on one task this week:" },
      { type: "ol", items: [
        "Pick one task on your list.",
        "Give it half the time you would normally allow.",
        "Book meetings for 25 minutes, not an hour.",
        "Ship version one, and refine only if it matters.",
      ] },
      { type: "callout", title: "A caveat", text: "Go easy on complex work. Cut too deep and you trade speed for mistakes. The aim is to remove slack, not to rush judgement." },
      { type: "p", text: "One more warning, from [Goodhart's law](/insights/goodharts-law): shorter deadlines only help if you are measuring the right outcome. Faster delivery that creates more revision rounds is not faster." },

      { type: "h2", text: "What is taking a week in your business that deserves a day?" },
      { type: "p", text: "Find one. Halve the time. See what actually changes." },
    ],
    faq: [
      { q: "What is Parkinson's law?", a: "Parkinson's law states that \"work expands so as to fill the time available for its completion\": tasks tend to take as long as the time allowed for them." },
      { q: "Who created Parkinson's law?", a: "C. Northcote Parkinson, a British naval historian, in a satirical essay published in The Economist in 1955." },
      { q: "How do you overcome Parkinson's law?", a: "Set shorter, deliberate deadlines: give a task about half the usual time, book shorter meetings, and ship a first version before refining. Avoid cutting too deep on complex work." },
      { q: "What is an example of Parkinson's law at work?", a: "A pitch given two weeks is finished the night before, and a meeting booked for an hour uses the full hour whether or not it is needed." },
    ],
    sources: [
      { label: "C. Northcote Parkinson, \"Parkinson's Law\", The Economist, 1955" },
    ],
    keywords: ["Parkinson's law", "work expands to fill the time", "productivity", "deadlines", "mental models", "time management for leaders"],
  },

  /* ───────────────────────── Goodhart's law ───────────────────────── */
  {
    slug: "goodharts-law",
    title: "Goodhart's Law: When a Measure Becomes a Target",
    seoTitle: "Goodhart's Law in Marketing: When KPIs Backfire",
    description:
      "Goodhart's law: when a measure becomes a target, it stops being a good measure. Where it comes from, how it breaks marketing KPIs, and how to stress-test yours.",
    topics: ["mental-models", "marketing"],
    published: "2026-11-18",
    digestDate: "2026-11-16",
    summary:
      "Goodhart's law says that when a measure becomes a target, it ceases to be a good measure. A number tells you how things are going; once people are rewarded for moving it, they find the cheapest way to move it, not the best way. The number goes up. Reality does not. The fix is to pair every KPI with a counter-metric and review them together.",
    takeaways: [
      "Step 1: a measure tells you how things are going. Step 2: make it a target. Step 3: people optimise the number itself.",
      "Named after economist Charles Goodhart (1975); the popular phrasing is Marilyn Strathern's.",
      "The cobra story is often told as history; better read as a parable.",
      "In marketing: reach becomes cheap impressions, engagement becomes bait posts, billable hours reward slow work.",
      "Pair every KPI with a counter-metric, such as reach with conversions, and never review one alone.",
    ],
    carousel: cards("goodharts-law", [
      "Card 1 of 6. Mental models for leaders: Goodhart's law. Why chasing a number can quietly ruin the thing it measures.",
      "Card 2 of 6. The idea: the number goes up, reality doesn't. Step 1, a measure: a number that tells you how things are going. Step 2, make it a target: people start optimising the number itself. Step 3, the result: they find the cheapest way to move it, not the best way.",
      "Card 3 of 6. Where it comes from: in 1975 Charles Goodhart, an economist advising the Bank of England, saw indicators stop working once policy started targeting them. The cobra parable: a city pays a bounty for every dead cobra; people start breeding cobras to cash in; the bounty ends and the snakes get released. The target was hit. The goal got worse. Often told as history, better read as a parable.",
      "Card 4 of 6. In marketing: I see it every week. Target reach, and it quietly becomes cheap impressions nobody remembers. Target engagement: bait posts that don't sell. Target billable hours: slow work rewarded over smart work. Target speed: more revision rounds later.",
      "Card 5 of 6. Try it this week: stress-test one KPI. One, pick one number your team reports every week. Two, ask how someone could hit this while making things worse. Three, pair it with a counter-metric, like reach with conversions. Four, review them together, never one alone.",
      "Card 6 of 6. Remember: When a measure becomes a target, it ceases to be a good measure. Marilyn Strathern, summarising Goodhart. Which number in your business is being quietly gamed right now? Teng Chan Leong, CEO, Speaker, Builder.",
    ]),
    body: [
      { type: "p", text: "The number goes up. Reality does not." },
      { type: "p", text: "Every leader has seen it: a dashboard full of green, and a business that does not feel any better. Goodhart's law explains why." },

      { type: "h2", text: "What is Goodhart's law?" },
      { type: "quote", text: "When a measure becomes a target, it ceases to be a good measure.", cite: "Marilyn Strathern, summarising Goodhart" },
      { type: "p", text: "It happens in three steps:" },
      { type: "ol", items: [
        "**A measure.** A number tells you how things are going.",
        "**Make it a target.** People are rewarded for the number, so they start optimising the number itself.",
        "**The result.** They find the cheapest way to move it, not the best way.",
      ] },

      { type: "h2", text: "Where does Goodhart's law come from?" },
      { type: "p", text: "In 1975 Charles Goodhart, a British economist advising the Bank of England, observed that monetary indicators stopped behaving reliably once policy started targeting them. Anthropologist Marilyn Strathern later gave the idea its popular phrasing, quoted above." },
      { type: "h3", text: "The cobra parable" },
      { type: "p", text: "A city pays a bounty for every dead cobra. People start breeding cobras to cash in. The bounty ends, and the snakes get released. The target was hit. The goal got worse." },
      { type: "p", text: "This \"cobra effect\" is often told as colonial history in Delhi, but it is not historically confirmed. Read it as a parable. It is still a useful one." },

      { type: "h2", text: "How does Goodhart's law show up in marketing?" },
      { type: "p", text: "Marketing runs on numbers, which makes it especially exposed:" },
      { type: "ul", items: [
        "**Reach targets** quietly become cheap impressions nobody remembers.",
        "**Engagement targets** become bait posts that do not sell.",
        "**Billable-hour targets** reward slow work over smart work.",
        "**Speed targets** create more revision rounds later.",
      ] },
      { type: "p", text: "None of these metrics is bad. Each becomes bad when it is the only thing anyone is paid or praised for." },

      { type: "h2", text: "How do you protect your KPIs from Goodhart's law?" },
      { type: "p", text: "Stress-test one KPI this week:" },
      { type: "ol", items: [
        "Pick one number your team reports every week.",
        "Ask: how could someone hit this while making things worse?",
        "Pair it with a counter-metric, such as reach with conversions, or speed with revision rounds.",
        "Review them together. Never one alone.",
      ] },
      { type: "p", text: "It is the same discipline I argued for in [retail media](/insights/retail-media-malaysia-brand-building-at-point-of-purchase): do not take credit for sales you would have had anyway. Measure what really changed." },

      { type: "h2", text: "Which number in your business is being quietly gamed right now?" },
      { type: "p", text: "If you cannot think of one, look harder. Then pair it." },
    ],
    faq: [
      { q: "What is Goodhart's law?", a: "Goodhart's law is the principle that when a measure becomes a target, it ceases to be a good measure, because people start optimising the number rather than the outcome it was meant to track." },
      { q: "Who came up with Goodhart's law?", a: "Economist Charles Goodhart described it in 1975 while advising the Bank of England. Anthropologist Marilyn Strathern gave it the popular phrasing." },
      { q: "What is the cobra effect?", a: "The cobra effect is a parable in which a bounty on dead cobras led people to breed cobras, and ending the bounty led to the snakes being released. It is widely told but not historically confirmed." },
      { q: "How do you avoid Goodhart's law with KPIs?", a: "Pair each KPI with a counter-metric that would expose gaming, such as reach with conversions, and always review the two together." },
    ],
    sources: [
      { label: "Charles Goodhart, papers on monetary policy for the Bank of England (1975)" },
      { label: "Marilyn Strathern, \"Improving ratings: audit in the British University system\" (1997), source of the popular phrasing" },
    ],
    keywords: ["Goodhart's law", "when a measure becomes a target", "KPI", "marketing metrics", "cobra effect", "mental models"],
  },

  /* ───────────────────────── Inversion ───────────────────────── */
  {
    slug: "inversion-mental-model",
    title: "Inversion: Ask What Would Guarantee Failure, Then Avoid It",
    seoTitle: "Inversion Mental Model: Charlie Munger's Thinking Tool",
    description:
      "Inversion, Charlie Munger's favourite thinking tool: instead of asking how to succeed, ask what would guarantee failure, then avoid those things first.",
    topics: ["mental-models", "leadership"],
    published: "2026-11-18",
    digestDate: "2026-11-07",
    summary:
      "Inversion means flipping a problem around. Instead of asking \"how do I succeed?\", ask \"what would guarantee failure?\", then avoid those things first. It works because failure is easier to picture than success, and avoiding big mistakes compounds. Success often comes less from brilliant moves than from not making obvious errors.",
    takeaways: [
      "Flip the question: what would guarantee failure? Then avoid those things first.",
      "\"Invert, always invert\" is credited to mathematician Carl Jacobi; Charlie Munger made it a business tool.",
      "Failure lists are easier and more concrete to write than success plans.",
      "Avoiding big mistakes compounds over time.",
      "Try it on one client: what would make them leave in six months?",
    ],
    carousel: cards("inversion-mental-model", [
      "Card 1 of 6. Mental models for leaders: Inversion. Charlie Munger's favourite thinking tool: solve the problem backwards.",
      "Card 2 of 6. The idea: flip the question. The usual question: how do I succeed? Flip it: what would guarantee failure? Then avoid those things first.",
      "Card 3 of 6. Where it comes from: in the 1800s, mathematician Carl Jacobi solved hard problems by working them backwards. Charlie Munger made invert, always invert a tool for business and life. 1986, the misery speech: asked to tell graduates how to be happy, Munger listed the surest ways to be miserable instead, like envy, resentment and unreliability.",
      "Card 4 of 6. Why it works: avoiding beats chasing. Failure is concrete: a list of ways to fail is easier to write than a plan to win. Mistakes compound: skipping one big error is worth more than one clever move. Blind spots surface: optimistic plans hide risks, and inversion drags them out.",
      "Card 5 of 6. Try it this week: keep your best client. One, ask what would make them leave in six months. Two, list the top three answers, and be honest. Three, find the one you're closest to doing already. Four, fix that one this week.",
      "Card 6 of 6. Remember: invert, always invert. Carl Jacobi, as quoted by Charlie Munger. What would guarantee failure for your biggest goal this year? Chan Leong, CEO, Speaker, Builder.",
    ]),
    body: [
      { type: "p", text: "Most planning asks one question: how do we succeed?" },
      { type: "p", text: "Inversion asks the opposite: what would guarantee that we fail? Then it tells you to avoid those things first." },

      { type: "h2", text: "What is the inversion mental model?" },
      { type: "p", text: "Inversion is solving a problem backwards. Instead of designing the path to a goal, you list the surest ways to miss it, and remove them. Success often comes less from brilliant moves and more from avoiding obvious mistakes." },

      { type: "h2", text: "Where does inversion come from?" },
      { type: "p", text: "The phrase \"invert, always invert\" is credited to Carl Jacobi, a 19th-century German mathematician who solved hard problems by working backwards." },
      { type: "p", text: "Charlie Munger, Warren Buffett's long-time partner at Berkshire Hathaway, made it his favourite thinking tool for business and life. In a 1986 commencement speech he famously gave the graduates not advice on how to be happy, but a list of the surest ways to be miserable: envy, resentment and unreliability among them. He also liked the old line about wanting to know where he would die, so he would never go there." },

      { type: "h2", text: "Why does inversion work?" },
      { type: "ul", items: [
        "**Our brains spot threats faster than they imagine success.** A failure list is easier, and more concrete, to write than a success plan.",
        "**Avoiding big mistakes compounds.** Buffett has said that he and Munger learned to avoid hard business problems rather than to solve them.",
        "**It exposes blind spots.** Optimistic plans hide the risks that inversion drags into the open.",
      ] },

      { type: "h2", text: "How do you use inversion in a business?" },
      { type: "p", text: "Pick one goal. For an agency, a good one is keeping a key client. Then:" },
      { type: "ol", items: [
        "Ask: what would make this client leave in six months?",
        "List the top three answers. Be honest: slow replies, a junior team on their account, surprise invoices, work that stopped improving.",
        "Find the one you are closest to doing already.",
        "Fix that one this week.",
      ] },
      { type: "h2", text: "What does inversion look like in marketing and agency work?" },
      { type: "p", text: "The same flip works on almost any goal a marketing team or agency sets:" },
      { type: "ul", items: [
        "**Launching a campaign.** Instead of \"how do we make this go viral?\", ask \"what would make this campaign flop?\" Unclear message, wrong audience, no budget left for the second week. Fix those before polishing the idea.",
        "**Winning a pitch.** Ask \"what would make the client pick someone else?\" A deck about us instead of them, no clear answer on cost, nobody senior in the room. Each answer is a to-do.",
        "**Hiring.** Ask \"what would make a great hire quit in their first 90 days?\" A messy onboarding, a role that changes every week, nobody checking in. Most of these are cheap to prevent.",
      ] },
      { type: "p", text: "Inversion pairs naturally with [second-order thinking](/insights/second-order-thinking): inversion finds the mistakes to avoid; second-order thinking checks what your fix will cause next. It is also the spirit of the scenario stress tests in [strategy is not planning](/insights/strategy-vs-planning-building-a-resilient-business)." },

      { type: "h2", text: "How is inversion different from a pre-mortem?" },
      { type: "p", text: "They are close cousins. A pre-mortem, a technique described by psychologist Gary Klein, asks a team to imagine that a project has already failed and to write down why. Inversion is the broader habit behind it: you can apply it to a single decision, a career or a whole business, not only to a project that is about to start." },
      { type: "p", text: "Both work for the same reason. Imagining a failure that has already happened gives people permission to say the uncomfortable things they would otherwise keep quiet in a planning meeting." },

      { type: "h2", text: "What are the common mistakes when using inversion?" },
      { type: "ul", items: [
        "**Stopping at the list.** Writing the ways you could fail feels productive. The value only comes when you change one of them this week.",
        "**Listing other people's failures.** \"The client will be difficult\" is not useful. \"We reply to the client slowly\" is something you can fix.",
        "**Confusing it with pessimism.** Inversion is not about expecting to fail. It is about clearing the obvious traps so your good ideas get a fair chance.",
      ] },

      { type: "h2", text: "What would guarantee failure for your biggest goal this year?" },
      { type: "p", text: "Write the list. Then make sure you are not already doing the first thing on it." },
    ],
    faq: [
      { q: "What is the inversion mental model?", a: "Inversion is approaching a problem backwards: instead of asking how to succeed, you ask what would guarantee failure and then avoid those things." },
      { q: "Who said \"invert, always invert\"?", a: "The phrase is credited to the 19th-century German mathematician Carl Jacobi. Charlie Munger popularised it as a thinking tool for business and life." },
      { q: "How do you apply inversion in business?", a: "Choose a goal, list what would make it fail (for example, what would make a key client leave in six months), then fix the failure cause you are closest to already." },
      { q: "Is inversion the same as a pre-mortem?", a: "They are related. A pre-mortem, described by psychologist Gary Klein, imagines a project has already failed and asks why. Inversion is the broader habit of asking what would cause failure, for any decision or goal." },
    ],
    sources: [
      { label: "Charlie Munger, commencement speech at the Harvard School, Los Angeles, 1986" },
      { label: "Berkshire Hathaway 1989 shareholder letter, on avoiding rather than solving hard problems" },
      { label: "Gary Klein, \"Performing a Project Premortem\", Harvard Business Review, September 2007" },
    ],
    keywords: ["inversion mental model", "Charlie Munger inversion", "invert always invert", "mental models", "decision making", "pre-mortem"],
  },
];
