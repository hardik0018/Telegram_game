import { useEffect, useState } from "react";
import { FaRupeeSign } from "react-icons/fa";
import { GiMiner } from "react-icons/gi";
import { GoTasklist } from "react-icons/go";
import { IoFlash, IoPeopleSharp } from "react-icons/io5";
import { Link, useLocation } from "react-router-dom";

const BottomNav = () => {
  const location = useLocation();

  const [navItems, setNavItems] = useState([
    { title: "Home", icon: IoFlash, active: true },
    { title: "Mine", icon: GiMiner, active: false },
    { title: "Friends", icon: IoPeopleSharp, active: false },
    { title: "Task", icon: GoTasklist, active: false },
    { title: "Earn", icon: FaRupeeSign, active: false },
  ]);

  const handleActive = (title: string) => {
    setNavItems((prevItems) =>
      prevItems.map((item) => {
        return { ...item, active: item.title === title ? true : false };
      })
    );
  };

  useEffect(() => {
    // Set active state based on current location
    const currentPath =
      location.pathname === "/" ? "Home" : location.pathname.slice(1);
    handleActive(currentPath);
  }, [location]);

  return (
    <div className="absolute w-full bottom-0 rounded-t-2xl bg-gray-900 flex items-center justify-between p-2">
      {navItems.map((item, i) => (
        <Link
          key={i}
          to={`${item.title == "Home" ? "/" : item.title}`}
          className={`flex flex-col gap-2 cursor-pointer rounded-xl items-center w-full py-[6px] ${
            item.active
              ? "bg-gray-800 text-orange-400 border-b-2 border-orange-400"
              : "bg-transparent"
          }`}
          onClick={() => handleActive(item.title)}
        >
          <item.icon className="text-xl md:text-2xl" />
          <span
            className={`text-sm font-medium ${
              item.active ? "text-[#fdb224] " : "text-[#818288]"
            }`}
          >
            {item.title}
          </span>
        </Link>
      ))}
    </div>
  );
};

export default BottomNav;
