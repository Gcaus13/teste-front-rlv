"use client";

import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";

interface MediaQueryContextProps {
  isMobile: boolean;
}

const MediaQueryContext = createContext<MediaQueryContextProps | undefined>(
  undefined
);

// Hook para acessar o contexto
export const useMediaQueryContext = (): MediaQueryContextProps => {
  const context = useContext(MediaQueryContext);
  if (!context) {
    throw new Error(
      "useMediaQueryContext deve ser usado dentro de um MediaQueryProvider"
    );
  }
  return context;
};

// Provedor do contexto
export const MediaQueryProvider = ({ children }: { children: ReactNode }) => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mediaQueryList = window.matchMedia("(max-width: 744px)");

    const updateMatches = () => {
      setIsMobile(mediaQueryList.matches);
    };

    updateMatches();
    mediaQueryList.addEventListener("change", updateMatches);

    return () => {
      mediaQueryList.removeEventListener("change", updateMatches);
    };
  }, []);

  return (
    <MediaQueryContext.Provider value={{ isMobile }}>
      {children}
    </MediaQueryContext.Provider>
  );
};
