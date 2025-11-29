import { initialData } from "@data/config";
import React, { createContext, useContext, useState } from "react";

// Context erstellen
const TimerContext = createContext();

// Provider
export const TimerProvider = ({ children }) => {
  const [state, setState] = useState(initialData);
  return <TimerContext value={{ state, setState }}>{children}</TimerContext>;
};

// Hook zum einfachen Zugriff
export const useTimer = () => useContext(TimerContext);
