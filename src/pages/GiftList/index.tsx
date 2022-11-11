import { useEffect, useLayoutEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useLocation } from 'react-router-dom';
import { onValue, ref } from 'firebase/database';

import { database } from 'config/firebase';

import { Subtitle, Title, GiftListItem, GiftItem } from 'components';

import { trackEvent } from 'utils/analytics';

import { giftLists, standaloneGifts } from './constants';

import {
  Container,
  DescriptionText,
  GiftGradient,
  ListsContainer,
  PixImage,
  PixKeyText,
} from './styles';

const GiftList = () => {
  const { t } = useTranslation();
  const location = useLocation();

  const [giftValues, setGiftValues] = useState<{
    [key: string]: { target: number; reached: number; url: string };
  }>({});

  useLayoutEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  }, []);

  useEffect(() => {
    trackEvent('page_changed', { page: location.pathname });
  }, [location.pathname]);

  useEffect(() => {
    const unsubscribe = onValue(ref(database, 'standaloneGifts'), snapshot => {
      const data = snapshot.val();
      setGiftValues(data);
    });

    return unsubscribe;
  }, []);

  return (
    <Container>
      <GiftGradient>
        <Title>{t('title.giftList')}</Title>
        <DescriptionText>{t('text.giftList')}</DescriptionText>
      </GiftGradient>
      <ListsContainer>
        {giftLists.map(list => (
          <GiftListItem key={list.title} {...list} />
        ))}
      </ListsContainer>
      <GiftGradient>
        <Title>{t('title.standaloneGifts')}</Title>
        <DescriptionText>{t('text.standaloneGifts')}</DescriptionText>
      </GiftGradient>
      <ListsContainer>
        {standaloneGifts.map(gift => (
          <GiftItem key={gift.title} {...gift} {...giftValues[gift.title]} />
        ))}
      </ListsContainer>
      <GiftGradient>
        <Subtitle>Pix</Subtitle>
        <Title>{t('title.pix')}</Title>
        <DescriptionText>{t('text.pix1')}</DescriptionText>
        <PixImage />
        <DescriptionText>
          {t('text.pix2')}{' '}
          <PixKeyText>casamentogabiepedro@cdias.dev</PixKeyText>
        </DescriptionText>
      </GiftGradient>
    </Container>
  );
};

export { GiftList };
