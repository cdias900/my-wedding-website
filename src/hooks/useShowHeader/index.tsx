import React, {
  createContext,
  useState,
  useContext,
  useEffect,
  useCallback,
  useRef,
} from 'react';

import { BodyStyle } from './styles';

export interface IShowHeaderContextData {
  showHeader: boolean;
  showVerticalNavBar: boolean;
  toggleVerticalNavBar: () => void;
}

export const ShowHeaderContext = createContext<IShowHeaderContextData>(
  {} as IShowHeaderContextData,
);

export const ShowHeaderProvider: React.FC = ({ children }) => {
  const lastScrollY = useRef(window.scrollY);
  const bodyTop = useRef(0);
  const [showHeader, setShowHeader] = useState(true);
  const [showVerticalNavBar, setShowVerticalNavBar] = useState(false);

  const handleShowHeader = useCallback(() => {
    setShowHeader(window.scrollY < lastScrollY.current);
    lastScrollY.current = window.scrollY;
  }, []);

  const toggleVerticalNavBar = useCallback(() => {
    setShowVerticalNavBar(show => {
      if (show) bodyTop.current = parseInt(document.body.style.top, 10);
      else document.body.style.top = `-${lastScrollY.current}px`;

      return !show;
    });
  }, []);

  useEffect(() => {
    window.addEventListener('scroll', handleShowHeader);

    return () => {
      window.removeEventListener('scroll', handleShowHeader);
    };
  }, [handleShowHeader]);

  useEffect(() => {
    console.log('BODY TOP', bodyTop.current);

    window.scrollTo(0, bodyTop.current * -1);
  }, [showVerticalNavBar]);

  return (
    <ShowHeaderContext.Provider
      value={{ showHeader, showVerticalNavBar, toggleVerticalNavBar }}
    >
      <BodyStyle preventScroll={showVerticalNavBar} />
      {children}
    </ShowHeaderContext.Provider>
  );
};

// Hook
export function useShowHeader(): IShowHeaderContextData {
  // Get data from context
  const context = useContext(ShowHeaderContext);

  // If user is not using context provider (DEV purposes only)
  if (!context)
    throw new Error('useShowHeader must be used within a ShowHeaderProvider');

  return context;
}
