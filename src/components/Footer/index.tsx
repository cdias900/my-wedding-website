import Plant from 'assets/icons/plant.svg';

import {
  Container,
  CopyrightText,
  Subtitle,
  Title,
  TitleContainer,
} from './styles';

const Footer = () => (
  <Container>
    <TitleContainer>
      <Title>Pedro & Gabi</Title>
      <img src={Plant} alt="Plant" />
    </TitleContainer>
    <Subtitle>Casamento de Pedro & Gabi</Subtitle>
    <CopyrightText>
      Designed by Douglas Biagi Grana - Lupim. All rights reserved{' '}
      {new Date().getFullYear()}
    </CopyrightText>
  </Container>
);

export { Footer };
