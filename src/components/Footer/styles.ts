import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
  padding: 32px 0;
  border-top: 1px solid ${({ theme }) => theme.lightGray};
`;

export const TitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: center;
`;

export const Title = styled.h1`
  font-family: 'Pinyon Script', cursive;
  color: ${({ theme }) => theme.blue};
  font-size: 34px;
  font-weight: 400;
  margin-bottom: -8px;
`;

export const Subtitle = styled.span`
  font-family: 'Volkhov', serif;
  font-size: 16px;
  font-weight: 700;
  font-style: italic;
  color: ${({ theme }) => theme.blue};
  margin: 14px 0 20px;
`;

export const CopyrightText = styled.span`
  font-family: 'Nunito', sans-serif;
  font-size: 10px;
  color: ${({ theme }) => theme.black};
`;
