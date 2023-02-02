import React from 'react'
import Box from '@mui/material/Box';
import Header from '../components/Header'
import ProductTable from '../components/ProductTable'
import LilNavi from '../components/LilNavi';
import UserTable from '../components/UserTable';

const Users = () => {
    return (
        <div>
            <Box m="20px">
                <LilNavi first="Dashboard" second="Users" third="Management" />
                <Header title="Users" subtitle="Managing the Users" />
            </Box>
            <UserTable />
        </div>
    )
}
export default Users