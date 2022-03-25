import React, {
  createContext,
  useState,
  useContext,
  useEffect,
  useCallback,
} from 'react';

export interface IShowHeaderContextData {
  showHeader: boolean;
}

export const ShowHeaderContext = createContext<IShowHeaderContextData>(
  {} as IShowHeaderContextData,
);

export const ShowHeaderProvider: React.FC = ({ children }) => {
  const [lastScrollY, setLastScrollY] = useState(window.scrollY);
  const [showHeader, setShowHeader] = useState(true);

  const handleShowHeader = useCallback(() => {
    setShowHeader(window.scrollY < lastScrollY);
    setLastScrollY(window.scrollY);
  }, [lastScrollY]);

  useEffect(() => {
    window.addEventListener('scroll', handleShowHeader);

    return () => {
      window.removeEventListener('scroll', handleShowHeader);
    };
  }, [handleShowHeader]);

  return (
    <ShowHeaderContext.Provider value={{ showHeader }}>
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
