import styled, { css } from 'styled-components';
import { DEVICES } from 'styles/global';

interface PostContainerProps {
  infoPosition?: 'top' | 'bottom';
}

interface HistoryColumnProps {
  index: number;
}

export const HistoryContainer = styled.div`
  width: 60%;
  margin: 9.6rem auto 17rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  @media (max-width: ${DEVICES.mobile}) {
    width: 85vw;
    margin: 4.3rem auto;
  }
`;

export const HistoryRow = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;

  @media (max-width: ${DEVICES.mobile}) {
    flex-direction: column;
  }
`;

export const HistoryColumn = styled.div<HistoryColumnProps>`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  ${({ index }) =>
    index % 2 !== 0 &&
    css`
      transform: translateY(170px);
      margin: 0 20px;

      @media (max-width: ${DEVICES.mobile}) {
        transform: translateY(0);
        margin: 0;
      }
    `}
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

  @media (max-width: ${DEVICES.mobile}) {
    font-size: 1.2rem;
    margin-bottom: 0.25rem;
  }
`;

export const PostTitle = styled.h3`
  font-family: 'Volkhov', serif;
  font-size: 2.6rem;
  font-weight: 400;
  color: ${({ theme }) => theme.blue};
  margin-bottom: 2rem;

  @media (max-width: ${DEVICES.mobile}) {
    font-size: 1.8rem;
    margin-bottom: 1rem;
  }
`;

export const PostInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  margin: 3rem 0;

  @media (max-width: ${DEVICES.mobile}) {
    margin: 1.5rem 0;
  }
`;
