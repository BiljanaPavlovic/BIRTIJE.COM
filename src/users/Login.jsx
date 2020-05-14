import React from "react";
import DashBoard from "./DashBoard";

export default function Login() {
  return (
    <div>
      
        <p>Ovde se clanovi zirija mogu ulogovati.</p>
        <input type="text" placeholder="Korisnicko ime" />
        <br />
        <input type="password" placeholder="password" /><br/>
        <button className="btn-about">Log in</button>
        <hr />
        <DashBoard />
       
      
    </div>
  );
}
