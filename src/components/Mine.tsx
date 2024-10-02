import {  useState } from "react";
import { CgClose } from "react-icons/cg";
import { FaIndianRupeeSign } from "react-icons/fa6";
import { FcGallery } from "react-icons/fc";

type SingleCard = {
  title: String;
  close?: React.MouseEventHandler;
};
const Mine = () => {
  const Menus = ["Markets", "PR Team", "Tech", "Specials"];
  const [currentMenu, setCurrentMenu] = useState("Markets");
  const [currentCard, setCurrentCard] = useState("");

  const handleSingleCard = (e: any) => {
    setCurrentCard(e);
  };
  const hanldeCardClose = () => {
    setCurrentCard("");
  };
  return (
    <section className="relative ">
      <div className="mx-1">
        <div className="flex items-center bg-gray-700 rounded-lg w-full justify-between px-2 py-1 mt-4">
          {Menus.map((item, index) => {
            return (
              <button
                key={index}
                onClick={() => setCurrentMenu(item)}
                className={`text-center w-full ${
                  item == currentMenu
                    ? "bg-gray-800 font-semibold"
                    : "bg-transparent"
                } p-2 rounded-md transition-all duration-300 ease-in-out`}
              >
                <h2>{item}</h2>
              </button>
            );
          })}
        </div>
        <div className="w-full text-lg mt-7 my-2 gap-2 mb-24 grid grid-cols-2">
          <div
            onClick={() => handleSingleCard("First")}
            className="rounded-xl bg-gray-700 flex flex-col w-full h-fit cursor-pointer"
          >
            <div className="flex items-center px-1 py-1 gap-3">
              <FcGallery className="w-1/3" size={60} />
              <div className="flex flex-col w-2/3">
                <h2 className="font-bold">Fun Tokens</h2>
                <p className="text-[12px] mt-1">Profit Per hour</p>
                <div className="flex items-center -mt-2">
                  <div className="rounded-full bg-yellow-500 w-fit h-fit p-0.5 border-[3px] border-yellow-300">
                    <FaIndianRupeeSign size={8} />
                  </div>
                  <p className="text-[14px] ml-1 font-semibold">2.31M</p>
                </div>
              </div>
            </div>
            <div className="w-full mx-auto h-[1px] bg-gray-500 opacity-50"></div>
            <div className="flex px-2 py-1 items-center gap-3">
              <p className="w-1/3 text-[15px] font-semibold">lvl 14</p>

              <div className="flex items-center w-2/3">
                <div className="rounded-full bg-yellow-500 w-fit h-fit p-0.5 border-[2px] border-yellow-300">
                  <FaIndianRupeeSign size={8} />
                </div>
                <p className="ml-1 text-[15px] font-semibold">2.31M</p>
              </div>
            </div>
          </div>
          <div
            onClick={() => handleSingleCard("Second")}
            className="rounded-xl bg-gray-700 flex flex-col w-full h-fit"
          >
            <div className="flex items-center px-1 py-1 gap-3">
              <FcGallery className="w-1/3" size={60} />
              <div className="flex flex-col w-2/3">
                <h2 className="font-bold">Fun Tokens</h2>
                <p className="text-[12px] mt-1">Profit Per hour</p>
                <div className="flex items-center -mt-2">
                  <div className="rounded-full bg-yellow-500 w-fit h-fit p-0.5 border-[3px] border-yellow-300">
                    <FaIndianRupeeSign size={8} />
                  </div>
                  <p className="text-[14px] ml-1 font-semibold">2.31M</p>
                </div>
              </div>
            </div>
            <div className="w-full mx-auto h-[1px] bg-gray-500 opacity-50"></div>
            <div className="flex px-2 py-1 items-center gap-3">
              <p className="w-1/3 text-[15px] font-semibold">lvl 14</p>

              <div className="flex items-center w-2/3">
                <div className="rounded-full bg-yellow-500 w-fit h-fit p-0.5 border-[2px] border-yellow-300">
                  <FaIndianRupeeSign size={8} />
                </div>
                <p className="ml-1 text-[15px] font-semibold">2.31M</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {currentCard && (
        <div className="absolute w-full z-20 h-screen -top-4">
          <SingleCard title={`${currentCard}`} close={hanldeCardClose} />
        </div>
      )}
    </section>
  );
};

const SingleCard = ({ title, close }: SingleCard) => {
  return (
    <div className="relative h-full w-full">
      <div
        className="h-full bg-gray-300 opacity-20 cursor-pointer"
        onClick={close}
      ></div>
      <div className="absolute text-center px-2 py-6 w-full h-[63%] bottom-0 -mt-16 rounded-t-[45px] bg-black border-t-4 border-yellow-400 shadow-[0px_-2px_40px_0px_#f6e05e]">
        <div className="w-full mx-auto flex flex-col items-center relative">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQF3fhW-NbMxpXAKDd0V9hrRVoux3c9uEzScQ&s"
            className="w-60 h-40 rounded-lg"
          />
          <h2 className="mt-2 text-[30px] font-semibold">{title}</h2>
          <p className="text-gray-300 my-1 font-semibold">Improve your Mood</p>
          <p className="text-gray-400 mt-1 text-sm font-semibold">
            Profit Per hour
          </p>
          <div className="flex w-full gap-1 items-center justify-center text-[12px] text-gray-400">
            <div className="rounded-full bg-yellow-500 w-fit h-fit p-0.5 border-[2px] border-yellow-300 text-white">
              <FaIndianRupeeSign size={8} />
            </div>
            <span className=" font-semibold text-gray-400">+100</span>
          </div>
          <div className="flex w-full gap-1 items-center justify-center text-[25px] text-gray-400 my-5">
            <div className="rounded-full bg-yellow-500 w-fit h-fit p-0.5 border-[2px] border-yellow-300 text-white">
              <FaIndianRupeeSign size={20} />
            </div>
            <span className="font-semibold text-white">+100</span>
          </div>
          <button className="w-[90%] text-xl font-semibold py-5 text-center bg-blue-600 rounded-2xl">
            Go Ahead
          </button>
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
export default Mine;
