import styled from 'styled-components';

interface ContainerProps {
  show: boolean;
}

export const Container = styled.nav<ContainerProps>`
  width: 100%;
  height: 6.6rem;
  margin: 0 auto;
  transition: all 0.3s;
  position: fixed;
  top: ${({ show }) => (show ? 12.6 : -6.6)}rem;
  left: 0;
  background: ${({ theme }) => theme.white};
  z-index: 100;
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
