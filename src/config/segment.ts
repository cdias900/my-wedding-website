import { AnalyticsBrowser } from '@segment/analytics-next';

const analytics = AnalyticsBrowser.load({
  writeKey: process.env.REACT_APP_SEGMENT_KEY || '',
});

export { analytics };
