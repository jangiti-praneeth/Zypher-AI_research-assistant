export async function callOpenAI(prompt: string): Promise<string | null> {
  const key = Deno.env.get("OPENAI_API_KEY");
  if (!key) return null;

  // Basic Chat Completions call using OpenAI REST API
  try {
    const res = await fetch("https://api.openai.com/v1/chat/completions", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${key}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        model: "gpt-4o-mini",
        messages: [{ role: "user", content: prompt }],
        max_tokens: 400,
        temperature: 0.2,
      }),
    });
    if (!res.ok) {
      const text = await res.text();
      console.warn("OpenAI API error:", res.status, text);
      return null;
    }
    const data = await res.json();
    const choice = data.choices?.[0]?.message?.content || data.choices?.[0]?.text;
    return choice ?? null;
  } catch (err) {
    console.warn("Error calling OpenAI:", err);
    return null;
  }
}
