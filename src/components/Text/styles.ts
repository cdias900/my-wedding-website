import styled from 'styled-components';
import { DEVICES } from 'styles/global';

interface StyledTextProps {
  textAlign?: 'left' | 'center' | 'right';
}

export const StyledText = styled.p<StyledTextProps>`
  font-family: 'Nunito', sans-serif;
  font-size: 1.7rem;
  color: ${({ theme }) => theme.black};
  text-align: ${({ textAlign }) => textAlign};

  @media ${DEVICES.small} {
    font-size: 1.6rem;
  }

  @media ${DEVICES.tablet} {
    font-size: 1.5rem;
  }

  @media ${DEVICES.mobile} {
    font-size: 1.2rem;
  }
`;
