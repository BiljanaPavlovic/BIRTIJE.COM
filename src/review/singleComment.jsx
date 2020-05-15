import React from "react";

export default function singleComment({ name, comment }) {
  return (
    <div>
      <h6>{name}</h6>
      <p>{comment}</p>
    </div>
  );
}
