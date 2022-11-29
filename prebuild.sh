#!/usr/bin/env bash

echo -e "/* eslint-disable no-restricted-globals */
/* eslint-disable no-undef */
// Scripts for firebase and firebase messaging
importScripts('https://www.gstatic.com/firebasejs/8.2.0/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/8.2.0/firebase-messaging.js');

// Initialize the Firebase app in the service worker by passing the generated config
const firebaseConfig = {
  apiKey: '$REACT_APP_API_KEY',
  authDomain: '$REACT_APP_AUTH_DOMAIN',
  projectId: '$REACT_APP_PROJECT_ID',
  storageBucket: '$REACT_APP_STORAGE_BUCKET',
  messagingSenderId: '$REACT_APP_MESSAGING_SENDER_ID',
  appId: '$REACT_APP_APP_ID',
  measurementId: '$REACT_APP_MEASUREMENT_ID',
  databaseURL: '$REACT_APP_DATABASE_URL',
};

firebase.initializeApp(firebaseConfig);

const messaging = firebase.messaging();

messaging.onBackgroundMessage(payload => {
  const notificationTitle = payload.notification.title;
  const notificationOptions = {
    body: payload.notification.body,
    icon: '/logo512.png',
  };

  self.registration.showNotification(notificationTitle, notificationOptions);
});" > "$PWD/public/firebase-messaging-sw.js"
