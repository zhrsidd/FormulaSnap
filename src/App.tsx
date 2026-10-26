import Fuse from "fuse.js";
import {
  Fragment,
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";

import { BlockMath } from "react-katex";
import { listen } from "@tauri-apps/api/event";
import { getCurrentWindow } from "@tauri-apps/api/window";
import { invoke, isTauri } from "@tauri-apps/api/core";

import "katex/dist/katex.min.css";
import "./App.css";

import { AppUpdates } from "./components/AppUpdates";

import { formulas } from "./data/formulas";

type SubjectFilter =
  | "All"
  | "Physics"
  | "Maths";

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
        saved === "Maths"
      ) {
        return saved;
      }

      return "All";
    });

  const [selectedTopic, setSelectedTopic] = useState(
    () =>
      localStorage.getItem("formulasnap-topic") ??
      "All"
  );

  const searchRef = useRef<HTMLInputElement>(null);
  const resultsRef = useRef<HTMLDivElement>(null);
  const scrollSelection = useRef(true);
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

      return matchesSubject && matchesTopic;
    });
  }, [selectedSubject, selectedTopic]);

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
      { label: selectedTopic, items: selectedTopic === "All" ? [] : filteredFormulas.filter((item) => !savedIds.has(item.id)) },
    ].filter((section) => section.items.length > 0);
  }, [isSearching, query, fuse, filteredFormulas, favoriteIds, recentIds, favoriteSet, selectedTopic]);
  const visibleResults = useMemo(() => sections.flatMap((section) => section.items), [sections]);

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
    scrollSelection.current = true;
    setSelectedIndex(0);
    setExpandedId(null);
  }, [
    query,
    selectedSubject,
    selectedTopic,
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
        // Preserve native Space activation for buttons and settings controls.
        if (target instanceof HTMLElement &&
            target.closest("button, select, textarea, [contenteditable='true']")) {
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
          event.target.closest("button, select, textarea, [contenteditable='true']")) {
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
      <div className="panel">
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
            <h1>FormulaSnap</h1>

            <p className="subtitle">
              Find the formula you need,
              instantly.
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
              autoFocus
            />

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

                      <div className="equation">
                        <BlockMath
                          math={
                            item.latex
                          }
                        />
                      </div>
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
                  {isSearching
                    ? "No formulas found."
                    : favoriteIds.length || recentIds.length
                      ? "No favorites or recents match these filters. Search for a formula or change your filters."
                      : "Search for a formula to get started. Star favorites or copy formulas to find them here."}
                </p>
              )}
            </div>

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
              Search Scope
            </div>

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