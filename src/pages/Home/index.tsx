import { RefObject, useCallback, useEffect, useMemo, useRef } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

import {
  AboutUsSection,
  Button,
  CountdownSection,
  GallerySection,
  HistorySection,
} from 'components';

import {
  Container,
  CoverImageContainer,
  ImageBackdrop,
  ImageLabel,
  ImageUpperLabel,
} from './styles';

const Home = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const indexRef = useRef<HTMLDivElement>(null);
  const aboutUsRef = useRef<HTMLDivElement>(null);
  const historyRef = useRef<HTMLDivElement>(null);
  const galleryRef = useRef<HTMLDivElement>(null);

  const scrollToRef = useCallback((ref: RefObject<HTMLDivElement>) => {
    const scrollTarget = ref.current?.offsetTop || 0;
    window.scrollTo({
      top: scrollTarget - (window.scrollY > scrollTarget ? 200 : 10),
      behavior: 'smooth',
    });
  }, []);

  const sections = useMemo(
    () => ({
      '/': indexRef,
      '/about-us': aboutUsRef,
      '/history': historyRef,
      '/gallery': galleryRef,
    }),
    [],
  );

  useEffect(() => {
    const sectionRef = sections[location.pathname as keyof typeof sections];
    if (sectionRef) scrollToRef(sectionRef);
  }, [location, sections, scrollToRef]);

  return (
    <Container ref={indexRef}>
      <CoverImageContainer>
        <ImageBackdrop>
          <ImageUpperLabel>Nosso Casamento</ImageUpperLabel>
          <ImageLabel>Pedro & Gabi</ImageLabel>
          <Button label="Nossa História" onClick={() => navigate('/history')} />
        </ImageBackdrop>
      </CoverImageContainer>
      <CountdownSection />
      <AboutUsSection ref={aboutUsRef} />
      <HistorySection ref={historyRef} />
      <GallerySection ref={galleryRef} />
    </Container>
  );
};

export { Home };
