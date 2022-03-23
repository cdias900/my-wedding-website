import styled from 'styled-components';

export const CountdownGradient = styled.div`
  margin-top: 96px;
  padding: 48px 0 200px;
  background-image: linear-gradient(#ffffff80, #ffffff20);
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
  margin-top: -96px;
`;

export const Countdown = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.white};
  border-radius: 20px;
  box-shadow: 0 3px 10px ${({ theme }) => theme.lightBlue};
  margin: 0 10px;
  width: 180px;
  height: 195px;
`;

export const CountdownNumber = styled.span`
font-family: 'Volkhov', serif;
font-size: 80px;
font-weight: 700;
color ${({ theme }) => theme.blue};
`;

export const CountdownLabel = styled.span`
  font-family: 'Volkhov', serif;
  font-style: italic;
  font-size: 20px;
  color: ${({ theme }) => theme.gray};
`;
