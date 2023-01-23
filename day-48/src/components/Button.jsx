import React, { useState } from 'react'
import { useEffect } from 'react'

const Button = () => {
    const [isPlaying, setIsPlaying] = useState(false);

    useEffect(() => {
        if (isPlaying) {
            console.log('it is playing');
        } else {
            console.log("it is not playing");
        }
    }, [isPlaying])

    function handleClick() {
        console.log("you clicked me");
        setIsPlaying(!isPlaying);
    }
    return (
        <div>
            <button onClick={handleClick}>Click me</button>
        </div>
    )
}

export default Button