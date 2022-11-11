import { FC } from 'react';
import { useTranslation } from 'react-i18next';

import { Button } from 'components/Button';
import { Text } from 'components/Text';

import { useTheme } from 'hooks';

import { formatCurrency } from 'utils/formatCurrency';
import { trackEvent } from 'utils/analytics';

import { Container, ListLink, LogoImage } from './styles';

interface GiftItemProps {
  title: string;
  logo: string;
  url: string;
  target: number;
  reached: number;
}

const GiftItem: FC<GiftItemProps> = ({ title, logo, url, target, reached }) => {
  const theme = useTheme();
  const { t } = useTranslation();

  return (
    <Container>
      <LogoImage src={logo} />
      <Text style={{ marginTop: 'auto' }}>{t(`gifts.${title}`)}</Text>
      <Text style={{ marginBottom: '2rem' }}>
        {t('text.giftTarget', {
          reached: formatCurrency(reached, { skipFloat: reached % 1 === 0 }),
          target: formatCurrency(target, { skipFloat: target % 1 === 0 }),
        })}
      </Text>
      <ListLink
        href={url}
        onClick={() => trackEvent('gift__clicked', { gift: title })}
      >
        <Button
          label={t('text.contribute')}
          textColor={theme.black}
          bgColor={theme.white}
          borderColor={theme.black}
          style={{ width: '100%' }}
        />
      </ListLink>
    </Container>
  );
};

export { GiftItem };
