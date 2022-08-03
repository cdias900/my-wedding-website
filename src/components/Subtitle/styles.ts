import styled from 'styled-components';

import { DEVICES } from 'styles/global';

export const StyledSubtitle = styled.span`
  font-family: 'Pinyon Script', cursive;
  font-size: 3.4rem;
  color: ${({ theme }) => theme.blue};

  @media ${DEVICES.small} {
    font-size: 3rem;
  }

  @media ${DEVICES.tablet} {
    font-size: 2.5rem;
  }

  @media ${DEVICES.mobile} {
    font-size: 1.7rem;
  }
`;
