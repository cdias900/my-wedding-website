import { useShowHeader } from 'hooks';

import { Container } from './styles';

const GiftList = () => {
  const { showHeader } = useShowHeader();

  return <Container hasTopOffset={showHeader}>Gift List</Container>;
};

export { GiftList };
