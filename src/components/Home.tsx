import CoinButton from "./CoinButton";
import { LuDog } from "react-icons/lu";
import RuppesCoin from "./RuppesCoin";
import Coinstatus from "./Coinstatus";
import { useContext } from "../context/useContext";
import { BsLightningChargeFill } from "react-icons/bs";
import { useEffect, useState } from "react";
import { io } from "socket.io-client";
let socket:any;

const Home = () => {
  const {
    fetchUserData,
    name,
    Energy,
    PPH,
    EarnTap,
    MaxEnergy,
    coin,
    nextLvlup,
  } = useContext();
  const [ProcessBar, setProcessBar] = useState(0);

  useEffect(() => {
    setProcessBar((+coin * 100) / +nextLvlup - 1);
  }, [coin]);

  useEffect(() => {
    // const urlParams = new URLSearchParams(window.location.search);
    fetchUserData(1183112225);
    socket = io(import.meta.env.VITE_SERVER_HOST);
    // const telegramData = urlParams.get("tele");

    // if (telegramData) {
    //   localStorage.setItem("telegramData", telegramData);
    // }

    // const savedTelegramData =
    //   localStorage.getItem("telegramData") || telegramData;

    // if (savedTelegramData) {
    //   try {
    //     fetchUserName(savedTelegramData);
    //   } catch (err) {
    //   toast.error("sdd")
    //   }
    // }
  }, []);

  // Function to fetch user name from the backend

  return (
    <div className=" bg-black overflow-hidden h-screen">
      <div className="h-[10%] flex items-end px-5 md:px-10 py-2 z-20 md:py-4">
        <div className="flex items-center">
          <div className="w-11 h-10 bg-gray-600 rounded-lg flex items-center justify-center text-3xl">
            <LuDog />
          </div>
          <p className="ml-4 font-semibold">{name}</p>
        </div>
      </div>
      <div className="h-[90%] bg-black rounded-t-[40px] md:rounded-t-[70px] px-3 md:px-6 z-20 flex flex-col items-center border-t-4 border-yellow-400 shadow-[0px_-2px_40px_0px_#f6e05e] md:shadow-[0px_-26px_79px_0px_#f6e05e]">
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
        <Coinstatus />
        <div className="w-full mt-4 relative">
          <div className="h-2.5 w-full bg-gray-600 bg-transparent rounded-full absolute top-0 border border-gray-500"></div>
          <div
            className="h-2.5 w-full bg-red-600 rounded-full absolute border border-gray-500"
            style={{
              background:
                "linear-gradient(90deg, rgba(247,240,0,1) 0%, rgba(228,255,0,1) 10%, rgba(33,250,3,1) 20%, rgba(28,232,51,1) 30%, rgba(7,233,219,1) 40%, rgba(28,184,238,1) 50%, rgba(38,0,255,1) 60%, rgba(222,0,255,1) 70%, rgba(248,0,255,1) 80%, rgba(255,0,91,1) 90%)",
              width: `${ProcessBar}%`,
            }}
          ></div>
        </div>
        <div className="mt-10 h-[50%] flex items-center">
          <CoinButton />
        </div>
        <div className="h-[10%] flex justify-start w-full font-bold items-center  ">
          <BsLightningChargeFill size={23} className="text-yellow-500 mr-1" />
          <p>
            {+Energy}/{+MaxEnergy}
          </p>
        </div>
        <div></div>
      </div>
    </div>
  );
};

export default Home;
