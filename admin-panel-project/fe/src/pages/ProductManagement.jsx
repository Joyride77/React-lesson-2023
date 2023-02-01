import React from 'react'
import Box from '@mui/material/Box';
import Header from '../components/Header'
import ProductTable from '../components/ProductTable'

const ProductManagement = () => {
    return (
        <div>
            <Box m="20px">
                <Header title="Products" subtitle="Managing the Products" />
            </Box>
            <ProductTable />
        </div>
    )
}
export default ProductManagement