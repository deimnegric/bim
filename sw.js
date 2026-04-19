importScripts('https://www.gstatic.com/firebasejs/9.22.1/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/9.22.1/firebase-messaging-compat.js');

firebase.initializeApp({
    apiKey: "AIzaSyB40uhJRRzf-7_Id7__l5babzus4u_U3Zg",
    messagingSenderId: "1012195345128",
    appId: "1:1012195345128:web:4095d72243f9e0d5d8bf5d"
});

const messaging = firebase.messaging();

messaging.onBackgroundMessage((payload) => {
    const notificationTitle = payload.notification.title;
    const notificationOptions = {
        body: payload.notification.body,
        icon: '1776551190145.jpg' // Klasöründe logo.png yoksa burası boş görünebilir
    };
    self.registration.showNotification(notificationTitle, notificationOptions);
});
