import styled from 'styled-components';

import { Text } from 'components/Text';

interface ModalProps {
  show?: boolean;
}

export const Container = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 9999;
  background-color: ${({ theme }) => theme.black};
  opacity: 0.7;
`;

export const Modal = styled.div<ModalProps>`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: ${({ theme }) => theme.white};
  border: 0.4rem solid ${({ theme }) => theme.pink};
  background-color: ${({ theme }) => theme.darkWhite};
  display: ${({ show }) => (show ? 'flex' : 'none')};
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 3rem 5rem;
  z-index: 99999;
`;

export const ModalText = styled(Text)`
  text-align: center;
`;
