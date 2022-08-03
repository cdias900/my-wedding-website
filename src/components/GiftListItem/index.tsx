import { FC } from 'react';

import { Button } from 'components/Button';
import { Text } from 'components/Text';

import { useTheme } from 'hooks';

import { Container, ListLink, LogoImage } from './styles';

interface GiftListItemProps {
  title: string;
  url: string;
  logo: string;
}

const GiftListItem: FC<GiftListItemProps> = ({ title, url, logo }) => {
  const theme = useTheme();
  return (
    <Container>
      <LogoImage src={logo} />
      <Text style={{ marginBottom: '2rem', marginTop: 'auto' }}>
        Lista de presentes na {title}
      </Text>
      <ListLink href={url}>
        <Button
          label="Acessar"
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
