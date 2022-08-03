import styled from 'styled-components';

import { DEVICES } from 'styles/global';

export const GalleryContainer = styled.div`
  width: 60%;
  margin: 9.6rem auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  @media ${DEVICES.small} {
    width: 75vw;
    margin: 7.5rem auto;
  }

  @media ${DEVICES.tablet} {
    width: 80vw;
    margin: 6rem auto;
  }

  @media ${DEVICES.mobile} {
    width: 85vw;
    margin: 4.3rem auto;
  }
`;
