import styled from 'styled-components';

import { DEVICES } from 'styles/global';

export const Container = styled.div`
  width: 100%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
  padding: 3.2rem 0;
  border-top: 0.1rem solid ${({ theme }) => theme.lightGray};

  @media ${DEVICES.tablet} {
    padding: 2.4rem 0;
  }

  @media ${DEVICES.mobile} {
    padding: 1.2rem 0;
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

export const Subtitle = styled.span`
  font-family: 'Volkhov', serif;
  font-size: 1.6rem;
  font-weight: 700;
  font-style: italic;
  color: ${({ theme }) => theme.blue};
  margin: 1.4rem 0 2rem;

  @media ${DEVICES.tablet} {
    font-size: 1.4rem;
    margin: 1rem 0 1.5rem;
  }

  @media ${DEVICES.mobile} {
    font-size: 1.2rem;
    margin: 0.7rem 0 1rem;
  }
`;

export const CopyrightText = styled.span`
  font-family: 'Nunito', sans-serif;
  font-size: 1rem;
  color: ${({ theme }) => theme.black};
`;
