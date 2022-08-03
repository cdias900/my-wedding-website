import BeforeImage from 'assets/images/before.png';
import AfterImage from 'assets/images/after.png';

import { Subtitle } from 'components/Subtitle';
import { Text } from 'components/Text';
import { Title } from 'components/Title';

import { useTheme } from 'hooks';

import {
  BeforeAndAfterContainer,
  DateText,
  Image,
  ImageContainer,
  ImagesContainer,
} from './styles';

const BeforeAndAfterSection = () => {
  const theme = useTheme();

  return (
    <BeforeAndAfterContainer>
      <Subtitle>Before & After</Subtitle>
      <Title>O Bem Que a Morena Me Fez</Title>
      <Text>
        Antes de conhecê-la, eu era magrelo, esquelético, triste. Mas com a
        chegada dela, tudo mudou!
      </Text>
      <Text>Confira abaixo o antes e o depois:</Text>
      <ImagesContainer>
        <ImageContainer>
          <Image image={BeforeImage} frameColor={theme.white} />
          <DateText>14.04.2019</DateText>
        </ImageContainer>
        <ImageContainer>
          <Image image={AfterImage} frameColor={theme.white} />
          <DateText>27.04.2022</DateText>
        </ImageContainer>
      </ImagesContainer>
    </BeforeAndAfterContainer>
  );
};

export { BeforeAndAfterSection };
