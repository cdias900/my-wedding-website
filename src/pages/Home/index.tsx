import {
  RefObject,
  useCallback,
  useEffect,
  useLayoutEffect,
  useMemo,
  useRef,
  useState,
} from 'react';
import { useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

import {
  AboutUsSection,
  BeforeAndAfterSection,
  Button,
  ConfirmPresenceModal,
  ConfirmPresenceRef,
  CountdownSection,
  GallerySection,
  GiftPopUp,
  HistorySection,
} from 'components';

import { trackEvent } from 'utils/analytics';

import { DEVICES_WIDTH } from 'styles/global';
import {
  Container,
  CoverImageContainer,
  ImageBackdrop,
  ImageLabel,
  ImageUpperLabel,
} from './styles';

const Home = () => {
  const location = useLocation();
  const { t } = useTranslation();

  const [showGiftPopUp, setShowGiftPopUp] = useState(false);

  const indexRef = useRef<HTMLDivElement>(null);
  const aboutUsRef = useRef<HTMLDivElement>(null);
  const historyRef = useRef<HTMLDivElement>(null);
  const galleryRef = useRef<HTMLDivElement>(null);
  const confirmPresenceRef = useRef<ConfirmPresenceRef>(null);

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

    trackEvent('page_changed', { page: location.pathname });
  }, [location, sections, scrollToRef]);

  useEffect(() => {
    const timer = setTimeout(() => {
      indexRef.current?.click();
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowGiftPopUp(true);
    }, 5000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <Container ref={indexRef}>
      <ConfirmPresenceModal ref={confirmPresenceRef} />
      <CoverImageContainer>
        <ImageBackdrop>
          <ImageUpperLabel>{t('title.wedding')}</ImageUpperLabel>
          <ImageLabel>Pedro & Gabi</ImageLabel>
          <Button
            label={t('text.confirmPresence')}
            onClick={() => {
              trackEvent('confirm_presence_button_clicked');
              confirmPresenceRef.current?.show();
            }}
          />
        </ImageBackdrop>
      </CoverImageContainer>
      <CountdownSection />
      <AboutUsSection ref={aboutUsRef} />
      <HistorySection ref={historyRef} />
      <BeforeAndAfterSection />
      <GallerySection ref={galleryRef} />
      {showGiftPopUp && <GiftPopUp />}
    </Container>
  );
};

export { Home };
