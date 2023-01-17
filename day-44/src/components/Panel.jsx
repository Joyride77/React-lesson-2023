import React from 'react'
import { useState } from 'react'

const Panel = ({ title, children }) => {
    const [isActive, setIsActive] = useState(false)

    return (
        <div>
            <h3>{title}</h3>
            {
                isActive ? <p>{children}</p>
                    : <button onClick={() => setIsActive(true)}>Show</button>
            }
        </div>
    )
}

export default Panel