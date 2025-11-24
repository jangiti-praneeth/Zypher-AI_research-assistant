import { ResearchAgent } from "./agent/ResearchAgent.ts";
import { readLines } from "https://deno.land/std@0.203.0/io/mod.ts";

async function main() {
  const agent = new ResearchAgent();

  console.log("Zypher Research Assistant (Deno)");
  console.log("Type a research query and press Enter. Ctrl+C to exit.");

  for await (const line of readLines(Deno.stdin)) {
    const query = line.trim();
    if (!query) continue;
    try {
      const result = await agent.handleQuery(query);
      console.log("\n--- Summary ---\n");
      console.log(result.summary);
      if (result.sources && result.sources.length) {
        console.log("\nSources:");
        for (const s of result.sources) console.log(`- ${s}`);
      }
      console.log("\nAsk another question:");
    } catch (err) {
      console.error("Error handling query:", err);
    }
  }
}

if (import.meta.main) main();
