import React from 'react'
import { useState } from 'react'

const Panel = ({ title, children, onShow, isActive }) => {

    // let render = <button onClick={onShow}>Show</button>;
    // if (isActive) {
    //     render = <p>{children}</p>
    // }

    return (
        <div>
            <h3>{title}</h3>
            {isActive ? <p>{children}</p> : <button onClick={onShow}>Show</button>}
        </div>
    )
}

export default Panel