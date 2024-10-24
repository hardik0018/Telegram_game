import { FaYoutube } from "react-icons/fa";
import { FaIndianRupeeSign } from "react-icons/fa6";
import { FcPlanner } from "react-icons/fc";
import { LuInstagram } from "react-icons/lu";
import { MdOutlineNavigateNext } from "react-icons/md";
import TrueCheck from "../components/TrueCheck";
import RuppesCoin from "../components/RuppesCoin";
import { CgClose } from "react-icons/cg";
import { Link } from "react-router-dom";
import { useCallback, useState } from "react";
import { useContext } from "../context/useContext";
import axios from "axios";
import { toast } from "react-toastify";
import CheckIndata from "../data/DailyCheckin";
import YoutubeTask from "../components/YoutubeTask";

const Task = () => {
  const [checkInCard, setCheckInCard] = useState(false);

  const { id, Youtube, setYoutube, setCoin, checkin, setCheckin } =
    useContext();

  const handleCliam = useCallback(async (id: any, code: any) => {
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
  }, []);

  const handleCheckIn = async (coin: number) => {
    let copy: any = checkin;
    let date: Date = new Date();
    let yesterday = new Date(new Date().setDate(new Date().getDate() - 1));

    let CliamDate = `${date.getDate()}-${date.getMonth()}-${date.getFullYear()}`;
    let yesterdayExtrack = `${yesterday.getDate()}-${yesterday.getMonth()}-${yesterday.getFullYear()}`;

    if (copy.lastUpdate == yesterdayExtrack) {
      copy.streak++;
    } else {
      copy.streak = 1;
    }
    copy.lastUpdate = CliamDate;
    setCheckin(copy);

    let res = await axios.patch(
      `${import.meta.env.VITE_SERVER_HOST}/User/user/Checkin`,
      {
        id,
        copy,
      }
    );

    if (res.data.success) {
      toast.success("Claimed");
      setCoin((pre) => +pre + coin);
    } else {
      toast.error(res.data.message);
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
            <div
              onClick={() => setCheckInCard(true)}
              className="w-full my-2 rounded-2xl bg-gray-800 flex items-center gap-x-2 px-1 py-3 text-left"
            >
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
        {/* Daily reward Card open */}
        {checkInCard && (
          <div className="fixed w-full z-20 h-screen -top-4">
            <DailyCheckIn
              Cliam={handleCheckIn}
              checkin={checkin}
              close={() => setCheckInCard(false)}
            />
          </div>
        )}
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
            <YoutubeTask Youtube={Youtube} handleCliam={handleCliam} />
          </div>
        </div>
        {/* signle youtube card */}
      </div>
    </div>
  );
};

const DailyCheckIn = ({ Cliam, close, checkin }: any) => {
  let date: Date = new Date();
  let Today = `${date.getDate()}-${date.getMonth()}-${date.getFullYear()}`;
  return (
    <div className="relative h-full w-full mt-4 overflow-y-scroll">
      <div
        className="h-full bg-gray-300 opacity-20 cursor-pointer"
        onClick={close}
      ></div>
      <div className="absolute text-center px-2 py-2 w-full h-[90%] bottom-0 -mt-16 rounded-t-[45px] bg-black border-t-4 border-yellow-400 shadow-[0px_-2px_40px_0px_#f6e05e]">
        <div className="w-full mx-auto flex flex-col items-center relative">
          <FcPlanner size={120} />
          <h2 className="text-3xl font-semibold">Daily Rewards</h2>
          <p className="w-[80%] text-gray-300 text-sm my-2">
            Accrue coins for logging into the game daily without skipping
          </p>
          <div className="flex flex-wrap justify-center w-full gap-3 px-3 mt-3">
            {CheckIndata.map((item: any, i: number) => {
              return (
                <div
                  key={i}
                  className={`rounded-lg ${
                    checkin.streak > i ? "bg-green-500" : "bg-gray-800"
                  }  flex flex-col items-center w-[30%] gap-y-0.5`}
                >
                  <p className="text-lg font-semibold">Day {item.day}</p>
                  <RuppesCoin bordersize={4} iconsize={30} />
                  <p className="text-lg font-semibold">{item.coin}</p>
                </div>
              );
            })}
          </div>
          <button
            disabled={checkin.lastUpdate == Today}
            onClick={() => Cliam(CheckIndata[checkin.streak].coin)}
            className="w-[90%] text-xl mt-3 font-semibold py-6 text-center bg-blue-600 rounded-2xl disabled:bg-blue-300"
          >
            Claim
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
