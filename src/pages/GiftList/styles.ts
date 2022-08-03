import styled from 'styled-components';

import PixQrCode from 'assets/images/pix-qrcode.png';

import { Text } from 'components';

import { DEVICES } from 'styles/global';

export const Container = styled.div`
  width: 100vw;
  transition: all 0.3s;
  padding-top: 20rem;

  @media ${DEVICES.tablet} {
    padding-top: 10rem;
  }

  @media ${DEVICES.mobile} {
    padding-top: 7rem;
  }
`;

export const DescriptionText = styled(Text)`
  width: 55vw;
  text-align: center;

  @media ${DEVICES.tablet} {
    width: 70vw;
  }

  @media ${DEVICES.mobile} {
    width: 80vw;
  }
`;

export const GiftGradient = styled.div`
  width: 100%;
  padding: 10rem 20rem;
  background: ${({ theme }) => theme.darkWhite};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  @media ${DEVICES.tablet} {
    padding: 7.5rem 0 15rem;
  }

  @media ${DEVICES.mobile} {
    padding: 5rem 0 10rem;
  }
`;

export const ListsContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  padding: 3.6rem;

  @media ${DEVICES.mobile} {
    margin-top: -10rem;
  }
`;

export const PixImage = styled.img.attrs({
  src: PixQrCode,
  alt: 'Pix QRCode',
})`
  width: 32rem;
`;

export const PixKeyText = styled.span`
  font-weight: bold;
  color: ${({ theme }) => theme.blue};
`;
