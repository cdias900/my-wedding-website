import { ThemeProvider } from 'styled-components';

import 'config/i18n';

import { Routes } from 'routes';

import { ShowHeaderProvider } from 'hooks';

import { defaultTheme } from 'styles/themes/default';
import { GlobalStyle } from 'styles/global';

const App = () => (
  <ThemeProvider theme={defaultTheme}>
    <ShowHeaderProvider>
      <GlobalStyle />
      <Routes />
    </ShowHeaderProvider>
  </ThemeProvider>
);

export { App };
