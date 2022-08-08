import { initializeApp } from 'firebase/app';
import { AnalyticsBrowser } from '@segment/analytics-next';

const analytics = AnalyticsBrowser.load({
  writeKey: process.env.REACT_APP_SEGMENT_KEY || '',
});

const firebaseConfig = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_PROJECT_ID,
  storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_APP_ID,
  measurementId: process.env.REACT_APP_MEASUREMENT_ID,
};

const app = initializeApp(firebaseConfig);

export { app, analytics };
