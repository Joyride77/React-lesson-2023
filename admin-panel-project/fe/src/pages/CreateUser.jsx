import React, { useState, useEffect } from 'react'
import Header from '../components/Header';
import { Button, Box, Grid, TextField, InputLabel, MenuItem, FormControl, Select, Stack } from "@mui/material";
import { Link } from 'react-router-dom';
import LilNavi from '../components/LilNavi';
import PublishIcon from '@mui/icons-material/Publish';


const CreateUser = () => {
    const URL = "http://localhost:8080/users"
    const [color, setColor] = React.useState('');
    const [user, setUser] = useState([])

    useEffect(() => {
        fetchAllData();
    }, [])

    async function fetchAllData() {
        const FETCHED_DATA = await fetch(URL);
        const FETCHED_JSON = await FETCHED_DATA.json();
        setUser(FETCHED_JSON.data)
    }


    async function handleSubmit(e) {
        e.preventDefault();
        const postData = {
            // title: e.target.title.value,
            // subTitle: e.target.subTitle.value,
            // price: e.target.price.value,
            // description: e.target.description.value,
            // color: e.target.color.value,
        }
        console.log("data", postData);

        const options = {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(postData),
        }

        const FETCHED_DATA = await fetch(URL, options);
        const FETCHED_JSON = await FETCHED_DATA.json();
        setUser(FETCHED_JSON.data);
    }
    const handleChange = (event) => {
        setColor(event.target.value);
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
                                <TextField name='firstName' placeholder="Enter First Name" id="filled-basic" label="First Name" variant="filled" color="secondary" required fullWidth />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField name='lastName' placeholder="Enter First Name" id="filled-basic" label="Last Name" variant="filled" color="secondary" required fullWidth />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField name='phoneNumber' placeholder="Enter Phone Number" id="filled-number" label="Phone Number" type="number" InputLabelProps={{ shrink: true, }} variant="filled" color="secondary" required fullWidth />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField name='email' placeholder="Enter E-Mail" id="filled-basic" label="E-Mail" variant="filled" color="secondary" required fullWidth />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField name='description' placeholder="Enter Description" id="filled-basic" label="Description" variant="filled" color="secondary" required fullWidth />
                            </Grid>
                            {/* <Grid item xs={12}>
                                <FormControl fullWidth>
                                    <InputLabel id="demo-simple-select-autowidth-label" color="secondary">Color</InputLabel>
                                    <Select
                                        labelId="demo-simple-select-autowidth-label"
                                        id="demo-simple-select-autowidth"
                                        value={color}
                                        onChange={handleChange}
                                        label="Color"
                                        variant="filled"
                                        color="secondary"
                                        required
                                        name='color'
                                    >
                                        <MenuItem value="">
                                            <em>None</em>
                                        </MenuItem>
                                        <MenuItem value={"White"}>White</MenuItem>
                                        <MenuItem value={"Black"}>Black</MenuItem>
                                        <MenuItem value={"Red"}>Red</MenuItem>
                                        <MenuItem value={"Blue"}>Blue</MenuItem>
                                        <MenuItem value={"Yellow"}>Yellow</MenuItem>
                                        <MenuItem value={"Orange"}>Orange</MenuItem>
                                        <MenuItem value={"Green"}>Green</MenuItem>
                                        <MenuItem value={"Pink"}>Pink</MenuItem>
                                        <MenuItem value={"Purple"}>Purple</MenuItem>
                                    </Select>
                                </FormControl>
                            </Grid> */}
                            {/* <Grid item xs={12}>
                            <TextField placeholder="Enter Rating" id="filled-number" label="Rating" type="number" InputLabelProps={{ shrink: true, }} variant="filled" color="secondary" required fullWidth />
                        </Grid> */}
                            <Grid item xs={12}>
                                <Stack direction="row" spacing={2}>
                                    <Button type="submit" variant="contained" color="success" fullWidth><PublishIcon /></Button>
                                    <Link to={"/product-management"} style={{ textDecoration: "none" }}>
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