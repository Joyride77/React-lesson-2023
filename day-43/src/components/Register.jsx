import React from 'react'

const Register = () => {
    return (
        <div>
            <h1>Register</h1>
            <form>
                <label htmlFor="email">Email: </label>
                <input type="email" name='email' />
                <br />
                <label htmlFor="text">Firstname: </label>
                <input type="text" name='text' />
                <br />
                <label htmlFor="text">Lastname: </label>
                <input type="text" name='text' />
                <br />
                <label htmlFor="password">Password: </label>
                <input type="password" name="password" />
                <br />
                <label htmlFor="password">Confirm Password: </label>
                <input type="password" name="password" />
                <br />
                <button>Resister</button>
            </form>
        </div>
    )
}

export default Register