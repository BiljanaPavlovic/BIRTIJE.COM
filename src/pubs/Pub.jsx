import React, {useState} from 'react';
import Revew from '../review/Revew';
import UsersComment from '../review/coment';


export default function Pub({name,opis,slika}) {

    return (
        <div>
            <h2>Ovo je prikaz jedne kafane.</h2>
            <h3>{name}</h3>
            <img src="/img/kafana.jpg" alt="kafana" className = 'pub-img'/>
    <p>{opis}</p>
            <p>Ovde se prikazuje google mapa do kafane</p>
            <p>Ovde se prikazuje recenzije zirija.</p>
            <p>Posetioci sajta mogu da ostave svoj komentar na kafanu.</p>
            <hr />
            <Revew />
            <UsersComment />
            
        
        </div>
    )
}
