import React, {useState} from 'react'

export default function Revew() {
    const [counter, setCounter] = useState(0);
    const [negativCounter, setNegativCounter] = useState(0);


    const increase= () => {
        setCounter(counter+1)
    }
    const decrease = () => {
        setNegativCounter(negativCounter - 1);
      };

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
                <button className="btn-like" onClick={increase}>
        <img src="/img/like.png" alt="krigla" />
      </button>
                <h3>{negativCounter}</h3>
      <button className="btn-like" onClick={decrease}>
        <img src="/img/dislajk.png" alt="krigla" />
      </button>
            <hr />
        </div>
    )
}
