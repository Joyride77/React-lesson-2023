import React from 'react'
import { useState } from 'react';
import { ToastContainer, toast } from "react-toastify"
import { useNavigate } from 'react-router-dom';
import Header from './Header';

const Login = () => {

    const navigate = useNavigate();

    const [user, setUser] = useState({
        loginName: 'nfive8@gmail.com',
        password: '12345678',
    })

    const onSubmit = (e) => {
        e.preventDefault();
        console.log('username', e.target.email.value);
        console.log('password', e.target.password.value);
        if (user.loginName === e.target.email.value &&
            user.password === e.target.password.value) {
            toast('User is permitted')
            console.log('User is permitted');
            navigate("/", { replace: true, state: { bookName: "Fake Title" } });
        } else {
            toast('User is not permitted')
            console.log('User is not permitted');
            navigate("/register", { replace: true, state: { bookName: "Fake Title" } });
        }
    }
    return (
        <div>
            <Header />
            <h1>Login Form</h1>
            <form onSubmit={onSubmit}>
                <label htmlFor="email">Email: </label>
                <input name="email" type="email" /> <br />
                <label htmlFor="password">Password: </label>
                <input name="password" type="password" /> <br />
                <button>Sign In</button>
            </form>
            <ToastContainer />
        </div>
    )
}

export default Login