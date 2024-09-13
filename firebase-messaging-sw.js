// firebase-messaging-sw.js
importScripts('https://www.gstatic.com/firebasejs/9.0.0/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/9.0.0/firebase-messaging.js');

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

// Retrieve Firebase Messaging object
const messaging = firebase.messaging();

messaging.onBackgroundMessage((payload) => {
  console.log('Received background message ', payload);
  const notificationTitle = payload.notification.title;
  const notificationOptions = {
    body: payload.notification.body,
    icon: payload.notification.icon,
  };

  self.registration.showNotification(notificationTitle, notificationOptions);
});
