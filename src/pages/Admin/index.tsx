import { FormEventHandler, useRef, useState } from 'react';
import { ref, onValue, set } from 'firebase/database';
import { nanoid } from 'nanoid';

import { database } from 'config/firebase';

import { Button, Text } from 'components';

import {
  ButtonsContainer,
  Container,
  FormContainer,
  Input,
  InputContainer,
} from './styles';

const Admin = () => {
  const [isSigned, setIsSigned] = useState(false);
  const [guests, setGuests] = useState([{ name: '' }]);
  const passwordRef = useRef<HTMLInputElement>(null);

  const handleLogin: FormEventHandler<HTMLFormElement> = e => {
    e.preventDefault();

    onValue(
      ref(database, 'password'),
      snapshot => {
        const password = snapshot.val() as string | undefined;

        setIsSigned(
          !!password &&
            !!passwordRef.current?.value &&
            passwordRef.current.value === password,
        );
      },
      {
        onlyOnce: true,
      },
    );
  };

  const handleAddGuest: FormEventHandler<HTMLFormElement> = e => {
    e.preventDefault();

    const code = nanoid(4);

    set(ref(database, `guests/${code}`), guests).then(() => {
      window.postMessage({
        type: 'serviceWorkerMessage',
        message: `Convite adicionado com código: ${code}`,
        timeout: 5000,
      });
    });

    setGuests([{ name: '' }]);
  };

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
    </Container>
  );
};

export { Admin };
