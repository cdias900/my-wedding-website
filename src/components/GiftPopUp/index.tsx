import { useNavigate } from 'react-router-dom';

import { ReactComponent as GiftIcon } from 'assets/icons/giftbox.svg';

import { trackEvent } from 'utils/analytics';

import { Container } from './styles';

const GiftPopUp = () => {
  const navigate = useNavigate();
  return (
    <Container
      onClick={() => {
        trackEvent('gift_pop_up_clicked');
        navigate('gift-list');
      }}
    >
      <GiftIcon width={56} height={56} color="white" />
    </Container>
  );
};

export { GiftPopUp };
