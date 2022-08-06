import styled from 'styled-components';

import { DEVICES } from 'styles/global';

interface ContainerProps {
  show?: boolean;
  avoidHeader?: boolean;
}

export const Container = styled.div<ContainerProps>`
  position: fixed;
  right: 0;
  top: ${({ avoidHeader }) => (avoidHeader ? 19.2 : 0)}rem;
  max-width: 70vw;
  margin: 2rem;
  z-index: 999;
  transform: translateY(${({ show }) => (show ? 0 : '-40rem')});
  transition: all 0.3s;

  @media ${DEVICES.tablet} {
    top: 10rem;
  }

  @media ${DEVICES.mobile} {
    top: 7rem;
  }
`;
