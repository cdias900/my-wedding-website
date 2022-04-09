import styled from 'styled-components';

interface ContainerProps {
  show: boolean;
}

export const Container = styled.div<ContainerProps>`
  width: 100%;
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
