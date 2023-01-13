import React from 'react'

const Form = () => {
    return (
        <div id='form'>
            <label for="fname">First name: </label>
            <input type="text" name="fname" /><br />
            <label for="lname">Last name: </label>
            <input type="text" name="lname" /><br />
            <label for="password">Password: </label>
            <input type="password" name="password" /><br />
            <label for="confirmpass">Confirm Password: </label>
            <input type="password" name="confirmpass" /><br />
            <label for="register">Register</label>
            <button name='register'>Register</button><br />
        </div>
    )
}

export default Form