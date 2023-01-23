import React from 'react'


const Input = ({ label, value, onChange }) => {

    return (
        <label>
            {label}:
            <input value={value} onChange={onChange} />
        </label>
    )
}

export default Input