import React, { useState, useContext } from "react";

import { CommentContext } from "./commentList";
import SingleComment from "./singleComment";

const firebase = require("firebase");
// Required for side-effects
require("firebase/firestore");





export default function UsersComment() {
  var db = firebase.firestore();
  const [name, setName] = useState("");
  const [comment, setComment] = useState("");
  const [comments, commentList] = useContext(CommentContext);

//upadate name in new comment

  const uptadeName = (e) => {
    setName(e.target.value);
  };
//upadate comment in new comment
  const uptadeComment = (e) => {
    setComment(e.target.value);
  };

  //adding comment in list of all comments on btn

  const addComment = (e) => {
    e.preventDefault();
    commentList((prevComments) => [
      ...prevComments,
      {
        name: name,
        comment: comment,
      },
    ]);

 
 
  // Add a new document in collection "cities"
db.collection("comment").doc("Mornar").set({
  name: name,
  comment: comment
})
.then(function() {
  console.log("Document successfully written!");
})
.catch(function(error) {
  console.error("Error writing document: ", error);
});
};




  return (
    <div className="comment">
      <p>Komentari posetilaca sajta:</p>
      {comments.map((comment) => (
        <SingleComment
          name={comment.name}
          comment={comment.comment}
          key={comment.id}
        />
      ))}
      <p>Napišite nam svoj komentar ako ste posetili ovu birtiju</p>
      <form>
        <input
          type="text"
          className="input-comment"
          placeholder="Vase ime"
          name="name"
          value={name}
          onChange={uptadeName}
        />
        <br />
        <input
          type="text"
          className="input-comment"
          name="comment"
          value={comment}
          onChange={uptadeComment}
          placeholder="Komentar"
        />
        <br />
        <button className="btn-about" onClick={addComment}>
          Posalji
        </button>
      </form>
    </div>
  );
}
