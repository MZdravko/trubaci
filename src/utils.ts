export function splitFirstAndRest(text: string) {
  const words = text.trim().split(/\s+/); // Split by whitespace
  const first = words[0] || "";
  const rest = words.slice(1).join(" ");
  return [first, rest];
}
