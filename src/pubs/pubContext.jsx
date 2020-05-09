import React, {useState, createContext} from 'react';

export const PubContext = createContext();

export const PubProvider = (props) => {
const [pub, setPub] = useState([

    {
        id: 1,
        name: 'Mornar',
        slika: 'https://i2.wp.com/www.pivo.rs/wp-content/uploads/2014/08/mornar1.jpg',
        opis: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.'
    },
    {
        id: 2,
        name: 'Sunce',
        slika: 'https://www.u-beogradu.com/uploads/2015/10/restoran-sunce-beograd-11-823x420.jpg',
        opis: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.'
    },
    {
       id:3,
        name: 'Zora',
        slika: 'https://www.vostok.rs/sajt/doc/black-turtle-6-zora_5.jpg',
        opis: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.'
    },
    {
        id:4,
        name: 'Ana',
        slika: '',
        opis: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.'
    }
    
    ])



    return (
        <div>
            <PubContext.PubProvider value = {[pub, setPub]}>
                {props.children}
            </PubContext.PubProvider>
        </div>
    )
}
