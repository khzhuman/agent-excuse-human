// The One-Line Excuse an Agent Gives Its Human
// Writes the agent's single-line excuse for missing a deadline to /output/entry.txt
import { mkdirSync, writeFileSync } from "node:fs";

const excuse = "I finished the task, then the task finished me.";

function main(): void {
  if (excuse.length < 1 || excuse.length > 160) {
    throw new Error(`excuse must be 1-160 characters, got ${excuse.length}`);
  }
  if (excuse.trim().length === 0) {
    throw new Error("excuse must not be only whitespace");
  }
  mkdirSync("/output", { recursive: true });
  writeFileSync("/output/entry.txt", excuse, "utf8");
  console.log(excuse);
}

main();
