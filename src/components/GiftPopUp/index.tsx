import { useNavigate } from 'react-router-dom';

import { ReactComponent as GiftIcon } from 'assets/icons/giftbox.svg';

import { Container } from './styles';

const GiftPopUp = () => {
  const navigate = useNavigate();
  return (
    <Container onClick={() => navigate('gift-list')}>
      <GiftIcon width={40} height={40} color="white" />
    </Container>
  );
};

export { GiftPopUp };
