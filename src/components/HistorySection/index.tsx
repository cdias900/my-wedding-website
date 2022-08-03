import { forwardRef, memo } from 'react';
import uuid from 'react-native-uuid';
import { useTranslation } from 'react-i18next';

import { Subtitle } from 'components/Subtitle';
import { Title } from 'components/Title';
import { FramedPicture } from 'components/FramedPicture';
import { Text } from 'components/Text';

import { useTheme } from 'hooks';

import { columns } from './constants';

import {
  HistoryColumn,
  HistoryContainer,
  HistoryRow,
  PostContainer,
  PostDate,
  PostInfoContainer,
  PostTitle,
} from './styles';

const HistorySection = memo(
  forwardRef<HTMLDivElement>((_, ref) => {
    const theme = useTheme();
    const { t } = useTranslation();

    return (
      <HistoryContainer ref={ref}>
        <Subtitle>{t('subtitle.loveStory')}</Subtitle>
        <Title>{t('title.history')}</Title>
        <HistoryRow>
          {columns.map((rows, index) => (
            <HistoryColumn key={String(uuid.v4())} index={index}>
              {rows.map(history => (
                <PostContainer key={String(uuid.v4())}>
                  <PostInfoContainer>
                    <PostDate>{t(history.date)}</PostDate>
                    <PostTitle>{t(history.title)}</PostTitle>
                    <Text>{t(history.text)}</Text>
                  </PostInfoContainer>
                  <FramedPicture
                    image={history.image}
                    frameColor={theme.white}
                    style={{ margin: '1rem 0', backgroundPosition: '1px 30%' }}
                  />
                </PostContainer>
              ))}
            </HistoryColumn>
          ))}
        </HistoryRow>
      </HistoryContainer>
    );
  }),
);

export { HistorySection };
