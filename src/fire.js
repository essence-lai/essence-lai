import firebase from 'firebase'
var config = {
    apiKey: "AIzaSyBpTRtTK6zBX5PmwRQMkEFXpKYvGbAWmYM",
    authDomain: "essence-lai.firebaseapp.com",
    databaseURL: "https://essence-lai.firebaseio.com",
    projectId: "essence-lai",
    storageBucket: "essence-lai.appspot.com",
    messagingSenderId: "894454404820"
};
var fire = firebase.initializeApp(config);
export default fire;