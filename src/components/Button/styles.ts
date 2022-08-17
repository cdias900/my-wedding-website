import styled from 'styled-components';

import { DEVICES } from 'styles/global';

interface BtnProps {
  textColor?: string;
  bgColor?: string;
  borderColor?: string;
}

export const Btn = styled.button<BtnProps>`
  font-family: 'Volkhov', serif;
  font-weight: 700;
  font-size: 1.4rem;
  color: ${({ theme, textColor }) => textColor || theme.white};
  background-color: ${({ theme, bgColor }) => bgColor || theme.pink};
  padding: 1.6rem 3.2rem;
  outline: none;
  border: ${({ borderColor }) =>
    borderColor ? `0.2rem solid ${borderColor}` : 'none'};
  cursor: pointer;
  transition: all 0.2s;
  min-width: 18rem;

  :disabled {
    cursor: not-allowed;
    filter: brightness(0.8);
  }

  :hover not:disabled {
    filter: brightness(0.9);
  }

  :active not:disabled {
    filter: brightness(1.1);
  }

  @media ${DEVICES.mobile} {
    font-size: 1.2rem;
    padding: 1.2rem 2.4rem;
  }
`;
