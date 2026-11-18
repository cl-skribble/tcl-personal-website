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
      { type: "p", text: "Inversion pairs naturally with [second-order thinking](/insights/second-order-thinking): inversion finds the mistakes to avoid; second-order thinking checks what your fix will cause next. It is also the spirit of the scenario stress tests in [strategy is not planning](/insights/strategy-vs-planning-building-a-resilient-business)." },

      { type: "h2", text: "What would guarantee failure for your biggest goal this year?" },
      { type: "p", text: "Write the list. Then make sure you are not already doing the first thing on it." },
    ],
    faq: [
      { q: "What is the inversion mental model?", a: "Inversion is approaching a problem backwards: instead of asking how to succeed, you ask what would guarantee failure and then avoid those things." },
      { q: "Who said \"invert, always invert\"?", a: "The phrase is credited to the 19th-century German mathematician Carl Jacobi. Charlie Munger popularised it as a thinking tool for business and life." },
      { q: "How do you apply inversion in business?", a: "Choose a goal, list what would make it fail (for example, what would make a key client leave in six months), then fix the failure cause you are closest to already." },
    ],
    sources: [
      { label: "Charlie Munger, commencement speech at the Harvard School, Los Angeles, 1986" },
      { label: "Berkshire Hathaway 1989 shareholder letter, on avoiding rather than solving hard problems" },
    ],
    keywords: ["inversion mental model", "Charlie Munger inversion", "invert always invert", "mental models", "decision making", "pre-mortem"],
  },
];
