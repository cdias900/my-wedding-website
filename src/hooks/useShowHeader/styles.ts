import { createGlobalStyle, css } from 'styled-components';

interface BodyStyleProps {
  preventScroll?: boolean;
}

export const BodyStyle = createGlobalStyle<BodyStyleProps>`
    ${({ preventScroll }) =>
      preventScroll &&
      css`
        html,
        body {
          overflow-y: hidden;
          position: fixed;
        }
      `}
`;
