import { useEffect, useLayoutEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useLocation } from 'react-router-dom';

import { Subtitle, Title, GiftListItem } from 'components';

import { trackEvent } from 'utils/analytics';

import { giftLists } from './constants';

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

  useLayoutEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  }, []);

  useEffect(() => {
    trackEvent('page_changed', { page: location.pathname });
  }, [location.pathname]);

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
