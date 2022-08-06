import { FC } from 'react';
import { useTranslation } from 'react-i18next';

import { Button } from 'components/Button';
import { Text } from 'components/Text';

import { useTheme } from 'hooks';

import { trackEvent } from 'utils/analytics';

import { Container, ListLink, LogoImage } from './styles';

interface GiftListItemProps {
  title: string;
  url: string;
  logo: string;
}

const GiftListItem: FC<GiftListItemProps> = ({ title, url, logo }) => {
  const theme = useTheme();
  const { t } = useTranslation();

  return (
    <Container>
      <LogoImage src={logo} />
      <Text style={{ marginBottom: '2rem', marginTop: 'auto' }}>
        {t('text.giftListLabel')} {title}
      </Text>
      <ListLink
        href={url}
        onClick={() => trackEvent('gift_list_clicked', { list: title })}
      >
        <Button
          label={t('text.open')}
          textColor={theme.black}
          bgColor={theme.white}
          borderColor={theme.black}
          style={{ width: '100%' }}
        />
      </ListLink>
    </Container>
  );
};

export { GiftListItem };
