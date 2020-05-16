import React from "react";
import Revew from "../review/Revew";

export default function Profile({description, question1, question2}) {
  return (
    <div>
     <p>{description}</p>
     <p> <b>Kod birtija najviše cenim:</b> <br/> {question1} </p>
     <p><b> U birtijama me odbija: </b> <br/> {question2}
     </p>
      <p> Sve recenzije koje je napisao se izlistavaju ovde.</p>
      <hr />
      <Revew />
    </div>
  );
}
