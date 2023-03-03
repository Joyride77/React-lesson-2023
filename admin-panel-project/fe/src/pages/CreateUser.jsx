import React, { useState, useEffect } from 'react'
import Header from '../components/Header';
import { Button, Box, Grid, TextField, InputLabel, MenuItem, FormControl, Select, Stack } from "@mui/material";
import { Link } from 'react-router-dom';
import LilNavi from '../components/LilNavi';
import PublishIcon from '@mui/icons-material/Publish';
import { fetchAllData, createUser } from '../services/axiosUserServices';


const CreateUser = () => {
    const URL = "http://localhost:8082/users"
    const [role, setRole] = React.useState('');
    const [user, setUser] = useState([])

    useEffect(() => {
        fetchAllData(URL, setUser);
    }, [])

    async function handleSubmit(e) {
        createUser(e, URL, setUser)
    }

    const handleChange = (event) => {
        setRole(event.target.value);
    };

    return (
        <Box m="20px">
            <LilNavi first="Dashboard" second="Management" third="Creating New User" />
            <Header title="New User" subtitle="Creating new User" />

            <Box sx={{ width: 550 }}>
                <div>
                    <form onSubmit={handleSubmit}>
                        <Grid container spacing={4}>
                            <Grid item xs={12}>
                                <TextField name='firstName' placeholder="Enter First Name" label="First Name" variant="filled" color="secondary" required fullWidth />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField name='lastName' placeholder="Enter First Name" label="Last Name" variant="filled" color="secondary" required fullWidth />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField name='phoneNumber' placeholder="Enter Phone Number" label="Phone Number" type="number" InputLabelProps={{ shrink: true, }} variant="filled" color="secondary" required fullWidth />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField name='email' placeholder="Enter E-Mail" label="E-Mail" variant="filled" color="secondary" required fullWidth />
                            </Grid>
                            {/* <Grid item xs={12}>
                                <TextField name='description' placeholder="Enter Description" label="Description" variant="filled" color="secondary" required fullWidth />
                            </Grid> */}
                            <Grid item xs={12}>
                                <FormControl fullWidth>
                                    <InputLabel id="demo-simple-select-autowidth-label" color="secondary">Role</InputLabel>
                                    <Select
                                        labelId="demo-simple-select-autowidth-label"
                                        id="demo-simple-select-autowidth"
                                        value={role}
                                        onChange={handleChange}
                                        label="Role"
                                        variant="filled"
                                        color="secondary"
                                        required
                                        name='role'
                                    >
                                        <MenuItem value="">
                                            <em>None</em>
                                        </MenuItem>
                                        <MenuItem value={"Admin"}>Admin</MenuItem>
                                        <MenuItem value={"User"}>User</MenuItem>
                                        <MenuItem value={"Customer"}>Customer</MenuItem>
                                    </Select>
                                </FormControl>
                            </Grid>
                            <Grid item xs={12}>
                                <TextField name='password' placeholder="Enter Password" label="Password" type="password" autoComplete="current-password" variant="filled" color="secondary" required fullWidth
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <Stack direction="row" spacing={2}>
                                    <Button type="submit" variant="contained" color="success" fullWidth><PublishIcon /></Button>
                                    <Link to={"/users"} style={{ textDecoration: "none" }}>
                                        <Button variant="outlined" color='secondary'>
                                            Back
                                        </Button>
                                    </Link>
                                </Stack>
                            </Grid>
                        </Grid>
                    </form>
                </div>
            </Box >
        </Box>
    )
}

export default CreateUser