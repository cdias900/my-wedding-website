import { ButtonHTMLAttributes } from 'react';

import { Btn } from './styles';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  label: string;
  textColor?: string;
  bgColor?: string;
  borderColor?: string;
}

const Button = ({ label, ...rest }: ButtonProps) => (
  <Btn {...rest}>{label}</Btn>
);

export { Button };
