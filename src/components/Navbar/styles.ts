import styled from 'styled-components';
import { DEVICES } from 'styles/global';

interface Props {
  show: boolean;
}

export const Container = styled.nav<Props>`
  width: 100vw;
  height: 6.6rem;
  margin: 0 auto;
  transition: all 0.3s;
  position: fixed;
  top: ${({ show }) => (show ? 12.6 : -6.6)}rem;
  left: 0;
  background: ${({ theme }) => theme.white};
  z-index: 100;

  @media ${DEVICES.tablet} {
    display: none;
  }
`;

export const Menu = styled.ul`
  width: 60%;
  height: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  list-style: none;
  margin: 0 auto;
`;

export const Backdrop = styled.div<Props>`
  opacity: 0;
  pointer-events: none;

  @media ${DEVICES.tablet} {
    opacity: ${({ show }) => (show ? 1 : 0)};
    pointer-events: ${({ show }) => (show ? 'auto' : 'none')};
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: ${({ theme }) => theme.black}50;
    z-index: 1000;
    transition: all 0.2s;
  }
`;
