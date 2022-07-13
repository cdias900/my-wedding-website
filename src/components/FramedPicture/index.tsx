import { HTMLAttributes, memo } from 'react';

import { Picture, PictureContainer, PictureFrame } from './styles';

interface FramedPictureProps extends HTMLAttributes<HTMLImageElement> {
  image: string;
  frameColor: string;
  pictureHeight?: number;
}

const FramedPicture = memo(
  ({ image, frameColor, ...rest }: FramedPictureProps) => (
    <PictureContainer>
      <Picture src={image} {...rest} />
      <PictureFrame frameColor={frameColor} />
    </PictureContainer>
  ),
);

export { FramedPicture };
