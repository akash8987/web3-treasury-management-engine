export function generateReport(treasury, allocations, validation) {
  console.log("----- Treasury Report -----");
  console.log("Treasury:", treasury.name);
  console.log("Balance:", treasury.balance);

  validation.forEach(v => {
    console.log("Category:", v.category, "Allocated:", v.allocated, "Valid:", v.valid);
  });

  console.log("---------------------------");
}
