import { forwardRef } from 'react';

import Pedro01 from 'assets/images/pedro-01.jpg';
import Gabi01 from 'assets/images/gabi-01.jpg';
import { ReactComponent as FacebookIcon } from 'assets/icons/facebook.svg';
import { ReactComponent as InstagramIcon } from 'assets/icons/instagram.svg';

import { Subtitle } from 'components/Subtitle';
import { Text } from 'components/Text';
import { Title } from 'components/Title';

import { useTheme } from 'hooks';

import {
  AboutUsContainer,
  AboutUsPictureContainer,
  CenterProfileImage,
  ProfileDetails,
  ProfileName,
  ProfilePicture,
  ProfilePictureFrame,
  SocialContainer,
  SocialIconContainer,
} from './styles';

const AboutUsSection = forwardRef<HTMLDivElement>((_, ref) => {
  const theme = useTheme();

  return (
    <AboutUsContainer ref={ref}>
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
              color={theme.lightBlue}
            >
              <FacebookIcon color={theme.lightBlue} />
            </SocialIconContainer>
            <SocialIconContainer
              href="https://www.instagram.com/phcd0/"
              color={theme.lightBlue}
            >
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
              color={theme.pink}
            >
              <FacebookIcon color={theme.pink} />
            </SocialIconContainer>
            <SocialIconContainer
              href="https://www.instagram.com/gabividal18/"
              color={theme.pink}
            >
              <InstagramIcon color={theme.pink} />
            </SocialIconContainer>
            {/* <SocialIconContainer>
          <TwitterIcon color={theme.lightBlue} />
        </SocialIconContainer> */}
          </SocialContainer>
        </ProfileDetails>
      </AboutUsPictureContainer>
    </AboutUsContainer>
  );
});

export { AboutUsSection };
