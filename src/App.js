import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import List from "./pages/list/List";
import Single from "./pages/single/Single";
import New from "./pages/new/New";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { productInputs, userInputs } from "./formSource";
import "./style/dark.scss";
import { useContext } from "react";
import { DarkModeContext } from "./context/darkModeContext";
import RoomForm from "./view/RoomForm";
import CustomerFrom from "./view/CustomerFrom";
import EmployeeFrom from "./view/EmployeeFrom";
import TypeRoomFrom from "./view/TypeRoomFrom";
import BookingFrom from "./view/BookingFrom";
import CheckInFrom from "./view/CheckInFrom";
import CheckOutFrom from "./view/CheckOutFrom";
import UserPage from "./view/UserPage";
import HomeUser from "./pages/pageuser/HomeUser";

function App() {
  const { darkMode } = useContext(DarkModeContext);

  return (
    <div className={darkMode ? "app dark" : "app"}>
      <BrowserRouter>
        <Routes>
          <Route path="/">
            <Route index element={<Home />} />
            <Route path="login" element={<Login />} />
            <Route path="CustomerFrom" element={<CustomerFrom />} />
            <Route path="EmployeeFrom" element={<EmployeeFrom />} />
            <Route path="RoomForm" element={<RoomForm />} />
            <Route path="TypeRoomFrom" element={<TypeRoomFrom />} />
            <Route path="BookingFrom" element={<BookingFrom />} />
            <Route path="CheckInFrom" element={<CheckInFrom />} />
            <Route path="CheckOutFrom" element={<CheckOutFrom />} />
            <Route path="UserPage" element={<UserPage />} />
            <Route path="users">
              <Route index element={<List />} />
              <Route path=":userId" element={<Single />} />
              <Route
                path="new"
                element={<New inputs={userInputs} title="Add New User" />}
              />
            </Route>
            <Route path="products">
              <Route index element={<List />} />
              <Route path=":productId" element={<Single />} />
              <Route
                path="new"
                element={<New inputs={productInputs} title="Add New Product" />}
              />
            </Route>
          </Route>
          <Route path="/home">
            <Route index element={<HomeUser />} />
            <Route path="login" element={<Login />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
