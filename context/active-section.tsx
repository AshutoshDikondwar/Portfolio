"use client"

import React, { createContext, useContext, useState } from 'react'
import { links } from '@/lib/data';

type SectionName = (typeof links)[number]["name"]
type ActiveSectionContextProviderProps = {
  children: React.ReactNode
}
type ActiveSectionContextType = {
  activeSection: SectionName;
  setActiveSection: React.Dispatch<React.SetStateAction<SectionName>>;
  timeOfLastClicked: number;
  setTimeOfLastClicked: React.Dispatch<React.SetStateAction<number>>;
}


export const ActiveSectionContext = createContext<ActiveSectionContextType | null>(null)

export default function ActiveSectionContextProvider({ children }: ActiveSectionContextProviderProps) {

  const [activeSection, setActiveSection] = useState<SectionName>("Home");
  const [timeOfLastClicked, setTimeOfLastClicked] = useState(0);

  return (
    <ActiveSectionContext.Provider value={{
      activeSection, setActiveSection,timeOfLastClicked,setTimeOfLastClicked
    }}>{children} </ActiveSectionContext.Provider>
  )
}

export function useActiveSectionContext() {
  const context = useContext(ActiveSectionContext);
  if (context === null) {
    throw new Error(
      "useActiveSectionContext must be used within ActiveSectionContextProvider"
    )
  }
  return context;
}
