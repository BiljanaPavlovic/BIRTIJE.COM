import React from "react";
import Revew from "../review/Revew";
import UsersComment from "../review/coment";
import { CommentList } from "../review/commentList";

export default function Pub({ name, adress, opis }) {
  return (
    <div>
      <CommentList>
  <h4>{name}</h4>
  <h5>Ovu kafanu možete pronaći na sledećoj adresi: {adress}</h5>
  <p>{opis}</p>
        
        <Revew />
        <UsersComment />
      </CommentList>
    </div>
  );
}
