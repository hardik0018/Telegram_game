import { Outlet } from "react-router-dom";
import BottomNav from "../components/BottomBar";

const Layout = () => {
  return (
    <div className="w-full md:w-[450px] mx-auto text-white h-screen bg-black overflow-hidden">
      <Outlet />
      <div className="mx-auto relative h-full">
        <div className="absolute w-full bottom-0 left-0">
          <BottomNav />
        </div>
      </div>
    </div>
  );
};

export default Layout;
