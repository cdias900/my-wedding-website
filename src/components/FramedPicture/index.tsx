import { HTMLAttributes } from 'react';

import { Picture, PictureFrame } from './styles';

interface FramedPictureProps extends HTMLAttributes<HTMLImageElement> {
  image: string;
  frameColor: string;
}

const FramedPicture = ({ image, frameColor, ...rest }: FramedPictureProps) => (
  <Picture image={image} {...rest}>
    <PictureFrame borderColor={frameColor} />
  </Picture>
);

export { FramedPicture };
