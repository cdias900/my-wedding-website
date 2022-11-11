import styled from 'styled-components';

export const Container = styled.div`
  background: ${({ theme }) => theme.white};
  padding: 3rem;
  box-shadow: 0 0 2rem rgba(153, 189, 223, 0.4);
  width: 28rem;
  height: 32rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 1.6rem;
`;

export const LogoImage = styled.img.attrs({
  alt: 'Logo da lista',
})`
  width: 12rem;
  height: 12rem;
  margin-bottom: 2rem;
`;

export const ListLink = styled.a.attrs({
  target: '_blank',
  rel: 'noreferrer',
})`
  width: 100%;
`;
