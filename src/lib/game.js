export function pickRandomWord(words) {
  return Array.from(words[Math.floor(Math.random()*words.length)]);
}
