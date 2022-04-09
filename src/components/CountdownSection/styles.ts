import styled from 'styled-components';

export const CountdownGradient = styled.div`
  margin-top: 9.6rem;
  padding: 4.8rem 0 20rem;
  background: ${({ theme }) => theme.darkWhite};
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
export const CountdownContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
  width: 40vw;
  margin-top: -10.6rem;
`;

export const Countdown = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.white};
  border-radius: 2rem;
  box-shadow: 0 0.3rem 1rem ${({ theme }) => theme.lightBlue};
  margin: 0 1rem;
  width: 18rem;
  height: 19.5rem;
`;

export const CountdownNumber = styled.span`
font-family: 'Volkhov', serif;
font-size: 8rem;
font-weight: 700;
color ${({ theme }) => theme.blue};
`;

export const CountdownLabel = styled.span`
  font-family: 'Volkhov', serif;
  font-style: italic;
  font-size: 2rem;
  color: ${({ theme }) => theme.gray};
`;
