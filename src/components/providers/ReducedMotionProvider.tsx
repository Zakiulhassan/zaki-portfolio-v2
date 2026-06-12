"use client";

import {
  ReactNode,
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";
import { MotionConfig } from "framer-motion";

const ReducedMotionContext = createContext(false);

/**
 * Central prefers-reduced-motion handling. Framer-motion animations are
 * neutralized via MotionConfig; GSAP/WebGL components read the same flag
 * through `useReducedMotionPref` (or their own matchMedia checks) so WebGL
 * drift, parallax, and long transitions all settle to static states.
 */
export const useReducedMotionPref = () => useContext(ReducedMotionContext);

const ReducedMotionProvider = ({ children }: { children: ReactNode }) => {
  const [reduced, setReduced] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReduced(mq.matches);
    const onChange = (e: MediaQueryListEvent) => setReduced(e.matches);
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, []);

  return (
    <ReducedMotionContext.Provider value={reduced}>
      <MotionConfig reducedMotion="user">{children}</MotionConfig>
    </ReducedMotionContext.Provider>
  );
};

export default ReducedMotionProvider;
