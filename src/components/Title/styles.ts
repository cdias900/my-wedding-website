import styled from 'styled-components';
import { DEVICES } from 'styles/global';

export const StyledTitle = styled.h2`
  font-family: 'Volkhov', serif;
  font-size: 5.6rem;
  font-weight: 700;
  color: ${({ theme }) => theme.blue};
  margin-bottom: 5rem;
  text-align: center;

  @media (max-width: ${DEVICES.mobile}) {
    font-size: 2.8rem;
    margin-bottom: 2.5rem;
  }
`;
