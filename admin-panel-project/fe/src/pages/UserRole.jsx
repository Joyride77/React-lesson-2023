import React, { useState, useEffect } from "react";
import Header from "../components/Header";
import {
    Button,
    Box,
    Grid,
    TextField,
    InputLabel,
    MenuItem,
    FormControl,
    Select,
    Stack,
} from "@mui/material";
import LilNavi from "../components/LilNavi";
import PublishIcon from "@mui/icons-material/Publish";
import { Link } from 'react-router-dom';
import { fetchAllData, userRoleEdit } from "../services/axiosUserServices";

const UserRole = () => {
    const URL = "http://localhost:8082/user-role";
    const [user, setUser] = useState([]);

    useEffect(() => {
        fetchAllData(URL, setUser);
    }, []);

    async function handleSubmit(e) {
        userRoleEdit(e, URL, setUser);
    }

    return (
        <Box m="20px">
            <LilNavi
                first="Dashboard"
                second="Management"
                third="Creating New User"
            />
            <Header title="Add User Role" subtitle="Creating new Role" />

            <Box sx={{ width: 550 }}>
                <div>
                    <form onSubmit={handleSubmit}>
                        <Grid container spacing={4}>
                            <Grid item xs={12}>
                                <TextField
                                    name="userRoleName"
                                    placeholder="Enter Role"
                                    id="filled-basic"
                                    label="Role"
                                    variant="filled"
                                    color="secondary"
                                    required
                                    fullWidth
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <Stack direction="row" spacing={2}>
                                    <Button
                                        type="submit"
                                        variant="contained"
                                        color="success"
                                        fullWidth
                                    >
                                        <PublishIcon />
                                    </Button>
                                    <Link to={"/users-role-management"} style={{ textDecoration: "none" }}>
                                        <Button variant="outlined" color='secondary'>
                                            Back
                                        </Button>
                                    </Link>
                                </Stack>
                            </Grid>
                        </Grid>
                    </form>
                </div>
            </Box>
        </Box>
    );
};

export default UserRole;
