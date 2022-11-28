import {
  FormEventHandler,
  forwardRef,
  useCallback,
  useEffect,
  useLayoutEffect,
  useState,
} from 'react';
import { onValue, ref as dbRef, set } from 'firebase/database';
import { useTranslation } from 'react-i18next';

import { database } from 'config/firebaseDatabase';

import { Button } from 'components/Button';
import { Subtitle } from 'components/Subtitle';
import { Title } from 'components/Title';

import { useTheme } from 'hooks';

import { trackEvent } from 'utils/analytics';

import {
  Backdrop,
  Container,
  ErrorMsg,
  FormContainer,
  GuestContainer,
  GuestName,
  Input,
  InputsContainer,
  OuterContainer,
  RadioButton,
  RadioContainer,
  RadioLabel,
} from './styles';

interface Invitation {
  name: string;
  confirmed?: boolean;
  reason?: string;
}

export interface ConfirmPresenceRef {
  show: () => void;
  hide: () => void;
}

const ConfirmPresenceModal = forwardRef<ConfirmPresenceRef>((_, ref) => {
  const theme = useTheme();
  const { t } = useTranslation();

  const [show, setShow] = useState(false);
  const [codeErrorMsg, setCodeErrorMsg] = useState('');
  const [formErrorMsg, setFormErrorMsg] = useState('');
  const [invitation, setInvitation] = useState<Invitation[]>([]);
  const [code, setCode] = useState('');

  const resetState = useCallback(() => {
    setCodeErrorMsg('');
    setFormErrorMsg('');
    setInvitation([]);
    setCode('');
  }, []);

  const handleOpen = useCallback(() => {
    document.body.style.position = 'fixed';
    document.body.style.overflowY = 'hidden';
    document.getElementsByTagName('html')[0].style.overflowY = 'hidden';
    setShow(true);
  }, []);

  const handleClose = useCallback(() => {
    const bodyTop = parseInt(document.body.style.top, 10);
    document.body.style.top = '';
    document.body.style.position = '';
    document.body.style.overflowY = '';
    document.getElementsByTagName('html')[0].style.overflowY = '';
    window.scrollTo({ top: bodyTop * -1 });
    resetState();
    setShow(false);
  }, [resetState]);

  const handleConfirmPresence: FormEventHandler<HTMLFormElement> = useCallback(
    e => {
      e.preventDefault();

      if (invitation.filter(inv => inv.confirmed !== undefined).length <= 0) {
        setFormErrorMsg('error.emptyConfirmation');
        return;
      }

      const parsedInvitations = invitation.map(inv => {
        if (inv.confirmed) {
          return {
            name: inv.name,
            confirmed: inv.confirmed,
          };
        }
        return inv;
      });

      set(dbRef(database, `guests/${code}`), parsedInvitations).then(() => {
        trackEvent('presence_confirmation_updated', {
          code,
          invitation,
        });
        handleClose();
        window.postMessage({
          type: 'serviceWorkerMessage',
          message: 'text.presenceConfirmationUpdated',
          timeout: 5000,
        });
      });
    },
    [code, handleClose, invitation],
  );

  const checkCode = useCallback((invitationCode: string) => {
    setInvitation([]);
    switch (invitationCode.length) {
      case 0:
        setCodeErrorMsg('');
        return;

      case 4:
        onValue(
          dbRef(database, `guests/${invitationCode}`),
          snapshot => {
            const data = snapshot.val();
            if (!data) {
              setCodeErrorMsg('error.invalidCode');
              return;
            }

            setCodeErrorMsg('');
            setInvitation(data);
          },
          {
            onlyOnce: true,
          },
        );
        return;

      default:
        setCodeErrorMsg('error.invalidCode');
    }
  }, []);

  const updateGuest = useCallback(
    (guest: Invitation, key: string, value: string | boolean) => {
      setInvitation(inv =>
        inv.map(mapGuest => {
          if (mapGuest.name === guest.name) {
            return {
              ...mapGuest,
              [key]: value,
            };
          }

          return mapGuest;
        }),
      );
    },
    [],
  );

  useEffect(() => {
    const timer = setTimeout(() => {
      checkCode(code);
    }, 500);

    return () => clearTimeout(timer);
  }, [checkCode, code]);

  useLayoutEffect(() => {
    if (ref) {
      if (typeof ref === 'function')
        ref({
          show: () => handleOpen(),
          hide: () => handleClose(),
        });
      else
        ref.current = {
          show: () => handleOpen(),
          hide: () => handleClose(),
        };
    }
  }, [ref, handleOpen, handleClose]);

  return (
    <>
      <OuterContainer show={show}>
        <Container show={show}>
          <Subtitle>{t('text.invitation')}</Subtitle>
          <Title>{t('text.presenceConfirmation')}</Title>
          <FormContainer onSubmit={handleConfirmPresence}>
            <InputsContainer>
              <Input
                type="text"
                placeholder={t('text.invitationCode')}
                value={code}
                onChange={e => setCode(e.target.value)}
                maxLength={4}
              />
              <ErrorMsg>{t(codeErrorMsg)}</ErrorMsg>
              {invitation.map(guest => (
                <GuestContainer key={guest.name}>
                  <GuestName>{guest.name}</GuestName>
                  <RadioContainer>
                    <RadioButton
                      name={`${guest.name}-presence`}
                      id={`${guest.name}-presence-0`}
                      checked={guest.confirmed === true}
                      onChange={() => updateGuest(guest, 'confirmed', true)}
                    />
                    <RadioLabel htmlFor={`${guest.name}-presence-0`}>
                      {t('text.willAttend')}
                    </RadioLabel>
                    <RadioButton
                      name={`${guest.name}-presence`}
                      id={`${guest.name}-presence-1`}
                      checked={guest.confirmed === false}
                      onChange={() => updateGuest(guest, 'confirmed', false)}
                    />
                    <RadioLabel htmlFor={`${guest.name}-presence-1`}>
                      {t('text.willNotAttend')}
                    </RadioLabel>
                  </RadioContainer>
                  {guest.confirmed === false && (
                    <Input
                      type="text"
                      placeholder={t('text.reason')}
                      value={guest.reason || ''}
                      onChange={e =>
                        updateGuest(guest, 'reason', e.target.value)
                      }
                    />
                  )}
                </GuestContainer>
              ))}
            </InputsContainer>
            <ErrorMsg>{t(formErrorMsg)}</ErrorMsg>
            <Button
              type="submit"
              label={t('text.confirm')}
              bgColor={theme.white}
              textColor={theme.pink}
              borderColor="transparent"
              disabled={code.length === 0 || !!codeErrorMsg}
            />
          </FormContainer>
        </Container>
      </OuterContainer>
      <Backdrop show={show} onClick={handleClose} />
    </>
  );
});

export { ConfirmPresenceModal };
