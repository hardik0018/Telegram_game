import { LuDog } from "react-icons/lu";
import { FaIndianRupeeSign } from "react-icons/fa6";
import BottomNav from "./components/BottomBar";
import CoinButton from "./components/CoinButton";
import { useEffect } from "react";

const tele = window.Telegram.WebApp;

function App() {
  useEffect(() => {
    tele.ready()
  }, [])
  
  return (
    <>
      <div className="h-screen w-full md:w-[400px] mx-auto bg-black overflow-hidden text-white">
        <div className="h-[10%] flex items-end px-5 md:px-10 py-2 z-20 md:py-4">
          <div className="flex items-center">
            <div className="w-11 h-10 bg-gray-600 rounded-lg flex items-center justify-center text-3xl">
              <LuDog />
            </div>
            <p className="ml-4 font-semibold">Name</p>
          </div>
          <div className="flex justify-end w-full">
            <button className="bg-gray-600 rounded-lg px-4 font-semibold py-2 h-10">
              Binance
            </button>
          </div>
        </div>
        <div className="h-[90%] bg-black rounded-t-[40px] md:rounded-t-[70px] px-3 md:px-6 z-20 flex flex-col items-center border-t-4 border-yellow-400 shadow-[0px_-2px_40px_0px_#f6e05e] md:shadow-[0px_-26px_79px_0px_#f6e05e]">
          <div className="flex justify-center gap-1 md:gap-4 my-8 mx-auto w-full">
            <div className="flex flex-col text-center px-2 md:px-3 py-1.5 font-semibold rounded-md bg-gray-800 text-sm w-[32%]">
              <p className="text-orange-500 text-[12px]">Earn Per tap</p>
              <div className="flex items-center justify-center gap-1 w-full">
                <div className="rounded-full bg-yellow-500 w-fit text-[8px] p-0.5 border-[2px] border-yellow-300">
                  <FaIndianRupeeSign />
                </div>
                <p>+12</p>
              </div>
            </div>
            <div className="flex flex-col text-center px-2 md:px-3 py-1.5 font-semibold rounded-md bg-gray-800 text-sm w-[32%]">
              <p className="text-blue-500 text-[12px]">Coins to Level up</p>
              <p>+12</p>
            </div>
            <div className="flex flex-col text-center px-2 md:px-3 py-1.5 font-semibold rounded-md bg-gray-800 text-sm w-[32%]">
              <p className="text-green-500 text-[12px]">Profit Per hour</p>
              <p>+12</p>
            </div>
          </div>
          <div className="flex items-center text-center">
            <div className="rounded-full bg-yellow-500 text-[22px] p-2 border-[5px] border-yellow-300">
              <FaIndianRupeeSign />
            </div>
            <p className="ml-2 text-4xl font-bold">40000000</p>
          </div>
          <div className="w-full mt-4 relative">
            <div className="h-2.5 w-full bg-gray-600 bg-transparent rounded-full absolute top-0 border border-gray-500"></div>
            <div
              className="h-2.5 w-full bg-red-600 rounded-full absolute border border-gray-500"
              style={{
                background:
                  "linear-gradient(90deg, rgba(247,240,0,1) 0%, rgba(228,255,0,1) 10%, rgba(33,250,3,1) 20%, rgba(28,232,51,1) 30%, rgba(7,233,219,1) 40%, rgba(28,184,238,1) 50%, rgba(38,0,255,1) 60%, rgba(222,0,255,1) 70%, rgba(248,0,255,1) 80%, rgba(255,0,91,1) 90%)",
                width: `${40}%`,
              }}
            ></div>
          </div>
          <div className="mt-10">
            <CoinButton />
          </div>
          <div></div>
        </div>
        <div className="w-full md:w-[400px] relative">
          <div className="absolute w-full bottom-0 left-0">
            <BottomNav />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
