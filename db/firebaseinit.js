import firebase from 'firebase';

const config = {
    apiKey: "AIzaSyBkwAk0lc0iXjMb0zJnVVSe-ocYkoq7xVM",
    authDomain: "team-player-ce1b7.firebaseapp.com",
    databaseURL: "https://team-player-ce1b7.firebaseio.com",
    storageBucket: "team-player-ce1b7.appspot.com",
    messagingSenderId: "458660119779"
}

firebase.initializeApp(config);

const database = firebase.database();

export default database;