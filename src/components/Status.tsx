import { memo } from "react";
import { useContext } from "../context/useContext";
import RuppesCoin from "./RuppesCoin";

const Status = () => {
  const { EarnTap, nextLvlup, PPH } = useContext();
  return (
    <div>
      <div className="flex justify-center  gap-1 md:gap-4 my-8 mx-auto w-full">
        <div className="flex flex-col text-center px-2 md:px-3 py-1.5 font-semibold rounded-md bg-gray-800 text-sm w-[32%]">
          <p className="text-orange-500 text-[12px]">Earn Per tap</p>
          <div className="flex items-center justify-center gap-1 w-full">
            <RuppesCoin bordersize={2} iconsize={8} />
            <p>+{+EarnTap}</p>
          </div>
        </div>
        <div className="flex flex-col text-center px-2 md:px-3 py-1.5 font-semibold rounded-md bg-gray-800 text-sm w-[32%]">
          <p className="text-blue-500 text-[12px]">Coins To Levels up</p>
          <p>+{+nextLvlup}</p>
        </div>
        <div className="flex flex-col text-center px-2 md:px-3 py-1.5 font-semibold rounded-md bg-gray-800 text-sm w-[32%]">
          <p className="text-green-500 text-[12px]">Profit Per hour</p>
          <p>+{+PPH}</p>
        </div>
      </div>
    </div>
  );
};

export default memo(Status);
