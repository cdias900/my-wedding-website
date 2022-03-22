import { useEffect, useRef, useState } from 'react';
import {
  differenceInDays,
  differenceInMonths,
  differenceInHours,
  differenceInMinutes,
  differenceInSeconds,
} from 'date-fns';
import { useLocation } from 'react-router-dom';

import Pedro01 from 'assets/images/pedro-01.jpg';
import Gabi01 from 'assets/images/gabi-01.jpg';
import { ReactComponent as FacebookIcon } from 'assets/icons/facebook.svg';
import { ReactComponent as InstagramIcon } from 'assets/icons/instagram.svg';

import { Button } from 'components';

import { useTheme } from 'hooks';

import {
  AboutUsContainer,
  AboutUsPictureContainer,
  CenterProfileImage,
  Container,
  Countdown,
  CountdownContainer,
  CountdownGradient,
  CountdownLabel,
  CountdownNumber,
  CoverImageContainer,
  HistoryContainer,
  ImageBackdrop,
  ImageLabel,
  ImageUpperLabel,
  ProfileDetails,
  ProfileName,
  ProfilePicture,
  ProfilePictureFrame,
  SocialContainer,
  SocialIconContainer,
  Subtitle,
  Text,
  Title,
} from './styles';

const Home = () => {
  const theme = useTheme();

  const location = useLocation();

  const aboutUsRef = useRef<HTMLDivElement>(null);
  const historyRef = useRef<HTMLDivElement>(null);

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

  useEffect(() => {
    switch (location.pathname) {
      case '/':
        window.scrollTo({
          top: 0,
          behavior: 'smooth',
        });
        break;
      case '/about-us':
        aboutUsRef.current?.scrollIntoView({ behavior: 'smooth' });
        break;
      case '/history':
        historyRef.current?.scrollIntoView({ behavior: 'smooth' });
        break;
      default:
        break;
    }
  }, [location]);

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
      <AboutUsContainer ref={aboutUsRef}>
        <Subtitle>Casal</Subtitle>
        <Title style={{ marginBottom: 32 }}>Sobre Nós</Title>
        <AboutUsPictureContainer>
          <ProfilePicture image={Pedro01}>
            <ProfilePictureFrame borderColor={theme.lightBlue} />
          </ProfilePicture>
          <ProfileDetails>
            <ProfileName color={theme.blue}>
              Pedro Henrique Campos Dias
            </ProfileName>
            <Text style={{ marginBottom: 24 }} textAlign="left">
              Aenean eget mi ullamicorper, vestibulum enim in, fermentum massa.
              Aenean sit amet velit ligula. Curabitur at scelerisque elit.
              Maecenas vel tincidunt neque.
            </Text>
            <SocialContainer>
              <SocialIconContainer
                style={{ marginLeft: 0 }}
                href="https://www.facebook.com/PedroHCD/"
              >
                <FacebookIcon color={theme.lightBlue} />
              </SocialIconContainer>
              <SocialIconContainer href="https://www.instagram.com/phcd0/">
                <InstagramIcon color={theme.lightBlue} />
              </SocialIconContainer>
            </SocialContainer>
          </ProfileDetails>
        </AboutUsPictureContainer>
        <CenterProfileImage />
        <AboutUsPictureContainer orientation="right">
          <ProfilePicture image={Gabi01}>
            <ProfilePictureFrame borderColor={theme.pink} />
          </ProfilePicture>
          <ProfileDetails orientation="right" position="bottom">
            <ProfileName color={theme.pink}>Gabriella Vidal</ProfileName>
            <Text style={{ marginBottom: 24 }} textAlign="right">
              Aenean eget mi ullamicorper, vestibulum enim in, fermentum massa.
              Aenean sit amet velit ligula. Curabitur at scelerisque elit.
              Maecenas vel tincidunt neque.
            </Text>
            <SocialContainer>
              <SocialIconContainer
                style={{ marginLeft: 0 }}
                href="https://www.facebook.com/marciagabriella.dantasvidal"
              >
                <FacebookIcon color={theme.pink} />
              </SocialIconContainer>
              <SocialIconContainer href="https://www.instagram.com/gabividal18/">
                <InstagramIcon color={theme.pink} />
              </SocialIconContainer>
              {/* <SocialIconContainer>
                <TwitterIcon color={theme.lightBlue} />
              </SocialIconContainer> */}
            </SocialContainer>
          </ProfileDetails>
        </AboutUsPictureContainer>
      </AboutUsContainer>
      <HistoryContainer ref={historyRef}>
        <Subtitle>Love Story</Subtitle>
        <Title style={{ marginBottom: 32 }}>Nossa História de Amor</Title>
      </HistoryContainer>
    </Container>
  );
};

export { Home };
