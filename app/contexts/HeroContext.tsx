"use client";

import React, { createContext, useContext, useState } from "react";

interface HeroContextType {
  selectedHeroId: number | null;
  setHeroId: (id: number) => void;
}

const HeroContext = createContext<HeroContextType | undefined>(undefined);

export const useHero = (): HeroContextType => {
  const context = useContext(HeroContext);
  if (!context) {
    throw new Error("useHero must be used within a HeroProvider");
  }
  return context;
};

interface HeroProviderProps {
  children: React.ReactNode;
}

export const HeroProvider: React.FC<HeroProviderProps> = ({ children }) => {
  const [selectedHeroId, setSelectedHeroId] = useState<number | null>(null);

  const setHeroId = (id: number) => {
    setSelectedHeroId(id);
  };

  return (
    <HeroContext.Provider value={{ selectedHeroId, setHeroId }}>
      {children}
    </HeroContext.Provider>
  );
};
