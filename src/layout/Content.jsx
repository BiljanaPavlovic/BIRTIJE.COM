import React from "react";
import ListOfPub from "../pubs/ListOfPub";
import About from "../about/About";
import ListOfProfiles from "../users/ListOfProfiles";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Login from "../users/Login";

export default function Content() {
  return (
    <Router>
      <div>
        <Link to="/about">
          <button className="btn-about">O kafanama</button>
        </Link>
        <Link to="/pubList">
          <button className="btn-about">Kafane</button>
        </Link>
        <Link to="/profileList">
          <button className="btn-about">Žiri</button>
        </Link>
        <br />
        <p className = 'opening-text'>
         Dobrodošli na sajt Birtije! Ovde možete pročitati nešto o najlepšim kafanama
         po oceni našeg žirija, kao i pogledati zanimljivosti o starim kafanama koje
         su kroz istoriju gradile boemski duh Beograda.
        </p>
        <Route path="/about" component={About} />
        <Route path="/pubList" component={ListOfPub} />
        <Route path="/profileList" component={ListOfProfiles} />
        <Route path="/ziri" component={Login} />
      </div>
    </Router>
  );
}
