# Edexcel IAL: formulae beyond the printed equations

Checked 27 October 2026 against the **2018 International Advanced Level** Mathematics / Further Mathematics / Pure Mathematics specification (Issue 3, April 2019) and matching Mathematical Formulae and Statistical Tables (Issue 2, January 2021). This is the modular P1–P4, FP1–FP3, M1–M3, S1–S3 course, not UK 9MA0 or the older C12/C34 IAL course.

## What this list means

The main list has **111 relationships** that are not printed as complete equations in either reference, although the specification names their underlying skills. These are working results and derivations to know how to use; Pearson does not separately mandate rote memorisation of every shortcut here. This is a curated syllabus audit, not a promise that every possible exam rearrangement is enumerated. There are **100 new cards**; **13 existing M1 cards** keep their saved IDs. Two further aids built from explicitly printed specification equations appear separately below.

The distinction matters: SUVAT, momentum, impulse, kinetic/potential energy, basic derivatives/integrals, logarithm laws and standardising a Normal variable are absent from the exam booklet **but are explicitly in the specification**, so they are not claimed as discoveries in this strict list. The library already includes them. FP1 sums/products of roots and the cube-of-roots identity, the FP2 integrating factor, P4 vector scalar products and volume of revolution, M3 Hooke/elastic energy/SHM formulae, and S3 z-test statistics are also excluded from the strict list. Supplied formulae inherited from other modules remain supplied: the entire matching booklet was checked, not just each unit’s page.

## Sources and method

- [Official specification, Issue 3](https://qualifications.pearson.com/content/dam/pdf/International%20Advanced%20Level/Mathematics/2018/Specification-and-Sample-Assessment/international-a-level-maths-spec.pdf): syllabus sections beside each entry establish scope. Printed pages: P1 12–16; P2 17–20; P3 21–25; P4 26–29; FP1 30–35; FP2 36–39; FP3 40–43; M1 44–46; M2 47–49; M3 50–52; S1 53–56; S2 57–59; S3 60–62. PDF page numbers are six higher.
- [Matching formula booklet, Issue 2](https://qualifications.pearson.com/content/dam/pdf/International%20Advanced%20Level/Mathematics/2018/Specification-and-Sample-Assessment/IAL-Mathematics-Formula-Book.pdf): checked all equation pages, including formulae available through prerequisites. Numerical lookup tables are not additional formula cards.
- [Pearson’s 2018-series textbook samples](https://www.pearson.com/international-schools/british-curriculum/secondary-curriculum/International-A-Level/mathematics.html.html): downloaded and inspected the public P1–P4, FP1–FP3, M1–M3 and S1–S3 samples. Their title/qualification pages and contents corroborate the correct course and chapter scope. FP1 chapter 1 directly supports complex conjugation/modulus; M2 chapter 1 supports projectile component modelling; S1 chapters 2–3 directly support grouped interpolation, coding, combined means, histogram density and Pearson’s second skewness coefficient; M3 chapter 2 supports the elastic equilibrium derivation; S3 chapter 3 directly supports estimator bias, standard error, confidence intervals and their width. A sample does not expose every chapter: entries outside its exposed chapter are mathematical derivations of the named specification skill, rather than claims that the sample prints that equation.

All explanations here are original summaries. Domain restrictions, model assumptions, and warnings about tempting but invalid shortcuts are in each entry. No t-distribution, oblique M2 collisions, P3 tangent-half-angle substitution, or unrequested Decision content has been added.

## Sorted list

Order: pure, further pure, mechanics, statistics; unit number; alphabetical formula name.

### Pure 1 (6)

- **Area of a Minor Circular Segment** — P1 §3.2; P2 prerequisites  
  $A=\frac{r^2}{2}(\theta-\sin\theta)$  
  Copy: `A = r²(θ − sin θ)/2`  
  Sector area minus the isosceles triangle area. For the minor segment take 0 ≤ θ ≤ π; angles must be radians.  
  Variables: r: circle radius; θ: central angle in radians; A: segment area.  
  Card ID: `exam-p1-segment`.

- **Distance Between Two Points** — P1 §2.1; P2 §2.1  
  $d=\sqrt{(x_2-x_1)^2+(y_2-y_1)^2}$  
  Copy: `d = √((x₂ − x₁)² + (y₂ − y₁)²)`  
  Pythagoras applied to coordinate differences; use consistent length units.  
  Variables: d: distance; (x₁, y₁), (x₂, y₂): endpoints.  
  Card ID: `exam-p1-distance`.

- **Gradient Through Two Points** — P1 §2.1  
  $m=\frac{y_2-y_1}{x_2-x_1}$  
  Copy: `m = (y₂ − y₁)/(x₂ − x₁)`  
  For x₂ ≠ x₁. A vertical line has undefined gradient.  
  Variables: m: gradient; (x₁, y₁), (x₂, y₂): two distinct points.  
  Card ID: `exam-p1-gradient`.

- **Midpoint of a Line Segment** — P1 §2.1; P2 §2.1  
  $M=\left(\frac{x_1+x_2}{2},\frac{y_1+y_2}{2}\right)$  
  Copy: `M = ((x₁ + x₂)/2, (y₁ + y₂)/2)`  
  Coordinate-geometry prerequisite; average corresponding coordinates.  
  Variables: M: midpoint; (x₁, y₁), (x₂, y₂): endpoints.  
  Card ID: `exam-p1-midpoint`.

- **Normal to a Curve** — P1 §4.3  
  $m_{\mathrm{normal}}=-\frac{1}{f\prime(x_0)}$  
  Copy: `m_normal = −1/f′(x₀)`  
  Use y − f(x₀) = m_normal(x − x₀). At a horizontal tangent the normal is vertical, x = x₀.  
  Variables: x₀: x-coordinate of contact; f′(x₀): finite non-zero tangent gradient.  
  Card ID: `exam-p1-normal`.

- **Parallel and Perpendicular Gradients** — P1 §2.2  
  $\begin{aligned}\text{parallel: }&m_1=m_2\\\text{perpendicular: }&m_1m_2=-1\end{aligned}$  
  Copy: `m₁ = m₂ (parallel); m₁m₂ = −1 (perpendicular)`  
  Parallel distinct lines have equal gradients. For perpendicular horizontal/vertical lines use the geometry, since the vertical gradient is undefined.  
  Variables: m₁, m₂: finite gradients.  
  Card ID: `exam-p1-gradients`.


### Pure 2 (5)

- **Area Between Two Curves** — P2 §8.2  
  $A=\int_a^b[f(x)-g(x)]\,dx$  
  Copy: `A = ∫_a^b [f(x) − g(x)] dx`  
  Valid where f ≥ g. Split the integral at crossings; geometric area is non-negative.  
  Variables: f: upper function; g: lower function; a, b: ordered intersection/boundary x-values.  
  Card ID: `exam-p2-between-curves`.

- **General Solutions of a Cosine Equation** — P2 §6.2  
  $x=\pm\alpha+2k\pi,\quad k\in\mathbb Z$  
  Copy: `cos x = cos α ⇒ x = ±α + 2kπ`  
  Apply interval bounds to the original variable. Use 360° instead of 2π when working in degrees.  
  Variables: α: one solution angle in radians; k: any integer.  
  Card ID: `exam-p2-cosine-solutions`.

- **General Solutions of a Sine Equation** — P2 §6.2  
  $x=\alpha+2k\pi\quad\text{or}\quad x=\pi-\alpha+2k\pi$  
  Copy: `sin x = sin α ⇒ x = α + 2kπ or π − α + 2kπ`  
  Apply these to the entire angle expression first, then solve for x and restrict to the requested interval. Use 360° instead of 2π and 180° instead of π for degrees.  
  Variables: α: one solution angle in radians; k: any integer.  
  Card ID: `exam-p2-sine-solutions`.

- **General Solutions of a Tangent Equation** — P2 §6.2  
  $x=\alpha+k\pi,\quad k\in\mathbb Z$  
  Copy: `tan x = tan α ⇒ x = α + kπ`  
  Tangent has period π, or 180° in degrees. Exclude angles where tangent is undefined.  
  Variables: α: one solution angle in radians; k: any integer.  
  Card ID: `exam-p2-tangent-solutions`.

- **Second Derivative Test** — P2 §7.1  
  $\begin{aligned}f\prime(a)&=0\\f\prime\prime(a)>0&:\text{ local minimum}\\f\prime\prime(a)<0&:\text{ local maximum}\end{aligned}$  
  Copy: `f′(a) = 0; f″(a) > 0 minimum, f″(a) < 0 maximum`  
  If f″(a) = 0, this test is inconclusive; examine the sign of f′ on either side. A zero second derivative alone does not prove an inflection.  
  Variables: a: stationary point x-coordinate; f″: second derivative.  
  Card ID: `exam-p2-stationary`.


### Pure 3 (4)

- **Harmonic R Form** — P3 §2.3  
  $\begin{aligned}a\sin x+b\cos x&=R\sin(x+\alpha)\\R&=\sqrt{a^2+b^2}\\\cos\alpha&=a/R,\quad\sin\alpha=b/R\end{aligned}$  
  Copy: `a sin x + b cos x = R sin(x + α); R = √(a² + b²)`  
  Determine α using both sine and cosine, or atan2(b,a). Using tan⁻¹(b/a) alone can select the wrong quadrant. Extrema are ±R before any vertical offset.  
  Variables: a, b: real coefficients, not both zero; R: positive amplitude; α: phase chosen in the correct quadrant.  
  Card ID: `exam-p3-r-form`.

- **Linearising a Power Model** — P3 §3.3  
  $y=ax^n\ \Longrightarrow\ \log y=\log a+n\log x$  
  Copy: `y = axⁿ ⇒ log y = log a + n log x`  
  Log–log graph: gradient n, intercept log a. Use one consistent logarithm base. The specification describes this graph in words rather than printing this transformed equation.  
  Variables: a: positive model coefficient; n: power; x, y: positive observations.  
  Card ID: `exam-p3-log-linear`.

- **Linearising an Exponential Model** — P3 §3.3  
  $y=kb^x\ \Longrightarrow\ \log y=\log k+x\log b$  
  Copy: `y = kbˣ ⇒ log y = log k + x log b`  
  Plot log y against x: gradient log b, intercept log k. Take the inverse logarithm to recover b and k.  
  Variables: k, b: positive model constants; x, y: observations, y > 0.  
  Card ID: `exam-p3-exp-linear`.

- **Power Reduction Identities** — P3 §2.3  
  $\begin{aligned}\sin^2x&=\frac{1-\cos2x}{2}\\\cos^2x&=\frac{1+\cos2x}{2}\end{aligned}$  
  Copy: `sin² x = (1 − cos 2x)/2; cos² x = (1 + cos 2x)/2`  
  Rearrangements of the double-angle cosine identity; useful for integration of squared trigonometric functions.  
  Variables: x: angle (radians for calculus).  
  Card ID: `exam-p3-half-angle`.


### Pure 4 (8)

- **Area from Parametric Equations** — P4 §6.5  
  $A=\int_{t_1}^{t_2}y(t)\frac{dx}{dt}\,dt$  
  Copy: `A = ∫ y(t)x′(t) dt`  
  Signed area ∫y dx. Reverse parameter bounds when required, and split where orientation or the sign of y changes to find geometric area.  
  Variables: t₁, t₂: parameter bounds corresponding to the x-bounds; x(t), y(t): curve coordinates.  
  Card ID: `exam-p4-parametric-area`.

- **Connected Rates of Change** — P4 §5.2  
  $\frac{dy}{dt}=\frac{dy}{dx}\frac{dx}{dt}$  
  Copy: `dy/dt = (dy/dx)(dx/dt)`  
  Chain rule applied to related rates. Keep the signs and units of both rates.  
  Variables: t: time; x, y: related changing quantities.  
  Card ID: `exam-p4-connected-rates`.

- **Implicit Differentiation** — P4 §5.1  
  $\frac{d}{dx}(y^n)=ny^{n-1}\frac{dy}{dx}$  
  Copy: `d/dx(yⁿ) = n y^(n−1) dy/dx`  
  Apply the chain rule to each y term, then collect dy/dx and solve. For products of x and y, also use the product rule.  
  Variables: y: differentiable function of x; n: constant exponent, wherever the power is differentiable.  
  Card ID: `exam-p4-implicit`.

- **Integral of ln x** — P4 §6.2  
  $\int\ln x\,dx=x\ln x-x+C$  
  Copy: `∫ ln x dx = x ln x − x + C`  
  Integrate by parts with u = ln x and dv = dx. The specification names the integral but does not print its evaluated result.  
  Variables: x: positive real variable; C: integration constant.  
  Card ID: `exam-p4-log-integral`.

- **Parametric Gradient** — P4 §5.1  
  $\frac{dy}{dx}=\frac{dy/dt}{dx/dt}$  
  Copy: `dy/dx = (dy/dt)/(dx/dt)`  
  Requires dx/dt ≠ 0. If it vanishes, investigate the tangent separately rather than dividing by zero.  
  Variables: t: parameter; x, y: differentiable functions of t.  
  Card ID: `exam-p4-parametric-gradient`.

- **Parametric Second Derivative** — P4 §5.1  
  $\frac{d^2y}{dx^2}=\frac{\frac{d}{dt}(dy/dx)}{dx/dt}$  
  Copy: `d²y/dx² = [d/dt(dy/dx)]/(dx/dt)`  
  Differentiate the first derivative with respect to t, then divide by dx/dt; do not divide d²y/dt² by d²x/dt². Requires dx/dt ≠ 0.  
  Variables: t: parameter; x, y: differentiable parametric coordinates.  
  Card ID: `exam-p4-parametric-second`.

- **Separable Differential Equations** — P4 §6.4  
  $\frac{dy}{dx}=f(x)g(y)\ \Longrightarrow\ \int\frac{dy}{g(y)}=\int f(x)\,dx+C$  
  Copy: `dy/dx = f(x)g(y) ⇒ ∫1/g(y) dy = ∫f(x) dx + C`  
  Separate only where g(y) ≠ 0. Also check constant solutions satisfying g(y) = 0; division can lose them.  
  Variables: f, g: functions of the indicated variable; C: arbitrary constant.  
  Card ID: `exam-p4-separable`.

- **Unit Vector** — P4 §7.2  
  $\widehat{\mathbf a}=\frac{\mathbf a}{|\mathbf a|}$  
  Copy: `â = a/|a|`  
  Divide every component by the magnitude. The zero vector has no direction or unit vector.  
  Variables: a: non-zero vector; â: unit vector in the direction of a.  
  Card ID: `exam-p4-unit-vector`.


### Further Pure 1 (12)

- **Area Scale Factor of a Matrix** — FP1 §6.4  
  $\mathrm{area}(\mathrm{image})=|\det A|\,\mathrm{area}(\mathrm{object})$  
  Copy: `area(image) = |det A| area(object)`  
  Use the absolute determinant for area. A negative determinant reverses orientation. The specification states the area-scale interpretation in words.  
  Variables: A: 2D linear transformation matrix.  
  Card ID: `exam-fp1-area-scale`.

- **Complex Division Using the Conjugate** — FP1 §1.2  
  $\frac{z_1}{z_2}=\frac{z_1z_2^*}{|z_2|^2}$  
  Copy: `z₁/z₂ = z₁z₂*/|z₂|²`  
  Multiply numerator and denominator by the conjugate of the denominator to obtain real and imaginary parts.  
  Variables: z₁, z₂: complex numbers, z₂ ≠ 0; z₂*: complex conjugate of z₂.  
  Card ID: `exam-fp1-complex-division`.

- **Complex Modulus and Conjugate** — FP1 §1.1  
  $\begin{aligned}z=a+ib,\quad z^*&=a-ib\\|z|&=\sqrt{a^2+b^2}\end{aligned}$  
  Copy: `z = a + ib; z* = a − ib; |z| = √(a² + b²)`  
  |z|² = zz*. Use the correct quadrant when finding arg z; arg 0 is undefined. Pearson FP1 sample §§1.3–1.5 corroborates these definitions.  
  Variables: a, b: real and imaginary components; i: imaginary unit, i² = −1.  
  Card ID: `exam-fp1-modulus`.

- **Determinant of a 2 × 2 Matrix** — FP1 §5.4  
  $\det\begin{pmatrix}a&b\\c&d\end{pmatrix}=ad-bc$  
  Copy: `det [[a,b],[c,d]] = ad − bc`  
  The matrix is singular exactly when its determinant is zero.  
  Variables: a, b, c, d: matrix entries.  
  Card ID: `exam-fp1-determinant`.

- **Forming an Equation from Two Roots** — FP1 §2.3  
  $x^2-(r+s)x+rs=0$  
  Copy: `x² − (r + s)x + rs = 0`  
  Expand (x − r)(x − s). Substitute transformed roots and express their sum and product using the original quadratic.  
  Variables: r, s: desired new roots; x: equation variable.  
  Card ID: `exam-fp1-new-roots`.

- **Inverse of a 2 × 2 Matrix** — FP1 §5.5  
  $A=\begin{pmatrix}a&b\\c&d\end{pmatrix},\quad A^{-1}=\frac{1}{ad-bc}\begin{pmatrix}d&-b\\-c&a\end{pmatrix}$  
  Copy: `A⁻¹ = [[d,−b],[−c,a]]/(ad − bc)`  
  Exists only when ad − bc ≠ 0. Swap the main-diagonal entries and negate the other two.  
  Variables: A: 2 × 2 matrix; a, b, c, d: matrix entries.  
  Card ID: `exam-fp1-inverse`.

- **Linear Interpolation for a Root** — FP1 §3.1  
  $x\approx a-\frac{f(a)(b-a)}{f(b)-f(a)}$  
  Copy: `x ≈ a − f(a)(b − a)/(f(b) − f(a))`  
  Root of the secant line, not generally an exact root. Use a continuous function and a sign-changing bracket for the usual root-location method; denominator must be non-zero.  
  Variables: a, b: endpoints; f(a), f(b): function values.  
  Card ID: `exam-fp1-interpolation`.

- **Normal to a Parabola** — FP1 §4.4  
  $y=-tx+2at+at^3$  
  Copy: `y = −tx + 2at + at³`  
  Normal through (at², 2at); gradient −t. At t = 0 the normal is y = 0.  
  Variables: a: positive parameter in y² = 4ax; t: parameter of point (at², 2at).  
  Card ID: `exam-fp1-parabola-normal`.

- **Normal to a Rectangular Hyperbola** — FP1 §4.4  
  $y-\frac ct=t^2(x-ct)$  
  Copy: `y − c/t = t²(x − ct)`  
  The tangent gradient is −1/t², so the normal gradient is t².  
  Variables: c: positive parameter in xy = c²; t: non-zero contact parameter.  
  Card ID: `exam-fp1-hyperbola-normal`.

- **Sum of Squares of Quadratic Roots** — FP1 §2.2  
  $\alpha^2+\beta^2=(\alpha+\beta)^2-2\alpha\beta$  
  Copy: `α² + β² = (α + β)² − 2αβ`  
  Use the sum and product of the original roots. The cubic-power identity is explicitly printed in the specification, so it is excluded from this extras list.  
  Variables: α, β: roots of a quadratic.  
  Card ID: `exam-fp1-root-squares`.

- **Tangent to a Parabola** — FP1 §4.4  
  $ty=x+at^2$  
  Copy: `ty = x + at² at (at², 2at)`  
  Derive from the Cartesian gradient; also valid at t = 0, giving the vertical tangent x = 0.  
  Variables: a: positive parameter in y² = 4ax; t: parameter of point of contact.  
  Card ID: `exam-fp1-parabola-tangent`.

- **Tangent to a Rectangular Hyperbola** — FP1 §4.4  
  $\frac{x}{t}+ty=2c$  
  Copy: `x/t + ty = 2c`  
  Equivalent to y = −x/t² + 2c/t; obtain by differentiating y = c²/x.  
  Variables: c: positive parameter in xy = c²; t: non-zero contact parameter (ct, c/t).  
  Card ID: `exam-fp1-hyperbola-tangent`.


### Further Pure 2 (7)

- **Complementary Function: Complex Roots** — FP2 §5.1  
  $y_c=e^{\alpha x}[A\cos(\beta x)+B\sin(\beta x)]$  
  Copy: `y_c = exp(αx)[A cos(βx) + B sin(βx)]`  
  For real constant coefficients. Add a particular integral for the full inhomogeneous equation.  
  Variables: α ± iβ: auxiliary roots, β ≠ 0; A, B: real arbitrary constants.  
  Card ID: `exam-fp2-cf-complex`.

- **Complementary Function: Distinct Real Roots** — FP2 §5.1  
  $y_c=Ae^{m_1x}+Be^{m_2x}$  
  Copy: `y_c = A exp(m₁x) + B exp(m₂x)`  
  For ay″ + by′ + cy = 0 with a ≠ 0. For a non-zero right-hand side add a particular integral.  
  Variables: m₁, m₂: distinct real roots of am² + bm + c = 0; A, B: arbitrary constants.  
  Card ID: `exam-fp2-cf-distinct`.

- **Complementary Function: Repeated Root** — FP2 §5.1  
  $y_c=(A+Bx)e^{mx}$  
  Copy: `y_c = (A + Bx) exp(mx)`  
  For constant-coefficient second-order equations. Two independent constants are needed; Ae^(mx) + Be^(mx) is insufficient.  
  Variables: m: repeated real auxiliary root; A, B: arbitrary constants.  
  Card ID: `exam-fp2-cf-repeated`.

- **Gradient of a Polar Curve** — FP2 §7.1 (tangents)  
  $\frac{dy}{dx}=\frac{r\prime\sin\theta+r\cos\theta}{r\prime\cos\theta-r\sin\theta}$  
  Copy: `dy/dx = (r′ sin θ + r cos θ)/(r′ cos θ − r sin θ)`  
  Differentiate x = r cos θ and y = r sin θ. A zero numerator with non-zero denominator gives a horizontal tangent; a zero denominator with non-zero numerator gives a vertical tangent. If both vanish, investigate further.  
  Variables: r: radius as a function of θ; r′: dr/dθ.  
  Card ID: `exam-fp2-polar-tangent`.

- **nth Roots of a Complex Number** — FP2 §3.2  
  $\begin{aligned}z_k&=r^{1/n}(\cos\phi_k+i\sin\phi_k)\\\phi_k&=\frac{\theta+2\pi k}{n},\quad k=0,\ldots,n-1\end{aligned}$  
  Copy: `z_k = r^(1/n)[cos((θ+2πk)/n) + i sin((θ+2πk)/n)]`  
  Derived using De Moivre. The booklet prints roots of unity, but not this general non-unit-modulus form. Angles in radians.  
  Variables: r, θ: modulus and argument of the non-zero number being rooted; n: positive integer; k: root index.  
  Card ID: `exam-fp2-general-roots`.

- **Polar to Cartesian Coordinates** — FP2 §7.1  
  $\begin{aligned}x&=r\cos\theta,\quad y=r\sin\theta\\r^2&=x^2+y^2\end{aligned}$  
  Copy: `x = r cos θ; y = r sin θ; r² = x² + y²`  
  Choose the correct quadrant when recovering θ from Cartesian coordinates; tan⁻¹(y/x) alone is ambiguous.  
  Variables: r: non-negative radius; θ: polar angle.  
  Card ID: `exam-fp2-polar-conversion`.

- **Solution of a Linear First-Order ODE** — FP2 §4.2  
  $\begin{aligned}y&=\frac{\int I(x)Q(x)\,dx+C}{I(x)}\\I(x)&=e^{\int P(x)\,dx}\end{aligned}$  
  Copy: `y = [∫ I(x)Q(x) dx + C]/I(x), I(x) = exp(∫P(x) dx)`  
  First divide through so the coefficient of y′ is 1. The specification prints the integrating factor; the additional result here is the solved product-rule equation.  
  Variables: P, Q: coefficients in y′ + Py = Q; I: integrating factor; C: constant.  
  Card ID: `exam-fp2-first-order-solution`.


### Further Pure 3 (14)

- **Acute Angle Between Two Planes** — FP3 §5.2–5.3  
  $\cos\theta=\frac{|\mathbf n_1\cdot\mathbf n_2|}{|\mathbf n_1|\,|\mathbf n_2|}$  
  Copy: `cos θ = |n₁·n₂|/(|n₁||n₂|)`  
  The absolute dot product selects the acute angle, independent of normal orientation. Without it the result may be the supplementary angle.  
  Variables: n₁, n₂: non-zero normal vectors of the planes; θ: acute/right dihedral angle.  
  Card ID: `exam-fp3-plane-angle`.

- **Angle Between a Line and a Plane** — FP3 §5.2–5.3  
  $\sin\theta=\frac{|\mathbf d\cdot\mathbf n|}{|\mathbf d|\,|\mathbf n|}$  
  Copy: `sin θ = |d·n|/(|d||n|)`  
  θ is between 0 and π/2. Complement of the angle between the direction and the normal. Derive this by taking the complement of the scalar-product angle to the normal.  
  Variables: d: non-zero line direction vector; n: non-zero plane normal; θ: acute/right angle to the plane.  
  Card ID: `exam-fp3-line-plane-angle`.

- **Determinant of a 3 × 3 Matrix** — FP3 §6.4  
  $\begin{aligned}A&=\begin{pmatrix}a&b&c\\d&e&f\\g&h&i\end{pmatrix}\\\det A&=a(ei-fh)-b(di-fg)+c(dh-eg)\end{aligned}$  
  Copy: `det A = a(ei − fh) − b(di − fg) + c(dh − eg)`  
  Cofactor expansion along the first row has alternating signs + − +.  
  Variables: a, …, i: entries in row order.  
  Card ID: `exam-fp3-determinant`.

- **Distance from a Point to a Line** — FP3 §5.1–5.2  
  $d=\frac{|(\mathbf p-\mathbf a)\times\mathbf u|}{|\mathbf u|}$  
  Copy: `d = |(p − a) × u|/|u|`  
  Area of a parallelogram divided by its base. Also gives separation of parallel lines by using any point on the other line.  
  Variables: p: point position vector; a: position vector of a point on the line; u: non-zero line direction vector.  
  Card ID: `exam-fp3-point-line-distance`.

- **Eigenvalues and Eigenvectors** — FP3 §6.7  
  $\begin{aligned}\det(A-\lambda I)&=0\\(A-\lambda I)\mathbf v&=\mathbf0,\quad\mathbf v\ne\mathbf0\end{aligned}$  
  Copy: `det(A − λI) = 0; (A − λI)v = 0, v ≠ 0`  
  Solve the characteristic equation, then find a non-zero vector in the null space for each eigenvalue. Normalise if requested.  
  Variables: A: square matrix; I: identity matrix; λ: eigenvalue; v: corresponding eigenvector.  
  Card ID: `exam-fp3-eigen`.

- **Inverse Using the Adjugate** — FP3 §6.5  
  $A^{-1}=\frac{\operatorname{adj}(A)}{\det A}$  
  Copy: `A⁻¹ = adj(A)/det(A)`  
  For a 3 × 3 matrix, form signed minors, transpose, then divide by the determinant. Singular matrices have no inverse.  
  Variables: A: square matrix with non-zero determinant; adj(A): transpose of the cofactor matrix.  
  Card ID: `exam-fp3-inverse`.

- **Line Tangency Condition for a Hyperbola** — FP3 §2.3  
  $y=mx+c,\quad c^2=a^2m^2-b^2>0$  
  Copy: `y = mx + c is tangent when c² = a²m² − b² > 0`  
  For x²/a² − y²/b² = 1 and a finite point of tangency. If c = 0 and m = ±b/a the line is an asymptote, not a tangent at a finite point.  
  Variables: a, b: positive conic parameters; m, c: line gradient and intercept.  
  Card ID: `exam-fp3-hyperbola-tangent-condition`.

- **Line Tangency Condition for an Ellipse** — FP3 §2.3  
  $y=mx+c,\quad c^2=a^2m^2+b^2$  
  Copy: `y = mx + c is tangent when c² = a²m² + b²`  
  Substitute the line into x²/a² + y²/b² = 1 and set the discriminant to zero. This form excludes vertical lines.  
  Variables: a, b: positive semiaxes; m, c: finite line gradient and intercept.  
  Card ID: `exam-fp3-ellipse-tangent-condition`.

- **Matrix Powers by Diagonalisation** — FP3 §6.7–6.8  
  $A=PDP^{-1}\ \Longrightarrow\ A^n=PD^nP^{-1}$  
  Copy: `A = PDP⁻¹ ⇒ Aⁿ = PDⁿP⁻¹`  
  Requires a complete set of independent eigenvectors. Raise each diagonal eigenvalue to n. For a real symmetric matrix use an orthonormal P, giving P⁻¹ = Pᵀ.  
  Variables: P: invertible eigenvector matrix; D: diagonal eigenvalue matrix; n: positive integer power.  
  Card ID: `exam-fp3-matrix-powers`.

- **Normal to a Hyperbola** — FP3 §2.3  
  $y-y_1=-\frac{a^2y_1}{b^2x_1}(x-x_1)$  
  Copy: `y − y₁ = −a²y₁(x − x₁)/(b²x₁)`  
  Perpendicular to the tangent. For this horizontal hyperbola x₁ cannot be zero.  
  Variables: a, b: positive conic parameters; (x₁, y₁): point on x²/a² − y²/b² = 1.  
  Card ID: `exam-fp3-hyperbola-normal`.

- **Normal to an Ellipse** — FP3 §2.3  
  $y-y_1=\frac{a^2y_1}{b^2x_1}(x-x_1)$  
  Copy: `y − y₁ = (a²y₁/(b²x₁))(x − x₁)`  
  For x²/a² + y²/b² = 1. At x₁ = 0 the normal is the vertical line x = 0; this gradient form is undefined there.  
  Variables: a, b: positive semiaxes; (x₁, y₁): point on the ellipse, x₁ ≠ 0.  
  Card ID: `exam-fp3-ellipse-normal`.

- **Shortest Distance Between Skew Lines** — FP3 §5.2  
  $d=\frac{|(\mathbf b-\mathbf a)\cdot(\mathbf u\times\mathbf v)|}{|\mathbf u\times\mathbf v|}$  
  Copy: `d = |(b − a)·(u × v)|/|u × v|`  
  For non-parallel lines r = a + λu and r = b + μv. The cross product is a common normal; project b − a onto it. If the lines intersect the distance is zero. For parallel lines use the point-to-line distance instead.  
  Variables: a, b: position vectors of points on the two lines; u, v: respective non-zero direction vectors.  
  Card ID: `exam-fp3-skew-distance`.

- **Tangent to a Hyperbola** — FP3 §2.3  
  $\frac{xx_1}{a^2}-\frac{yy_1}{b^2}=1$  
  Copy: `xx₁/a² − yy₁/b² = 1`  
  For the standard horizontal hyperbola. Change signs appropriately for a differently oriented equation.  
  Variables: a, b: positive conic parameters; (x₁, y₁): point on x²/a² − y²/b² = 1.  
  Card ID: `exam-fp3-hyperbola-tangent`.

- **Tangent to an Ellipse** — FP3 §2.3  
  $\frac{xx_1}{a^2}+\frac{yy_1}{b^2}=1$  
  Copy: `xx₁/a² + yy₁/b² = 1`  
  Implicit differentiation gives this point-of-contact tangent; works at vertical tangents too.  
  Variables: a, b: positive semiaxes; (x₁, y₁): point on x²/a² + y²/b² = 1.  
  Card ID: `exam-fp3-ellipse-tangent`.


### Mechanics 1 (13)

- **Conservation of Momentum** — M1 §4.3  
  $m_1u_1+m_2u_2=m_1v_1+m_2v_2$  
  Copy: `total momentum before = total momentum after`  
  Use signed velocities along a chosen straight line. Applies when external resultant impulse is zero.  
  Variables: m₁, m₂: particle masses (kg); u₁, u₂: velocities before interaction (m s⁻¹); v₁, v₂: velocities after interaction (m s⁻¹).  
  Card ID: `maths-m1-conservation-momentum`.

- **Distance at Constant Speed** — M1 §2.2–3.1  
  $s=vt$  
  Copy: `distance = speed × time`  
    
  Variables: s: distance (m); v: constant speed (m s⁻¹); t: time (s).  
  Card ID: `maths-m1-constant-speed-distance`.

- **Force Component** — M1 §2.1; §5.1  
  $F_{\parallel}=F\cos\theta$  
  Copy: `component along a direction = F cos(θ)`  
  Use the angle between the force and the direction being resolved along.  
  Variables: F: force magnitude (N); θ: angle between force and direction (° or rad).  
  Card ID: `maths-m1-force-component`.

- **Friction on an Inclined Plane** — M1 §4.2; §5.2  
  $\tan\theta\leq\mu$  
  Copy: `tan(θ) ≤ μ for equilibrium`  
  For a particle at rest on a rough plane; equality is limiting equilibrium.  
  Variables: θ: angle of plane to horizontal (° or rad); μ: coefficient of friction.  
  Card ID: `maths-m1-incline-friction-angle`.

- **Impulse from a Constant Force** — M1 §4.3  
  $I=Ft$  
  Copy: `I = Ft`  
  Impulse is also the change in momentum.  
  Variables: I: impulse (N s); F: constant force (N); t: time for which force acts (s).  
  Card ID: `maths-m1-impulse-force-time`.

- **Magnitude of a 2D Vector** — M1 §2.1  
  $|a\mathbf{i}+b\mathbf{j}|=\sqrt{a^2+b^2}$  
  Copy: `|ai + bj| = √(a² + b²)`  
    
  Variables: a, b: components of the vector; i, j: unit vectors along perpendicular axes.  
  Card ID: `maths-m1-vector-magnitude`.

- **Moment of a Force** — M1 §6.1  
  $M=Fd_{\perp}$  
  Copy: `moment = F × d`  
    
  Variables: M: moment (N m); F: force (N); d⊥: perpendicular distance from pivot (m).  
  Card ID: `maths-m1-moment`.

- **Moments in Equilibrium** — M1 §6.1  
  $\sum M_{\text{clockwise}}=\sum M_{\text{anticlockwise}}$  
  Copy: `sum of clockwise moments = sum of anticlockwise moments`  
  For a body in equilibrium, the net moment about any point is zero.  
  Variables: .  
  Card ID: `maths-m1-moments-equilibrium`.

- **Newton's Second Law** — M1 §4.1  
  $\sum F=ma$  
  Copy: `ΣF = ma`  
    
  Variables: ΣF: resultant force (N); m: mass (kg); a: acceleration (m s⁻²).  
  Card ID: `maths-m1-newtons-second-law`.

- **Particle Equilibrium** — M1 §5.2  
  $\sum \mathbf{F}=\mathbf{0}$  
  Copy: `ΣF = 0`  
  For a particle in equilibrium, resolve and set the force components in each direction to zero.  
  Variables: ΣF: vector sum of forces (N).  
  Card ID: `maths-m1-equilibrium`.

- **Position with Constant Velocity** — M1 §2.2  
  $\mathbf{r}=\mathbf{r}_0+\mathbf{v}t$  
  Copy: `r = r₀ + vt`  
    
  Variables: r: position vector (m); r₀: initial position vector (m); v: constant velocity vector (m s⁻¹); t: time (s).  
  Card ID: `maths-m1-position-constant-velocity`.

- **Velocity–Time Graph** — M1 §3.1  
  $\text{gradient}=a,\qquad \text{signed area}=s$  
  Copy: `gradient = acceleration; signed area = displacement`  
  For a speed–time graph, the area gives distance when speed stays non-negative.  
  Variables: a: acceleration (m s⁻²); s: displacement (m).  
  Card ID: `maths-m1-velocity-time-graph`.

- **Weight** — M1 §5.2  
  $W=mg$  
  Copy: `W = mg`  
  Near Earth's surface, use g = 9.8 m s⁻² unless a different value is specified.  
  Variables: W: weight (N); m: mass (kg); g: acceleration due to gravity (m s⁻²).  
  Card ID: `maths-m1-weight`.


### Mechanics 2 (14)

- **Centre of Mass of a Composite Lamina** — M2 §2.2  
  $\bar x=\frac{\sum A_ix_i}{\sum A_i},\quad\bar y=\frac{\sum A_iy_i}{\sum A_i}$  
  Copy: `x̄ = ΣAᵢxᵢ/ΣAᵢ; ȳ = ΣAᵢyᵢ/ΣAᵢ`  
  Area weighting requires uniform common mass per unit area. Otherwise use masses. Represent a removed area with a negative weight in numerator and denominator.  
  Variables: Aᵢ: signed component area, negative for a hole; xᵢ, yᵢ: component centroid coordinates.  
  Card ID: `exam-m2-composite`.

- **Centre of Mass of Particles** — M2 §2.1  
  $\bar x=\frac{\sum m_ix_i}{\sum m_i},\quad\bar y=\frac{\sum m_iy_i}{\sum m_i}$  
  Copy: `x̄ = Σmᵢxᵢ/Σmᵢ; ȳ = Σmᵢyᵢ/Σmᵢ`  
  Use one common origin and consistent units. Total physical mass must be positive.  
  Variables: mᵢ: particle mass; xᵢ, yᵢ: particle coordinates.  
  Card ID: `exam-m2-com`.

- **Direct Rebound from a Fixed Wall** — M2 §4.3  
  $v=-eu$  
  Copy: `v = −eu`  
  Smooth fixed wall, impact normal to the wall. The minus sign reverses direction. Oblique impact is outside this M2 requirement.  
  Variables: u: signed velocity towards the wall; v: signed velocity after impact; e: coefficient of restitution.  
  Card ID: `exam-m2-wall-rebound`.

- **Kinetic Energy Lost in Direct Impact** — M2 §4.2  
  $\Delta E_{\rm loss}=\frac{m_1m_2}{2(m_1+m_2)}(1-e^2)(u_1-u_2)^2$  
  Copy: `loss = m₁m₂(1 − e²)(u₁ − u₂)²/[2(m₁ + m₂)]`  
  Derived shortcut for a direct two-particle collision with negligible external impulse. You can always compute total KE before minus total KE after instead.  
  Variables: m₁, m₂: positive masses; u₁, u₂: initial signed velocities; e: coefficient of restitution.  
  Card ID: `exam-m2-impact-loss`.

- **Mechanical Power** — M2 §3.1  
  $P=\mathbf F\cdot\mathbf v=Fv\cos\theta$  
  Copy: `P = F·v = Fv cos θ`  
  For a force along the direction of motion, P = Fv. Average power is work/time; this expression gives instantaneous power.  
  Variables: F: force in N; v: velocity in m s⁻¹; θ: angle between force and velocity; P: instantaneous power in W.  
  Card ID: `exam-m2-power`.

- **Newton’s Law of Restitution** — M2 §4.2  
  $v_2-v_1=e(u_1-u_2)$  
  Copy: `v₂ − v₁ = e(u₁ − u₂)`  
  Direct impact along one line, particle 1 approaches particle 2 from behind in the chosen positive direction. Combine with momentum conservation when external impulse is negligible.  
  Variables: u₁, u₂: signed pre-impact velocities with u₁ > u₂; v₁, v₂: signed post-impact velocities; e: restitution coefficient, 0 ≤ e ≤ 1.  
  Card ID: `exam-m2-restitution`.

- **Projectile Maximum Height** — M2 §1.2  
  $H=\frac{u^2\sin^2\theta}{2g}$  
  Copy: `H = u² sin² θ/(2g)`  
  Height gained above the launch point. Set v_y = 0 at the top; assumes constant gravity and no drag.  
  Variables: u: launch speed; θ: launch angle above horizontal; g: positive gravity.  
  Card ID: `exam-m2-projectile-height`.

- **Projectile Position and Velocity** — M2 §1.1–1.2  
  $\begin{aligned}x&=u\cos\theta\,t,\quad v_x=u\cos\theta\\y&=u\sin\theta\,t-\tfrac12gt^2\\v_y&=u\sin\theta-gt\end{aligned}$  
  Copy: `x = u cos θ t; y = u sin θ t − gt²/2; v_x = u cos θ; v_y = u sin θ − gt`  
  Launch point is the origin, y upwards; constant gravity, no air resistance. Pearson M2 sample chapter 1 covers this model.  
  Variables: u: launch speed; θ: angle above horizontal; g: positive gravitational acceleration; t: time from launch.  
  Card ID: `exam-m2-projectile-components`.

- **Projectile Range on Level Ground** — M2 §1.2  
  $R=\frac{u^2\sin2\theta}{g}$  
  Copy: `R = u² sin(2θ)/g`  
  Requires equal launch and landing heights, level ground, no drag, constant g. Maximum range for fixed u occurs at θ = π/4 only under these assumptions.  
  Variables: u: launch speed; θ: launch angle, 0 < θ < π/2; g: positive gravity; R: horizontal range.  
  Card ID: `exam-m2-projectile-range`.

- **Projectile Time of Flight to Launch Level** — M2 §1.2  
  $T=\frac{2u\sin\theta}{g}$  
  Copy: `T = 2u sin θ/g`  
  Applies only when landing at launch height under constant gravity without resistance. For unequal heights solve the vertical quadratic.  
  Variables: u: launch speed; θ: angle above horizontal, 0 < θ < π/2; g: positive gravitational acceleration.  
  Card ID: `exam-m2-projectile-flight`.

- **Projectile Trajectory** — M2 §1.2  
  $y=x\tan\theta-\frac{gx^2}{2u^2\cos^2\theta}$  
  Copy: `y = x tan θ − gx²/(2u² cos² θ)`  
  Eliminate t between the projectile component equations. Requires cos θ ≠ 0, constant gravity and no drag.  
  Variables: u: positive launch speed; θ: launch angle; g: positive gravity; x, y: displacements from launch.  
  Card ID: `exam-m2-projectile-trajectory`.

- **Velocity and Acceleration from Position** — M2 §1.3–1.4  
  $\mathbf v=\frac{d\mathbf r}{dt},\quad\mathbf a=\frac{d\mathbf v}{dt}=\frac{d^2\mathbf r}{dt^2}$  
  Copy: `v = dr/dt; a = dv/dt = d²r/dt²`  
  Differentiate each vector component. Integrate acceleration for velocity and velocity for position, using initial conditions for the constants.  
  Variables: r: position vector; v: velocity vector; a: acceleration vector; t: time.  
  Card ID: `exam-m2-vector-calculus`.

- **Work by a Constant Force** — M2 §3.1  
  $W=Fs\cos\theta$  
  Copy: `W = Fs cos θ`  
  Negative work when the force opposes displacement; no work for a perpendicular force.  
  Variables: F: force magnitude in N; s: displacement in m; θ: angle between force and displacement; W: work in J.  
  Card ID: `exam-m2-work`.

- **Work–Energy Principle** — M2 §3.1  
  $W_{\rm net}=\frac12mv^2-\frac12mu^2$  
  Copy: `W_net = ½mv² − ½mu²`  
  Include gravity among the forces when using net work, or account for its work with a potential-energy change; do not count it twice.  
  Variables: m: constant mass; u, v: initial and final speeds; W_net: total work by all forces.  
  Card ID: `exam-m2-work-energy`.


### Mechanics 3 (5)

- **Centre of Mass by Integration** — M3 §5.1–5.2  
  $\bar x=\frac{1}{M}\int x\,dm,\quad M=\int dm$  
  Copy: `x̄ = (1/M)∫x dm; M = ∫dm`  
  For a uniform rod dm = ρA dx, and for an axisymmetric solid slice dm = ρπy² dx. Use the geometry and density given, with matching integration limits.  
  Variables: dm: element of mass; x: coordinate of the element; M: total mass.  
  Card ID: `exam-m3-continuous-com`.

- **Circular Motion Period** — M3 §4.1  
  $T=\frac{2\pi r}{v}=\frac{2\pi}{\omega}$  
  Copy: `T = 2πr/v = 2π/ω`  
  Uniform circular motion. This is the derived period relation, not the SHM period already printed in the specification.  
  Variables: r: radius; v: constant speed; ω: angular speed.  
  Card ID: `exam-m3-circular-period`.

- **Period of a Mass on an Elastic Spring** — M3 §2.1; §3.1  
  $T=2\pi\sqrt{\frac{ml}{\lambda}}$  
  Copy: `T = 2π√(ml/λ)`  
  Derive ω² = λ/(ml) about equilibrium. Ideal light spring, linear Hooke law, no damping. A string must stay taut throughout the assumed SHM.  
  Variables: m: attached particle mass; l: natural spring length; λ: modulus of elasticity.  
  Card ID: `exam-m3-spring-period`.

- **Vertical Circle Contact at the Top** — M3 §4.2  
  $N+mg=\frac{mv^2}{r}$  
  Copy: `N + mg = mv²/r`  
  For motion on the inside of a smooth vertical circle, or a string directed to the centre. N ≥ 0 gives v² ≥ gr at the top. Do not apply this to a rigid rod or motion outside a circle without resolving forces afresh.  
  Variables: N: inward normal reaction or taut-string tension at the top; m: mass; v: speed at top; r: circle radius; g: gravity.  
  Card ID: `exam-m3-circle-contact`.

- **Vertical Elastic Equilibrium Extension** — M3 §2.1  
  $x_0=\frac{mgl}{\lambda}$  
  Copy: `x₀ = mgl/λ`  
  One vertical light elastic string/spring holding a particle at rest: balance λx₀/l = mg. This displacement is measured from natural length, not from equilibrium.  
  Variables: m: suspended mass; g: gravity; l: natural length; λ: modulus of elasticity.  
  Card ID: `exam-m3-equilibrium-extension`.


### Statistics 1 (6)

- **Coding Data: Mean and Standard Deviation** — S1 §2.3; §4.2  
  $\begin{aligned}y&=\frac{x-a}{b}\\\bar x&=a+b\bar y,\quad s_x=|b|s_y\end{aligned}$  
  Copy: `y = (x − a)/b ⇒ x̄ = a + bȳ; s_x = |b|s_y`  
  Location shifts change the mean, not the spread. Variances scale by b²; negative b reverses order but standard deviation remains non-negative.  
  Variables: a: coding shift; b: non-zero scale; s_x, s_y: standard deviations using the same convention.  
  Card ID: `exam-s1-coding`.

- **Combined Mean of Two Groups** — S1 §2.2  
  $\bar x=\frac{n_1\bar x_1+n_2\bar x_2}{n_1+n_2}$  
  Copy: `x̄ = (n₁x̄₁ + n₂x̄₂)/(n₁ + n₂)`  
  Weight each mean by its group size. Averaging the two means without weights works only for equal sizes; Pearson S1 sample §2.6 covers combined groups.  
  Variables: n₁, n₂: group sizes; x̄₁, x̄₂: group means.  
  Card ID: `exam-s1-combined-mean`.

- **Discrete Uniform Mean and Variance** — S1 §5.4  
  $\begin{aligned}E(X)&=\frac{n+1}{2}\\\operatorname{Var}(X)&=\frac{n^2-1}{12}\end{aligned}$  
  Copy: `X uniform on {1,…,n}: E(X) = (n+1)/2; Var(X) = (n²−1)/12`  
  Not the continuous uniform distribution. For consecutive integers a,…,b use mean (a+b)/2 and variance ((b−a+1)²−1)/12. Derivable from the supplied expectation rules.  
  Variables: n: positive integer; equally likely consecutive integers 1 to n.  
  Card ID: `exam-s1-discrete-uniform`.

- **Grouped Quantile by Interpolation** — S1 §2.3  
  $Q_p\approx L+\frac{pN-C}{f}\,w$  
  Copy: `Q_p ≈ L + [(pN − C)/f]w`  
  Assumes data spread uniformly within the class. Use p = 1/4, 1/2, 3/4 for grouped quartiles/median. For ungrouped data use the course’s order-statistic convention instead.  
  Variables: L: lower boundary of quantile class; p: target cumulative proportion; N: total frequency; C: cumulative frequency before class; f: frequency in class; w: class width.  
  Card ID: `exam-s1-grouped-quantile`.

- **Histogram Frequency Density** — S1 §2.1  
  $\text{frequency density}=\frac{\text{frequency}}{\text{class width}}$  
  Copy: `frequency density = frequency/class width`  
  Histogram area represents frequency, with an overall scale if specified. Unequal class widths require frequency density, not raw frequency.  
  Variables: frequency: count in a class; class width: upper boundary minus lower boundary.  
  Card ID: `exam-s1-frequency-density`.

- **Pearson’s Second Coefficient of Skewness** — S1 §2.4  
  $\text{skewness}=\frac{3(\text{mean}-\text{median})}{\text{standard deviation}}$  
  Copy: `skewness = 3(mean − median)/standard deviation`  
  Positive suggests right skew, negative left skew. This is Pearson’s second coefficient, a descriptive indicator; zero does not prove symmetry. Pearson S1 sample chapter 3, pp. 44–47 and 53, includes this measure. It is not a universal definition of skewness.  
  Variables: mean, median: location measures for the same dataset; standard deviation: positive measure of spread.  
  Card ID: `exam-s1-skewness`.


### Statistics 2 (8)

- **Continuity Correction for Integer Counts** — S2 §3.2  
  $\begin{aligned}P(X\le k)&\approx P(Y<k+\tfrac12)\\P(X\ge k)&\approx P(Y>k-\tfrac12)\\P(X=k)&\approx P(k-\tfrac12<Y<k+\tfrac12)\end{aligned}$  
  Copy: `P(X ≤ k) ≈ P(Y < k+½); P(X ≥ k) ≈ P(Y > k−½)`  
  Translate strict inequalities first: X < k means X ≤ k−1, so use k−½. Corrections belong to discrete-to-Normal approximations, not exact discrete calculations.  
  Variables: X: integer-valued binomial/Poisson count; Y: approximating Normal variable; k: integer threshold.  
  Card ID: `exam-s2-continuity`.

- **Continuous Median and Quartiles** — S2 §2.5  
  $F(q_p)=p,\quad p=\tfrac14,\tfrac12,\tfrac34$  
  Copy: `F(q_p) = p`  
  Solve within the support, choosing the correct piece of a piecewise CDF. For a flat interval a quantile need not be unique.  
  Variables: F: continuous cumulative distribution function; q_p: quartile or median.  
  Card ID: `exam-s2-continuous-quantile`.

- **Mode of a Continuous Distribution** — S2 §2.5  
  $f\prime(m)=0\quad\text{at an interior differentiable maximum}$  
  Copy: `f′(m) = 0 at an interior differentiable maximum`  
  Compare density values at all stationary points, boundaries and piecewise joins. An endpoint can be a mode; f′ = 0 alone does not identify it.  
  Variables: f: density; m: candidate mode.  
  Card ID: `exam-s2-continuous-mode`.

- **Normal Approximation to a Binomial** — S2 §3.2  
  $X\sim B(n,p)\ \Longrightarrow\ X\approx N(np,np(1-p))$  
  Copy: `B(n,p) ≈ N(np, np(1−p))`  
  Approximation, with the second Normal parameter a variance. Check that both np and n(1−p) are sufficiently large; use a continuity correction. There is no universal cutoff guaranteed by the specification.  
  Variables: n: trial count; p: success probability.  
  Card ID: `exam-s2-binomial-normal`.

- **Normal Approximation to a Poisson** — S2 §3.2  
  $X\sim\operatorname{Po}(\lambda)\ \Longrightarrow\ X\approx N(\lambda,\lambda)$  
  Copy: `Po(λ) ≈ N(λ, λ)`  
  Normal standard deviation is √λ, not λ. Apply a continuity correction; assess suitability in the context of the question.  
  Variables: λ: Poisson mean, sufficiently large for approximation.  
  Card ID: `exam-s2-poisson-normal`.

- **Normalising a Probability Density** — S2 §2.2  
  $f(x)\ge0,\quad\int_{-\infty}^{\infty}f(x)\,dx=1$  
  Copy: `f(x) ≥ 0; ∫ f(x) dx over support = 1`  
  Use the actual support and every piece of a piecewise density to find an unknown constant. A density value may exceed 1; probabilities may not.  
  Variables: f: probability density; zero outside its support.  
  Card ID: `exam-s2-density-normalisation`.

- **Poisson Approximation to a Binomial** — S2 §1.3  
  $B(n,p)\approx\operatorname{Po}(np)$  
  Copy: `B(n,p) ≈ Po(np)`  
  Approximation for many independent trials with a small success probability; match the mean λ = np. Use the exact binomial if the approximation is unsuitable.  
  Variables: n: large trial count; p: small success probability.  
  Card ID: `exam-s2-binomial-poisson`.

- **Upper Tail from a Discrete CDF** — S2 §1.1; §4.4  
  $\begin{aligned}P(X\ge k)&=1-F(k-1)\\P(X>k)&=1-F(k)\end{aligned}$  
  Copy: `P(X ≥ k) = 1 − F(k−1); P(X > k) = 1 − F(k)`  
  Use the k−1 shift for an inclusive upper tail. Essential when reading cumulative binomial or Poisson tables and constructing critical regions.  
  Variables: X: integer-valued random variable; F: CDF, F(x) = P(X ≤ x); k: integer threshold.  
  Card ID: `exam-s2-discrete-tail`.


### Statistics 3 (9)

- **Bias of an Estimator** — S3 §3.1  
  $\operatorname{bias}(T)=E(T)-\theta$  
  Copy: `bias(T) = E(T) − θ`  
  An estimator is unbiased when E(T) = θ. Bias is a property over repeated samples, not the error of a single observed estimate. Pearson S3 sample chapter 3, pp. 21–22, gives this definition.  
  Variables: T: statistic used to estimate θ; θ: true population parameter.  
  Card ID: `exam-s3-estimator-bias`.

- **Confidence Interval for a Normal Mean** — S3 §3.3–3.4  
  $\bar x\pm z_{1-\alpha/2}\frac{\sigma}{\sqrt n}$  
  Copy: `x̄ ± z_(1−α/2) σ/√n`  
  Two-sided 100(1−α)% interval. Exact for a Normal population with known variance. CLT gives an approximation for large samples; substitute s for unknown σ only in the large-sample setting. No t-distribution is required in this IAL unit.  
  Variables: x̄: observed sample mean; σ: known population standard deviation; n: independent sample size; α: total probability excluded; z_(1−α/2): standard Normal quantile.  
  Card ID: `exam-s3-confidence`.

- **Degrees of Freedom: Contingency Table** — S3 §4.2  
  $\nu=(r-1)(c-1)$  
  Copy: `ν = (r−1)(c−1)`  
  For a test of independence with estimated row and column proportions. Pool logically when expected frequencies are too small and recalculate dimensions.  
  Variables: r, c: row and column counts after any valid pooling; ν: degrees of freedom.  
  Card ID: `exam-s3-contingency-df`.

- **Degrees of Freedom: Goodness of Fit** — S3 §4.2  
  $\nu=k-1-p$  
  Copy: `ν = k − 1 − p`  
  The −1 accounts for the fixed total. Subtract only parameters estimated from this sample, not known parameters. Pool when expected counts are below 5 and require positive degrees of freedom.  
  Variables: k: number of classes after pooling; p: independent distribution parameters estimated from these data; ν: degrees of freedom.  
  Card ID: `exam-s3-goodness-df`.

- **Expected Frequency for a Fitted Distribution** — S3 §4.1  
  $E_i=N\,P(X\in\text{class }i)$  
  Copy: `E_i = N P(X in class i)`  
  Use the model under H₀, with any parameters fitted as required. Include the complete probability support, including tails; use class boundaries for continuous models.  
  Variables: N: sample size; E_i: expected class frequency.  
  Card ID: `exam-s3-fit-expected`.

- **Expected Frequency in a Contingency Table** — S3 §4.1  
  $E_{ij}=\frac{R_iC_j}{N}$  
  Copy: `E_ij = (row total × column total)/grand total`  
  Under the null hypothesis of independence. Compute from unrounded row/column totals; check expected frequencies before applying chi-squared.  
  Variables: R_i: total in row i; C_j: total in column j; N: grand total.  
  Card ID: `exam-s3-contingency`.

- **Proportional Stratified Sample Allocation** — S3 §2.2  
  $n_h=n\frac{N_h}{N}$  
  Copy: `n_h = n N_h/N`  
  Round sensibly while keeping the total sample size n; then sample randomly within each stratum.  
  Variables: n: total requested sample size; N_h: population in stratum h; N: total population; n_h: sample allocated to stratum h.  
  Card ID: `exam-s3-stratified`.

- **Sample Size for a Confidence Margin** — S3 §3.4  
  $n\ge\left(\frac{z_{1-\alpha/2}\sigma}{E}\right)^2$  
  Copy: `n ≥ (z_(1−α/2) σ/E)²`  
  Rearrange the Normal confidence-interval half-width. Round n up to the next integer. For a required full width w use E = w/2.  
  Variables: E: required positive half-width (margin of error); σ: known population standard deviation; α: significance outside two-sided interval.  
  Card ID: `exam-s3-sample-size`.

- **Standard Error of the Mean** — S3 §3.1–3.2  
  $\operatorname{SE}(\bar X)=\frac{\sigma}{\sqrt n}$  
  Copy: `SE(X̄) = σ/√n`  
  Square root of the supplied variance σ²/n. For a large sample with unknown variance, estimate using the sample standard deviation s/√n.  
  Variables: σ: population standard deviation; n: independent sample size.  
  Card ID: `exam-s3-standard-error`.


## Direct textbook evidence

- [Pearson FP1, chapter 1 sample](https://www.pearson.com/content/dam/one-dot-com/one-dot-com/international-schools/pdfs/secondary-curriculum/international-a-levels/mathematics/International-A-Level-Mathematics-Further-Pure-Mathematics-1-Student-Book-sample.pdf)
- [Pearson M2, chapter 1 sample](https://www.pearson.com/content/dam/one-dot-com/one-dot-com/international-schools/pdfs/secondary-curriculum/international-a-levels/mathematics/International-A-Level-Mathematics-Mechanics-2-Student-Book-sample.pdf)
- [Pearson M3, chapter 2 sample](https://www.pearson.com/content/dam/one-dot-com/one-dot-com/international-schools/pdfs/secondary-curriculum/international-a-levels/mathematics/International-A-Level-Mathematics-Mechanics-3-Student-Book-sample.pdf)
- [Pearson S1, chapters 2–3 sample](https://www.pearson.com/content/dam/one-dot-com/one-dot-com/international-schools/pdfs/secondary-curriculum/international-a-levels/mathematics/International-A-Level-Mathematics-Statistics-1-Student-Book-sample.pdf)
- [Pearson S3, chapter 3 sample](https://www.pearson.com/content/dam/one-dot-com/one-dot-com/international-schools/pdfs/secondary-curriculum/international-old/maths/iAL_Maths_Statistics_3_SB.pdf)

## Related aids derived from printed equations

These remain searchable as exam extras, but are not counted as absent from both references.

- **Diagonalising a Symmetric Matrix** (FP3 §6.8): $P^TAP=D,\qquad A=PDP^T$. The specification prints PᵀAP being diagonal; this card adds the reconstruction and the order of columns. P⁻¹ = Pᵀ; repeated eigenvalues require orthonormal choices.
- **Standard Error of a Difference of Means** (S3 §3.7–3.8): $\operatorname{SE}(\bar X-\bar Y)=\sqrt{\frac{\sigma_x^2}{n_x}+\frac{\sigma_y^2}{n_y}}$. This denominator is explicitly present in the specification’s two-mean test statistic; the standalone standard-error interpretation is a derived aid. For independent large samples with unknown variances use s_x² and s_y².

## Maintaining the audit

The app data is in `src/data/examFormulae.ts`; existing IDs are annotated there instead of duplicated. Run `node scripts/generate-exam-formulae.mjs` after editing data to regenerate this sorted list. Tests check uniqueness, every KaTeX expression, source metadata, unit coverage and supplied/derived classifications. The app’s **Exam extras** filter exposes the same entries and source sections offline; opening the official source requires a connection.
