import { forwardRef, useState } from 'react';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Carousel } from 'react-responsive-carousel';

import History01 from 'assets/images/history-01.jpeg';
import History02 from 'assets/images/history-02.jpeg';
import History03 from 'assets/images/history-03.jpeg';
import History04 from 'assets/images/history-04.jpeg';

import { Subtitle } from 'components/Subtitle';
import { Title } from 'components/Title';

import {
  GalleryContainer,
  GalleryImageContainer,
  GalleryPicture,
} from './styles';

const GallerySection = forwardRef<HTMLDivElement>((_, ref) => {
  const [selectedItem, setSelectedItem] = useState(0);

  return (
    <GalleryContainer ref={ref}>
      <Subtitle>Galeria de Fotos</Subtitle>
      <Title>Nossa Galeria</Title>
      <Carousel
        width="100vw"
        centerMode
        centerSlidePercentage={80}
        infiniteLoop
        swipeable
        emulateTouch
        stopOnHover
        showIndicators={false}
        showArrows={false}
        showStatus={false}
        showThumbs={false}
        useKeyboardArrows
        autoFocus
        selectedItem={selectedItem}
        onClickItem={index => setSelectedItem(index)}
        renderItem={(item, options) => (
          <GalleryImageContainer isSelected={options?.isSelected}>
            {item}
          </GalleryImageContainer>
        )}
      >
        <GalleryPicture src={History01} alt="pedro 1" />
        <GalleryPicture src={History02} alt="pedro 1" />
        <GalleryPicture src={History03} alt="pedro 1" />
        <GalleryPicture src={History04} alt="pedro 1" />
      </Carousel>
    </GalleryContainer>
  );
});

export { GallerySection };
