import RuppesCoin from "./RuppesCoin";
import { MdOutlineNavigateNext } from "react-icons/md";
import { RiMoneyRupeeCircleLine } from "react-icons/ri";
import { CgClose } from "react-icons/cg";
import { FaRegCopy } from "react-icons/fa";
import { useState } from "react";
import axios from "axios";
import { useQuery } from "@tanstack/react-query";
import { toast } from "react-toastify";

const RedeemHistory = () => {
  const [currentRedeem, setCurrentRedeem] = useState(false);

  const { data } = useQuery({
    queryKey: [`1183112225-Rewards`],
    queryFn: async () => {
      let res = await axios.get(
        `${import.meta.env.VITE_SERVER_HOST}/User/reward/${1183112225}`
      );
      return res.data.data.reverse();
    },
    refetchOnWindowFocus: false,
  });

  const hanldeCopy = (code: any) => {
    navigator.clipboard.writeText(code);
    toast.success("Copied");
  };

  return (
    <div className="text-center relative">
      <h2 className="font-bold text-2xl my-2">Rewards History</h2>
      <div className="mb-24">
        {data &&
          data.map((item: any) => {
            const { rupees, orderId, status, date } = item;
            return (
              <div
                key={orderId}
                onClick={() => {
                  setCurrentRedeem(item);
                }}
                className="w-full my-2 rounded-2xl bg-gray-800 flex items-center gap-x-2 px-1 py-3 text-left"
              >
                <RiMoneyRupeeCircleLine
                  size={50}
                  className="ml-2 text-yellow-400"
                />
                <div className="w-full">
                  <p className="font-semibold text-sm">Amazon Gift Card</p>
                  <div className="flex w-full gap-x-1 items-center text-[13px] text-gray-400">
                    <RuppesCoin bordersize={2} iconsize={8} />
                    <span className=" font-semibold text-white">{rupees}</span>

                    <span
                      className={`font-semibold px-1 ${
                        status ? "text-green-600" : "text-rose-500"
                      }`}
                    >
                      {status ? "Success" : "Pending"}
                    </span>
                    <span className=" font-semibold text-white">{date}</span>
                  </div>
                </div>
                <div className="flex justify-end mr-1">
                  <MdOutlineNavigateNext
                    size={34}
                    className="text-white p-0.5 cursor-pointer"
                  />
                </div>
              </div>
            );
          })}
      </div>
      {currentRedeem && (
        <div className="fixed w-full z-20 h-screen -top-4">
          <SignleRedeemBlock
            item={currentRedeem}
            close={() => setCurrentRedeem(false)}
            handleCopy={hanldeCopy}
          />
        </div>
      )}
    </div>
  );
};

const SignleRedeemBlock = ({ item, close, handleCopy }: any) => {
  const { rupees, status, date, code } = item;
  return (
    <div className="relative h-full w-full mt-4">
      <div
        className="h-full bg-gray-300 opacity-20 cursor-pointer"
        onClick={close}
      ></div>
      <div className="absolute text-center px-2 py-6 w-full h-[55%] bottom-0 -mt-16 rounded-t-[45px] bg-black border-t-4 border-yellow-400 shadow-[0px_-2px_40px_0px_#f6e05e]">
        <div className="w-full mx-auto flex flex-col items-center relative">
          <img
            src={`https://az15297.vo.msecnd.net/images/rewards/rc/large/AmazonPayIN_310x216.png`}
            className="w-60 h-40 rounded-lg"
          />
          <h2 className="mt-2 text-[30px] font-semibold"></h2>
          <p className="text-gray-300 my-1 font-semibold"></p>
          <p className="text-gray-300 mt-1 text-xl font-semibold">Rupees</p>
          <div className="flex w-full gap-1 items-center justify-center text-[26px] text-gray-300">
            <RuppesCoin bordersize={3} iconsize={18} />
            <span className=" font-semibold text-gray-300">{rupees}</span>
          </div>
          <div className="flex w-full gap-1 items-center justify-center text-[16px] text-gray-300">
            <p className="text-gray-300 font-semibold">Date : </p>
            <span className=" font-semibold text-gray-300">{date}</span>
          </div>
          {!status && (
            <>
              <p className="animate-pulse">48 hours to Receive your rewards</p>
              <p className="animate-pulse">Rewards are in Processing...</p>
            </>
          )}

          {status && (
            <div className="relative">
              <label htmlFor="copyCode" className="sr-only">
                Label
              </label>
              <input
                id="copyCode"
                type="text"
                className="col-span-6 bg-gray-700 border border-gray-500 text-gray-100 text-xl rounded-lg block w-full px-3 py-2"
                value={code}
                disabled
              />
              <button
                onClick={() => handleCopy(code)}
                className="absolute end-2.5 top-1/2 -translate-y-1/2 rounded-lg py-2 px-2.5 inline-flex items-center justify-center bg-blue-600 text-white"
              >
                <span
                  id="default-message"
                  className="inline-flex items-center "
                >
                  <FaRegCopy size={20} />
                </span>
              </button>
            </div>
          )}

          <div
            className="absolute right-2 top-0 bg-gray-500 p-1 rounded-full cursor-pointer"
            onClick={close}
          >
            <CgClose className="text-black" size={22} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default RedeemHistory;
