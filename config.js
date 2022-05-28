import firebase from "firebase";
require("@firebase/firestore");

var firebaseConfig = {
  const firebaseConfig = {
    apiKey: "AIzaSyDNOhwPSat4nh21W5cMWEpcHYMXP1lH_Dg",
    authDomain: "aluguel-de-bike.firebaseapp.com",
    projectId: "aluguel-de-bike",
    storageBucket: "aluguel-de-bike.appspot.com",
    messagingSenderId: "127010230342",
    appId: "1:127010230342:web:f689bae1e4a99090f37a47"
  };
  
};

firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
