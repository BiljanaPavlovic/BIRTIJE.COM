import React from "react";
import History from "./History";
import Poems from "./Poems";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

export default function About() {
  return (
    <div>
           <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam
          cupiditate aperiam maiores temporibus, blanditiis modi impedit
          eligendi autem voluptatum quos. Eaque laboriosam fugit necessitatibus
          similique facilis. Aliquam, ipsam. Excepturi, suscipit?Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam
          cupiditate aperiam maiores temporibus, blanditiis modi impedit
          eligendi autem voluptatum quos. Eaque laboriosam fugit necessitatibus
          similique facilis. Aliquam, ipsam. Excepturi, suscipit?
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
