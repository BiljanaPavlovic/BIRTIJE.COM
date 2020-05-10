import React from 'react'

export default function PubShort({name, slika, opis }) {
    return (
        <div>
            <h3>{name}</h3>
            <img src = {slika} className = 'pub-img' alt = 'slika kafane'/>
    <p> {opis}</p>

        </div>
    )
}
