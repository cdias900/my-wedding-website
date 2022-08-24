import {
  FormEventHandler,
  useCallback,
  useEffect,
  useRef,
  useState,
} from 'react';
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
  IconButton,
  Input,
  InputContainer,
  Separator,
  Table,
} from './styles';

type Guest = {
  name: string;
  confirmed?: boolean;
  reason?: string;
};

type Invite = {
  code: string;
  guests: Guest[];
};

type StatusFilter = {
  confirmed: boolean;
  notConfirmed: boolean;
  unknown: boolean;
};

const Admin = () => {
  const location = useLocation();

  const [isSigned, setIsSigned] = useState(false);
  const [guests, setGuests] = useState([{ name: '' }]);
  const [invites, setInvites] = useState<Invite[]>([]);
  const [statusFilter, setStatusFilter] = useState<StatusFilter>({
    confirmed: true,
    notConfirmed: true,
    unknown: true,
  });
  const [searchCode, setSearchCode] = useState('');
  const [searchName, setSearchName] = useState('');
  const passwordRef = useRef<HTMLInputElement>(null);

  const handleLogin: FormEventHandler<HTMLFormElement> = useCallback(e => {
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
  }, []);

  const handleAddGuest: FormEventHandler<HTMLFormElement> = useCallback(
    e => {
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
    },
    [guests],
  );

  const getConfirmationStatusText = useCallback(
    (status?: boolean): keyof StatusFilter => {
      if (status) return 'confirmed';

      if (status === false) return 'notConfirmed';

      return 'unknown';
    },
    [],
  );

  const getConfirmationIcon = useCallback(
    (status?: boolean) => {
      const statusText = getConfirmationStatusText(status);

      if (statusText === 'confirmed')
        return <ConfirmedIcon width={16} height={16} color="green" />;

      if (statusText === 'notConfirmed')
        return <NotConfirmedIcon width={16} height={16} color="red" />;

      return <UnknownIcon width={16} height={16} />;
    },
    [getConfirmationStatusText],
  );

  const getSearchFilter = useCallback(
    (invite: Invite) => {
      if (
        !invite.guests.some(
          guest => statusFilter[getConfirmationStatusText(guest.confirmed)],
        )
      )
        return false;

      if (searchCode !== '')
        return invite.code.toLowerCase().includes(searchCode.toLowerCase());

      if (searchName !== '')
        return invite.guests.find(guest =>
          guest.name.toLowerCase().includes(searchName.toLowerCase()),
        );

      return true;
    },
    [getConfirmationStatusText, searchCode, searchName, statusFilter],
  );

  const updateStatusFilter = useCallback(
    (key: keyof StatusFilter, value: boolean) => {
      setStatusFilter(prevStatus => ({
        ...prevStatus,
        [key]: value,
      }));
    },
    [],
  );

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
              value={searchCode}
              onChange={e => {
                setSearchCode(e.target.value);
                setSearchName('');
              }}
            />
          </InputContainer>
          <InputContainer>
            <Text>Pesquisar convidado:</Text>
            <Input
              type="text"
              value={searchName}
              onChange={e => {
                setSearchName(e.target.value);
                setSearchCode('');
              }}
            />
          </InputContainer>
          <InputContainer>
            <IconButton
              active={statusFilter.confirmed}
              onClick={() =>
                updateStatusFilter('confirmed', !statusFilter.confirmed)
              }
            >
              <ConfirmedIcon width={16} height={16} color="green" />
            </IconButton>
            <IconButton
              active={statusFilter.notConfirmed}
              onClick={() =>
                updateStatusFilter('notConfirmed', !statusFilter.notConfirmed)
              }
            >
              <NotConfirmedIcon width={16} height={16} color="red" />
            </IconButton>
            <IconButton
              active={statusFilter.unknown}
              onClick={() =>
                updateStatusFilter('unknown', !statusFilter.unknown)
              }
            >
              <UnknownIcon width={16} height={16} />
            </IconButton>
          </InputContainer>
          <Table>
            <thead>
              <tr>
                <th>Código</th>
                <th>Convidados</th>
              </tr>
            </thead>
            <tbody>
              {invites.filter(getSearchFilter).map(invite => (
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
