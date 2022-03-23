import styled from 'styled-components';

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
  width: 360px;
  height: 360px;
  padding: 16px;
`;

export const PictureFrame = styled.div<PictureFrameProps>`
  width: 100%;
  height: 100%;
  border: 1px solid ${({ borderColor }) => borderColor};
`;
