import { FormEventHandler, useEffect, useRef, useState } from 'react';
import { ref, onValue, set } from 'firebase/database';
import { nanoid } from 'nanoid';
import { useLocation } from 'react-router-dom';

import { database } from 'config/firebase';

import { ReactComponent as ConfirmedIcon } from 'assets/icons/check-mark.svg';
import { ReactComponent as NotConfirmedIcon } from 'assets/icons/x-mark.svg';
import { ReactComponent as UnknownIcon } from 'assets/icons/doubts-button.svg';

import { Button, Text } from 'components';

import { trackEvent } from 'utils/analytics';

import {
  ButtonsContainer,
  Container,
  FormContainer,
  GuestNameContainer,
  Input,
  InputContainer,
  Separator,
  Table,
} from './styles';

const Admin = () => {
  const location = useLocation();

  const [isSigned, setIsSigned] = useState(false);
  const [guests, setGuests] = useState([{ name: '' }]);
  const [invites, setInvites] = useState<
    {
      code: string;
      guests: { name: string; confirmed?: boolean; reason?: string }[];
    }[]
  >([]);
  const [search, setSearch] = useState('');
  const passwordRef = useRef<HTMLInputElement>(null);

  const handleLogin: FormEventHandler<HTMLFormElement> = e => {
    e.preventDefault();

    onValue(
      ref(database, 'password'),
      snapshot => {
        const password = snapshot.val() as string | undefined;

        const canSign =
          !!password &&
          !!passwordRef.current?.value &&
          passwordRef.current.value === password;

        trackEvent(canSign ? 'admin_login_succeeded' : 'admin_login_failed');

        setIsSigned(canSign);
      },
      {
        onlyOnce: true,
      },
    );
  };

  const handleAddGuest: FormEventHandler<HTMLFormElement> = e => {
    e.preventDefault();

    const code = nanoid(4);

    const validGuests = guests.filter(guest => guest.name !== '');
    if (validGuests.length < 1) {
      window.postMessage({
        type: 'serviceWorkerMessage',
        message:
          'Digite o nome do(s) convidado(s) antes de adicionar o convite',
        timeout: 5000,
      });
      return;
    }

    set(ref(database, `guests/${code}`), validGuests).then(() => {
      trackEvent('guest_added', {
        code,
        guests,
      });
      window.postMessage({
        type: 'serviceWorkerMessage',
        message: `Convite adicionado com código: ${code}`,
        timeout: 5000,
      });
    });

    setGuests([{ name: '' }]);
  };

  const getConfirmationIcon = (status?: boolean) => {
    if (status) return <ConfirmedIcon width={16} height={16} color="green" />;

    if (status === false)
      return <NotConfirmedIcon width={16} height={16} color="red" />;

    return <UnknownIcon width={16} height={16} />;
  };

  useEffect(() => {
    if (isSigned) {
      const unsubscribe = onValue(ref(database, 'guests'), snapshot => {
        const data = snapshot.val();
        setInvites(
          Object.entries(data).map(([key, value]) => ({
            code: key,
            guests: value as { name: string }[],
          })),
        );
      });

      return unsubscribe;
    }

    return () => null;
  }, [isSigned]);

  useEffect(() => {
    trackEvent('page_changed', { page: location.pathname });
  }, [location.pathname]);

  return (
    <Container>
      <FormContainer onSubmit={isSigned ? handleAddGuest : handleLogin}>
        {isSigned ? (
          guests.map((guest, index) => (
            <InputContainer key={guest + String(index)}>
              <Text>Nome do Convidado:</Text>
              <Input
                value={guest.name}
                onChange={e =>
                  setGuests(g => {
                    const newG = [...g];
                    newG[index].name = e.target.value;
                    return newG;
                  })
                }
              />
            </InputContainer>
          ))
        ) : (
          <>
            <InputContainer>
              <Text>Digite a senha:</Text>
              <Input type="password" ref={passwordRef} />
            </InputContainer>
            <Button label="Login" type="submit" />
          </>
        )}
        {isSigned && (
          <ButtonsContainer>
            {guests.length > 1 && (
              <Button
                label="-"
                style={{
                  minWidth: '4.8rem',
                  padding: '0.8rem',
                }}
                onClick={() => setGuests(g => g.slice(0, g.length - 1))}
                type="button"
              />
            )}
            <Button
              label="Adicionar Convite"
              type="submit"
              style={{
                margin: '0 0.8rem',
              }}
            />
            <Button
              label="+"
              style={{
                minWidth: '4.8rem',
                padding: '0.8rem',
              }}
              onClick={() => setGuests(g => [...g, { name: '' }])}
              type="button"
            />
          </ButtonsContainer>
        )}
      </FormContainer>
      {isSigned && (
        <Container>
          <InputContainer>
            <Text>Pesquisar código:</Text>
            <Input
              type="text"
              value={search}
              onChange={e => setSearch(e.target.value)}
            />
          </InputContainer>
          <Table>
            <thead>
              <tr>
                <th>Código</th>
                <th>Convidados</th>
              </tr>
            </thead>
            <tbody>
              {invites
                .filter(
                  invite =>
                    search === '' ||
                    invite.code.toLowerCase().startsWith(search.toLowerCase()),
                )
                .map(invite => (
                  <tr key={invite.code}>
                    <td>{invite.code}</td>
                    <td>
                      {invite.guests.map(guest => (
                        <GuestNameContainer key={guest.name}>
                          <Text>{guest.name}</Text>
                          <Separator />
                          {getConfirmationIcon(guest.confirmed)}
                        </GuestNameContainer>
                      ))}
                    </td>
                  </tr>
                ))}
            </tbody>
          </Table>
        </Container>
      )}
    </Container>
  );
};

export { Admin };
