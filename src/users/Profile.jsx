import React from "react";
import Revew from "../review/Revew";

export default function Profile({description}) {
  return (
    <div>
     <p>{description}</p>
      <p>Sve recenzije koje je napisao se izlistavaju ovde.</p>
      <hr />
      <Revew />
    </div>
  );
}
