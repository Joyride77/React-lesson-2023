import React from 'react'
import Box from '@mui/material/Box';
import Header from '../components/Header'
import ProductTable from '../components/ProductTable'
import LilNavi from '../components/LilNavi';

const ProductManagement = () => {
    return (
        <div>
            <Box m="20px">
                <LilNavi first="Dashboard" second="E - commerce" third="Management" />
                <Header title="Products" subtitle="Managing the Products" />
            </Box>
            <ProductTable />
        </div>
    )
}
export default ProductManagement