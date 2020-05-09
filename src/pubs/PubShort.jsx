import React from 'react'
import Pub from './Pub'

export default function PubShort() {
    return (
        <div>
            <h3>Naziv kafane</h3>
            <img src="/img/kafana.jpg" alt="slika kafane" className = 'pub-img'/>
            <p>ovo je prikaz u listi i vodi ka sirem prikazu kafane</p>
            <hr />
            <Pub />
        </div>
    )
}
