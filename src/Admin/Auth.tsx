import { Outlet } from "react-router-dom";
import Navbar from "./componet/Navbar/Navbar";
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
  //   return <Navigate to={"/Admin/login"} />;
  // }
};

export default Auth;
