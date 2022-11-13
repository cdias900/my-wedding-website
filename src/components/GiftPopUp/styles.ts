import styled, { keyframes } from 'styled-components';

const PulseAnimation = keyframes`
  from {
    transform: scale(0.8);
  }
  to {
    transform: scale(1.2);
  }
`;

export const Container = styled.div`
  position: fixed;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 10rem;
  height: 10rem;
  border-radius: 10rem;
  margin: 2rem;
  background-color: ${({ theme }) => theme.pink};
  right: 0;
  bottom: 0;
  z-index: 999;
  cursor: pointer;
  animation: ${PulseAnimation} 1s linear infinite alternate;

  :hover {
    filter: brightness(0.9);
  }

  :active {
    filter: brightness(1.1);
  }
`;
