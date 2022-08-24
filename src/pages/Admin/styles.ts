import styled from 'styled-components';

import { DEVICES } from 'styles/global';

interface IconButtonProps {
  active?: boolean;
}

export const Container = styled.div`
  width: 100vw;
  transition: all 0.3s;
  padding-top: 20rem;
  display: flex;
  justify-content: center;
  flex-direction: column;

  @media ${DEVICES.tablet} {
    padding-top: 10rem;
  }

  @media ${DEVICES.mobile} {
    padding-top: 7rem;
  }
`;

export const FormContainer = styled.form`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 10rem;

  @media ${DEVICES.tablet} {
    padding: 7rem;
  }

  @media ${DEVICES.mobile} {
    padding: 5rem;
  }
`;

export const Input = styled.input`
  outline: none;
  border: none;
  border-bottom: 1px solid ${({ theme }) => theme.blue};
  margin-left: 0.8rem;
`;

export const InputContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  margin-bottom: 1rem;
`;

export const ButtonsContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
`;

export const Table = styled.table.attrs({
  align: 'center',
})`
  align-self: center;
  justify-self: center;
  border: 1px solid ${({ theme }) => theme.black};
  border-collapse: collapse;
  font-family: 'Nunito', sans-serif;
  font-size: 1.7rem;
  width: 40vw;
  text-align: center;
  margin-bottom: 1.6rem;

  @media ${DEVICES.tablet} {
    width: 70vw;
  }

  @media ${DEVICES.mobile} {
    width: 85vw;
  }

  td,
  th {
    border: 1px solid ${({ theme }) => theme.black};
    padding: 0.8rem;
  }

  th {
    background-color: ${({ theme }) => theme.lightBlue};
  }
`;

export const Separator = styled.div`
  margin: 0 0.4rem;
`;

export const GuestNameContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const IconButton = styled.button<IconButtonProps>`
  outline: none;
  border: 1px solid ${({ theme }) => theme.black};
  background-color: ${({ theme, active }) =>
    active ? theme.gray : theme.white}50;
  padding: 0.8rem 1.6rem;
  margin: 0 0.8rem;
  cursor: pointer;

  :hover {
    filter: brightness(0.9);
  }

  :active {
    filter: brightness(1.1);
  }
`;
