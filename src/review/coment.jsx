import React, {useState} from 'react'

export default function UsersComment() {
    const [counter, setCounter] = useState(0)


    const increase= () => {
        setCounter(counter+1)
    }
    return (
        <div>
            <p>Ovo je kratki komentar koji ostavlja korisnik.</p>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maxime recusandae ad aperiam rerum soluta sint dignissimos blanditiis accusantium odit vero?</p>
            <h3>{counter}</h3>
            
                <button className = 'btn-like' onClick = {increase}><img src="/img/krigla.png" alt="krigla"/></button>
            <hr />
            <p>Napišite nam svoj komentar ako ste posetili ovu birtiju</p>
            <input type = 'text' placeholder = 'Vase ime'></input> <br/>
            <input type = 'text' placeholder = 'Komentar'></input>
        </div>
    )
}
