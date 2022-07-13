import Plant from 'assets/icons/plant.svg';

import { useShowHeader } from 'hooks';

import {
  BurgerBar,
  BurgerContainer,
  Container,
  Title,
  TitleContainer,
} from './styles';

const Header = () => {
  const { showHeader, toggleVerticalNavBar } = useShowHeader();

  return (
    <Container show={showHeader}>
      <TitleContainer>
        <Title>Pedro & Gabi</Title>
        <img src={Plant} alt="Plant" />
      </TitleContainer>
      <BurgerContainer onClick={toggleVerticalNavBar}>
        <BurgerBar />
        <BurgerBar />
        <BurgerBar />
      </BurgerContainer>
    </Container>
  );
};

export { Header };
