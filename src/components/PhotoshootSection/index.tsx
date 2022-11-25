import { useCallback, useState } from 'react';
import Gallery, { PhotoClickHandler } from 'react-photo-gallery';
import Carousel, { Modal, ModalGateway } from 'react-images';
import { useTranslation } from 'react-i18next';

import { Subtitle } from 'components/Subtitle';
import { Title } from 'components/Title';

import { trackEvent } from 'utils/analytics';

import { photos } from './constants';

import { PhotoshootContainer } from './styles';

const PhotoshootSection = () => {
  const { t } = useTranslation();

  const [currentImage, setCurrentImage] = useState(0);
  const [isPreviewOpen, setIsPreviewOpen] = useState(false);

  const openPreview: PhotoClickHandler = useCallback((_, { index }) => {
    trackEvent('photoshoot_photo_clicked', { photo: index });
    setCurrentImage(index);
    setIsPreviewOpen(true);
  }, []);

  return (
    <PhotoshootContainer>
      <Subtitle>{t('subtitle.photoshoot')}</Subtitle>
      <Title>{t('title.photoshoot')}</Title>
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
    </PhotoshootContainer>
  );
};

export { PhotoshootSection };
