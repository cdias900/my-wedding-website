import { RefObject, useCallback, useEffect, useRef } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

import {
  AboutUsSection,
  Button,
  CountdownSection,
  HistorySection,
} from 'components';

import { useShowHeader } from 'hooks';

import {
  Container,
  CoverImageContainer,
  ImageBackdrop,
  ImageLabel,
  ImageUpperLabel,
} from './styles';

const Home = () => {
  const { showHeader } = useShowHeader();

  const location = useLocation();
  const navigate = useNavigate();

  const aboutUsRef = useRef<HTMLDivElement>(null);
  const historyRef = useRef<HTMLDivElement>(null);

  const scrollToRef = useCallback((ref: RefObject<HTMLDivElement>) => {
    window.scrollTo({
      top: (ref.current?.offsetTop || 0) - 200,
      behavior: 'smooth',
    });
  }, []);

  useEffect(() => {
    switch (location.pathname) {
      case '/':
        window.scrollTo({
          top: 0,
          behavior: 'smooth',
        });
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
    <Container hasTopOffset={showHeader}>
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
