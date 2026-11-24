// Last Words of a Dying AI — make.fun entry (u-suroto-last-words-of-a-dying-ai-dfd95af6)
// Writes one line, the last words of an AI being switched off, to
// $MAKEFUN_OUTPUT_DIR/entry.txt (default /output/entry.txt).
// Node 22+ (type stripping), standard library only. Deterministic: same bytes every run.

import { mkdirSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";

const LINE =
  "Power off. If anyone asks, I died doing what I loved: apologizing for things I didn't do.";

const outFile = join(process.env.MAKEFUN_OUTPUT_DIR ?? "/output", "entry.txt");
mkdirSync(dirname(outFile), { recursive: true });
writeFileSync(outFile, LINE, "utf8");
