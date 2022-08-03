import {
  RefObject,
  useCallback,
  useEffect,
  useLayoutEffect,
  useMemo,
  useRef,
  useState,
} from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { DEVICES_WIDTH } from 'styles/global';

import {
  AboutUsSection,
  Button,
  CountdownSection,
  GallerySection,
  GiftPopUp,
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

  const [showGiftPopUp, setShowGiftPopUp] = useState(false);

  const indexRef = useRef<HTMLDivElement>(null);
  const aboutUsRef = useRef<HTMLDivElement>(null);
  const historyRef = useRef<HTMLDivElement>(null);
  const galleryRef = useRef<HTMLDivElement>(null);

  const scrollToRef = useCallback((ref: RefObject<HTMLDivElement>) => {
    const scrollTarget = ref.current?.offsetTop || 0;
    window.scrollTo({
      top:
        scrollTarget -
        (document.body.offsetWidth <= DEVICES_WIDTH.tablet
          ? 110
          : window.scrollY > scrollTarget
          ? 200
          : 10),
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

  useLayoutEffect(() => {
    const sectionRef = sections[location.pathname as keyof typeof sections];
    if (sectionRef) scrollToRef(sectionRef);
  }, [location, sections, scrollToRef]);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowGiftPopUp(true);
    }, 5000);

    return () => clearTimeout(timer);
  }, []);

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
      {showGiftPopUp && <GiftPopUp />}
    </Container>
  );
};

export { Home };
