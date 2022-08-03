import styled from 'styled-components';

import { Text } from 'components/Text';

interface ContainerProps {
  show?: boolean;
}

export const Container = styled.div<ContainerProps>`
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
  z-index: 999;
`;

export const PermissionText = styled(Text)`
  text-align: center;
`;
