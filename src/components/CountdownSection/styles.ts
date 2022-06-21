import styled from 'styled-components';
import { DEVICES } from 'styles/global';

export const CountdownGradient = styled.div`
  margin-top: 9.6rem;
  padding: 4.8rem 0 20rem;
  background: ${({ theme }) => theme.darkWhite};
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  @media ${DEVICES.mobile} {
    margin-top: 4.8rem;
    padding: 2.4rem 0 10rem;
  }
`;

export const CountdownContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
  width: 40vw;
  margin-top: -10.6rem;

  @media ${DEVICES.mobile} {
    width: 85vw;
    margin-top: -5.6rem;
  }
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

  @media ${DEVICES.mobile} {
    margin: 0 0.5rem;
    width: 9rem;
    height: 9.75rem;
  }
`;

export const CountdownNumber = styled.span`
  font-family: 'Volkhov', serif;
  font-size: 8rem;
  font-weight: 700;
  color ${({ theme }) => theme.blue};

  @media ${DEVICES.mobile} {
    font-size: 4rem;
  }
`;

export const CountdownLabel = styled.span`
  font-family: 'Volkhov', serif;
  font-style: italic;
  font-size: 2rem;
  color: ${({ theme }) => theme.gray};

  @media ${DEVICES.mobile} {
    font-size: 1.5rem;
  }
`;
