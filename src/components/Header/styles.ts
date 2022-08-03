import styled from 'styled-components';

import { DEVICES } from 'styles/global';

interface ContainerProps {
  show: boolean;
}

export const Container = styled.div<ContainerProps>`
  width: 100vw;
  margin: 0 auto;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  height: 12.6rem;
  border-bottom: 0.1rem solid ${({ theme }) => theme.lightGray};
  transition: all 0.3s;
  position: fixed;
  top: ${({ show }) => (show ? 0 : -19.2)}rem;
  left: 0;
  background: ${({ theme }) => theme.white};
  z-index: 100;

  @media ${DEVICES.tablet} {
    top: 0;
    height: 10rem;
  }

  @media ${DEVICES.mobile} {
    height: 7rem;
  }
`;

export const TitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: center;
`;

export const Title = styled.h1`
  font-family: 'Pinyon Script', cursive;
  color: ${({ theme }) => theme.blue};
  font-size: 3.4rem;
  font-weight: 400;
  margin-bottom: -0.8rem;
`;

export const BurgerContainer = styled.button`
  display: none;

  :hover {
    filter: brightness(0.9);
  }

  :active {
    filter: brightness(1.1);
  }

  @media ${DEVICES.tablet} {
    display: flex;
    flex-direction: column;
    outline: none;
    border: none;
    cursor: pointer;
    background: transparent;
    position: absolute;
    left: 3.6rem;
    top: 50%;
    transform: translate(-50%, -50%);
  }

  @media ${DEVICES.mobile} {
    left: 2.6rem;
  }
`;

export const BurgerBar = styled.div`
  width: 2.4rem;
  border: 0.1rem solid ${({ theme }) => theme.black};
  border-radius: 0.5rem;
  margin: 0.3rem 0;
`;
