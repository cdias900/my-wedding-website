import React, {
  createContext,
  useState,
  useContext,
  useEffect,
  useCallback,
  useRef,
} from 'react';

import { DEVICES_WIDTH } from 'styles/global';

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
  const [showHeader, setShowHeader] = useState(true);
  const [showVerticalNavBar, setShowVerticalNavBar] = useState(false);

  const handleShowHeader = useCallback(() => {
    setShowHeader(window.scrollY < lastScrollY.current);
    lastScrollY.current = window.scrollY;
  }, []);

  const toggleVerticalNavBar = useCallback(() => {
    if (document.body.offsetWidth > DEVICES_WIDTH.tablet) return;

    setShowVerticalNavBar(show => {
      if (show) {
        const bodyTop = parseInt(document.body.style.top, 10);
        document.body.style.top = '';
        document.body.style.position = '';
        document.body.style.overflowY = '';
        document.getElementsByTagName('html')[0].style.overflowY = '';
        window.scrollTo({ top: bodyTop * -1 });
      } else {
        document.body.style.position = 'fixed';
        document.body.style.overflowY = 'hidden';
        document.getElementsByTagName('html')[0].style.overflowY = 'hidden';
        document.body.style.top = `-${lastScrollY.current}px`;
      }

      return !show;
    });
  }, []);

  useEffect(() => {
    window.addEventListener('scroll', handleShowHeader);

    return () => {
      window.removeEventListener('scroll', handleShowHeader);
    };
  }, [handleShowHeader]);

  return (
    <ShowHeaderContext.Provider
      value={{ showHeader, showVerticalNavBar, toggleVerticalNavBar }}
    >
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
