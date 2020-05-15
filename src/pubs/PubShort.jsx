import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Pub from "./Pub";

export default function PubShort({ name, slika, opis }) {
  return (
    <div className = 'short-pub'>
      <Router>
        <Link to="/pubList/pub">
          <h3>{name}</h3>
          <img src={slika} className="pub-img" alt="slika kafane" />
          <p> {opis}</p>

          <Route path="/pubList/pub" component={Pub} />
        </Link>
      </Router>
    </div>
  );
}
