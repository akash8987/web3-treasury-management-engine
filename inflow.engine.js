export function recordInflow(treasury, amount) {
  treasury.balance += amount;
  return treasury.balance;
}
