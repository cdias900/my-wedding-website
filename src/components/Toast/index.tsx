import { useCallback, useEffect, useMemo, useState } from 'react';
import { useTranslation } from 'react-i18next';

import { Button } from 'components/Button';

import { useShowHeader } from 'hooks';

import { trackEvent } from 'utils/analytics';

import { Container } from './styles';

interface MessageProps {
  type: string;
  message: string;
  action?: string;
  timeout?: number;
}

const Toast = () => {
  const { t } = useTranslation();
  const { showHeader } = useShowHeader();

  const [show, setShow] = useState(false);
  const [msg, setMsg] = useState('');
  const [act, setAct] = useState('');

  const actions = useMemo(
    () => ({
      updateServiceWorker: () => {
        navigator.serviceWorker.getRegistration().then(registration => {
          const waiting = registration?.waiting;
          waiting?.postMessage({
            type: 'SKIP_WAITING',
          });

          waiting?.addEventListener('statechange', e => {
            // @ts-ignore
            if (e?.target?.state === 'activated') {
              window.location.reload();
            }
          });
        });
      },
    }),
    [],
  );

  const handleMessage = useCallback(
    (event: MessageEvent<MessageProps | undefined>) => {
      if (event.data?.type === 'serviceWorkerMessage') {
        const { message, action, timeout } = event.data;
        setMsg(message);
        setAct(action || '');
        setShow(true);

        if (timeout) {
          setTimeout(() => {
            setShow(false);
          }, timeout);
        }
      }
    },
    [],
  );

  useEffect(() => {
    window.addEventListener('message', handleMessage);

    return () => {
      window.removeEventListener('message', handleMessage);
    };
  }, [handleMessage]);

  return (
    <Container show={show} avoidHeader={showHeader}>
      <Button
        label={t(msg)}
        onClick={() => {
          actions[act as keyof typeof actions]?.();
          setShow(false);
          trackEvent('toast_clicked', {
            message: msg,
            action: act,
          });
        }}
      />
    </Container>
  );
};

export { Toast };
