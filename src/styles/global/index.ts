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

const DEVICES = {
  mobile: '(max-width: 480px)',
  tablet: '(max-width: 768px)',
  small: '(max-width: 1024px)',
  desktop: '(max-width: 1200px)',
};

export { GlobalStyle, DEVICES };
