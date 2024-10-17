import { Outlet } from "react-router-dom";
import Navbar from "./componet/Navbar/Navbar";
import { ToastContainer } from "react-toastify";
import ToastShow from "../components/ToastShow";

const Auth = () => {
  // if (userType == "Admin") {
  return (
    <>
      <ToastShow />
      <Navbar />
      <Outlet />
    </>
  );
  // } else {
  //   return <Navigate to={"/Admin/Login"} />;
  // }
};

export default Auth;
