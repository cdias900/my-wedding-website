import styled from 'styled-components';

import coverImg from 'assets/cover.png';

interface ProfilePictureProps {
  image: string;
}

interface ProfilePictureFrameProps {
  borderColor: string;
}

export const Container = styled.div`
  width: 100%;
  height: 100%;
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
  margin-bottom: 64px;
`;

export const ImageUpperLabel = styled.span`
  font-family: 'Volkhov', serif;
  color: ${({ theme }) => theme.white};
  font-size: 28px;
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

export const Text = styled.p`
  font-family: 'Nunito', sans-serif;
  font-size: 17px;
  color: ${({ theme }) => theme.black};
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
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.white};
  border-radius: 20px;
  box-shadow: 0 3px 10px ${({ theme }) => theme.lightBlue};
  margin: 0 12px;
  padding: 32px 16px;
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
  margin-top: 96px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const AboutUsPictureContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
`;

export const ProfilePicture = styled.div<ProfilePictureProps>`
  background-image: url(${({ image }) => image});
  background-position: center 20%;
  background-size: cover;
  background-repeat: no-repeat;
  width: 480px;
  height: 480px;
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
`;
