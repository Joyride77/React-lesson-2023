import React from 'react'
import { TextField, Grid, Button, InputLabel, Select, MenuItem } from '@mui/material'
import { useNavigate } from "react-router-dom"
import { useState } from 'react'
import { useEffect } from 'react'

const UserResisterForm = () => {
    const URL = 'http://localhost:8080/register'
    const ROLE_URL = 'http://localhost:8080/users/roles'

    const [roles, setRoles] = useState([])
    const [currentRole, setCurrentRole] = useState(0)

    const navigate = useNavigate();

    useEffect(() => {
        fetchRoles();
    }, [])

    async function fetchRoles() {
        const FETCHED_DATA = await fetch(ROLE_URL)
        const FETCHED_JSON = await FETCHED_DATA.json();
        setRoles(FETCHED_JSON.data)
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        const data = {
            firstname: e.target.firstname.value,
            lastname: e.target.lastname.value,
            email: e.target.email.value,
            password: e.target.password.value,
            address: e.target.address.value,
            role: currentRole
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
        // console.log(FETCHED_JSON.data);
        if (FETCHED_JSON.status === 'success') {
            navigate('/users')
        }
    }

    function handleSelectChange(e) {
        console.log(e.target.value);
        setCurrentRole(e.target.value)
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <Grid container spacing={2}>
                    <Grid item xs={12}>
                        <TextField
                            id='firstname'
                            name='firstname'
                            variant='filled'
                            size='small'
                            label='First Name'
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                            id='lastname'
                            name='lastname'
                            variant='filled'
                            size='small'
                            label='Last Name'
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                            id='email'
                            name='email'
                            variant='filled'
                            size='small'
                            label='Email'
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                            id='password'
                            name='password'
                            variant='filled'
                            size='small'
                            label='Password'
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                            name='confirm'
                            id='confirm-password'
                            variant='filled'
                            size='small'
                            label='Confirm Password'
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                            id='address'
                            name='address'
                            variant='filled'
                            size='small'
                            label='Address'
                        />
                    </Grid>

                    <Grid item xs={12}>
                        <InputLabel>User Roles</InputLabel>
                        <Select
                            id='role-selector'
                            value={currentRole}
                            label="Roles"
                            onChange={handleSelectChange}
                        >
                            {
                                roles && roles.map((role, index) => {
                                    return (
                                        <MenuItem key={index} value={role.id}>{role.name}</MenuItem>
                                    )
                                })
                            }

                        </Select>
                    </Grid>

                    <Grid item xs={12}>
                        <Button type='submit' variant='outlined'>Submit</Button>
                    </Grid>
                </Grid>
            </form>
        </div>
    )
}

export default UserResisterForm