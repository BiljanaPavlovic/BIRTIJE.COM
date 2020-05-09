import React from 'react'
import ShortProfile from './ShortProfile'

export default function ListOfProfiles() {
    return (
        <div>
            <p>Ovo je lista svih clanova zirija i klikom na jednog dobija se njegov profil.</p>
            <ShortProfile />
            <hr />
        </div>
    )
}
