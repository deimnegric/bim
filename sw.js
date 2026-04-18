importScripts('https://www.gstatic.com/firebasejs/9.22.1/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/9.22.1/firebase-messaging-compat.js');

// Kanka buradaki bilgiler senin index.html'dekiyle BİREBİR aynı olmalı
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

// Arka plan mesajlarını yakalama
messaging.onBackgroundMessage((payload) => {
    console.log('[sw.js] Arka plan mesajı geldi: ', payload);
    const notificationTitle = payload.notification.title;
    const notificationOptions = {
        body: payload.notification.body,
        icon: 'logo.png' // Logonun adından emin ol
    };

    self.registration.showNotification(notificationTitle, notificationOptions);
});
