import { FC, HTMLAttributes } from 'react';

import { StyledText } from './styles';

interface TextProps extends HTMLAttributes<HTMLParagraphElement> {
  textAlign?: 'left' | 'center' | 'right';
}

const Text: FC<TextProps> = ({ children, ...rest }) => (
  <StyledText {...rest}>{children}</StyledText>
);

export { Text };
