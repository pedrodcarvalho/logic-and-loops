import { createContext, useContext, useEffect, useState } from 'react';

import type { Theme, ThemeContextType } from '@/types';

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const ThemeProvider = ({ children }: { children: React.ReactNode }): React.ReactElement => {
  const [theme, setTheme] = useState<Theme>((): Theme => {
    const storedTheme: Theme | null = localStorage.getItem('theme') as Theme | null;
    if (storedTheme) {
      return storedTheme;
    }

    if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
      return 'dark';
    }

    return 'light';
  });

  useEffect((): void => {
    const root: HTMLElement = document.documentElement;

    root.classList.remove('light', 'dark');

    root.classList.add(theme);

    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = (): void => {
    setTheme((prevTheme: Theme): Theme => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  return <ThemeContext.Provider value={{ theme, toggleTheme }}>{children}</ThemeContext.Provider>;
};

export const useTheme = (): ThemeContextType => {
  const context: ThemeContextType | undefined = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};
