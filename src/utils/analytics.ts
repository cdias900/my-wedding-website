import { getAnalytics, logEvent } from 'firebase/analytics';

import { app } from 'config/analytics';

export const trackEvent = (event: string, params?: { [key: string]: any }) => {
  const analytics = getAnalytics(app);
  logEvent(analytics, event, params);
};
