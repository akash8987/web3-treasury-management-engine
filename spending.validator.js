export function validateSpending(allocations) {
  return allocations.map(a => {
    return {
      ...a,
      valid: a.allocated <= 1000
    };
  });
}
