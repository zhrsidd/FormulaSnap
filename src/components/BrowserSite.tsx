import type { ReactNode } from "react";
import logo from "../assets/formulasnap-logo.png";
import details from "../../assets/screenshots/formula_details.png";
import search from "../../assets/screenshots/fuzzy_search.png";
import { formulas } from "../data/formulas";
import "../BrowserSite.css";

const repository = "https://github.com/zhrsidd/FormulaSnap";

export function BrowserSite({ children }: { children: ReactNode }) {
  return <div className="browser-site">
    <a className="site-skip" href="#library">Skip to formula library</a>
    <header className="site-header site-width">
      <a className="site-brand" href="#top" aria-label="FormulaSnap home"><img src={logo} alt="" width="42" height="42" /><span>FormulaSnap</span></a>
      <nav aria-label="Main navigation">
        <a href="#library">Formula library</a>
        <a href="#mac-app">The Mac app</a>
        <a href={repository} target="_blank" rel="noreferrer">GitHub <span aria-hidden="true">↗</span></a>
      </nav>
    </header>

    <section className="site-hero site-width" id="top" aria-labelledby="site-title">
      <div className="hero-copy">
        <p className="site-eyebrow"><span aria-hidden="true" /> A little less searching. A lot more solving.</p>
        <h1 id="site-title">The formula you need.<span>Right when you need it.</span></h1>
        <p className="hero-description">Physics, Maths and Further Mathematics, all in one place. Find the equation, understand the variables, and get back to your work.</p>
        <div className="hero-actions"><a className="site-button primary" href="#library">Explore the formulae <span aria-hidden="true">↓</span></a><a className="site-button secondary" href={`${repository}/releases/latest`}>Download for macOS <span aria-hidden="true">↗</span></a></div>
        <div className="hero-facts"><span>{formulas.length} formulae</span><span>Free &amp; open source</span><span>No account needed</span></div>
      </div>
      <figure className="hero-preview">
        <div className="preview-caption"><img src={logo} alt="" width="24" height="24" /><span>Small app. Everything in reach.</span><span className="preview-tag">macOS</span></div>
        <img className="preview-image" src={details} alt="FormulaSnap showing Newton’s second law, with its variables and units expanded" width="1268" height="1026" fetchPriority="high" />
        <figcaption>More than an equation. The meaning behind every symbol.</figcaption>
      </figure>
    </section>

    <section className="library-section" id="library" aria-labelledby="library-heading">
      <div className="site-width">{children}</div>
    </section>

    <section className="site-width mac-section" id="mac-app" aria-labelledby="mac-title">
      <div className="mac-copy">
        <p className="site-eyebrow">Made for the moment you get stuck</p>
        <h2 id="mac-title">Keep your flow.<br />Keep FormulaSnap close.</h2>
        <p>The Mac app brings your formula library to the front with a shortcut you choose. It works offline, stays above your notes when you need it, and updates automatically.</p>
        <a className="site-button primary" href={`${repository}/releases/latest`}>Get FormulaSnap for Mac <span aria-hidden="true">↗</span></a>
        <p className="mac-note">A lightweight app for Intel and Apple Silicon.</p>
      </div>
      <div className="site-features">
        <article className="feature-thumbnail"><img src={search} alt="A fuzzy search finding centripetal force and acceleration even with a misspelt search" width="1278" height="1024" loading="lazy" /><div><h3>A typo won’t slow you down.</h3><p>Search names, topics, variables or units. Fuzzy search helps you find what you mean.</p></div></article>
        <article className="feature-note"><span className="feature-symbol" aria-hidden="true">⌘</span><div><h3>Your shortcut. Your workspace.</h3><p>Choose your own key combination, resize the window, and keep favourite formulae a keypress away.</p></div></article>
      </div>
    </section>

    <footer className="site-footer site-width"><a className="site-brand" href="#top"><img src={logo} alt="" width="30" height="30" /><span>FormulaSnap</span></a><p>Built by a student, for students.</p><div><a href={repository}>Source code</a><a href={`${repository}/blob/main/LICENSE`}>MIT licence</a></div><p className="site-disclaimer">Independent study tool. Not affiliated with Pearson Edexcel. Check formulae against your course specification.</p></footer>
  </div>;
}
