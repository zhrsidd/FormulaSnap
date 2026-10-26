import type { Formula } from "./formulas";

// Equations checked against Pearson IAL Mathematics Formula Book, Issue 2 (2021).
// Page numbers below are the printed page numbers, not the PDF viewer's numbers.
export const PEARSON_FORMULA_BOOK = "https://qualifications.pearson.com/content/dam/pdf/International%20Advanced%20Level/Mathematics/2018/Specification-and-Sample-Assessment/IAL-Mathematics-Formula-Book.pdf";
export const pearsonFormulas: Formula[] = [];
const L = String.raw;
function group(topic: string, page: number, further = false) {
  return (id: string, name: string, formula: string, latex: string, variables: Record<string, string>, notes = "") => {
    pearsonFormulas.push({
      id: `pearson-${id}`, name, subject: further ? "Further Mathematics" : "Maths", topic,
      formula, latex, aliases: [name.toLowerCase(), id.replace(/-/g, " "), topic, topic.replace("Further Pure ", "FP"), topic.replace("Further Pure ", "FPM")],
      variables: Object.entries(variables).map(([symbol, name]) => ({ symbol, name })),
      notes: `${notes ? `${notes} ` : ""}Pearson IAL Mathematics Formula Book, p. ${page}.`,
    });
  };
}

const p1 = group("Pure 1", 3);
p1("p1-sphere-area", "Surface Area of a Sphere", "A = 4πr²", L`A=4\pi r^2`, { A: "surface area", r: "radius" });
p1("p1-cone-curved-area", "Curved Surface Area of a Cone", "A = πrl", L`A=\pi rl`, { A: "curved surface area", r: "base radius", l: "slant height" }, "Excludes the circular base; use consistent length units.");
p1("p1-cosine-rule", "Cosine Rule", "a² = b² + c² − 2bc cos A", L`a^2=b^2+c^2-2bc\cos A`, { a: "side opposite angle A", b: "second side", c: "third side", A: "included angle between b and c" });
const p2 = group("Pure 2", 3);
p2("p2-ap-term", "Arithmetic Sequence: nth Term", "u_n = a + (n − 1)d", L`u_n=a+(n-1)d`, { a: "first term", d: "common difference", n: "positive integer term number", u_n: "nth term" });
p2("p2-ap-sum", "Arithmetic Series Sum", "S_n = n(a + l)/2 = n[2a + (n − 1)d]/2", L`\begin{aligned}S_n&=\frac n2(a+l)\\&=\frac n2[2a+(n-1)d]\end{aligned}`, { S_n: "sum of first n terms", a: "first term", l: "last term", d: "common difference", n: "number of terms" });
p2("p2-gp-term", "Geometric Sequence: nth Term", "u_n = ar^(n − 1)", L`u_n=ar^{n-1}`, { a: "first term", r: "common ratio", n: "positive integer term number" });
p2("p2-gp-sum", "Finite Geometric Series Sum", "S_n = a(1 − r^n)/(1 − r)", L`S_n=\frac{a(1-r^n)}{1-r}`, { S_n: "sum of first n terms", a: "first term", r: "common ratio", n: "number of terms" }, "For r ≠ 1. If r = 1, S_n = na.");
p2("p2-gp-infinite", "Infinite Geometric Series Sum", "S_∞ = a/(1 − r)", L`S_\infty=\frac a{1-r}`, { a: "first term", r: "common ratio" }, "Converges only when |r| < 1.");
p2("p2-change-base", "Change of Logarithm Base", "log_a x = log_b x / log_b a", L`\log_a x=\frac{\log_b x}{\log_b a}`, { x: "positive argument", a: "original positive base, not 1", b: "new positive base, not 1" });
p2("p2-binomial-finite", "Binomial Theorem", "(a + b)^n = Σ_(r=0)^n C(n,r)a^(n−r)b^r", L`(a+b)^n=\sum_{r=0}^n\binom nr a^{n-r}b^r`, { a: "first term", b: "second term", n: "non-negative integer power", r: "summation index" });
p2("p2-binomial-coefficient", "Binomial Coefficient", "C(n,r) = n!/[r!(n − r)!]", L`\binom nr={}^nC_r=\frac{n!}{r!(n-r)!}`, { n: "non-negative integer", r: "integer from 0 to n" });
p2("p2-binomial-real", "General Binomial Series", "(1 + x)^n = 1 + nx + n(n − 1)x²/2! + …", L`\begin{aligned}(1+x)^n&=1+nx+\frac{n(n-1)}{2!}x^2+\cdots\\&\quad+\frac{n(n-1)\cdots(n-r+1)}{r!}x^r+\cdots\end{aligned}`, { x: "expansion variable", n: "real power", r: "positive integer term index" }, "For |x| < 1. Also listed in Pure 4 (p. 5); finite for non-negative integer n.");
p2("p2-trapezium-rule", "Trapezium Rule", "∫_a^b y dx ≈ h[y₀ + y_n + 2Σ_(i=1)^(n−1)y_i]/2; h = (b − a)/n", L`\begin{aligned}\int_a^b y\,dx&\approx\frac h2\left[y_0+y_n+2\sum_{i=1}^{n-1}y_i\right]\\h&=\frac{b-a}{n}\end{aligned}`, { a: "lower bound", b: "upper bound", n: "number of equal strips", h: "strip width", "y_i": "ordinate at x = a + ih" }, "Numerical approximation using equally spaced ordinates.");

const p3 = group("Pure 3", 4);
p3("p3-exp-log", "Exponential and Logarithm Identity", "e^(x ln a) = a^x", L`e^{x\ln a}=a^x`, { a: "positive base", x: "real exponent" });
for (const [id, name, plain, latex] of [
  ["sin-add", "Sine of a Sum", "sin(A + B) = sin A cos B + cos A sin B", L`\sin(A+B)=\sin A\cos B+\cos A\sin B`],
  ["sin-sub", "Sine of a Difference", "sin(A − B) = sin A cos B − cos A sin B", L`\sin(A-B)=\sin A\cos B-\cos A\sin B`],
  ["cos-add", "Cosine of a Sum", "cos(A + B) = cos A cos B − sin A sin B", L`\cos(A+B)=\cos A\cos B-\sin A\sin B`],
  ["cos-sub", "Cosine of a Difference", "cos(A − B) = cos A cos B + sin A sin B", L`\cos(A-B)=\cos A\cos B+\sin A\sin B`],
  ["tan-add", "Tangent of a Sum", "tan(A + B) = (tan A + tan B)/(1 − tan A tan B)", L`\tan(A+B)=\frac{\tan A+\tan B}{1-\tan A\tan B}`],
  ["tan-sub", "Tangent of a Difference", "tan(A − B) = (tan A − tan B)/(1 + tan A tan B)", L`\tan(A-B)=\frac{\tan A-\tan B}{1+\tan A\tan B}`],
  ["sin-sum-product", "Sum of Sines to Product", "sin A + sin B = 2sin((A + B)/2)cos((A − B)/2)", L`\sin A+\sin B=2\sin\frac{A+B}2\cos\frac{A-B}2`],
  ["sin-diff-product", "Difference of Sines to Product", "sin A − sin B = 2cos((A + B)/2)sin((A − B)/2)", L`\sin A-\sin B=2\cos\frac{A+B}2\sin\frac{A-B}2`],
  ["cos-sum-product", "Sum of Cosines to Product", "cos A + cos B = 2cos((A + B)/2)cos((A − B)/2)", L`\cos A+\cos B=2\cos\frac{A+B}2\cos\frac{A-B}2`],
  ["cos-diff-product", "Difference of Cosines to Product", "cos A − cos B = −2sin((A + B)/2)sin((A − B)/2)", L`\cos A-\cos B=-2\sin\frac{A+B}2\sin\frac{A-B}2`],
]) p3(`p3-${id}`, name, plain, latex, { A: "first angle", B: "second angle" }, "Use a consistent angle unit. Tangent identities require every tangent and denominator to be defined.");
for (const [id, fn, result, latex] of [
  ["tan", "tan(kx)", "k sec²(kx)", L`\frac d{dx}\tan(kx)=k\sec^2(kx)`],
  ["sec", "sec x", "sec x tan x", L`\frac d{dx}\sec x=\sec x\tan x`],
  ["cot", "cot x", "−cosec² x", L`\frac d{dx}\cot x=-\csc^2 x`],
  ["cosec", "cosec x", "−cosec x cot x", L`\frac d{dx}\csc x=-\csc x\cot x`],
]) p3(`p3-derivative-${id}`, `Derivative of ${fn}`, `d/dx(${fn}) = ${result}`, latex, { x: "variable in radians", k: "constant multiplier, where present" }, "Where the function is defined.");
p3("p3-quotient", "Quotient Rule", "d/dx(f/g) = (f′g − fg′)/g²", L`\frac d{dx}\left(\frac fg\right)=\frac{f'g-fg'}{g^2}`, { f: "differentiable numerator function of x", g: "differentiable non-zero denominator function of x" });
const p3i = group("Pure 3", 5);
p3i("p3-integral-sec2", "Integral of sec²(kx)", "∫sec²(kx) dx = tan(kx)/k + C", L`\int\sec^2(kx)\,dx=\frac1k\tan(kx)+C`, { x: "variable in radians", k: "non-zero constant", C: "integration constant" });
p3i("p3-integral-tan", "Integral of tan x", "∫tan x dx = ln|sec x| + C", L`\int\tan x\,dx=\ln|\sec x|+C`, { x: "variable in radians", C: "integration constant" });
p3i("p3-integral-cot", "Integral of cot x", "∫cot x dx = ln|sin x| + C", L`\int\cot x\,dx=\ln|\sin x|+C`, { x: "variable in radians", C: "integration constant" });
const p4 = group("Pure 4", 5);
p4("p4-integral-cosec", "Integral of cosec x", "∫cosec x dx = −ln|cosec x + cot x| + C = ln|tan(x/2)| + C", L`\begin{aligned}\int\csc x\,dx&=-\ln|\csc x+\cot x|+C\\&=\ln|\tan(x/2)|+C\end{aligned}`, { x: "variable in radians", C: "integration constant" });
p4("p4-integral-sec", "Integral of sec x", "∫sec x dx = ln|sec x + tan x| + C = ln|tan(x/2 + π/4)| + C", L`\begin{aligned}\int\sec x\,dx&=\ln|\sec x+\tan x|+C\\&=\ln|\tan(x/2+\pi/4)|+C\end{aligned}`, { x: "variable in radians", C: "integration constant" });
p4("p4-parts", "Integration by Parts", "∫u(dv/dx) dx = uv − ∫v(du/dx) dx", L`\int u\frac{dv}{dx}\,dx=uv-\int v\frac{du}{dx}\,dx`, { u: "differentiable function of x", v: "antiderivative of dv/dx" }, "Include an arbitrary integration constant for indefinite integrals.");

const fp1 = group("Further Pure 1", 6, true);
fp1("fp1-sum-squares", "Sum of Squares", "Σ_(r=1)^n r² = n(n + 1)(2n + 1)/6", L`\sum_{r=1}^n r^2=\frac{n(n+1)(2n+1)}6`, { n: "positive integer upper limit", r: "summation index" });
fp1("fp1-sum-cubes", "Sum of Cubes", "Σ_(r=1)^n r³ = n²(n + 1)²/4", L`\sum_{r=1}^n r^3=\frac{n^2(n+1)^2}4`, { n: "positive integer upper limit", r: "summation index" });
fp1("fp1-newton", "Newton–Raphson Iteration", "x_(n+1) = x_n − f(x_n)/f′(x_n)", L`x_{n+1}=x_n-\frac{f(x_n)}{f'(x_n)}`, { x_n: "current root estimate", "x_(n+1)": "next estimate", f: "function whose root is sought", "f′": "derivative of f" }, "Requires f′(x_n) ≠ 0; convergence is not guaranteed.");
fp1("fp1-parabola", "Parabola: Cartesian Equation", "y² = 4ax", L`y^2=4ax`, { a: "positive focal parameter", x: "horizontal coordinate", y: "vertical coordinate" });
fp1("fp1-parabola-param", "Parabola: Parametric Coordinates", "x = at², y = 2at", L`x=at^2,\qquad y=2at`, { a: "positive focal parameter", t: "real parameter" });
fp1("fp1-parabola-focus", "Parabola: Focus and Directrix", "focus = (a, 0); directrix: x = −a", L`\begin{aligned}\text{focus}&=(a,0)\\\text{directrix: }x&=-a\end{aligned}`, { a: "positive focal parameter" }, "For y² = 4ax. Eccentricity is 1 (FP3, p. 9).");
fp1("fp1-rect-hyperbola", "Rectangular Hyperbola: Cartesian Equation", "xy = c²", L`xy=c^2`, { x: "horizontal coordinate", y: "vertical coordinate", c: "positive scale parameter" });
fp1("fp1-rect-hyperbola-param", "Rectangular Hyperbola: Parametric Coordinates", "x = ct, y = c/t", L`x=ct,\qquad y=\frac ct`, { c: "positive scale parameter", t: "non-zero real parameter" });
fp1("fp1-rotation", "Anticlockwise Rotation Matrix", "R = [[cos θ, −sin θ], [sin θ, cos θ]]", L`R=\begin{pmatrix}\cos\theta&-\sin\theta\\\sin\theta&\cos\theta\end{pmatrix}`, { θ: "anticlockwise angle about the origin", R: "matrix multiplying column position vectors" });
fp1("fp1-reflection", "Reflection Matrix in y = (tan θ)x", "M = [[cos 2θ, sin 2θ], [sin 2θ, −cos 2θ]]", L`M=\begin{pmatrix}\cos2\theta&\sin2\theta\\\sin2\theta&-\cos2\theta\end{pmatrix}`, { θ: "angle of the mirror line with positive x-axis", M: "matrix multiplying column position vectors" });

const fp2 = group("Further Pure 2", 7, true);
fp2("fp2-polar-area", "Area in Polar Coordinates", "A = 1/2 ∫_α^β r² dθ", L`A=\frac12\int_\alpha^\beta r^2\,d\theta`, { r: "polar radius as a function of θ", θ: "angle in radians", α: "starting angle", β: "ending angle" }, "Choose bounds that trace the required region once.");
fp2("fp2-euler", "Euler's Complex Exponential", "e^(iθ) = cos θ + i sin θ", L`e^{i\theta}=\cos\theta+i\sin\theta`, { i: "imaginary unit, i² = −1", θ: "real angle in radians" });
fp2("fp2-demoivre", "De Moivre's Theorem", "[r(cos θ + i sin θ)]^n = r^n(cos nθ + i sin nθ)", L`\begin{aligned}[r(\cos\theta+i\sin\theta)]^n\\=r^n(\cos n\theta+i\sin n\theta)\end{aligned}`, { r: "modulus", θ: "argument in radians", n: "integer power", i: "imaginary unit" }, "For negative n the complex number must be non-zero.");
fp2("fp2-roots-unity", "nth Roots of Unity", "z_k = e^(2πik/n), k = 0, …, n − 1", L`z_k=e^{2\pi ik/n},\quad k=0,\ldots,n-1`, { z_k: "root of z^n = 1", n: "positive integer", k: "root index", i: "imaginary unit" });
fp2("fp2-maclaurin", "Maclaurin Series", "f(x) = Σ_(r=0)^∞ f^(r)(0)x^r/r!", L`f(x)=\sum_{r=0}^{\infty}\frac{f^{(r)}(0)}{r!}x^r`, { f: "function expanded about zero", r: "derivative order", x: "expansion variable" }, "Valid where the Taylor series converges to f; f^(0) means f.");
fp2("fp2-taylor", "Taylor Series about a", "f(x) = Σ_(r=0)^∞ f^(r)(a)(x − a)^r/r!", L`f(x)=\sum_{r=0}^{\infty}\frac{f^{(r)}(a)}{r!}(x-a)^r`, { a: "expansion point", r: "derivative order", f: "function", x: "variable" }, "Valid where the Taylor series converges to f.");
fp2("fp2-taylor-shift", "Taylor Series for f(a + x)", "f(a + x) = Σ_(r=0)^∞ f^(r)(a)x^r/r!", L`f(a+x)=\sum_{r=0}^{\infty}\frac{f^{(r)}(a)}{r!}x^r`, { a: "expansion point", x: "displacement from a", r: "derivative order" }, "Valid where the Taylor series converges to f(a + x).");
for (const [id, name, plain, latex, condition] of [
  ["exp", "Maclaurin Series for e^x", "e^x = Σ_(r=0)^∞ x^r/r!", L`e^x=\sum_{r=0}^{\infty}\frac{x^r}{r!}`, "For all real x."],
  ["log", "Maclaurin Series for ln(1 + x)", "ln(1 + x) = Σ_(r=1)^∞ (−1)^(r+1)x^r/r", L`\ln(1+x)=\sum_{r=1}^{\infty}(-1)^{r+1}\frac{x^r}{r}`, "For −1 < x ≤ 1."],
  ["sin", "Maclaurin Series for sin x", "sin x = Σ_(r=0)^∞ (−1)^r x^(2r+1)/(2r+1)!", L`\sin x=\sum_{r=0}^{\infty}\frac{(-1)^r x^{2r+1}}{(2r+1)!}`, "For all real x in radians."],
  ["cos", "Maclaurin Series for cos x", "cos x = Σ_(r=0)^∞ (−1)^r x^(2r)/(2r)!", L`\cos x=\sum_{r=0}^{\infty}\frac{(-1)^r x^{2r}}{(2r)!}`, "For all real x in radians."],
  ["arctan", "Maclaurin Series for arctan x", "arctan x = Σ_(r=0)^∞ (−1)^r x^(2r+1)/(2r+1)", L`\arctan x=\sum_{r=0}^{\infty}\frac{(-1)^r x^{2r+1}}{2r+1}`, "For −1 ≤ x ≤ 1; result in radians."],
]) fp2(`fp2-series-${id}`, name, plain, latex, { x: "expansion variable", r: "summation index" }, condition);

const fp3v = group("Further Pure 3", 8, true);
fp3v("fp3-projection", "Scalar Projection of a onto b", "component = (a · b)/|b|", L`\text{component}=\frac{\mathbf a\cdot\mathbf b}{|\mathbf b|}`, { a: "vector being resolved", b: "non-zero direction vector" }, "A signed scalar component, not the vector projection.");
fp3v("fp3-section", "Vector Section Formula", "r = (μa + λb)/(λ + μ)", L`\mathbf r=\frac{\mu\mathbf a+\lambda\mathbf b}{\lambda+\mu}`, { a: "position vector of A", b: "position vector of B", λ: "AP ratio part", μ: "PB ratio part", r: "position vector of P" }, "For P dividing AB internally in the ratio AP:PB = λ:μ, with λ, μ > 0.");
fp3v("fp3-cross", "Vector Product: Geometric Form", "a × b = |a||b| sin θ n̂", L`\mathbf a\times\mathbf b=|\mathbf a||\mathbf b|\sin\theta\,\hat{\mathbf n}`, { a: "first vector", b: "second vector", θ: "angle between vectors", n̂: "unit normal given by the right-hand rule" });
fp3v("fp3-cross-components", "Vector Product: Components", "a × b = (a₂b₃ − a₃b₂, a₃b₁ − a₁b₃, a₁b₂ − a₂b₁)", L`\mathbf a\times\mathbf b=\begin{pmatrix}a_2b_3-a_3b_2\\a_3b_1-a_1b_3\\a_1b_2-a_2b_1\end{pmatrix}`, { "a₁, a₂, a₃": "components of a", "b₁, b₂, b₃": "components of b" }, "Equivalent to expanding the determinant with first row i, j, k.");
fp3v("fp3-triple", "Scalar Triple Product", "a · (b × c) = det([a; b; c]) = b · (c × a) = c · (a × b)", L`\begin{aligned}\mathbf a\cdot(\mathbf b\times\mathbf c)&=\begin{vmatrix}a_1&a_2&a_3\\b_1&b_2&b_3\\c_1&c_2&c_3\end{vmatrix}\\&=\mathbf b\cdot(\mathbf c\times\mathbf a)\\&=\mathbf c\cdot(\mathbf a\times\mathbf b)\end{aligned}`, { a: "first vector", b: "second vector", c: "third vector" });
fp3v("fp3-line", "Cartesian Equation of a Line", "(x − a₁)/b₁ = (y − a₂)/b₂ = (z − a₃)/b₃", L`\frac{x-a_1}{b_1}=\frac{y-a_2}{b_2}=\frac{z-a_3}{b_3}`, { "(a₁, a₂, a₃)": "point on the line", "(b₁, b₂, b₃)": "non-zero direction vector", "x, y, z": "coordinates on the line" }, "Where a direction component is zero, use the corresponding fixed coordinate instead of dividing by zero.");
fp3v("fp3-plane-cartesian", "Cartesian Equation of a Plane", "n₁x + n₂y + n₃z + d = 0; d = −a · n", L`\begin{aligned}n_1x+n_2y+n_3z+d&=0\\d&=-\mathbf a\cdot\mathbf n\end{aligned}`, { n: "non-zero normal vector (n₁, n₂, n₃)", a: "position vector of a point on the plane", "x, y, z": "coordinates on the plane" });
fp3v("fp3-plane-three-points", "Plane through Three Points", "r = a + λ(b − a) + μ(c − a)", L`\begin{aligned}\mathbf r&=\mathbf a+\lambda(\mathbf b-\mathbf a)+\mu(\mathbf c-\mathbf a)\\&=(1-\lambda-\mu)\mathbf a+\lambda\mathbf b+\mu\mathbf c\end{aligned}`, { "a, b, c": "position vectors of three non-collinear points", "λ, μ": "real parameters", r: "general position vector on the plane" });
fp3v("fp3-plane-parametric", "Parametric Vector Equation of a Plane", "r = a + sb + tc", L`\mathbf r=\mathbf a+s\mathbf b+t\mathbf c`, { a: "position vector of a point on the plane", "b, c": "non-parallel vectors parallel to the plane", "s, t": "real parameters", r: "general position vector" });
fp3v("fp3-point-plane-distance", "Perpendicular Distance from Point to Plane", "D = |n₁α + n₂β + n₃γ + d|/√(n₁² + n₂² + n₃²)", L`D=\frac{|n_1\alpha+n_2\beta+n_3\gamma+d|}{\sqrt{n_1^2+n_2^2+n_3^2}}`, { "(α, β, γ)": "coordinates of the point", "(n₁, n₂, n₃)": "non-zero normal to the plane", d: "constant in n₁x + n₂y + n₃z + d = 0", D: "perpendicular distance" });
const fp3h = group("Further Pure 3", 9, true);
fp3h("fp3-parabola-ecc", "Parabola: Eccentricity", "e = 1", L`e=1`, { e: "eccentricity of a parabola" }, "See Further Pure 1 for the standard equation, parameters, focus and directrix.");
for (const [id, name, plain, latex, condition] of [
  ["identity", "Hyperbolic Pythagorean Identity", "cosh² x − sinh² x = 1", L`\cosh^2x-\sinh^2x=1`, "For all real x."],
  ["sinh-double", "Hyperbolic Sine Double Angle", "sinh 2x = 2sinh x cosh x", L`\sinh2x=2\sinh x\cosh x`, "For all real x."],
  ["cosh-double", "Hyperbolic Cosine Double Angle", "cosh 2x = cosh² x + sinh² x", L`\cosh2x=\cosh^2x+\sinh^2x`, "For all real x."],
  ["arcosh-log", "Inverse Hyperbolic Cosine as a Logarithm", "arcosh x = ln(x + √(x² − 1))", L`\operatorname{arcosh}x=\ln(x+\sqrt{x^2-1})`, "For x ≥ 1; principal real branch."],
  ["arsinh-log", "Inverse Hyperbolic Sine as a Logarithm", "arsinh x = ln(x + √(x² + 1))", L`\operatorname{arsinh}x=\ln(x+\sqrt{x^2+1})`, "For all real x."],
  ["artanh-log", "Inverse Hyperbolic Tangent as a Logarithm", "artanh x = 1/2 ln((1 + x)/(1 − x))", L`\operatorname{artanh}x=\frac12\ln\frac{1+x}{1-x}`, "For |x| < 1."],
]) fp3h(`fp3-${id}`, name, plain, latex, { x: "real argument" }, condition);
fp3h("fp3-ellipse", "Ellipse: Cartesian Equation", "x²/a² + y²/b² = 1", L`\frac{x^2}{a^2}+\frac{y^2}{b^2}=1`, { a: "semi-major axis", b: "semi-minor axis", "x, y": "coordinates" }, "For an ellipse centred at the origin with major axis along x, a > b > 0.");
fp3h("fp3-ellipse-param", "Ellipse: Parametric Coordinates", "x = a cos θ, y = b sin θ", L`x=a\cos\theta,\qquad y=b\sin\theta`, { a: "semi-major axis", b: "semi-minor axis", θ: "real parameter" });
fp3h("fp3-ellipse-ecc", "Ellipse: Eccentricity", "b² = a²(1 − e²), 0 < e < 1", L`b^2=a^2(1-e^2),\quad 0<e<1`, { a: "semi-major axis", b: "semi-minor axis", e: "eccentricity" }, "The circle is the limiting case e = 0.");
fp3h("fp3-ellipse-foci", "Ellipse: Foci and Directrices", "foci = (±ae, 0); directrices: x = ±a/e", L`\begin{aligned}\text{foci}&=(\pm ae,0)\\\text{directrices: }x&=\pm a/e\end{aligned}`, { a: "semi-major axis", e: "eccentricity, 0 < e < 1" }, "For the ellipse with major axis along x. There are no asymptotes.");
fp3h("fp3-hyperbola", "Hyperbola: Cartesian Equation", "x²/a² − y²/b² = 1", L`\frac{x^2}{a^2}-\frac{y^2}{b^2}=1`, { a: "positive transverse semi-axis", b: "positive conjugate semi-axis", "x, y": "coordinates" });
fp3h("fp3-hyperbola-param", "Hyperbola: Trigonometric Parameters", "x = a sec θ, y = b tan θ", L`x=a\sec\theta,\qquad y=b\tan\theta`, { a: "positive transverse semi-axis", b: "positive conjugate semi-axis", θ: "parameter with cos θ ≠ 0" });
fp3h("fp3-hyperbola-hyperbolic", "Hyperbola: Hyperbolic Parameters", "x = ±a cosh t, y = b sinh t", L`x=\pm a\cosh t,\qquad y=b\sinh t`, { a: "positive transverse semi-axis", b: "positive conjugate semi-axis", t: "real parameter" }, "The signs select the right and left branches.");
fp3h("fp3-hyperbola-ecc", "Hyperbola: Eccentricity", "b² = a²(e² − 1), e > 1", L`b^2=a^2(e^2-1),\quad e>1`, { a: "positive transverse semi-axis", b: "positive conjugate semi-axis", e: "eccentricity" });
fp3h("fp3-hyperbola-foci", "Hyperbola: Foci and Directrices", "foci = (±ae, 0); directrices: x = ±a/e", L`\begin{aligned}\text{foci}&=(\pm ae,0)\\\text{directrices: }x&=\pm a/e\end{aligned}`, { a: "positive transverse semi-axis", e: "eccentricity greater than 1" }, "For x²/a² − y²/b² = 1.");
fp3h("fp3-hyperbola-asymptotes", "Hyperbola: Asymptotes", "y = ±(b/a)x", L`y=\pm\frac ba x`, { a: "positive transverse semi-axis", b: "positive conjugate semi-axis" }, "For x²/a² − y²/b² = 1; equivalent to x/a = ±y/b.");
fp3h("fp3-rect-hyperbola-ecc", "Rectangular Hyperbola: Eccentricity", "e = √2", L`e=\sqrt2`, { e: "eccentricity of xy = c²" });
fp3h("fp3-rect-hyperbola-foci", "Rectangular Hyperbola: Foci", "foci = (√2c, √2c), (−√2c, −√2c)", L`\begin{aligned}F_1&=(\sqrt2c,\sqrt2c)\\F_2&=(-\sqrt2c,-\sqrt2c)\end{aligned}`, { c: "positive scale parameter in xy = c²" }, "The coordinate signs match; these are two foci, not four.");
fp3h("fp3-rect-hyperbola-directrices", "Rectangular Hyperbola: Directrices", "x + y = ±√2c", L`x+y=\pm\sqrt2c`, { c: "positive scale parameter in xy = c²" });
fp3h("fp3-rect-hyperbola-asymptotes", "Rectangular Hyperbola: Asymptotes", "x = 0; y = 0", L`x=0,\qquad y=0`, { "x, y": "coordinates for xy = c²" });
const fp3c = group("Further Pure 3", 10, true);
for (const [id, fn, result, latex, condition] of [
  ["arcsin", "arcsin x", "1/√(1 − x²)", L`\frac d{dx}\arcsin x=\frac1{\sqrt{1-x^2}}`, "For |x| < 1; angle in radians."],
  ["arccos", "arccos x", "−1/√(1 − x²)", L`\frac d{dx}\arccos x=-\frac1{\sqrt{1-x^2}}`, "For |x| < 1; angle in radians."],
  ["arctan", "arctan x", "1/(1 + x²)", L`\frac d{dx}\arctan x=\frac1{1+x^2}`, "For real x; angle in radians."],
  ["sinh", "sinh x", "cosh x", L`\frac d{dx}\sinh x=\cosh x`, "For real x."],
  ["cosh", "cosh x", "sinh x", L`\frac d{dx}\cosh x=\sinh x`, "For real x."],
  ["tanh", "tanh x", "sech² x", L`\frac d{dx}\tanh x=\operatorname{sech}^2x`, "For real x."],
  ["arsinh", "arsinh x", "1/√(1 + x²)", L`\frac d{dx}\operatorname{arsinh}x=\frac1{\sqrt{1+x^2}}`, "For real x."],
  ["arcosh", "arcosh x", "1/√(x² − 1)", L`\frac d{dx}\operatorname{arcosh}x=\frac1{\sqrt{x^2-1}}`, "For x > 1."],
  ["artanh", "artanh x", "1/(1 − x²)", L`\frac d{dx}\operatorname{artanh}x=\frac1{1-x^2}`, "For |x| < 1."],
]) fp3c(`fp3-derivative-${id}`, `Derivative of ${fn}`, `d/dx(${fn}) = ${result}`, latex, { x: "real argument" }, condition);
for (const [id, name, plain, latex, condition] of [
  ["sinh", "Integral of sinh x", "∫sinh x dx = cosh x + C", L`\int\sinh x\,dx=\cosh x+C`, "For real x."],
  ["cosh", "Integral of cosh x", "∫cosh x dx = sinh x + C", L`\int\cosh x\,dx=\sinh x+C`, "For real x."],
  ["tanh", "Integral of tanh x", "∫tanh x dx = ln(cosh x) + C", L`\int\tanh x\,dx=\ln(\cosh x)+C`, "For real x."],
  ["sqrt-a2-minus-x2", "Integral of 1/√(a² − x²)", "∫dx/√(a² − x²) = arcsin(x/a) + C", L`\int\frac{dx}{\sqrt{a^2-x^2}}=\arcsin\frac xa+C`, "For a > 0 and |x| < a."],
  ["a2-plus-x2", "Integral of 1/(a² + x²)", "∫dx/(a² + x²) = arctan(x/a)/a + C", L`\int\frac{dx}{a^2+x^2}=\frac1a\arctan\frac xa+C`, "For a > 0."],
  ["sqrt-x2-minus-a2", "Integral of 1/√(x² − a²)", "∫dx/√(x² − a²) = arcosh(x/a) + C = ln(x + √(x² − a²)) + C", L`\begin{aligned}\int\frac{dx}{\sqrt{x^2-a^2}}&=\operatorname{arcosh}(x/a)+C\\&=\ln(x+\sqrt{x^2-a^2})+C\end{aligned}`, "For a > 0 and x > a. The arbitrary constants in the two forms can differ."],
  ["sqrt-a2-plus-x2", "Integral of 1/√(a² + x²)", "∫dx/√(a² + x²) = arsinh(x/a) + C = ln(x + √(x² + a²)) + C", L`\begin{aligned}\int\frac{dx}{\sqrt{a^2+x^2}}&=\operatorname{arsinh}(x/a)+C\\&=\ln(x+\sqrt{x^2+a^2})+C\end{aligned}`, "For a > 0. The arbitrary constants in the two forms can differ."],
  ["a2-minus-x2", "Integral of 1/(a² − x²)", "∫dx/(a² − x²) = ln|(a + x)/(a − x)|/(2a) + C = artanh(x/a)/a + C", L`\begin{aligned}\int\frac{dx}{a^2-x^2}&=\frac1{2a}\ln\left|\frac{a+x}{a-x}\right|+C\\&=\frac1a\operatorname{artanh}(x/a)+C\end{aligned}`, "For a > 0. Log form: x ≠ ±a on a suitable interval; real artanh form: |x| < a."],
  ["x2-minus-a2", "Integral of 1/(x² − a²)", "∫dx/(x² − a²) = ln|(x − a)/(x + a)|/(2a) + C", L`\int\frac{dx}{x^2-a^2}=\frac1{2a}\ln\left|\frac{x-a}{x+a}\right|+C`, "For a > 0 and x ≠ ±a, on an interval avoiding the singularities."],
]) fp3c(`fp3-integral-${id}`, name, plain, latex, { x: "integration variable", a: "positive constant, where present", C: "arbitrary integration constant" }, condition);
const fp3a = group("Further Pure 3", 11, true);
fp3a("fp3-arc-cartesian", "Arc Length: Cartesian Coordinates", "s = ∫_a^b √(1 + (dy/dx)²) dx", L`s=\int_a^b\sqrt{1+\left(\frac{dy}{dx}\right)^2}\,dx`, { s: "arc length", "y(x)": "differentiable curve", "a, b": "x-coordinate bounds, a < b" });
fp3a("fp3-arc-parametric", "Arc Length: Parametric Coordinates", "s = ∫_α^β √((dx/dt)² + (dy/dt)²) dt", L`s=\int_\alpha^\beta\sqrt{\left(\frac{dx}{dt}\right)^2+\left(\frac{dy}{dt}\right)^2}\,dt`, { s: "arc length", t: "parameter", "x(t), y(t)": "differentiable coordinate functions", "α, β": "parameter bounds, α < β" }, "Choose bounds that traverse the required arc once.");
fp3a("fp3-surface-cartesian", "Surface of Revolution: Cartesian Form", "S_x = 2π∫ y ds = 2π∫_a^b y√(1 + (dy/dx)²) dx", L`\begin{aligned}S_x&=2\pi\int y\,ds\\&=2\pi\int_a^b y\sqrt{1+\left(\frac{dy}{dx}\right)^2}\,dx\end{aligned}`, { S_x: "curved surface area about the x-axis", y: "non-negative radius from x-axis", "a, b": "x-coordinate bounds" }, "For y ≥ 0. If the curve is below the x-axis, use |y| as the radius. End caps are excluded.");
fp3a("fp3-surface-parametric", "Surface of Revolution: Parametric Form", "S_x = 2π∫_α^β y√((dx/dt)² + (dy/dt)²) dt", L`S_x=2\pi\int_\alpha^\beta y\sqrt{\left(\frac{dx}{dt}\right)^2+\left(\frac{dy}{dt}\right)^2}\,dt`, { S_x: "curved surface area about the x-axis", t: "parameter", y: "non-negative radius from x-axis", "α, β": "parameter bounds" }, "Use |y| for a curve below the x-axis; trace the required surface once. End caps are excluded.");

const m2 = group("Mechanics 2", 13);
m2("m2-triangle-com", "Centre of Mass: Triangular Lamina", "distance from vertex along median = 2l/3", L`d=\frac23l`, { d: "distance from vertex to centre of mass", l: "length of that median" }, "Uniform triangular lamina; measure along the median from the vertex.");
m2("m2-arc-com", "Centre of Mass: Circular Arc", "d = r sin α / α", L`d=\frac{r\sin\alpha}{\alpha}`, { d: "distance from circle centre along the symmetry axis", r: "arc radius", α: "half the angle subtended at the centre, in radians" }, "Uniform circular arc with central angle 2α; use consistent length units.");
m2("m2-sector-com", "Centre of Mass: Circular Sector", "d = 2r sin α / (3α)", L`d=\frac{2r\sin\alpha}{3\alpha}`, { d: "distance from circle centre along the symmetry axis", r: "sector radius", α: "half the sector angle, in radians" }, "Uniform sector lamina with central angle 2α.");

const s1 = group("Statistics 1", 14);
s1("s1-union", "Addition Rule for Probability", "P(A ∪ B) = P(A) + P(B) − P(A ∩ B)", L`P(A\cup B)=P(A)+P(B)-P(A\cap B)`, { A: "first event", B: "second event" });
s1("s1-product", "Conditional Multiplication Rule", "P(A ∩ B) = P(A)P(B|A)", L`P(A\cap B)=P(A)P(B\mid A)`, { A: "conditioning event with P(A) > 0", B: "second event" }, "Does not require independent events.");
s1("s1-bayes", "Bayes' Theorem", "P(A|B) = P(B|A)P(A)/[P(B|A)P(A) + P(B|A′)P(A′)]", L`P(A\mid B)=\frac{P(B\mid A)P(A)}{P(B\mid A)P(A)+P(B\mid A')P(A')}`, { A: "event", "A′": "complement of A", B: "observed event with P(B) > 0" }, "Use defined conditional probabilities; A and its complement partition the sample space.");
s1("s1-expectation", "Discrete Random Variable: Expectation", "E(X) = μ = Σ_i x_i P(X = x_i)", L`E(X)=\mu=\sum_i x_iP(X=x_i)`, { X: "discrete random variable", x_i: "possible value", μ: "mean" }, "Sum over all possible values; the expectation must exist.");
s1("s1-variance", "Discrete Random Variable: Variance", "Var(X) = Σ_i (x_i − μ)²P(X = x_i) = Σ_i x_i²P(X = x_i) − μ²", L`\begin{aligned}\operatorname{Var}(X)&=\sum_i(x_i-\mu)^2P(X=x_i)\\&=\sum_i x_i^2P(X=x_i)-\mu^2\end{aligned}`, { X: "discrete random variable", x_i: "possible value", μ: "mean E(X)" }, "Requires a finite second moment.");
s1("s1-function-expectation", "Discrete Expectation of a Function", "E(g(X)) = Σ_i g(x_i)P(X = x_i)", L`E(g(X))=\sum_i g(x_i)P(X=x_i)`, { X: "discrete random variable", x_i: "possible value", g: "function of X" }, "Sum over the support; the expectation must exist.");
s1("s1-normal-pdf", "Normal Distribution Density", "f(x) = exp(−(x − μ)²/(2σ²))/(σ√(2π))", L`f(x)=\frac1{\sigma\sqrt{2\pi}}e^{-\frac{(x-\mu)^2}{2\sigma^2}}`, { x: "any real value", μ: "mean of N(μ, σ²)", σ: "positive standard deviation" }, "The variance is σ². This is a probability density, not P(X = x).");
const s1r = group("Statistics 1", 15);
s1r("s1-sxx", "Sum of Squares S_xx", "S_xx = Σ_i(x_i − x̄)² = Σ_i x_i² − (Σ_i x_i)²/n", L`\begin{aligned}S_{xx}&=\sum_i(x_i-\bar x)^2\\&=\sum_i x_i^2-\frac{(\sum_i x_i)^2}{n}\end{aligned}`, { x_i: "x observation", "x̄": "mean of x observations", n: "number of pairs" });
s1r("s1-syy", "Sum of Squares S_yy", "S_yy = Σ_i(y_i − ȳ)² = Σ_i y_i² − (Σ_i y_i)²/n", L`\begin{aligned}S_{yy}&=\sum_i(y_i-\bar y)^2\\&=\sum_i y_i^2-\frac{(\sum_i y_i)^2}{n}\end{aligned}`, { y_i: "y observation", "ȳ": "mean of y observations", n: "number of pairs" });
s1r("s1-sxy", "Sum of Products S_xy", "S_xy = Σ_i(x_i − x̄)(y_i − ȳ) = Σ_i x_i y_i − (Σ_i x_i)(Σ_i y_i)/n", L`\begin{aligned}S_{xy}&=\sum_i(x_i-\bar x)(y_i-\bar y)\\&=\sum_i x_iy_i-\frac{(\sum_i x_i)(\sum_i y_i)}n\end{aligned}`, { "x_i, y_i": "paired observations", "x̄, ȳ": "sample means", n: "number of pairs" });
s1r("s1-pmcc", "Product Moment Correlation Coefficient", "r = S_xy/√(S_xx S_yy)", L`r=\frac{S_{xy}}{\sqrt{S_{xx}S_{yy}}}`, { r: "Pearson correlation coefficient, PMCC", S_xy: "sum of centred products", "S_xx, S_yy": "sums of centred squares" }, "Requires positive variation in both variables. Use the separate S_xx, S_yy and S_xy cards for expanded forms.");
s1r("s1-regression-gradient", "Regression Coefficient of y on x", "b = S_xy/S_xx", L`b=\frac{S_{xy}}{S_{xx}}`, { b: "least-squares slope", S_xy: "sum of centred products", S_xx: "sum of centred x squares, greater than zero" });
s1r("s1-regression-line", "Least Squares Regression Line", "y = a + bx; a = ȳ − bx̄", L`\begin{aligned}y&=a+bx\\a&=\bar y-b\bar x\end{aligned}`, { a: "intercept", b: "slope of y on x", "x̄, ȳ": "means of paired observations", y: "predicted y value" });

const s1n = group("Statistics 1", 16);
s1n("s1-standard-normal-cdf", "Standard Normal Cumulative Distribution", "Φ(z) = P(Z ≤ z) = ∫_(−∞)^z exp(−t²/2)/√(2π) dt", L`\Phi(z)=\frac1{\sqrt{2\pi}}\int_{-\infty}^z e^{-t^2/2}\,dt`, { Z: "standard normal random variable N(0,1)", z: "real upper bound", t: "integration variable" }, "Definition only; no tabulated values are included.");
const s1t = group("Statistics 1", 17);
s1t("s1-standard-normal-tail", "Standard Normal Upper Tail", "P(Z > z) = 1 − Φ(z) = p", L`P(Z>z)=1-\Phi(z)=p`, { Z: "standard normal random variable N(0,1)", z: "upper-tail threshold", p: "upper-tail probability", Φ: "standard normal cumulative distribution function" }, "No percentage-point lookup values are included.");

const s2 = group("Statistics 2", 18);
s2("s2-binomial", "Binomial Probability Mass Function", "P(X = x) = C(n,x)p^x(1 − p)^(n−x)", L`P(X=x)=\binom nx p^x(1-p)^{n-x}`, { n: "number of independent trials", p: "constant success probability", x: "number of successes, 0 to n" }, "For X ~ B(n,p); n is a non-negative integer and 0 ≤ p ≤ 1.");
s2("s2-binomial-moments", "Binomial Mean and Variance", "E(X) = np; Var(X) = np(1 − p)", L`\begin{aligned}E(X)&=np\\\operatorname{Var}(X)&=np(1-p)\end{aligned}`, { n: "number of independent trials", p: "constant success probability" }, "For X ~ B(n,p).");
s2("s2-poisson", "Poisson Probability Mass Function", "P(X = x) = e^(−λ)λ^x/x!", L`P(X=x)=\frac{e^{-\lambda}\lambda^x}{x!}`, { λ: "positive rate parameter", x: "non-negative integer count" }, "For X ~ Po(λ).");
s2("s2-poisson-moments", "Poisson Mean and Variance", "E(X) = Var(X) = λ", L`E(X)=\operatorname{Var}(X)=\lambda`, { λ: "positive Poisson rate parameter" }, "For X ~ Po(λ).");
s2("s2-continuous-mean", "Continuous Random Variable: Expectation", "E(X) = μ = ∫_(−∞)^∞ x f(x) dx", L`E(X)=\mu=\int_{-\infty}^{\infty}xf(x)\,dx`, { f: "probability density of X", x: "integration variable", μ: "mean" }, "Integrate over the support, or all reals with f = 0 outside it; the expectation must exist.");
s2("s2-continuous-variance", "Continuous Random Variable: Variance", "Var(X) = ∫(x − μ)²f(x) dx = ∫x²f(x) dx − μ²", L`\begin{aligned}\operatorname{Var}(X)&=\int_{-\infty}^{\infty}(x-\mu)^2f(x)\,dx\\&=\int_{-\infty}^{\infty}x^2f(x)\,dx-\mu^2\end{aligned}`, { f: "probability density of X", μ: "mean E(X)" }, "Requires a finite second moment.");
s2("s2-continuous-function", "Continuous Expectation of a Function", "E(g(X)) = ∫_(−∞)^∞ g(x)f(x) dx", L`E(g(X))=\int_{-\infty}^{\infty}g(x)f(x)\,dx`, { f: "probability density of X", g: "function of X" }, "The expectation must exist.");
s2("s2-continuous-cdf", "Continuous Cumulative Distribution Function", "F(x₀) = P(X ≤ x₀) = ∫_(−∞)^x₀ f(t) dt", L`F(x_0)=P(X\le x_0)=\int_{-\infty}^{x_0}f(t)\,dt`, { f: "probability density of X", "x₀": "upper bound", t: "integration variable" });
s2("s2-uniform-pdf", "Uniform Distribution Density", "f(x) = 1/(b − a) for a ≤ x ≤ b; 0 otherwise", L`f(x)=\begin{cases}\frac1{b-a}&a\le x\le b\\0&\text{otherwise}\end{cases}`, { a: "lower bound", b: "upper bound, greater than a", x: "random variable value" }, "Continuous rectangular distribution on [a,b].");
s2("s2-uniform-moments", "Uniform Distribution Mean and Variance", "E(X) = (a + b)/2; Var(X) = (b − a)²/12", L`\begin{aligned}E(X)&=\frac{a+b}2\\\operatorname{Var}(X)&=\frac{(b-a)^2}{12}\end{aligned}`, { a: "lower bound", b: "upper bound, greater than a" }, "Continuous uniform distribution on [a,b].");

const s3 = group("Statistics 3", 25);
s3("s3-independent-product", "Expectation of Independent Products", "E(XY) = E(X)E(Y)", L`E(XY)=E(X)E(Y)`, { "X, Y": "independent random variables with finite expectations" });
s3("s3-independent-variance", "Variance of Independent Linear Combinations", "Var(aX ± bY) = a²Var(X) + b²Var(Y)", L`\operatorname{Var}(aX\pm bY)=a^2\operatorname{Var}(X)+b^2\operatorname{Var}(Y)`, { "X, Y": "independent random variables with finite variances", "a, b": "real constants" }, "The variance contributions add for both the sum and the difference.");
s3("s3-sample-mean", "Sample Mean as an Unbiased Estimator", "E(X̄) = μ; Var(X̄) = σ²/n", L`\begin{aligned}E(\bar X)&=\mu\\\operatorname{Var}(\bar X)&=\frac{\sigma^2}n\end{aligned}`, { "X̄": "mean of n independent identically distributed observations", μ: "population mean", "σ²": "population variance", n: "sample size" });
s3("s3-sample-variance", "Unbiased Sample Variance", "S² = Σ_i(X_i − X̄)²/(n − 1)", L`S^2=\frac{\sum_i(X_i-\bar X)^2}{n-1}`, { X_i: "independent identically distributed observation", "X̄": "sample mean", n: "sample size, greater than 1", "S²": "unbiased estimator of population variance" });
s3("s3-mean-normal", "Standardising a Normal Sample Mean", "(X̄ − μ)/(σ/√n) ~ N(0,1)", L`\frac{\bar X-\mu}{\sigma/\sqrt n}\sim N(0,1)`, { "X̄": "sample mean from independent normal observations", μ: "population mean", σ: "known positive population standard deviation", n: "sample size" });
s3("s3-two-means", "Standardising the Difference of Two Means", "[(X̄ − Ȳ) − (μ_x − μ_y)]/√(σ_x²/n_x + σ_y²/n_y) ~ N(0,1)", L`\frac{(\bar X-\bar Y)-(\mu_x-\mu_y)}{\sqrt{\sigma_x^2/n_x+\sigma_y^2/n_y}}\sim N(0,1)`, { "X̄, Ȳ": "means from two independent normal samples", "μ_x, μ_y": "population means", "σ_x², σ_y²": "known population variances", "n_x, n_y": "sample sizes" });
s3("s3-spearman", "Spearman's Rank Correlation", "r_s = 1 − 6Σ_i d_i²/[n(n² − 1)]", L`r_s=1-\frac{6\sum_i d_i^2}{n(n^2-1)}`, { d_i: "difference between paired ranks", n: "number of ranked pairs, greater than 1", r_s: "rank correlation coefficient" }, "This shortcut assumes no tied ranks; with ties, use the appropriate rank-correlation method.");
s3("s3-chi-square", "Chi-Squared Test Statistic", "χ² = Σ_i (O_i − E_i)²/E_i", L`\chi^2=\sum_i\frac{(O_i-E_i)^2}{E_i}`, { O_i: "observed frequency in category i", E_i: "positive expected frequency in category i", ν: "appropriate degrees of freedom" }, "For goodness-of-fit or contingency tests, compare to an approximate χ²_ν distribution under the null. Check expected-frequency conditions and account for fitted parameters when choosing ν.");
