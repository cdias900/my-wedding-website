import styled from 'styled-components';

export const Container = styled.div`
  width: 100vw;
  height: 70px;
  margin: 0 auto;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

export const Title = styled.h1`
  font-family: 'Pinyon Script', cursive;
  color: ${({ theme }) => theme.blue};
  font-size: 34px;
  font-weight: 400;
`;
