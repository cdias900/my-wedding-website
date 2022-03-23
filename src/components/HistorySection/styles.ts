import styled from 'styled-components';

interface PostContainerProps {
  infoPosition?: 'top' | 'bottom';
}

export const HistoryContainer = styled.div`
  width: 60%;
  margin: 96px auto 170px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const HistoryRow = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

export const HistoryColumn = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const PostContainer = styled.div<PostContainerProps>`
  display: flex;
  flex-direction: ${({ infoPosition }) =>
    infoPosition === 'bottom' ? 'column-reverse' : 'column'};
  align-items: flex-start;
  justify-content: flex-start;
`;

export const PostDate = styled.span`
  font-family: 'Volkhov', serif;
  font-size: 18px;
  font-weight: 700;
  font-style: italic;
  color: ${({ theme }) => theme.pink};
  margin-bottom: 5px;
`;

export const PostTitle = styled.h3`
  font-family: 'Volkhov', serif;
  font-size: 26px;
  font-weight: 400;
  color: ${({ theme }) => theme.blue};
  margin-bottom: 20px;
`;

export const PostInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  margin: 30px 0;
`;
