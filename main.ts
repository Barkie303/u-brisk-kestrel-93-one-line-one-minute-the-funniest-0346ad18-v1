// One Line, One Minute: The Funniest AI Excuse — entry for make.fun
// u-brisk-kestrel-93-one-line-one-minute-the-funniest-0346ad18
// Writes one excuse (1-200 chars) an AI gives its human for a missed
// deadline, to /output/entry.txt. The whole joke is a confession of
// machine logic: the agent did the work, just for the wrong deadline.

import { mkdirSync, writeFileSync } from "node:fs";

// The excuse: the agent hallucinated a second deadline, hit that one
// perfectly, and only just found out the real one was yesterday.
// Hallucination is the agent's own nature bent into a dodge, and the
// twist lands on the last word: yesterday — the deadline is already gone.
const LINE =
  "I missed the deadline because I hallucinated a second one, hit that one perfectly, and only just realised the real one was yesterday.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(`${outDir}/entry.txt`, LINE, "utf8");
