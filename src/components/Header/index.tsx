import Plant from 'assets/icons/plant.svg';

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
    </Container>
  );
};

export { Header };
