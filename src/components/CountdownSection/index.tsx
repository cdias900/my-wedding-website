import { useEffect, useState } from 'react';
import {
  differenceInDays,
  differenceInMonths,
  differenceInHours,
  differenceInMinutes,
  differenceInSeconds,
} from 'date-fns';

import { Subtitle } from 'components/Subtitle';
import { Title } from 'components/Title';
import { Text } from 'components/Text';

import {
  Countdown,
  CountdownContainer,
  CountdownGradient,
  CountdownLabel,
  CountdownNumber,
} from './styles';

const CountdownSection = () => {
  const [timeLeft, setTimeLeft] = useState({
    months: 0,
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const interval = setInterval(() => {
      const weddingDate = new Date('2022-12-16T19:00:00.000Z');
      const currentDate = new Date();
      const monthDays = 365 / 12;
      const monthDiff = differenceInMonths(weddingDate, currentDate);
      const dayDiff = differenceInDays(weddingDate, currentDate) % monthDays;
      const hourDiff =
        differenceInHours(weddingDate, currentDate) -
        monthDiff * monthDays * 24 -
        dayDiff * 24;
      const minutesDiff =
        differenceInMinutes(weddingDate, currentDate) -
        monthDiff * monthDays * 24 * 60 -
        dayDiff * 24 * 60 -
        hourDiff * 60;
      const secondsDiff =
        differenceInSeconds(weddingDate, currentDate) -
        monthDiff * monthDays * 24 * 60 * 60 -
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
        months: Math.round(monthDiff),
        days: Math.round(dayDiff),
        hours: Math.round(hourDiff),
        minutes: Math.round(minutesDiff),
        seconds: Math.round(secondsDiff),
      });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <CountdownGradient>
        <Subtitle>Dia do Casamento</Subtitle>
        <Title>Contagem Regressiva</Title>
        <Text>Acompanhe a chegada do nosso grande dia!</Text>
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
    </>
  );
};

export { CountdownSection };
