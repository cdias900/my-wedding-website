import { forwardRef } from 'react';
import { differenceInYears } from 'date-fns';
import { useTranslation } from 'react-i18next';

import Pedro01 from 'assets/images/pedro-01.jpg';
import Gabi01 from 'assets/images/gabi-01.jpg';
import { ReactComponent as FacebookIcon } from 'assets/icons/facebook.svg';
import { ReactComponent as InstagramIcon } from 'assets/icons/instagram.svg';

import { Subtitle } from 'components/Subtitle';
import { Title } from 'components/Title';
import { FramedPicture } from 'components/FramedPicture';

import { useTheme } from 'hooks';

import {
  AboutUsContainer,
  AboutUsPictureContainer,
  AboutUsText,
  CenterProfileImage,
  ProfileDetails,
  ProfileName,
  SocialContainer,
  SocialIconContainer,
} from './styles';

const AboutUsSection = forwardRef<HTMLDivElement>((_, ref) => {
  const theme = useTheme();
  const { t } = useTranslation();

  return (
    <AboutUsContainer ref={ref}>
      <Subtitle>{t('subtitle.couple')}</Subtitle>
      <Title>{t('title.aboutUs')}</Title>
      <AboutUsPictureContainer>
        <FramedPicture
          image={Pedro01}
          frameColor={theme.lightBlue}
          pictureHeight={45}
        />
        <ProfileDetails>
          <ProfileName color={theme.blue}>
            Pedro Henrique Campos Dias
          </ProfileName>
          <AboutUsText textAlign="left">
            {t('text.aboutPedro', {
              age: differenceInYears(new Date(), new Date('07/03/2000')),
            })}
          </AboutUsText>
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
        <FramedPicture
          image={Gabi01}
          frameColor={theme.pink}
          pictureHeight={45}
        />
        <ProfileDetails orientation="right" position="bottom">
          <ProfileName color={theme.pink}>Gabriella Vidal</ProfileName>
          <AboutUsText style={{ marginBottom: '2.4rem' }} textAlign="right">
            {t('text.aboutGabi', {
              age: differenceInYears(new Date(), new Date('02/19/1999')),
            })}
          </AboutUsText>
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
