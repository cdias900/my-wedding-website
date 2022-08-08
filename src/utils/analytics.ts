import { getAnalytics, logEvent } from 'firebase/analytics';

import { analytics, app } from 'config/analytics';

export const trackEvent = (event: string, params?: { [key: string]: any }) => {
  if (process.env.NODE_ENV === 'development') return;

  const firebaseAnalytics = getAnalytics(app);
  logEvent(firebaseAnalytics, event, params);
  if (event === 'page_changed') {
    analytics.page();
  } else {
    analytics.track(event, params);
  }
};
