import React from "react";
import History from "./History";
import Poems from "./Poems";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

export default function About() {
  return (
    <div>
           <p>
           U sekciji stare kafane možete videti priče o starim beogradskim kafanama
         koje su čuvale duh ovog grada i njegovog boemskog duha. Citate velikih istorijskih
         ličnosti možete pogledati u segmentu kafanske pesme, pa citati. Takođe tu možete
         videti i srpske narodne zdravice i neke od najlepših pesama o kafanama.
        </p>
      <Router>
        <Link to="/about/history">
          <button className="btn-about">Beogradske kafane</button>
        </Link>
        <Link to="/about/poems">
          <button className="btn-about">Pesme boema</button>
        </Link>
       

        <Route path="/about/history" component={History} />
        <Route path="/about/poems" component={Poems} />
       
      </Router>
    </div>
  );
}
