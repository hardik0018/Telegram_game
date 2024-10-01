import { FaYoutube } from "react-icons/fa";
import { FaIndianRupeeSign } from "react-icons/fa6";
import { FcPlanner } from "react-icons/fc";
import { HiCheck } from "react-icons/hi";
import { LuInstagram } from "react-icons/lu";
import { MdOutlineNavigateNext } from "react-icons/md";
import TrueCheck from "./TrueCheck";

const Task = () => {
  return (
    <div>
      <div className="flex flex-col items-center h-[30%] mt-10 text-center px-3">
        <div className="rounded-full bg-yellow-500 w-fit h-fit p-7 border-[15px] border-yellow-300">
          <FaIndianRupeeSign size={50} />
        </div>
        <p className="text-4xl mt-5 font-bold">Earn More Coins</p>

        {/* Youtube Video */}
        <div className="w-full">
          <div className="text-left flex items-center mt-10 w-full relative">
            <p className="font-semibold">Bot Youtube</p>
          </div>
          <div className="mt-2 w-full">
            <div className="w-full my-2 rounded-2xl bg-gray-800 flex items-center gap-x-2 px-1 py-3 text-left">
              <FaYoutube size={33} className="ml-2 text-red-500" />
              <div className="w-full">
                <p className="font-semibold text-sm">Watch Youtube new Video</p>
                <div className="flex w-full gap-1 items-center text-[13px] text-gray-400">
                  <div className="rounded-full bg-yellow-500 w-fit h-fit p-0.5 border-[2px] border-yellow-300 text-white">
                    <FaIndianRupeeSign size={10} />
                  </div>
                  <span className=" font-semibold text-white">+100</span>
                </div>
              </div>
              <div className="flex justify-end mr-3">
                <TrueCheck />
              </div>
            </div>
            <div className="w-full my-2 rounded-2xl bg-gray-800 flex items-center gap-x-2 px-1 py-3 text-left">
              <FaYoutube size={33} className="ml-2 text-red-500" />
              <div className="w-full">
                <p className="font-semibold text-sm">Watch Youtube new Video</p>
                <div className="flex w-full gap-1 items-center text-[13px] text-gray-400">
                  <div className="rounded-full bg-yellow-500 w-fit h-fit p-0.5 border-[2px] border-yellow-300 text-white">
                    <FaIndianRupeeSign size={10} />
                  </div>
                  <span className=" font-semibold text-white">+100</span>
                </div>
              </div>
              <div className="flex justify-end mr-3">
                <TrueCheck />
              </div>
            </div>
          </div>
        </div>
        {/* Daily Task */}
        <div className="w-full">
          <div className="text-left flex items-center mt-4 w-full relative">
            <p className="font-semibold">Daily Tasks</p>
          </div>
          <div className="mt-2 w-full">
            <div className="w-full my-2 rounded-2xl bg-gray-800 flex items-center gap-x-2 px-1 py-3 text-left">
              <FcPlanner size={33} className="ml-2" />
              <div className="w-full">
                <p className="font-semibold text-sm">Daily Rewards</p>
                <div className="flex w-full gap-1 items-center text-[13px] text-gray-400">
                  <div className="rounded-full bg-yellow-500 w-fit h-fit p-0.5 border-[2px] border-yellow-300 text-white">
                    <FaIndianRupeeSign size={10} />
                  </div>
                  <span className=" font-semibold text-white">+100</span>
                </div>
              </div>
              <div className="flex justify-end mr-1">
                <MdOutlineNavigateNext size={34} className="text-white p-0.5" />
              </div>
            </div>
          </div>
        </div>
        {/* Task List */}
        <div className="w-full mb-5">
          <div className="text-left flex items-center mt-4 w-full relative">
            <p className="font-semibold">Task List</p>
          </div>
          <div className="mt-2 mb-20 w-full">
            <div className="w-full my-2 rounded-2xl bg-gray-800 flex items-center gap-x-2 px-1 py-3 text-left">
              <FaYoutube size={33} className="ml-2 text-red-500" />
              <div className="w-full">
                <p className="font-semibold text-sm">Follow On Instagram</p>
                <div className="flex w-full gap-1 items-center text-[13px] text-gray-400">
                  <div className="rounded-full bg-yellow-500 w-fit h-fit p-0.5 border-[2px] border-yellow-300 text-white">
                    <FaIndianRupeeSign size={10} />
                  </div>
                  <span className=" font-semibold text-white">+500</span>
                </div>
              </div>
              <div className="flex justify-end mr-1">
                <MdOutlineNavigateNext size={34} className="text-white p-0.5" />
              </div>
            </div>
            <div className="w-full my-2 rounded-2xl bg-gray-800 flex items-center gap-x-2 px-1 py-3 text-left">
              <LuInstagram size={33} className="ml-2 text-pink-500" />
              <div className="w-full">
                <p className="font-semibold text-sm">Follow On Instagram</p>
                <div className="flex w-full gap-1 items-center text-[13px] text-gray-400">
                  <div className="rounded-full bg-yellow-500 w-fit h-fit p-0.5 border-[2px] border-yellow-300 text-white">
                    <FaIndianRupeeSign size={10} />
                  </div>
                  <span className=" font-semibold text-white">+500</span>
                </div>
              </div>
              <div className="flex justify-end mr-1">
                <MdOutlineNavigateNext size={34} className="text-white p-0.5" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Task;
