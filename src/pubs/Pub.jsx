import React from "react";
import Revew from "../review/Revew";
import UsersComment from "../review/coment";
import { CommentList } from "../review/commentList";

export default function Pub({ name, opis, slika }) {
  return (
    <div>
      <CommentList>
       
        <p>adresa</p>
        <p>Posetioci sajta mogu da ostave svoj komentar na kafanu.</p>
        <hr />
        <Revew />
        <UsersComment />
      </CommentList>
    </div>
  );
}
