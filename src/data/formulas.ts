export type FormulaVariable = {
  symbol: string;
  name: string;
  unit?: string;
};

export type Formula = {
  id: string;
  name: string;
  subject: "Physics" | "Maths";
  topic: string;
  formula: string;
  latex: string;
  aliases: string[];
  variables: FormulaVariable[];
  notes?: string;
};

export const formulas: Formula[] = [

  // PHYSICS — GENERAL: common relationships beyond the formula sheet

  {
    "id": "physics-general-work-done",
    "name": "Work Done",
    "subject": "Physics",
    "topic": "General",
    "formula": "W = Fs cos(θ)",
    "latex": "W = Fs\\cos\\theta",
    "aliases": [
      "work done",
      "force times distance",
      "energy transferred",
      "W = Fd"
    ],
    "variables": [
      {
        "symbol": "W",
        "name": "work done",
        "unit": "J"
      },
      {
        "symbol": "F",
        "name": "constant force",
        "unit": "N"
      },
      {
        "symbol": "s",
        "name": "displacement",
        "unit": "m"
      },
      {
        "symbol": "θ",
        "name": "angle between force and displacement",
        "unit": "rad"
      }
    ],
    "notes": "For a constant force. When force and displacement are parallel, W = Fs; a perpendicular force does no work."
  },

  {
    "id": "physics-general-power",
    "name": "Average Power",
    "subject": "Physics",
    "topic": "General",
    "formula": "P = E / t = W / t",
    "latex": "P = \\frac{E}{t} = \\frac{W}{t}",
    "aliases": [
      "power",
      "work per second",
      "energy per second",
      "rate of energy transfer"
    ],
    "variables": [
      {
        "symbol": "P",
        "name": "average power",
        "unit": "W"
      },
      {
        "symbol": "E",
        "name": "energy transferred",
        "unit": "J"
      },
      {
        "symbol": "W",
        "name": "work done",
        "unit": "J"
      },
      {
        "symbol": "t",
        "name": "time interval",
        "unit": "s"
      }
    ],
    "notes": "Power is the rate of energy transfer. One watt is one joule per second."
  },

  {
    "id": "physics-general-mechanical-power",
    "name": "Mechanical Power",
    "subject": "Physics",
    "topic": "General",
    "formula": "P = Fv cos(θ)",
    "latex": "P = Fv\\cos\\theta",
    "aliases": [
      "power force velocity",
      "P = Fv",
      "engine power"
    ],
    "variables": [
      {
        "symbol": "P",
        "name": "instantaneous power",
        "unit": "W"
      },
      {
        "symbol": "F",
        "name": "force",
        "unit": "N"
      },
      {
        "symbol": "v",
        "name": "velocity magnitude",
        "unit": "m s⁻¹"
      },
      {
        "symbol": "θ",
        "name": "angle between force and velocity",
        "unit": "rad"
      }
    ],
    "notes": "For force parallel to velocity, P = Fv."
  },

  {
    "id": "physics-general-kinetic-energy",
    "name": "Kinetic Energy",
    "subject": "Physics",
    "topic": "General",
    "formula": "E_k = 1/2 mv²",
    "latex": "E_k = \\frac{1}{2}mv^2",
    "aliases": [
      "kinetic energy",
      "energy of motion",
      "KE"
    ],
    "variables": [
      {
        "symbol": "E_k",
        "name": "kinetic energy",
        "unit": "J"
      },
      {
        "symbol": "m",
        "name": "mass",
        "unit": "kg"
      },
      {
        "symbol": "v",
        "name": "speed",
        "unit": "m s⁻¹"
      }
    ],
    "notes": "For speeds much smaller than the speed of light."
  },

  {
    "id": "physics-general-potential-energy",
    "name": "Change in Gravitational Potential Energy",
    "subject": "Physics",
    "topic": "General",
    "formula": "ΔE_p = mgΔh",
    "latex": "\\Delta E_p = mg\\,\\Delta h",
    "aliases": [
      "gravitational potential energy",
      "GPE",
      "mgh",
      "energy gained lifting"
    ],
    "variables": [
      {
        "symbol": "ΔE_p",
        "name": "change in gravitational potential energy",
        "unit": "J"
      },
      {
        "symbol": "m",
        "name": "mass",
        "unit": "kg"
      },
      {
        "symbol": "g",
        "name": "gravitational field strength",
        "unit": "N kg⁻¹"
      },
      {
        "symbol": "Δh",
        "name": "change in height",
        "unit": "m"
      }
    ],
    "notes": "Assumes approximately uniform gravitational field strength. Raising an object increases its potential energy."
  },

  {
    "id": "physics-general-efficiency-energy",
    "name": "Energy Efficiency",
    "subject": "Physics",
    "topic": "General",
    "formula": "η = E_useful / E_input",
    "latex": "\\eta = \\frac{E_{\\text{useful}}}{E_{\\text{input}}}",
    "aliases": [
      "efficiency",
      "useful output total input",
      "percentage efficiency"
    ],
    "variables": [
      {
        "symbol": "η",
        "name": "efficiency",
        "unit": "dimensionless"
      },
      {
        "symbol": "E_useful",
        "name": "useful output energy",
        "unit": "J"
      },
      {
        "symbol": "E_input",
        "name": "total input energy",
        "unit": "J"
      }
    ],
    "notes": "Multiply the ratio by 100% to express efficiency as a percentage."
  },

  {
    "id": "physics-general-efficiency-power",
    "name": "Power Efficiency",
    "subject": "Physics",
    "topic": "General",
    "formula": "η = P_useful / P_input",
    "latex": "\\eta = \\frac{P_{\\text{useful}}}{P_{\\text{input}}}",
    "aliases": [
      "efficiency",
      "useful output power",
      "percentage efficiency"
    ],
    "variables": [
      {
        "symbol": "η",
        "name": "efficiency",
        "unit": "dimensionless"
      },
      {
        "symbol": "P_useful",
        "name": "useful output power",
        "unit": "W"
      },
      {
        "symbol": "P_input",
        "name": "total input power",
        "unit": "W"
      }
    ],
    "notes": "Compare input and output over the same time interval. Multiply by 100% for percentage efficiency."
  },

  {
    "id": "physics-general-speed",
    "name": "Average Speed",
    "subject": "Physics",
    "topic": "General",
    "formula": "speed = total distance / total time",
    "latex": "\\text{average speed} = \\frac{\\text{total distance}}{\\text{total time}}",
    "aliases": [
      "speed distance time",
      "distance over time"
    ],
    "variables": [
      {
        "symbol": "distance",
        "name": "total distance travelled",
        "unit": "m"
      },
      {
        "symbol": "time",
        "name": "total elapsed time",
        "unit": "s"
      },
      {
        "symbol": "speed",
        "name": "average speed",
        "unit": "m s⁻¹"
      }
    ],
    "notes": "Uses total distance travelled, including any changes in direction."
  },

  {
    "id": "physics-general-velocity",
    "name": "Average Velocity",
    "subject": "Physics",
    "topic": "General",
    "formula": "v_avg = Δs / Δt",
    "latex": "v_{\\text{avg}} = \\frac{\\Delta s}{\\Delta t}",
    "aliases": [
      "velocity displacement time",
      "displacement over time"
    ],
    "variables": [
      {
        "symbol": "v_avg",
        "name": "average velocity",
        "unit": "m s⁻¹"
      },
      {
        "symbol": "Δs",
        "name": "displacement",
        "unit": "m"
      },
      {
        "symbol": "Δt",
        "name": "time interval",
        "unit": "s"
      }
    ],
    "notes": "Uses displacement, so direction matters. A return to the starting point gives zero average velocity."
  },

  {
    "id": "physics-general-acceleration",
    "name": "Average Acceleration",
    "subject": "Physics",
    "topic": "General",
    "formula": "a = (v - u) / Δt",
    "latex": "a = \\frac{v-u}{\\Delta t}",
    "aliases": [
      "acceleration",
      "change in velocity over time",
      "deceleration"
    ],
    "variables": [
      {
        "symbol": "a",
        "name": "average acceleration",
        "unit": "m s⁻²"
      },
      {
        "symbol": "v",
        "name": "final velocity",
        "unit": "m s⁻¹"
      },
      {
        "symbol": "u",
        "name": "initial velocity",
        "unit": "m s⁻¹"
      },
      {
        "symbol": "Δt",
        "name": "time interval",
        "unit": "s"
      }
    ],
    "notes": "Use velocities with a consistent positive direction. Gives instantaneous acceleration if acceleration is constant."
  },

  {
    "id": "physics-general-pressure",
    "name": "Pressure",
    "subject": "Physics",
    "topic": "General",
    "formula": "p = F / A",
    "latex": "p = \\frac{F}{A}",
    "aliases": [
      "pressure",
      "force per unit area"
    ],
    "variables": [
      {
        "symbol": "p",
        "name": "pressure",
        "unit": "Pa"
      },
      {
        "symbol": "F",
        "name": "normal force",
        "unit": "N"
      },
      {
        "symbol": "A",
        "name": "area",
        "unit": "m²"
      }
    ],
    "notes": "Force acts perpendicular to the surface. Gives average pressure if the force is not distributed uniformly."
  },

  {
    "id": "physics-general-liquid-pressure",
    "name": "Pressure Difference in a Liquid",
    "subject": "Physics",
    "topic": "General",
    "formula": "Δp = ρgΔh",
    "latex": "\\Delta p = \\rho g\\,\\Delta h",
    "aliases": [
      "hydrostatic pressure",
      "liquid pressure",
      "pressure depth",
      "rho g h"
    ],
    "variables": [
      {
        "symbol": "Δp",
        "name": "pressure increase",
        "unit": "Pa"
      },
      {
        "symbol": "ρ",
        "name": "liquid density",
        "unit": "kg m⁻³"
      },
      {
        "symbol": "g",
        "name": "gravitational field strength",
        "unit": "N kg⁻¹"
      },
      {
        "symbol": "Δh",
        "name": "increase in depth",
        "unit": "m"
      }
    ],
    "notes": "For a stationary liquid of uniform density in a uniform gravitational field. Add surface pressure to obtain absolute pressure."
  },

  {
    "id": "physics-general-frequency",
    "name": "Frequency and Period",
    "subject": "Physics",
    "topic": "General",
    "formula": "f = 1 / T",
    "latex": "f = \\frac{1}{T}",
    "aliases": [
      "frequency",
      "period",
      "cycles per second"
    ],
    "variables": [
      {
        "symbol": "f",
        "name": "frequency",
        "unit": "Hz"
      },
      {
        "symbol": "T",
        "name": "period",
        "unit": "s"
      }
    ],
    "notes": "The period is the time for one complete cycle; this applies to any periodic motion or wave."
  },

  {
    "id": "physics-general-charge",
    "name": "Charge Flow",
    "subject": "Physics",
    "topic": "General",
    "formula": "Q = It",
    "latex": "Q = It",
    "aliases": [
      "charge",
      "current time",
      "charge flow"
    ],
    "variables": [
      {
        "symbol": "Q",
        "name": "charge transferred",
        "unit": "C"
      },
      {
        "symbol": "I",
        "name": "constant current",
        "unit": "A"
      },
      {
        "symbol": "t",
        "name": "time interval",
        "unit": "s"
      }
    ],
    "notes": "For constant current, or use the average current over the interval."
  },

  {
    "id": "physics-general-series-resistance",
    "name": "Resistance in Series",
    "subject": "Physics",
    "topic": "General",
    "formula": "R_total = R₁ + R₂ + …",
    "latex": "R_{\\text{total}} = R_1 + R_2 + \\cdots",
    "aliases": [
      "series resistors",
      "total resistance",
      "equivalent resistance series"
    ],
    "variables": [
      {
        "symbol": "R_total",
        "name": "total resistance",
        "unit": "Ω"
      },
      {
        "symbol": "R₁, R₂, …",
        "name": "individual resistances",
        "unit": "Ω"
      }
    ],
    "notes": "The same current flows through every resistor in series."
  },

  {
    "id": "physics-general-parallel-resistance",
    "name": "Resistance in Parallel",
    "subject": "Physics",
    "topic": "General",
    "formula": "1 / R_total = 1 / R₁ + 1 / R₂ + …",
    "latex": "\\frac{1}{R_{\\text{total}}} = \\frac{1}{R_1} + \\frac{1}{R_2} + \\cdots",
    "aliases": [
      "parallel resistors",
      "total resistance",
      "equivalent resistance parallel"
    ],
    "variables": [
      {
        "symbol": "R_total",
        "name": "total resistance",
        "unit": "Ω"
      },
      {
        "symbol": "R₁, R₂, …",
        "name": "individual resistances",
        "unit": "Ω"
      }
    ],
    "notes": "The same potential difference acts across every parallel branch."
  },

  {
    "id": "physics-general-emf-internal-resistance",
    "name": "EMF and Internal Resistance",
    "subject": "Physics",
    "topic": "General",
    "formula": "ε = V + Ir",
    "latex": "\\varepsilon = V + Ir",
    "aliases": [
      "emf",
      "internal resistance",
      "lost volts",
      "terminal potential difference"
    ],
    "variables": [
      {
        "symbol": "ε",
        "name": "electromotive force",
        "unit": "V"
      },
      {
        "symbol": "V",
        "name": "terminal potential difference",
        "unit": "V"
      },
      {
        "symbol": "I",
        "name": "current delivered by the source",
        "unit": "A"
      },
      {
        "symbol": "r",
        "name": "internal resistance",
        "unit": "Ω"
      }
    ],
    "notes": "For a source supplying current: terminal voltage V = ε − Ir. The sign changes when charging a cell."
  },

  {
    "id": "physics-general-transformer",
    "name": "Ideal Transformer Voltage Ratio",
    "subject": "Physics",
    "topic": "General",
    "formula": "V_s / V_p = N_s / N_p",
    "latex": "\\frac{V_s}{V_p} = \\frac{N_s}{N_p}",
    "aliases": [
      "transformer",
      "turns ratio",
      "step up",
      "step down"
    ],
    "variables": [
      {
        "symbol": "V_s",
        "name": "secondary voltage",
        "unit": "V"
      },
      {
        "symbol": "V_p",
        "name": "primary voltage",
        "unit": "V"
      },
      {
        "symbol": "N_s",
        "name": "secondary turns",
        "unit": "dimensionless"
      },
      {
        "symbol": "N_p",
        "name": "primary turns",
        "unit": "dimensionless"
      }
    ],
    "notes": "For an ideal transformer with alternating current; compare both RMS voltages or both peak voltages."
  },

  {
    "id": "physics-general-work-energy",
    "name": "Work–Energy Theorem",
    "subject": "Physics",
    "topic": "General",
    "formula": "W_net = ΔE_k",
    "latex": "W_{\\text{net}} = \\Delta E_k",
    "aliases": [
      "work energy theorem",
      "net work",
      "resultant work",
      "change in kinetic energy"
    ],
    "variables": [
      {
        "symbol": "W_net",
        "name": "net work done by all forces",
        "unit": "J"
      },
      {
        "symbol": "ΔE_k",
        "name": "change in kinetic energy",
        "unit": "J"
      }
    ],
    "notes": "Net work includes the work done by all forces, including resistive forces."
  },

  {
    "id": "physics-general-temperature",
    "name": "Kelvin and Celsius",
    "subject": "Physics",
    "topic": "General",
    "formula": "T = θ + 273.15",
    "latex": "T = \\theta + 273.15",
    "aliases": [
      "temperature conversion",
      "kelvin celsius",
      "absolute temperature"
    ],
    "variables": [
      {
        "symbol": "T",
        "name": "absolute temperature",
        "unit": "K"
      },
      {
        "symbol": "θ",
        "name": "Celsius temperature",
        "unit": "°C"
      }
    ],
    "notes": "Temperature differences have the same numerical value in kelvin and degrees Celsius; many school questions use 273 as an approximation."
  },

  // =========================================================
  // PHYSICS — UNIT 1: MECHANICS AND MATERIALS
  // =========================================================

  {
    id: "physics-u1-suvat-average-velocity",
    name: "SUVAT Average Velocity",
    subject: "Physics",
    topic: "Unit 1: Mechanics and Materials",
    formula: "s = ((u + v)t) / 2",
    latex: "s = \\frac{(u+v)t}{2}",
    aliases: [
      "suvat",
      "kinematic equations",
      "equations of motion",
      "average velocity",
      "displacement",
      "constant acceleration",
    ],
    variables: [
      { symbol: "s", name: "displacement", unit: "m" },
      { symbol: "u", name: "initial velocity", unit: "m s⁻¹" },
      { symbol: "v", name: "final velocity", unit: "m s⁻¹" },
      { symbol: "t", name: "time", unit: "s" },
    ],
    notes: "For motion with constant acceleration.",
  },

  {
    id: "physics-u1-suvat-final-velocity",
    name: "SUVAT Final Velocity",
    subject: "Physics",
    topic: "Unit 1: Mechanics and Materials",
    formula: "v = u + at",
    latex: "v = u + at",
    aliases: [
      "suvat",
      "kinematic equations",
      "equations of motion",
      "final velocity",
      "constant acceleration",
    ],
    variables: [
      { symbol: "v", name: "final velocity", unit: "m s⁻¹" },
      { symbol: "u", name: "initial velocity", unit: "m s⁻¹" },
      { symbol: "a", name: "acceleration", unit: "m s⁻²" },
      { symbol: "t", name: "time", unit: "s" },
    ],
    notes: "For motion with constant acceleration.",
  },

  {
    id: "physics-u1-suvat-displacement",
    name: "SUVAT Displacement",
    subject: "Physics",
    topic: "Unit 1: Mechanics and Materials",
    formula: "s = ut + 1/2 at²",
    latex: "s = ut + \\frac{1}{2}at^2",
    aliases: [
      "suvat",
      "kinematic equations",
      "equations of motion",
      "displacement",
      "constant acceleration",
    ],
    variables: [
      { symbol: "s", name: "displacement", unit: "m" },
      { symbol: "u", name: "initial velocity", unit: "m s⁻¹" },
      { symbol: "a", name: "acceleration", unit: "m s⁻²" },
      { symbol: "t", name: "time", unit: "s" },
    ],
    notes: "For motion with constant acceleration.",
  },

  {
    id: "physics-u1-suvat-without-time",
    name: "SUVAT Without Time",
    subject: "Physics",
    topic: "Unit 1: Mechanics and Materials",
    formula: "v² = u² + 2as",
    latex: "v^2 = u^2 + 2as",
    aliases: [
      "suvat",
      "kinematic equations",
      "equations of motion",
      "no time",
      "velocity squared",
      "constant acceleration",
    ],
    variables: [
      { symbol: "v", name: "final velocity", unit: "m s⁻¹" },
      { symbol: "u", name: "initial velocity", unit: "m s⁻¹" },
      { symbol: "a", name: "acceleration", unit: "m s⁻²" },
      { symbol: "s", name: "displacement", unit: "m" },
    ],
    notes: "For motion with constant acceleration.",
  },

  {
    id: "physics-u1-newtons-second-law",
    name: "Newton's Second Law",
    subject: "Physics",
    topic: "Unit 1: Mechanics and Materials",
    formula: "ΣF = ma",
    latex: "\\sum F = ma",
    aliases: [
      "force",
      "resultant force",
      "net force",
      "newton second law",
      "f ma",
    ],
    variables: [
      { symbol: "ΣF", name: "resultant force", unit: "N" },
      { symbol: "m", name: "mass", unit: "kg" },
      { symbol: "a", name: "acceleration", unit: "m s⁻²" },
    ],
  },

  {
    id: "physics-u1-gravitational-field-strength",
    name: "Gravitational Field Strength",
    subject: "Physics",
    topic: "Unit 1: Mechanics and Materials",
    formula: "g = F / m",
    latex: "g = \\frac{F}{m}",
    aliases: [
      "gravity",
      "gravitational field",
      "field strength",
      "force per unit mass",
    ],
    variables: [
      { symbol: "g", name: "gravitational field strength", unit: "N kg⁻¹" },
      { symbol: "F", name: "gravitational force", unit: "N" },
      { symbol: "m", name: "mass", unit: "kg" },
    ],
  },

  {
    id: "physics-u1-weight",
    name: "Weight",
    subject: "Physics",
    topic: "Unit 1: Mechanics and Materials",
    formula: "W = mg",
    latex: "W = mg",
    aliases: [
      "weight equation",
      "gravitational force",
      "mass gravity",
      "mg",
    ],
    variables: [
      { symbol: "W", name: "weight", unit: "N" },
      { symbol: "m", name: "mass", unit: "kg" },
      { symbol: "g", name: "gravitational field strength", unit: "N kg⁻¹" },
    ],
  },

  {
    id: "physics-u1-momentum",
    name: "Momentum",
    subject: "Physics",
    topic: "Unit 1: Mechanics and Materials",
    formula: "p = mv",
    latex: "p = mv",
    aliases: [
      "momentum",
      "linear momentum",
      "mass velocity",
      "p mv",
    ],
    variables: [
      { symbol: "p", name: "momentum", unit: "kg m s⁻¹" },
      { symbol: "m", name: "mass", unit: "kg" },
      { symbol: "v", name: "velocity", unit: "m s⁻¹" },
    ],
  },

  {
    id: "physics-u1-moment-of-force",
    name: "Moment of Force",
    subject: "Physics",
    topic: "Unit 1: Mechanics and Materials",
    formula: "moment = Fx",
    latex: "\\text{moment} = Fx",
    aliases: [
      "moment",
      "torque",
      "turning effect",
      "force distance",
      "perpendicular distance",
    ],
    variables: [
      { symbol: "F", name: "force", unit: "N" },
      { symbol: "x", name: "perpendicular distance from pivot", unit: "m" },
    ],
    notes:
      "x is the perpendicular distance from the pivot to the line of action of the force.",
  },

  {
    id: "physics-u1-density",
    name: "Density",
    subject: "Physics",
    topic: "Unit 1: Mechanics and Materials",
    formula: "ρ = m / V",
    latex: "\\rho = \\frac{m}{V}",
    aliases: [
      "density",
      "mass per volume",
      "mass volume",
      "rho",
    ],
    variables: [
      { symbol: "ρ", name: "density", unit: "kg m⁻³" },
      { symbol: "m", name: "mass", unit: "kg" },
      { symbol: "V", name: "volume", unit: "m³" },
    ],
  },

  {
    id: "physics-u1-stokes-law",
    name: "Stokes' Law",
    subject: "Physics",
    topic: "Unit 1: Mechanics and Materials",
    formula: "F = 6πηrv",
    latex: "F = 6\\pi\\eta rv",
    aliases: [
      "stokes law",
      "viscous drag",
      "drag force",
      "viscosity",
      "sphere drag",
    ],
    variables: [
      { symbol: "F", name: "viscous drag force", unit: "N" },
      { symbol: "η", name: "dynamic viscosity", unit: "Pa s" },
      { symbol: "r", name: "radius of sphere", unit: "m" },
      { symbol: "v", name: "speed", unit: "m s⁻¹" },
    ],
    notes:
      "Applies to a sphere moving through a viscous fluid under Stokes-flow conditions.",
  },

  {
    id: "physics-u1-hookes-law",
    name: "Hooke's Law",
    subject: "Physics",
    topic: "Unit 1: Mechanics and Materials",
    formula: "ΔF = kΔx",
    latex: "\\Delta F = k\\Delta x",
    aliases: [
      "hooke law",
      "spring",
      "spring constant",
      "extension",
      "force extension",
    ],
    variables: [
      { symbol: "ΔF", name: "change in force", unit: "N" },
      { symbol: "k", name: "spring constant", unit: "N m⁻¹" },
      { symbol: "Δx", name: "change in extension", unit: "m" },
    ],
    notes:
      "Valid within the region where force is proportional to extension.",
  },

  {
    id: "physics-u1-stress",
    name: "Stress",
    subject: "Physics",
    topic: "Unit 1: Mechanics and Materials",
    formula: "σ = F / A",
    latex: "\\sigma = \\frac{F}{A}",
    aliases: [
      "stress",
      "force per area",
      "young modulus",
      "young's modulus",
    ],
    variables: [
      { symbol: "σ", name: "stress", unit: "Pa" },
      { symbol: "F", name: "force", unit: "N" },
      { symbol: "A", name: "cross-sectional area", unit: "m²" },
    ],
  },

  {
    id: "physics-u1-strain",
    name: "Strain",
    subject: "Physics",
    topic: "Unit 1: Mechanics and Materials",
    formula: "ε = Δx / x",
    latex: "\\varepsilon = \\frac{\\Delta x}{x}",
    aliases: [
      "strain",
      "extension original length",
      "young modulus",
      "young's modulus",
    ],
    variables: [
      { symbol: "ε", name: "strain" },
      { symbol: "Δx", name: "extension", unit: "m" },
      { symbol: "x", name: "original length", unit: "m" },
    ],
    notes: "Strain is dimensionless.",
  },

  {
    id: "physics-u1-young-modulus",
    name: "Young Modulus",
    subject: "Physics",
    topic: "Unit 1: Mechanics and Materials",
    formula: "E = σ / ε",
    latex: "E = \\frac{\\sigma}{\\varepsilon}",
    aliases: [
      "young modulus",
      "young's modulus",
      "elastic modulus",
      "stress strain",
      "modulus of elasticity",
    ],
    variables: [
      { symbol: "E", name: "Young modulus", unit: "Pa" },
      { symbol: "σ", name: "stress", unit: "Pa" },
      { symbol: "ε", name: "strain" },
    ],
  },

  {
    id: "physics-u1-elastic-strain-energy",
    name: "Elastic Strain Energy",
    subject: "Physics",
    topic: "Unit 1: Mechanics and Materials",
    formula: "ΔE_el = 1/2 FΔx",
    latex: "\\Delta E_{el} = \\frac{1}{2}F\\Delta x",
    aliases: [
      "elastic energy",
      "strain energy",
      "spring energy",
      "elastic potential energy",
      "work done stretching",
    ],
    variables: [
      { symbol: "ΔE_el", name: "elastic strain energy", unit: "J" },
      { symbol: "F", name: "force", unit: "N" },
      { symbol: "Δx", name: "extension", unit: "m" },
    ],
    notes:
      "Applies where force increases linearly with extension.",
  },

  // =========================================================
  // PHYSICS — UNIT 2: WAVES AND ELECTRICITY
  // =========================================================

  {
    id: "physics-u2-wave-speed",
    name: "Wave Speed",
    subject: "Physics",
    topic: "Unit 2: Waves and Electricity",
    formula: "v = fλ",
    latex: "v = f\\lambda",
    aliases: [
      "wave equation",
      "wave speed",
      "frequency wavelength",
      "waves",
    ],
    variables: [
      { symbol: "v", name: "wave speed", unit: "m s⁻¹" },
      { symbol: "f", name: "frequency", unit: "Hz" },
      { symbol: "λ", name: "wavelength", unit: "m" },
    ],
  },

  {
    id: "physics-u2-wave-speed-string",
    name: "Wave Speed on a String",
    subject: "Physics",
    topic: "Unit 2: Waves and Electricity",
    formula: "v = √(T / μ)",
    latex: "v = \\sqrt{\\frac{T}{\\mu}}",
    aliases: [
      "string wave",
      "transverse wave",
      "wave on string",
      "tension",
      "linear density",
      "mass per unit length",
    ],
    variables: [
      { symbol: "v", name: "wave speed", unit: "m s⁻¹" },
      { symbol: "T", name: "tension", unit: "N" },
      { symbol: "μ", name: "mass per unit length", unit: "kg m⁻¹" },
    ],
  },

  {
    id: "physics-u2-radiation-intensity",
    name: "Intensity of Radiation",
    subject: "Physics",
    topic: "Unit 2: Waves and Electricity",
    formula: "I = P / A",
    latex: "I = \\frac{P}{A}",
    aliases: [
      "intensity",
      "radiation intensity",
      "power per area",
      "wave intensity",
    ],
    variables: [
      { symbol: "I", name: "intensity", unit: "W m⁻²" },
      { symbol: "P", name: "power", unit: "W" },
      { symbol: "A", name: "area", unit: "m²" },
    ],
  },

  {
    id: "physics-u2-snells-law",
    name: "Snell's Law",
    subject: "Physics",
    topic: "Unit 2: Waves and Electricity",
    formula: "n₁ sin θ₁ = n₂ sin θ₂",
    latex: "n_1\\sin\\theta_1 = n_2\\sin\\theta_2",
    aliases: [
      "snell law",
      "refraction",
      "refractive index",
      "angle of incidence",
      "angle of refraction",
    ],
    variables: [
      { symbol: "n₁", name: "refractive index of medium 1" },
      { symbol: "n₂", name: "refractive index of medium 2" },
      { symbol: "θ₁", name: "angle to normal in medium 1", unit: "rad" },
      { symbol: "θ₂", name: "angle to normal in medium 2", unit: "rad" },
    ],
    notes: "Angles are measured from the normal.",
  },

  {
    id: "physics-u2-refractive-index-speed",
    name: "Refractive Index from Wave Speed",
    subject: "Physics",
    topic: "Unit 2: Waves and Electricity",
    formula: "n = c / v",
    latex: "n = \\frac{c}{v}",
    aliases: [
      "refractive index",
      "speed of light",
      "refraction",
      "light speed medium",
    ],
    variables: [
      { symbol: "n", name: "refractive index" },
      { symbol: "c", name: "speed of light in vacuum", unit: "m s⁻¹" },
      { symbol: "v", name: "speed of light in medium", unit: "m s⁻¹" },
    ],
  },

  {
    id: "physics-u2-critical-angle",
    name: "Critical Angle",
    subject: "Physics",
    topic: "Unit 2: Waves and Electricity",
    formula: "sin C = 1 / n",
    latex: "\\sin C = \\frac{1}{n}",
    aliases: [
      "critical angle",
      "total internal reflection",
      "tir",
      "refractive index",
    ],
    variables: [
      { symbol: "C", name: "critical angle", unit: "rad" },
      { symbol: "n", name: "refractive index" },
    ],
    notes:
      "For a boundary from a material of refractive index n into air or vacuum.",
  },

  {
    id: "physics-u2-diffraction-grating",
    name: "Diffraction Grating",
    subject: "Physics",
    topic: "Unit 2: Waves and Electricity",
    formula: "nλ = d sin θ",
    latex: "n\\lambda = d\\sin\\theta",
    aliases: [
      "diffraction",
      "grating equation",
      "diffraction grating",
      "interference",
      "order wavelength",
    ],
    variables: [
      { symbol: "n", name: "order number" },
      { symbol: "λ", name: "wavelength", unit: "m" },
      { symbol: "d", name: "grating spacing", unit: "m" },
      { symbol: "θ", name: "diffraction angle", unit: "rad" },
    ],
  },

  {
    id: "physics-u2-de-broglie",
    name: "de Broglie Wavelength",
    subject: "Physics",
    topic: "Unit 2: Waves and Electricity",
    formula: "λ = h / p",
    latex: "\\lambda = \\frac{h}{p}",
    aliases: [
      "de broglie",
      "matter wave",
      "matter wavelength",
      "particle wavelength",
      "momentum wavelength",
    ],
    variables: [
      { symbol: "λ", name: "de Broglie wavelength", unit: "m" },
      { symbol: "h", name: "Planck constant", unit: "J s" },
      { symbol: "p", name: "momentum", unit: "kg m s⁻¹" },
    ],
  },

  {
    id: "physics-u2-photon-energy",
    name: "Photon Energy",
    subject: "Physics",
    topic: "Unit 2: Waves and Electricity",
    formula: "E = hf",
    latex: "E = hf",
    aliases: [
      "photon model",
      "planck equation",
      "photon energy",
      "frequency energy",
      "quantum energy",
    ],
    variables: [
      { symbol: "E", name: "photon energy", unit: "J" },
      { symbol: "h", name: "Planck constant", unit: "J s" },
      { symbol: "f", name: "frequency", unit: "Hz" },
    ],
  },

  {
    id: "physics-u2-photoelectric-equation",
    name: "Einstein's Photoelectric Equation",
    subject: "Physics",
    topic: "Unit 2: Waves and Electricity",
    formula: "hf = φ + 1/2 mv_max²",
    latex: "hf = \\phi + \\frac{1}{2}mv_{\\max}^2",
    aliases: [
      "photoelectric effect",
      "einstein photoelectric",
      "work function",
      "maximum kinetic energy",
      "photoelectron",
    ],
    variables: [
      { symbol: "h", name: "Planck constant", unit: "J s" },
      { symbol: "f", name: "frequency", unit: "Hz" },
      { symbol: "φ", name: "work function", unit: "J" },
      { symbol: "m", name: "electron mass", unit: "kg" },
      { symbol: "v_max", name: "maximum photoelectron speed", unit: "m s⁻¹" },
    ],
  },

  {
    id: "physics-u2-electric-current",
    name: "Electric Current",
    subject: "Physics",
    topic: "Unit 2: Waves and Electricity",
    formula: "I = ΔQ / Δt",
    latex: "I = \\frac{\\Delta Q}{\\Delta t}",
    aliases: [
      "current",
      "charge flow",
      "rate of flow of charge",
      "charge per time",
      "amps",
      "amperes",
    ],
    variables: [
      { symbol: "I", name: "electric current", unit: "A" },
      { symbol: "ΔQ", name: "charge transferred", unit: "C" },
      { symbol: "Δt", name: "time interval", unit: "s" },
    ],
  },

  {
    id: "physics-u2-potential-difference",
    name: "Potential Difference",
    subject: "Physics",
    topic: "Unit 2: Waves and Electricity",
    formula: "V = W / Q",
    latex: "V = \\frac{W}{Q}",
    aliases: [
      "voltage",
      "potential difference",
      "energy per charge",
      "work per charge",
      "volts",
    ],
    variables: [
      { symbol: "V", name: "potential difference", unit: "V" },
      { symbol: "W", name: "energy transferred", unit: "J" },
      { symbol: "Q", name: "charge", unit: "C" },
    ],
  },

  {
    id: "physics-u2-resistance",
    name: "Resistance",
    subject: "Physics",
    topic: "Unit 2: Waves and Electricity",
    formula: "R = V / I",
    latex: "R = \\frac{V}{I}",
    aliases: [
      "ohms law",
      "ohm's law",
      "resistance",
      "voltage current resistance",
      "vir",
      "ohms",
    ],
    variables: [
      { symbol: "R", name: "resistance", unit: "Ω" },
      { symbol: "V", name: "potential difference", unit: "V" },
      { symbol: "I", name: "current", unit: "A" },
    ],
  },

  {
    id: "physics-u2-electrical-power-vi",
    name: "Electrical Power",
    subject: "Physics",
    topic: "Unit 2: Waves and Electricity",
    formula: "P = VI",
    latex: "P = VI",
    aliases: [
      "electric power",
      "electrical power",
      "power equation",
      "voltage current",
      "watts",
    ],
    variables: [
      { symbol: "P", name: "power", unit: "W" },
      { symbol: "V", name: "potential difference", unit: "V" },
      { symbol: "I", name: "current", unit: "A" },
    ],
  },

  {
    id: "physics-u2-electrical-power-i2r",
    name: "Electrical Power from Current and Resistance",
    subject: "Physics",
    topic: "Unit 2: Waves and Electricity",
    formula: "P = I²R",
    latex: "P = I^2R",
    aliases: [
      "electric power",
      "i squared r",
      "current resistance",
      "joule heating",
      "power resistance",
    ],
    variables: [
      { symbol: "P", name: "power", unit: "W" },
      { symbol: "I", name: "current", unit: "A" },
      { symbol: "R", name: "resistance", unit: "Ω" },
    ],
  },

  {
    id: "physics-u2-electrical-power-v2r",
    name: "Electrical Power from Voltage and Resistance",
    subject: "Physics",
    topic: "Unit 2: Waves and Electricity",
    formula: "P = V² / R",
    latex: "P = \\frac{V^2}{R}",
    aliases: [
      "electric power",
      "v squared over r",
      "voltage resistance",
      "joule heating",
      "power resistance",
    ],
    variables: [
      { symbol: "P", name: "power", unit: "W" },
      { symbol: "V", name: "potential difference", unit: "V" },
      { symbol: "R", name: "resistance", unit: "Ω" },
    ],
  },

  {
    id: "physics-u2-electrical-energy",
    name: "Electrical Energy",
    subject: "Physics",
    topic: "Unit 2: Waves and Electricity",
    formula: "W = VIt",
    latex: "W = VIt",
    aliases: [
      "electrical energy",
      "electrical work",
      "energy transferred",
      "voltage current time",
    ],
    variables: [
      { symbol: "W", name: "electrical energy transferred", unit: "J" },
      { symbol: "V", name: "potential difference", unit: "V" },
      { symbol: "I", name: "current", unit: "A" },
      { symbol: "t", name: "time", unit: "s" },
    ],
  },

  {
    id: "physics-u2-resistivity",
    name: "Resistivity",
    subject: "Physics",
    topic: "Unit 2: Waves and Electricity",
    formula: "R = ρl / A",
    latex: "R = \\frac{\\rho l}{A}",
    aliases: [
      "resistivity",
      "resistance wire",
      "rho l over a",
      "conductor resistance",
    ],
    variables: [
      { symbol: "R", name: "resistance", unit: "Ω" },
      { symbol: "ρ", name: "resistivity", unit: "Ω m" },
      { symbol: "l", name: "length", unit: "m" },
      { symbol: "A", name: "cross-sectional area", unit: "m²" },
    ],
  },

  {
    id: "physics-u2-current-charge-carriers",
    name: "Current from Charge Carriers",
    subject: "Physics",
    topic: "Unit 2: Waves and Electricity",
    formula: "I = nqvA",
    latex: "I = nqvA",
    aliases: [
      "drift velocity",
      "charge carriers",
      "number density",
      "current microscopic",
      "current equation",
    ],
    variables: [
      { symbol: "I", name: "current", unit: "A" },
      { symbol: "n", name: "number density of charge carriers", unit: "m⁻³" },
      { symbol: "q", name: "charge per carrier", unit: "C" },
      { symbol: "v", name: "drift velocity", unit: "m s⁻¹" },
      { symbol: "A", name: "cross-sectional area", unit: "m²" },
    ],
  },

  // =========================================================
  // PHYSICS — UNIT 4
  // =========================================================

  {
    id: "physics-u4-impulse",
    name: "Impulse",
    subject: "Physics",
    topic: "Unit 4: Further Mechanics, Fields and Particles",
    formula: "FΔt = Δp",
    latex: "F\\Delta t = \\Delta p",
    aliases: [
      "impulse",
      "change in momentum",
      "force time",
      "momentum change",
    ],
    variables: [
      { symbol: "F", name: "force", unit: "N" },
      { symbol: "Δt", name: "time interval", unit: "s" },
      { symbol: "Δp", name: "change in momentum", unit: "kg m s⁻¹" },
    ],
  },

  {
    id: "physics-u4-kinetic-energy-momentum",
    name: "Kinetic Energy from Momentum",
    subject: "Physics",
    topic: "Unit 4: Further Mechanics, Fields and Particles",
    formula: "E_k = p² / 2m",
    latex: "E_k = \\frac{p^2}{2m}",
    aliases: [
      "kinetic energy",
      "momentum kinetic energy",
      "non relativistic particle",
      "particle energy",
    ],
    variables: [
      { symbol: "E_k", name: "kinetic energy", unit: "J" },
      { symbol: "p", name: "momentum", unit: "kg m s⁻¹" },
      { symbol: "m", name: "mass", unit: "kg" },
    ],
    notes: "For a non-relativistic particle.",
  },

  {
    id: "physics-u4-circular-linear-speed",
    name: "Circular Motion Linear Speed",
    subject: "Physics",
    topic: "Unit 4: Further Mechanics, Fields and Particles",
    formula: "v = ωr",
    latex: "v = \\omega r",
    aliases: [
      "circular motion",
      "angular speed",
      "linear speed",
      "tangential speed",
    ],
    variables: [
      { symbol: "v", name: "tangential speed", unit: "m s⁻¹" },
      { symbol: "ω", name: "angular velocity", unit: "rad s⁻¹" },
      { symbol: "r", name: "radius", unit: "m" },
    ],
  },

  {
    id: "physics-u4-circular-period",
    name: "Circular Motion Period",
    subject: "Physics",
    topic: "Unit 4: Further Mechanics, Fields and Particles",
    formula: "T = 2π / ω",
    latex: "T = \\frac{2\\pi}{\\omega}",
    aliases: [
      "circular motion",
      "period angular velocity",
      "angular speed",
      "rotation period",
    ],
    variables: [
      { symbol: "T", name: "period", unit: "s" },
      { symbol: "ω", name: "angular velocity", unit: "rad s⁻¹" },
    ],
  },

  {
    id: "physics-u4-centripetal-acceleration-speed",
    name: "Centripetal Acceleration",
    subject: "Physics",
    topic: "Unit 4: Further Mechanics, Fields and Particles",
    formula: "a = v² / r",
    latex: "a = \\frac{v^2}{r}",
    aliases: [
      "centripetal acceleration",
      "circular acceleration",
      "radial acceleration",
      "circular motion",
    ],
    variables: [
      { symbol: "a", name: "centripetal acceleration", unit: "m s⁻²" },
      { symbol: "v", name: "tangential speed", unit: "m s⁻¹" },
      { symbol: "r", name: "radius", unit: "m" },
    ],
  },

  {
    id: "physics-u4-centripetal-acceleration-angular",
    name: "Centripetal Acceleration from Angular Speed",
    subject: "Physics",
    topic: "Unit 4: Further Mechanics, Fields and Particles",
    formula: "a = rω²",
    latex: "a = r\\omega^2",
    aliases: [
      "centripetal acceleration",
      "angular speed",
      "radial acceleration",
      "circular motion",
    ],
    variables: [
      { symbol: "a", name: "centripetal acceleration", unit: "m s⁻²" },
      { symbol: "r", name: "radius", unit: "m" },
      { symbol: "ω", name: "angular velocity", unit: "rad s⁻¹" },
    ],
  },

  {
    id: "physics-u4-centripetal-force-speed",
    name: "Centripetal Force",
    subject: "Physics",
    topic: "Unit 4: Further Mechanics, Fields and Particles",
    formula: "F = ma = mv² / r",
    latex: "F = ma = \\frac{mv^2}{r}",
    aliases: [
      "centripetal force",
      "circular force",
      "radial force",
      "mv squared over r",
    ],
    variables: [
      { symbol: "F", name: "centripetal force", unit: "N" },
      { symbol: "m", name: "mass", unit: "kg" },
      { symbol: "a", name: "centripetal acceleration", unit: "m s⁻²" },
      { symbol: "v", name: "tangential speed", unit: "m s⁻¹" },
      { symbol: "r", name: "radius", unit: "m" },
    ],
  },

  {
    id: "physics-u4-centripetal-force-angular",
    name: "Centripetal Force from Angular Speed",
    subject: "Physics",
    topic: "Unit 4: Further Mechanics, Fields and Particles",
    formula: "F = mrω²",
    latex: "F = mr\\omega^2",
    aliases: [
      "centripetal force",
      "angular speed",
      "circular force",
      "radial force",
    ],
    variables: [
      { symbol: "F", name: "centripetal force", unit: "N" },
      { symbol: "m", name: "mass", unit: "kg" },
      { symbol: "r", name: "radius", unit: "m" },
      { symbol: "ω", name: "angular velocity", unit: "rad s⁻¹" },
    ],
  },

  {
    id: "physics-u4-electric-field-strength",
    name: "Electric Field Strength",
    subject: "Physics",
    topic: "Unit 4: Further Mechanics, Fields and Particles",
    formula: "E = F / Q",
    latex: "E = \\frac{F}{Q}",
    aliases: [
      "electric field",
      "electric field strength",
      "force per charge",
      "electrostatic field",
    ],
    variables: [
      { symbol: "E", name: "electric field strength", unit: "N C⁻¹" },
      { symbol: "F", name: "electric force", unit: "N" },
      { symbol: "Q", name: "charge", unit: "C" },
    ],
  },

  {
    id: "physics-u4-coulombs-law",
    name: "Coulomb's Law",
    subject: "Physics",
    topic: "Unit 4: Further Mechanics, Fields and Particles",
    formula: "F = Q₁Q₂ / (4πε₀r²)",
    latex: "F = \\frac{Q_1Q_2}{4\\pi\\varepsilon_0r^2}",
    aliases: [
      "coulomb law",
      "electrostatic force",
      "force between charges",
      "inverse square electric",
    ],
    variables: [
      { symbol: "F", name: "electrostatic force", unit: "N" },
      { symbol: "Q₁", name: "charge 1", unit: "C" },
      { symbol: "Q₂", name: "charge 2", unit: "C" },
      { symbol: "ε₀", name: "permittivity of free space", unit: "F m⁻¹" },
      { symbol: "r", name: "separation", unit: "m" },
    ],
  },

  {
    id: "physics-u4-point-charge-electric-field",
    name: "Electric Field of a Point Charge",
    subject: "Physics",
    topic: "Unit 4: Further Mechanics, Fields and Particles",
    formula: "E = Q / (4πε₀r²)",
    latex: "E = \\frac{Q}{4\\pi\\varepsilon_0r^2}",
    aliases: [
      "electric field point charge",
      "point charge",
      "inverse square electric field",
      "electrostatic field",
    ],
    variables: [
      { symbol: "E", name: "electric field strength", unit: "N C⁻¹" },
      { symbol: "Q", name: "source charge", unit: "C" },
      { symbol: "ε₀", name: "permittivity of free space", unit: "F m⁻¹" },
      { symbol: "r", name: "distance from charge", unit: "m" },
    ],
  },

  {
    id: "physics-u4-uniform-electric-field",
    name: "Uniform Electric Field",
    subject: "Physics",
    topic: "Unit 4: Further Mechanics, Fields and Particles",
    formula: "E = V / d",
    latex: "E = \\frac{V}{d}",
    aliases: [
      "uniform electric field",
      "parallel plates",
      "potential difference distance",
      "electric field plates",
    ],
    variables: [
      { symbol: "E", name: "electric field strength", unit: "V m⁻¹" },
      { symbol: "V", name: "potential difference", unit: "V" },
      { symbol: "d", name: "separation", unit: "m" },
    ],
  },

  {
    id: "physics-u4-electric-potential",
    name: "Electric Potential of a Point Charge",
    subject: "Physics",
    topic: "Unit 4: Further Mechanics, Fields and Particles",
    formula: "V = Q / (4πε₀r)",
    latex: "V = \\frac{Q}{4\\pi\\varepsilon_0r}",
    aliases: [
      "electric potential",
      "point charge potential",
      "electrostatic potential",
      "potential due to charge",
    ],
    variables: [
      { symbol: "V", name: "electric potential", unit: "V" },
      { symbol: "Q", name: "source charge", unit: "C" },
      { symbol: "ε₀", name: "permittivity of free space", unit: "F m⁻¹" },
      { symbol: "r", name: "distance from charge", unit: "m" },
    ],
  },

  {
    id: "physics-u4-capacitance",
    name: "Capacitance",
    subject: "Physics",
    topic: "Unit 4: Further Mechanics, Fields and Particles",
    formula: "C = Q / V",
    latex: "C = \\frac{Q}{V}",
    aliases: [
      "capacitance",
      "capacitor",
      "charge voltage",
      "farads",
    ],
    variables: [
      { symbol: "C", name: "capacitance", unit: "F" },
      { symbol: "Q", name: "charge", unit: "C" },
      { symbol: "V", name: "potential difference", unit: "V" },
    ],
  },

  {
    id: "physics-u4-capacitor-energy",
    name: "Energy Stored in a Capacitor",
    subject: "Physics",
    topic: "Unit 4: Further Mechanics, Fields and Particles",
    formula: "W = 1/2 QV = 1/2 CV² = Q² / 2C",
    latex: "W = \\frac{1}{2}QV = \\frac{1}{2}CV^2 = \\frac{Q^2}{2C}",
    aliases: [
      "capacitor energy",
      "energy stored capacitor",
      "capacitive energy",
      "electrical potential energy",
    ],
    variables: [
      { symbol: "W", name: "energy stored", unit: "J" },
      { symbol: "Q", name: "charge", unit: "C" },
      { symbol: "V", name: "potential difference", unit: "V" },
      { symbol: "C", name: "capacitance", unit: "F" },
    ],
  },

  {
    id: "physics-u4-capacitor-discharge-charge",
    name: "Capacitor Discharge — Charge",
    subject: "Physics",
    topic: "Unit 4: Further Mechanics, Fields and Particles",
    formula: "Q = Q₀e^(-t/RC)",
    latex: "Q = Q_0e^{-t/RC}",
    aliases: [
      "capacitor discharge",
      "charge decay",
      "rc circuit",
      "exponential decay capacitor",
      "time constant",
    ],
    variables: [
      { symbol: "Q", name: "charge at time t", unit: "C" },
      { symbol: "Q₀", name: "initial charge", unit: "C" },
      { symbol: "t", name: "time", unit: "s" },
      { symbol: "R", name: "resistance", unit: "Ω" },
      { symbol: "C", name: "capacitance", unit: "F" },
    ],
    notes: "RC is the time constant.",
  },

  {
    id: "physics-u4-capacitor-discharge-current",
    name: "Capacitor Discharge — Current",
    subject: "Physics",
    topic: "Unit 4: Further Mechanics, Fields and Particles",
    formula: "I = I₀e^(-t/RC)",
    latex: "I = I_0e^{-t/RC}",
    aliases: [
      "capacitor discharge",
      "current decay",
      "rc circuit",
      "exponential current",
      "time constant",
    ],
    variables: [
      { symbol: "I", name: "current at time t", unit: "A" },
      { symbol: "I₀", name: "initial current", unit: "A" },
      { symbol: "t", name: "time", unit: "s" },
      { symbol: "R", name: "resistance", unit: "Ω" },
      { symbol: "C", name: "capacitance", unit: "F" },
    ],
  },

  {
    id: "physics-u4-capacitor-discharge-voltage",
    name: "Capacitor Discharge — Voltage",
    subject: "Physics",
    topic: "Unit 4: Further Mechanics, Fields and Particles",
    formula: "V = V₀e^(-t/RC)",
    latex: "V = V_0e^{-t/RC}",
    aliases: [
      "capacitor discharge",
      "voltage decay",
      "potential difference decay",
      "rc circuit",
      "time constant",
    ],
    variables: [
      { symbol: "V", name: "potential difference at time t", unit: "V" },
      { symbol: "V₀", name: "initial potential difference", unit: "V" },
      { symbol: "t", name: "time", unit: "s" },
      { symbol: "R", name: "resistance", unit: "Ω" },
      { symbol: "C", name: "capacitance", unit: "F" },
    ],
  },

  {
    id: "physics-u4-capacitor-log-charge",
    name: "Capacitor Discharge — Log Charge",
    subject: "Physics",
    topic: "Unit 4: Further Mechanics, Fields and Particles",
    formula: "ln Q = ln Q₀ - t/RC",
    latex: "\\ln Q = \\ln Q_0 - \\frac{t}{RC}",
    aliases: [
      "capacitor log",
      "linearised capacitor discharge",
      "ln q",
      "rc graph",
    ],
    variables: [
      { symbol: "Q", name: "charge at time t", unit: "C" },
      { symbol: "Q₀", name: "initial charge", unit: "C" },
      { symbol: "t", name: "time", unit: "s" },
      { symbol: "R", name: "resistance", unit: "Ω" },
      { symbol: "C", name: "capacitance", unit: "F" },
    ],
    notes: "Gradient of ln Q against t is −1/RC.",
  },

  {
    id: "physics-u4-capacitor-log-current",
    name: "Capacitor Discharge — Log Current",
    subject: "Physics",
    topic: "Unit 4: Further Mechanics, Fields and Particles",
    formula: "ln I = ln I₀ - t/RC",
    latex: "\\ln I = \\ln I_0 - \\frac{t}{RC}",
    aliases: [
      "capacitor log",
      "linearised capacitor discharge",
      "ln i",
      "rc graph",
    ],
    variables: [
      { symbol: "I", name: "current at time t", unit: "A" },
      { symbol: "I₀", name: "initial current", unit: "A" },
      { symbol: "t", name: "time", unit: "s" },
      { symbol: "R", name: "resistance", unit: "Ω" },
      { symbol: "C", name: "capacitance", unit: "F" },
    ],
    notes: "Gradient of ln I against t is −1/RC.",
  },

  {
    id: "physics-u4-capacitor-log-voltage",
    name: "Capacitor Discharge — Log Voltage",
    subject: "Physics",
    topic: "Unit 4: Further Mechanics, Fields and Particles",
    formula: "ln V = ln V₀ - t/RC",
    latex: "\\ln V = \\ln V_0 - \\frac{t}{RC}",
    aliases: [
      "capacitor log",
      "linearised capacitor discharge",
      "ln v",
      "rc graph",
    ],
    variables: [
      { symbol: "V", name: "potential difference at time t", unit: "V" },
      { symbol: "V₀", name: "initial potential difference", unit: "V" },
      { symbol: "t", name: "time", unit: "s" },
      { symbol: "R", name: "resistance", unit: "Ω" },
      { symbol: "C", name: "capacitance", unit: "F" },
    ],
    notes: "Gradient of ln V against t is −1/RC.",
  },

  {
    id: "physics-u4-magnetic-force-charge",
    name: "Magnetic Force on a Moving Charge",
    subject: "Physics",
    topic: "Unit 4: Further Mechanics, Fields and Particles",
    formula: "F = Bqv sin θ",
    latex: "F = Bqv\\sin\\theta",
    aliases: [
      "magnetic force",
      "moving charge magnetic field",
      "lorentz force",
      "charged particle",
    ],
    variables: [
      { symbol: "F", name: "magnetic force", unit: "N" },
      { symbol: "B", name: "magnetic flux density", unit: "T" },
      { symbol: "q", name: "charge", unit: "C" },
      { symbol: "v", name: "particle speed", unit: "m s⁻¹" },
      { symbol: "θ", name: "angle between velocity and field", unit: "rad" },
    ],
  },

  {
    id: "physics-u4-magnetic-force-wire",
    name: "Magnetic Force on a Current-Carrying Wire",
    subject: "Physics",
    topic: "Unit 4: Further Mechanics, Fields and Particles",
    formula: "F = BIl sin θ",
    latex: "F = BIl\\sin\\theta",
    aliases: [
      "magnetic force wire",
      "motor effect",
      "current carrying conductor",
      "force on wire",
      "bil",
    ],
    variables: [
      { symbol: "F", name: "magnetic force", unit: "N" },
      { symbol: "B", name: "magnetic flux density", unit: "T" },
      { symbol: "I", name: "current", unit: "A" },
      { symbol: "l", name: "length in magnetic field", unit: "m" },
      { symbol: "θ", name: "angle between conductor and field", unit: "rad" },
    ],
  },

  {
    id: "physics-u4-faraday-lenz",
    name: "Faraday's and Lenz's Laws",
    subject: "Physics",
    topic: "Unit 4: Further Mechanics, Fields and Particles",
    formula: "ε = -d(NΦ)/dt",
    latex: "\\mathcal{E} = -\\frac{d(N\\Phi)}{dt}",
    aliases: [
      "faraday law",
      "lenz law",
      "electromagnetic induction",
      "induced emf",
      "flux linkage",
    ],
    variables: [
      { symbol: "ε", name: "induced electromotive force", unit: "V" },
      { symbol: "N", name: "number of turns" },
      { symbol: "Φ", name: "magnetic flux", unit: "Wb" },
      { symbol: "t", name: "time", unit: "s" },
    ],
  },

  {
    id: "physics-u4-charged-particle-radius",
    name: "Charged Particle Radius in a Magnetic Field",
    subject: "Physics",
    topic: "Unit 4: Further Mechanics, Fields and Particles",
    formula: "r = p / BQ",
    latex: "r = \\frac{p}{BQ}",
    aliases: [
      "particle magnetic field",
      "charged particle radius",
      "circular path magnetic field",
      "momentum magnetic field",
    ],
    variables: [
      { symbol: "r", name: "radius of circular path", unit: "m" },
      { symbol: "p", name: "particle momentum", unit: "kg m s⁻¹" },
      { symbol: "B", name: "magnetic flux density", unit: "T" },
      { symbol: "Q", name: "particle charge magnitude", unit: "C" },
    ],
    notes:
      "For motion perpendicular to a uniform magnetic field.",
  },

  {
    id: "physics-u4-mass-energy",
    name: "Mass-Energy Equivalence",
    subject: "Physics",
    topic: "Unit 4: Further Mechanics, Fields and Particles",
    formula: "ΔE = c²Δm",
    latex: "\\Delta E = c^2\\Delta m",
    aliases: [
      "mass energy",
      "mass energy equivalence",
      "e mc squared",
      "einstein",
      "mass defect",
    ],
    variables: [
      { symbol: "ΔE", name: "change in energy", unit: "J" },
      { symbol: "c", name: "speed of light in vacuum", unit: "m s⁻¹" },
      { symbol: "Δm", name: "change in mass", unit: "kg" },
    ],
  },

  // =========================================================
  // PHYSICS — UNIT 5
  // =========================================================

  {
    id: "physics-u5-specific-heat-capacity",
    name: "Heating — Specific Heat Capacity",
    subject: "Physics",
    topic: "Unit 5: Thermodynamics, Radiation, Oscillations and Cosmology",
    formula: "ΔE = mcΔθ",
    latex: "\\Delta E = mc\\Delta\\theta",
    aliases: [
      "specific heat capacity",
      "heating",
      "thermal energy",
      "temperature change",
    ],
    variables: [
      { symbol: "ΔE", name: "thermal energy transferred", unit: "J" },
      { symbol: "m", name: "mass", unit: "kg" },
      { symbol: "c", name: "specific heat capacity", unit: "J kg⁻¹ K⁻¹" },
      { symbol: "Δθ", name: "temperature change", unit: "K" },
    ],
  },

  {
    id: "physics-u5-latent-heat",
    name: "Heating — Specific Latent Heat",
    subject: "Physics",
    topic: "Unit 5: Thermodynamics, Radiation, Oscillations and Cosmology",
    formula: "ΔE = LΔm",
    latex: "\\Delta E = L\\Delta m",
    aliases: [
      "latent heat",
      "specific latent heat",
      "phase change",
      "melting",
      "boiling",
    ],
    variables: [
      { symbol: "ΔE", name: "energy transferred", unit: "J" },
      { symbol: "L", name: "specific latent heat", unit: "J kg⁻¹" },
      { symbol: "Δm", name: "mass undergoing phase change", unit: "kg" },
    ],
  },

  {
    id: "physics-u5-ideal-gas",
    name: "Ideal Gas Equation",
    subject: "Physics",
    topic: "Unit 5: Thermodynamics, Radiation, Oscillations and Cosmology",
    formula: "pV = NkT",
    latex: "pV = NkT",
    aliases: [
      "ideal gas",
      "gas equation",
      "kinetic theory",
      "pv nkt",
      "boltzmann constant",
    ],
    variables: [
      { symbol: "p", name: "pressure", unit: "Pa" },
      { symbol: "V", name: "volume", unit: "m³" },
      { symbol: "N", name: "number of molecules" },
      { symbol: "k", name: "Boltzmann constant", unit: "J K⁻¹" },
      { symbol: "T", name: "absolute temperature", unit: "K" },
    ],
    notes: "Temperature must be in kelvin.",
  },

  {
    id: "physics-u5-molecular-kinetic-energy",
    name: "Mean Molecular Kinetic Energy",
    subject: "Physics",
    topic: "Unit 5: Thermodynamics, Radiation, Oscillations and Cosmology",
    formula: "1/2 m<c²> = 3/2 kT",
    latex: "\\frac{1}{2}m\\langle c^2\\rangle = \\frac{3}{2}kT",
    aliases: [
      "molecular kinetic theory",
      "mean kinetic energy",
      "gas molecules",
      "rms speed",
      "kinetic theory",
    ],
    variables: [
      { symbol: "m", name: "mass of one molecule", unit: "kg" },
      { symbol: "<c²>", name: "mean square molecular speed", unit: "m² s⁻²" },
      { symbol: "k", name: "Boltzmann constant", unit: "J K⁻¹" },
      { symbol: "T", name: "absolute temperature", unit: "K" },
    ],
  },

  {
    id: "physics-u5-mass-energy",
    name: "Nuclear Mass-Energy Equivalence",
    subject: "Physics",
    topic: "Unit 5: Thermodynamics, Radiation, Oscillations and Cosmology",
    formula: "ΔE = c²Δm",
    latex: "\\Delta E = c^2\\Delta m",
    aliases: [
      "nuclear mass energy",
      "mass defect",
      "binding energy",
      "e mc squared",
    ],
    variables: [
      { symbol: "ΔE", name: "change in energy", unit: "J" },
      { symbol: "c", name: "speed of light in vacuum", unit: "m s⁻¹" },
      { symbol: "Δm", name: "change in mass", unit: "kg" },
    ],
  },

  {
    id: "physics-u5-radioactive-activity",
    name: "Radioactive Activity",
    subject: "Physics",
    topic: "Unit 5: Thermodynamics, Radiation, Oscillations and Cosmology",
    formula: "A = λN",
    latex: "A = \\lambda N",
    aliases: [
      "radioactive decay",
      "activity",
      "decay constant",
      "nuclear decay",
      "becquerel",
    ],
    variables: [
      { symbol: "A", name: "activity", unit: "Bq" },
      { symbol: "λ", name: "decay constant", unit: "s⁻¹" },
      { symbol: "N", name: "number of undecayed nuclei" },
    ],
  },

  {
    id: "physics-u5-radioactive-decay-rate",
    name: "Radioactive Decay Rate",
    subject: "Physics",
    topic: "Unit 5: Thermodynamics, Radiation, Oscillations and Cosmology",
    formula: "dN/dt = -λN",
    latex: "\\frac{dN}{dt} = -\\lambda N",
    aliases: [
      "radioactive decay",
      "decay differential equation",
      "rate of decay",
      "nuclear decay",
    ],
    variables: [
      { symbol: "N", name: "number of undecayed nuclei" },
      { symbol: "t", name: "time", unit: "s" },
      { symbol: "λ", name: "decay constant", unit: "s⁻¹" },
    ],
  },

  {
    id: "physics-u5-half-life",
    name: "Decay Constant and Half-Life",
    subject: "Physics",
    topic: "Unit 5: Thermodynamics, Radiation, Oscillations and Cosmology",
    formula: "λ = ln 2 / t₁/₂",
    latex: "\\lambda = \\frac{\\ln 2}{t_{1/2}}",
    aliases: [
      "half life",
      "half-life",
      "decay constant",
      "radioactive decay",
      "ln 2",
    ],
    variables: [
      { symbol: "λ", name: "decay constant", unit: "s⁻¹" },
      { symbol: "t₁/₂", name: "half-life", unit: "s" },
    ],
  },

  {
    id: "physics-u5-radioactive-number-decay",
    name: "Radioactive Number Decay",
    subject: "Physics",
    topic: "Unit 5: Thermodynamics, Radiation, Oscillations and Cosmology",
    formula: "N = N₀e^(-λt)",
    latex: "N = N_0e^{-\\lambda t}",
    aliases: [
      "radioactive decay",
      "exponential decay",
      "number of nuclei",
      "undecayed nuclei",
    ],
    variables: [
      { symbol: "N", name: "number of undecayed nuclei at time t" },
      { symbol: "N₀", name: "initial number of undecayed nuclei" },
      { symbol: "λ", name: "decay constant", unit: "s⁻¹" },
      { symbol: "t", name: "time", unit: "s" },
    ],
  },

  {
    id: "physics-u5-radioactive-activity-decay",
    name: "Radioactive Activity Decay",
    subject: "Physics",
    topic: "Unit 5: Thermodynamics, Radiation, Oscillations and Cosmology",
    formula: "A = A₀e^(-λt)",
    latex: "A = A_0e^{-\\lambda t}",
    aliases: [
      "activity decay",
      "radioactive activity",
      "exponential decay",
      "nuclear decay",
    ],
    variables: [
      { symbol: "A", name: "activity at time t", unit: "Bq" },
      { symbol: "A₀", name: "initial activity", unit: "Bq" },
      { symbol: "λ", name: "decay constant", unit: "s⁻¹" },
      { symbol: "t", name: "time", unit: "s" },
    ],
  },

  {
    id: "physics-u5-shm-force",
    name: "Simple Harmonic Motion — Force",
    subject: "Physics",
    topic: "Unit 5: Thermodynamics, Radiation, Oscillations and Cosmology",
    formula: "F = -kx",
    latex: "F = -kx",
    aliases: [
      "shm",
      "simple harmonic motion",
      "restoring force",
      "oscillation",
      "spring",
    ],
    variables: [
      { symbol: "F", name: "restoring force", unit: "N" },
      { symbol: "k", name: "force constant", unit: "N m⁻¹" },
      { symbol: "x", name: "displacement from equilibrium", unit: "m" },
    ],
  },

  {
    id: "physics-u5-shm-acceleration",
    name: "Simple Harmonic Motion — Acceleration",
    subject: "Physics",
    topic: "Unit 5: Thermodynamics, Radiation, Oscillations and Cosmology",
    formula: "a = -ω²x",
    latex: "a = -\\omega^2x",
    aliases: [
      "shm",
      "simple harmonic motion",
      "acceleration displacement",
      "angular frequency",
    ],
    variables: [
      { symbol: "a", name: "acceleration", unit: "m s⁻²" },
      { symbol: "ω", name: "angular frequency", unit: "rad s⁻¹" },
      { symbol: "x", name: "displacement from equilibrium", unit: "m" },
    ],
  },

  {
    id: "physics-u5-shm-displacement",
    name: "Simple Harmonic Motion — Displacement",
    subject: "Physics",
    topic: "Unit 5: Thermodynamics, Radiation, Oscillations and Cosmology",
    formula: "x = A cos(ωt)",
    latex: "x = A\\cos\\omega t",
    aliases: [
      "shm",
      "simple harmonic motion",
      "displacement time",
      "amplitude",
      "cosine oscillation",
    ],
    variables: [
      { symbol: "x", name: "displacement", unit: "m" },
      { symbol: "A", name: "amplitude", unit: "m" },
      { symbol: "ω", name: "angular frequency", unit: "rad s⁻¹" },
      { symbol: "t", name: "time", unit: "s" },
    ],
  },

  {
    id: "physics-u5-shm-velocity",
    name: "Simple Harmonic Motion — Velocity",
    subject: "Physics",
    topic: "Unit 5: Thermodynamics, Radiation, Oscillations and Cosmology",
    formula: "v = -Aω sin(ωt)",
    latex: "v = -A\\omega\\sin\\omega t",
    aliases: [
      "shm",
      "simple harmonic motion",
      "velocity time",
      "oscillation velocity",
    ],
    variables: [
      { symbol: "v", name: "velocity", unit: "m s⁻¹" },
      { symbol: "A", name: "amplitude", unit: "m" },
      { symbol: "ω", name: "angular frequency", unit: "rad s⁻¹" },
      { symbol: "t", name: "time", unit: "s" },
    ],
  },

  {
    id: "physics-u5-shm-acceleration-time",
    name: "Simple Harmonic Motion — Acceleration with Time",
    subject: "Physics",
    topic: "Unit 5: Thermodynamics, Radiation, Oscillations and Cosmology",
    formula: "a = -Aω² cos(ωt)",
    latex: "a = -A\\omega^2\\cos\\omega t",
    aliases: [
      "shm",
      "simple harmonic motion",
      "acceleration time",
      "oscillation acceleration",
    ],
    variables: [
      { symbol: "a", name: "acceleration", unit: "m s⁻²" },
      { symbol: "A", name: "amplitude", unit: "m" },
      { symbol: "ω", name: "angular frequency", unit: "rad s⁻¹" },
      { symbol: "t", name: "time", unit: "s" },
    ],
  },

  {
    id: "physics-u5-shm-period",
    name: "SHM Period and Frequency",
    subject: "Physics",
    topic: "Unit 5: Thermodynamics, Radiation, Oscillations and Cosmology",
    formula: "T = 1/f = 2π/ω",
    latex: "T = \\frac{1}{f} = \\frac{2\\pi}{\\omega}",
    aliases: [
      "shm period",
      "frequency",
      "angular frequency",
      "oscillation period",
    ],
    variables: [
      { symbol: "T", name: "period", unit: "s" },
      { symbol: "f", name: "frequency", unit: "Hz" },
      { symbol: "ω", name: "angular frequency", unit: "rad s⁻¹" },
    ],
  },

  {
    id: "physics-u5-angular-frequency",
    name: "Angular Frequency",
    subject: "Physics",
    topic: "Unit 5: Thermodynamics, Radiation, Oscillations and Cosmology",
    formula: "ω = 2πf",
    latex: "\\omega = 2\\pi f",
    aliases: [
      "angular frequency",
      "frequency",
      "omega",
      "shm",
      "oscillations",
    ],
    variables: [
      { symbol: "ω", name: "angular frequency", unit: "rad s⁻¹" },
      { symbol: "f", name: "frequency", unit: "Hz" },
    ],
  },

  {
    id: "physics-u5-mass-spring-period",
    name: "Mass-Spring Oscillator Period",
    subject: "Physics",
    topic: "Unit 5: Thermodynamics, Radiation, Oscillations and Cosmology",
    formula: "T = 2π√(m/k)",
    latex: "T = 2\\pi\\sqrt{\\frac{m}{k}}",
    aliases: [
      "spring oscillator",
      "mass spring",
      "shm spring",
      "spring period",
    ],
    variables: [
      { symbol: "T", name: "period", unit: "s" },
      { symbol: "m", name: "mass", unit: "kg" },
      { symbol: "k", name: "spring constant", unit: "N m⁻¹" },
    ],
  },

  {
    id: "physics-u5-pendulum-period",
    name: "Simple Pendulum Period",
    subject: "Physics",
    topic: "Unit 5: Thermodynamics, Radiation, Oscillations and Cosmology",
    formula: "T = 2π√(l/g)",
    latex: "T = 2\\pi\\sqrt{\\frac{l}{g}}",
    aliases: [
      "pendulum",
      "simple pendulum",
      "pendulum period",
      "shm pendulum",
    ],
    variables: [
      { symbol: "T", name: "period", unit: "s" },
      { symbol: "l", name: "pendulum length", unit: "m" },
      { symbol: "g", name: "gravitational field strength", unit: "m s⁻²" },
    ],
    notes: "Valid for small-angle oscillations.",
  },

  {
    id: "physics-u5-gravitational-field-definition",
    name: "Gravitational Field Strength Definition",
    subject: "Physics",
    topic: "Unit 5: Thermodynamics, Radiation, Oscillations and Cosmology",
    formula: "g = F / m",
    latex: "g = \\frac{F}{m}",
    aliases: [
      "gravitational field strength",
      "gravity",
      "force per unit mass",
      "gravitational field",
    ],
    variables: [
      { symbol: "g", name: "gravitational field strength", unit: "N kg⁻¹" },
      { symbol: "F", name: "gravitational force", unit: "N" },
      { symbol: "m", name: "test mass", unit: "kg" },
    ],
  },

  {
    id: "physics-u5-newtons-gravitation",
    name: "Newton's Law of Gravitation",
    subject: "Physics",
    topic: "Unit 5: Thermodynamics, Radiation, Oscillations and Cosmology",
    formula: "F = Gm₁m₂ / r²",
    latex: "F = \\frac{Gm_1m_2}{r^2}",
    aliases: [
      "universal gravitation",
      "newton gravitation",
      "gravitational force",
      "inverse square gravity",
    ],
    variables: [
      { symbol: "F", name: "gravitational force", unit: "N" },
      { symbol: "G", name: "gravitational constant", unit: "N m² kg⁻²" },
      { symbol: "m₁", name: "mass 1", unit: "kg" },
      { symbol: "m₂", name: "mass 2", unit: "kg" },
      { symbol: "r", name: "distance between centres", unit: "m" },
    ],
  },

  {
    id: "physics-u5-gravitational-field-point-mass",
    name: "Gravitational Field of a Point Mass",
    subject: "Physics",
    topic: "Unit 5: Thermodynamics, Radiation, Oscillations and Cosmology",
    formula: "g = Gm / r²",
    latex: "g = \\frac{Gm}{r^2}",
    aliases: [
      "gravitational field",
      "field strength point mass",
      "gravity inverse square",
      "gravitational acceleration",
    ],
    variables: [
      { symbol: "g", name: "gravitational field strength", unit: "N kg⁻¹" },
      { symbol: "G", name: "gravitational constant", unit: "N m² kg⁻²" },
      { symbol: "m", name: "source mass", unit: "kg" },
      { symbol: "r", name: "distance from centre of mass", unit: "m" },
    ],
  },

  {
    id: "physics-u5-gravitational-potential",
    name: "Gravitational Potential",
    subject: "Physics",
    topic: "Unit 5: Thermodynamics, Radiation, Oscillations and Cosmology",
    formula: "V_grav = -Gm / r",
    latex: "V_{grav} = -\\frac{Gm}{r}",
    aliases: [
      "gravitational potential",
      "gravity potential",
      "potential per unit mass",
      "point mass potential",
    ],
    variables: [
      { symbol: "V_grav", name: "gravitational potential", unit: "J kg⁻¹" },
      { symbol: "G", name: "gravitational constant", unit: "N m² kg⁻²" },
      { symbol: "m", name: "source mass", unit: "kg" },
      { symbol: "r", name: "distance from centre of mass", unit: "m" },
    ],
  },

  {
    id: "physics-u5-stefan-boltzmann",
    name: "Stefan-Boltzmann Law",
    subject: "Physics",
    topic: "Unit 5: Thermodynamics, Radiation, Oscillations and Cosmology",
    formula: "L = σT⁴A",
    latex: "L = \\sigma T^4A",
    aliases: [
      "stefan boltzmann",
      "black body radiation",
      "blackbody",
      "luminosity",
      "thermal radiation",
    ],
    variables: [
      { symbol: "L", name: "luminosity", unit: "W" },
      { symbol: "σ", name: "Stefan-Boltzmann constant", unit: "W m⁻² K⁻⁴" },
      { symbol: "T", name: "absolute temperature", unit: "K" },
      { symbol: "A", name: "surface area", unit: "m²" },
    ],
  },

  {
    id: "physics-u5-wiens-law",
    name: "Wien's Law",
    subject: "Physics",
    topic: "Unit 5: Thermodynamics, Radiation, Oscillations and Cosmology",
    formula: "λ_max T = 2.898 × 10^-3 m K",
    latex: "\\lambda_{\\max}T = 2.898\\times10^{-3}\\ \\mathrm{m\\,K}",
    aliases: [
      "wien law",
      "wiens law",
      "peak wavelength",
      "black body",
      "temperature wavelength",
    ],
    variables: [
      { symbol: "λ_max", name: "peak wavelength", unit: "m" },
      { symbol: "T", name: "absolute temperature", unit: "K" },
    ],
  },

  {
    id: "physics-u5-radiation-intensity",
    name: "Radiation Intensity from Luminosity",
    subject: "Physics",
    topic: "Unit 5: Thermodynamics, Radiation, Oscillations and Cosmology",
    formula: "I = L / (4πd²)",
    latex: "I = \\frac{L}{4\\pi d^2}",
    aliases: [
      "radiation intensity",
      "inverse square law",
      "luminosity intensity",
      "star brightness",
      "flux",
    ],
    variables: [
      { symbol: "I", name: "radiation intensity", unit: "W m⁻²" },
      { symbol: "L", name: "luminosity", unit: "W" },
      { symbol: "d", name: "distance from source", unit: "m" },
    ],
  },

  {
    id: "physics-u5-redshift",
    name: "Cosmological Redshift",
    subject: "Physics",
    topic: "Unit 5: Thermodynamics, Radiation, Oscillations and Cosmology",
    formula: "z = Δλ/λ ≈ Δf/f ≈ v/c",
    latex:
      "z = \\frac{\\Delta\\lambda}{\\lambda} \\approx \\frac{\\Delta f}{f} \\approx \\frac{v}{c}",
    aliases: [
      "redshift",
      "cosmological redshift",
      "wavelength shift",
      "frequency shift",
      "recession velocity",
    ],
    variables: [
      { symbol: "z", name: "redshift" },
      { symbol: "Δλ", name: "change in wavelength", unit: "m" },
      { symbol: "λ", name: "reference wavelength", unit: "m" },
      { symbol: "Δf", name: "change in frequency", unit: "Hz" },
      { symbol: "f", name: "reference frequency", unit: "Hz" },
      { symbol: "v", name: "recession speed", unit: "m s⁻¹" },
      { symbol: "c", name: "speed of light", unit: "m s⁻¹" },
    ],
  },

  {
    id: "physics-u5-hubbles-law",
    name: "Hubble's Law",
    subject: "Physics",
    topic: "Unit 5: Thermodynamics, Radiation, Oscillations and Cosmology",
    formula: "v = H₀d",
    latex: "v = H_0d",
    aliases: [
      "hubble law",
      "hubbles law",
      "cosmological expansion",
      "expansion universe",
      "recession velocity",
      "hubble constant",
    ],
    variables: [
      { symbol: "v", name: "recession velocity", unit: "m s⁻¹" },
      { symbol: "H₀", name: "Hubble constant", unit: "s⁻¹" },
      { symbol: "d", name: "distance", unit: "m" },
    ],
  },

  // =========================================================
  // MATHS — PURE 1
  // =========================================================

  {
    id: "maths-p1-quadratic-formula",
    name: "Quadratic Formula",
    subject: "Maths",
    topic: "Pure 1",
    formula: "x = (-b ± √(b² - 4ac)) / 2a",
    latex: "x = \\frac{-b \\pm \\sqrt{b^2 - 4ac}}{2a}",
    aliases: [
      "quadratic equation",
      "quadratic roots",
      "roots of quadratic",
      "solve quadratic",
      "discriminant",
      "ax2 bx c",
    ],
    variables: [
      { symbol: "x", name: "root" },
      { symbol: "a", name: "coefficient of x squared" },
      { symbol: "b", name: "coefficient of x" },
      { symbol: "c", name: "constant term" },
    ],
    notes: "For a quadratic equation ax² + bx + c = 0.",
  },

  {
    id: "maths-p1-sine-rule",
    name: "Sine Rule",
    subject: "Maths",
    topic: "Pure 1",
    formula: "a/sin(A) = b/sin(B) = c/sin(C)",
    latex:
      "\\frac{a}{\\sin A} = \\frac{b}{\\sin B} = \\frac{c}{\\sin C}",
    aliases: [
      "sine law",
      "law of sines",
      "triangle sine rule",
      "non right triangle",
      "find side triangle",
      "find angle triangle",
    ],
    variables: [
      { symbol: "a", name: "side opposite angle A" },
      { symbol: "b", name: "side opposite angle B" },
      { symbol: "c", name: "side opposite angle C" },
      { symbol: "A", name: "angle opposite side a" },
      { symbol: "B", name: "angle opposite side b" },
      { symbol: "C", name: "angle opposite side c" },
    ],
  },

  {
    id: "maths-p1-triangle-area-sine",
    name: "Area of a Triangle Using Sine",
    subject: "Maths",
    topic: "Pure 1",
    formula: "Area = 1/2 ab sin(C)",
    latex: "\\text{Area} = \\frac{1}{2}ab\\sin C",
    aliases: [
      "triangle area",
      "area using sine",
      "half ab sin c",
      "area of non right triangle",
    ],
    variables: [
      { symbol: "a", name: "side length" },
      { symbol: "b", name: "side length" },
      { symbol: "C", name: "included angle between sides a and b" },
    ],
  },

  {
    id: "maths-p1-arc-length",
    name: "Arc Length",
    subject: "Maths",
    topic: "Pure 1",
    formula: "s = rθ",
    latex: "s = r\\theta",
    aliases: [
      "arc length",
      "circle arc",
      "r theta",
      "radians arc length",
      "sector arc",
    ],
    variables: [
      { symbol: "s", name: "arc length" },
      { symbol: "r", name: "radius" },
      { symbol: "θ", name: "angle in radians", unit: "rad" },
    ],
    notes: "θ must be measured in radians.",
  },

  {
    id: "maths-p1-sector-area",
    name: "Area of a Sector",
    subject: "Maths",
    topic: "Pure 1",
    formula: "Area = 1/2 r²θ",
    latex: "\\text{Area} = \\frac{1}{2}r^2\\theta",
    aliases: [
      "sector area",
      "area sector",
      "half r squared theta",
      "circle sector",
      "radians sector area",
    ],
    variables: [
      { symbol: "r", name: "radius" },
      { symbol: "θ", name: "angle in radians", unit: "rad" },
    ],
    notes: "θ must be measured in radians.",
  },

  {
    id: "maths-p1-differentiation-power-rule",
    name: "Power Rule for Differentiation",
    subject: "Maths",
    topic: "Pure 1",
    formula: "d/dx(x^n) = nx^(n-1)",
    latex: "\\frac{d}{dx}\\left(x^n\\right) = nx^{n-1}",
    aliases: [
      "differentiate x n",
      "differentiation",
      "derivative",
      "power rule",
      "derivative of x n",
    ],
    variables: [
      { symbol: "x", name: "variable" },
      { symbol: "n", name: "power or exponent" },
    ],
  },

  {
    id: "maths-p1-integration-power-rule",
    name: "Power Rule for Integration",
    subject: "Maths",
    topic: "Pure 1",
    formula: "∫x^n dx = x^(n+1)/(n+1) + C",
    latex: "\\int x^n\\,dx = \\frac{x^{n+1}}{n+1} + C",
    aliases: [
      "integrate x n",
      "integration",
      "integral",
      "power rule integration",
      "antiderivative",
    ],
    variables: [
      { symbol: "x", name: "variable" },
      { symbol: "n", name: "power or exponent" },
      { symbol: "C", name: "constant of integration" },
    ],
    notes: "Valid for n ≠ -1.",
  },

  // =========================================================
  // MATHS — PURE 2
  // =========================================================

  {
    id: "maths-p2-log-product",
    name: "Logarithm Product Law",
    subject: "Maths",
    topic: "Pure 2",
    formula: "log_a(x) + log_a(y) = log_a(xy)",
    latex: "\\log_a x + \\log_a y = \\log_a(xy)",
    aliases: [
      "log laws",
      "laws of logarithms",
      "product law",
      "adding logarithms",
      "combine logs",
    ],
    variables: [
      { symbol: "a", name: "logarithm base" },
      { symbol: "x", name: "positive argument" },
      { symbol: "y", name: "positive argument" },
    ],
    notes: "For real logarithms, a > 0, a ≠ 1, x > 0 and y > 0.",
  },

  {
    id: "maths-p2-log-quotient",
    name: "Logarithm Quotient Law",
    subject: "Maths",
    topic: "Pure 2",
    formula: "log_a(x) - log_a(y) = log_a(x/y)",
    latex:
      "\\log_a x - \\log_a y = \\log_a\\left(\\frac{x}{y}\\right)",
    aliases: [
      "log laws",
      "quotient law",
      "subtracting logarithms",
      "division law logs",
      "combine logs",
    ],
    variables: [
      { symbol: "a", name: "logarithm base" },
      { symbol: "x", name: "positive argument" },
      { symbol: "y", name: "positive argument" },
    ],
    notes: "For real logarithms, a > 0, a ≠ 1, x > 0 and y > 0.",
  },

  {
    id: "maths-p2-log-power",
    name: "Logarithm Power Law",
    subject: "Maths",
    topic: "Pure 2",
    formula: "k log_a(x) = log_a(x^k)",
    latex: "k\\log_a x = \\log_a\\left(x^k\\right)",
    aliases: [
      "log laws",
      "power law",
      "power rule logs",
      "bring power down",
      "exponent logarithm",
    ],
    variables: [
      { symbol: "a", name: "logarithm base" },
      { symbol: "x", name: "positive argument" },
      { symbol: "k", name: "power or multiplier" },
    ],
    notes: "For real logarithms, a > 0, a ≠ 1 and x > 0.",
  },

  {
    id: "maths-p2-pythagorean-trig",
    name: "Pythagorean Trigonometric Identity",
    subject: "Maths",
    topic: "Pure 2",
    formula: "sin²(A) + cos²(A) = 1",
    latex: "\\sin^2 A + \\cos^2 A = 1",
    aliases: [
      "trig identity",
      "pythagorean identity",
      "sin squared plus cos squared",
      "sin2 cos2",
    ],
    variables: [{ symbol: "A", name: "angle" }],
  },

  {
    id: "maths-p2-tangent-identity",
    name: "Tangent Identity",
    subject: "Maths",
    topic: "Pure 2",
    formula: "tan(θ) = sin(θ) / cos(θ)",
    latex: "\\tan\\theta = \\frac{\\sin\\theta}{\\cos\\theta}",
    aliases: [
      "trig identity",
      "tan identity",
      "tan equals sin over cos",
      "sin over cos",
    ],
    variables: [{ symbol: "θ", name: "angle" }],
    notes: "Defined where cos θ ≠ 0.",
  },

  {
    id: "maths-p2-area-under-curve",
    name: "Area Under a Curve",
    subject: "Maths",
    topic: "Pure 2",
    formula: "Area = ∫_a^b y dx",
    latex: "\\text{Area} = \\int_a^b y\\,dx",
    aliases: [
      "area under curve",
      "area under graph",
      "definite integral",
      "integration area",
      "integral between limits",
    ],
    variables: [
      { symbol: "a", name: "lower integration limit" },
      { symbol: "b", name: "upper integration limit" },
      { symbol: "y", name: "function value" },
      { symbol: "x", name: "independent variable" },
    ],
    notes: "As given here, y ≥ 0.",
  },

  // =========================================================
  // MATHS — PURE 3
  // =========================================================

  {
    id: "maths-p3-pythagorean-trig",
    name: "Pythagorean Trigonometric Identity",
    subject: "Maths",
    topic: "Pure 3",
    formula: "cos²(A) + sin²(A) = 1",
    latex: "\\cos^2 A + \\sin^2 A = 1",
    aliases: [
      "pythagorean identity",
      "trig identity",
      "sin squared plus cos squared",
      "cos squared plus sin squared",
    ],
    variables: [{ symbol: "A", name: "angle" }],
  },

  {
    id: "maths-p3-sec-tan-identity",
    name: "Secant-Tangent Identity",
    subject: "Maths",
    topic: "Pure 3",
    formula: "sec²(A) = 1 + tan²(A)",
    latex: "\\sec^2 A = 1 + \\tan^2 A",
    aliases: [
      "sec squared identity",
      "sec tan identity",
      "pythagorean identity",
      "1 plus tan squared",
    ],
    variables: [{ symbol: "A", name: "angle" }],
  },

  {
    id: "maths-p3-cosec-cot-identity",
    name: "Cosecant-Cotangent Identity",
    subject: "Maths",
    topic: "Pure 3",
    formula: "cosec²(A) = 1 + cot²(A)",
    latex: "\\operatorname{cosec}^2 A = 1 + \\cot^2 A",
    aliases: [
      "cosec squared identity",
      "csc squared identity",
      "cosec cot identity",
      "1 plus cot squared",
    ],
    variables: [{ symbol: "A", name: "angle" }],
  },

  {
    id: "maths-p3-sine-double-angle",
    name: "Sine Double-Angle Identity",
    subject: "Maths",
    topic: "Pure 3",
    formula: "sin(2A) = 2sin(A)cos(A)",
    latex: "\\sin 2A = 2\\sin A\\cos A",
    aliases: [
      "double angle",
      "double angle sine",
      "sin 2a",
      "2 sin a cos a",
    ],
    variables: [{ symbol: "A", name: "angle" }],
  },

  {
    id: "maths-p3-cosine-double-angle",
    name: "Cosine Double-Angle Identity",
    subject: "Maths",
    topic: "Pure 3",
    formula: "cos(2A) = cos²(A) - sin²(A)",
    latex: "\\cos 2A = \\cos^2 A - \\sin^2 A",
    aliases: [
      "double angle",
      "double angle cosine",
      "cos 2a",
      "cos squared minus sin squared",
    ],
    variables: [{ symbol: "A", name: "angle" }],
  },

  {
    id: "maths-p3-tangent-double-angle",
    name: "Tangent Double-Angle Identity",
    subject: "Maths",
    topic: "Pure 3",
    formula: "tan(2A) = 2tan(A) / (1 - tan²(A))",
    latex: "\\tan 2A = \\frac{2\\tan A}{1-\\tan^2 A}",
    aliases: [
      "double angle",
      "double angle tangent",
      "tan 2a",
      "2 tan a over 1 minus tan squared",
    ],
    variables: [{ symbol: "A", name: "angle" }],
  },

  {
    id: "maths-p3-differentiate-sin-kx",
    name: "Derivative of sin(kx)",
    subject: "Maths",
    topic: "Pure 3",
    formula: "d/dx[sin(kx)] = k cos(kx)",
    latex: "\\frac{d}{dx}\\left(\\sin kx\\right)=k\\cos kx",
    aliases: [
      "differentiate sine",
      "derivative sin kx",
      "trig differentiation",
    ],
    variables: [
      { symbol: "x", name: "variable" },
      { symbol: "k", name: "constant" },
    ],
  },

  {
    id: "maths-p3-differentiate-cos-kx",
    name: "Derivative of cos(kx)",
    subject: "Maths",
    topic: "Pure 3",
    formula: "d/dx[cos(kx)] = -k sin(kx)",
    latex: "\\frac{d}{dx}\\left(\\cos kx\\right)=-k\\sin kx",
    aliases: [
      "differentiate cosine",
      "derivative cos kx",
      "trig differentiation",
    ],
    variables: [
      { symbol: "x", name: "variable" },
      { symbol: "k", name: "constant" },
    ],
  },

  {
    id: "maths-p3-differentiate-ekx",
    name: "Derivative of e^(kx)",
    subject: "Maths",
    topic: "Pure 3",
    formula: "d/dx[e^(kx)] = ke^(kx)",
    latex: "\\frac{d}{dx}\\left(e^{kx}\\right)=ke^{kx}",
    aliases: [
      "differentiate exponential",
      "derivative e kx",
      "exponential differentiation",
    ],
    variables: [
      { symbol: "x", name: "variable" },
      { symbol: "k", name: "constant" },
    ],
  },

  {
    id: "maths-p3-differentiate-ln-x",
    name: "Derivative of ln(x)",
    subject: "Maths",
    topic: "Pure 3",
    formula: "d/dx[ln(x)] = 1/x",
    latex: "\\frac{d}{dx}\\left(\\ln x\\right)=\\frac{1}{x}",
    aliases: [
      "differentiate ln",
      "derivative ln x",
      "natural log derivative",
      "1 over x derivative",
    ],
    variables: [{ symbol: "x", name: "variable" }],
  },

  {
    id: "maths-p3-sum-rule-differentiation",
    name: "Sum Rule for Differentiation",
    subject: "Maths",
    topic: "Pure 3",
    formula: "d/dx[f(x) + g(x)] = f'(x) + g'(x)",
    latex: "\\frac{d}{dx}[f(x)+g(x)] = f'(x)+g'(x)",
    aliases: [
      "sum rule",
      "differentiate sum",
      "derivative addition",
    ],
    variables: [
      { symbol: "f(x)", name: "first function" },
      { symbol: "g(x)", name: "second function" },
    ],
  },

  {
    id: "maths-p3-product-rule",
    name: "Product Rule",
    subject: "Maths",
    topic: "Pure 3",
    formula: "d/dx[f(x)g(x)] = f'(x)g(x) + f(x)g'(x)",
    latex:
      "\\frac{d}{dx}[f(x)g(x)] = f'(x)g(x)+f(x)g'(x)",
    aliases: [
      "product rule differentiation",
      "differentiate product",
      "f prime g plus f g prime",
    ],
    variables: [
      { symbol: "f(x)", name: "first function" },
      { symbol: "g(x)", name: "second function" },
    ],
  },

  {
    id: "maths-p3-chain-rule",
    name: "Chain Rule",
    subject: "Maths",
    topic: "Pure 3",
    formula: "d/dx[f(g(x))] = f'(g(x))g'(x)",
    latex: "\\frac{d}{dx}[f(g(x))]=f'(g(x))g'(x)",
    aliases: [
      "chain rule differentiation",
      "composite function derivative",
      "function of a function",
    ],
    variables: [
      { symbol: "f", name: "outer function" },
      { symbol: "g", name: "inner function" },
      { symbol: "x", name: "variable" },
    ],
  },

  {
    id: "maths-p3-differentiate-a-power-x",
    name: "Derivative of a^x",
    subject: "Maths",
    topic: "Pure 3",
    formula: "d/dx[a^x] = a^x ln(a)",
    latex: "\\frac{d}{dx}\\left(a^x\\right)=a^x\\ln a",
    aliases: [
      "differentiate a to x",
      "derivative a power x",
      "exponential derivative",
    ],
    variables: [
      { symbol: "a", name: "constant base" },
      { symbol: "x", name: "variable" },
    ],
  },

  {
    id: "maths-p3-integrate-cos-kx",
    name: "Integral of cos(kx)",
    subject: "Maths",
    topic: "Pure 3",
    formula: "∫cos(kx) dx = (1/k)sin(kx) + C",
    latex: "\\int \\cos kx\\,dx=\\frac{1}{k}\\sin kx+C",
    aliases: [
      "integrate cosine",
      "integral cos kx",
      "trig integration",
    ],
    variables: [
      { symbol: "x", name: "variable" },
      { symbol: "k", name: "non-zero constant" },
      { symbol: "C", name: "constant of integration" },
    ],
    notes: "Requires k ≠ 0.",
  },

  {
    id: "maths-p3-integrate-sin-kx",
    name: "Integral of sin(kx)",
    subject: "Maths",
    topic: "Pure 3",
    formula: "∫sin(kx) dx = -(1/k)cos(kx) + C",
    latex: "\\int \\sin kx\\,dx=-\\frac{1}{k}\\cos kx+C",
    aliases: [
      "integrate sine",
      "integral sin kx",
      "trig integration",
    ],
    variables: [
      { symbol: "x", name: "variable" },
      { symbol: "k", name: "non-zero constant" },
      { symbol: "C", name: "constant of integration" },
    ],
    notes: "Requires k ≠ 0.",
  },

  {
    id: "maths-p3-integrate-ekx",
    name: "Integral of e^(kx)",
    subject: "Maths",
    topic: "Pure 3",
    formula: "∫e^(kx) dx = (1/k)e^(kx) + C",
    latex: "\\int e^{kx}\\,dx=\\frac{1}{k}e^{kx}+C",
    aliases: [
      "integrate exponential",
      "integral e kx",
      "exponential integration",
    ],
    variables: [
      { symbol: "x", name: "variable" },
      { symbol: "k", name: "non-zero constant" },
      { symbol: "C", name: "constant of integration" },
    ],
    notes: "Requires k ≠ 0.",
  },

  {
    id: "maths-p3-integrate-one-over-x",
    name: "Integral of 1/x",
    subject: "Maths",
    topic: "Pure 3",
    formula: "∫(1/x) dx = ln|x| + C",
    latex: "\\int \\frac{1}{x}\\,dx=\\ln|x|+C",
    aliases: [
      "integrate 1 over x",
      "natural log integral",
      "ln absolute x",
      "reciprocal integration",
    ],
    variables: [
      { symbol: "x", name: "variable" },
      { symbol: "C", name: "constant of integration" },
    ],
    notes: "Valid for x ≠ 0.",
  },

  {
    id: "maths-p3-integration-sum-rule",
    name: "Sum Rule for Integration",
    subject: "Maths",
    topic: "Pure 3",
    formula: "∫[f'(x) + g'(x)] dx = f(x) + g(x) + C",
    latex: "\\int [f'(x)+g'(x)]\\,dx=f(x)+g(x)+C",
    aliases: [
      "sum rule integration",
      "integrate sum",
      "antiderivative sum",
    ],
    variables: [
      { symbol: "f(x)", name: "first function" },
      { symbol: "g(x)", name: "second function" },
      { symbol: "C", name: "constant of integration" },
    ],
  },

  {
    id: "maths-p3-reverse-chain-rule",
    name: "Reverse Chain Rule",
    subject: "Maths",
    topic: "Pure 3",
    formula: "∫f'(g(x))g'(x) dx = f(g(x)) + C",
    latex: "\\int f'(g(x))g'(x)\\,dx=f(g(x))+C",
    aliases: [
      "reverse chain rule",
      "integration chain rule",
      "integrate composite",
      "substitution pattern",
    ],
    variables: [
      { symbol: "f", name: "outer function" },
      { symbol: "g", name: "inner function" },
      { symbol: "x", name: "variable" },
      { symbol: "C", name: "constant of integration" },
    ],
  },

  {
    id: "maths-p3-integrate-a-power-x",
    name: "Integral of a^x",
    subject: "Maths",
    topic: "Pure 3",
    formula: "∫a^x dx = a^x / ln(a) + C",
    latex: "\\int a^x\\,dx=\\frac{a^x}{\\ln a}+C",
    aliases: [
      "integrate a to x",
      "integral a power x",
      "exponential integration",
    ],
    variables: [
      { symbol: "a", name: "constant base" },
      { symbol: "x", name: "variable" },
      { symbol: "C", name: "constant of integration" },
    ],
    notes: "For a > 0 and a ≠ 1.",
  },

  // =========================================================
  // MATHS — MECHANICS 1
  // =========================================================

  {
    id: "maths-m1-momentum",
    name: "Momentum",
    subject: "Maths",
    topic: "Mechanics 1",
    formula: "p = mv",
    latex: "p = mv",
    aliases: [
      "momentum",
      "linear momentum",
      "mass velocity",
      "p mv",
    ],
    variables: [
      { symbol: "p", name: "momentum", unit: "kg m s⁻¹" },
      { symbol: "m", name: "mass", unit: "kg" },
      { symbol: "v", name: "velocity", unit: "m s⁻¹" },
    ],
  },

  {
    id: "maths-m1-impulse",
    name: "Impulse",
    subject: "Maths",
    topic: "Mechanics 1",
    formula: "Impulse = mv - mu",
    latex: "\\text{Impulse} = mv-mu",
    aliases: [
      "impulse",
      "change in momentum",
      "momentum change",
      "mv minus mu",
    ],
    variables: [
      { symbol: "m", name: "mass", unit: "kg" },
      { symbol: "u", name: "initial velocity", unit: "m s⁻¹" },
      { symbol: "v", name: "final velocity", unit: "m s⁻¹" },
    ],
    notes: "SI unit: N s, equivalent to kg m s⁻¹.",
  },

  {
    id: "maths-m1-suvat-final-velocity",
    name: "SUVAT — Final Velocity",
    subject: "Maths",
    topic: "Mechanics 1",
    formula: "v = u + at",
    latex: "v = u+at",
    aliases: [
      "suvat",
      "equations of motion",
      "constant acceleration",
      "final velocity",
    ],
    variables: [
      { symbol: "v", name: "final velocity", unit: "m s⁻¹" },
      { symbol: "u", name: "initial velocity", unit: "m s⁻¹" },
      { symbol: "a", name: "constant acceleration", unit: "m s⁻²" },
      { symbol: "t", name: "time", unit: "s" },
    ],
    notes: "Valid for constant acceleration.",
  },

  {
    id: "maths-m1-suvat-displacement-u",
    name: "SUVAT — Displacement from Initial Velocity",
    subject: "Maths",
    topic: "Mechanics 1",
    formula: "s = ut + 1/2 at²",
    latex: "s = ut+\\frac{1}{2}at^2",
    aliases: [
      "suvat",
      "equations of motion",
      "displacement",
      "initial velocity displacement",
    ],
    variables: [
      { symbol: "s", name: "displacement", unit: "m" },
      { symbol: "u", name: "initial velocity", unit: "m s⁻¹" },
      { symbol: "a", name: "constant acceleration", unit: "m s⁻²" },
      { symbol: "t", name: "time", unit: "s" },
    ],
    notes: "Valid for constant acceleration.",
  },

  {
    id: "maths-m1-suvat-displacement-v",
    name: "SUVAT — Displacement from Final Velocity",
    subject: "Maths",
    topic: "Mechanics 1",
    formula: "s = vt - 1/2 at²",
    latex: "s = vt-\\frac{1}{2}at^2",
    aliases: [
      "suvat",
      "equations of motion",
      "displacement",
      "final velocity displacement",
    ],
    variables: [
      { symbol: "s", name: "displacement", unit: "m" },
      { symbol: "v", name: "final velocity", unit: "m s⁻¹" },
      { symbol: "a", name: "constant acceleration", unit: "m s⁻²" },
      { symbol: "t", name: "time", unit: "s" },
    ],
    notes: "Valid for constant acceleration.",
  },

  {
    id: "maths-m1-suvat-without-time",
    name: "SUVAT — Without Time",
    subject: "Maths",
    topic: "Mechanics 1",
    formula: "v² = u² + 2as",
    latex: "v^2=u^2+2as",
    aliases: [
      "suvat",
      "equations of motion",
      "no time",
      "without time",
      "velocity squared",
    ],
    variables: [
      { symbol: "v", name: "final velocity", unit: "m s⁻¹" },
      { symbol: "u", name: "initial velocity", unit: "m s⁻¹" },
      { symbol: "a", name: "constant acceleration", unit: "m s⁻²" },
      { symbol: "s", name: "displacement", unit: "m" },
    ],
    notes: "Valid for constant acceleration.",
  },

  {
    id: "maths-m1-suvat-average-velocity",
    name: "SUVAT — Average Velocity",
    subject: "Maths",
    topic: "Mechanics 1",
    formula: "s = 1/2 (u + v)t",
    latex: "s=\\frac{1}{2}(u+v)t",
    aliases: [
      "suvat",
      "equations of motion",
      "average velocity",
      "displacement",
    ],
    variables: [
      { symbol: "s", name: "displacement", unit: "m" },
      { symbol: "u", name: "initial velocity", unit: "m s⁻¹" },
      { symbol: "v", name: "final velocity", unit: "m s⁻¹" },
      { symbol: "t", name: "time", unit: "s" },
    ],
    notes: "Valid for constant acceleration.",
  },

  // =========================================================
  // MATHS — MECHANICS 2
  // =========================================================

  {
    id: "maths-m2-kinetic-energy",
    name: "Kinetic Energy",
    subject: "Maths",
    topic: "Mechanics 2",
    formula: "KE = 1/2 mv²",
    latex: "E_k = \\frac{1}{2}mv^2",
    aliases: [
      "kinetic energy",
      "ke",
      "energy of motion",
      "half mv squared",
      "mechanical energy",
    ],
    variables: [
      { symbol: "Eₖ", name: "kinetic energy", unit: "J" },
      { symbol: "m", name: "mass", unit: "kg" },
      { symbol: "v", name: "velocity", unit: "m s⁻¹" },
    ],
  },

  {
    id: "maths-m2-potential-energy",
    name: "Gravitational Potential Energy",
    subject: "Maths",
    topic: "Mechanics 2",
    formula: "PE = mgh",
    latex: "E_p = mgh",
    aliases: [
      "potential energy",
      "gravitational potential energy",
      "gpe",
      "mgh",
      "energy due to height",
    ],
    variables: [
      { symbol: "Eₚ", name: "gravitational potential energy", unit: "J" },
      { symbol: "m", name: "mass", unit: "kg" },
      { symbol: "g", name: "acceleration due to gravity", unit: "m s⁻²" },
      { symbol: "h", name: "vertical height", unit: "m" },
    ],
  },

  // =========================================================
  // MATHS — STATISTICS 1
  // =========================================================

  {
    id: "maths-s1-mean",
    name: "Mean",
    subject: "Maths",
    topic: "Statistics 1",
    formula: "x̄ = Σx/n or Σfx/Σf",
    latex:
      "\\bar{x}=\\frac{\\sum x}{n}\\quad\\text{or}\\quad\\frac{\\sum fx}{\\sum f}",
    aliases: [
      "mean",
      "average",
      "arithmetic mean",
      "frequency mean",
      "sum x over n",
      "sum fx over sum f",
    ],
    variables: [
      { symbol: "x̄", name: "mean" },
      { symbol: "x", name: "data value" },
      { symbol: "n", name: "number of observations" },
      { symbol: "f", name: "frequency" },
    ],
  },

  {
    id: "maths-s1-standard-deviation",
    name: "Standard Deviation from Variance",
    subject: "Maths",
    topic: "Statistics 1",
    formula: "standard deviation = √variance",
    latex: "\\text{standard deviation}=\\sqrt{\\text{variance}}",
    aliases: [
      "standard deviation",
      "variance",
      "square root variance",
      "sd",
    ],
    variables: [],
  },

  {
    id: "maths-s1-iqr",
    name: "Interquartile Range",
    subject: "Maths",
    topic: "Statistics 1",
    formula: "IQR = Q₃ - Q₁",
    latex: "\\mathrm{IQR}=Q_3-Q_1",
    aliases: [
      "interquartile range",
      "iqr",
      "quartile range",
      "q3 minus q1",
      "spread",
    ],
    variables: [
      { symbol: "IQR", name: "interquartile range" },
      { symbol: "Q₁", name: "lower quartile" },
      { symbol: "Q₃", name: "upper quartile" },
    ],
  },

  {
    id: "maths-s1-complement-rule",
    name: "Complement Rule",
    subject: "Maths",
    topic: "Statistics 1",
    formula: "P(A') = 1 - P(A)",
    latex: "P(A')=1-P(A)",
    aliases: [
      "complement rule",
      "complement probability",
      "not a",
      "one minus probability",
    ],
    variables: [
      { symbol: "A", name: "event" },
      { symbol: "A'", name: "complement of event A" },
    ],
  },

  {
    id: "maths-s1-independent-conditional",
    name: "Conditional Probability for Independent Events",
    subject: "Maths",
    topic: "Statistics 1",
    formula: "P(B|A) = P(B), P(A|B) = P(A)",
    latex: "P(B\\mid A)=P(B),\\qquad P(A\\mid B)=P(A)",
    aliases: [
      "independent events",
      "conditional probability independent",
      "p b given a",
      "p a given b",
      "independence",
    ],
    variables: [
      { symbol: "A", name: "event A" },
      { symbol: "B", name: "event B" },
    ],
  },

  {
    id: "maths-s1-independent-intersection",
    name: "Intersection of Independent Events",
    subject: "Maths",
    topic: "Statistics 1",
    formula: "P(A ∩ B) = P(A)P(B)",
    latex: "P(A\\cap B)=P(A)P(B)",
    aliases: [
      "independent events",
      "intersection probability",
      "probability a and b",
      "multiplication rule",
      "multiply probabilities",
    ],
    variables: [
      { symbol: "A", name: "event A" },
      { symbol: "B", name: "event B" },
    ],
  },

  {
    id: "maths-s1-expectation-transformation",
    name: "Expectation of a Linear Transformation",
    subject: "Maths",
    topic: "Statistics 1",
    formula: "E(aX + b) = aE(X) + b",
    latex: "E(aX+b)=aE(X)+b",
    aliases: [
      "expectation",
      "expected value",
      "linear transformation expectation",
      "mean transformation",
    ],
    variables: [
      { symbol: "X", name: "random variable" },
      { symbol: "E(X)", name: "expected value of X" },
      { symbol: "a", name: "constant multiplier" },
      { symbol: "b", name: "constant" },
    ],
  },

  {
    id: "maths-s1-variance-transformation",
    name: "Variance of a Linear Transformation",
    subject: "Maths",
    topic: "Statistics 1",
    formula: "Var(aX + b) = a²Var(X)",
    latex: "\\operatorname{Var}(aX+b)=a^2\\operatorname{Var}(X)",
    aliases: [
      "variance",
      "linear transformation variance",
      "variance transformation",
      "a squared variance",
    ],
    variables: [
      { symbol: "X", name: "random variable" },
      { symbol: "Var(X)", name: "variance of X" },
      { symbol: "a", name: "constant multiplier" },
      { symbol: "b", name: "constant" },
    ],
  },

  {
    id: "maths-s1-discrete-cdf",
    name: "Discrete Cumulative Distribution Function",
    subject: "Maths",
    topic: "Statistics 1",
    formula: "F(x₀) = P(X ≤ x₀) = Σ p(x), x ≤ x₀",
    latex: "F(x_0)=P(X\\le x_0)=\\sum_{x\\le x_0}p(x)",
    aliases: [
      "cumulative distribution function",
      "cdf",
      "discrete cdf",
      "cumulative probability",
      "discrete random variable",
    ],
    variables: [
      { symbol: "F(x₀)", name: "cumulative distribution function at x₀" },
      { symbol: "X", name: "discrete random variable" },
      { symbol: "x₀", name: "specified value" },
      { symbol: "p(x)", name: "probability mass function" },
    ],
  },

  {
    id: "maths-s1-standard-normal",
    name: "Standardised Normal Random Variable",
    subject: "Maths",
    topic: "Statistics 1",
    formula: "Z = (X - μ)/σ",
    latex: "Z=\\frac{X-\\mu}{\\sigma}",
    aliases: [
      "standard normal",
      "standardised normal",
      "standardized normal",
      "z score",
      "z-score",
      "normal distribution",
    ],
    variables: [
      { symbol: "Z", name: "standardised normal random variable" },
      { symbol: "X", name: "normal random variable" },
      { symbol: "μ", name: "population mean" },
      { symbol: "σ", name: "population standard deviation" },
    ],
    notes: "Used when X ~ N(μ, σ²).",
  },

  // =========================================================
  // MATHS — STATISTICS 2
  // =========================================================

  {
    id: "maths-s2-continuous-probability",
    name: "Continuous Random Variable Probability",
    subject: "Maths",
    topic: "Statistics 2",
    formula: "P(a < X ≤ b) = ∫_a^b f(x) dx",
    latex: "P(a<X\\le b)=\\int_a^b f(x)\\,dx",
    aliases: [
      "continuous random variable",
      "probability density function",
      "pdf",
      "continuous probability",
      "probability between a and b",
      "area under density curve",
    ],
    variables: [
      { symbol: "X", name: "continuous random variable" },
      { symbol: "f(x)", name: "probability density function" },
      { symbol: "a", name: "lower bound" },
      { symbol: "b", name: "upper bound" },
    ],
  },

  {
    id: "maths-s2-pdf-from-cdf",
    name: "Probability Density Function from CDF",
    subject: "Maths",
    topic: "Statistics 2",
    formula: "f(x) = dF(x)/dx",
    latex: "f(x)=\\frac{dF(x)}{dx}",
    aliases: [
      "probability density function",
      "pdf from cdf",
      "cdf derivative",
      "differentiate cdf",
      "cumulative distribution function",
    ],
    variables: [
      { symbol: "f(x)", name: "probability density function" },
      { symbol: "F(x)", name: "cumulative distribution function" },
      { symbol: "x", name: "value of random variable" },
    ],
  },
];