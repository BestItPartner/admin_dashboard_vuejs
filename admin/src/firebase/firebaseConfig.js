import firebase from 'firebase/app'

// Initialize Firebase
var config = {
    apiKey: "AIzaSyDFYIpJlgGZBHyjcaiIKgPAadzSofuYaCY",
    authDomain: "vuesax-admin.firebaseapp.com",
    databaseURL: "https://vuesax-admin.firebaseio.com",
    projectId: "vuesax-admin",
    storageBucket: "vuesax-admin.appspot.com",
    messagingSenderId: "914001522995"
};

firebase.initializeApp(config);