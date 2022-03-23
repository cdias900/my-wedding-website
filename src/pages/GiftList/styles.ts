import styled from 'styled-components';

interface ContainerProps {
  hasTopOffset: boolean;
}

export const Container = styled.div<ContainerProps>`
  width: 100%;
  height: 100%;
  margin-top: ${({ hasTopOffset }) => (hasTopOffset ? 192 : 0)}px;
  transition: all 0.3s;
`;
