import React from 'react'
import { useState } from 'react';
import { useNavigate, Navigate } from 'react-router-dom';
import Header from './Header';

const Register = () => {
    // const navigate = useNavigate();

    // const handleSubmit = (e) => {
    //     e.preventDefault();
    //     navigate("/login", { replace: true, state: { bookName: "Fake Title" } });
    // }

    const [formSubmitted, setFormSubbmited] = useState(false);

    if (formSubmitted) {
        return (
            <Navigate to={"/login"} />
        )
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        setFormSubbmited(true);
    }
    return (
        <div>
            <Header />
            <h1>Register Form</h1>
            <form onSubmit={handleSubmit}>
                <label htmlFor="email">Email: </label>
                <input name="email" type="email" /> <br />
                <label htmlFor="username">Username: </label>
                <input name="username" type="text" /> <br />
                <label htmlFor="password">Password: </label>
                <input name="password" type="password" /> <br />
                <label htmlFor="phonenum">Phone Number: </label>
                <input name="phonenum" type="tel" /> <br />
                <button>Sign In</button>
            </form>
        </div>
    )
}

export default Register