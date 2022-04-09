import { forwardRef } from 'react';
import { differenceInYears } from 'date-fns';

import Pedro01 from 'assets/images/pedro-01.jpg';
import Gabi01 from 'assets/images/gabi-01.jpg';
import { ReactComponent as FacebookIcon } from 'assets/icons/facebook.svg';
import { ReactComponent as InstagramIcon } from 'assets/icons/instagram.svg';

import { Subtitle } from 'components/Subtitle';
import { Text } from 'components/Text';
import { Title } from 'components/Title';
import { FramedPicture } from 'components/FramedPicture';

import { useTheme } from 'hooks';

import {
  AboutUsContainer,
  AboutUsPictureContainer,
  CenterProfileImage,
  ProfileDetails,
  ProfileName,
  SocialContainer,
  SocialIconContainer,
} from './styles';

const AboutUsSection = forwardRef<HTMLDivElement>((_, ref) => {
  const theme = useTheme();

  return (
    <AboutUsContainer ref={ref}>
      <Subtitle>Casal</Subtitle>
      <Title>Sobre Nós</Title>
      <AboutUsPictureContainer>
        <FramedPicture image={Pedro01} frameColor={theme.lightBlue} />
        <ProfileDetails>
          <ProfileName color={theme.blue}>
            Pedro Henrique Campos Dias
          </ProfileName>
          <Text style={{ marginBottom: '2.4rem' }} textAlign="left">
            Tenho {differenceInYears(new Date(), new Date('07/03/2000'))} anos,
            sou formado em Ciência da Computação no IESB e trabalho como
            desenvolvedor Web/Mobile, faço parte da igreja Sara Nossa Terra Sede
            e gosto de programar, assistir animes e jogar videogame.
          </Text>
          <SocialContainer>
            <SocialIconContainer
              style={{ marginLeft: 0 }}
              href="https://www.facebook.com/PedroHCD/"
              color={theme.lightBlue}
              aria-label="Facebook"
            >
              <FacebookIcon color={theme.lightBlue} />
            </SocialIconContainer>
            <SocialIconContainer
              href="https://www.instagram.com/phcd0/"
              color={theme.lightBlue}
              aria-label="Instagram"
            >
              <InstagramIcon color={theme.lightBlue} />
            </SocialIconContainer>
          </SocialContainer>
        </ProfileDetails>
      </AboutUsPictureContainer>
      <CenterProfileImage />
      <AboutUsPictureContainer orientation="right">
        <FramedPicture image={Gabi01} frameColor={theme.pink} />
        <ProfileDetails orientation="right" position="bottom">
          <ProfileName color={theme.pink}>Gabriella Vidal</ProfileName>
          <Text style={{ marginBottom: '2.4rem' }} textAlign="right">
            Tenho {differenceInYears(new Date(), new Date('02/19/1999'))} anos,
            estou cursando Biomedicina no IESB, faço parte da igreja Sara Nossa
            Terra do Guará II e amo dormir, fazer compras e dar risadas.
          </Text>
          <SocialContainer>
            <SocialIconContainer
              style={{ marginLeft: 0 }}
              href="https://www.facebook.com/marciagabriella.dantasvidal"
              color={theme.pink}
              aria-label="Facebook"
            >
              <FacebookIcon color={theme.pink} />
            </SocialIconContainer>
            <SocialIconContainer
              href="https://www.instagram.com/gabividal18/"
              color={theme.pink}
              aria-label="Instagram"
            >
              <InstagramIcon color={theme.pink} />
            </SocialIconContainer>
          </SocialContainer>
        </ProfileDetails>
      </AboutUsPictureContainer>
    </AboutUsContainer>
  );
});

export { AboutUsSection };
