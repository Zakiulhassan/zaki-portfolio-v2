export interface FluidCardEntry {
  id: string;
  el: HTMLElement;
  img: HTMLImageElement;
}

type Listener = (entries: Map<string, FluidCardEntry>) => void;

// Module-level singleton so every FluidImage instance and the single
// FluidCardLayer share one registry without prop-drilling or context nesting
// across independently-rendered sections (homepage grid, case study list).
const entries = new Map<string, FluidCardEntry>();
const listeners = new Set<Listener>();

const notify = () => {
  listeners.forEach((listener) => listener(entries));
};

export const registerFluidCard = (entry: FluidCardEntry) => {
  entries.set(entry.id, entry);
  notify();
  return () => {
    entries.delete(entry.id);
    notify();
  };
};

export const subscribeFluidCards = (listener: Listener) => {
  listeners.add(listener);
  listener(entries);
  return () => listeners.delete(listener);
};

let hoveredId: string | null = null;
const hoverListeners = new Set<(id: string | null) => void>();

export const setFluidCardHover = (id: string | null) => {
  hoveredId = id;
  hoverListeners.forEach((listener) => listener(hoveredId));
};

export const subscribeFluidCardHover = (
  listener: (id: string | null) => void
) => {
  hoverListeners.add(listener);
  listener(hoveredId);
  return () => hoverListeners.delete(listener);
};
