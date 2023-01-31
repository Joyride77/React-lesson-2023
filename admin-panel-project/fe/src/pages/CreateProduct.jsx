import React from 'react'
import Box from '@mui/material/Box';
import { TextField, Typography } from '@mui/material';
import Header from '../components/Header';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';


const CreateProduct = () => {
    const [age, setAge] = React.useState('');

    const handleChange = (event) => {
        setAge(event.target.value);
    };
    return (
        <Box m="20px">
            <Header title="New Product" subtitle="Creating new Product" />
            <Box
                component="form"
                sx={{
                    '& .MuiTextField-root': { m: 2, width: "50%" },
                }}
                // noValidate
                autoComplete="off"
            >
                <div>
                    <Box sx={{ width: "50%", m: 2 }}>
                        <FormControl fullWidth>
                            <InputLabel id="demo-simple-select-label">Image</InputLabel>
                            <Select
                                labelId="demo-simple-select-label"
                                id="demo-simple-select"
                                value={age}
                                label="Age"
                                onChange={handleChange}
                                variant="filled"
                                color="secondary"
                                autoWidth
                            >
                                <MenuItem value={10}>Ten</MenuItem>
                                <MenuItem value={20}>Twenty</MenuItem>
                                <MenuItem value={30}>Thirty</MenuItem>
                            </Select>
                        </FormControl>
                    </Box>
                    <TextField id="filled-basic" label="Title" variant="filled" color="secondary" />
                    <TextField id="filled-basic" label="Subtitle" variant="filled" color="secondary" />
                    <TextField id="filled-basic" label="Price" variant="filled" color="secondary" />
                </div>
            </Box>

        </Box>
    )
}

export default CreateProduct