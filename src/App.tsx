import { ThemeProvider } from 'styled-components';
import { useEffect, useState } from 'react';
import { getToken, onMessage } from 'firebase/messaging';

import { Routes } from 'routes';

import 'config/firebaseApp';
import 'config/firebaseDatabase';
import 'config/firebaseAnalytics';
import 'config/segment';
import 'config/i18n';

import { messaging } from 'config/firebaseMessaging';

import { NotificationOverlay } from 'components';

import { ShowHeaderProvider } from 'hooks';

import { saveFcmToken } from 'utils/saveFcmToken';

import { defaultTheme } from 'styles/themes/default';
import { GlobalStyle } from 'styles/global';

const App = () => {
  const [showNotificationOverlay, setShowNotificationOverlay] = useState(false);

  useEffect(() => {
    setShowNotificationOverlay(true);
    window.Notification.requestPermission().then(permission => {
      setShowNotificationOverlay(false);
      if (permission === 'granted') {
        getToken(messaging, {
          vapidKey: process.env.REACT_APP_PUSH_PUBLIC_KEY,
        }).then(token => {
          if (token) saveFcmToken(token);
        });
      }
    });

    onMessage(messaging, payload => {
      window.postMessage({
        type: 'serviceWorkerMessage',
        message: `${payload.notification?.title}\n${payload.notification?.body}`,
        timeout: 5000,
      });
    });
  }, []);

  return (
    <ThemeProvider theme={defaultTheme}>
      {showNotificationOverlay && <NotificationOverlay />}
      <ShowHeaderProvider>
        <GlobalStyle />
        <Routes />
      </ShowHeaderProvider>
    </ThemeProvider>
  );
};

export { App };
