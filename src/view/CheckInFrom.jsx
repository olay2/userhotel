import * as React from "react";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { Autocomplete } from "@mui/material";
import "../style/SidbarAndNav.scss";
import Sidebar from "../components/sidebar/Sidebar";
import Navbar from "../components/navbar/Navbar";
import { Link } from "react-router-dom";
import { DataGrid } from "@mui/x-data-grid";

// TODO remove, this demo shouldn't need to reset the theme.

export default function CheckInFrom() {
  const typeRoom = [
    { label: "ຫ້ອງຕ່ຽງດຽວ" },
    { label: "ຫ້ອງຕ່ຽງຄູ່" },
    { label: "ຫ້ອງປະຊຸ່ມ" },
  ];
  const NameRoom = [
    { label: "100" },
    { label: "101" },
    { label: "102" },
  ];
    const columns = [
      { field: "id", headerName: "ID", width: 70 },
      { field: "firstName", headerName: "First name", width: 130 },
      { field: "lastName", headerName: "Last name", width: 130 },
      {
        field: "age",
        headerName: "Age",
        type: "number",
        width: 90,
      },
      {
        field: "fullName",
        headerName: "Full name",
        description: "This column has a value getter and is not sortable.",
        sortable: false,
        width: 160,
        valueGetter: (params) =>
          `${params.row.firstName || ""} ${params.row.lastName || ""}`,
      },
    ];

    const rows = [
      { id: 1, lastName: "Snow", firstName: "Jon", age: 35 },
      { id: 2, lastName: "Lannister", firstName: "Cersei", age: 42 },
      { id: 3, lastName: "Lannister", firstName: "Jaime", age: 45 },
      { id: 4, lastName: "Stark", firstName: "Arya", age: 16 },
      { id: 5, lastName: "Targaryen", firstName: "Daenerys", age: null },
      { id: 6, lastName: "Melisandre", firstName: null, age: 150 },
      { id: 7, lastName: "Clifford", firstName: "Ferrara", age: 44 },
      { id: 8, lastName: "Frances", firstName: "Rossini", age: 36 },
      { id: 9, lastName: "Roxie", firstName: "Harvey", age: 65 },
    ];


  return (
    <div className="sid">
      <Sidebar />
      <div className="nav">
        <Navbar />
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Typography component="h1" variant="h5">
            ແຈ້ງເຂົ້າ
          </Typography>
          <Box
            component="form"
            noValidate
            sx={{
              mt: 3,
              width: 600,
            }}
          >
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  autoComplete="given-name"
                  name="Customer_Name"
                  required
                  fullWidth
                  id="Customer_Name"
                  label="ຊື່ລູກຄ້າ"
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <Autocomplete
                  disablePortal
                  id="typeRoom"
                  options={typeRoom}
                  renderInput={(params) => (
                    <TextField {...params} label="ປະເພດຫ້ອງ" />
                  )}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <Autocomplete
                  disablePortal
                  id="NameRoom"
                  options={NameRoom}
                  renderInput={(params) => (
                    <TextField {...params} label="ເລກຫ້ອງຊື່ຫ້ອງ" />
                  )}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  autoComplete="given-name"
                  name="Price"
                  required
                  fullWidth
                  id="Price"
                  label="ລາຄາ"
                />
              </Grid>
            </Grid>
            <Button
              type="submit"
              color="secondary"
              variant="contained"
              sx={{ mt: 2, mr: 2, px: 2, py: 2 }}
            >
              ແຈ້ງເຂົ້າ
            </Button>
            <Link to="/BookingFrom" style={{ textDecoration: "none" }}>
              <Button
                color="primary"
                variant="contained"
                component="label"
                sx={{ mt: 2, mr: 2, px: 2, py: 2 }}
              >
                ຈອງໄວ້
              </Button>
              <Button
                color="success"
                variant="contained"
                component="label"
                sx={{ mt: 2, mr: 2, px: 2, py: 2 }}
              >
                ລູກຄ້າໃໝ່
              </Button>
            </Link>
          </Box>
        </Box>
        <Box sx={{ height: 400, my: 10, mx: 10 }}>
          <DataGrid
            rows={rows}
            columns={columns}
            pageSize={9}
            rowsPerPageOptions={[9]}
            checkboxSelection
          />
        </Box>
      </div>
    </div>
  );
}
