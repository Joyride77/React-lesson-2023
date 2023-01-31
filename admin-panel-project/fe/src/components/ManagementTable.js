import { Box, Typography, useTheme } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import Header from "./Header";
import { tokens } from "../theme/theme";
import { Link } from "react-router-dom";
import { Stack, Button } from "@mui/material";

const ManagementTable = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const columns = [
    { field: "id", headerName: "ID", width: 70 },
    { field: "img", headerName: "Image", width: 130 },
    { field: "title", headerName: "Title", width: 130 },
    { field: "subTitle", headerName: "Subtitle", width: 130 },
    { field: "price", headerName: "Price", width: 130 },
    { field: "rating", headerName: "Rating", width: 130 },
    {
      field: "actions",
      headerName: "Actions",
      flex: 1,
      renderCell: ({ row: { access } }) => {
        return (
          <Box
            width="100%"
            // m="0 auto"
            // p="5px"
            // display="flex"
            // justifyContent="center"
          >
            <Stack direction="row" spacing={2}>
              <Button variant="contained" color="success">
                Edit
              </Button>
              <Button variant="outlined" color="error">
                Delete
              </Button>
            </Stack>
          </Box>
        );
      },
    },
  ];

  const rows = [
    { id: 1, title: "Snow", subTitle: "Jon", price: 35 },
    { id: 2, title: "Lannister", subTitle: "Cersei", price: 42 },
    { id: 3, title: "Lannister", subTitle: "Jaime", price: 45 },
    { id: 4, title: "Stark", subTitle: "Arya", price: 16 },
    { id: 5, title: "Targaryen", subTitle: "Daenerys", price: 32 },
    { id: 6, title: "Melisandre", subTitle: "Hey", price: 150 },
    { id: 7, title: "Clifford", subTitle: "Ferrara", price: 44 },
    { id: 8, title: "Frances", subTitle: "Rossini", price: 36 },
    { id: 9, title: "Roxie", subTitle: "Harvey", price: 65 },
  ];
  return (
    <Box m="20px">
      <Header title="Products" subtitle="Managing the Products" />
      <Link to={"/create-product"} style={{ textDecoration: "none" }}>
        <Button variant="contained" color="success">
          CREATE PRODUCT
        </Button>
      </Link>
      <Box
        m="40px 0 0 0"
        height="50vh"
        sx={{
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
          rows={rows}
          columns={columns}
          pageSize={5}
          rowsPerPageOptions={[5]}
          // checkboxSelection
        />
      </Box>
    </Box>
  );
};

export default ManagementTable;
