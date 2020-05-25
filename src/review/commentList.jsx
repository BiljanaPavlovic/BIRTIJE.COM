import React, { useState, createContext, useEffect } from "react";

export const CommentContext = createContext();

//list of all comments
const firebase = require("firebase");
// Required for side-effects
require("firebase/firestore");

export const CommentList = (props) => {
  var db = firebase.firestore();

  useEffect(() => {
    db.collection("comment")
      .doc("Mornar")
      .get()
      .then(function (doc) {
        if (doc.exists) {
          console.log("Document data:", doc.data());
        } else {
          // doc.data() will be undefined in this case
          console.log("No such document!");
        }
      })
      .catch(function (error) {
        console.log("Error getting document:", error);
      });
  }, [db]);

  const [comments, commentList] = useState([
    {
      id: 1,
      name: "Pera",
      comment: "Odlicna kafana",
    },
  ]);

  return (
    <div>
      <CommentContext.Provider value={[comments, commentList]}>
        {props.children}
      </CommentContext.Provider>
    </div>
  );
};
