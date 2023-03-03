import React, { useState, useEffect } from 'react'
import { Box, useTheme, Stack, Button } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import { tokens } from "../theme/theme";
import { Link } from "react-router-dom";
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import EditIcon from '@mui/icons-material/Edit';
import { fetchAllData, deleteUser } from "../services/axiosUserServices"

const UserTable = () => {
    const URL = "http://localhost:8082/users"
    const [user, setUser] = useState([])
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);

    useEffect(() => {
        fetchAllData(URL, setUser);
    }, [])

    async function handleDelete(userId) {
        deleteUser(userId, URL, setUser);
    }
    const columns = [
        { field: "firstName", headerName: "First Name", width: 100 },
        { field: "lastName", headerName: "Last Name", width: 100 },
        { field: "phoneNumber", headerName: "Phone Number", width: 100 },
        { field: "email", headerName: "E-Mail", width: 100 },
        // { field: "description", headerName: "Description", width: 100 },
        { field: "role", headerName: "Role", width: 100 },
        { field: "password", headerName: "Password", width: 100 },
        // { field: "Disabled", headerName: "Disabled", width: 100 },
        // { field: "avatar", headerName: "Avatar", width: 100 },
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
                            <Link to={`/edit-user/${params.row.id}`} state={{ user: user.filter(p => p.id === params.row.id) }} style={{ textDecoration: "none" }}>
                                <Button variant="contained" color="success">
                                    <EditIcon />
                                </Button>
                            </Link>
                            <Button variant="outlined" color="error"
                                onClick={() => handleDelete(params.row.id)}
                            >
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
            <Link to={"/create-user"} style={{ textDecoration: "none" }}>
                <Button variant="contained" color="success">
                    CREATE USER
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
                    rows={user}
                    columns={columns}
                    pageSize={5}
                    rowsPerPageOptions={[5]}
                // checkboxSelection
                />
            </Box>
        </Box>
    );
};

export default UserTable;
