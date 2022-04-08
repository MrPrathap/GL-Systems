importScripts("https://www.gstatic.com/firebasejs/9.6.10/firebase-app-compat.js");
importScripts("https://www.gstatic.com/firebasejs/9.6.10/firebase-messaging-compat.js");

firebase.initializeApp({
    apiKey: "AIzaSyCgezh04gz8TVwf23J06Q64oYYbyvDJmGc",
    authDomain: "gl-computer-reserve.firebaseapp.com",
    projectId: "gl-computer-reserve",
    storageBucket: "gl-computer-reserve.appspot.com",
    messagingSenderId: "897329719723",
    appId: "1:897329719723:web:9450af652d21b4320a8aee",
    measurementId: "G-TGC0X8HZ1R",
});
const messaging = firebase.messaging();