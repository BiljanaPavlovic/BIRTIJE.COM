import React from "react";
import DashBoard from "./DashBoard";

export default function Login() {





  
  return (
    <div>
      
        <p>Ovde se clanovi zirija mogu ulogovati.</p>
        <input type="text" className = 'input-login' placeholder="Korisnicko ime" />
        <br />
        <input type="password" className = 'input-login' placeholder="password" /><br/>
        <button className="btn-about">Log in</button>
        <hr />
        <DashBoard />
       
      
    </div>
  );
}
