export function allocateFunds(treasury, amount) {
  console.log("Allocating funds...");

  const perCategory = Math.floor(amount / treasury.categories.length);

  return treasury.categories.map(category => {
    return {
      category,
      allocated: perCategory
    };
  });
}
