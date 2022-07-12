import styled, { css } from 'styled-components';
import { DEVICES } from 'styles/global';

interface PictureFrameProps {
  frameColor: string;
}

interface PictureProps {
  pictureHeight?: number;
}

export const PictureContainer = styled.div`
  position: relative;
  margin: 0;
`;

export const Picture = styled.img<PictureProps>`
  width: 36rem;
  object-fit: cover;
  display: block;

  ${({ pictureHeight }) =>
    pictureHeight &&
    css`
      height: ${pictureHeight}rem;

      @media ${DEVICES.tablet} {
        width: 30rem;
        height: ${pictureHeight * 0.8}rem;
      }

      @media ${DEVICES.mobile} {
        width: 16rem;
        height: ${pictureHeight * 0.45}rem;
      }
    `}

  @media ${DEVICES.tablet} {
    width: ${undefined};
    padding: 1.2rem;
  }

  @media ${DEVICES.mobile} {
    padding: 0.8rem;
  }
`;

export const PictureFrame = styled.div<PictureFrameProps>`
  pointer-events: none;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 90%;
  height: 85%;
  border: 0.1rem solid ${({ frameColor }) => frameColor};

  @media ${DEVICES.tablet} {
    width: 80%;
    height: 80%;
  }

  @media ${DEVICES.mobile} {
    width: 85%;
    height: 80%;
  }
`;
