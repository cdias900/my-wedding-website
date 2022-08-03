import { useCallback, useRef, useState } from 'react';

import WholeNewWorld from 'assets/audio/whole-new-world.mp3';

import { Button } from 'components/Button';
import { Text } from 'components/Text';

import { useTheme } from 'hooks';

import { Container } from './styles';

const AudioPermissionModal = () => {
  const theme = useTheme();

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
      <Text
        style={{
          textAlign: 'center',
        }}
      >
        Este site possui música.
      </Text>
      <Text
        style={{
          marginBottom: '1rem',
          textAlign: 'center',
        }}
      >
        Deseja reproduzir enquanto navega?
      </Text>
      <Button
        label="Sim"
        borderColor={theme.pink}
        onClick={playSong}
        style={{ margin: '1.5rem 0' }}
      />
      <Button
        label="Não"
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
