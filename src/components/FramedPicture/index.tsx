import { HTMLAttributes } from 'react';

import { Picture, PictureContainer, PictureFrame } from './styles';

interface FramedPictureProps extends HTMLAttributes<HTMLImageElement> {
  image: string;
  frameColor: string;
  pictureHeight?: number;
}

const FramedPicture = ({ image, frameColor, ...rest }: FramedPictureProps) => (
  <PictureContainer>
    <Picture src={image} {...rest} />
    <PictureFrame frameColor={frameColor} />
  </PictureContainer>
);

export { FramedPicture };
