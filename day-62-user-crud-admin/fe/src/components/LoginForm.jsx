import React from 'react'
import { toast } from "react-toastify"
import { TextField, Grid, Button, Typography } from '@mui/material'
import { useNavigate } from 'react-router-dom'

const LoginForm = () => {
    const URL = 'http://localhost:8080/login'
    const navigate = useNavigate();

    async function handleSubmit(e) {
        e.preventDefault();
        const data = {
            email: e.target.email.value,
            password: e.target.password.value,
        }

        const options = {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        }

        const FETCHED_DATA = await fetch(URL, options)
        const FETCHED_JSON = await FETCHED_DATA.json();
        console.log(FETCHED_JSON);

        if (FETCHED_JSON.status === "success") {
            toast('You are approved to Login')
            navigate("/users")
        } else {
            toast(FETCHED_JSON.status)
        }
    }

    return (
        <div>
            <Typography mb={3}>Log in</Typography>
            <form onSubmit={handleSubmit}>
                <Grid container spacing={2}>
                    <Grid item xs={12}>
                        <TextField
                            id='email'
                            name='email'
                            variant='filled'
                            size='small'
                            label='Email'
                            type='email'
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                            id='password'
                            name='password'
                            variant='filled'
                            size='small'
                            label='Password'
                            type='password'
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <Button type='submit' variant='outlined'>Login</Button>
                    </Grid>
                </Grid>
            </form>

        </div>
    )
}

export default LoginForm