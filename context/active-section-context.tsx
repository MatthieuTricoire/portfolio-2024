"use client";

import type { SectionName } from "@/types/types";
import React, {
  PropsWithChildren,
  SetStateAction,
  createContext,
  useContext,
  useState,
} from "react";

type ActiveSectionContextType = {
  activeSection: SectionName;
  setActiveSection: React.Dispatch<SetStateAction<SectionName>>;
  timeOfLastClick: number;
  setTimeOfLastClick: React.Dispatch<React.SetStateAction<number>>;
};

const ActiveSectionContext = createContext<ActiveSectionContextType | null>(
  null,
);

export const ActiveSectionContextProvider = ({
  children,
}: PropsWithChildren) => {
  const [activeSection, setActiveSection] = useState<SectionName>("Home");

  // we need to keep track of this to disable the scroll observer temporally when user clicks on a link
  const [timeOfLastClick, setTimeOfLastClick] = useState(0);

  return (
    <ActiveSectionContext.Provider
      value={{
        activeSection,
        setActiveSection,
        timeOfLastClick,
        setTimeOfLastClick,
      }}
    >
      {children}
    </ActiveSectionContext.Provider>
  );
};

export const useActiveSectionContext = () => {
  const context = useContext(ActiveSectionContext);

  if (context === null) {
    throw new Error(
      "useActiveSectionContext must be used within an ActiveSectionContextProvider",
    );
  }

  return context;
};
