import React, { createContext, useState } from 'react';
import { lightTheme, darkTheme } from '../theme';

export const ThemeContext = createContext();
export const useTheme = () => React.useContext(ThemeContext);
export default ThemeContext;
export const ThemeProvider = ({ children }) => {
  const [isDark, setIsDark] = useState(false);
  const toggleTheme = () => setIsDark(prev => !prev);
  const theme = isDark ? darkTheme : lightTheme;
  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
