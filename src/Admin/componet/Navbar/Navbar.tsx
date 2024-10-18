import { useEffect, useRef } from "react";
import { IoClose, IoMenu } from "react-icons/io5";
import { Link, useLocation } from "react-router-dom";
import { FaBars, FaRegUser, FaRupeeSign } from "react-icons/fa";
import { AiOutlineHome } from "react-icons/ai";
import { FiYoutube } from "react-icons/fi";
import { PiUsersThree } from "react-icons/pi";
import { GiMiner } from "react-icons/gi";

const Navbar = () => {
  let SideBarRef = useRef<HTMLDivElement | any>();
  let location = useLocation();
  const node = SideBarRef.current as any;

  useEffect(() => {
    node?.classList.add("hidden");
  }, [location]);

  const handleSidebar = () => {
    if (node.classList.contains("hidden")) {
      node.classList.remove("hidden");
    } else {
      node.classList.add("hidden");
    }
  };

  return (
    <div className="sticky top-0 z-50">
      <div className="">
        <div className="">
          <header className="py-4 shadow-sm bg-white shadow-gray-400">
            <div className="flex items-center justify-between mx-4 md:mx-16">
              <button onClick={handleSidebar} className="text-2xl lg:hidden">
                <IoMenu />
              </button>
              <p className="h-12 text-2xl md:text-3xl flex items-center text-black font-bold uppercase">
                <Link to={"/"}>
                  <span className="text-blue-600">Tap to </span>Earn
                </Link>
              </p>
              <div className="space-x-6 flex items-center justify-center">
                <button
                  // onClick={AdminLogout}
                  className="block text-center text-gray-700 hover:text-blue-600 transition"
                >
                  <div className="flex flex-col items-center justify-center">
                    <p className="text-xl md:text-3xl">
                      <FaRegUser />
                    </p>
                    <div className="text-xs leading-3">Logout</div>
                  </div>
                </button>
              </div>
            </div>
          </header>
          <nav className="bg-gray-800 hidden lg:block">
            <div className="mx-4 md:mx-16">
              <div className="flex">
                <div className="px-8 py-4 bg-blue-600 flex items-center cursor-pointer group relative">
                  <span className="text-white">
                    <FaBars />
                  </span>
                  <span className="capitalize ml-2 text-white">Items Adds</span>
                  <div className="absolute left-0 top-full w-full bg-white shadow-md py-3 invisible opacity-0 group-hover:opacity-100 group-hover:visible transition duration-300 z-50 divide-y divide-gray-300 divide-dashed">
                    <p className="px-6 py-3 flex items-center hover:bg-gray-100 transition">
                      Comming Soon
                    </p>
                  </div>
                </div>
                <div className="flex items-center justify-between flex-grow pl-12">
                  <div className="flex items-center space-x-6 text-base capitalize">
                    <LinkBlock to="/Admin" lable={"Home"} />
                    <LinkBlock to="/Admin/Youtube" lable={"Youtube"} />
                    <LinkBlock to="/Admin/Users" lable={"User"} />
                    <LinkBlock to="/Admin/Cards" lable={"Mine Cards"} />
                    <LinkBlock to="/Admin/Redeem" lable={"Redeem"} />
                  </div>
                </div>
              </div>
            </div>
          </nav>
        </div>
      </div>
      <div
        ref={SideBarRef}
        className="lg:hidden hidden  transition-all duration-300 transform fixed top-0 start-0 bottom-0 z-[60] w-full md:w-1/2 lg:w-1/3 bg-white border-e border-gray-200 pt-7 pb-10 overflow-y-auto "
      >
        <div className="px-6">
          <Link
            className="flex-none text-xl font-semibold "
            to="/"
            aria-label="Shopwaale"
          >
            Shopwaale
          </Link>
          <div
            onClick={handleSidebar}
            className="absolute top-9 right-8 text-2xl"
          >
            <IoClose />
          </div>
        </div>
        <nav className="p-6 w-full flex flex-col flex-wrap">
          <ul className="space-y-1.5">
            <MobileSingleItem
              lable="Home"
              link="/Admin"
              icon={<AiOutlineHome />}
            />

            <MobileSingleItem
              lable="Youtube"
              link="/Admin/Youtube"
              icon={<FiYoutube />}
            />
            <MobileSingleItem
              lable="Users"
              link="/Admin/Users"
              icon={<PiUsersThree />}
            />

            <MobileSingleItem
              lable="Mine Cards"
              link="/Admin/Mine"
              icon={<GiMiner />}
            />
            <MobileSingleItem
              lable="Redeem"
              link="/Admin/Redeem"
              icon={<FaRupeeSign />}
            />
          </ul>
        </nav>
      </div>
    </div>
  );
};

export const MobileSingleItem = ({ link, lable, icon }: any) => {
  return (
    <div>
      <Link
        className="flex items-center gap-x-3.5 py-2 px-2.5 bg-white text-sm text-gray-700 rounded-lg hover:bg-gray-100"
        to={link}
      >
        <div className="text-lg">{icon}</div>
        {lable}
      </Link>
    </div>
  );
};
export const LinkBlock = ({ to, lable }: any) => {
  return (
    <Link to={to} className="text-gray-200 hover:text-white transition">
      {lable}
    </Link>
  );
};
export default Navbar;
