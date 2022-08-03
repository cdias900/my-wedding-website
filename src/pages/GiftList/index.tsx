import { useLayoutEffect } from 'react';
import { useTranslation } from 'react-i18next';

import { Subtitle, Title, GiftListItem } from 'components';

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

  useLayoutEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
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
