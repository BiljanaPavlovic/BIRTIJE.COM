import React from 'react';
import './App.css';
import Header from './layout/Header';
import Content from './layout/Content';
import Footer from './layout/Footer';
import * as firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";






function App() {



  // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyB9LmInCQeR4ThhXtiYPAqnX7KLxmq7Xq4",
    authDomain: "birtije-f8a94.firebaseapp.com",
    databaseURL: "https://birtije-f8a94.firebaseio.com",
    projectId: "birtije-f8a94",
    storageBucket: "birtije-f8a94.appspot.com",
    messagingSenderId: "871132458978",
    appId: "1:871132458978:web:cbe709a91343d418f193bb",
    measurementId: "G-XEHWC9SV3X"
  };

  if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
  }
  var db = firebase.firestore();
  console.log(db)
  // var database = firebase.database();
  return (

    <div className="App">
      {<Header />}
      <Content />
      <Footer />
    </div>



  );
}

export default App;
