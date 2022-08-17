import styled from 'styled-components';

import { DEVICES } from 'styles/global';

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