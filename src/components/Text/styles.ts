import styled from 'styled-components';

interface StyledTextProps {
  textAlign?: 'left' | 'center' | 'right';
}

export const StyledText = styled.p<StyledTextProps>`
  font-family: 'Nunito', sans-serif;
  font-size: 17px;
  color: ${({ theme }) => theme.black};
  text-align: ${({ textAlign }) => textAlign};
`;
