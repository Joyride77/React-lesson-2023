import React from 'react'

const SignUp = () => {
    return (
        <form onSubmit={(e) => {
            e.preventDefault();
            alert('Submitting!');
        }}
        >
            <input />
            <button>Sent</button>
        </form>
    )
}

export default SignUp