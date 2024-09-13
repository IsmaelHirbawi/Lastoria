// firebase-messaging-sw.js
importScripts('https://www.gstatic.com/firebasejs/9.15.0/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/9.15.0/firebase-messaging-compat.js');

// Initialize the Firebase app in the service worker by passing in your firebaseConfig object
const firebaseConfig = {
  apiKey: "AIzaSyDH_JNdk4yPfvcjyTlCYNpRpn6N-_1zqwU",
  authDomain: "lastoria-acfd1.firebaseapp.com",
  projectId: "lastoria-acfd1",
  storageBucket: "lastoria-acfd1.appspot.com",
  messagingSenderId: "1048196802674",
  appId: "1:1048196802674:web:c124bdd30ea3efa4fd3aeb"
};

firebase.initializeApp(firebaseConfig);

// Retrieve an instance of Firebase Messaging so that it can handle background messages
const messaging = firebase.messaging();

// Background message handler
messaging.onBackgroundMessage((payload) => {
  console.log('[firebase-messaging-sw.js] Received background message ', payload);

  // Customize notification here
  const notificationTitle = payload.notification.title;
  const notificationOptions = {
    body: payload.notification.body,
    icon: '/firebase-logo.png' // You can change the icon path as per your requirement
  };

  self.registration.showNotification(notificationTitle, notificationOptions);
});
