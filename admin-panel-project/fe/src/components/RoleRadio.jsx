import * as React from 'react';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';

export default function RoleRadio({ first, second }) {
    return (
        <Box
            sx={{
                display: 'flex',
                flexWrap: 'wrap',
                '& > :not(style)': {
                    p: 2,
                    width: 128,
                    height: 128,
                },
            }}
        >

            <Paper elevation={3} >
                <FormControl>
                    <FormLabel id="demo-radio-buttons-group-label" color='success'>Role</FormLabel>
                    <RadioGroup
                        aria-labelledby="demo-radio-buttons-group-label"
                        defaultValue={first}
                        name="radio-buttons-group"
                    >
                        <FormControlLabel value={first} control={<Radio />} label={first} />
                        <FormControlLabel value={second} control={<Radio />} label={second} />
                    </RadioGroup>
                </FormControl>

            </Paper>
        </Box>
    );
}