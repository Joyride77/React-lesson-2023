import React from 'react'

const Login = () => {
    return (
        <div>
            <h1>Login</h1>
            <form>
                <label htmlFor="email">Email: </label>
                <input type="email" />
                <br />
                <label htmlFor="password">Password: </label>
                <input type="password" name="password" />
                <br />
                <button>Sign In</button>
            </form>
        </div>
    )
}

export default Login