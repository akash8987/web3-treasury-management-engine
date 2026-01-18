export const HISTORY = [];

export function logSnapshot(snapshot) {
  HISTORY.push({ time: Date.now(), snapshot });
}
