import styled from 'styled-components';

import PedroGabi01 from 'assets/images/pedro-gabi-01.jpg';

interface AboutUsPictureContainerProps {
  orientation?: 'left' | 'right';
}

interface ProfileDetailsProps {
  orientation?: 'left' | 'right';
  position?: 'bottom' | 'top';
}

export const AboutUsContainer = styled.div`
  margin: 9.6rem auto 0;
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

export const ProfileName = styled.p`
  font-family: 'Volkhov', serif;
  font-style: italic;
  font-weight: 400;
  color: ${({ color }) => color};
  font-size: 2.6rem;
  margin-bottom: 1.6rem;
`;

export const ProfileDetails = styled.div<ProfileDetailsProps>`
  width: 60%;
  margin: 0 4.8rem;
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
  width: 3.6rem;
  height: 3.6rem;
  box-shadow: 0 0.3rem 1rem ${({ color }) => color};
  margin: 0 0.8rem;
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
  width: 43.5rem;
  height: 43.5rem;
  margin: -12% 0;
  z-index: 2;
  border: 1.5rem solid ${({ theme }) => theme.white};
  box-shadow: 0 0.3rem 1rem ${({ theme }) => theme.lightGray};
`;
