import styled from 'styled-components';
import { DEVICES } from 'styles/global';

interface PictureProps {
  image: string;
}

interface PictureFrameProps {
  borderColor: string;
}

export const Picture = styled.div<PictureProps>`
  background-image: url(${({ image }) => image});
  background-position: center 30%;
  background-size: cover;
  background-repeat: no-repeat;
  width: 36rem;
  height: 36rem;
  padding: 1.6rem;

  @media ${DEVICES.tablet} {
    width: ${undefined};
    height: 28rem;
    padding: 1.2rem;
  }

  @media ${DEVICES.mobile} {
    height: 18rem;
    padding: 0.8rem;
  }
`;

export const PictureFrame = styled.div<PictureFrameProps>`
  width: 100%;
  height: 100%;
  border: 0.1rem solid ${({ borderColor }) => borderColor};
`;
