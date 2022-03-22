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
      const weddingDate = new Date('2022-12-16T19:30:00.000Z');
      const currentDate = new Date();
      const monthDiff = differenceInMonths(weddingDate, currentDate);
      const dayDiff = differenceInDays(weddingDate, currentDate) % 30.5;
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

      if (
        monthDiff <= 0 &&
        dayDiff <= 0 &&
        hourDiff <= 0 &&
        minutesDiff <= 0 &&
        secondsDiff <= 0
      ) {
        setTimeLeft({
          months: 0,
          days: 0,
          hours: 0,
          minutes: 0,
          seconds: 0,
        });
        clearInterval(interval);
        return;
      }

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
            <CountdownLabel>
              {timeLeft.months === 1 ? 'Mês' : 'Meses'}
            </CountdownLabel>
          </Countdown>
        )}
        {timeLeft.days > 0 && (
          <Countdown>
            <CountdownNumber>{timeLeft.days}</CountdownNumber>
            <CountdownLabel>Dia{timeLeft.days === 1 ? '' : 's'}</CountdownLabel>
          </Countdown>
        )}
        <Countdown>
          <CountdownNumber>{timeLeft.hours}</CountdownNumber>
          <CountdownLabel>Hora{timeLeft.hours === 1 ? '' : 's'}</CountdownLabel>
        </Countdown>
        {timeLeft.months <= 0 && (
          <Countdown>
            <CountdownNumber>{timeLeft.minutes}</CountdownNumber>
            <CountdownLabel>
              Minuto{timeLeft.minutes === 1 ? '' : 's'}
            </CountdownLabel>
          </Countdown>
        )}
        {timeLeft.days <= 0 && (
          <Countdown>
            <CountdownNumber>{timeLeft.seconds}</CountdownNumber>
            <CountdownLabel>
              Segundo{timeLeft.seconds === 1 ? '' : 's'}
            </CountdownLabel>
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
