import * as React from "react";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import "../style/SidbarAndNav.scss";
import Sidebar from "../components/sidebar/Sidebar";
import Navbar from "../components/navbar/Navbar";
import { DataGrid } from "@mui/x-data-grid";

// TODO remove, this demo shouldn't need to reset the theme.

export default function TypeRoomFrom() {
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
            ຂໍ້ມູນປະເພດຫ້ອງ
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
              <Grid item xs={12}>
                <TextField
                  autoComplete="given-name"
                  name="RoomTypeID"
                  required
                  fullWidth
                  id="RoomTypeID"
                  label="ລະຫັດປະເພດຫ້ອງ"
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  id="NameRoomType"
                  label="ຊື່ປະເພດຫ້ອງ"
                  name="NameRoomType"
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  id="Price"
                  label="ລາຄາຕໍ່ຄືນ"
                  name="Price"
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  id="Deposit"
                  label="ຄາມັດຈຳ"
                  name="Deposit"
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  id="RoomTypeDetail"
                  label="ຂໍ້ມູນປະເພດຫ້ອງ"
                  name="RoomTypeDetail"
                />
              </Grid>
            </Grid>
            <Button
              type="submit"
              color="secondary"
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              ເພີ່ມຫ້ອງ
            </Button>
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
