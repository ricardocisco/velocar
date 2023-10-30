import React from 'react';
import AppRoutes from '../src/Routes';
import { ThemeProvider } from 'styled-components';
import { Theme } from './styles/theme';
import { GlobalStyle } from './styles/GlobalStyle';

function App() {
  return (
    <ThemeProvider theme={Theme}>
      <AppRoutes/>
      <GlobalStyle/>
    </ThemeProvider>
  );
}

export default App;
