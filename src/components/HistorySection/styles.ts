import styled from 'styled-components';

interface PostContainerProps {
  infoPosition?: 'top' | 'bottom';
}

export const HistoryContainer = styled.div`
  width: 60%;
  margin: 9.6rem auto 17rem;
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
  font-size: 1.8rem;
  font-weight: 700;
  font-style: italic;
  color: ${({ theme }) => theme.pink};
  margin-bottom: 0.5rem;
`;

export const PostTitle = styled.h3`
  font-family: 'Volkhov', serif;
  font-size: 2.6rem;
  font-weight: 400;
  color: ${({ theme }) => theme.blue};
  margin-bottom: 2rem;
`;

export const PostInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  margin: 3rem 0;
`;
