import { forwardRef, useCallback, useState } from 'react';
import Gallery, { PhotoClickHandler } from 'react-photo-gallery';
import Carousel, { Modal, ModalGateway } from 'react-images';

import { Subtitle } from 'components/Subtitle';
import { Title } from 'components/Title';

import { photos } from './constans';

import { GalleryContainer } from './styles';

const GallerySection = forwardRef<HTMLDivElement>((_, ref) => {
  const [currentImage, setCurrentImage] = useState(0);
  const [isPreviewOpen, setIsPreviewOpen] = useState(false);

  // eslint-disable-next-line no-shadow
  const openPreview: PhotoClickHandler = useCallback((_, { index }) => {
    setCurrentImage(index);
    setIsPreviewOpen(true);
  }, []);

  return (
    <GalleryContainer ref={ref}>
      <Subtitle>Galeria de Fotos</Subtitle>
      <Title>Nossa Galeria</Title>
      <Gallery onClick={openPreview} photos={photos} />
      <ModalGateway>
        {isPreviewOpen ? (
          <Modal onClose={() => setIsPreviewOpen(false)}>
            <Carousel
              currentIndex={currentImage}
              views={photos.map(photo => ({
                source: photo.src,
              }))}
            />
          </Modal>
        ) : null}
      </ModalGateway>
    </GalleryContainer>
  );
});

export { GallerySection };
