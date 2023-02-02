import React, { useState, useEffect } from 'react'
import Header from '../components/Header';
import { Button, Box, Grid, TextField, InputLabel, MenuItem, FormControl, Select, Stack } from "@mui/material";
import { Link } from 'react-router-dom';
import LilNavi from '../components/LilNavi';
import PublishIcon from '@mui/icons-material/Publish';
import { fetchAllData, createProduct } from "../services/axiosProductsServices"

const CreateProduct = () => {
    const URL = "http://localhost:8080/products"
    const [color, setColor] = React.useState('');
    const [product, setProduct] = useState([])

    useEffect(() => {
        fetchAllData(URL, setProduct);
    }, [])

    async function handleSubmit(e) {
        createProduct(e, URL, setProduct);
    }

    const handleChange = (event) => {
        setColor(event.target.value);
    };

    return (
        <Box m="20px">
            <LilNavi first="Dashboard" second="Management" third="Creating New Product" />
            <Header title="New Product" subtitle="Creating new Product" />

            <Box sx={{ width: 550 }}>
                <div>
                    <form onSubmit={handleSubmit}>
                        <Grid container spacing={4}>
                            <Grid item xs={12}>
                                <TextField name='title' placeholder="Enter Title" id="filled-basic" label="Title" variant="filled" color="secondary" required fullWidth />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField name='subTitle' placeholder="Enter Sub Title" id="filled-basic" label="Subtitle" variant="filled" color="secondary" required fullWidth />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField name='price' placeholder="Enter Price" id="filled-number" label="Price" type="number" InputLabelProps={{ shrink: true, }} variant="filled" color="secondary" required fullWidth />
                            </Grid>
                            {/* <Grid item xs={12}>
                            <TextField placeholder="Enter Discount" id="filled-number" label="Discount" type="number" InputLabelProps={{ shrink: true, }} variant="filled" color="secondary" required fullWidth />
                        </Grid> */}
                            <Grid item xs={12}>
                                <TextField name='description' placeholder="Enter Description" id="filled-basic" label="Description" variant="filled" color="secondary" required fullWidth />
                            </Grid>
                            <Grid item xs={12}>
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
                            </Grid>
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

export default CreateProduct