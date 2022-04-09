import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  html {
    font-size: 62.5%;
    overflow-x: hidden;
  }

  .carousel .slider-wrapper.axis-horizontal .slider {
    align-items: center;
  }
`;

export { GlobalStyle };
