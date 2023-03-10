import React, { useState, useEffect } from 'react'
import { Box, useTheme, Stack, Button } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import { tokens } from "../theme/theme";
import { Link } from "react-router-dom";
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import EditIcon from '@mui/icons-material/Edit';
import { fetchAllData, deleteProduct } from "../services/axiosProductsServices"

const ProductTable = () => {
  const URL = "http://localhost:8082/products"
  const [product, setProduct] = useState([])
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  useEffect(() => {
    fetchAllData(URL, setProduct);
  }, [])

  async function handleDelete(productId) {
    deleteProduct(productId, URL, setProduct);
  }

  const columns = [
    // { field: "id", headerName: "ID", width: 70 },
    {
      field: "img", headerName: "Image", width: 100,
      renderCell: (params) => {
        return (
          <div><img src={params.row.img} alt="" /></div>
        )
      }
    },
    { field: "title", headerName: "Title", width: 100 },
    { field: "subTitle", headerName: "Subtitle", width: 100 },
    { field: "price", headerName: "Price", width: 100 },
    { field: "description", headerName: "Description", width: 100 },
    { field: "color", headerName: "Color", width: 100 },
    {
      field: "actions",
      headerName: "Actions",
      flex: 1,
      renderCell: (params) => {
        return (
          <Box
            width="100%"
          >
            <Stack direction="row" spacing={2}>
              <Link to={`/edit-product/${params.row.id}`} state={{ product: product.filter(p => p.id === params.row.id) }} style={{ textDecoration: "none" }}>
                <Button variant="contained" color="success">
                  <EditIcon />
                </Button>
              </Link>
              <Button variant="outlined" color="error" onClick={() => handleDelete(params.row.id)}>
                <DeleteForeverIcon />
              </Button>
            </Stack>
          </Box>
        );
      },
    },
  ];
  return (
    <Box m="20px">
      <Link to={"/create-product"} style={{ textDecoration: "none" }}>
        <Button variant="contained" color="success">
          CREATE PRODUCT
        </Button>
      </Link>
      <Box
        m="40px 0 0 0"
        height="50vh"
        sx={{
          width: 850,
          "& .MuiDataGrid-root": {
            border: "none",
          },
          "& .MuiDataGrid-cell": {
            borderBottom: "none",
          },
          "& .name-column--cell": {
            color: colors.greenAccent[300],
          },
          "& .MuiDataGrid-columnHeaders": {
            backgroundColor: colors.blueAccent[700],
            borderBottom: "none",
          },
          "& .MuiDataGrid-virtualScroller": {
            backgroundColor: colors.primary[400],
          },
          "& .MuiDataGrid-footerContainer": {
            borderTop: "none",
            backgroundColor: colors.blueAccent[700],
          },
          "& .MuiCheckbox-root": {
            color: `${colors.greenAccent[400]} !important`,
          },
        }}
      >
        <DataGrid
          rows={product}
          columns={columns}
          pageSize={5}
          rowsPerPageOptions={[5]}
        // checkboxSelection
        />
      </Box>
    </Box>
  );
};

export default ProductTable;
