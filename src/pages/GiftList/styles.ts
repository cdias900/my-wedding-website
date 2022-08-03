import styled from 'styled-components';
import { DEVICES } from 'styles/global';

import { Text } from 'components';

export const Container = styled.div`
  width: 100vw;
  transition: all 0.3s;
  padding-top: 20rem;

  @media ${DEVICES.tablet} {
    padding-top: 10rem;
  }

  @media ${DEVICES.mobile} {
    padding-top: 7rem;
  }
`;

export const DescriptionText = styled(Text)`
  width: 40vw;
  text-align: center;
`;

export const GiftGradient = styled.div`
  width: 100%;
  padding: 10rem 20rem;
  background: ${({ theme }) => theme.darkWhite};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  @media ${DEVICES.tablet} {
    padding: 7.5rem 0 15rem;
  }

  @media ${DEVICES.mobile} {
    padding: 5rem 0 10rem;
  }
`;

export const ListsContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  padding: 3.6rem;

  @media ${DEVICES.mobile} {
    margin-top: -10rem;
  }
`;
