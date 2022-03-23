import { forwardRef } from 'react';

import { Subtitle } from 'components/Subtitle';
import { Title } from 'components/Title';

import { HistoryContainer } from './styles';

const HistorySection = forwardRef<HTMLDivElement>((_, ref) => (
  <HistoryContainer ref={ref}>
    <Subtitle>Love Story</Subtitle>
    <Title style={{ marginBottom: 32 }}>Nossa História de Amor</Title>
  </HistoryContainer>
));

export { HistorySection };
