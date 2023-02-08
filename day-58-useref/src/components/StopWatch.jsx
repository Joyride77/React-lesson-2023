import React from 'react'
import { useRef, useState } from 'react'

const StopWatch = () => {
    const [now, setNow] = useState(0);
    const [startTime, setStartTime] = useState(0);
    const timeRef = useRef(0);

    const handleStart = () => {
        setStartTime(Date.now());
        timeRef.current = setInterval(() => {
            setNow(Date.now());
        }, 1000)
    }
    const handleStop = () => {
        clearInterval(timeRef.current)
    }

    const timer = (now - startTime) < 0 ? 0 : (now - startTime) / 1000;

    return (
        <div>
            <h1>{timer}</h1>
            <button onClick={() => handleStart()}>Start</button>
            <button onClick={() => handleStop()}>Stop</button>
        </div>
    )
}

export default StopWatch