import styled from 'styled-components';

import coverImg from 'assets/images/cover.png';
import PedroGabi01 from 'assets/images/pedro-gabi-01.jpg';

interface ProfilePictureProps {
  image: string;
}

interface ProfilePictureFrameProps {
  borderColor: string;
}

interface AboutUsPictureContainerProps {
  orientation?: 'left' | 'right';
}

interface ProfileDetailsProps {
  orientation?: 'left' | 'right';
  position?: 'bottom' | 'top';
}

interface TextProps {
  textAlign?: 'left' | 'center' | 'right';
}

interface ContainerProps {
  hasTopOffset: boolean;
}

export const Container = styled.div<ContainerProps>`
  width: 100%;
  height: 100%;
  margin-top: ${({ hasTopOffset }) => (hasTopOffset ? 192 : 0)}px;
  transition: all 0.3s;
`;

export const CoverImageContainer = styled.div`
  background-image: url(${coverImg});
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  width: 100%;
`;

export const ImageBackdrop = styled.div`
  padding: 400px 0 80px;
  background-image: linear-gradient(#00000020, #00000080);
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  flex-direction: column;
`;

export const ImageLabel = styled.h1`
  font-family: 'Volkhov', serif;
  color: ${({ theme }) => theme.white};
  font-size: 100px;
  font-weight: 400;
  margin-bottom: 50px;
`;

export const ImageUpperLabel = styled.span`
  font-family: 'Volkhov', serif;
  color: ${({ theme }) => theme.white};
  font-size: 28px;
  margin-bottom: 10px;
`;

export const CountdownGradient = styled.div`
  margin-top: 96px;
  padding: 48px 0 200px;
  background-image: linear-gradient(#ffffff80, #ffffff20);
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const Subtitle = styled.span`
  font-family: 'Pinyon Script', cursive;
  font-size: 34px;
  color: ${({ theme }) => theme.blue};
`;

export const Title = styled.h2`
  font-family: 'Volkhov', serif;
  font-size: 56px;
  font-weight: 700;
  color: ${({ theme }) => theme.blue};
`;

export const Text = styled.p<TextProps>`
  font-family: 'Nunito', sans-serif;
  font-size: 17px;
  color: ${({ theme }) => theme.black};
  text-align: ${({ textAlign }) => textAlign};
`;

export const CountdownContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
  width: 40vw;
  margin-top: -96px;
`;

export const Countdown = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.white};
  border-radius: 20px;
  box-shadow: 0 3px 10px ${({ theme }) => theme.lightBlue};
  margin: 0 10px;
  width: 180px;
  height: 195px;
`;

export const CountdownNumber = styled.span`
  font-family: 'Volkhov', serif;
  font-size: 80px;
  font-weight: 700;
  color ${({ theme }) => theme.blue};
`;

export const CountdownLabel = styled.span`
  font-family: 'Volkhov', serif;
  font-style: italic;
  font-size: 20px;
  color: ${({ theme }) => theme.gray};
`;

export const AboutUsContainer = styled.div`
  margin: 96px auto 0;
  width: 60%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const AboutUsPictureContainer = styled.div<AboutUsPictureContainerProps>`
  display: flex;
  flex-direction: ${({ orientation }) =>
    orientation === 'right' ? 'row-reverse' : 'row'};
  align-items: center;
  justify-content: flex-start;
  width: 80%;
`;

export const ProfilePicture = styled.div<ProfilePictureProps>`
  background-image: url(${({ image }) => image});
  background-position: center 30%;
  background-size: cover;
  background-repeat: no-repeat;
  width: 360px;
  height: 360px;
  padding: 16px;
`;

export const ProfilePictureFrame = styled.div<ProfilePictureFrameProps>`
  width: 100%;
  height: 100%;
  border: 1px solid ${({ borderColor }) => borderColor};
`;

export const ProfileName = styled.p`
  font-family: 'Volkhov', serif;
  font-style: italic;
  font-weight: 400;
  color: ${({ color }) => color};
  font-size: 26px;
  margin-bottom: 16px;
`;

export const ProfileDetails = styled.div<ProfileDetailsProps>`
  width: 50%;
  margin: 0 48px;
  display: flex;
  flex-direction: column;
  align-self: ${({ position }) =>
    position === 'bottom' ? 'flex-end' : 'flex-start'};
  align-items: ${({ orientation }) =>
    orientation === 'right' ? 'flex-end' : 'flex-start'};
  justify-content: center;
`;

export const SocialContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
`;

export const SocialIconContainer = styled.a.attrs({
  target: '_blank',
})`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.white};
  border-radius: 50%;
  width: 36px;
  height: 36px;
  box-shadow: 0 3px 10px ${({ color }) => color};
  margin: 0 8px;
  cursor: pointer;

  :hover {
    filter: brightness(0.9);
  }

  :active {
    filter: brightness(1.1);
  }
`;

export const CenterProfileImage = styled.div`
  background-image: url(${PedroGabi01});
  background-position: center 30%;
  background-size: cover;
  background-repeat: no-repeat;
  width: 435px;
  height: 435px;
  margin: -12% 0;
  z-index: 2;
  border: 15px solid ${({ theme }) => theme.white};
  box-shadow: 0 3px 10px ${({ theme }) => theme.lightGray};
`;

export const HistoryContainer = styled.div`
  width: 60%;
  margin: 96px auto 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
