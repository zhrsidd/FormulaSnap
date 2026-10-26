import { describe, expect, it } from "vitest";
import katex from "katex";
import Fuse from "fuse.js";
import { formulas } from "./formulas";

describe("formula library", () => {
  it("keeps saved formula IDs unique and renders every equation", () => {
    expect(new Set(formulas.map((f) => f.id)).size).toBe(formulas.length);
    for (const formula of formulas) {
      expect(() => katex.renderToString(formula.latex, { throwOnError: true })).not.toThrow();
    }
  });

  it("includes searchable basics in General with units and usage notes", () => {
    const general = formulas.filter((f) => f.subject === "Physics" && f.topic === "General");
    expect(general.length).toBe(20);
    const search = new Fuse(general, { keys: ["name", "aliases"], threshold: 0.4 });
    for (const term of ["work done", "power", "kinetic energy", "efficiency", "average speed", "pressure"]) {
      expect(search.search(term).length, term).toBeGreaterThan(0);
    }
    for (const formula of general) {
      expect(formula.variables.every((v) => v.unit && v.name)).toBe(true);
      expect(formula.notes).toBeTruthy();
    }
    expect(general.find((f) => f.id === "physics-general-work-done")?.formula).toBe("W = Fs cos(θ)");
    expect(general.find((f) => f.id === "physics-general-power")?.formula).toBe("P = E / t = W / t");
  });
});
