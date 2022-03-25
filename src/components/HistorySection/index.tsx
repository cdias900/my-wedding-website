import { forwardRef } from 'react';
import uuid from 'react-native-uuid';

import History01 from 'assets/images/history-01.png';

import { Subtitle } from 'components/Subtitle';
import { Title } from 'components/Title';
import { FramedPicture } from 'components/FramedPicture';
import { Text } from 'components/Text';

import { useTheme } from 'hooks';

import {
  HistoryColumn,
  HistoryContainer,
  HistoryRow,
  PostContainer,
  PostDate,
  PostInfoContainer,
  PostTitle,
} from './styles';

const columns = [
  [
    {
      title: 'Onde tudo começou',
      text: 'Proin nec urna mattis turpis elementum ornare nec at lorem. Aenean at mauris eg.',
      date: '07.01.2020',
      image: History01,
    },
    {
      title: 'Primeira viagem',
      text: 'Proin nec urna mattis turpis elementum ornare nec at lorem. Aenean at mauris eg.',
      date: '01.01.2022',
      image: History01,
    },
  ],
  [
    {
      title: 'Primeiro encontro',
      text: 'Proin nec urna mattis turpis elementum ornare nec at lorem. Aenean at mauris eg.',
      date: '01.01.2022',
      image: History01,
    },
    {
      title: 'Primeiro aniversário',
      text: 'Proin nec urna mattis turpis elementum ornare nec at lorem. Aenean at mauris eg.',
      date: '01.01.2022',
      image: History01,
    },
  ],
  [
    {
      title: 'Pedido de namoro',
      text: 'Proin nec urna mattis turpis elementum ornare nec at lorem. Aenean at mauris eg.',
      date: '01.01.2022',
      image: History01,
    },
    {
      title: 'O dia do SIM!',
      text: 'Proin nec urna mattis turpis elementum ornare nec at lorem. Aenean at mauris eg.',
      date: '01.01.2022',
      image: History01,
    },
  ],
];

const HistorySection = forwardRef<HTMLDivElement>((_, ref) => {
  const theme = useTheme();

  return (
    <HistoryContainer ref={ref}>
      <Subtitle>Love Story</Subtitle>
      <Title>Nossa História de Amor</Title>
      <HistoryRow>
        {columns.map((rows, index) => (
          <HistoryColumn
            key={String(uuid.v4())}
            style={
              index % 2 !== 0
                ? { transform: 'translateY(170px)', margin: '0 20px' }
                : undefined
            }
          >
            {rows.map(history => (
              <PostContainer key={String(uuid.v4())}>
                <PostInfoContainer>
                  <PostDate>{history.date}</PostDate>
                  <PostTitle>{history.title}</PostTitle>
                  <Text>{history.text}</Text>
                </PostInfoContainer>
                <FramedPicture
                  image={history.image}
                  frameColor={theme.white}
                  style={{ margin: '10px 0' }}
                />
              </PostContainer>
            ))}
          </HistoryColumn>
        ))}
      </HistoryRow>
    </HistoryContainer>
  );
});

export { HistorySection };
