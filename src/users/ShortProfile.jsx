import React from "react";
import { BrowserRouter as Router, Route, Link, } from "react-router-dom";
import Profile from "./Profile";

export default function ShortProfile({ name, slika1, slika2, description, question1, question2 }) {
  return (
    <div>
      <Router>
          

        <Link to="/profileList/profile">
          <img
            src={slika1} onClick={e => (e.currentTarget.src = slika2)}
            alt="slika clana zirija"
            className="profile-img-small"
            />
            <h3>{name}</h3>
        </Link>

        <Route path="/profileList/profile" component={() => <Profile description = {description} question1 = {question1} question2 = {question2} />}/>
           
      </Router>
    </div>
  );
}
