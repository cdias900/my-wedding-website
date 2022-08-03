import styled from 'styled-components';

import { DEVICES } from 'styles/global';

export const StyledTitle = styled.h2`
  font-family: 'Volkhov', serif;
  font-size: 5.6rem;
  font-weight: 700;
  color: ${({ theme }) => theme.blue};
  margin-bottom: 5rem;
  text-align: center;

  @media ${DEVICES.small} {
    font-size: 5rem;
    margin-bottom: 4rem;
  }

  @media ${DEVICES.tablet} {
    font-size: 4rem;
    margin-bottom: 3.5rem;
  }

  @media ${DEVICES.mobile} {
    font-size: 2.8rem;
    margin-bottom: 2.5rem;
  }
`;
