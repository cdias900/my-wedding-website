import Plant from 'assets/icons/plant.svg';

import { Button } from 'components/Button';

import { useShowHeader } from 'hooks';

import { Container, Title, TitleContainer } from './styles';

const Header = () => {
  const { showHeader } = useShowHeader();

  return (
    <Container show={showHeader}>
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
};

export { Header };
