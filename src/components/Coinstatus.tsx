import { FaIndianRupeeSign } from "react-icons/fa6";
import { useContext } from "../context/useContext";

const Coinstatus = () => {
  const { coin } = useContext();

  return (
    <div className="flex items-center text-center">
      <div
        className={`rounded-full bg-yellow-500 w-fit h-fit p-0.5 border-[3px] border-yellow-300 text-white`}
      >
        <FaIndianRupeeSign size={22} />
      </div>
      <p className="ml-2 text-4xl font-bold">{`${coin.toFixed(2)}`}</p>
    </div>
  );
};

export default Coinstatus;
