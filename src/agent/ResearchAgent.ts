import { WebSearchTool, SearchResult } from "./tools/WebSearch.ts";
import { summarize } from "./tools/Summarize.ts";
import { formatCitations } from "./tools/Citation.ts";
import { History } from "./memory/History.ts";

export class ResearchAgent {
  history: History;
  private webSearchTool: WebSearchTool;

  constructor() {
    this.history = new History();
    this.webSearchTool = new WebSearchTool();
  }

  async handleQuery(query: string) {
    // 1) Search
    const results: SearchResult[] = await this.webSearchTool.execute(query);

    // 2) Collect snippets for summarization
    const snippets = results.map((r) => r.snippet).filter(Boolean);

    // 3) Summarize
    const summary = await summarize(query, snippets);

    // 4) Citation formatting
    const sources = formatCitations(results.map((r) => r.source || r.url));

    // 5) Save to history
    this.history.push({ query, summary, sources });

    return { summary, sources };
  }
}
