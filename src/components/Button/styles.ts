import styled from 'styled-components';

export const Btn = styled.button`
  font-family: 'Volkhov', serif;
  font-weight: 700;
  font-size: 1.4rem;
  color: ${({ theme }) => theme.white};
  background-color: ${({ theme }) => theme.pink};
  padding: 1.6rem 3.2rem;
  outline: none;
  border: none;
  cursor: pointer;
  transition: all 0.2s;

  :hover {
    filter: brightness(0.9);
  }

  :active {
    filter: brightness(1.1);
  }
`;
