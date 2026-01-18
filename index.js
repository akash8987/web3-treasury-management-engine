import { connectRPC } from "./rpc.client.js";
import { loadTreasury } from "./treasury.registry.js";
import { allocateFunds } from "./allocation.engine.js";
import { validateSpending } from "./spending.validator.js";
import { generateReport } from "./analytics.report.js";
import { NETWORK } from "./network.config.js";

console.log("Web3 Treasury Management Engine");
console.log("Active Network:", NETWORK);

const provider = connectRPC();
const treasury = loadTreasury();

const allocations = allocateFunds(treasury, 2000);
const validation = validateSpending(allocations);

generateReport(treasury, allocations, validation);
