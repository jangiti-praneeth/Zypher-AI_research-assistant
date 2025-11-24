import { assert } from "https://deno.land/std@0.203.0/testing/asserts.ts";
import { WebSearchTool } from "../src/agent/tools/WebSearch.ts";

Deno.test("WebSearchTool returns results (or mocks)", async () => {
  const tool = new WebSearchTool();
  const res = await tool.execute("Zypher agent framework");
  // Should be an array of results
  assert(Array.isArray(res));
  // Each item should have title/snippet/url/source
  const item = res[0];
  assert(item.title && item.snippet && item.source);
});
