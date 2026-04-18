importScripts('https://www.gstatic.com/firebasejs/9.22.1/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/9.22.1/firebase-messaging-compat.js');

const firebaseConfig = {
    apiKey: "AIzaSyB40uhJRRzf-7_Id7__l5babzus4u_U3Zg",
    authDomain: "ya-rabbim.firebaseapp.com",
    databaseURL: "https://ya-rabbim-default-rtdb.firebaseio.com",
    projectId: "ya-rabbim",
    storageBucket: "ya-rabbim.firebasestorage.app",
    messagingSenderId: "1012195345128",
    appId: "1:1012195345128:web:4095d72243f9e0d5d8bf5d"
};

firebase.initializeApp(firebaseConfig);
const messaging = firebase.messaging();

// Arka planda bildirim geldiğinde ne yapılacak?
messaging.onBackgroundMessage((payload) => {
  console.log('Arka planda bildirim geldi: ', payload);
  const notificationTitle = payload.notification.title;
  const notificationOptions = {
    body: payload.notification.body,
    icon: 'https://files.oaiusercontent.com/file-mX0H9D8a8P23Q0L97lXW3U?se=2024-10-18T14%3A49%3A42Z&sp=r&sv=2024-08-04&sr=b&rscc=max-age%3D604800%2C%20immutable%2C%20private&rscd=attachment%3B%20filename%3D1a7114b0-681b-4f9e-bc28-76672322d861.webp&sig=6Yy8Y6N0EAnX5w7hXw7hXw7hXw7hXw7hXw7hXw7hXw7hXw%3D'
  };

  self.registration.showNotification(notificationTitle, notificationOptions);
});
