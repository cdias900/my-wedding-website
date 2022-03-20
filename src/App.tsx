import { GlobalStyle } from 'styles/global';
import { ThemeProvider } from 'styled-components';
import { defaultTheme } from 'styles/themes/default';

import { Routes } from 'routes/index';

const App = () => (
  <ThemeProvider theme={defaultTheme}>
    <GlobalStyle />
    <Routes />
  </ThemeProvider>
);

export default App;
