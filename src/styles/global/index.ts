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

const DEVICES_WIDTH = {
  mobile: 680,
  tablet: 860,
  small: 1150,
  desktop: 1600,
};

const DEVICES = {
  mobile: `(max-width: ${DEVICES_WIDTH.mobile}px)`,
  tablet: `(max-width: ${DEVICES_WIDTH.tablet}px)`,
  small: `(max-width: ${DEVICES_WIDTH.small}px)`,
  desktop: `(max-width: ${DEVICES_WIDTH.desktop}px)`,
};

export { GlobalStyle, DEVICES, DEVICES_WIDTH };
