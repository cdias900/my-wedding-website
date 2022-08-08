import styled from 'styled-components';

import { DEVICES } from 'styles/global';

export const Container = styled.div`
  width: 100vw;
  transition: all 0.3s;
  padding-top: 20rem;

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
