import Plant from 'assets/plant.svg';

import { Button } from 'components/Button';

import { Container, Title, TitleContainer } from './styles';

const Header = () => (
  <Container>
    <TitleContainer>
      <Title>Pedro & Gabi</Title>
      <img src={Plant} alt="Plant" />
    </TitleContainer>
    <Button
      type="button"
      label="Confirmar Presença"
      style={{ position: 'absolute', right: '10%' }}
    />
  </Container>
);

export { Header };
