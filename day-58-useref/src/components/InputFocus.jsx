import React from 'react'
import { useRef } from 'react'

const InputFocus = () => {
    const inputUseRef = useRef(null);
    const handleFocus = () => {
        inputUseRef.current.focus();
    }
    const handleBlur = () => {
        inputUseRef.current.blur();
    }

    return (
        <div>
            <input type="text" ref={inputUseRef} />
            <button onClick={handleFocus}>Focus</button>
            <button onClick={handleBlur}>Blur</button>
        </div>
    )
}

export default InputFocus