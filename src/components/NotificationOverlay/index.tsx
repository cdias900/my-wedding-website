import { useTranslation } from 'react-i18next';
import { useCallback, useEffect, useState } from 'react';
import {
  getMessaging,
  getToken,
  isSupported,
  onMessage,
} from 'firebase/messaging';

import { app } from 'config/firebaseApp';

import { Button } from 'components/Button';

import { useTheme } from 'hooks';

import { saveFcmToken } from 'utils/saveFcmToken';
import { trackEvent } from 'utils/analytics';

import { Container, Modal, ModalText } from './styles';

const NotificationOverlay = () => {
  const [showModal, setShowModal] = useState(true);
  const [showNotificationOverlay, setShowNotificationOverlay] = useState(true);
  const [permission, setPermission] = useState(
    'Notification' in window ? window.Notification.permission : 'denied',
  );

  const theme = useTheme();
  const { t } = useTranslation();

  const registerNotifications = useCallback(async () => {
    const supported = await isSupported();
    if (supported) {
      const messaging = getMessaging(app);
      getToken(messaging, {
        vapidKey: process.env.REACT_APP_PUSH_PUBLIC_KEY,
      }).then(token => {
        if (token) saveFcmToken(token);
      });
      onMessage(messaging, payload => {
        window.postMessage({
          type: 'serviceWorkerMessage',
          message: `${payload.notification?.title}\n${payload.notification?.body}`,
          timeout: 5000,
        });
      });
    }
  }, []);

  const onClickYes = useCallback(() => {
    trackEvent('enable_notifications_yes');
    setShowModal(false);
    if ('Notification' in window) {
      window.Notification.requestPermission().then(async perm => {
        setPermission(perm);
        setShowNotificationOverlay(false);
      });
    }
  }, []);

  useEffect(() => {
    if (permission === 'granted') registerNotifications();
  }, [permission, registerNotifications]);

  if (permission !== 'default') return null;

  return (
    <>
      {showNotificationOverlay && <Container />}
      <Modal show={showModal}>
        <ModalText>{t('text.notifications')}</ModalText>
        <Button
          label={t('text.yes')}
          borderColor={theme.pink}
          onClick={onClickYes}
          style={{ margin: '1.5rem 0' }}
        />
        <Button
          label={t('text.no')}
          bgColor={theme.white}
          textColor={theme.pink}
          borderColor={theme.pink}
          onClick={() => {
            trackEvent('enable_notifications_no');
            setShowModal(false);
            setShowNotificationOverlay(false);
          }}
        />
      </Modal>
    </>
  );
};

export { NotificationOverlay };
