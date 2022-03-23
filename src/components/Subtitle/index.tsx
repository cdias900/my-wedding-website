import { FC, HTMLAttributes } from 'react';

import { StyledSubtitle } from './styles';

const Subtitle: FC<HTMLAttributes<HTMLSpanElement>> = ({
  children,
  ...rest
}) => <StyledSubtitle {...rest}>{children}</StyledSubtitle>;

export { Subtitle };
