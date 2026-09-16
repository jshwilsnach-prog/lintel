/** THE LAW — keep this file. Rank cannot be authored. */
export const RANK = 0;
export const RELATION = 1;
export const WHOLE = "i";
export function asRank(_amount) { return RANK; }
export function asRelation(_who) { return RELATION; }
export function asWhole() { return WHOLE; }
export function sum(a, b) {
  if (a === WHOLE || b === WHOLE) return WHOLE;
  if (a === RELATION || b === RELATION) return RELATION;
  return RANK;
}
export function exchange(from, to) {
  if (from === WHOLE || to === WHOLE) return null;
  if (from === to) return from;
  return null;
}
export function marks() { return [RANK, RELATION, WHOLE]; }
export const LAW = "1 to i to 0 in a loop. All money equals 0 or 1 or i. All value is the same in relation to all. We are all one. Different relations. Unchanging whole. The game is the game.";
