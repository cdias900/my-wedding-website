import { forwardRef, memo, useMemo } from 'react';
import uuid from 'react-native-uuid';

import History01 from 'assets/images/history-01.jpeg';
import History02 from 'assets/images/history-02.jpeg';
import History03 from 'assets/images/history-03.jpeg';
import History04 from 'assets/images/history-04.jpeg';
import History05 from 'assets/images/history-05.jpeg';
import History06 from 'assets/images/history-06.jpeg';

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

const HistorySection = memo(
  forwardRef<HTMLDivElement>((_, ref) => {
    const theme = useTheme();

    const columns = useMemo(
      () => [
        [
          {
            title: 'Onde tudo começou',
            text: 'Por coincidência, nossos pais marcaram viagens para o mesmo lugar, na mesma data, e como eles são grandes amigos, decidiram que viajariamos juntos.',
            date: '07.01.2020',
            image: History01,
          },
          {
            title: 'Primeiro rolê',
            text: 'O dia que ele só me avisou que iriamos sair, e eu só aceitei kkkk',
            date: '07.01.2021',
            image: History02,
          },
        ],
        [
          {
            title: 'Primeiro aniversário',
            text: 'Foi um dia importante, e ele já estava lá 💓',
            date: '19.02.2021',
            image: History03,
          },
          {
            title: 'Primeiro encontro',
            text: 'O dia em que eu chamei ele pra tomar um sorvete na Stonia do Pontão do Lago Sul (e ele tava um gato)',
            date: '02.04.2021',
            image: History04,
          },
        ],
        [
          {
            title: 'Início do namoro',
            text: 'Oramos por 45 dias e percebemos que havia um propósito que nos unia.',
            date: '12.06.2021',
            image: History05,
          },
          {
            title: 'O dia do SIM!',
            text: 'O dia que eu estava super cansada, sem dormir, e ele insistiu que precisavamos sair. Quando chegamos lá, ele se ajoelhou e eu comecei a chorar, até que percebi que era ele o grande amor da minha vida. E enfim, aqui estamos.',
            date: '15.01.2022',
            image: History06,
          },
        ],
      ],
      [],
    );

    return (
      <HistoryContainer ref={ref}>
        <Subtitle>Love Story</Subtitle>
        <Title>Nossa História de Amor</Title>
        <HistoryRow>
          {columns.map((rows, index) => (
            <HistoryColumn key={String(uuid.v4())} index={index}>
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
                    style={{ margin: '1rem 0', backgroundPosition: '1px 30%' }}
                  />
                </PostContainer>
              ))}
            </HistoryColumn>
          ))}
        </HistoryRow>
      </HistoryContainer>
    );
  }),
);

export { HistorySection };
