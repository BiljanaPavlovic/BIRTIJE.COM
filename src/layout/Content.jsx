import React from 'react'
import ListOfPub from '../pubs/ListOfPub'
import About from '../about/About'
import ListOfProfiles from '../users/ListOfProfiles'



export default function Content() {
    return (
     

        <div>
            <h1>Ovo je sredina!</h1>
           
            <About />
            <hr />
            <ListOfPub />
            <hr />
            <ListOfProfiles />
            <hr />
        </div>
        
    )
}
