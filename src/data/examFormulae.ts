import type { Formula } from "./formulas";

// 2018 IAL syllabus only. See docs/exam-formulae.md for audit and derivations.
export const IAL_SPECIFICATION = "https://qualifications.pearson.com/content/dam/pdf/International%20Advanced%20Level/Mathematics/2018/Specification-and-Sample-Assessment/international-a-level-maths-spec.pdf";

export const examFormulae: Formula[] = [
  {
    "id": "exam-p1-gradient",
    "name": "Gradient Through Two Points",
    "subject": "Maths",
    "topic": "Pure 1",
    "formula": "m = (y₂ − y₁)/(x₂ − x₁)",
    "latex": "m=\\frac{y_2-y_1}{x_2-x_1}",
    "aliases": [
      "gradient through two points",
      "p1 gradient",
      "exam extras",
      "not in formula booklet",
      "Pure 1"
    ],
    "variables": [
      {
        "symbol": "m",
        "name": "gradient"
      },
      {
        "symbol": "(x₁, y₁), (x₂, y₂)",
        "name": "two distinct points"
      }
    ],
    "notes": "For x₂ ≠ x₁. A vertical line has undefined gradient.",
    "examKnowledge": {
      "section": "P1 §2.1",
      "status": "derived-not-printed"
    }
  },
  {
    "id": "exam-p1-midpoint",
    "name": "Midpoint of a Line Segment",
    "subject": "Maths",
    "topic": "Pure 1",
    "formula": "M = ((x₁ + x₂)/2, (y₁ + y₂)/2)",
    "latex": "M=\\left(\\frac{x_1+x_2}{2},\\frac{y_1+y_2}{2}\\right)",
    "aliases": [
      "midpoint of a line segment",
      "p1 midpoint",
      "exam extras",
      "not in formula booklet",
      "Pure 1"
    ],
    "variables": [
      {
        "symbol": "M",
        "name": "midpoint"
      },
      {
        "symbol": "(x₁, y₁), (x₂, y₂)",
        "name": "endpoints"
      }
    ],
    "notes": "Coordinate-geometry prerequisite; average corresponding coordinates.",
    "examKnowledge": {
      "section": "P1 §2.1; P2 §2.1",
      "status": "derived-not-printed"
    }
  },
  {
    "id": "exam-p1-distance",
    "name": "Distance Between Two Points",
    "subject": "Maths",
    "topic": "Pure 1",
    "formula": "d = √((x₂ − x₁)² + (y₂ − y₁)²)",
    "latex": "d=\\sqrt{(x_2-x_1)^2+(y_2-y_1)^2}",
    "aliases": [
      "distance between two points",
      "p1 distance",
      "exam extras",
      "not in formula booklet",
      "Pure 1"
    ],
    "variables": [
      {
        "symbol": "d",
        "name": "distance"
      },
      {
        "symbol": "(x₁, y₁), (x₂, y₂)",
        "name": "endpoints"
      }
    ],
    "notes": "Pythagoras applied to coordinate differences; use consistent length units.",
    "examKnowledge": {
      "section": "P1 §2.1; P2 §2.1",
      "status": "derived-not-printed"
    }
  },
  {
    "id": "exam-p1-gradients",
    "name": "Parallel and Perpendicular Gradients",
    "subject": "Maths",
    "topic": "Pure 1",
    "formula": "m₁ = m₂ (parallel); m₁m₂ = −1 (perpendicular)",
    "latex": "\\begin{aligned}\\text{parallel: }&m_1=m_2\\\\\\text{perpendicular: }&m_1m_2=-1\\end{aligned}",
    "aliases": [
      "parallel and perpendicular gradients",
      "p1 gradients",
      "exam extras",
      "not in formula booklet",
      "Pure 1"
    ],
    "variables": [
      {
        "symbol": "m₁, m₂",
        "name": "finite gradients"
      }
    ],
    "notes": "Parallel distinct lines have equal gradients. For perpendicular horizontal/vertical lines use the geometry, since the vertical gradient is undefined.",
    "examKnowledge": {
      "section": "P1 §2.2",
      "status": "derived-not-printed"
    }
  },
  {
    "id": "exam-p1-normal",
    "name": "Normal to a Curve",
    "subject": "Maths",
    "topic": "Pure 1",
    "formula": "m_normal = −1/f′(x₀)",
    "latex": "m_{\\mathrm{normal}}=-\\frac{1}{f\\prime(x_0)}",
    "aliases": [
      "normal to a curve",
      "p1 normal",
      "exam extras",
      "not in formula booklet",
      "Pure 1"
    ],
    "variables": [
      {
        "symbol": "x₀",
        "name": "x-coordinate of contact"
      },
      {
        "symbol": "f′(x₀)",
        "name": "finite non-zero tangent gradient"
      }
    ],
    "notes": "Use y − f(x₀) = m_normal(x − x₀). At a horizontal tangent the normal is vertical, x = x₀.",
    "examKnowledge": {
      "section": "P1 §4.3",
      "status": "derived-not-printed"
    }
  },
  {
    "id": "exam-p1-segment",
    "name": "Area of a Minor Circular Segment",
    "subject": "Maths",
    "topic": "Pure 1",
    "formula": "A = r²(θ − sin θ)/2",
    "latex": "A=\\frac{r^2}{2}(\\theta-\\sin\\theta)",
    "aliases": [
      "area of a minor circular segment",
      "p1 segment",
      "exam extras",
      "not in formula booklet",
      "Pure 1"
    ],
    "variables": [
      {
        "symbol": "r",
        "name": "circle radius"
      },
      {
        "symbol": "θ",
        "name": "central angle in radians"
      },
      {
        "symbol": "A",
        "name": "segment area"
      }
    ],
    "notes": "Sector area minus the isosceles triangle area. For the minor segment take 0 ≤ θ ≤ π; angles must be radians.",
    "examKnowledge": {
      "section": "P1 §3.2; P2 prerequisites",
      "status": "derived-not-printed"
    }
  },
  {
    "id": "exam-p2-stationary",
    "name": "Second Derivative Test",
    "subject": "Maths",
    "topic": "Pure 2",
    "formula": "f′(a) = 0; f″(a) > 0 minimum, f″(a) < 0 maximum",
    "latex": "\\begin{aligned}f\\prime(a)&=0\\\\f\\prime\\prime(a)>0&:\\text{ local minimum}\\\\f\\prime\\prime(a)<0&:\\text{ local maximum}\\end{aligned}",
    "aliases": [
      "second derivative test",
      "p2 stationary",
      "exam extras",
      "not in formula booklet",
      "Pure 2"
    ],
    "variables": [
      {
        "symbol": "a",
        "name": "stationary point x-coordinate"
      },
      {
        "symbol": "f″",
        "name": "second derivative"
      }
    ],
    "notes": "If f″(a) = 0, this test is inconclusive; examine the sign of f′ on either side. A zero second derivative alone does not prove an inflection.",
    "examKnowledge": {
      "section": "P2 §7.1",
      "status": "derived-not-printed"
    }
  },
  {
    "id": "exam-p2-between-curves",
    "name": "Area Between Two Curves",
    "subject": "Maths",
    "topic": "Pure 2",
    "formula": "A = ∫_a^b [f(x) − g(x)] dx",
    "latex": "A=\\int_a^b[f(x)-g(x)]\\,dx",
    "aliases": [
      "area between two curves",
      "p2 between curves",
      "exam extras",
      "not in formula booklet",
      "Pure 2"
    ],
    "variables": [
      {
        "symbol": "f",
        "name": "upper function"
      },
      {
        "symbol": "g",
        "name": "lower function"
      },
      {
        "symbol": "a, b",
        "name": "ordered intersection/boundary x-values"
      }
    ],
    "notes": "Valid where f ≥ g. Split the integral at crossings; geometric area is non-negative.",
    "examKnowledge": {
      "section": "P2 §8.2",
      "status": "derived-not-printed"
    }
  },
  {
    "id": "exam-p3-r-form",
    "name": "Harmonic R Form",
    "subject": "Maths",
    "topic": "Pure 3",
    "formula": "a sin x + b cos x = R sin(x + α); R = √(a² + b²)",
    "latex": "\\begin{aligned}a\\sin x+b\\cos x&=R\\sin(x+\\alpha)\\\\R&=\\sqrt{a^2+b^2}\\\\\\cos\\alpha&=a/R,\\quad\\sin\\alpha=b/R\\end{aligned}",
    "aliases": [
      "harmonic r form",
      "p3 r form",
      "exam extras",
      "not in formula booklet",
      "Pure 3"
    ],
    "variables": [
      {
        "symbol": "a, b",
        "name": "real coefficients, not both zero"
      },
      {
        "symbol": "R",
        "name": "positive amplitude"
      },
      {
        "symbol": "α",
        "name": "phase chosen in the correct quadrant"
      }
    ],
    "notes": "Determine α using both sine and cosine, or atan2(b,a). Using tan⁻¹(b/a) alone can select the wrong quadrant. Extrema are ±R before any vertical offset.",
    "examKnowledge": {
      "section": "P3 §2.3",
      "status": "derived-not-printed"
    }
  },
  {
    "id": "exam-p3-half-angle",
    "name": "Power Reduction Identities",
    "subject": "Maths",
    "topic": "Pure 3",
    "formula": "sin² x = (1 − cos 2x)/2; cos² x = (1 + cos 2x)/2",
    "latex": "\\begin{aligned}\\sin^2x&=\\frac{1-\\cos2x}{2}\\\\\\cos^2x&=\\frac{1+\\cos2x}{2}\\end{aligned}",
    "aliases": [
      "power reduction identities",
      "p3 half angle",
      "exam extras",
      "not in formula booklet",
      "Pure 3"
    ],
    "variables": [
      {
        "symbol": "x",
        "name": "angle (radians for calculus)"
      }
    ],
    "notes": "Rearrangements of the double-angle cosine identity; useful for integration of squared trigonometric functions.",
    "examKnowledge": {
      "section": "P3 §2.3",
      "status": "derived-not-printed"
    }
  },
  {
    "id": "exam-p3-log-linear",
    "name": "Linearising a Power Model",
    "subject": "Maths",
    "topic": "Pure 3",
    "formula": "y = axⁿ ⇒ log y = log a + n log x",
    "latex": "y=ax^n\\ \\Longrightarrow\\ \\log y=\\log a+n\\log x",
    "aliases": [
      "linearising a power model",
      "p3 log linear",
      "exam extras",
      "not in formula booklet",
      "Pure 3"
    ],
    "variables": [
      {
        "symbol": "a",
        "name": "positive model coefficient"
      },
      {
        "symbol": "n",
        "name": "power"
      },
      {
        "symbol": "x, y",
        "name": "positive observations"
      }
    ],
    "notes": "Log–log graph: gradient n, intercept log a. Use one consistent logarithm base. The specification describes this graph in words rather than printing this transformed equation.",
    "examKnowledge": {
      "section": "P3 §3.3",
      "status": "derived-not-printed"
    }
  },
  {
    "id": "exam-p3-exp-linear",
    "name": "Linearising an Exponential Model",
    "subject": "Maths",
    "topic": "Pure 3",
    "formula": "y = kbˣ ⇒ log y = log k + x log b",
    "latex": "y=kb^x\\ \\Longrightarrow\\ \\log y=\\log k+x\\log b",
    "aliases": [
      "linearising an exponential model",
      "p3 exp linear",
      "exam extras",
      "not in formula booklet",
      "Pure 3"
    ],
    "variables": [
      {
        "symbol": "k, b",
        "name": "positive model constants"
      },
      {
        "symbol": "x, y",
        "name": "observations, y > 0"
      }
    ],
    "notes": "Plot log y against x: gradient log b, intercept log k. Take the inverse logarithm to recover b and k.",
    "examKnowledge": {
      "section": "P3 §3.3",
      "status": "derived-not-printed"
    }
  },
  {
    "id": "exam-p4-parametric-gradient",
    "name": "Parametric Gradient",
    "subject": "Maths",
    "topic": "Pure 4",
    "formula": "dy/dx = (dy/dt)/(dx/dt)",
    "latex": "\\frac{dy}{dx}=\\frac{dy/dt}{dx/dt}",
    "aliases": [
      "parametric gradient",
      "p4 parametric gradient",
      "exam extras",
      "not in formula booklet",
      "Pure 4"
    ],
    "variables": [
      {
        "symbol": "t",
        "name": "parameter"
      },
      {
        "symbol": "x, y",
        "name": "differentiable functions of t"
      }
    ],
    "notes": "Requires dx/dt ≠ 0. If it vanishes, investigate the tangent separately rather than dividing by zero.",
    "examKnowledge": {
      "section": "P4 §5.1",
      "status": "derived-not-printed"
    }
  },
  {
    "id": "exam-p4-parametric-second",
    "name": "Parametric Second Derivative",
    "subject": "Maths",
    "topic": "Pure 4",
    "formula": "d²y/dx² = [d/dt(dy/dx)]/(dx/dt)",
    "latex": "\\frac{d^2y}{dx^2}=\\frac{\\frac{d}{dt}(dy/dx)}{dx/dt}",
    "aliases": [
      "parametric second derivative",
      "p4 parametric second",
      "exam extras",
      "not in formula booklet",
      "Pure 4"
    ],
    "variables": [
      {
        "symbol": "t",
        "name": "parameter"
      },
      {
        "symbol": "x, y",
        "name": "differentiable parametric coordinates"
      }
    ],
    "notes": "Differentiate the first derivative with respect to t, then divide by dx/dt; do not divide d²y/dt² by d²x/dt². Requires dx/dt ≠ 0.",
    "examKnowledge": {
      "section": "P4 §5.1",
      "status": "derived-not-printed"
    }
  },
  {
    "id": "exam-p4-implicit",
    "name": "Implicit Differentiation",
    "subject": "Maths",
    "topic": "Pure 4",
    "formula": "d/dx(yⁿ) = n y^(n−1) dy/dx",
    "latex": "\\frac{d}{dx}(y^n)=ny^{n-1}\\frac{dy}{dx}",
    "aliases": [
      "implicit differentiation",
      "p4 implicit",
      "exam extras",
      "not in formula booklet",
      "Pure 4"
    ],
    "variables": [
      {
        "symbol": "y",
        "name": "differentiable function of x"
      },
      {
        "symbol": "n",
        "name": "constant exponent, wherever the power is differentiable"
      }
    ],
    "notes": "Apply the chain rule to each y term, then collect dy/dx and solve. For products of x and y, also use the product rule.",
    "examKnowledge": {
      "section": "P4 §5.1",
      "status": "derived-not-printed"
    }
  },
  {
    "id": "exam-p4-connected-rates",
    "name": "Connected Rates of Change",
    "subject": "Maths",
    "topic": "Pure 4",
    "formula": "dy/dt = (dy/dx)(dx/dt)",
    "latex": "\\frac{dy}{dt}=\\frac{dy}{dx}\\frac{dx}{dt}",
    "aliases": [
      "connected rates of change",
      "p4 connected rates",
      "exam extras",
      "not in formula booklet",
      "Pure 4"
    ],
    "variables": [
      {
        "symbol": "t",
        "name": "time"
      },
      {
        "symbol": "x, y",
        "name": "related changing quantities"
      }
    ],
    "notes": "Chain rule applied to related rates. Keep the signs and units of both rates.",
    "examKnowledge": {
      "section": "P4 §5.2",
      "status": "derived-not-printed"
    }
  },
  {
    "id": "exam-p4-parametric-area",
    "name": "Area from Parametric Equations",
    "subject": "Maths",
    "topic": "Pure 4",
    "formula": "A = ∫ y(t)x′(t) dt",
    "latex": "A=\\int_{t_1}^{t_2}y(t)\\frac{dx}{dt}\\,dt",
    "aliases": [
      "area from parametric equations",
      "p4 parametric area",
      "exam extras",
      "not in formula booklet",
      "Pure 4"
    ],
    "variables": [
      {
        "symbol": "t₁, t₂",
        "name": "parameter bounds corresponding to the x-bounds"
      },
      {
        "symbol": "x(t), y(t)",
        "name": "curve coordinates"
      }
    ],
    "notes": "Signed area ∫y dx. Reverse parameter bounds when required, and split where orientation or the sign of y changes to find geometric area.",
    "examKnowledge": {
      "section": "P4 §6.5",
      "status": "derived-not-printed"
    }
  },
  {
    "id": "exam-p4-log-integral",
    "name": "Integral of ln x",
    "subject": "Maths",
    "topic": "Pure 4",
    "formula": "∫ ln x dx = x ln x − x + C",
    "latex": "\\int\\ln x\\,dx=x\\ln x-x+C",
    "aliases": [
      "integral of ln x",
      "p4 log integral",
      "exam extras",
      "not in formula booklet",
      "Pure 4"
    ],
    "variables": [
      {
        "symbol": "x",
        "name": "positive real variable"
      },
      {
        "symbol": "C",
        "name": "integration constant"
      }
    ],
    "notes": "Integrate by parts with u = ln x and dv = dx. The specification names the integral but does not print its evaluated result.",
    "examKnowledge": {
      "section": "P4 §6.2",
      "status": "derived-not-printed"
    }
  },
  {
    "id": "exam-p4-separable",
    "name": "Separable Differential Equations",
    "subject": "Maths",
    "topic": "Pure 4",
    "formula": "dy/dx = f(x)g(y) ⇒ ∫1/g(y) dy = ∫f(x) dx + C",
    "latex": "\\frac{dy}{dx}=f(x)g(y)\\ \\Longrightarrow\\ \\int\\frac{dy}{g(y)}=\\int f(x)\\,dx+C",
    "aliases": [
      "separable differential equations",
      "p4 separable",
      "exam extras",
      "not in formula booklet",
      "Pure 4"
    ],
    "variables": [
      {
        "symbol": "f, g",
        "name": "functions of the indicated variable"
      },
      {
        "symbol": "C",
        "name": "arbitrary constant"
      }
    ],
    "notes": "Separate only where g(y) ≠ 0. Also check constant solutions satisfying g(y) = 0; division can lose them.",
    "examKnowledge": {
      "section": "P4 §6.4",
      "status": "derived-not-printed"
    }
  },
  {
    "id": "exam-p4-unit-vector",
    "name": "Unit Vector",
    "subject": "Maths",
    "topic": "Pure 4",
    "formula": "â = a/|a|",
    "latex": "\\widehat{\\mathbf a}=\\frac{\\mathbf a}{|\\mathbf a|}",
    "aliases": [
      "unit vector",
      "p4 unit vector",
      "exam extras",
      "not in formula booklet",
      "Pure 4"
    ],
    "variables": [
      {
        "symbol": "a",
        "name": "non-zero vector"
      },
      {
        "symbol": "â",
        "name": "unit vector in the direction of a"
      }
    ],
    "notes": "Divide every component by the magnitude. The zero vector has no direction or unit vector.",
    "examKnowledge": {
      "section": "P4 §7.2",
      "status": "derived-not-printed"
    }
  },
  {
    "id": "exam-fp1-modulus",
    "name": "Complex Modulus and Conjugate",
    "subject": "Further Mathematics",
    "topic": "Further Pure 1",
    "formula": "z = a + ib; z* = a − ib; |z| = √(a² + b²)",
    "latex": "\\begin{aligned}z=a+ib,\\quad z^*&=a-ib\\\\|z|&=\\sqrt{a^2+b^2}\\end{aligned}",
    "aliases": [
      "complex modulus and conjugate",
      "fp1 modulus",
      "exam extras",
      "not in formula booklet",
      "Further Pure 1"
    ],
    "variables": [
      {
        "symbol": "a, b",
        "name": "real and imaginary components"
      },
      {
        "symbol": "i",
        "name": "imaginary unit, i² = −1"
      }
    ],
    "notes": "|z|² = zz*. Use the correct quadrant when finding arg z; arg 0 is undefined. Pearson FP1 sample §§1.3–1.5 corroborates these definitions.",
    "examKnowledge": {
      "section": "FP1 §1.1",
      "status": "derived-not-printed"
    }
  },
  {
    "id": "exam-fp1-complex-division",
    "name": "Complex Division Using the Conjugate",
    "subject": "Further Mathematics",
    "topic": "Further Pure 1",
    "formula": "z₁/z₂ = z₁z₂*/|z₂|²",
    "latex": "\\frac{z_1}{z_2}=\\frac{z_1z_2^*}{|z_2|^2}",
    "aliases": [
      "complex division using the conjugate",
      "fp1 complex division",
      "exam extras",
      "not in formula booklet",
      "Further Pure 1"
    ],
    "variables": [
      {
        "symbol": "z₁, z₂",
        "name": "complex numbers, z₂ ≠ 0"
      },
      {
        "symbol": "z₂*",
        "name": "complex conjugate of z₂"
      }
    ],
    "notes": "Multiply numerator and denominator by the conjugate of the denominator to obtain real and imaginary parts.",
    "examKnowledge": {
      "section": "FP1 §1.2",
      "status": "derived-not-printed"
    }
  },
  {
    "id": "exam-fp1-root-squares",
    "name": "Sum of Squares of Quadratic Roots",
    "subject": "Further Mathematics",
    "topic": "Further Pure 1",
    "formula": "α² + β² = (α + β)² − 2αβ",
    "latex": "\\alpha^2+\\beta^2=(\\alpha+\\beta)^2-2\\alpha\\beta",
    "aliases": [
      "sum of squares of quadratic roots",
      "fp1 root squares",
      "exam extras",
      "not in formula booklet",
      "Further Pure 1"
    ],
    "variables": [
      {
        "symbol": "α, β",
        "name": "roots of a quadratic"
      }
    ],
    "notes": "Use the sum and product of the original roots. The cubic-power identity is explicitly printed in the specification, so it is excluded from this extras list.",
    "examKnowledge": {
      "section": "FP1 §2.2",
      "status": "derived-not-printed"
    }
  },
  {
    "id": "exam-fp1-new-roots",
    "name": "Forming an Equation from Two Roots",
    "subject": "Further Mathematics",
    "topic": "Further Pure 1",
    "formula": "x² − (r + s)x + rs = 0",
    "latex": "x^2-(r+s)x+rs=0",
    "aliases": [
      "forming an equation from two roots",
      "fp1 new roots",
      "exam extras",
      "not in formula booklet",
      "Further Pure 1"
    ],
    "variables": [
      {
        "symbol": "r, s",
        "name": "desired new roots"
      },
      {
        "symbol": "x",
        "name": "equation variable"
      }
    ],
    "notes": "Expand (x − r)(x − s). Substitute transformed roots and express their sum and product using the original quadratic.",
    "examKnowledge": {
      "section": "FP1 §2.3",
      "status": "derived-not-printed"
    }
  },
  {
    "id": "exam-fp1-interpolation",
    "name": "Linear Interpolation for a Root",
    "subject": "Further Mathematics",
    "topic": "Further Pure 1",
    "formula": "x ≈ a − f(a)(b − a)/(f(b) − f(a))",
    "latex": "x\\approx a-\\frac{f(a)(b-a)}{f(b)-f(a)}",
    "aliases": [
      "linear interpolation for a root",
      "fp1 interpolation",
      "exam extras",
      "not in formula booklet",
      "Further Pure 1"
    ],
    "variables": [
      {
        "symbol": "a, b",
        "name": "endpoints"
      },
      {
        "symbol": "f(a), f(b)",
        "name": "function values"
      }
    ],
    "notes": "Root of the secant line, not generally an exact root. Use a continuous function and a sign-changing bracket for the usual root-location method; denominator must be non-zero.",
    "examKnowledge": {
      "section": "FP1 §3.1",
      "status": "derived-not-printed"
    }
  },
  {
    "id": "exam-fp1-determinant",
    "name": "Determinant of a 2 × 2 Matrix",
    "subject": "Further Mathematics",
    "topic": "Further Pure 1",
    "formula": "det [[a,b],[c,d]] = ad − bc",
    "latex": "\\det\\begin{pmatrix}a&b\\\\c&d\\end{pmatrix}=ad-bc",
    "aliases": [
      "determinant of a 2 × 2 matrix",
      "fp1 determinant",
      "exam extras",
      "not in formula booklet",
      "Further Pure 1"
    ],
    "variables": [
      {
        "symbol": "a, b, c, d",
        "name": "matrix entries"
      }
    ],
    "notes": "The matrix is singular exactly when its determinant is zero.",
    "examKnowledge": {
      "section": "FP1 §5.4",
      "status": "derived-not-printed"
    }
  },
  {
    "id": "exam-fp1-inverse",
    "name": "Inverse of a 2 × 2 Matrix",
    "subject": "Further Mathematics",
    "topic": "Further Pure 1",
    "formula": "A⁻¹ = [[d,−b],[−c,a]]/(ad − bc)",
    "latex": "A=\\begin{pmatrix}a&b\\\\c&d\\end{pmatrix},\\quad A^{-1}=\\frac{1}{ad-bc}\\begin{pmatrix}d&-b\\\\-c&a\\end{pmatrix}",
    "aliases": [
      "inverse of a 2 × 2 matrix",
      "fp1 inverse",
      "exam extras",
      "not in formula booklet",
      "Further Pure 1"
    ],
    "variables": [
      {
        "symbol": "A",
        "name": "2 × 2 matrix"
      },
      {
        "symbol": "a, b, c, d",
        "name": "matrix entries"
      }
    ],
    "notes": "Exists only when ad − bc ≠ 0. Swap the main-diagonal entries and negate the other two.",
    "examKnowledge": {
      "section": "FP1 §5.5",
      "status": "derived-not-printed"
    }
  },
  {
    "id": "exam-fp1-area-scale",
    "name": "Area Scale Factor of a Matrix",
    "subject": "Further Mathematics",
    "topic": "Further Pure 1",
    "formula": "area(image) = |det A| area(object)",
    "latex": "\\mathrm{area}(\\mathrm{image})=|\\det A|\\,\\mathrm{area}(\\mathrm{object})",
    "aliases": [
      "area scale factor of a matrix",
      "fp1 area scale",
      "exam extras",
      "not in formula booklet",
      "Further Pure 1"
    ],
    "variables": [
      {
        "symbol": "A",
        "name": "2D linear transformation matrix"
      }
    ],
    "notes": "Use the absolute determinant for area. A negative determinant reverses orientation. The specification states the area-scale interpretation in words.",
    "examKnowledge": {
      "section": "FP1 §6.4",
      "status": "derived-not-printed"
    }
  },
  {
    "id": "exam-fp1-parabola-tangent",
    "name": "Tangent to a Parabola",
    "subject": "Further Mathematics",
    "topic": "Further Pure 1",
    "formula": "ty = x + at² at (at², 2at)",
    "latex": "ty=x+at^2",
    "aliases": [
      "tangent to a parabola",
      "fp1 parabola tangent",
      "exam extras",
      "not in formula booklet",
      "Further Pure 1"
    ],
    "variables": [
      {
        "symbol": "a",
        "name": "positive parameter in y² = 4ax"
      },
      {
        "symbol": "t",
        "name": "parameter of point of contact"
      }
    ],
    "notes": "Derive from the Cartesian gradient; also valid at t = 0, giving the vertical tangent x = 0.",
    "examKnowledge": {
      "section": "FP1 §4.4",
      "status": "derived-not-printed"
    }
  },
  {
    "id": "exam-fp1-parabola-normal",
    "name": "Normal to a Parabola",
    "subject": "Further Mathematics",
    "topic": "Further Pure 1",
    "formula": "y = −tx + 2at + at³",
    "latex": "y=-tx+2at+at^3",
    "aliases": [
      "normal to a parabola",
      "fp1 parabola normal",
      "exam extras",
      "not in formula booklet",
      "Further Pure 1"
    ],
    "variables": [
      {
        "symbol": "a",
        "name": "positive parameter in y² = 4ax"
      },
      {
        "symbol": "t",
        "name": "parameter of point (at², 2at)"
      }
    ],
    "notes": "Normal through (at², 2at); gradient −t. At t = 0 the normal is y = 0.",
    "examKnowledge": {
      "section": "FP1 §4.4",
      "status": "derived-not-printed"
    }
  },
  {
    "id": "exam-fp1-hyperbola-tangent",
    "name": "Tangent to a Rectangular Hyperbola",
    "subject": "Further Mathematics",
    "topic": "Further Pure 1",
    "formula": "x/t + ty = 2c",
    "latex": "\\frac{x}{t}+ty=2c",
    "aliases": [
      "tangent to a rectangular hyperbola",
      "fp1 hyperbola tangent",
      "exam extras",
      "not in formula booklet",
      "Further Pure 1"
    ],
    "variables": [
      {
        "symbol": "c",
        "name": "positive parameter in xy = c²"
      },
      {
        "symbol": "t",
        "name": "non-zero contact parameter (ct, c/t)"
      }
    ],
    "notes": "Equivalent to y = −x/t² + 2c/t; obtain by differentiating y = c²/x.",
    "examKnowledge": {
      "section": "FP1 §4.4",
      "status": "derived-not-printed"
    }
  },
  {
    "id": "exam-fp1-hyperbola-normal",
    "name": "Normal to a Rectangular Hyperbola",
    "subject": "Further Mathematics",
    "topic": "Further Pure 1",
    "formula": "y − c/t = t²(x − ct)",
    "latex": "y-\\frac ct=t^2(x-ct)",
    "aliases": [
      "normal to a rectangular hyperbola",
      "fp1 hyperbola normal",
      "exam extras",
      "not in formula booklet",
      "Further Pure 1"
    ],
    "variables": [
      {
        "symbol": "c",
        "name": "positive parameter in xy = c²"
      },
      {
        "symbol": "t",
        "name": "non-zero contact parameter"
      }
    ],
    "notes": "The tangent gradient is −1/t², so the normal gradient is t².",
    "examKnowledge": {
      "section": "FP1 §4.4",
      "status": "derived-not-printed"
    }
  },
  {
    "id": "exam-fp2-general-roots",
    "name": "nth Roots of a Complex Number",
    "subject": "Further Mathematics",
    "topic": "Further Pure 2",
    "formula": "z_k = r^(1/n)[cos((θ+2πk)/n) + i sin((θ+2πk)/n)]",
    "latex": "\\begin{aligned}z_k&=r^{1/n}(\\cos\\phi_k+i\\sin\\phi_k)\\\\\\phi_k&=\\frac{\\theta+2\\pi k}{n},\\quad k=0,\\ldots,n-1\\end{aligned}",
    "aliases": [
      "nth roots of a complex number",
      "fp2 general roots",
      "exam extras",
      "not in formula booklet",
      "Further Pure 2"
    ],
    "variables": [
      {
        "symbol": "r, θ",
        "name": "modulus and argument of the non-zero number being rooted"
      },
      {
        "symbol": "n",
        "name": "positive integer"
      },
      {
        "symbol": "k",
        "name": "root index"
      }
    ],
    "notes": "Derived using De Moivre. The booklet prints roots of unity, but not this general non-unit-modulus form. Angles in radians.",
    "examKnowledge": {
      "section": "FP2 §3.2",
      "status": "derived-not-printed"
    }
  },
  {
    "id": "exam-fp2-first-order-solution",
    "name": "Solution of a Linear First-Order ODE",
    "subject": "Further Mathematics",
    "topic": "Further Pure 2",
    "formula": "y = [∫ I(x)Q(x) dx + C]/I(x), I(x) = exp(∫P(x) dx)",
    "latex": "\\begin{aligned}y&=\\frac{\\int I(x)Q(x)\\,dx+C}{I(x)}\\\\I(x)&=e^{\\int P(x)\\,dx}\\end{aligned}",
    "aliases": [
      "solution of a linear first-order ode",
      "fp2 first order solution",
      "exam extras",
      "not in formula booklet",
      "Further Pure 2"
    ],
    "variables": [
      {
        "symbol": "P, Q",
        "name": "coefficients in y′ + Py = Q"
      },
      {
        "symbol": "I",
        "name": "integrating factor"
      },
      {
        "symbol": "C",
        "name": "constant"
      }
    ],
    "notes": "First divide through so the coefficient of y′ is 1. The specification prints the integrating factor; the additional result here is the solved product-rule equation.",
    "examKnowledge": {
      "section": "FP2 §4.2",
      "status": "derived-not-printed"
    }
  },
  {
    "id": "exam-fp2-cf-distinct",
    "name": "Complementary Function: Distinct Real Roots",
    "subject": "Further Mathematics",
    "topic": "Further Pure 2",
    "formula": "y_c = A exp(m₁x) + B exp(m₂x)",
    "latex": "y_c=Ae^{m_1x}+Be^{m_2x}",
    "aliases": [
      "complementary function: distinct real roots",
      "fp2 cf distinct",
      "exam extras",
      "not in formula booklet",
      "Further Pure 2"
    ],
    "variables": [
      {
        "symbol": "m₁, m₂",
        "name": "distinct real roots of am² + bm + c = 0"
      },
      {
        "symbol": "A, B",
        "name": "arbitrary constants"
      }
    ],
    "notes": "For ay″ + by′ + cy = 0 with a ≠ 0. For a non-zero right-hand side add a particular integral.",
    "examKnowledge": {
      "section": "FP2 §5.1",
      "status": "derived-not-printed"
    }
  },
  {
    "id": "exam-fp2-cf-repeated",
    "name": "Complementary Function: Repeated Root",
    "subject": "Further Mathematics",
    "topic": "Further Pure 2",
    "formula": "y_c = (A + Bx) exp(mx)",
    "latex": "y_c=(A+Bx)e^{mx}",
    "aliases": [
      "complementary function: repeated root",
      "fp2 cf repeated",
      "exam extras",
      "not in formula booklet",
      "Further Pure 2"
    ],
    "variables": [
      {
        "symbol": "m",
        "name": "repeated real auxiliary root"
      },
      {
        "symbol": "A, B",
        "name": "arbitrary constants"
      }
    ],
    "notes": "For constant-coefficient second-order equations. Two independent constants are needed; Ae^(mx) + Be^(mx) is insufficient.",
    "examKnowledge": {
      "section": "FP2 §5.1",
      "status": "derived-not-printed"
    }
  },
  {
    "id": "exam-fp2-cf-complex",
    "name": "Complementary Function: Complex Roots",
    "subject": "Further Mathematics",
    "topic": "Further Pure 2",
    "formula": "y_c = exp(αx)[A cos(βx) + B sin(βx)]",
    "latex": "y_c=e^{\\alpha x}[A\\cos(\\beta x)+B\\sin(\\beta x)]",
    "aliases": [
      "complementary function: complex roots",
      "fp2 cf complex",
      "exam extras",
      "not in formula booklet",
      "Further Pure 2"
    ],
    "variables": [
      {
        "symbol": "α ± iβ",
        "name": "auxiliary roots, β ≠ 0"
      },
      {
        "symbol": "A, B",
        "name": "real arbitrary constants"
      }
    ],
    "notes": "For real constant coefficients. Add a particular integral for the full inhomogeneous equation.",
    "examKnowledge": {
      "section": "FP2 §5.1",
      "status": "derived-not-printed"
    }
  },
  {
    "id": "exam-fp2-polar-conversion",
    "name": "Polar to Cartesian Coordinates",
    "subject": "Further Mathematics",
    "topic": "Further Pure 2",
    "formula": "x = r cos θ; y = r sin θ; r² = x² + y²",
    "latex": "\\begin{aligned}x&=r\\cos\\theta,\\quad y=r\\sin\\theta\\\\r^2&=x^2+y^2\\end{aligned}",
    "aliases": [
      "polar to cartesian coordinates",
      "fp2 polar conversion",
      "exam extras",
      "not in formula booklet",
      "Further Pure 2"
    ],
    "variables": [
      {
        "symbol": "r",
        "name": "non-negative radius"
      },
      {
        "symbol": "θ",
        "name": "polar angle"
      }
    ],
    "notes": "Choose the correct quadrant when recovering θ from Cartesian coordinates; tan⁻¹(y/x) alone is ambiguous.",
    "examKnowledge": {
      "section": "FP2 §7.1",
      "status": "derived-not-printed"
    }
  },
  {
    "id": "exam-fp2-polar-tangent",
    "name": "Gradient of a Polar Curve",
    "subject": "Further Mathematics",
    "topic": "Further Pure 2",
    "formula": "dy/dx = (r′ sin θ + r cos θ)/(r′ cos θ − r sin θ)",
    "latex": "\\frac{dy}{dx}=\\frac{r\\prime\\sin\\theta+r\\cos\\theta}{r\\prime\\cos\\theta-r\\sin\\theta}",
    "aliases": [
      "gradient of a polar curve",
      "fp2 polar tangent",
      "exam extras",
      "not in formula booklet",
      "Further Pure 2"
    ],
    "variables": [
      {
        "symbol": "r",
        "name": "radius as a function of θ"
      },
      {
        "symbol": "r′",
        "name": "dr/dθ"
      }
    ],
    "notes": "Differentiate x = r cos θ and y = r sin θ. A zero numerator with non-zero denominator gives a horizontal tangent; a zero denominator with non-zero numerator gives a vertical tangent. If both vanish, investigate further.",
    "examKnowledge": {
      "section": "FP2 §7.1 (tangents)",
      "status": "derived-not-printed"
    }
  },
  {
    "id": "exam-fp3-ellipse-tangent",
    "name": "Tangent to an Ellipse",
    "subject": "Further Mathematics",
    "topic": "Further Pure 3",
    "formula": "xx₁/a² + yy₁/b² = 1",
    "latex": "\\frac{xx_1}{a^2}+\\frac{yy_1}{b^2}=1",
    "aliases": [
      "tangent to an ellipse",
      "fp3 ellipse tangent",
      "exam extras",
      "not in formula booklet",
      "Further Pure 3"
    ],
    "variables": [
      {
        "symbol": "a, b",
        "name": "positive semiaxes"
      },
      {
        "symbol": "(x₁, y₁)",
        "name": "point on x²/a² + y²/b² = 1"
      }
    ],
    "notes": "Implicit differentiation gives this point-of-contact tangent; works at vertical tangents too.",
    "examKnowledge": {
      "section": "FP3 §2.3",
      "status": "derived-not-printed"
    }
  },
  {
    "id": "exam-fp3-hyperbola-tangent",
    "name": "Tangent to a Hyperbola",
    "subject": "Further Mathematics",
    "topic": "Further Pure 3",
    "formula": "xx₁/a² − yy₁/b² = 1",
    "latex": "\\frac{xx_1}{a^2}-\\frac{yy_1}{b^2}=1",
    "aliases": [
      "tangent to a hyperbola",
      "fp3 hyperbola tangent",
      "exam extras",
      "not in formula booklet",
      "Further Pure 3"
    ],
    "variables": [
      {
        "symbol": "a, b",
        "name": "positive conic parameters"
      },
      {
        "symbol": "(x₁, y₁)",
        "name": "point on x²/a² − y²/b² = 1"
      }
    ],
    "notes": "For the standard horizontal hyperbola. Change signs appropriately for a differently oriented equation.",
    "examKnowledge": {
      "section": "FP3 §2.3",
      "status": "derived-not-printed"
    }
  },
  {
    "id": "exam-fp3-ellipse-tangent-condition",
    "name": "Line Tangency Condition for an Ellipse",
    "subject": "Further Mathematics",
    "topic": "Further Pure 3",
    "formula": "y = mx + c is tangent when c² = a²m² + b²",
    "latex": "y=mx+c,\\quad c^2=a^2m^2+b^2",
    "aliases": [
      "line tangency condition for an ellipse",
      "fp3 ellipse tangent condition",
      "exam extras",
      "not in formula booklet",
      "Further Pure 3"
    ],
    "variables": [
      {
        "symbol": "a, b",
        "name": "positive semiaxes"
      },
      {
        "symbol": "m, c",
        "name": "finite line gradient and intercept"
      }
    ],
    "notes": "Substitute the line into x²/a² + y²/b² = 1 and set the discriminant to zero. This form excludes vertical lines.",
    "examKnowledge": {
      "section": "FP3 §2.3",
      "status": "derived-not-printed"
    }
  },
  {
    "id": "exam-fp3-hyperbola-tangent-condition",
    "name": "Line Tangency Condition for a Hyperbola",
    "subject": "Further Mathematics",
    "topic": "Further Pure 3",
    "formula": "y = mx + c is tangent when c² = a²m² − b² > 0",
    "latex": "y=mx+c,\\quad c^2=a^2m^2-b^2>0",
    "aliases": [
      "line tangency condition for a hyperbola",
      "fp3 hyperbola tangent condition",
      "exam extras",
      "not in formula booklet",
      "Further Pure 3"
    ],
    "variables": [
      {
        "symbol": "a, b",
        "name": "positive conic parameters"
      },
      {
        "symbol": "m, c",
        "name": "line gradient and intercept"
      }
    ],
    "notes": "For x²/a² − y²/b² = 1 and a finite point of tangency. If c = 0 and m = ±b/a the line is an asymptote, not a tangent at a finite point.",
    "examKnowledge": {
      "section": "FP3 §2.3",
      "status": "derived-not-printed"
    }
  },
  {
    "id": "exam-fp3-line-plane-angle",
    "name": "Angle Between a Line and a Plane",
    "subject": "Further Mathematics",
    "topic": "Further Pure 3",
    "formula": "sin θ = |d·n|/(|d||n|)",
    "latex": "\\sin\\theta=\\frac{|\\mathbf d\\cdot\\mathbf n|}{|\\mathbf d|\\,|\\mathbf n|}",
    "aliases": [
      "angle between a line and a plane",
      "fp3 line plane angle",
      "exam extras",
      "not in formula booklet",
      "Further Pure 3"
    ],
    "variables": [
      {
        "symbol": "d",
        "name": "non-zero line direction vector"
      },
      {
        "symbol": "n",
        "name": "non-zero plane normal"
      },
      {
        "symbol": "θ",
        "name": "acute/right angle to the plane"
      }
    ],
    "notes": "θ is between 0 and π/2. Complement of the angle between the direction and the normal. Derive this by taking the complement of the scalar-product angle to the normal.",
    "examKnowledge": {
      "section": "FP3 §5.2–5.3",
      "status": "derived-not-printed"
    }
  },
  {
    "id": "exam-fp3-determinant",
    "name": "Determinant of a 3 × 3 Matrix",
    "subject": "Further Mathematics",
    "topic": "Further Pure 3",
    "formula": "det A = a(ei − fh) − b(di − fg) + c(dh − eg)",
    "latex": "\\begin{aligned}A&=\\begin{pmatrix}a&b&c\\\\d&e&f\\\\g&h&i\\end{pmatrix}\\\\\\det A&=a(ei-fh)-b(di-fg)+c(dh-eg)\\end{aligned}",
    "aliases": [
      "determinant of a 3 × 3 matrix",
      "fp3 determinant",
      "exam extras",
      "not in formula booklet",
      "Further Pure 3"
    ],
    "variables": [
      {
        "symbol": "a, …, i",
        "name": "entries in row order"
      }
    ],
    "notes": "Cofactor expansion along the first row has alternating signs + − +.",
    "examKnowledge": {
      "section": "FP3 §6.4",
      "status": "derived-not-printed"
    }
  },
  {
    "id": "exam-fp3-inverse",
    "name": "Inverse Using the Adjugate",
    "subject": "Further Mathematics",
    "topic": "Further Pure 3",
    "formula": "A⁻¹ = adj(A)/det(A)",
    "latex": "A^{-1}=\\frac{\\operatorname{adj}(A)}{\\det A}",
    "aliases": [
      "inverse using the adjugate",
      "fp3 inverse",
      "exam extras",
      "not in formula booklet",
      "Further Pure 3"
    ],
    "variables": [
      {
        "symbol": "A",
        "name": "square matrix with non-zero determinant"
      },
      {
        "symbol": "adj(A)",
        "name": "transpose of the cofactor matrix"
      }
    ],
    "notes": "For a 3 × 3 matrix, form signed minors, transpose, then divide by the determinant. Singular matrices have no inverse.",
    "examKnowledge": {
      "section": "FP3 §6.5",
      "status": "derived-not-printed"
    }
  },
  {
    "id": "exam-fp3-eigen",
    "name": "Eigenvalues and Eigenvectors",
    "subject": "Further Mathematics",
    "topic": "Further Pure 3",
    "formula": "det(A − λI) = 0; (A − λI)v = 0, v ≠ 0",
    "latex": "\\begin{aligned}\\det(A-\\lambda I)&=0\\\\(A-\\lambda I)\\mathbf v&=\\mathbf0,\\quad\\mathbf v\\ne\\mathbf0\\end{aligned}",
    "aliases": [
      "eigenvalues and eigenvectors",
      "fp3 eigen",
      "exam extras",
      "not in formula booklet",
      "Further Pure 3"
    ],
    "variables": [
      {
        "symbol": "A",
        "name": "square matrix"
      },
      {
        "symbol": "I",
        "name": "identity matrix"
      },
      {
        "symbol": "λ",
        "name": "eigenvalue"
      },
      {
        "symbol": "v",
        "name": "corresponding eigenvector"
      }
    ],
    "notes": "Solve the characteristic equation, then find a non-zero vector in the null space for each eigenvalue. Normalise if requested.",
    "examKnowledge": {
      "section": "FP3 §6.7",
      "status": "derived-not-printed"
    }
  },
  {
    "id": "exam-fp3-diagonalisation",
    "name": "Diagonalising a Symmetric Matrix",
    "subject": "Further Mathematics",
    "topic": "Further Pure 3",
    "formula": "PᵀAP = D; A = PDPᵀ",
    "latex": "P^TAP=D,\\qquad A=PDP^T",
    "aliases": [
      "diagonalising a symmetric matrix",
      "fp3 diagonalisation",
      "exam extras",
      "not in formula booklet",
      "Further Pure 3"
    ],
    "variables": [
      {
        "symbol": "A",
        "name": "real symmetric matrix"
      },
      {
        "symbol": "P",
        "name": "matrix of orthonormal eigenvector columns"
      },
      {
        "symbol": "D",
        "name": "diagonal eigenvalue matrix in matching order"
      }
    ],
    "notes": "The specification prints PᵀAP being diagonal; this card adds the reconstruction and the order of columns. P⁻¹ = Pᵀ; repeated eigenvalues require orthonormal choices.",
    "examKnowledge": {
      "section": "FP3 §6.8",
      "status": "derived-from-printed-equation"
    }
  },
  {
    "id": "exam-m2-projectile-components",
    "name": "Projectile Position and Velocity",
    "subject": "Maths",
    "topic": "Mechanics 2",
    "formula": "x = u cos θ t; y = u sin θ t − gt²/2; v_x = u cos θ; v_y = u sin θ − gt",
    "latex": "\\begin{aligned}x&=u\\cos\\theta\\,t,\\quad v_x=u\\cos\\theta\\\\y&=u\\sin\\theta\\,t-\\tfrac12gt^2\\\\v_y&=u\\sin\\theta-gt\\end{aligned}",
    "aliases": [
      "projectile position and velocity",
      "m2 projectile components",
      "exam extras",
      "not in formula booklet",
      "Mechanics 2"
    ],
    "variables": [
      {
        "symbol": "u",
        "name": "launch speed"
      },
      {
        "symbol": "θ",
        "name": "angle above horizontal"
      },
      {
        "symbol": "g",
        "name": "positive gravitational acceleration"
      },
      {
        "symbol": "t",
        "name": "time from launch"
      }
    ],
    "notes": "Launch point is the origin, y upwards; constant gravity, no air resistance. Pearson M2 sample chapter 1 covers this model.",
    "examKnowledge": {
      "section": "M2 §1.1–1.2",
      "status": "derived-not-printed"
    }
  },
  {
    "id": "exam-m2-projectile-trajectory",
    "name": "Projectile Trajectory",
    "subject": "Maths",
    "topic": "Mechanics 2",
    "formula": "y = x tan θ − gx²/(2u² cos² θ)",
    "latex": "y=x\\tan\\theta-\\frac{gx^2}{2u^2\\cos^2\\theta}",
    "aliases": [
      "projectile trajectory",
      "m2 projectile trajectory",
      "exam extras",
      "not in formula booklet",
      "Mechanics 2"
    ],
    "variables": [
      {
        "symbol": "u",
        "name": "positive launch speed"
      },
      {
        "symbol": "θ",
        "name": "launch angle"
      },
      {
        "symbol": "g",
        "name": "positive gravity"
      },
      {
        "symbol": "x, y",
        "name": "displacements from launch"
      }
    ],
    "notes": "Eliminate t between the projectile component equations. Requires cos θ ≠ 0, constant gravity and no drag.",
    "examKnowledge": {
      "section": "M2 §1.2",
      "status": "derived-not-printed"
    }
  },
  {
    "id": "exam-m2-projectile-flight",
    "name": "Projectile Time of Flight to Launch Level",
    "subject": "Maths",
    "topic": "Mechanics 2",
    "formula": "T = 2u sin θ/g",
    "latex": "T=\\frac{2u\\sin\\theta}{g}",
    "aliases": [
      "projectile time of flight to launch level",
      "m2 projectile flight",
      "exam extras",
      "not in formula booklet",
      "Mechanics 2"
    ],
    "variables": [
      {
        "symbol": "u",
        "name": "launch speed"
      },
      {
        "symbol": "θ",
        "name": "angle above horizontal, 0 < θ < π/2"
      },
      {
        "symbol": "g",
        "name": "positive gravitational acceleration"
      }
    ],
    "notes": "Applies only when landing at launch height under constant gravity without resistance. For unequal heights solve the vertical quadratic.",
    "examKnowledge": {
      "section": "M2 §1.2",
      "status": "derived-not-printed"
    }
  },
  {
    "id": "exam-m2-projectile-range",
    "name": "Projectile Range on Level Ground",
    "subject": "Maths",
    "topic": "Mechanics 2",
    "formula": "R = u² sin(2θ)/g",
    "latex": "R=\\frac{u^2\\sin2\\theta}{g}",
    "aliases": [
      "projectile range on level ground",
      "m2 projectile range",
      "exam extras",
      "not in formula booklet",
      "Mechanics 2"
    ],
    "variables": [
      {
        "symbol": "u",
        "name": "launch speed"
      },
      {
        "symbol": "θ",
        "name": "launch angle, 0 < θ < π/2"
      },
      {
        "symbol": "g",
        "name": "positive gravity"
      },
      {
        "symbol": "R",
        "name": "horizontal range"
      }
    ],
    "notes": "Requires equal launch and landing heights, level ground, no drag, constant g. Maximum range for fixed u occurs at θ = π/4 only under these assumptions.",
    "examKnowledge": {
      "section": "M2 §1.2",
      "status": "derived-not-printed"
    }
  },
  {
    "id": "exam-m2-projectile-height",
    "name": "Projectile Maximum Height",
    "subject": "Maths",
    "topic": "Mechanics 2",
    "formula": "H = u² sin² θ/(2g)",
    "latex": "H=\\frac{u^2\\sin^2\\theta}{2g}",
    "aliases": [
      "projectile maximum height",
      "m2 projectile height",
      "exam extras",
      "not in formula booklet",
      "Mechanics 2"
    ],
    "variables": [
      {
        "symbol": "u",
        "name": "launch speed"
      },
      {
        "symbol": "θ",
        "name": "launch angle above horizontal"
      },
      {
        "symbol": "g",
        "name": "positive gravity"
      }
    ],
    "notes": "Height gained above the launch point. Set v_y = 0 at the top; assumes constant gravity and no drag.",
    "examKnowledge": {
      "section": "M2 §1.2",
      "status": "derived-not-printed"
    }
  },
  {
    "id": "exam-m2-vector-calculus",
    "name": "Velocity and Acceleration from Position",
    "subject": "Maths",
    "topic": "Mechanics 2",
    "formula": "v = dr/dt; a = dv/dt = d²r/dt²",
    "latex": "\\mathbf v=\\frac{d\\mathbf r}{dt},\\quad\\mathbf a=\\frac{d\\mathbf v}{dt}=\\frac{d^2\\mathbf r}{dt^2}",
    "aliases": [
      "velocity and acceleration from position",
      "m2 vector calculus",
      "exam extras",
      "not in formula booklet",
      "Mechanics 2"
    ],
    "variables": [
      {
        "symbol": "r",
        "name": "position vector"
      },
      {
        "symbol": "v",
        "name": "velocity vector"
      },
      {
        "symbol": "a",
        "name": "acceleration vector"
      },
      {
        "symbol": "t",
        "name": "time"
      }
    ],
    "notes": "Differentiate each vector component. Integrate acceleration for velocity and velocity for position, using initial conditions for the constants.",
    "examKnowledge": {
      "section": "M2 §1.3–1.4",
      "status": "derived-not-printed"
    }
  },
  {
    "id": "exam-m2-com",
    "name": "Centre of Mass of Particles",
    "subject": "Maths",
    "topic": "Mechanics 2",
    "formula": "x̄ = Σmᵢxᵢ/Σmᵢ; ȳ = Σmᵢyᵢ/Σmᵢ",
    "latex": "\\bar x=\\frac{\\sum m_ix_i}{\\sum m_i},\\quad\\bar y=\\frac{\\sum m_iy_i}{\\sum m_i}",
    "aliases": [
      "centre of mass of particles",
      "m2 com",
      "exam extras",
      "not in formula booklet",
      "Mechanics 2"
    ],
    "variables": [
      {
        "symbol": "mᵢ",
        "name": "particle mass"
      },
      {
        "symbol": "xᵢ, yᵢ",
        "name": "particle coordinates"
      }
    ],
    "notes": "Use one common origin and consistent units. Total physical mass must be positive.",
    "examKnowledge": {
      "section": "M2 §2.1",
      "status": "derived-not-printed"
    }
  },
  {
    "id": "exam-m2-composite",
    "name": "Centre of Mass of a Composite Lamina",
    "subject": "Maths",
    "topic": "Mechanics 2",
    "formula": "x̄ = ΣAᵢxᵢ/ΣAᵢ; ȳ = ΣAᵢyᵢ/ΣAᵢ",
    "latex": "\\bar x=\\frac{\\sum A_ix_i}{\\sum A_i},\\quad\\bar y=\\frac{\\sum A_iy_i}{\\sum A_i}",
    "aliases": [
      "centre of mass of a composite lamina",
      "m2 composite",
      "exam extras",
      "not in formula booklet",
      "Mechanics 2"
    ],
    "variables": [
      {
        "symbol": "Aᵢ",
        "name": "signed component area, negative for a hole"
      },
      {
        "symbol": "xᵢ, yᵢ",
        "name": "component centroid coordinates"
      }
    ],
    "notes": "Area weighting requires uniform common mass per unit area. Otherwise use masses. Represent a removed area with a negative weight in numerator and denominator.",
    "examKnowledge": {
      "section": "M2 §2.2",
      "status": "derived-not-printed"
    }
  },
  {
    "id": "exam-m2-work",
    "name": "Work by a Constant Force",
    "subject": "Maths",
    "topic": "Mechanics 2",
    "formula": "W = Fs cos θ",
    "latex": "W=Fs\\cos\\theta",
    "aliases": [
      "work by a constant force",
      "m2 work",
      "exam extras",
      "not in formula booklet",
      "Mechanics 2"
    ],
    "variables": [
      {
        "symbol": "F",
        "name": "force magnitude in N"
      },
      {
        "symbol": "s",
        "name": "displacement in m"
      },
      {
        "symbol": "θ",
        "name": "angle between force and displacement"
      },
      {
        "symbol": "W",
        "name": "work in J"
      }
    ],
    "notes": "Negative work when the force opposes displacement; no work for a perpendicular force.",
    "examKnowledge": {
      "section": "M2 §3.1",
      "status": "derived-not-printed"
    }
  },
  {
    "id": "exam-m2-power",
    "name": "Mechanical Power",
    "subject": "Maths",
    "topic": "Mechanics 2",
    "formula": "P = F·v = Fv cos θ",
    "latex": "P=\\mathbf F\\cdot\\mathbf v=Fv\\cos\\theta",
    "aliases": [
      "mechanical power",
      "m2 power",
      "exam extras",
      "not in formula booklet",
      "Mechanics 2"
    ],
    "variables": [
      {
        "symbol": "F",
        "name": "force in N"
      },
      {
        "symbol": "v",
        "name": "velocity in m s⁻¹"
      },
      {
        "symbol": "θ",
        "name": "angle between force and velocity"
      },
      {
        "symbol": "P",
        "name": "instantaneous power in W"
      }
    ],
    "notes": "For a force along the direction of motion, P = Fv. Average power is work/time; this expression gives instantaneous power.",
    "examKnowledge": {
      "section": "M2 §3.1",
      "status": "derived-not-printed"
    }
  },
  {
    "id": "exam-m2-work-energy",
    "name": "Work–Energy Principle",
    "subject": "Maths",
    "topic": "Mechanics 2",
    "formula": "W_net = ½mv² − ½mu²",
    "latex": "W_{\\rm net}=\\frac12mv^2-\\frac12mu^2",
    "aliases": [
      "work–energy principle",
      "m2 work energy",
      "exam extras",
      "not in formula booklet",
      "Mechanics 2"
    ],
    "variables": [
      {
        "symbol": "m",
        "name": "constant mass"
      },
      {
        "symbol": "u, v",
        "name": "initial and final speeds"
      },
      {
        "symbol": "W_net",
        "name": "total work by all forces"
      }
    ],
    "notes": "Include gravity among the forces when using net work, or account for its work with a potential-energy change; do not count it twice.",
    "examKnowledge": {
      "section": "M2 §3.1",
      "status": "derived-not-printed"
    }
  },
  {
    "id": "exam-m2-restitution",
    "name": "Newton’s Law of Restitution",
    "subject": "Maths",
    "topic": "Mechanics 2",
    "formula": "v₂ − v₁ = e(u₁ − u₂)",
    "latex": "v_2-v_1=e(u_1-u_2)",
    "aliases": [
      "newton’s law of restitution",
      "m2 restitution",
      "exam extras",
      "not in formula booklet",
      "Mechanics 2"
    ],
    "variables": [
      {
        "symbol": "u₁, u₂",
        "name": "signed pre-impact velocities with u₁ > u₂"
      },
      {
        "symbol": "v₁, v₂",
        "name": "signed post-impact velocities"
      },
      {
        "symbol": "e",
        "name": "restitution coefficient, 0 ≤ e ≤ 1"
      }
    ],
    "notes": "Direct impact along one line, particle 1 approaches particle 2 from behind in the chosen positive direction. Combine with momentum conservation when external impulse is negligible.",
    "examKnowledge": {
      "section": "M2 §4.2",
      "status": "derived-not-printed"
    }
  },
  {
    "id": "exam-m2-impact-loss",
    "name": "Kinetic Energy Lost in Direct Impact",
    "subject": "Maths",
    "topic": "Mechanics 2",
    "formula": "loss = m₁m₂(1 − e²)(u₁ − u₂)²/[2(m₁ + m₂)]",
    "latex": "\\Delta E_{\\rm loss}=\\frac{m_1m_2}{2(m_1+m_2)}(1-e^2)(u_1-u_2)^2",
    "aliases": [
      "kinetic energy lost in direct impact",
      "m2 impact loss",
      "exam extras",
      "not in formula booklet",
      "Mechanics 2"
    ],
    "variables": [
      {
        "symbol": "m₁, m₂",
        "name": "positive masses"
      },
      {
        "symbol": "u₁, u₂",
        "name": "initial signed velocities"
      },
      {
        "symbol": "e",
        "name": "coefficient of restitution"
      }
    ],
    "notes": "Derived shortcut for a direct two-particle collision with negligible external impulse. You can always compute total KE before minus total KE after instead.",
    "examKnowledge": {
      "section": "M2 §4.2",
      "status": "derived-not-printed"
    }
  },
  {
    "id": "exam-m2-wall-rebound",
    "name": "Direct Rebound from a Fixed Wall",
    "subject": "Maths",
    "topic": "Mechanics 2",
    "formula": "v = −eu",
    "latex": "v=-eu",
    "aliases": [
      "direct rebound from a fixed wall",
      "m2 wall rebound",
      "exam extras",
      "not in formula booklet",
      "Mechanics 2"
    ],
    "variables": [
      {
        "symbol": "u",
        "name": "signed velocity towards the wall"
      },
      {
        "symbol": "v",
        "name": "signed velocity after impact"
      },
      {
        "symbol": "e",
        "name": "coefficient of restitution"
      }
    ],
    "notes": "Smooth fixed wall, impact normal to the wall. The minus sign reverses direction. Oblique impact is outside this M2 requirement.",
    "examKnowledge": {
      "section": "M2 §4.3",
      "status": "derived-not-printed"
    }
  },
  {
    "id": "exam-m3-spring-period",
    "name": "Period of a Mass on an Elastic Spring",
    "subject": "Maths",
    "topic": "Mechanics 3",
    "formula": "T = 2π√(ml/λ)",
    "latex": "T=2\\pi\\sqrt{\\frac{ml}{\\lambda}}",
    "aliases": [
      "period of a mass on an elastic spring",
      "m3 spring period",
      "exam extras",
      "not in formula booklet",
      "Mechanics 3"
    ],
    "variables": [
      {
        "symbol": "m",
        "name": "attached particle mass"
      },
      {
        "symbol": "l",
        "name": "natural spring length"
      },
      {
        "symbol": "λ",
        "name": "modulus of elasticity"
      }
    ],
    "notes": "Derive ω² = λ/(ml) about equilibrium. Ideal light spring, linear Hooke law, no damping. A string must stay taut throughout the assumed SHM.",
    "examKnowledge": {
      "section": "M3 §2.1; §3.1",
      "status": "derived-not-printed"
    }
  },
  {
    "id": "exam-m3-equilibrium-extension",
    "name": "Vertical Elastic Equilibrium Extension",
    "subject": "Maths",
    "topic": "Mechanics 3",
    "formula": "x₀ = mgl/λ",
    "latex": "x_0=\\frac{mgl}{\\lambda}",
    "aliases": [
      "vertical elastic equilibrium extension",
      "m3 equilibrium extension",
      "exam extras",
      "not in formula booklet",
      "Mechanics 3"
    ],
    "variables": [
      {
        "symbol": "m",
        "name": "suspended mass"
      },
      {
        "symbol": "g",
        "name": "gravity"
      },
      {
        "symbol": "l",
        "name": "natural length"
      },
      {
        "symbol": "λ",
        "name": "modulus of elasticity"
      }
    ],
    "notes": "One vertical light elastic string/spring holding a particle at rest: balance λx₀/l = mg. This displacement is measured from natural length, not from equilibrium.",
    "examKnowledge": {
      "section": "M3 §2.1",
      "status": "derived-not-printed"
    }
  },
  {
    "id": "exam-m3-circular-period",
    "name": "Circular Motion Period",
    "subject": "Maths",
    "topic": "Mechanics 3",
    "formula": "T = 2πr/v = 2π/ω",
    "latex": "T=\\frac{2\\pi r}{v}=\\frac{2\\pi}{\\omega}",
    "aliases": [
      "circular motion period",
      "m3 circular period",
      "exam extras",
      "not in formula booklet",
      "Mechanics 3"
    ],
    "variables": [
      {
        "symbol": "r",
        "name": "radius"
      },
      {
        "symbol": "v",
        "name": "constant speed"
      },
      {
        "symbol": "ω",
        "name": "angular speed"
      }
    ],
    "notes": "Uniform circular motion. This is the derived period relation, not the SHM period already printed in the specification.",
    "examKnowledge": {
      "section": "M3 §4.1",
      "status": "derived-not-printed"
    }
  },
  {
    "id": "exam-m3-circle-contact",
    "name": "Vertical Circle Contact at the Top",
    "subject": "Maths",
    "topic": "Mechanics 3",
    "formula": "N + mg = mv²/r",
    "latex": "N+mg=\\frac{mv^2}{r}",
    "aliases": [
      "vertical circle contact at the top",
      "m3 circle contact",
      "exam extras",
      "not in formula booklet",
      "Mechanics 3"
    ],
    "variables": [
      {
        "symbol": "N",
        "name": "inward normal reaction or taut-string tension at the top"
      },
      {
        "symbol": "m",
        "name": "mass"
      },
      {
        "symbol": "v",
        "name": "speed at top"
      },
      {
        "symbol": "r",
        "name": "circle radius"
      },
      {
        "symbol": "g",
        "name": "gravity"
      }
    ],
    "notes": "For motion on the inside of a smooth vertical circle, or a string directed to the centre. N ≥ 0 gives v² ≥ gr at the top. Do not apply this to a rigid rod or motion outside a circle without resolving forces afresh.",
    "examKnowledge": {
      "section": "M3 §4.2",
      "status": "derived-not-printed"
    }
  },
  {
    "id": "exam-m3-continuous-com",
    "name": "Centre of Mass by Integration",
    "subject": "Maths",
    "topic": "Mechanics 3",
    "formula": "x̄ = (1/M)∫x dm; M = ∫dm",
    "latex": "\\bar x=\\frac{1}{M}\\int x\\,dm,\\quad M=\\int dm",
    "aliases": [
      "centre of mass by integration",
      "m3 continuous com",
      "exam extras",
      "not in formula booklet",
      "Mechanics 3"
    ],
    "variables": [
      {
        "symbol": "dm",
        "name": "element of mass"
      },
      {
        "symbol": "x",
        "name": "coordinate of the element"
      },
      {
        "symbol": "M",
        "name": "total mass"
      }
    ],
    "notes": "For a uniform rod dm = ρA dx, and for an axisymmetric solid slice dm = ρπy² dx. Use the geometry and density given, with matching integration limits.",
    "examKnowledge": {
      "section": "M3 §5.1–5.2",
      "status": "derived-not-printed"
    }
  },
  {
    "id": "exam-s1-frequency-density",
    "name": "Histogram Frequency Density",
    "subject": "Maths",
    "topic": "Statistics 1",
    "formula": "frequency density = frequency/class width",
    "latex": "\\text{frequency density}=\\frac{\\text{frequency}}{\\text{class width}}",
    "aliases": [
      "histogram frequency density",
      "s1 frequency density",
      "exam extras",
      "not in formula booklet",
      "Statistics 1"
    ],
    "variables": [
      {
        "symbol": "frequency",
        "name": "count in a class"
      },
      {
        "symbol": "class width",
        "name": "upper boundary minus lower boundary"
      }
    ],
    "notes": "Histogram area represents frequency, with an overall scale if specified. Unequal class widths require frequency density, not raw frequency.",
    "examKnowledge": {
      "section": "S1 §2.1",
      "status": "derived-not-printed"
    }
  },
  {
    "id": "exam-s1-grouped-quantile",
    "name": "Grouped Quantile by Interpolation",
    "subject": "Maths",
    "topic": "Statistics 1",
    "formula": "Q_p ≈ L + [(pN − C)/f]w",
    "latex": "Q_p\\approx L+\\frac{pN-C}{f}\\,w",
    "aliases": [
      "grouped quantile by interpolation",
      "s1 grouped quantile",
      "exam extras",
      "not in formula booklet",
      "Statistics 1"
    ],
    "variables": [
      {
        "symbol": "L",
        "name": "lower boundary of quantile class"
      },
      {
        "symbol": "p",
        "name": "target cumulative proportion"
      },
      {
        "symbol": "N",
        "name": "total frequency"
      },
      {
        "symbol": "C",
        "name": "cumulative frequency before class"
      },
      {
        "symbol": "f",
        "name": "frequency in class"
      },
      {
        "symbol": "w",
        "name": "class width"
      }
    ],
    "notes": "Assumes data spread uniformly within the class. Use p = 1/4, 1/2, 3/4 for grouped quartiles/median. For ungrouped data use the course’s order-statistic convention instead.",
    "examKnowledge": {
      "section": "S1 §2.3",
      "status": "derived-not-printed"
    }
  },
  {
    "id": "exam-s1-combined-mean",
    "name": "Combined Mean of Two Groups",
    "subject": "Maths",
    "topic": "Statistics 1",
    "formula": "x̄ = (n₁x̄₁ + n₂x̄₂)/(n₁ + n₂)",
    "latex": "\\bar x=\\frac{n_1\\bar x_1+n_2\\bar x_2}{n_1+n_2}",
    "aliases": [
      "combined mean of two groups",
      "s1 combined mean",
      "exam extras",
      "not in formula booklet",
      "Statistics 1"
    ],
    "variables": [
      {
        "symbol": "n₁, n₂",
        "name": "group sizes"
      },
      {
        "symbol": "x̄₁, x̄₂",
        "name": "group means"
      }
    ],
    "notes": "Weight each mean by its group size. Averaging the two means without weights works only for equal sizes; Pearson S1 sample §2.6 covers combined groups.",
    "examKnowledge": {
      "section": "S1 §2.2",
      "status": "derived-not-printed"
    }
  },
  {
    "id": "exam-s1-coding",
    "name": "Coding Data: Mean and Standard Deviation",
    "subject": "Maths",
    "topic": "Statistics 1",
    "formula": "y = (x − a)/b ⇒ x̄ = a + bȳ; s_x = |b|s_y",
    "latex": "\\begin{aligned}y&=\\frac{x-a}{b}\\\\\\bar x&=a+b\\bar y,\\quad s_x=|b|s_y\\end{aligned}",
    "aliases": [
      "coding data: mean and standard deviation",
      "s1 coding",
      "exam extras",
      "not in formula booklet",
      "Statistics 1"
    ],
    "variables": [
      {
        "symbol": "a",
        "name": "coding shift"
      },
      {
        "symbol": "b",
        "name": "non-zero scale"
      },
      {
        "symbol": "s_x, s_y",
        "name": "standard deviations using the same convention"
      }
    ],
    "notes": "Location shifts change the mean, not the spread. Variances scale by b²; negative b reverses order but standard deviation remains non-negative.",
    "examKnowledge": {
      "section": "S1 §2.3; §4.2",
      "status": "derived-not-printed"
    }
  },
  {
    "id": "exam-s1-discrete-uniform",
    "name": "Discrete Uniform Mean and Variance",
    "subject": "Maths",
    "topic": "Statistics 1",
    "formula": "X uniform on {1,…,n}: E(X) = (n+1)/2; Var(X) = (n²−1)/12",
    "latex": "\\begin{aligned}E(X)&=\\frac{n+1}{2}\\\\\\operatorname{Var}(X)&=\\frac{n^2-1}{12}\\end{aligned}",
    "aliases": [
      "discrete uniform mean and variance",
      "s1 discrete uniform",
      "exam extras",
      "not in formula booklet",
      "Statistics 1"
    ],
    "variables": [
      {
        "symbol": "n",
        "name": "positive integer; equally likely consecutive integers 1 to n"
      }
    ],
    "notes": "Not the continuous uniform distribution. For consecutive integers a,…,b use mean (a+b)/2 and variance ((b−a+1)²−1)/12. Derivable from the supplied expectation rules.",
    "examKnowledge": {
      "section": "S1 §5.4",
      "status": "derived-not-printed"
    }
  },
  {
    "id": "exam-s2-binomial-normal",
    "name": "Normal Approximation to a Binomial",
    "subject": "Maths",
    "topic": "Statistics 2",
    "formula": "B(n,p) ≈ N(np, np(1−p))",
    "latex": "X\\sim B(n,p)\\ \\Longrightarrow\\ X\\approx N(np,np(1-p))",
    "aliases": [
      "normal approximation to a binomial",
      "s2 binomial normal",
      "exam extras",
      "not in formula booklet",
      "Statistics 2"
    ],
    "variables": [
      {
        "symbol": "n",
        "name": "trial count"
      },
      {
        "symbol": "p",
        "name": "success probability"
      }
    ],
    "notes": "Approximation, with the second Normal parameter a variance. Check that both np and n(1−p) are sufficiently large; use a continuity correction. There is no universal cutoff guaranteed by the specification.",
    "examKnowledge": {
      "section": "S2 §3.2",
      "status": "derived-not-printed"
    }
  },
  {
    "id": "exam-s2-poisson-normal",
    "name": "Normal Approximation to a Poisson",
    "subject": "Maths",
    "topic": "Statistics 2",
    "formula": "Po(λ) ≈ N(λ, λ)",
    "latex": "X\\sim\\operatorname{Po}(\\lambda)\\ \\Longrightarrow\\ X\\approx N(\\lambda,\\lambda)",
    "aliases": [
      "normal approximation to a poisson",
      "s2 poisson normal",
      "exam extras",
      "not in formula booklet",
      "Statistics 2"
    ],
    "variables": [
      {
        "symbol": "λ",
        "name": "Poisson mean, sufficiently large for approximation"
      }
    ],
    "notes": "Normal standard deviation is √λ, not λ. Apply a continuity correction; assess suitability in the context of the question.",
    "examKnowledge": {
      "section": "S2 §3.2",
      "status": "derived-not-printed"
    }
  },
  {
    "id": "exam-s2-binomial-poisson",
    "name": "Poisson Approximation to a Binomial",
    "subject": "Maths",
    "topic": "Statistics 2",
    "formula": "B(n,p) ≈ Po(np)",
    "latex": "B(n,p)\\approx\\operatorname{Po}(np)",
    "aliases": [
      "poisson approximation to a binomial",
      "s2 binomial poisson",
      "exam extras",
      "not in formula booklet",
      "Statistics 2"
    ],
    "variables": [
      {
        "symbol": "n",
        "name": "large trial count"
      },
      {
        "symbol": "p",
        "name": "small success probability"
      }
    ],
    "notes": "Approximation for many independent trials with a small success probability; match the mean λ = np. Use the exact binomial if the approximation is unsuitable.",
    "examKnowledge": {
      "section": "S2 §1.3",
      "status": "derived-not-printed"
    }
  },
  {
    "id": "exam-s2-continuity",
    "name": "Continuity Correction for Integer Counts",
    "subject": "Maths",
    "topic": "Statistics 2",
    "formula": "P(X ≤ k) ≈ P(Y < k+½); P(X ≥ k) ≈ P(Y > k−½)",
    "latex": "\\begin{aligned}P(X\\le k)&\\approx P(Y<k+\\tfrac12)\\\\P(X\\ge k)&\\approx P(Y>k-\\tfrac12)\\\\P(X=k)&\\approx P(k-\\tfrac12<Y<k+\\tfrac12)\\end{aligned}",
    "aliases": [
      "continuity correction for integer counts",
      "s2 continuity",
      "exam extras",
      "not in formula booklet",
      "Statistics 2"
    ],
    "variables": [
      {
        "symbol": "X",
        "name": "integer-valued binomial/Poisson count"
      },
      {
        "symbol": "Y",
        "name": "approximating Normal variable"
      },
      {
        "symbol": "k",
        "name": "integer threshold"
      }
    ],
    "notes": "Translate strict inequalities first: X < k means X ≤ k−1, so use k−½. Corrections belong to discrete-to-Normal approximations, not exact discrete calculations.",
    "examKnowledge": {
      "section": "S2 §3.2",
      "status": "derived-not-printed"
    }
  },
  {
    "id": "exam-s2-density-normalisation",
    "name": "Normalising a Probability Density",
    "subject": "Maths",
    "topic": "Statistics 2",
    "formula": "f(x) ≥ 0; ∫ f(x) dx over support = 1",
    "latex": "f(x)\\ge0,\\quad\\int_{-\\infty}^{\\infty}f(x)\\,dx=1",
    "aliases": [
      "normalising a probability density",
      "s2 density normalisation",
      "exam extras",
      "not in formula booklet",
      "Statistics 2"
    ],
    "variables": [
      {
        "symbol": "f",
        "name": "probability density; zero outside its support"
      }
    ],
    "notes": "Use the actual support and every piece of a piecewise density to find an unknown constant. A density value may exceed 1; probabilities may not.",
    "examKnowledge": {
      "section": "S2 §2.2",
      "status": "derived-not-printed"
    }
  },
  {
    "id": "exam-s2-continuous-quantile",
    "name": "Continuous Median and Quartiles",
    "subject": "Maths",
    "topic": "Statistics 2",
    "formula": "F(q_p) = p",
    "latex": "F(q_p)=p,\\quad p=\\tfrac14,\\tfrac12,\\tfrac34",
    "aliases": [
      "continuous median and quartiles",
      "s2 continuous quantile",
      "exam extras",
      "not in formula booklet",
      "Statistics 2"
    ],
    "variables": [
      {
        "symbol": "F",
        "name": "continuous cumulative distribution function"
      },
      {
        "symbol": "q_p",
        "name": "quartile or median"
      }
    ],
    "notes": "Solve within the support, choosing the correct piece of a piecewise CDF. For a flat interval a quantile need not be unique.",
    "examKnowledge": {
      "section": "S2 §2.5",
      "status": "derived-not-printed"
    }
  },
  {
    "id": "exam-s2-continuous-mode",
    "name": "Mode of a Continuous Distribution",
    "subject": "Maths",
    "topic": "Statistics 2",
    "formula": "f′(m) = 0 at an interior differentiable maximum",
    "latex": "f\\prime(m)=0\\quad\\text{at an interior differentiable maximum}",
    "aliases": [
      "mode of a continuous distribution",
      "s2 continuous mode",
      "exam extras",
      "not in formula booklet",
      "Statistics 2"
    ],
    "variables": [
      {
        "symbol": "f",
        "name": "density"
      },
      {
        "symbol": "m",
        "name": "candidate mode"
      }
    ],
    "notes": "Compare density values at all stationary points, boundaries and piecewise joins. An endpoint can be a mode; f′ = 0 alone does not identify it.",
    "examKnowledge": {
      "section": "S2 §2.5",
      "status": "derived-not-printed"
    }
  },
  {
    "id": "exam-s2-discrete-tail",
    "name": "Upper Tail from a Discrete CDF",
    "subject": "Maths",
    "topic": "Statistics 2",
    "formula": "P(X ≥ k) = 1 − F(k−1); P(X > k) = 1 − F(k)",
    "latex": "\\begin{aligned}P(X\\ge k)&=1-F(k-1)\\\\P(X>k)&=1-F(k)\\end{aligned}",
    "aliases": [
      "upper tail from a discrete cdf",
      "s2 discrete tail",
      "exam extras",
      "not in formula booklet",
      "Statistics 2"
    ],
    "variables": [
      {
        "symbol": "X",
        "name": "integer-valued random variable"
      },
      {
        "symbol": "F",
        "name": "CDF, F(x) = P(X ≤ x)"
      },
      {
        "symbol": "k",
        "name": "integer threshold"
      }
    ],
    "notes": "Use the k−1 shift for an inclusive upper tail. Essential when reading cumulative binomial or Poisson tables and constructing critical regions.",
    "examKnowledge": {
      "section": "S2 §1.1; §4.4",
      "status": "derived-not-printed"
    }
  },
  {
    "id": "exam-s3-standard-error",
    "name": "Standard Error of the Mean",
    "subject": "Maths",
    "topic": "Statistics 3",
    "formula": "SE(X̄) = σ/√n",
    "latex": "\\operatorname{SE}(\\bar X)=\\frac{\\sigma}{\\sqrt n}",
    "aliases": [
      "standard error of the mean",
      "s3 standard error",
      "exam extras",
      "not in formula booklet",
      "Statistics 3"
    ],
    "variables": [
      {
        "symbol": "σ",
        "name": "population standard deviation"
      },
      {
        "symbol": "n",
        "name": "independent sample size"
      }
    ],
    "notes": "Square root of the supplied variance σ²/n. For a large sample with unknown variance, estimate using the sample standard deviation s/√n.",
    "examKnowledge": {
      "section": "S3 §3.1–3.2",
      "status": "derived-not-printed"
    }
  },
  {
    "id": "exam-s3-confidence",
    "name": "Confidence Interval for a Normal Mean",
    "subject": "Maths",
    "topic": "Statistics 3",
    "formula": "x̄ ± z_(1−α/2) σ/√n",
    "latex": "\\bar x\\pm z_{1-\\alpha/2}\\frac{\\sigma}{\\sqrt n}",
    "aliases": [
      "confidence interval for a normal mean",
      "s3 confidence",
      "exam extras",
      "not in formula booklet",
      "Statistics 3"
    ],
    "variables": [
      {
        "symbol": "x̄",
        "name": "observed sample mean"
      },
      {
        "symbol": "σ",
        "name": "known population standard deviation"
      },
      {
        "symbol": "n",
        "name": "independent sample size"
      },
      {
        "symbol": "α",
        "name": "total probability excluded"
      },
      {
        "symbol": "z_(1−α/2)",
        "name": "standard Normal quantile"
      }
    ],
    "notes": "Two-sided 100(1−α)% interval. Exact for a Normal population with known variance. CLT gives an approximation for large samples; substitute s for unknown σ only in the large-sample setting. No t-distribution is required in this IAL unit.",
    "examKnowledge": {
      "section": "S3 §3.3–3.4",
      "status": "derived-not-printed"
    }
  },
  {
    "id": "exam-s3-sample-size",
    "name": "Sample Size for a Confidence Margin",
    "subject": "Maths",
    "topic": "Statistics 3",
    "formula": "n ≥ (z_(1−α/2) σ/E)²",
    "latex": "n\\ge\\left(\\frac{z_{1-\\alpha/2}\\sigma}{E}\\right)^2",
    "aliases": [
      "sample size for a confidence margin",
      "s3 sample size",
      "exam extras",
      "not in formula booklet",
      "Statistics 3"
    ],
    "variables": [
      {
        "symbol": "E",
        "name": "required positive half-width (margin of error)"
      },
      {
        "symbol": "σ",
        "name": "known population standard deviation"
      },
      {
        "symbol": "α",
        "name": "significance outside two-sided interval"
      }
    ],
    "notes": "Rearrange the Normal confidence-interval half-width. Round n up to the next integer. For a required full width w use E = w/2.",
    "examKnowledge": {
      "section": "S3 §3.4",
      "status": "derived-not-printed"
    }
  },
  {
    "id": "exam-s3-difference-se",
    "name": "Standard Error of a Difference of Means",
    "subject": "Maths",
    "topic": "Statistics 3",
    "formula": "SE(X̄ − Ȳ) = √(σ_x²/n_x + σ_y²/n_y)",
    "latex": "\\operatorname{SE}(\\bar X-\\bar Y)=\\sqrt{\\frac{\\sigma_x^2}{n_x}+\\frac{\\sigma_y^2}{n_y}}",
    "aliases": [
      "standard error of a difference of means",
      "s3 difference se",
      "exam extras",
      "not in formula booklet",
      "Statistics 3"
    ],
    "variables": [
      {
        "symbol": "σ_x², σ_y²",
        "name": "population variances"
      },
      {
        "symbol": "n_x, n_y",
        "name": "independent sample sizes"
      }
    ],
    "notes": "This denominator is explicitly present in the specification’s two-mean test statistic; the standalone standard-error interpretation is a derived aid. For independent large samples with unknown variances use s_x² and s_y².",
    "examKnowledge": {
      "section": "S3 §3.7–3.8",
      "status": "derived-from-printed-equation"
    }
  },
  {
    "id": "exam-s3-contingency",
    "name": "Expected Frequency in a Contingency Table",
    "subject": "Maths",
    "topic": "Statistics 3",
    "formula": "E_ij = (row total × column total)/grand total",
    "latex": "E_{ij}=\\frac{R_iC_j}{N}",
    "aliases": [
      "expected frequency in a contingency table",
      "s3 contingency",
      "exam extras",
      "not in formula booklet",
      "Statistics 3"
    ],
    "variables": [
      {
        "symbol": "R_i",
        "name": "total in row i"
      },
      {
        "symbol": "C_j",
        "name": "total in column j"
      },
      {
        "symbol": "N",
        "name": "grand total"
      }
    ],
    "notes": "Under the null hypothesis of independence. Compute from unrounded row/column totals; check expected frequencies before applying chi-squared.",
    "examKnowledge": {
      "section": "S3 §4.1",
      "status": "derived-not-printed"
    }
  },
  {
    "id": "exam-s3-contingency-df",
    "name": "Degrees of Freedom: Contingency Table",
    "subject": "Maths",
    "topic": "Statistics 3",
    "formula": "ν = (r−1)(c−1)",
    "latex": "\\nu=(r-1)(c-1)",
    "aliases": [
      "degrees of freedom: contingency table",
      "s3 contingency df",
      "exam extras",
      "not in formula booklet",
      "Statistics 3"
    ],
    "variables": [
      {
        "symbol": "r, c",
        "name": "row and column counts after any valid pooling"
      },
      {
        "symbol": "ν",
        "name": "degrees of freedom"
      }
    ],
    "notes": "For a test of independence with estimated row and column proportions. Pool logically when expected frequencies are too small and recalculate dimensions.",
    "examKnowledge": {
      "section": "S3 §4.2",
      "status": "derived-not-printed"
    }
  },
  {
    "id": "exam-s3-goodness-df",
    "name": "Degrees of Freedom: Goodness of Fit",
    "subject": "Maths",
    "topic": "Statistics 3",
    "formula": "ν = k − 1 − p",
    "latex": "\\nu=k-1-p",
    "aliases": [
      "degrees of freedom: goodness of fit",
      "s3 goodness df",
      "exam extras",
      "not in formula booklet",
      "Statistics 3"
    ],
    "variables": [
      {
        "symbol": "k",
        "name": "number of classes after pooling"
      },
      {
        "symbol": "p",
        "name": "independent distribution parameters estimated from these data"
      },
      {
        "symbol": "ν",
        "name": "degrees of freedom"
      }
    ],
    "notes": "The −1 accounts for the fixed total. Subtract only parameters estimated from this sample, not known parameters. Pool when expected counts are below 5 and require positive degrees of freedom.",
    "examKnowledge": {
      "section": "S3 §4.2",
      "status": "derived-not-printed"
    }
  },
  {
    "id": "exam-s3-fit-expected",
    "name": "Expected Frequency for a Fitted Distribution",
    "subject": "Maths",
    "topic": "Statistics 3",
    "formula": "E_i = N P(X in class i)",
    "latex": "E_i=N\\,P(X\\in\\text{class }i)",
    "aliases": [
      "expected frequency for a fitted distribution",
      "s3 fit expected",
      "exam extras",
      "not in formula booklet",
      "Statistics 3"
    ],
    "variables": [
      {
        "symbol": "N",
        "name": "sample size"
      },
      {
        "symbol": "E_i",
        "name": "expected class frequency"
      }
    ],
    "notes": "Use the model under H₀, with any parameters fitted as required. Include the complete probability support, including tails; use class boundaries for continuous models.",
    "examKnowledge": {
      "section": "S3 §4.1",
      "status": "derived-not-printed"
    }
  },
  {
    "id": "exam-s3-stratified",
    "name": "Proportional Stratified Sample Allocation",
    "subject": "Maths",
    "topic": "Statistics 3",
    "formula": "n_h = n N_h/N",
    "latex": "n_h=n\\frac{N_h}{N}",
    "aliases": [
      "proportional stratified sample allocation",
      "s3 stratified",
      "exam extras",
      "not in formula booklet",
      "Statistics 3"
    ],
    "variables": [
      {
        "symbol": "n",
        "name": "total requested sample size"
      },
      {
        "symbol": "N_h",
        "name": "population in stratum h"
      },
      {
        "symbol": "N",
        "name": "total population"
      },
      {
        "symbol": "n_h",
        "name": "sample allocated to stratum h"
      }
    ],
    "notes": "Round sensibly while keeping the total sample size n; then sample randomly within each stratum.",
    "examKnowledge": {
      "section": "S3 §2.2",
      "status": "derived-not-printed"
    }
  },
  {
    "id": "exam-p2-sine-solutions",
    "name": "General Solutions of a Sine Equation",
    "subject": "Maths",
    "topic": "Pure 2",
    "formula": "sin x = sin α ⇒ x = α + 2kπ or π − α + 2kπ",
    "latex": "x=\\alpha+2k\\pi\\quad\\text{or}\\quad x=\\pi-\\alpha+2k\\pi",
    "aliases": [
      "general solutions of a sine equation",
      "p2 sine solutions",
      "exam extras",
      "not in formula booklet",
      "Pure 2"
    ],
    "variables": [
      {
        "symbol": "α",
        "name": "one solution angle in radians"
      },
      {
        "symbol": "k",
        "name": "any integer"
      }
    ],
    "notes": "Apply these to the entire angle expression first, then solve for x and restrict to the requested interval. Use 360° instead of 2π and 180° instead of π for degrees.",
    "examKnowledge": {
      "section": "P2 §6.2",
      "status": "derived-not-printed"
    }
  },
  {
    "id": "exam-p2-cosine-solutions",
    "name": "General Solutions of a Cosine Equation",
    "subject": "Maths",
    "topic": "Pure 2",
    "formula": "cos x = cos α ⇒ x = ±α + 2kπ",
    "latex": "x=\\pm\\alpha+2k\\pi,\\quad k\\in\\mathbb Z",
    "aliases": [
      "general solutions of a cosine equation",
      "p2 cosine solutions",
      "exam extras",
      "not in formula booklet",
      "Pure 2"
    ],
    "variables": [
      {
        "symbol": "α",
        "name": "one solution angle in radians"
      },
      {
        "symbol": "k",
        "name": "any integer"
      }
    ],
    "notes": "Apply interval bounds to the original variable. Use 360° instead of 2π when working in degrees.",
    "examKnowledge": {
      "section": "P2 §6.2",
      "status": "derived-not-printed"
    }
  },
  {
    "id": "exam-p2-tangent-solutions",
    "name": "General Solutions of a Tangent Equation",
    "subject": "Maths",
    "topic": "Pure 2",
    "formula": "tan x = tan α ⇒ x = α + kπ",
    "latex": "x=\\alpha+k\\pi,\\quad k\\in\\mathbb Z",
    "aliases": [
      "general solutions of a tangent equation",
      "p2 tangent solutions",
      "exam extras",
      "not in formula booklet",
      "Pure 2"
    ],
    "variables": [
      {
        "symbol": "α",
        "name": "one solution angle in radians"
      },
      {
        "symbol": "k",
        "name": "any integer"
      }
    ],
    "notes": "Tangent has period π, or 180° in degrees. Exclude angles where tangent is undefined.",
    "examKnowledge": {
      "section": "P2 §6.2",
      "status": "derived-not-printed"
    }
  },
  {
    "id": "exam-fp3-ellipse-normal",
    "name": "Normal to an Ellipse",
    "subject": "Further Mathematics",
    "topic": "Further Pure 3",
    "formula": "y − y₁ = (a²y₁/(b²x₁))(x − x₁)",
    "latex": "y-y_1=\\frac{a^2y_1}{b^2x_1}(x-x_1)",
    "aliases": [
      "normal to an ellipse",
      "fp3 ellipse normal",
      "exam extras",
      "not in formula booklet",
      "Further Pure 3"
    ],
    "variables": [
      {
        "symbol": "a, b",
        "name": "positive semiaxes"
      },
      {
        "symbol": "(x₁, y₁)",
        "name": "point on the ellipse, x₁ ≠ 0"
      }
    ],
    "notes": "For x²/a² + y²/b² = 1. At x₁ = 0 the normal is the vertical line x = 0; this gradient form is undefined there.",
    "examKnowledge": {
      "section": "FP3 §2.3",
      "status": "derived-not-printed"
    }
  },
  {
    "id": "exam-fp3-hyperbola-normal",
    "name": "Normal to a Hyperbola",
    "subject": "Further Mathematics",
    "topic": "Further Pure 3",
    "formula": "y − y₁ = −a²y₁(x − x₁)/(b²x₁)",
    "latex": "y-y_1=-\\frac{a^2y_1}{b^2x_1}(x-x_1)",
    "aliases": [
      "normal to a hyperbola",
      "fp3 hyperbola normal",
      "exam extras",
      "not in formula booklet",
      "Further Pure 3"
    ],
    "variables": [
      {
        "symbol": "a, b",
        "name": "positive conic parameters"
      },
      {
        "symbol": "(x₁, y₁)",
        "name": "point on x²/a² − y²/b² = 1"
      }
    ],
    "notes": "Perpendicular to the tangent. For this horizontal hyperbola x₁ cannot be zero.",
    "examKnowledge": {
      "section": "FP3 §2.3",
      "status": "derived-not-printed"
    }
  },
  {
    "id": "exam-fp3-matrix-powers",
    "name": "Matrix Powers by Diagonalisation",
    "subject": "Further Mathematics",
    "topic": "Further Pure 3",
    "formula": "A = PDP⁻¹ ⇒ Aⁿ = PDⁿP⁻¹",
    "latex": "A=PDP^{-1}\\ \\Longrightarrow\\ A^n=PD^nP^{-1}",
    "aliases": [
      "matrix powers by diagonalisation",
      "fp3 matrix powers",
      "exam extras",
      "not in formula booklet",
      "Further Pure 3"
    ],
    "variables": [
      {
        "symbol": "P",
        "name": "invertible eigenvector matrix"
      },
      {
        "symbol": "D",
        "name": "diagonal eigenvalue matrix"
      },
      {
        "symbol": "n",
        "name": "positive integer power"
      }
    ],
    "notes": "Requires a complete set of independent eigenvectors. Raise each diagonal eigenvalue to n. For a real symmetric matrix use an orthonormal P, giving P⁻¹ = Pᵀ.",
    "examKnowledge": {
      "section": "FP3 §6.7–6.8",
      "status": "derived-not-printed"
    }
  },
  {
    "id": "exam-s1-skewness",
    "name": "Pearson’s Second Coefficient of Skewness",
    "subject": "Maths",
    "topic": "Statistics 1",
    "formula": "skewness = 3(mean − median)/standard deviation",
    "latex": "\\text{skewness}=\\frac{3(\\text{mean}-\\text{median})}{\\text{standard deviation}}",
    "aliases": [
      "pearson’s second coefficient of skewness",
      "s1 skewness",
      "exam extras",
      "not in formula booklet",
      "Statistics 1"
    ],
    "variables": [
      {
        "symbol": "mean, median",
        "name": "location measures for the same dataset"
      },
      {
        "symbol": "standard deviation",
        "name": "positive measure of spread"
      }
    ],
    "notes": "Positive suggests right skew, negative left skew. This is Pearson’s second coefficient, a descriptive indicator; zero does not prove symmetry. Pearson S1 sample chapter 3, pp. 44–47 and 53, includes this measure. It is not a universal definition of skewness.",
    "examKnowledge": {
      "section": "S1 §2.4",
      "status": "derived-not-printed"
    }
  },
  {
    "id": "exam-fp3-skew-distance",
    "name": "Shortest Distance Between Skew Lines",
    "subject": "Further Mathematics",
    "topic": "Further Pure 3",
    "formula": "d = |(b − a)·(u × v)|/|u × v|",
    "latex": "d=\\frac{|(\\mathbf b-\\mathbf a)\\cdot(\\mathbf u\\times\\mathbf v)|}{|\\mathbf u\\times\\mathbf v|}",
    "aliases": [
      "shortest distance between skew lines",
      "fp3 skew distance",
      "exam extras",
      "not in formula booklet",
      "Further Pure 3"
    ],
    "variables": [
      {
        "symbol": "a, b",
        "name": "position vectors of points on the two lines"
      },
      {
        "symbol": "u, v",
        "name": "respective non-zero direction vectors"
      }
    ],
    "notes": "For non-parallel lines r = a + λu and r = b + μv. The cross product is a common normal; project b − a onto it. If the lines intersect the distance is zero. For parallel lines use the point-to-line distance instead.",
    "examKnowledge": {
      "section": "FP3 §5.2",
      "status": "derived-not-printed"
    }
  },
  {
    "id": "exam-fp3-point-line-distance",
    "name": "Distance from a Point to a Line",
    "subject": "Further Mathematics",
    "topic": "Further Pure 3",
    "formula": "d = |(p − a) × u|/|u|",
    "latex": "d=\\frac{|(\\mathbf p-\\mathbf a)\\times\\mathbf u|}{|\\mathbf u|}",
    "aliases": [
      "distance from a point to a line",
      "fp3 point line distance",
      "exam extras",
      "not in formula booklet",
      "Further Pure 3"
    ],
    "variables": [
      {
        "symbol": "p",
        "name": "point position vector"
      },
      {
        "symbol": "a",
        "name": "position vector of a point on the line"
      },
      {
        "symbol": "u",
        "name": "non-zero line direction vector"
      }
    ],
    "notes": "Area of a parallelogram divided by its base. Also gives separation of parallel lines by using any point on the other line.",
    "examKnowledge": {
      "section": "FP3 §5.1–5.2",
      "status": "derived-not-printed"
    }
  },
  {
    "id": "exam-fp3-plane-angle",
    "name": "Acute Angle Between Two Planes",
    "subject": "Further Mathematics",
    "topic": "Further Pure 3",
    "formula": "cos θ = |n₁·n₂|/(|n₁||n₂|)",
    "latex": "\\cos\\theta=\\frac{|\\mathbf n_1\\cdot\\mathbf n_2|}{|\\mathbf n_1|\\,|\\mathbf n_2|}",
    "aliases": [
      "acute angle between two planes",
      "fp3 plane angle",
      "exam extras",
      "not in formula booklet",
      "Further Pure 3"
    ],
    "variables": [
      {
        "symbol": "n₁, n₂",
        "name": "non-zero normal vectors of the planes"
      },
      {
        "symbol": "θ",
        "name": "acute/right dihedral angle"
      }
    ],
    "notes": "The absolute dot product selects the acute angle, independent of normal orientation. Without it the result may be the supplementary angle.",
    "examKnowledge": {
      "section": "FP3 §5.2–5.3",
      "status": "derived-not-printed"
    }
  },
  {
    "id": "exam-s3-estimator-bias",
    "name": "Bias of an Estimator",
    "subject": "Maths",
    "topic": "Statistics 3",
    "formula": "bias(T) = E(T) − θ",
    "latex": "\\operatorname{bias}(T)=E(T)-\\theta",
    "aliases": [
      "bias of an estimator",
      "s3 estimator bias",
      "exam extras",
      "not in formula booklet",
      "Statistics 3"
    ],
    "variables": [
      {
        "symbol": "T",
        "name": "statistic used to estimate θ"
      },
      {
        "symbol": "θ",
        "name": "true population parameter"
      }
    ],
    "notes": "An estimator is unbiased when E(T) = θ. Bias is a property over repeated samples, not the error of a single observed estimate. Pearson S3 sample chapter 3, pp. 21–22, gives this definition.",
    "examKnowledge": {
      "section": "S3 §3.1",
      "status": "derived-not-printed"
    }
  }
];

export const existingExamKnowledge: Record<string, NonNullable<Formula["examKnowledge"]>> = {
  "maths-m1-constant-speed-distance": {
    "section": "M1 §2.2–3.1",
    "status": "derived-not-printed"
  },
  "maths-m1-velocity-time-graph": {
    "section": "M1 §3.1",
    "status": "derived-not-printed"
  },
  "maths-m1-weight": {
    "section": "M1 §5.2",
    "status": "derived-not-printed"
  },
  "maths-m1-newtons-second-law": {
    "section": "M1 §4.1",
    "status": "derived-not-printed"
  },
  "maths-m1-force-component": {
    "section": "M1 §2.1; §5.1",
    "status": "derived-not-printed"
  },
  "maths-m1-equilibrium": {
    "section": "M1 §5.2",
    "status": "derived-not-printed"
  },
  "maths-m1-moment": {
    "section": "M1 §6.1",
    "status": "derived-not-printed"
  },
  "maths-m1-moments-equilibrium": {
    "section": "M1 §6.1",
    "status": "derived-not-printed"
  },
  "maths-m1-position-constant-velocity": {
    "section": "M1 §2.2",
    "status": "derived-not-printed"
  },
  "maths-m1-vector-magnitude": {
    "section": "M1 §2.1",
    "status": "derived-not-printed"
  },
  "maths-m1-impulse-force-time": {
    "section": "M1 §4.3",
    "status": "derived-not-printed"
  },
  "maths-m1-conservation-momentum": {
    "section": "M1 §4.3",
    "status": "derived-not-printed"
  },
  "maths-m1-incline-friction-angle": {
    "section": "M1 §4.2; §5.2",
    "status": "derived-not-printed"
  }
};

// Match the study guide order, rather than alphabetical subject labels.
export const EXAM_TOPIC_ORDER = ["Pure 1", "Pure 2", "Pure 3", "Pure 4", "Further Pure 1", "Further Pure 2", "Further Pure 3", "Mechanics 1", "Mechanics 2", "Mechanics 3", "Statistics 1", "Statistics 2", "Statistics 3"];
export function compareExamFormulae(a: Formula, b: Formula) {
  return EXAM_TOPIC_ORDER.indexOf(a.topic) - EXAM_TOPIC_ORDER.indexOf(b.topic) || a.name.localeCompare(b.name, "en");
}
