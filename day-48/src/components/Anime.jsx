import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react'

const Anime = () => {

    const [count, setCount] = useState(0);

    useEffect(() => {
        console.log("My component");
        // setCount(count + 1);
    }, []);

    function handleClick(e) {
        console.log("You clicked me");
    }
    return (
        <div>
            <h1>Use effect with Anime</h1>
            <button onClick={(e) => {
                handleClick(e);
                setCount(count + 1);
            }}>Click</button>
        </div>
    )
}

export default Anime