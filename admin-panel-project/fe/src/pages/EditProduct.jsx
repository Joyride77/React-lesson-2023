import React, { useState, useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
import Header from '../components/Header'
import { Box, Grid, TextField, InputLabel, MenuItem, FormControl, Select, Stack, Button } from "@mui/material";
import LilNavi from '../components/LilNavi';
import SaveAltIcon from '@mui/icons-material/SaveAlt';

const EditProduct = () => {
    const URL = "http://localhost:8080/products"
    const { id } = useParams()
    const [product, setProduct] = useState([])
    const [color, setColor] = React.useState('');
    const [currentProduct, setCurrentProduct] = useState({});
    useEffect(() => {
        fetchAllData();
    }, [])

    async function fetchAllData() {
        const FETCHED_DATA = await fetch(URL);
        const FETCHED_JSON = await FETCHED_DATA.json();
        setProduct(FETCHED_JSON.data)
    }

    const filteredProduct = product.filter(data => data.id === id)

    async function handleEdit() {
        const putData = {
            id: currentProduct.id,
            title: currentProduct.title,
            subTitle: currentProduct.subTitle,
            price: currentProduct.price,
            description: currentProduct.description,
            color: currentProduct.color
        }
        const options = {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(putData),
        };
        const FETCHED_DATA = await fetch(URL, options);
        const FETCHED_JSON = await FETCHED_DATA.json();
        setProduct(FETCHED_JSON.data);
    }

    function handleId(e) {
        setCurrentProduct({ ...currentProduct, id: e.target.value });
    }
    function handleTitle(e) {
        setCurrentProduct({ ...currentProduct, title: e.target.value });
    }
    function handleSubTitle(e) {
        setCurrentProduct({ ...currentProduct, subTitle: e.target.value });
    }
    function handlePrice(e) {
        setCurrentProduct({ ...currentProduct, price: e.target.value });
    }
    function handleDescription(e) {
        setCurrentProduct({ ...currentProduct, description: e.target.value });
    }
    const handleChange = (e) => {
        setColor(e.target.value);
        setCurrentProduct({ ...currentProduct, color: e.target.value });
    };


    return (
        <Box m="20px">
            <LilNavi first="Dashboard" second="Management" third="Edit Product" />
            <Header title="Edit Product" subtitle="Edit Product" />

            <Box sx={{ width: 550 }}>
                {filteredProduct &&
                    filteredProduct.map((w, index) => {
                        return (
                            <div key={index}>
                                <form>
                                    <Grid container spacing={4}>
                                        <Grid item xs={12}>
                                            <TextField name='id' defaultValue={w.id} onClick={handleId} id="filled-required" label="Id" variant="filled" color="secondary" InputProps={{ readOnly: true, }} fullWidth />
                                        </Grid>
                                        <Grid item xs={12}>
                                            <TextField name='title' defaultValue={w.title} onChange={handleTitle} id="filled-required" label="Title" variant="filled" color="secondary" required fullWidth />
                                        </Grid>
                                        <Grid item xs={12}>
                                            <TextField name='subTitle' defaultValue={w.subTitle} onChange={handleSubTitle} id="filled-required" label="Sub Title" variant="filled" color="secondary" required fullWidth />
                                        </Grid>
                                        <Grid item xs={12}>
                                            <TextField name='price' defaultValue={w.price} onChange={handlePrice} id="filled-number" label="Price" InputLabelProps={{ shrink: true, }} type="number" variant="filled" color="secondary" required fullWidth />
                                        </Grid>
                                        <Grid item xs={12}>
                                            <TextField name='description' defaultValue={w.description} onChange={handleDescription} id="filled-required" label="Sub Description" variant="filled" color="secondary" required fullWidth />
                                        </Grid>
                                        <Grid item xs={12}>
                                            <FormControl fullWidth>
                                                <InputLabel id="demo-simple-select-autowidth-label" color="secondary">Color</InputLabel>
                                                <Select
                                                    labelId="demo-simple-select-autowidth-label"
                                                    id="demo-simple-select-autowidth"
                                                    // value={color}
                                                    onChange={handleChange}
                                                    label="Color"
                                                    variant="filled"
                                                    color="secondary"
                                                    required
                                                    name='color'
                                                    defaultValue={w.color}
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
                                        <Grid item xs={12}>
                                            <Stack direction="row" spacing={2}>
                                                <Button variant="contained" color="success" fullWidth
                                                    onClick={handleEdit}
                                                >
                                                    <SaveAltIcon />
                                                </Button>
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

                        )
                    })}

            </Box>
        </Box>
    )
}

export default EditProduct