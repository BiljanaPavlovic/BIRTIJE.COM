import React from 'react'
import Profile from './Profile'

export default function ShortProfile() {
    return (
        <div>
            <p>Ovo je kraci profil</p>
            <img src="/img/smajli.jpg" alt="slika clana zirija" className = 'profile-img-small'/>
            <hr />
            <Profile />
            <hr />
        </div>
    )
}
