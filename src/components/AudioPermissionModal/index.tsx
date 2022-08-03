import { useCallback, useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';

import WholeNewWorld from 'assets/audio/whole-new-world.mp3';

import { Button } from 'components/Button';

import { useTheme } from 'hooks';

import { Container, PermissionText } from './styles';

const AudioPermissionModal = () => {
  const theme = useTheme();
  const { t } = useTranslation();

  const [showModal, setShowModal] = useState(true);

  const audioRef = useRef<HTMLAudioElement>(null);

  const hideModal = useCallback(() => setShowModal(false), []);

  const playSong = useCallback(() => {
    if (audioRef.current) {
      audioRef.current.play();
      audioRef.current.loop = true;
    }
    hideModal();
  }, [hideModal]);

  return (
    <Container show={showModal}>
      <PermissionText>{t('text.song1')}</PermissionText>
      <PermissionText
        style={{
          marginBottom: '1rem',
        }}
      >
        {t('text.song2')}
      </PermissionText>
      <Button
        label={t('text.yes')}
        borderColor={theme.pink}
        onClick={playSong}
        style={{ margin: '1.5rem 0' }}
      />
      <Button
        label={t('text.no')}
        bgColor={theme.white}
        textColor={theme.pink}
        borderColor={theme.pink}
        onClick={hideModal}
      />
      <audio ref={audioRef} src={WholeNewWorld} />
    </Container>
  );
};

export { AudioPermissionModal };
