import * as React from "react";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import {
  Autocomplete,
  FormControlLabel,
  FormLabel,
  Radio,
  RadioGroup,
} from "@mui/material";
import "../style/SidbarAndNav.scss";
import Sidebar from "../components/sidebar/Sidebar";
import Navbar from "../components/navbar/Navbar";
import { DatePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";

// TODO remove, this demo shouldn't need to reset the theme.

export default function EmployeeFrom() {
  const [pageSize, setPageSize] = React.useState(10);

  const Province = [
    { label: "ນະຄອນຫລວງວຽງຈັຍ" },
    { label: "ວຽງຈັນ" },
    { label: "ສະຫວັນນະເຂດ" },
    { label: "ຄຳມ່ວນ" },
    { label: "ບໍລິຄຳໄຊ" },
    { label: "ຈຳປາສັກ" },
    { label: "ອັດຕະປື" },
  ];
  const District = [
    { label: "ທ່າແຂກ" },
    { label: "ວັງວຽງ" },
    { label: "ຫີນບູນ" },
    { label: "ໄຊທານີ" },
    { label: "ໄຊເສດຖາ" },
    { label: "ສີສັດຕະນາກ" },
  ];
  const Village = [
    { label: "ໂພນປ່າເປົ້າ" },
    { label: "ຫ້ວຍຫົງ" },
    { label: "ທ່າແຂກກາງ" },
    { label: "ຫນອງລຳຈັນ" },
  ];
  const UserType_id = [
    { label: "Admin" },
    { label: "Employee" },
    { label: "Customer" },
  ];

  const rows = [
    {
      id: 1,
      User_id: "UID_1",
      name: "ມະນີທອງ",
      last_name: "ຍາບັນດິດ",
      gender: "ຊາຍ",
      birthday: "11/6/2001",
      tel: "0205565117",
      email: "olay_1137@gmail.com",
      password: "12345678",
      idcard: "20210001164",
      Village_id: "ທ່າແຂກກາງ",
      District_id: "ທ່າແຂກ",
      Province_id: "ຄຳມ່ວນ",
      UserType_id: "Customer",
    },
    {
      id: 1,
      User_id: "UID_1",
      name: "ມະນີທອງ",
      last_name: "ຍາບັນດິດ",
      gender: "ຊາຍ",
      birthday: "11/6/2001",
      tel: "0205565117",
      email: "olay_1137@gmail.com",
      password: "12345678",
      idcard: "20210001164",
      Village_id: "ທ່າແຂກກາງ",
      District_id: "ທ່າແຂກ",
      Province_id: "ຄຳມ່ວນ",
      UserType_id: "Customer",
    },
    {
      id: 1,
      User_id: "UID_1",
      name: "ມະນີທອງ",
      last_name: "ຍາບັນດິດ",
      gender: "ຊາຍ",
      birthday: "11/6/2001",
      tel: "0205565117",
      email: "olay_1137@gmail.com",
      password: "12345678",
      idcard: "20210001164",
      Village_id: "ທ່າແຂກກາງ",
      District_id: "ທ່າແຂກ",
      Province_id: "ຄຳມ່ວນ",
      UserType_id: "Customer",
    },
    {
      id: 1,
      User_id: "UID_1",
      name: "ມະນີທອງ",
      last_name: "ຍາບັນດິດ",
      gender: "ຊາຍ",
      birthday: "11/6/2001",
      tel: "0205565117",
      email: "olay_1137@gmail.com",
      password: "12345678",
      idcard: "20210001164",
      Village_id: "ທ່າແຂກກາງ",
      District_id: "ທ່າແຂກ",
      Province_id: "ຄຳມ່ວນ",
      UserType_id: "Customer",
    },
    {
      id: 1,
      User_id: "UID_1",
      name: "ມະນີທອງ",
      last_name: "ຍາບັນດິດ",
      gender: "ຊາຍ",
      birthday: "11/6/2001",
      tel: "0205565117",
      email: "olay_1137@gmail.com",
      password: "12345678",
      idcard: "20210001164",
      Village_id: "ທ່າແຂກກາງ",
      District_id: "ທ່າແຂກ",
      Province_id: "ຄຳມ່ວນ",
      UserType_id: "Customer",
    },
    {
      id: 1,
      User_id: "UID_1",
      name: "ມະນີທອງ",
      last_name: "ຍາບັນດິດ",
      gender: "ຊາຍ",
      birthday: "11/6/2001",
      tel: "0205565117",
      email: "olay_1137@gmail.com",
      password: "12345678",
      idcard: "20210001164",
      Village_id: "ທ່າແຂກກາງ",
      District_id: "ທ່າແຂກ",
      Province_id: "ຄຳມ່ວນ",
      UserType_id: "Customer",
    },
    {
      id: 1,
      User_id: "UID_1",
      name: "ມະນີທອງ",
      last_name: "ຍາບັນດິດ",
      gender: "ຊາຍ",
      birthday: "11/6/2001",
      tel: "0205565117",
      email: "olay_1137@gmail.com",
      password: "12345678",
      idcard: "20210001164",
      Village_id: "ທ່າແຂກກາງ",
      District_id: "ທ່າແຂກ",
      Province_id: "ຄຳມ່ວນ",
      UserType_id: "Customer",
    },
    {
      id: 1,
      User_id: "UID_1",
      name: "ມະນີທອງ",
      last_name: "ຍາບັນດິດ",
      gender: "ຊາຍ",
      birthday: "11/6/2001",
      tel: "0205565117",
      email: "olay_1137@gmail.com",
      password: "12345678",
      idcard: "20210001164",
      Village_id: "ທ່າແຂກກາງ",
      District_id: "ທ່າແຂກ",
      Province_id: "ຄຳມ່ວນ",
      UserType_id: "Customer",
    },
    {
      id: 1,
      User_id: "UID_1",
      name: "ມະນີທອງ",
      last_name: "ຍາບັນດິດ",
      gender: "ຊາຍ",
      birthday: "11/6/2001",
      tel: "0205565117",
      email: "olay_1137@gmail.com",
      password: "12345678",
      idcard: "20210001164",
      Village_id: "ທ່າແຂກກາງ",
      District_id: "ທ່າແຂກ",
      Province_id: "ຄຳມ່ວນ",
      UserType_id: "Customer",
    },
    {
      id: 1,
      User_id: "UID_1",
      name: "ມະນີທອງ",
      last_name: "ຍາບັນດິດ",
      gender: "ຊາຍ",
      birthday: "11/6/2001",
      tel: "0205565117",
      email: "olay_1137@gmail.com",
      password: "12345678",
      idcard: "20210001164",
      Village_id: "ທ່າແຂກກາງ",
      District_id: "ທ່າແຂກ",
      Province_id: "ຄຳມ່ວນ",
      UserType_id: "Customer",
    },
    {
      id: 1,
      User_id: "UID_1",
      name: "ມະນີທອງ",
      last_name: "ຍາບັນດິດ",
      gender: "ຊາຍ",
      birthday: "11/6/2001",
      tel: "0205565117",
      email: "olay_1137@gmail.com",
      password: "12345678",
      idcard: "20210001164",
      Village_id: "ທ່າແຂກກາງ",
      District_id: "ທ່າແຂກ",
      Province_id: "ຄຳມ່ວນ",
      UserType_id: "Customer",
    },
    {
      id: 1,
      User_id: "UID_1",
      name: "ມະນີທອງ",
      last_name: "ຍາບັນດິດ",
      gender: "ຊາຍ",
      birthday: "11/6/2001",
      tel: "0205565117",
      email: "olay_1137@gmail.com",
      password: "12345678",
      idcard: "20210001164",
      Village_id: "ທ່າແຂກກາງ",
      District_id: "ທ່າແຂກ",
      Province_id: "ຄຳມ່ວນ",
      UserType_id: "Customer",
    },
    {
      id: 1,
      User_id: "UID_1",
      name: "ມະນີທອງ",
      last_name: "ຍາບັນດິດ",
      gender: "ຊາຍ",
      birthday: "11/6/2001",
      tel: "0205565117",
      email: "olay_1137@gmail.com",
      password: "12345678",
      idcard: "20210001164",
      Village_id: "ທ່າແຂກກາງ",
      District_id: "ທ່າແຂກ",
      Province_id: "ຄຳມ່ວນ",
      UserType_id: "Customer",
    },
  ];

  const columns = [
    { field: "User_id", headerName: "ລະຫັດຜູ້ໃຊ້", width: 100 },
    { field: "name", headerName: "ຊື່", width: 100 },
    { field: "last_name", headerName: "ນາມສະກຸນ", width: 100 },
    { field: "gender", headerName: "ເພດ", width: 50 },
    { field: "birthday", headerName: "ວັນເດືອນປີເກີດ", width: 120 },
    { field: "tel", headerName: "ເບີໂທ", width: 120 },
    { field: "email", headerName: "email", width: 170 },
    { field: "password", headerName: "password", width: 120 },
    { field: "idcard", headerName: "ເລກບັດປະຈຳໂຕ", width: 150 },
    { field: "Village_id", headerName: "ບ້ານ", width: 100 },
    { field: "District_id", headerName: "ເມືອງ", width: 100 },
    { field: "Province_id", headerName: "ແຂວງ", width: 100 },
    { field: "UserType_id", headerName: "ປະເພດຜູ້ໃຊ້", width: 150 },
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
            ຂໍ້ມູນພະນັກງານ
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
                  required
                  fullWidth
                  id="name"
                  label="ຊື່"
                  name="name"
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  id="last_name"
                  label="ນາມສະກຸນ"
                  name="last_name"
                />
              </Grid>
              <Grid item xs={12}>
                <Autocomplete
                  disablePortal
                  fullWidth
                  disabled
                  name="UserType_id"
                  id="UserType_id"
                  value="Employee"
                  options={UserType_id}
                  renderInput={(params) => (
                    <TextField {...params} label="ປະເພດຜູ້ໃຊ້" />
                  )}
                />
              </Grid>
              <Grid item xs={12} sm={12}>
                <FormLabel id="gender">ເພດ</FormLabel>
                <RadioGroup row>
                  <FormControlLabel
                    value="female"
                    control={<Radio />}
                    label="ຍິງ"
                  />
                  <FormControlLabel
                    value="male"
                    control={<Radio />}
                    label="ຊາຍ"
                  />
                  <FormControlLabel
                    value="other"
                    control={<Radio />}
                    label="ອື່ນໆ"
                  />
                </RadioGroup>
              </Grid>
              <Grid item xs={12} sm={6}>
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                  <DatePicker
                    name="birthday"
                    required
                    fullWidth
                    id="birthday"
                    label="ວັນເດືອນປີເກີດ"
                  />
                </LocalizationProvider>
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  id="tel"
                  label="ເບີໂທ"
                  name="tel"
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  id="email"
                  label="email"
                  name="email"
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  id="password"
                  label="password(ລົງທະບຽນ)"
                  name="password"
                  type="password"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="idcard"
                  label="ເລກບັດປະຈຳໂຕ(ຫຼື Passport)"
                  name="idcard"
                />
              </Grid>
              <Grid item xs={12} sm={4}>
                <Autocomplete
                  disablePortal
                  id="Province"
                  options={Province}
                  renderInput={(params) => (
                    <TextField {...params} label="ແຂວງ" />
                  )}
                />
              </Grid>
              <Grid item xs={12} sm={4}>
                <Autocomplete
                  disablePortal
                  id="District"
                  options={District}
                  renderInput={(params) => (
                    <TextField {...params} label="ເມືອງ" />
                  )}
                />
              </Grid>
              <Grid item xs={12} sm={4}>
                <Autocomplete
                  disablePortal
                  id="Village"
                  options={Village}
                  renderInput={(params) => (
                    <TextField {...params} label="ບ້ານ" />
                  )}
                />
              </Grid>
            </Grid>
            <Button
              type="submit"
              color="secondary"
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              ລົງທະບຽນ
            </Button>
          </Box>
        </Box>
        <Box sx={{ height: 650, my: 10, mx: 10 }}>
          <Typography component="h1" variant="h5" sx={{ my: 1 }}>
            ຕາຕະລາງພະນັກງານ
          </Typography>
          <DataGrid
            rows={rows}
            columns={columns}
            pageSize={pageSize}
            onPageSizeChange={(newPageSize) => setPageSize(newPageSize)}
            rowsPerPageOptions={[10, 20]}
            pagination
            components={{
              Toolbar: GridToolbar,
            }}
            componentsProps={{
              toolbar: {
                csvOptions: { delimiter: ";" }, // <---- here
              },
            }}
          />
        </Box>
      </div>
    </div>
  );
}
