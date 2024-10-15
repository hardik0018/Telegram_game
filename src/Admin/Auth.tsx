import { Outlet } from "react-router-dom";
import Navbar from "./componet/Navbar/Navbar";

const Auth = () => {
  // if (userType == "Admin") {
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  );
  // } else {
  //   return <Navigate to={"/Admin/Login"} />;
  // }
};

export default Auth;
