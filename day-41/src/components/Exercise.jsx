import React from 'react'
import { useState } from 'react'

const Exercise = () => {
    const [counter, setCounter] = useState(0);
    const [inputText, setInputText] = useState('')

    function handleClick() {
        setCounter(counter + 1);
    }

    function handleInput(event) {
        setInputText(event.target.value)
    }
    return (
        <div>
            <p>{counter}</p>
            <button onClick={(e) => { handleClick(e) }}>Click me</button>

            <p>{inputText}</p>
            <input onChange={(e) => { handleInput(e) }} value={inputText} />
        </div>
    )
}

export default Exercise