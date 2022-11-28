import { logEvent } from 'firebase/analytics';

import { analytics as firebaseAnalytics } from 'config/firebaseAnalytics';
import { analytics as segmentAnalytics } from 'config/segment';

export const trackEvent = (event: string, params?: { [key: string]: any }) => {
  if (process.env.NODE_ENV === 'development') return;

  logEvent(firebaseAnalytics, event, params);
  if (event === 'page_changed') {
    segmentAnalytics.page();
  } else {
    segmentAnalytics.track(event, params);
  }
};
