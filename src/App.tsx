import React, { useState } from 'react';
import { ThemeProvider } from 'styled-components';
import { lightTheme, darkTheme } from './theme';
import { GlobalStyles } from './global';
import ToggleSwitch from './Components/ToggleSwitch'

export default function App() {

  const [theme, setTheme] = useState('light');
  const toggleTheme = () => {
    if (theme === 'light') {
      setTheme('dark');
    } else {
      setTheme('light');
    }
  }

  return (
    <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
      <>
        <GlobalStyles />
        <ToggleSwitch Name="mode-switch" OnChange={toggleTheme}/>
        <h1>It's a {theme} theme!</h1>
        <footer>
        </footer>
      </>
    </ThemeProvider>
  );
}
