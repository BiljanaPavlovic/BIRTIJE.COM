import React, {useState} from 'react'

export default function Revew() {
    const [counter, setCounter] = useState(0)

    const increase= () => {
        setCounter(counter+1)
    }

    return (
        <div>
            <p>Ovo je siri komentar koji ostavlja ziri za svaku birtiju/</p>
            <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                 Cum quo eos ut architecto, ipsum facere reiciendis officiis 
                 repudiandae quisquam neque veritatis tempora. Impedit voluptatem
                 boriosam ducimus, et commodi illo perspiciatis.
                </p>
                <h3>{counter}</h3>
                <button className = 'btn-like' onClick = {increase}><img src="/img/krigla.png" alt="krigla"/></button>

            <hr />
        </div>
    )
}
