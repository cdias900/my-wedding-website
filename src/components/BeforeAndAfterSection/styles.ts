import styled from 'styled-components';
import { DEVICES } from 'styles/global';

import { FramedPicture } from 'components/FramedPicture';
import { Text } from 'components/Text';

export const BeforeAndAfterContainer = styled.div`
  margin: 2rem auto 0;
  width: 60%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  @media ${DEVICES.desktop} {
    margin: 6rem auto 0;
    width: 85vw;
  }

  @media ${DEVICES.tablet} {
    width: 90vw;
  }

  @media ${DEVICES.mobile} {
    margin: 4.8rem auto 0;
    width: 95vw;
  }
`;

export const ImagesContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
`;

export const ImageContainer = styled.div`
  margin: 0 1.6rem;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
`;

export const Image = styled(FramedPicture).attrs(({ theme }) => ({
  frameColor: theme.white,
}))`
  margin: 1rem 0;
  background-position: 0.1rem 30%;
`;

export const DateText = styled(Text)`
  color: ${({ theme }) => theme.pink};
  font-family: 'Volkhov', serif;
  font-weight: 700;
`;
