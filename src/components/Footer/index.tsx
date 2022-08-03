import { useTranslation } from 'react-i18next';

import Plant from 'assets/icons/plant.svg';

import {
  Container,
  CopyrightText,
  Subtitle,
  Title,
  TitleContainer,
} from './styles';

const Footer = () => {
  const { t } = useTranslation();

  return (
    <Container>
      <TitleContainer>
        <Title>Pedro & Gabi</Title>
        <img src={Plant} alt="Plant" />
      </TitleContainer>
      <Subtitle>{t('footer.subtitle')}</Subtitle>
      <CopyrightText>
        {t('footer.copyright', { year: new Date().getFullYear() })}
      </CopyrightText>
    </Container>
  );
};

export { Footer };
