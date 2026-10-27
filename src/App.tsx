import Fuse from "fuse.js";
import {
  Fragment,
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";

import { FormulaEquation } from "./components/FormulaEquation";
import { listen } from "@tauri-apps/api/event";
import { getCurrentWindow } from "@tauri-apps/api/window";
import { invoke, isTauri } from "@tauri-apps/api/core";
import { openUrl } from "@tauri-apps/plugin-opener";
import { compareExamFormulae, IAL_SPECIFICATION } from "./data/examFormulae";

import "katex/dist/katex.min.css";
import "./App.css";

import { ShortcutSettings } from "./components/ShortcutSettings";
import { AppUpdates } from "./components/AppUpdates";

import { formulas } from "./data/formulas";
import { PEARSON_FORMULA_BOOK } from "./data/pearsonFormulas";

type SubjectFilter =
  | "All"
  | "Physics"
  | "Maths"
  | "Further Mathematics";

// The same frontend runs in Tauri and in a regular browser.
const isDesktop = isTauri();

const FAVORITES_KEY = "formulasnap-favorites";
const RECENTS_KEY = "formulasnap-recents";
const RECENTS_LIMIT = 10;
const knownIds = new Set(formulas.map((formula) => formula.id));

function readIds(key: string, limit = Infinity): string[] {
  try {
    const saved: unknown = JSON.parse(localStorage.getItem(key) ?? "[]");
    if (!Array.isArray(saved)) return [];
    return [...new Set(saved.filter((id): id is string =>
      typeof id === "string" && knownIds.has(id)
    ))].slice(0, limit);
  } catch {
    return [];
  }
}

function saveIds(key: string, ids: string[]) {
  try {
    localStorage.setItem(key, JSON.stringify(ids));
  } catch (error) {
    console.error("Could not save FormulaSnap history:", error);
  }
}

function App() {
  const [showSettings, setShowSettings] = useState(false);
  const [collection, setCollection] = useState<"all" | "booklet" | "extras">("all");
  const collectionLabel = collection === "booklet" ? "Formula booklet" : "Exam extras";
  const [reduceTransparency, setReduceTransparency] = useState(() =>
    localStorage.getItem("formulasnap-reduce-transparency") === "true"
  );
  useEffect(() => {
    localStorage.setItem("formulasnap-reduce-transparency", String(reduceTransparency));
  }, [reduceTransparency]);
  const [browserLimit, setBrowserLimit] = useState(24);
  const [query, setQuery] = useState("");
  const [selectedIndex, setSelectedIndex] = useState(0);

  const [expandedId, setExpandedId] = useState<string | null>(null);

  const [favoriteIds, setFavoriteIds] = useState(() => readIds(FAVORITES_KEY));
  const [recentIds, setRecentIds] = useState(() => readIds(RECENTS_KEY, RECENTS_LIMIT));
  const [copyError, setCopyError] = useState("");

  useEffect(() => saveIds(FAVORITES_KEY, favoriteIds), [favoriteIds]);
  useEffect(() => saveIds(RECENTS_KEY, recentIds), [recentIds]);

  const toggleFavorite = (id: string) => {
    setFavoriteIds((current) => current.includes(id)
      ? current.filter((savedId) => savedId !== id)
      : [...current, id]);
  };

  // Settings
  const [alwaysOnTop, setAlwaysOnTop] = useState(() => {
    const saved = localStorage.getItem(
      "formulasnap-always-on-top"
    );

    if (saved === null) {
      return true;
    }

    return saved === "true";
  });

  const [selectedSubject, setSelectedSubject] =
    useState<SubjectFilter>(() => {
      const saved = localStorage.getItem(
        "formulasnap-subject"
      ) as SubjectFilter | null;

      if (
        saved === "Physics" ||
        saved === "Maths" ||
        saved === "Further Mathematics"
      ) {
        return saved;
      }

      return "All";
    });

  const [selectedTopic, setSelectedTopic] = useState(
    () =>
      localStorage.getItem("formulasnap-topic")?.replace(/^FPM([123])$/, "Further Pure $1") ??
      "All"
  );

  const searchRef = useRef<HTMLInputElement>(null);
  const resultsRef = useRef<HTMLDivElement>(null);
  const scrollSelection = useRef(isDesktop);
  const [navigationRequest, setNavigationRequest] = useState(0);

  const appWindow = useMemo(
    () => isDesktop ? getCurrentWindow() : null,
    []
  );

  // Reset FormulaSnap whenever opened using global shortcut
  useEffect(() => {
    if (!isDesktop) return;
    let disposed = false;
    let unlisten: (() => void) | undefined;

    listen("formulasnap-opened", () => {
      if (document.activeElement?.matches("[data-shortcut-recorder]")) return;
      scrollSelection.current = true;
      setNavigationRequest((current) => current + 1);
      setShowSettings(false);
      setExpandedId(null);
      setQuery("");
      setSelectedIndex(0);

      setTimeout(() => {
        searchRef.current?.focus();
      }, 50);
    }).then((fn) => {
      if (disposed) fn();
      else unlisten = fn;
    }).catch((error) => console.error("Could not listen for app opening:", error));

    return () => {
      disposed = true;
      unlisten?.();
    };
  }, []);

  // Apply and save Always on Top
  useEffect(() => {
    if (!isDesktop) return;
    const updateAlwaysOnTop = async () => {
      try {
        await invoke("set_always_on_top", {
          enabled: alwaysOnTop,
        });

        localStorage.setItem(
          "formulasnap-always-on-top",
          String(alwaysOnTop)
        );
      } catch (error) {
        console.error(
          "Could not change always-on-top:",
          error
        );
      }
    };

    updateAlwaysOnTop();
  }, [alwaysOnTop]);

  // Save subject
  useEffect(() => {
    localStorage.setItem(
      "formulasnap-subject",
      selectedSubject
    );
  }, [selectedSubject]);

  // Save topic
  useEffect(() => {
    localStorage.setItem(
      "formulasnap-topic",
      selectedTopic
    );
  }, [selectedTopic]);

  // Available topics for currently selected subject
  const availableTopics = useMemo(() => {
    if (selectedSubject === "All") {
      return [];
    }

    return Array.from(
      new Set(
        formulas
          .filter(
            (formula) =>
              formula.subject === selectedSubject
          )
          .map((formula) => formula.topic)
          .concat(selectedSubject === "Further Mathematics" ? ["Decision 1"] : [])
      )
    );
  }, [selectedSubject]);

  // If saved topic is invalid for selected subject,
  // reset it automatically
  useEffect(() => {
    if (selectedSubject === "All") {
      if (selectedTopic !== "All") {
        setSelectedTopic("All");
      }

      return;
    }

    if (
      selectedTopic !== "All" &&
      !availableTopics.includes(selectedTopic)
    ) {
      setSelectedTopic("All");
    }
  }, [
    selectedSubject,
    selectedTopic,
    availableTopics,
  ]);

  // Filter formulas before search
  const filteredFormulas = useMemo(() => {
    return formulas.filter((formula) => {
      const matchesSubject =
        selectedSubject === "All" ||
        formula.subject === selectedSubject;

      const matchesTopic =
        selectedTopic === "All" ||
        formula.topic === selectedTopic;

      return matchesSubject && matchesTopic && (collection === "all" || (collection === "booklet" ? Boolean(formula.booklet) : Boolean(formula.examKnowledge)));
    });
  }, [selectedSubject, selectedTopic, collection]);

  // Fuzzy search only within filtered formulas
  const fuse = useMemo(
    () =>
      new Fuse(filteredFormulas, {
        keys: [
          {
            name: "name",
            weight: 0.4,
          },
          {
            name: "aliases",
            weight: 0.3,
          },
          {
            name: "variables.name",
            weight: 0.18,
          },
          {
            name: "topic",
            weight: 0.15,
          },
          {
            name: "variables.unit",
            weight: 0.12,
          },
          {
            name: "subject",
            weight: 0.1,
          },
          {
            name: "variables.symbol",
            weight: 0.1,
          },
          {
            name: "formula",
            weight: 0.05,
          },
          {
            name: "notes",
            weight: 0.05,
          },
        ],
        threshold: 0.4,
        ignoreLocation: true,
      }),
    [filteredFormulas]
  );

  const isSearching = query.trim().length > 0;
  const favoriteSet = useMemo(() => new Set(favoriteIds), [favoriteIds]);
  const sections = useMemo(() => {
    if (isSearching) {
      return [{ label: "", items: fuse.search(query.trim()).map((result) => result.item) }];
    }
    const byId = new Map(filteredFormulas.map((item) => [item.id, item]));
    const resolve = (ids: string[]) => ids.flatMap((id) => {
      const item = byId.get(id);
      return item ? [item] : [];
    });
    const savedIds = new Set([...favoriteIds, ...recentIds]);
    return [
      { label: "Favorites", items: resolve(favoriteIds) },
      // Favorites already appear above; retain them in stored history.
      { label: "Recents", items: resolve(recentIds.filter((id) => !favoriteSet.has(id))) },
      { label: collection !== "all" ? collectionLabel : selectedTopic === "All" ? "All formulae" : selectedTopic, items: isDesktop && selectedTopic === "All" && collection === "all" ? [] : filteredFormulas.filter((item) => !savedIds.has(item.id)).sort((a, b) => collection !== "all" ? compareExamFormulae(a, b) : 0) },
    ].filter((section) => section.items.length > 0);
  }, [isSearching, query, fuse, filteredFormulas, favoriteIds, recentIds, favoriteSet, selectedTopic, collection, collectionLabel]);
  const matchingResults = useMemo(() => sections.flatMap((section) => section.items), [sections]);
  const visibleResults = useMemo(() => isDesktop ? matchingResults : matchingResults.slice(0, browserLimit), [matchingResults, browserLimit]);

  const copyFormula = useCallback(async (item: (typeof formulas)[number], hide = false) => {
    try {
      await navigator.clipboard.writeText(item.formula);
    } catch (error) {
      console.error("Could not copy formula:", error);
      setCopyError("Could not copy. Please try again.");
      return;
    }
    setCopyError("");
    setRecentIds((current) => [item.id, ...current.filter((id) => id !== item.id)].slice(0, RECENTS_LIMIT));
    if (hide) await appWindow?.hide();
  }, [appWindow]);

  useEffect(() => {
    if (expandedId && !visibleResults.some((item) => item.id === expandedId)) {
      setExpandedId(null);
    }
  }, [visibleResults, expandedId]);

  // Reset selected result when search/filter changes
  useEffect(() => {
    scrollSelection.current = isDesktop;
    setSelectedIndex(0);
    setBrowserLimit(24);
    setExpandedId(null);
  }, [
    query,
    selectedSubject,
    selectedTopic,
    collection,
  ]);

  // Keep selected index valid
  useEffect(() => {
    setSelectedIndex((current) =>
      Math.min(
        current,
        Math.max(
          visibleResults.length - 1,
          0
        )
      )
    );
  }, [visibleResults.length]);

  // Follow keyboard selection after React updates the selected card.
  // Hovering changes the highlight without moving the list.
  useEffect(() => {
    if (showSettings || !scrollSelection.current) {
      return;
    }

    resultsRef.current
      ?.querySelector<HTMLElement>(".formula-card.selected")
      ?.scrollIntoView({ block: "nearest", inline: "nearest", behavior: "auto" });
  }, [selectedIndex, visibleResults, showSettings, navigationRequest]);

  // Keyboard controls
  useEffect(() => {
    function handleKeyDown(
      event: KeyboardEvent
    ) {
      if (!isDesktop && event.target instanceof HTMLElement && !event.target.closest(".browser-app")) return;
      if (event.key === "Escape") {
        event.preventDefault();

        if (showSettings) {
          setShowSettings(false);

          setTimeout(() => {
            searchRef.current?.focus();
          }, 50);

          return;
        }

        appWindow?.hide();
        return;
      }

      if (showSettings) {
        return;
      }

      if (
        event.code === "Space" &&
        !event.isComposing &&
        !event.altKey && !event.ctrlKey && !event.metaKey
      ) {
        const target = event.target;
        if (!isDesktop && target instanceof HTMLInputElement) return;
        // Preserve native Space activation for buttons and settings controls.
        if (target instanceof HTMLElement &&
            target.closest("button, a, select, textarea, [contenteditable='true']")) {
          return;
        }
        const selected = visibleResults[selectedIndex];
        if (selected) {
          event.preventDefault();
          if (!event.repeat) {
            setExpandedId((current) => current === selected.id ? null : selected.id);
          }
        }
        return;
      }

      // Let focused controls retain native keyboard activation.
      if (event.target instanceof HTMLElement &&
          event.target.closest("button, a, select, textarea, [contenteditable='true']")) {
        return;
      }
      if (event.isComposing) return;

      if (event.key === "ArrowDown") {
        event.preventDefault();
        scrollSelection.current = true;
        // Also reveal the selection when already at the first/last result.
        setNavigationRequest((current) => current + 1);

        setSelectedIndex((current) =>
          Math.min(
            current + 1,
            Math.max(
              visibleResults.length - 1,
              0
            )
          )
        );

        return;
      }

      if (event.key === "ArrowUp") {
        event.preventDefault();
        scrollSelection.current = true;
        // Also reveal the selection when already at the first/last result.
        setNavigationRequest((current) => current + 1);

        setSelectedIndex((current) =>
          Math.max(current - 1, 0)
        );

        return;
      }

      if (
        event.key === "Enter" &&
        visibleResults[selectedIndex]
      ) {
        event.preventDefault();

        void copyFormula(visibleResults[selectedIndex], true);
      }
    }

    window.addEventListener(
      "keydown",
      handleKeyDown
    );

    return () => {
      window.removeEventListener(
        "keydown",
        handleKeyDown
      );
    };
  }, [
    visibleResults,
    selectedIndex,
    showSettings,
    appWindow,
    copyFormula,
  ]);

  return (
    <main className={isDesktop ? "app" : "app browser-app"}>
      <div className={`panel${reduceTransparency ? " reduce-transparency" : ""}`}>
        {/* Custom titlebar */}
        {isDesktop && <div
          className="titlebar"
          data-tauri-drag-region
        >
          <div className="traffic-lights">
            <button
              className="traffic close"
              onClick={() =>
                appWindow?.close()
              }
              aria-label="Close"
            />

            <button
              className="traffic minimize"
              onClick={() =>
                appWindow?.minimize()
              }
              aria-label="Minimize"
            />

            <button
              className="traffic maximize"
              onClick={() =>
                appWindow?.toggleMaximize()
              }
              aria-label="Maximize"
            />
          </div>

          <div
            className="drag-space"
            data-tauri-drag-region
          />
        </div>}

        {/* Header */}
        <div className="heading-row">
          <div>
            {isDesktop ? <h1>FormulaSnap</h1> : <h2 id="library-heading">Formula library</h2>}

            <p className="subtitle">
              {isDesktop ? "Find the formula you need, instantly." : "Search, explore, and make the useful ones yours."}
            </p>
          </div>

          {!showSettings && (
            <button
              className="settings-button"
              onClick={() =>
                setShowSettings(true)
              }
              aria-label="Open Settings"
            >
              ⚙︎
            </button>
          )}
        </div>

        {isDesktop && <AppUpdates showControls={showSettings} />}

        {!showSettings ? (
          <>
            {/* Search */}
            <input
              ref={searchRef}
              className="search"
              type="text"
              placeholder="Search formulas..."
              value={query}
              onChange={(event) =>
                setQuery(
                  event.target.value
                )
              }
              autoFocus={isDesktop}
            />

            <div className="library-scope" aria-label="Formula collection">
              {([['all', 'All formulae'], ['booklet', 'Formula booklet'], ['extras', 'Exam extras']] as const).map(([value, label]) =>
                <button key={value} aria-pressed={collection === value} onClick={() => {
                  setCollection(value);
                  if (value !== "all" && selectedSubject === "Physics") {
                    setSelectedSubject("All");
                    setSelectedTopic("All");
                  }
                }}>{label}</button>
              )}
              {collection !== "all" && <span>{collection === "booklet" ? "Provided in the IAL maths booklet" : "Beyond the printed formulae"}</span>}
            </div>

            {!isDesktop && <div className="browser-filters">
              <label>Subject<select value={selectedSubject} onChange={event => { setSelectedSubject(event.target.value as SubjectFilter); setSelectedTopic("All"); }}>
                {["All", "Physics", "Maths", "Further Mathematics"].map(subject => <option key={subject} value={subject}>{subject === "All" ? "All subjects" : subject}</option>)}
              </select></label>
              <label>Topic<select value={selectedTopic} disabled={selectedSubject === "All"} onChange={event => setSelectedTopic(event.target.value)}>
                <option value="All">All topics</option>
                {availableTopics.map(topic => <option key={topic} value={topic}>{topic}</option>)}
              </select></label>
              <span className="browser-result-count" role="status">{matchingResults.length} formulae{isSearching ? " found" : " to explore"}</span>
            </div>}

            {/* Results */}
            <div ref={resultsRef} className="results">
              {visibleResults.map(
                (item, index) => (
                  <Fragment key={item.id}>
                  {!isSearching && sections.some((_, sectionIndex) =>
                    index === sections.slice(0, sectionIndex).reduce((total, section) => total + section.items.length, 0)
                  ) && (
                    <h3 className="results-section-label">
                      {sections.find((_, sectionIndex) =>
                        index === sections.slice(0, sectionIndex).reduce((total, section) => total + section.items.length, 0)
                      )?.label}
                    </h3>
                  )}
                  <div
                    className={`formula-card ${
                      index ===
                      selectedIndex
                        ? "selected"
                        : ""
                    }`}
                    key={item.id}
                    role="group"
                    tabIndex={0}
                    aria-label={item.name}
                    onFocus={() => setSelectedIndex(index)}
                    onClick={() => {
                      scrollSelection.current = false;
                      setSelectedIndex(index);
                      setExpandedId((current) => current === item.id ? null : item.id);
                    }}
                    onMouseMove={() => {
                      scrollSelection.current = false;
                      setSelectedIndex(index);
                    }}
                  >
                    <div className="formula-summary">
                    <div className="formula-main">
                      <span className="metadata">
                        {item.subject} ·{" "}
                        {item.topic}
                      </span>

                      <h2>
                        {item.name}
                      </h2>
                    </div>

                    <div className="formula-actions">
                      <button
                        type="button"
                        className="favorite-toggle"
                        aria-pressed={favoriteSet.has(item.id)}
                        aria-label={`${favoriteSet.has(item.id) ? "Remove" : "Add"} ${item.name} ${favoriteSet.has(item.id) ? "from" : "to"} favorites`}
                        title={favoriteSet.has(item.id) ? "Remove from Favorites" : "Add to Favorites"}
                        onClick={(event) => {
                          event.stopPropagation();
                          scrollSelection.current = false;
                          toggleFavorite(item.id);
                        }}
                      >
                        <span aria-hidden="true">{favoriteSet.has(item.id) ? "★" : "☆"}</span>
                      </button>
                      <button
                        className="details-toggle"
                        aria-expanded={expandedId === item.id}
                        aria-controls={`details-${item.id}`}
                        aria-label={`${expandedId === item.id ? "Collapse" : "Expand"} ${item.name}`}
                        onClick={(event) => {
                          event.stopPropagation();
                          setSelectedIndex(index);
                          setExpandedId((current) => current === item.id ? null : item.id);
                        }}
                      >
                        <span aria-hidden="true">{expandedId === item.id ? "⌃" : "⌄"}</span>
                      </button>
                      <button
                        onClick={(event) => {
                          event.stopPropagation();
                          void copyFormula(item);
                        }}
                      >
                        Copy
                      </button>
                    </div>
                    <FormulaEquation math={item.latex} />
                    </div>
                    <div id={`details-${item.id}`} hidden={expandedId !== item.id} className="formula-details">
                      {!!item.variables?.length && (
                        <>
                          <h3>Variables</h3>
                          <dl className="variable-list">
                            {item.variables.map((variable, variableIndex) => (
                              <div className="variable-row" key={`${variable.symbol}-${variableIndex}`}>
                                <dt>{variable.symbol}</dt>
                                <dd>
                                  <span>{variable.name}</span>
                                  {variable.unit && <span className="variable-unit">{variable.unit}</span>}
                                </dd>
                              </div>
                            ))}
                          </dl>
                        </>
                      )}
                      {item.notes && (
                        <div className="formula-notes">
                          <h3>Notes</h3>
                          <p>{item.notes}</p>
                        </div>
                      )}
                      {item.booklet && <div className="formula-provenance">
                        <h3>Formula booklet · page {item.booklet.page}</h3>
                        <p>Printed in Pearson’s IAL Mathematics Formula Book (Issue 2, 2021).</p>
                        <a href={`${PEARSON_FORMULA_BOOK}#page=${item.booklet.page + 6}`} target="_blank" rel="noreferrer" onClick={event => {
                          event.stopPropagation();
                          if (isDesktop) {
                            event.preventDefault();
                            void openUrl(`${PEARSON_FORMULA_BOOK}#page=${item.booklet!.page + 6}`).catch(error => {
                              console.error("Could not open formula booklet:", error);
                              setCopyError("Could not open the source. Please try again.");
                            });
                          }
                        }}>Open the official formula booklet</a>
                      </div>}
                      {item.examKnowledge && <div className="formula-provenance">
                        <h3>Exam extra · {item.examKnowledge.section}</h3>
                        <p>{item.examKnowledge.status === "derived-not-printed"
                          ? "Working relationship for a syllabus skill; not printed as an equation in the IAL booklet or specification."
                          : "Derived aid built from an equation printed in the specification."}</p>
                        <a href={IAL_SPECIFICATION} target="_blank" rel="noreferrer" onClick={event => {
                          event.stopPropagation();
                          if (isDesktop) {
                            event.preventDefault();
                            void openUrl(IAL_SPECIFICATION).catch(error => {
                              console.error("Could not open specification:", error);
                              setCopyError("Could not open the source. Please try again.");
                            });
                          }
                        }}>Pearson IAL specification (2018 course)</a>
                      </div>}
                      {!item.variables?.length && !item.notes && (
                        <p className="details-empty">No additional details available.</p>
                      )}
                    </div>
                  </div>
                  </Fragment>
                )
              )}

              {visibleResults.length ===
                0 && (
                <p className="empty">
                  {collection === "booklet" && selectedTopic === "Mechanics 1"
                    ? "No dedicated M1 formulae are printed in the booklet. M1 can also use the supplied Pure 1 and Pure 2 formulae."
                    : selectedSubject === "Further Mathematics" && selectedTopic === "Decision 1"
                    ? "Pearson’s formula booklet lists no required formulae for Decision Mathematics D1."
                    : collection !== "all"
                    ? `No ${collectionLabel.toLowerCase()} formulae match. Change your search or filters.`
                    : isSearching
                    ? "No formulas found."
                    : favoriteIds.length || recentIds.length
                      ? "No favorites or recents match these filters. Search for a formula or change your filters."
                      : "Search for a formula to get started. Star favorites or copy formulas to find them here."}
                </p>
              )}
            </div>

            {!isDesktop && matchingResults.length > visibleResults.length && <button className="browser-show-more" onClick={() => { scrollSelection.current = false; setBrowserLimit(limit => limit + 24); }}>Show more formulae ({matchingResults.length - visibleResults.length} remaining)</button>}
            {copyError && <p className="copy-error" role="alert">{copyError}</p>}
            <div className="footer">
              <span>
                ↑↓ Navigate
              </span>
              <span>
                Space Details
              </span>
              <span>
                Enter Copy
              </span>
              {isDesktop && <span>
                Esc Close
              </span>}
            </div>
          </>
        ) : (
          <div className="settings-panel">
            <div className="settings-header">
              <h2>Settings</h2>

              <button
                className="settings-close"
                onClick={() => {
                  setShowSettings(false);

                  setTimeout(() => {
                    searchRef.current?.focus();
                  }, 50);
                }}
              >
                Done
              </button>
            </div>

            {/* Search Scope */}
            <div className="settings-section-label">
              Appearance
            </div>

            <div className="setting-row">
              <div><strong>Reduce transparency</strong><p>A more solid surface for easier reading</p></div>
              <label className="switch">
                <input type="checkbox" aria-label="Reduce transparency" checked={reduceTransparency}
                  onChange={event => setReduceTransparency(event.target.checked)} />
                <span className="slider" />
              </label>
            </div>

            <div className="settings-section-label">Search Scope</div>

            {/* Subject */}
            <div className="setting-row">
              <div>
                <strong>Subject</strong>

                <p>
                  Limit search to one
                  subject
                </p>
              </div>

              <select
                className="setting-select setting-select-wide"
                value={selectedSubject}
                onChange={(event) => {
                  const value =
                    event.target
                      .value as SubjectFilter;

                  setSelectedSubject(
                    value
                  );

                  setSelectedTopic(
                    "All"
                  );
                }}
              >
                <option value="All">
                  All
                </option>

                <option value="Physics">
                  Physics
                </option>

                <option value="Maths">
                  Maths
                </option>

                <option value="Further Mathematics">
                  Further Mathematics
                </option>

              </select>
            </div>

            {/* Topic */}
            {selectedSubject !==
              "All" && (
              <div className="setting-row">
                <div>
                  <strong>
                    Topic
                  </strong>

                  <p>
                    Limit search to one
                    topic
                  </p>
                </div>

                <select
                  className="setting-select setting-select-topic"
                  value={
                    selectedTopic
                  }
                  onChange={(event) =>
                    setSelectedTopic(
                      event.target.value
                    )
                  }
                >
                  <option value="All">
                    All Topics
                  </option>

                  {availableTopics.map(
                    (topic) => (
                      <option
                        key={topic}
                        value={topic}
                      >
                        {topic}
                      </option>
                    )
                  )}
                </select>
              </div>
            )}

            {/* Window */}
            {isDesktop && <>
            <ShortcutSettings />
            <div className="settings-section-label">
              Window
            </div>

            {/* Always on Top */}
            <div className="setting-row">
              <div>
                <strong>
                  Always on Top
                </strong>

                <p>
                  Keep FormulaSnap above
                  other windows
                </p>
              </div>

              <label className="switch">
                <input
                  type="checkbox"
                  checked={
                    alwaysOnTop
                  }
                  onChange={(event) =>
                    setAlwaysOnTop(
                      event.target
                        .checked
                    )
                  }
                />

                <span className="slider" />
              </label>
            </div>

            </>}

            <div className="settings-footer">
              Settings are saved
              automatically
            </div>
          </div>
        )}
      </div>
    </main>
  );
}

export default App;
