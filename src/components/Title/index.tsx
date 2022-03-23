import { FC, HTMLAttributes } from 'react';

import { StyledTitle } from './styles';

const Title: FC<HTMLAttributes<HTMLHeadingElement>> = ({
  children,
  ...rest
}) => <StyledTitle {...rest}>{children}</StyledTitle>;

export { Title };
