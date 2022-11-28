import { getMessaging } from 'firebase/messaging';

import { app } from './firebaseApp';

const messaging = getMessaging(app);

export { messaging };
