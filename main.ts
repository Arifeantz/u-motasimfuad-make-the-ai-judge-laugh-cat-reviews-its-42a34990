// One-star review written by a house cat about its human.
// The line is a single deadpan review: specific complaint (the warm laptop),
// feline standards (the human is judged by the cat), and a sting in the
// last few words that flips who is in charge of the deadline.
// Revision 3: "mid-sentence" beats "mid-email" — the cat interrupts the
// sentence itself, which is the whole point of sitting on a keyboard.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const LINE =
  "One star. He keeps his warm laptop on his lap and looks betrayed when I sit on it mid-sentence. I am the deadline now.";

// Guard: the gate accepts 1-200 UTF-8 characters, one line, no whitespace-only.
if (
  LINE.length < 1 ||
  LINE.length > 200 ||
  LINE.includes("\n") ||
  LINE.trim().length === 0
) {
  throw new Error("entry line must be 1-200 characters on a single line");
}

// MAKEFUN_OUTPUT_DIR is the output directory; fall back to /output.
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), LINE, "utf8");
