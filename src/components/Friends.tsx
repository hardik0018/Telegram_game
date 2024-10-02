import { IoGiftSharp } from "react-icons/io5";
import { LuDog, LuRefreshCw } from "react-icons/lu";
import RuppesCoin from "./RuppesCoin";

const Friends = () => {
  return (
    <div>
      <div className="text-center w-full text-white px-2 py-10">
        <h2 className="text-3xl font-bold">Invite Friends</h2>
        <p className="text-sm my-2">You and your friend will receive bonuses</p>

        <div className="w-full mt-7 rounded-2xl bg-gray-800 flex items-center gap-x-2 px-1 py-3 text-left">
          <IoGiftSharp size={55} className="ml-2" />
          <div className="">
            <p className="font-semibold text-xl">Invite a friend</p>
            <div className="flex w-full gap-1 items-center">
              <RuppesCoin bordersize={2} iconsize={12} />
              <span className="text-yellow-500 font-semibold">+5,000</span>
              for you and your friend
            </div>
          </div>
        </div>
        <div className="text-left flex items-center mt-10 w-full relative">
          <p className="font-semibold">List of Your Friends (10)</p>
          <LuRefreshCw size={24} className="absolute right-2 cursor-pointer" />
        </div>

        <div className="mt-2 mb-16">
          <div className="w-full my-2 rounded-2xl bg-gray-800 flex items-center gap-x-2 px-1 py-3 text-left">
            <LuDog size={33} className="ml-2" />
            <div className="">
              <p className="font-semibold text-sm">Name</p>
              <div className="flex w-full gap-1 items-center text-[13px] text-gray-400">
                <p>Level:</p>
                <RuppesCoin bordersize={2} iconsize={8} />
                <span className=" font-semibold text-white">100</span>
                <p>(100)</p>
              </div>
            </div>
          </div>
          <div className="w-full my-2 rounded-2xl bg-gray-800 flex items-center gap-x-2 px-1 py-3 text-left">
            <LuDog size={33} className="ml-2" />
            <div className="">
              <p className="font-semibold text-sm">Name</p>
              <div className="flex w-full gap-1 items-center text-[13px] text-gray-400">
                <p>Level:</p>
                <RuppesCoin bordersize={2} iconsize={8} />
                <span className=" font-semibold text-white">100</span>
                <p>(100)</p>
              </div>
            </div>
          </div>
          <div className="w-full my-2 rounded-2xl bg-gray-800 flex items-center gap-x-2 px-1 py-3 text-left">
            <LuDog size={33} className="ml-2" />
            <div className="">
              <p className="font-semibold text-sm">Name</p>
              <div className="flex w-full gap-1 items-center text-[13px] text-gray-400">
                <p>Level:</p>
                <RuppesCoin bordersize={2} iconsize={8} />
                <span className=" font-semibold text-white">100</span>
                <p>(100)</p>
              </div>
            </div>
          </div>
          <div className="w-full my-2 rounded-2xl bg-gray-800 flex items-center gap-x-2 px-1 py-3 text-left">
            <LuDog size={33} className="ml-2" />
            <div className="">
              <p className="font-semibold text-sm">Name</p>
              <div className="flex w-full gap-1 items-center text-[13px] text-gray-400">
                <p>Level:</p>
                <RuppesCoin bordersize={2} iconsize={8} />
                <span className=" font-semibold text-white">100</span>
                <p>(100)</p>
              </div>
            </div>
          </div>
          <div className="w-full my-2 rounded-2xl bg-gray-800 flex items-center gap-x-2 px-1 py-3 text-left">
            <LuDog size={33} className="ml-2" />
            <div className="">
              <p className="font-semibold text-sm">Name</p>
              <div className="flex w-full gap-1 items-center text-[13px] text-gray-400">
                <p>Level:</p>
                <RuppesCoin bordersize={2} iconsize={8} />
                <span className=" font-semibold text-white">100</span>
                <p>(100)</p>
              </div>
            </div>
          </div>
          <div className="w-full my-2 rounded-2xl bg-gray-800 flex items-center gap-x-2 px-1 py-3 text-left">
            <LuDog size={33} className="ml-2" />
            <div className="">
              <p className="font-semibold text-sm">Name</p>
              <div className="flex w-full gap-1 items-center text-[13px] text-gray-400">
                <p>Level:</p>
                <RuppesCoin bordersize={2} iconsize={8} />
                <span className=" font-semibold text-white">100</span>
                <p>(100)</p>
              </div>
            </div>
          </div>
          <div className="w-full my-2 rounded-2xl bg-gray-800 flex items-center gap-x-2 px-1 py-3 text-left">
            <LuDog size={33} className="ml-2" />
            <div className="">
              <p className="font-semibold text-sm">Name</p>
              <div className="flex w-full gap-1 items-center text-[13px] text-gray-400">
                <p>Level:</p>
                <RuppesCoin bordersize={2} iconsize={8} />
                <span className=" font-semibold text-white">100</span>
                <p>(100)</p>
              </div>
            </div>
          </div>
          <div className="w-full my-2 rounded-2xl bg-gray-800 flex items-center gap-x-2 px-1 py-3 text-left">
            <LuDog size={33} className="ml-2" />
            <div className="">
              <p className="font-semibold text-sm">Name</p>
              <div className="flex w-full gap-1 items-center text-[13px] text-gray-400">
                <p>Level:</p>
                <RuppesCoin bordersize={2} iconsize={8} />
                <span className=" font-semibold text-white">100</span>
                <p>(100)</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Friends;
