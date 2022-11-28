import { ThemeProvider } from 'styled-components';

import { Routes } from 'routes';

import 'config/firebaseApp';
import 'config/firebaseDatabase';
import 'config/firebaseAnalytics';
import 'config/segment';
import 'config/i18n';

import { NotificationOverlay } from 'components';

import { ShowHeaderProvider } from 'hooks';

import { defaultTheme } from 'styles/themes/default';
import { GlobalStyle } from 'styles/global';

const App = () => (
  <ThemeProvider theme={defaultTheme}>
    <NotificationOverlay />
    <ShowHeaderProvider>
      <GlobalStyle />
      <Routes />
    </ShowHeaderProvider>
  </ThemeProvider>
);

export { App };
