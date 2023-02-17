import { useEffect } from "react";
import { useState } from "react"

const FunctionalCounter = () => {
    const [count, setCount] = useState(0);

    const increase = () => {
        setCount(count + 1);
    };

    useEffect(() => {
        console.log('Component');
    }, [])

    return (
        <div style={{ margin: "50px" }}>
            <h2>{count}</h2>
            <button onClick={increase}>Add</button>
        </div>
    )
}

export { FunctionalCounter }