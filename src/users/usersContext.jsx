import React, {useState, createContext} from 'react';

export const UserContext = createContext();

export const UserProvider = () => {
const [user, setUser] = useState([
    {
        name: "Jovke"
    },
    {
        name: 'Mirko'
    },
    {
        name: 'Dzoni'
    },
    {
        name: 'Glomi'
    },
    {
        name: 'Boki'
    },
    {
        name: 'Djeka'
    },
    {
        name: 'Mina'
    },
    {
        name: 'Sava'
    },
    {
        name: 'JovanaP'
    },
    {
        name: 'Bilja'
    },
    {
        name: 'Marina'
    },
    {
        name: 'Aleksandra'
    }
])






    return (
        <div>
            
        </div>
    )
}
