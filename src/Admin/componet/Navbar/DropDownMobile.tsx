import { useRef } from "react";
import { IoIosArrowDown } from "react-icons/io";
import { Link } from "react-router-dom";

const DropDownMobile = ({ icon, lable, link }) => {
  let dropdownRef = `${lable}ref`;
  let arrowRef = useRef();
  dropdownRef = useRef();
  const handleDropdown = (value) => {
    if (value.current.classList.contains("hidden")) {
      value.current.classList.remove("hidden");
      arrowRef.current.classList.add("rotate-180");
    } else {
      value.current.classList.add("hidden");
      arrowRef.current.classList.remove("rotate-180");
      value.current.classList.remove("flex");
    }
  };
  return (
    <div>
      <li className="">
        <button
          onClick={() => handleDropdown(dropdownRef)}
          className=" w-full text-start flex items-center gap-x-5 py-2 px-2.5 text-sm text-gray-700 rounded-lg hover:bg-gray-100 "
        >
          {icon}
          {lable}
          <div ref={arrowRef} className="text-lg absolute right-10">
            <IoIosArrowDown className="" />
          </div>
        </button>

        <div
          ref={dropdownRef}
          className=" w-full overflow-hidden transition-[height] duration-300 hidden"
        >
          {link.map((item, index) => {
            return (
              <p className="ps-3 pt-2" key={index}>
                <Link
                  to={item.link}
                  className=" w-full text-start flex items-center gap-x-3.5 py-2 px-2.5 text-sm text-gray-700 rounded-lg hover:bg-gray-100 "
                >
                  {item.lable}
                </Link>
              </p>
            );
          })}
        </div>
      </li>
    </div>
  );
};

export default DropDownMobile;
