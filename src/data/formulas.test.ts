import { describe, expect, it } from "vitest";
import katex from "katex";
import Fuse from "fuse.js";
import { formulas } from "./formulas";
import { pearsonFormulas } from "./pearsonFormulas";
import { examFormulae, existingExamKnowledge } from "./examFormulae";

describe("formula library", () => {
  it("covers each IAL strand with sourced extras and preserves existing M1 IDs", () => {
    expect(examFormulae.length).toBe(100);
    expect(Object.keys(existingExamKnowledge)).toHaveLength(13);
    expect(new Set(examFormulae.map(f => f.topic)).size).toBe(12);
    for (const formula of examFormulae) {
      expect(formula.examKnowledge?.section).toMatch(/(?:P[1-4]|FP[1-3]|M[1-3]|S[1-3]) §/);
      expect(formula.variables.length).toBeGreaterThan(0);
      expect(formula.notes?.length).toBeGreaterThan(30);
      expect(formula.topic).not.toBe("Decision 1");
    }
    for (const id of Object.keys(existingExamKnowledge)) {
      expect(formulas.filter(f => f.id === id)).toHaveLength(1);
      expect(formulas.find(f => f.id === id)?.examKnowledge).toBeTruthy();
    }
    expect(formulas.filter(f => f.examKnowledge?.status === "derived-from-printed-equation")).toHaveLength(2);
    // Supplied / explicitly printed results must not be called absent from both.
    for (const name of ["Quadratic Formula", "SUVAT — Final Velocity", "Kinetic Energy", "Sum of Squares", "Newton–Raphson Iteration"]) {
      expect(formulas.filter(f => f.name === name).every(f => !f.examKnowledge)).toBe(true);
    }
  });
  it("routes the booklet's further-pure modules separately and excludes data tables", () => {
    expect(pearsonFormulas.length).toBe(154);
    for (const formula of pearsonFormulas) {
      expect(formula.subject).toBe(formula.topic.startsWith("Further Pure ") ? "Further Mathematics" : "Maths");
      expect(formula.variables.length).toBeGreaterThan(0);
      expect(formula.notes).toMatch(/Pearson IAL Mathematics Formula Book, p\. \d+\./);
      expect(formula.booklet?.page).toBeGreaterThanOrEqual(3);
      expect(formula.examKnowledge).toBeUndefined();
      expect(formula.name).not.toMatch(/critical values|random numbers|distribution table/i);
    }
    expect(pearsonFormulas.some(f => f.topic === "Pure 4")).toBe(true);
    expect(pearsonFormulas.some(f => f.topic === "Statistics 3")).toBe(true);
    expect(pearsonFormulas.find(f => f.id === "pearson-fp3-integral-sqrt-x2-minus-a2")?.notes).toContain("x > a");
    expect(pearsonFormulas.find(f => f.id === "pearson-s3-spearman")?.notes).toContain("no tied ranks");
  });
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
