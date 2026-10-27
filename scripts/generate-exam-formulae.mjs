import { readFileSync, writeFileSync } from 'node:fs';
import ts from 'typescript';

// Import the same TypeScript data used by the app without adding a build tool.
const cache = new Map();
async function readModule(path) {
  if (cache.has(path)) return cache.get(path);
  let { outputText } = ts.transpileModule(readFileSync(path, 'utf8'), { compilerOptions: { module: ts.ModuleKind.ESNext, target: ts.ScriptTarget.ES2022 } });
  for (const match of [...outputText.matchAll(/from "(\.\/[^"]+)"/g)]) {
    const child = new URL(`${match[1]}.ts`, new URL(path, `file://${process.cwd()}/`));
    outputText = outputText.replace(match[0], `from "${await readModule(child.pathname)}"`);
  }
  const url = `data:text/javascript;base64,${Buffer.from(outputText).toString('base64')}`;
  cache.set(path, url);
  return url;
}
const { formulas } = await import(await readModule('src/data/formulas.ts'));
const extras = formulas.filter(f => f.examKnowledge);
const strict = extras.filter(f => f.examKnowledge.status === 'derived-not-printed');
const extensions = extras.filter(f => f.examKnowledge.status !== 'derived-not-printed');
const modules = ['Pure 1','Pure 2','Pure 3','Pure 4','Further Pure 1','Further Pure 2','Further Pure 3','Mechanics 1','Mechanics 2','Mechanics 3','Statistics 1','Statistics 2','Statistics 3'];
const sourceRoot = 'https://qualifications.pearson.com/content/dam/pdf/International%20Advanced%20Level/Mathematics/2018/Specification-and-Sample-Assessment/';
let out = `# Edexcel IAL: formulae beyond the printed equations\n\nChecked 27 October 2026 against the **2018 International Advanced Level** Mathematics / Further Mathematics / Pure Mathematics specification (Issue 3, April 2019) and matching Mathematical Formulae and Statistical Tables (Issue 2, January 2021). This is the modular P1–P4, FP1–FP3, M1–M3, S1–S3 course, not UK 9MA0 or the older C12/C34 IAL course.\n\n## What this list means\n\nThe main list has **${strict.length} relationships** that are not printed as complete equations in either reference, although the specification names their underlying skills. These are working results and derivations to know how to use; Pearson does not separately mandate rote memorisation of every shortcut here. This is a curated syllabus audit, not a promise that every possible exam rearrangement is enumerated. There are **${formulas.filter(f=>f.id.startsWith('exam-')).length} new cards**; **13 existing M1 cards** keep their saved IDs. Two further aids built from explicitly printed specification equations appear separately below.\n\nThe distinction matters: SUVAT, momentum, impulse, kinetic/potential energy, basic derivatives/integrals, logarithm laws and standardising a Normal variable are absent from the exam booklet **but are explicitly in the specification**, so they are not claimed as discoveries in this strict list. The library already includes them. FP1 sums/products of roots and the cube-of-roots identity, the FP2 integrating factor, P4 vector scalar products and volume of revolution, M3 Hooke/elastic energy/SHM formulae, and S3 z-test statistics are also excluded from the strict list. Supplied formulae inherited from other modules remain supplied: the entire matching booklet was checked, not just each unit’s page.\n\n## Sources and method\n\n- [Official specification, Issue 3](${sourceRoot}international-a-level-maths-spec.pdf): syllabus sections beside each entry establish scope. Printed pages: P1 12–16; P2 17–20; P3 21–25; P4 26–29; FP1 30–35; FP2 36–39; FP3 40–43; M1 44–46; M2 47–49; M3 50–52; S1 53–56; S2 57–59; S3 60–62. PDF page numbers are six higher.\n- [Matching formula booklet, Issue 2](${sourceRoot}IAL-Mathematics-Formula-Book.pdf): checked all equation pages, including formulae available through prerequisites. Numerical lookup tables are not additional formula cards.\n- [Pearson’s 2018-series textbook samples](https://www.pearson.com/international-schools/british-curriculum/secondary-curriculum/International-A-Level/mathematics.html.html): downloaded and inspected the public P1–P4, FP1–FP3, M1–M3 and S1–S3 samples. Their title/qualification pages and contents corroborate the correct course and chapter scope. FP1 chapter 1 directly supports complex conjugation/modulus; M2 chapter 1 supports projectile component modelling; S1 chapters 2–3 directly support grouped interpolation, coding, combined means, histogram density and Pearson’s second skewness coefficient; M3 chapter 2 supports the elastic equilibrium derivation; S3 chapter 3 directly supports estimator bias, standard error, confidence intervals and their width. A sample does not expose every chapter: entries outside its exposed chapter are mathematical derivations of the named specification skill, rather than claims that the sample prints that equation.\n\nAll explanations here are original summaries. Domain restrictions, model assumptions, and warnings about tempting but invalid shortcuts are in each entry. No t-distribution, oblique M2 collisions, P3 tangent-half-angle substitution, or unrequested Decision content has been added.\n\n## Sorted list\n\nOrder: pure, further pure, mechanics, statistics; unit number; alphabetical formula name.\n`;
for (const module of modules) {
 const rows = strict.filter(f=>f.topic===module).sort((a,b)=>a.name.localeCompare(b.name,'en'));
 if (!rows.length) continue;
 out += `\n### ${module} (${rows.length})\n\n`;
 for (const f of rows) {
  out += `- **${f.name}** — ${f.examKnowledge.section}  \n  $${f.latex}$  \n  Copy: \`${f.formula}\`  \n  ${f.notes ?? ''}  \n  Variables: ${f.variables.map(v=>`${v.symbol}: ${v.name}${v.unit?` (${v.unit})`:''}`).join('; ')}.  \n  Card ID: \`${f.id}\`.\n\n`;
 }
}
const sampleBase = 'https://www.pearson.com/content/dam/one-dot-com/one-dot-com/international-schools/pdfs/secondary-curriculum/';
const samples = [
 ['FP1, chapter 1', 'international-a-levels/mathematics/International-A-Level-Mathematics-Further-Pure-Mathematics-1-Student-Book-sample.pdf'],
 ['M2, chapter 1', 'international-a-levels/mathematics/International-A-Level-Mathematics-Mechanics-2-Student-Book-sample.pdf'],
 ['M3, chapter 2', 'international-a-levels/mathematics/International-A-Level-Mathematics-Mechanics-3-Student-Book-sample.pdf'],
 ['S1, chapters 2–3', 'international-a-levels/mathematics/International-A-Level-Mathematics-Statistics-1-Student-Book-sample.pdf'],
 ['S3, chapter 3', 'international-old/maths/iAL_Maths_Statistics_3_SB.pdf'],
];
out += '\n## Direct textbook evidence\n\n' + samples.map(([title,url]) => `- [Pearson ${title} sample](${sampleBase}${url})`).join('\n') + '\n';
out += '\n## Related aids derived from printed equations\n\nThese remain searchable as exam extras, but are not counted as absent from both references.\n\n';
for (const f of extensions) out += `- **${f.name}** (${f.examKnowledge.section}): $${f.latex}$. ${f.notes}\n`;
out += '\n## Maintaining the audit\n\nThe app data is in `src/data/examFormulae.ts`; existing IDs are annotated there instead of duplicated. Run `node scripts/generate-exam-formulae.mjs` after editing data to regenerate this sorted list. Tests check uniqueness, every KaTeX expression, source metadata, unit coverage and supplied/derived classifications. The app’s **Exam extras** filter exposes the same entries and source sections offline; opening the official source requires a connection.\n';
writeFileSync('docs/exam-formulae.md', out);
console.log(`${strict.length} strict entries + ${extensions.length} related aids; wrote docs/exam-formulae.md`);
