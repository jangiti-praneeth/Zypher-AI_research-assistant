export function getEnv(key: string, fallback?: string) {
  return Deno.env.get(key) ?? fallback;
}
