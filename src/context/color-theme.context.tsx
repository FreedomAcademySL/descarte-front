'use client';

import React, { createContext, useState, useEffect, useContext } from 'react';

import { StorageUtils } from '@/utils';

export interface ColorThemeProviderType {
  themeMode: string;
  handleColorMode: () => void;
}

export interface ColorThemeProviderProps {
  children: React.ReactNode;
}

const ColorThemeContext = createContext<ColorThemeProviderType>({
  themeMode: 'light',
  handleColorMode: () => undefined,
});

export const ColorThemeProvider = ({
  children,
}: ColorThemeProviderProps): JSX.Element => {
  const colorModeKey = 'color-theme';
  const [themeMode, setThemeMode] = useState<string>(
    StorageUtils.get(colorModeKey) || 'light',
  );

  const handleColorMode = (): void => {
    const newThemeMode = themeMode === 'light' ? 'dark' : 'light';
    setThemeMode(newThemeMode);
    StorageUtils.set(colorModeKey, newThemeMode);
  };

  useEffect(() => {
    const className = 'dark';
    const bodyClass = window.document.body.classList;
    if (themeMode === 'dark') {
      bodyClass.add(className);
    } else {
      bodyClass.remove(className);
    }
  }, [themeMode]);

  return (
    <ColorThemeContext.Provider value={{ themeMode, handleColorMode }}>
      {children}
    </ColorThemeContext.Provider>
  );
};

export const useColorTheme = (): ColorThemeProviderType =>
  useContext(ColorThemeContext);
