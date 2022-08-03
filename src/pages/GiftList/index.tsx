import { Subtitle, Title, GiftListItem } from 'components';

import { giftLists } from './constants';

import {
  Container,
  DescriptionText,
  GiftGradient,
  ListsContainer,
  PixImage,
  PixKeyText,
} from './styles';

const GiftList = () => {
  return (
    <Container>
      <GiftGradient>
        <Title>Lista de Presentes</Title>
        <DescriptionText>
          Caso queira nos presentear, temos algumas sugestões de coisas que
          seriam bem úteis para nós.
        </DescriptionText>
      </GiftGradient>
      <ListsContainer>
        {giftLists.map(list => (
          <GiftListItem key={list.title} {...list} />
        ))}
      </ListsContainer>
      <GiftGradient>
        <Subtitle>Pix</Subtitle>
        <Title>Aqui aceitas PIX</Title>
        <DescriptionText>
          Caso nenhuma de nossas sugestões de presentes seja interessante, ou
          esteja sem ideias, também aceitamos contribuições de qualquer valor,
          via PIX.
        </DescriptionText>
        <PixImage />
        <DescriptionText>
          Basta escanear o QRCode acima com o aplicativo de seu banco ou
          transferir diretamente para a chave PIX:{' '}
          <PixKeyText>casamentogabiepedro@cdias.dev</PixKeyText>
        </DescriptionText>
      </GiftGradient>
    </Container>
  );
};

export { GiftList };
