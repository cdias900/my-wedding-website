import { getAnalytics } from 'firebase/analytics';

import { app } from './firebaseApp';

const analytics = getAnalytics(app);

export { analytics };
