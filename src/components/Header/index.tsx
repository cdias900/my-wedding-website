/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import Plant from 'assets/icons/plant.svg';

import { useShowHeader } from 'hooks';

import { trackEvent } from 'utils/analytics';

import {
  BurgerBar,
  BurgerContainer,
  Container,
  Title,
  TitleContainer,
} from './styles';

const Header = () => {
  const { showHeader, toggleVerticalNavBar } = useShowHeader();
  const navigate = useNavigate();

  const [clickCount, setClickCount] = useState(0);

  useEffect(() => {
    if (clickCount >= 3) {
      setClickCount(0);
      navigate('/admin');
      trackEvent('admin_page_unlocked');
    }
  }, [clickCount, navigate]);

  return (
    <Container show={showHeader}>
      <TitleContainer>
        <Title>Pedro & Gabi</Title>
        <img
          src={Plant}
          alt="Plant"
          onClick={() =>
            setClickCount(c => {
              trackEvent('admin_plant_clicked', {
                count: c + 1,
              });
              return c + 1;
            })
          }
        />
      </TitleContainer>
      <BurgerContainer
        onClick={() => {
          trackEvent('burger_menu_clicked');
          toggleVerticalNavBar();
        }}
      >
        <BurgerBar />
        <BurgerBar />
        <BurgerBar />
      </BurgerContainer>
    </Container>
  );
};

export { Header };
