import { ReactNode } from "react";
import { FaUsers } from "react-icons/fa";

type MainBlockType = {
  title: String;
  icon: ReactNode;
  amount: Number;
  lable: String;
  lableValue: Number;
};

const Home = () => {
  return (
    <div className="">
      <div className="px-4 md:px-10 w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2 mx-auto my-2">
        <MainBlock
          title={"User"}
          icon={<FaUsers />}
          amount={10}
          lable={"fs"}
          lableValue={23}
        />
        <MainBlock
          title={"Order"}
          icon={<FaUsers />}
          amount={10}
          lable={"fs"}
          lableValue={23}
        />
        <MainBlock
          title={"Order"}
          icon={<FaUsers />}
          amount={10}
          lable={"fs"}
          lableValue={23}
        />
        <MainBlock
          title={"Order"}
          icon={<FaUsers />}
          amount={10}
          lable={"fs"}
          lableValue={23}
        />
      </div>
    </div>
  );
};

const MainBlock = ({
  title,
  icon,
  amount,
  lable,
  lableValue,
}: MainBlockType) => {
  return (
    <div className="w-full my-2 relative">
      <div className="border border-gray-400 rounded-md shadow-md shadow-gray-300 h-32 md:h-36">
        <div className="h-[60%] px-6 py-5">
          <div className="w-12 h-12 bg-gray-800 rounded-xl flex items-center justify-center">
            <span className="text-white text-3xl">{icon}</span>
          </div>
          <div className="absolute right-5 top-5 text-right">
            <p className="text-gray-600">{title}</p>
            <p className="text-2xl font-bold">{+amount}</p>
          </div>
        </div>
        <div className="w-[100%] mx-auto h-0.5 bg-gray-100"></div>

        <div className="h-[35%] px-6 py-4 text-gray-00">
          <div className="flex items-center text-gray-600">
            <span
              className={`mr-1 font-bold ${
                +lableValue > 0 ? "text-green-600" : "text-red-600"
              }`}
            >
              {+lableValue > 0 ? "+" : ""}
              {+lableValue}%{" "}
            </span>
            {lable}
          </div>
        </div>
      </div>
    </div>
  );
};

const ChartBlock = ({ chart }: any) => {
  return (
    <div className="w-full my-2 relative">
      <div className="border border-gray-400 rounded-md shadow-md shadow-gray-400 p-2 md:px-4 md:py-5 ">
        {chart}
      </div>
    </div>
  );
};
export default Home;
