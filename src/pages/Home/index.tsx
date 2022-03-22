import { useEffect, useState } from 'react';
import {
  differenceInDays,
  differenceInMonths,
  differenceInHours,
  differenceInMinutes,
  differenceInSeconds,
} from 'date-fns';

import PedroStair from 'assets/pedro-stair.jpg';

import { Button } from 'components';

import { useTheme } from 'hooks';

import {
  AboutUsContainer,
  AboutUsPictureContainer,
  Container,
  Countdown,
  CountdownContainer,
  CountdownGradient,
  CountdownLabel,
  CountdownNumber,
  CoverImageContainer,
  ImageBackdrop,
  ImageLabel,
  ImageUpperLabel,
  ProfileName,
  ProfilePicture,
  ProfilePictureFrame,
  Subtitle,
  Text,
  Title,
} from './styles';

const Home = () => {
  const theme = useTheme();

  const [timeLeft, setTimeLeft] = useState({
    months: 0,
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const interval = setInterval(() => {
      const weddingDate = new Date('2022-12-16T16:30:00.364Z');
      const currentDate = new Date();
      const monthDiff = differenceInMonths(weddingDate, currentDate);
      const dayDiff =
        differenceInDays(weddingDate, currentDate) - monthDiff * 30.5;
      const hourDiff =
        differenceInHours(weddingDate, currentDate) -
        monthDiff * 30.5 * 24 -
        dayDiff * 24;
      const minutesDiff =
        differenceInMinutes(weddingDate, currentDate) -
        monthDiff * 30.5 * 24 * 60 -
        dayDiff * 24 * 60 -
        hourDiff * 60;
      const secondsDiff =
        differenceInSeconds(weddingDate, currentDate) -
        monthDiff * 30.5 * 24 * 60 * 60 -
        dayDiff * 24 * 60 * 60 -
        hourDiff * 60 * 60 -
        minutesDiff * 60;

      setTimeLeft({
        months: monthDiff,
        days: dayDiff,
        hours: hourDiff,
        minutes: minutesDiff,
        seconds: secondsDiff,
      });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <Container>
      <CoverImageContainer>
        <ImageBackdrop>
          <ImageUpperLabel>Nosso Casamento</ImageUpperLabel>
          <ImageLabel>Pedro & Gabi</ImageLabel>
          <Button label="Nossa História" />
        </ImageBackdrop>
      </CoverImageContainer>
      <CountdownGradient>
        <Subtitle>Dia do Casamento</Subtitle>
        <Title style={{ marginBottom: 32 }}>Contagem Regressiva</Title>
        <Text>
          Nulla facilisi. Nunc in ligula augue. Sed mollis massa nec lorem
          scelerisque, eu condimentum sapien euismod.
        </Text>
      </CountdownGradient>
      <CountdownContainer>
        {timeLeft.months > 0 && (
          <Countdown>
            <CountdownNumber>{timeLeft.months}</CountdownNumber>
            <CountdownLabel>Meses</CountdownLabel>
          </Countdown>
        )}
        {timeLeft.days > 0 && (
          <Countdown>
            <CountdownNumber>{timeLeft.days}</CountdownNumber>
            <CountdownLabel>Dias</CountdownLabel>
          </Countdown>
        )}
        <Countdown>
          <CountdownNumber>{timeLeft.hours}</CountdownNumber>
          <CountdownLabel>Horas</CountdownLabel>
        </Countdown>
        {timeLeft.months <= 0 && (
          <Countdown>
            <CountdownNumber>{timeLeft.minutes}</CountdownNumber>
            <CountdownLabel>Minutos</CountdownLabel>
          </Countdown>
        )}
        {timeLeft.days <= 0 && (
          <Countdown>
            <CountdownNumber>{timeLeft.seconds}</CountdownNumber>
            <CountdownLabel>Segundos</CountdownLabel>
          </Countdown>
        )}
      </CountdownContainer>
      <AboutUsContainer>
        <Subtitle>Casal</Subtitle>
        <Title>Sobre Nós</Title>
        <AboutUsPictureContainer>
          <ProfilePicture image={PedroStair}>
            <ProfilePictureFrame borderColor={theme.lightBlue} />
          </ProfilePicture>
          <div>
            <ProfileName color={theme.blue}>
              Pedro Henrique Campos Dias
            </ProfileName>
            <Text>
              Aenean eget mi ullamcorper, vestibulum enim in, fermentum massa.
              Aenean sit amet velit ligula. Curabitur at scelerisque elit.
              Maecenas vel tincidunt neque.
            </Text>
          </div>
        </AboutUsPictureContainer>
      </AboutUsContainer>
    </Container>
  );
};

export { Home };
