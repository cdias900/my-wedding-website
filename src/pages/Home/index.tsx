import { RefObject, useCallback, useEffect, useRef } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

import {
  AboutUsSection,
  Button,
  CountdownSection,
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

  const scrollToRef = useCallback((ref: RefObject<HTMLDivElement>) => {
    const scrollTarget = ref.current?.offsetTop || 0;
    window.scrollTo({
      top: scrollTarget - (window.scrollY > scrollTarget ? 200 : 10),
      behavior: 'smooth',
    });
  }, []);

  useEffect(() => {
    switch (location.pathname) {
      case '/':
        scrollToRef(indexRef);
        break;
      case '/about-us':
        scrollToRef(aboutUsRef);
        break;
      case '/history':
        scrollToRef(historyRef);
        break;
      default:
        break;
    }
  }, [location, scrollToRef]);

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
    </Container>
  );
};

export { Home };
