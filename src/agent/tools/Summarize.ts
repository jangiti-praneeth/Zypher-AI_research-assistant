import { callOpenAI } from "../../llm/provider.ts";

export async function summarize(query: string, snippets: string[]) {
  // If there are no snippets, return a prompt-based fallback
  if (!snippets || snippets.length === 0) {
    return `I couldn't find direct content for "${query}".`;
  }

  const combined = snippets.join("\n\n");

  // If OpenAI key is present, try to call the model for a concise summary
  try {
    const apiKey = Deno.env.get("OPENAI_API_KEY");
    if (apiKey) {
      const prompt = `Summarize the following content in 3 short bullet points. Content:\n\n${combined}`;
      const resp = await callOpenAI(prompt);
      if (resp) return resp;
    }
  } catch (err) {
    // fall back to simple summarization
    console.warn("LLM summarization failed, falling back:", err);
  }

  // Simple fallback summary: take first 2 sentences from each snippet
  const sentences = combined.split(/(?<=[.!?])\s+/).slice(0, 6).join(" ");
  return sentences;
}
