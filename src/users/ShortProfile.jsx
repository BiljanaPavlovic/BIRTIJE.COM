import React from "react";
import { BrowserRouter as Router, Route, Link, } from "react-router-dom";
import Profile from "./Profile";

export default function ShortProfile({ name }) {
  return (
    <div>
      <Router>
          

        <Link to="/profileList/profile">
          <p>Ovo je kraci profil</p>
          <p>{name}</p>
          <img
            src="/img/smajli.jpg"
            alt="slika clana zirija"
            className="profile-img-small"
            />
        </Link>

        <Route path="/profileList/profile" component={Profile} />
           
      </Router>
    </div>
  );
}
