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
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam, aut
          recusandae! Deserunt qui labore sint ab nam porro totam, ex provident
          illo nulla consectetur sequi excepturi cumque sit facilis soluta atque
          earum saepe. Illum doloribus aspernatur est quasi, hic quae asperiores
          nihil commodi itaque! Quo culpa, explicabo non dolorum rerum eos fuga
          accusamus, eaque ad qui vero labore reiciendis aspernatur cum
          similique, tempore beatae fugit repellat nulla laudantium cupiditate.
          Autem rem sequi corrupti tempora aliquam quis repellat molestias culpa
          provident, temporibus itaque iusto. Enim, laboriosam! Quia modi,
          laborum facere animi exercitationem cupiditate, doloribus accusamus
          magnam, possimus quasi debitis optio aliquam.
        </p>
        <Route path="/about" component={About} />
        <Route path="/pubList" component={ListOfPub} />
        <Route path="/profileList" component={ListOfProfiles} />
        <Route path="/ziri" component={Login} />
      </div>
    </Router>
  );
}
