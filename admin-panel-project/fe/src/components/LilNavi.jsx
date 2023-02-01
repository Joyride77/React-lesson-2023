import React from 'react'
import { Breadcrumbs, Typography, Link, Box, Paper } from '@mui/material';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';

function handleClick(event) {
    event.preventDefault();
    console.info('You clicked a breadcrumb.');
}
const LilNavi = ({ first, second, third }) => {
    const breadcrumbs = [
        <Link underline="hover" key="1" color="inherit" href="/" onClick={handleClick}>
            {first}
        </Link>,
        <Link
            underline="hover"
            key="2"
            color="inherit"
            href="/material-ui/getting-started/installation/"
            onClick={handleClick}
        >
            {second}
        </Link>,
        <Typography key="3" color="text.primary">
            {third}
        </Typography>,
    ];
    return (
        <Paper elevation={1} sx={{
            padding: "10px",
            bgcolor: 'background.default',
        }}>
            <Box>

                <Breadcrumbs
                    separator={<NavigateNextIcon fontSize="small" />}
                    aria-label="breadcrumb"
                >
                    {breadcrumbs}
                </Breadcrumbs>
            </Box>
        </Paper>
    );
}

export default LilNavi