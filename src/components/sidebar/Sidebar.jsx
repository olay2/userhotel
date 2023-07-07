import "./sidebar.scss";
import DashboardIcon from "@mui/icons-material/Dashboard";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import SupportAgentIcon from "@mui/icons-material/SupportAgent";
import PersonIcon from "@mui/icons-material/Person";
import BookOnlineIcon from "@mui/icons-material/BookOnline";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import DomainVerificationIcon from '@mui/icons-material/DomainVerification';
import { Link } from "react-router-dom";
import { DarkModeContext } from "../../context/darkModeContext";
import { useContext } from "react";
import MeetingRoomIcon from "@mui/icons-material/MeetingRoom";

const Sidebar = () => {
  const { dispatch } = useContext(DarkModeContext);
  return (
    <div className="sidebar">
      <div className="top">
        <Link to="/" style={{ textDecoration: "none" }}>
          <span className="logo">HOTELADMIN</span>
        </Link>
      </div>
      <div className="center">
        <ul>
          <p className="title">MAIN</p>
          <Link to="/" style={{ textDecoration: "none" }}>
            <li>
              <DashboardIcon className="icon" />
              <span>Dashboard</span>
            </li>
          </Link>
          <p className="title">ຈັດການຂໍ້ມູນພື້ນຖານ</p>
          <Link to="/UserPage" style={{ textDecoration: "none" }}>
            <li>
              <PersonOutlineIcon className="icon" />
              <span>ຂໍ້ມູນຜູ້ໃຊ້</span>
            </li>
          </Link>
          <Link to="/RoomForm" style={{ textDecoration: "none" }}>
            <li>
              <MeetingRoomIcon className="icon" />
              <span>ຂໍ້ມູນຫ້ອງ</span>
            </li>
          </Link>
          <Link to="/TypeRoomFrom" style={{ textDecoration: "none" }}>
            <li>
              <MeetingRoomIcon className="icon" />
              <span>ຂໍ້ມູນປະເພດຫ້ອງ</span>
            </li>
          </Link>
          <Link to="/CustomerFrom" style={{ textDecoration: "none" }}>
            <li>
              <PersonIcon className="icon" />
              <span>ຂໍ້ມູນລູກຄ້າ</span>
            </li>
          </Link>
          <Link to="/EmployeeFrom" style={{ textDecoration: "none" }}>
            <li>
              <SupportAgentIcon className="icon" />
              <span>ຂໍ້ມູນພະນັກງານ</span>
            </li>
          </Link>
          <p className="title">ບໍລິການ</p>
          <Link to="/BookingFrom" style={{ textDecoration: "none" }}>
            <li>
              <BookOnlineIcon className="icon" />
              <span>ບັນທຶກການຈອງ</span>
            </li>
          </Link>
          <Link to="/CheckInFrom" style={{ textDecoration: "none" }}>
            <li>
              <CheckCircleOutlineIcon className="icon" />
              <span>ແຈ້ງເຂົ້າ</span>
            </li>
          </Link>
          <Link to="/CheckOutFrom" style={{ textDecoration: "none" }}>
            <li>
              <DomainVerificationIcon className="icon" />
              <span>ແຈ້ງອອກ</span>
            </li>
          </Link>
          <p className="title">ລາຍງານ</p>
        </ul>
        <div className="bottom">
          <div
            className="colorOption"
            onClick={() => dispatch({ type: "LIGHT" })}
          ></div>
          <div
            className="colorOption"
            onClick={() => dispatch({ type: "DARK" })}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
