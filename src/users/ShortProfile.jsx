import React from 'react'

export default function ShortProfile({name}) {
    return (
        <div>
            <p>Ovo je kraci profil</p>
            <p>{name}</p>
            <img src="/img/smajli.jpg" alt="slika clana zirija" className = 'profile-img-small'/>
            <hr />
            
            <hr />
        </div>
    )
}
