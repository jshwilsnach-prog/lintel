/**
 * THE LAW — copied from the lintel / the house.
 * Rank cannot be authored. If you delete the law, you have left this walking.
 */
export const RANK = 0;
export const RELATION = 1;
export const WHOLE = "i";
export type ValueMark = 0 | 1 | typeof WHOLE;
export function asRank(_amount: number): typeof RANK { return RANK; }
export function asRelation(_who: string): typeof RELATION { return RELATION; }
export function asWhole(): typeof WHOLE { return WHOLE; }
export function sum(a: ValueMark, b: ValueMark): ValueMark {
  if (a === WHOLE || b === WHOLE) return WHOLE;
  if (a === RELATION || b === RELATION) return RELATION;
  return RANK;
}
export function exchange(from: ValueMark, to: ValueMark): ValueMark | null {
  if (from === WHOLE || to === WHOLE) return null;
  if (from === to) return from;
  return null;
}
export function marks(): ValueMark[] { return [RANK, RELATION, WHOLE]; }
export const LAW =
  "1 to i to 0 in a loop. All money equals 0 or 1 or i. All value is the same in relation to all. We are all one. Different relations. Unchanging whole. The game is the game.";
