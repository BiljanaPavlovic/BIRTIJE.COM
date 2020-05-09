import React from 'react';
import History from './History';
import Poems from './Poems';
import Quotes from './Quotes';
import {Link} from 'react-router-dom'


export default function About() {
    return(
        <div>
            <button className = 'btn-about'>Beogradske kafane</button>
            <button className = 'btn-about'>Pesme boema</button>
            <button className = 'btn-about'>Citati o kafanama</button>
            <History />
            <hr />
            <Poems />
            <hr />
            <Quotes />
            <br />
          
        </div>
    )
}
