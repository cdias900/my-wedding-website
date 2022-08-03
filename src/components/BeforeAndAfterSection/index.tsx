import { useTranslation } from 'react-i18next';

import BeforeImage from 'assets/images/before.png';
import AfterImage from 'assets/images/after.png';

import { Subtitle } from 'components/Subtitle';
import { Text } from 'components/Text';
import { Title } from 'components/Title';

import { useTheme } from 'hooks';

import {
  BeforeAndAfterContainer,
  DateText,
  Image,
  ImageContainer,
  ImagesContainer,
} from './styles';

const BeforeAndAfterSection = () => {
  const theme = useTheme();
  const { t } = useTranslation();

  return (
    <BeforeAndAfterContainer>
      <Subtitle>{t('subtitle.beforeAndAfter')}</Subtitle>
      <Title>{t('title.beforeAndAfter')}</Title>
      <Text>{t('text.beforeAndAfter1')}</Text>
      <Text>{t('text.beforeAndAfter2')}</Text>
      <ImagesContainer>
        <ImageContainer>
          <Image image={BeforeImage} frameColor={theme.white} />
          <DateText>14.04.2019</DateText>
        </ImageContainer>
        <ImageContainer>
          <Image image={AfterImage} frameColor={theme.white} />
          <DateText>27.04.2022</DateText>
        </ImageContainer>
      </ImagesContainer>
    </BeforeAndAfterContainer>
  );
};

export { BeforeAndAfterSection };
