import Plant from 'assets/plant.svg';

import { Container, Title } from './styles';

const Header = () => (
  <Container>
    <Title>Pedro & Gabi</Title>
    <img src={Plant} alt="Plant" />
    <button type="button">Confirmar Presença</button>
  </Container>
);

export { Header };
