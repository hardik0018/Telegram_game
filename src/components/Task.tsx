import { FaYoutube } from "react-icons/fa";
import { FaIndianRupeeSign } from "react-icons/fa6";
import { FcPlanner } from "react-icons/fc";
import { LuInstagram } from "react-icons/lu";
import { MdOutlineNavigateNext } from "react-icons/md";
import TrueCheck from "./TrueCheck";
import RuppesCoin from "./RuppesCoin";
import { CgClose } from "react-icons/cg";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useContext } from "../context/useContext";
import axios from "axios";
import { toast } from "react-toastify";

const Task = () => {
  const [currentYoutubeCard, setcurrentYoutubeCard] = useState(false);
  const { Youtube, setYoutube, setCoin } = useContext();

  const handleCliam = async (id: any, code: any) => {
    let res = await axios.get(
      `${
        import.meta.env.VITE_SERVER_HOST
      }/Youtube/CodeCheck?id=${id}&code=${code}`
    );

    if (res.data.success) {
      let update = Youtube.map((key) => {
        if (key._id == id) {
          setCoin((pre) => +pre + key.coin);
          key.status = true;
        }
        return key;
      });
      setYoutube(update);
      toast.success("success");
    } else {
      toast.error("Invalid Code");
    }
  };

  return (
    <div className="relative">
      <div className="flex flex-col items-center h-[30%] mt-10 text-center px-3">
        <div className="rounded-full bg-yellow-500 w-fit h-fit p-6 border-[15px] border-yellow-300 shadow-[0px_0px_40px_0px_#faf089]">
          <FaIndianRupeeSign size={80} />
        </div>
        <p className="text-4xl mt-5 font-bold">Earn More Coins</p>

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
                <div className="flex w-full gap-x-1 items-center text-[13px] text-gray-400">
                  <RuppesCoin bordersize={2} iconsize={8} />
                  <span className=" font-semibold text-white">+100</span>
                </div>
              </div>
              <div className="flex justify-end mr-1">
                <MdOutlineNavigateNext
                  size={34}
                  className="text-white p-0.5 cursor-pointer"
                />
              </div>
            </div>
          </div>
        </div>
        {/* Task List */}
        <div className="w-full">
          <div className="text-left flex items-center mt-4 w-full relative">
            <p className="font-semibold">Task List</p>
          </div>
          <div className="mt-2 w-full">
            <div className="w-full my-2 rounded-2xl bg-gray-800 flex items-center gap-x-2 px-1 py-3 text-left">
              <FaYoutube size={33} className="ml-2 text-red-500" />
              <div className="w-full">
                <p className="font-semibold text-sm">Follow On Instagram</p>
                <div className="flex w-full gap-x-1 items-center text-[13px] text-gray-400">
                  <RuppesCoin bordersize={2} iconsize={8} />
                  <span className=" font-semibold text-white">+500</span>
                </div>
              </div>
              <div className="flex justify-end mr-1">
                <MdOutlineNavigateNext
                  size={34}
                  className="text-white p-0.5 cursor-pointer"
                />
              </div>
            </div>
            <div className="w-full my-2 rounded-2xl bg-gray-800 flex items-center gap-x-2 px-1 py-3 text-left">
              <LuInstagram size={33} className="ml-2 text-pink-500" />
              <div className="w-full">
                <p className="font-semibold text-sm">Follow On Instagram</p>
                <div className="flex w-full gap-x-1 items-center text-[13px] text-gray-400">
                  <RuppesCoin bordersize={2} iconsize={8} />
                  <span className=" font-semibold text-white">+500</span>
                </div>
              </div>
              <div className="flex justify-end mr-1">
                <MdOutlineNavigateNext
                  size={34}
                  className="text-white p-0.5 cursor-pointer"
                />
              </div>
            </div>
          </div>
        </div>
        {/* Youtube Video */}
        <div className="w-full mb-20">
          <div className="text-left flex items-center mt-4 w-full relative">
            <p className="font-semibold">Youtube Video</p>
          </div>
          <div className="mt-2 w-full">
            {Youtube &&
              Youtube.map((item: any) => {
                const { title, coin, status } = item;
                return (
                  <div
                    key={item._id}
                    onClick={() => (!status ? setcurrentYoutubeCard(item) : "")}
                    className="w-full my-2 rounded-2xl bg-gray-800 flex items-center gap-x-2 px-1 py-3 text-left"
                  >
                    <FaYoutube size={33} className="ml-2 text-red-500" />
                    <div className="w-full">
                      <p className="font-semibold text-sm">{title}</p>
                      <div className="flex w-full gap-x-1 items-center text-[13px] text-gray-400">
                        <RuppesCoin bordersize={2} iconsize={8} />
                        <span className=" font-semibold text-white">
                          {coin}
                        </span>
                      </div>
                    </div>
                    <div className="flex justify-end mr-3">
                      {status && <TrueCheck />}
                      {!status && (
                        <MdOutlineNavigateNext
                          size={34}
                          className="text-white p-0.5 cursor-pointer"
                        />
                      )}
                    </div>
                  </div>
                );
              })}
          </div>
        </div>
        {currentYoutubeCard && (
          <div className="fixed w-full z-20 h-screen -top-4">
            <SingleYoutubeCard
              item={currentYoutubeCard}
              close={() => setcurrentYoutubeCard(false)}
              handleCliam={handleCliam}
            />
          </div>
        )}
      </div>
    </div>
  );
};

const SingleYoutubeCard = ({ item, close, handleCliam }: any) => {
  const [userCode, setUserCode] = useState("");
  const { title, desc, coin } = item;
  return (
    <div className="relative h-full w-full mt-4">
      <div
        className="h-full bg-gray-300 opacity-20 cursor-pointer"
        onClick={close}
      ></div>
      <div className="absolute text-center px-2 py-2 w-full h-[65%] bottom-0 -mt-16 rounded-t-[45px] bg-black border-t-4 border-yellow-400 shadow-[0px_-2px_40px_0px_#f6e05e]">
        <div className="w-full mx-auto flex flex-col items-center relative">
          <FaYoutube className="w-56 h-36 rounded-lg text-red-500" />
          <h2 className="text-[30px] font-semibold">{title}</h2>
          <p className="text-gray-300 my-1 font-semibold">{desc}</p>
          <Link
            to={"/"}
            className="w-[50%] text-lg font-semibold py-2 outline-none text-center bg-blue-600 rounded-xl"
          >
            Watch Video
          </Link>

          <div className="flex w-full gap-x-2 items-center justify-center text-[25px] text-gray-400 my-3">
            <RuppesCoin bordersize={3} iconsize={16} />
            <span className="font-semibold text-white">{coin}</span>
          </div>
          <input
            value={userCode}
            type="text"
            onChange={(e) => setUserCode(e.target.value)}
            className="w-[50%] border border-gray-600 outline-none font-semibold bg-black text-white rounded-md px-2 py-3 mb-4"
            placeholder="Enter Code"
          />
          <button
            disabled={!userCode}
            onClick={() => handleCliam(item._id, userCode)}
            className="w-[90%] text-xl font-semibold py-5 text-center bg-blue-600 rounded-2xl disabled:bg-blue-300"
          >
            Check
          </button>
          <div
            className="absolute right-3 top-2 bg-gray-500 p-1 rounded-full cursor-pointer"
            onClick={close}
          >
            <CgClose className="text-black" size={22} />
          </div>
        </div>
      </div>
    </div>
  );
};
export default Task;
