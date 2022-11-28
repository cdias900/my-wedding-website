import { Handler } from '@netlify/functions';
import { onValue, ref } from 'firebase/database';
import axios from 'axios';

import { database } from 'config/firebaseDatabase';

const handler: Handler = async (event, _) => {
  if (event.httpMethod !== 'POST')
    return {
      statusCode: 405,
      body: JSON.stringify({ message: 'Method not allowed' }),
    };

  if (!event.body)
    return {
      statusCode: 400,
      body: JSON.stringify({
        message: 'Add the notification to the request body',
      }),
    };

  try {
    const body = JSON.parse(event.body);
    onValue(
      ref(database, 'tokens'),
      async snapshot => {
        const tokens = snapshot.val();
        if (!tokens) return;

        await axios.post(
          'https://fcm.googleapis.com/fcm/send',
          {
            registration_ids: tokens,
            notification: { title: body.title, body: body.text },
            webpush: {
              link: `https://gabiepedro.cdias.dev/${body.link}`,
            },
          },
          {
            headers: {
              Authorization: `key=${process.env.REACT_APP_FCM_SERVER_KEY}`,
              'Content-Type': 'application/json',
            },
          },
        );
      },
      {
        onlyOnce: true,
      },
    );
    return {
      statusCode: 200,
      body: JSON.stringify({
        message: 'Notifications sent',
      }),
    };
  } catch (e) {
    return {
      statusCode: 400,
      body: JSON.stringify({
        message: `Error while trying to send notifications: ${JSON.stringify(
          e,
        )}`,
      }),
    };
  }
};

export { handler };
