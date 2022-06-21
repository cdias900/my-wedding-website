import styled from 'styled-components';
import { DEVICES } from 'styles/global';

interface GalleryImageContainerProps {
  isSelected?: boolean;
}

export const GalleryContainer = styled.div`
  width: 60%;
  margin: 24rem auto 9.6rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  @media (max-width: ${DEVICES.mobile}) {
    width: 85vw;
    margin: 4.3rem auto;
  }
`;

export const GalleryImageContainer = styled.div<GalleryImageContainerProps>`
  margin: 0 1.5rem;
  height: ${({ isSelected }) => (isSelected ? '75vh' : '65vh')};

  @media (max-width: ${DEVICES.mobile}) {
    margin: 0 0.75rem;
  }
`;

export const GalleryPicture = styled.img`
  height: 100%;
  object-fit: cover;
  object-position: center 30%;
  transition: all 0.2s;
`;
