import styled from 'styled-components';

import coverImg from 'assets/images/cover.png';

interface ContainerProps {
  hasTopOffset: boolean;
}

export const Container = styled.div<ContainerProps>`
  width: 100%;
  height: 100%;
  margin-top: ${({ hasTopOffset }) => (hasTopOffset ? 192 : 0)}px;
  transition: all 0.3s;
`;

export const CoverImageContainer = styled.div`
  background-image: url(${coverImg});
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  width: 100%;
`;

export const ImageBackdrop = styled.div`
  padding: 400px 0 80px;
  background-image: linear-gradient(#00000020, #00000080);
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  flex-direction: column;
`;

export const ImageLabel = styled.h1`
  font-family: 'Volkhov', serif;
  color: ${({ theme }) => theme.white};
  font-size: 100px;
  font-weight: 400;
  margin-bottom: 50px;
`;

export const ImageUpperLabel = styled.span`
  font-family: 'Volkhov', serif;
  color: ${({ theme }) => theme.white};
  font-size: 28px;
  margin-bottom: 10px;
`;
