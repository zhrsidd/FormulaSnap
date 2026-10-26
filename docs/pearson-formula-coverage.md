# Pearson booklet coverage

Source: [Pearson IAL Mathematics Formula Book, Issue 2, January 2021](https://qualifications.pearson.com/content/dam/pdf/International%20Advanced%20Level/Mathematics/2018/Specification-and-Sample-Assessment/IAL-Mathematics-Formula-Book.pdf).
Page numbers below are the printed numbers. New entries live in
`src/data/pearsonFormulas.ts` and retain stable IDs, copyable expressions,
variables, domain conditions and page references in Notes.

| Subject / topic | New cards | Printed pages | Coverage |
| --- | ---: | --- | --- |
| Maths / Pure 1 | 3 | 3 | Sphere, cone and cosine rule |
| Maths / Pure 2 | 10 | 3 | Sequences, series, change of base, binomial coefficients and expansions, trapezium rule |
| Maths / Pure 3 | 19 | 4–5 | Exponential identity, angle sums/differences, sum-to-product identities, missing derivatives, quotient rule and integrals |
| Maths / Pure 4 | 3 | 5 | Secant/cosecant integrals with equivalent forms, integration by parts |
| Further Mathematics / FPM1 | 10 | 6 | Summations, Newton–Raphson, conics, rotation and reflection |
| Further Mathematics / FPM2 | 12 | 7 | Polar area, complex numbers, roots of unity, Maclaurin and Taylor series |
| Further Mathematics / FPM3 | 53 | 8–11 | Vectors, hyperbolic functions, conics, derivatives, integrals, arc lengths and surfaces of revolution |
| Maths / Mechanics 2 | 3 | 13 | Centres of mass of triangular lamina, arc and sector |
| Maths / Statistics 1 | 15 | 14–17 | Probability, distributions, expectations, variance, correlation, regression, normal CDF and upper-tail definition |
| Maths / Statistics 2 | 10 | 18 | Binomial/Poisson probabilities and moments, continuous expectations/variance/CDF, uniform distribution |
| Maths / Statistics 3 | 8 | 25 | Independence, sampling distributions, unbiased estimators, rank correlation, chi-squared statistic |
| **Total** | **146** | | |

Equivalent forms share a card or refer to component cards: for example, PMCC
uses the separate S_xx, S_yy and S_xy definitions. Series are sometimes expressed
with summation notation rather than printing many terms. Existing formula IDs
are preserved. The binomial series shared by P2 and P4 remains in Pure 2, with
its P4 applicability noted; FP3 conic relationships already introduced in FP1
remain in FPM1 rather than being duplicated.

Decision 1 appears under Further Mathematics with an explanation: the source
explicitly supplies no required D1 formulae (p. 1). No outside-source D1
relationships have been invented. M3 is omitted. Numerical normal, binomial,
Poisson, chi-squared and correlation tables, and the random-number dataset,
are excluded. Distribution definitions and symbolic formulae are retained.

Layout validation uses the same card CSS and equation component as the app.
All new equations are measured at desktop and narrow widths; long identities
use aligned rows, and responsive font sizing preserves a 12 px minimum with
horizontal scrolling as a fallback for exceptionally narrow windows.
