import React, { useState } from 'react'

const Counter = ({ isFancy }) => {
    const [counter, setCounter] = useState(0);
    const [hover, setHover] = useState(false);


    let className = 'counter';
    if (hover) {
        className += ' hover';
    }

    if (isFancy) {
        className += " fancy"
    }


    return (
        <div className={className} onPointerEnter={() => setHover(true)} onPointerLeave={() => setHover(false)} >
            <h1>{counter}</h1>
            <button onClick={() => setCounter(counter + 1)}>
                Add one
            </button>
        </div>
    )
}

export default Counter

