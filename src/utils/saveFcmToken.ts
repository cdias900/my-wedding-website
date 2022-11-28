import { onValue, ref, set } from 'firebase/database';

import { database } from 'config/firebaseDatabase';

const saveFcmToken = (token: string) => {
  onValue(
    ref(database, 'tokens'),
    async snapshot => {
      const tokens = snapshot.val() as string[];
      if (!tokens) {
        await set(ref(database, 'tokens'), [token]);
        return;
      }

      if (tokens.indexOf(token) === -1) {
        await set(ref(database, 'tokens'), [...tokens, token]);
      }
    },
    {
      onlyOnce: true,
    },
  );
};

export { saveFcmToken };
