import styled from 'styled-components';
import { DEVICES } from 'styles/global';

interface ContainerProps {
  show: boolean;
}

export const Container = styled.nav<ContainerProps>`
  width: 100vw;
  height: 6.6rem;
  margin: 0 auto;
  transition: all 0.3s;
  position: fixed;
  top: ${({ show }) => (show ? 12.6 : -6.6)}rem;
  left: 0;
  background: ${({ theme }) => theme.white};
  z-index: 100;

  @media ${DEVICES.mobile} {
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
