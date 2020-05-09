import React, {useState, useContext} from 'react'
import PubShort from './PubShort'
import { PubContext } from './pubContext'
import Pub from './Pub'

export default function ListOfPub() {
    //const [pub, setPub] = useContext(PubContext)
    return (
          
        <div>

            <p>Ovde se izlistavaju sve kafane.</p>
            {/*pub.map(pub =>
            <Pub name = {pub.name} slika = {pub.slika} key = {pub.id} />
            )*/}
            <PubShort />
            <hr />
        </div>
            
    )
}
