import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { useLocation } from "react-router-dom";
import Header from '../components/Header'
import { Box, Grid, TextField, Stack, Button, InputLabel, MenuItem, FormControl, Select } from "@mui/material";
import LilNavi from '../components/LilNavi';
import SaveAltIcon from '@mui/icons-material/SaveAlt';
import { updateUser } from "../services/axiosUserServices"

const EditUser = () => {
    let data = useLocation();
    const URL = "http://localhost:8082/users"
    const [user, setUser] = useState([])
    const [role, setRole] = React.useState('');
    const [currentUser, setCurrentUser] = useState(data.state.user[0]);



    async function handleEdit() {
        updateUser(currentUser, URL, setUser)
    }

    function handleFirstName(e) {
        setCurrentUser({ ...currentUser, firstName: e.target.value });
    }
    function handleLastName(e) {
        setCurrentUser({ ...currentUser, lastName: e.target.value });
    }
    function handlePhoneNumber(e) {
        setCurrentUser({ ...currentUser, phoneNumber: e.target.value });
    }
    function handleEmail(e) {
        setCurrentUser({ ...currentUser, email: e.target.value });
    }
    // function handleDescription(e) {
    //     setCurrentUser({ ...currentUser, description: e.target.value });
    // }
    const handleChange = (e) => {
        setRole(e.target.value);
        setCurrentUser({ ...currentUser, role: e.target.value });
    };
    function handlePassword(e) {
        setCurrentUser({ ...currentUser, password: e.target.value });
    }

    return (
        <Box m="20px">
            <LilNavi first="Dashboard" second="Management" third="Edit User" />
            <Header title="Edit User" subtitle="Edit User" />

            <Box sx={{ width: 550 }}>
                {
                    currentUser &&
                    <div>
                        <form>
                            <Grid container spacing={4}>
                                <Grid item xs={12}>
                                    <TextField name='firstName' defaultValue={currentUser.firstName} onChange={handleFirstName} label="First Name" variant="filled" color="secondary" required fullWidth />
                                </Grid>
                                <Grid item xs={12}>
                                    <TextField name='lastName' defaultValue={currentUser.lastName} onChange={handleLastName} label="Last Name" variant="filled" color="secondary" required fullWidth />
                                </Grid>
                                <Grid item xs={12}>
                                    <TextField name='phoneNumber' defaultValue={currentUser.phoneNumber} onChange={handlePhoneNumber} label="Phone Number" type="number" InputLabelProps={{ shrink: true, }} variant="filled" color="secondary" required fullWidth />
                                </Grid>
                                <Grid item xs={12}>
                                    <TextField name='email' defaultValue={currentUser.email} onChange={handleEmail} label="E-Mail" variant="filled" color="secondary" required fullWidth />
                                </Grid>
                                {/* <Grid item xs={12}>
                                    <TextField name='description' defaultValue={currentUser.description} onChange={handleDescription} label="Description" variant="filled" color="secondary" required fullWidth />
                                </Grid> */}
                                <Grid item xs={12}>
                                    <FormControl fullWidth>
                                        <InputLabel id="demo-simple-select-autowidth-label" color="secondary">Role</InputLabel>
                                        <Select
                                            labelId="demo-simple-select-autowidth-label"
                                            id="demo-simple-select-autowidth"
                                            value={currentUser.role}
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
                                    <TextField name='password' defaultValue={currentUser.password} onChange={handlePassword} label="Password" type="password" autoComplete="current-password" variant="filled" color="secondary" required fullWidth
                                    />
                                </Grid>
                                <Grid item xs={12}>
                                    <Stack direction="row" spacing={2}>
                                        <Button variant="contained" color="success" fullWidth
                                            onClick={handleEdit}
                                        >
                                            <SaveAltIcon />
                                        </Button>
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
                }
            </Box>
        </Box>
    )
}

export default EditUser