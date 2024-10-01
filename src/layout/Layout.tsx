import { Outlet } from "react-router-dom";
import BottomNav from "../components/BottomBar";

const Layout = () => {
  return (
    <div className="w-full md:w-[450px] mx-auto text-white h-screen bg-black overflow-hidden">
      <div className="overflow-scroll">
        <Outlet />
      </div>

      <div className="fixed bottom-0 w-full left-0">
        <BottomNav />
      </div>
    </div>
  );
};

export default Layout;
