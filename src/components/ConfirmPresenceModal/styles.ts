import styled from 'styled-components';

import { DEVICES } from 'styles/global';

interface Props {
  show?: boolean;
}

export const OuterContainer = styled.div<Props>`
  z-index: 1000;
  opacity: ${({ show }) => (show ? 1 : 0)};
  pointer-events: ${({ show }) => (show ? 'auto' : 'none')};
  background-color: ${({ theme }) => theme.white};
  padding: 2rem;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 65vw;
  max-height: 100vh;

  @media ${DEVICES.small} {
    width: 75vw;
  }

  @media ${DEVICES.tablet} {
    width: 80vw;
  }

  @media ${DEVICES.mobile} {
    width: 90vw;
    overflow: auto;
  }
`;

export const Container = styled.div<Props>`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 5rem;
  filter: drop-shadow(0rem 0rem 4rem rgba(154, 156, 194, 0.3));
  z-index: 1000;
  background: linear-gradient(
    149.99deg,
    ${({ theme }) => theme.pink} 11.7%,
    ${({ theme }) => theme.blue} 157.28%
  );
  opacity: ${({ show }) => (show ? 1 : 0)};
  pointer-events: ${({ show }) => (show ? 'auto' : 'none')};

  @media ${DEVICES.small} {
    padding: 5rem 3rem;
  }

  @media ${DEVICES.tablet} {
    padding: 5rem 2rem;
  }

  @media ${DEVICES.mobile} {
    padding: 5rem 1rem;
  }

  > span {
    color: ${({ theme }) => theme.white};
    font-size: 2.5rem;

    @media ${DEVICES.small} {
      font-size: 2.2rem;
    }

    @media ${DEVICES.tablet} {
      font-size: 2rem;
    }

    @media ${DEVICES.mobile} {
      font-size: 1.7rem;
    }
  }

  > h2 {
    color: ${({ theme }) => theme.white};
    font-size: 4.5rem;

    @media ${DEVICES.small} {
      font-size: 4rem;
    }

    @media ${DEVICES.tablet} {
      font-size: 3rem;
    }

    @media ${DEVICES.mobile} {
      font-size: 2.5rem;
    }
  }
`;

export const Backdrop = styled.div<Props>`
  opacity: ${({ show }) => (show ? 1 : 0)};
  pointer-events: ${({ show }) => (show ? 'auto' : 'none')};
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: ${({ theme }) => theme.black}95;
  z-index: 999;
  transition: all 0.2s;
`;

export const Input = styled.input`
  outline: none;
  border: none;
  color: ${({ theme }) => theme.white};
  font-size: 1.6rem;
  border-bottom: 1px solid ${({ theme }) => theme.lightBlue};
  margin-left: 0.8rem;
  background-color: transparent;
  font-family: 'Nunito', sans-serif;
  width: 100%;

  ::placeholder {
    color: ${({ theme }) => theme.white}50;
  }
`;

export const FormContainer = styled.form`
  width: 65%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media ${DEVICES.small} {
    width: 75%;
  }

  @media ${DEVICES.tablet} {
    width: 80%;
  }

  @media ${DEVICES.mobile} {
    width: 95%;
  }
`;

export const InputsContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  margin-bottom: 3.6rem;

  @media ${DEVICES.mobile} {
    margin-bottom: 1.2rem;
  }
`;

export const ErrorMsg = styled.span`
  font-family: 'Nunito', sans-serif;
  font-size: 1.4rem;
  color: red;
  margin: 0.8rem;
`;

export const GuestContainer = styled.div`
  margin: 0.8rem 0;
`;

export const GuestName = styled.span`
  font-family: 'Nunito', sans-serif;
  font-size: 1.6rem;
  color: ${({ theme }) => theme.white};
`;

export const RadioContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin: 0.4rem 0;
`;

export const RadioLabel = styled.label`
  font-family: 'Nunito', sans-serif;
  font-size: 1.4rem;
  color: ${({ theme }) => theme.darkWhite};
  margin: 0 3rem 0 1.2rem;
`;

export const RadioButton = styled.input.attrs({
  type: 'radio',
})``;
