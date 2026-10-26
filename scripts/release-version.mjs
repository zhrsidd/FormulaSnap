import { readFileSync, writeFileSync } from "node:fs";

// Every push gets a strictly newer patch version without committing generated files.
const run = Number(process.env.GITHUB_RUN_NUMBER);
if (!Number.isSafeInteger(run) || run < 1) throw new Error("Missing valid GITHUB_RUN_NUMBER");
const path = "src-tauri/tauri.conf.json";
const config = JSON.parse(readFileSync(path, "utf8"));
const [major, minor, patch] = config.version.split(".").map(Number);
if (![major, minor, patch].every(Number.isSafeInteger)) throw new Error("Expected a stable base version");
config.version = `${major}.${minor}.${patch + run}`;
writeFileSync(path, JSON.stringify(config, null, 2) + "\n");
console.log(`Building FormulaSnap ${config.version}`);
