import { mkdtempSync, mkdirSync, readFileSync, writeFileSync, rmSync } from "node:fs";
import { tmpdir } from "node:os";
import { resolve, join } from "node:path";
import { execFileSync } from "node:child_process";
import { expect, it } from "vitest";

it("assigns increasing release versions without changing the checkout", () => {
  const dir = mkdtempSync(join(tmpdir(), "formulasnap-version-"));
  const script = resolve("scripts/release-version.mjs");
  mkdirSync(join(dir, "src-tauri"));
  const config = join(dir, "src-tauri/tauri.conf.json");
  try {
    for (const run of [1, 42]) {
      writeFileSync(config, JSON.stringify({ version: "1.1.0" }));
      execFileSync(process.execPath, [script], { cwd: dir, env: { ...process.env, GITHUB_RUN_NUMBER: String(run) } });
      expect(JSON.parse(readFileSync(config, "utf8")).version).toBe(`1.1.${run}`);
    }
    expect(() => execFileSync(process.execPath, [script], {
      cwd: dir, env: { ...process.env, GITHUB_RUN_NUMBER: "" }, stdio: "pipe"
    })).toThrow();
  } finally {
    rmSync(dir, { recursive: true, force: true });
  }
});
