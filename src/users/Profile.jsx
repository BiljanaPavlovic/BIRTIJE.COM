import React from 'react'
import DashBoard from './DashBoard'
import Login from './Login'
import Revew from '../review/Revew'

export default function Profile() {
    return (
        <div>
            <Login />
            <hr />
            <h3>Ovo je pun profil clana zirija</h3>
            <img src="/img/smajli.jpg" alt="Slika clana zirija" className = 'profile-img-larg'/>
            <p>Kratki tekst o clanu zirija</p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eos voluptatibus eligendi soluta maiores consequatur? Earum fugiat aut voluptatibus. Molestiae obcaecati quos ut quas delectus possimus reprehenderit aut, explicabo magni natus nihil earum eum dolorem vitae repellendus, a similique excepturi incidunt laboriosam! Nam consequuntur voluptas fugiat eos ex ipsum dolores beatae.
            <p>Sve recenzije koje je napisao se izlistavaju ovde.</p>
            <hr />
            <Revew />
            <DashBoard />
            
        </div>
    )
}
