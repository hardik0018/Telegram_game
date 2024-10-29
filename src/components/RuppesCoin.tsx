import { FaIndianRupeeSign } from "react-icons/fa6";

type RuppesCoin = {
  bordersize: Number;
  iconsize: Number;
};
const RuppesCoin = ({ bordersize, iconsize }: RuppesCoin) => {
  return (
    <div
      style={{ borderWidth: +bordersize }}
      className={`rounded-full bg-yellow-500 w-fit h-fit p-0.5  border-yellow-300 text-white`}
    >
      <FaIndianRupeeSign size={`${iconsize}`} />
    </div>
  );
};

export default RuppesCoin;
