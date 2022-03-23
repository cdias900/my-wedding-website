import { GlobalStyle } from 'styles/global';
import { ThemeProvider } from 'styled-components';
import { defaultTheme } from 'styles/themes/default';

import { Routes } from 'routes';

import { ShowHeaderProvider } from 'hooks';

const App = () => (
  <ThemeProvider theme={defaultTheme}>
    <ShowHeaderProvider>
      <GlobalStyle />
      <Routes />
    </ShowHeaderProvider>
  </ThemeProvider>
);

export default App;
