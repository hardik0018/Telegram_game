import { useState } from "react";
import { CgClose } from "react-icons/cg";
import { FaIndianRupeeSign } from "react-icons/fa6";

type SingleCard = {
  title: String;
  close?: React.MouseEventHandler;
};

const Earn = () => {
  const [currentCard, setCurrentCard] = useState("");

  const handleSingleCard = (e: any) => {
    setCurrentCard(e);
  };
  const hanldeCardClose = () => {
    setCurrentCard("");
  };
  return (
    <div className="text-center">
      <h2 className="font-bold text-2xl my-2">Rewards</h2>
      <div className="grid grid-cols-2 gap-2 mt-3 mb-24 mx-2">
        <div
          onClick={() => handleSingleCard("50")}
          className="rounded-xl bg-gray-700 flex flex-col w-full h-fit cursor-pointer"
        >
          <div className="flex flex-col items-center px-1 py-1 text-lg">
            <img
              src="https://az15297.vo.msecnd.net/images/rewards/rc/large/AmazonPayIN_310x216.png"
              className="rounded-2xl"
            />
            <p className="font-bold my-1">₹50</p>
            <h2 className="font-bold text-[16px] -mt-2 mb-2">
              Amazon Pay Gift Card
            </h2>
          </div>
          <div className="w-full mx-auto h-[1px] bg-gray-500 opacity-50"></div>
          <div className="flex items-center justify-center w-full">
            <div className="rounded-full bg-yellow-500 w-fit h-fit p-0.5 border-[2px] border-yellow-300">
              <FaIndianRupeeSign size={15} />
            </div>
            <p className="ml-1 my-1 text-[20px] font-semibold">10000</p>
          </div>
        </div>
        <div
          onClick={() => handleSingleCard("100")}
          className="rounded-xl bg-gray-700 flex flex-col w-full h-fit cursor-pointer"
        >
          <div className="flex flex-col items-center px-1 py-1 text-lg">
            <img
              src="https://az15297.vo.msecnd.net/images/rewards/rc/large/AmazonPayIN_310x216.png"
              className="rounded-2xl"
            />
            <p className="font-bold my-1">₹100</p>
            <h2 className="font-bold text-[16px] -mt-2 mb-2">
              Amazon Pay Gift Card
            </h2>
          </div>
          <div className="w-full mx-auto h-[1px] bg-gray-500 opacity-50"></div>
          <div className="flex items-center justify-center w-full">
            <div className="rounded-full bg-yellow-500 w-fit h-fit p-0.5 border-[2px] border-yellow-300">
              <FaIndianRupeeSign size={15} />
            </div>
            <p className="ml-1 my-1 text-[20px] font-semibold">100000</p>
          </div>
        </div>
        <div
          onClick={() => handleSingleCard("500")}
          className="rounded-xl bg-gray-700 flex flex-col w-full h-fit cursor-pointer"
        >
          <div className="flex flex-col items-center px-1 py-1 text-lg">
            <img
              src="https://az15297.vo.msecnd.net/images/rewards/rc/large/AmazonPayIN_310x216.png"
              className="rounded-2xl"
            />
            <p className="font-bold my-1">₹500</p>
            <h2 className="font-bold text-[16px] -mt-2 mb-2">
              Amazon Pay Gift Card
            </h2>
          </div>
          <div className="w-full mx-auto h-[1px] bg-gray-500 opacity-50"></div>
          <div className="flex items-center justify-center w-full">
            <div className="rounded-full bg-yellow-500 w-fit h-fit p-0.5 border-[2px] border-yellow-300">
              <FaIndianRupeeSign size={15} />
            </div>
            <p className="ml-1 my-1 text-[20px] font-semibold">1000000</p>
          </div>
        </div>
        <div
          onClick={() => handleSingleCard("50")}
          className="rounded-xl bg-gray-700 flex flex-col w-full h-fit cursor-pointer"
        >
          <div className="flex flex-col items-center px-1 py-1 text-lg">
            <img
              src="https://az15297.vo.msecnd.net/images/rewards/rc/large/AmazonPayIN_310x216.png"
              className="rounded-2xl"
            />
            <p className="font-bold my-1">₹50</p>
            <h2 className="font-bold text-[16px] -mt-2 mb-2">
              Amazon Pay Gift Card
            </h2>
          </div>
          <div className="w-full mx-auto h-[1px] bg-gray-500 opacity-50"></div>
          <div className="flex items-center justify-center w-full">
            <div className="rounded-full bg-yellow-500 w-fit h-fit p-0.5 border-[2px] border-yellow-300">
              <FaIndianRupeeSign size={15} />
            </div>
            <p className="ml-1 my-1 text-[20px] font-semibold">10000</p>
          </div>
        </div>
        <div
          onClick={() => handleSingleCard("100")}
          className="rounded-xl bg-gray-700 flex flex-col w-full h-fit cursor-pointer"
        >
          <div className="flex flex-col items-center px-1 py-1 text-lg">
            <img
              src="https://az15297.vo.msecnd.net/images/rewards/rc/large/AmazonPayIN_310x216.png"
              className="rounded-2xl"
            />
            <p className="font-bold my-1">₹100</p>
            <h2 className="font-bold text-[16px] -mt-2 mb-2">
              Amazon Pay Gift Card
            </h2>
          </div>
          <div className="w-full mx-auto h-[1px] bg-gray-500 opacity-50"></div>
          <div className="flex items-center justify-center w-full">
            <div className="rounded-full bg-yellow-500 w-fit h-fit p-0.5 border-[2px] border-yellow-300">
              <FaIndianRupeeSign size={15} />
            </div>
            <p className="ml-1 my-1 text-[20px] font-semibold">100000</p>
          </div>
        </div>
        <div
          onClick={() => handleSingleCard("500")}
          className="rounded-xl bg-gray-700 flex flex-col w-full h-fit cursor-pointer"
        >
          <div className="flex flex-col items-center px-1 py-1 text-lg">
            <img
              src="https://az15297.vo.msecnd.net/images/rewards/rc/large/AmazonPayIN_310x216.png"
              className="rounded-2xl"
            />
            <p className="font-bold my-1">₹500</p>
            <h2 className="font-bold text-[16px] -mt-2 mb-2">
              Amazon Pay Gift Card
            </h2>
          </div>
          <div className="w-full mx-auto h-[1px] bg-gray-500 opacity-50"></div>
          <div className="flex items-center justify-center w-full">
            <div className="rounded-full bg-yellow-500 w-fit h-fit p-0.5 border-[2px] border-yellow-300">
              <FaIndianRupeeSign size={15} />
            </div>
            <p className="ml-1 my-1 text-[20px] font-semibold">1000000</p>
          </div>
        </div>
        <div
          onClick={() => handleSingleCard("50")}
          className="rounded-xl bg-gray-700 flex flex-col w-full h-fit cursor-pointer"
        >
          <div className="flex flex-col items-center px-1 py-1 text-lg">
            <img
              src="https://az15297.vo.msecnd.net/images/rewards/rc/large/AmazonPayIN_310x216.png"
              className="rounded-2xl"
            />
            <p className="font-bold my-1">₹50</p>
            <h2 className="font-bold text-[16px] -mt-2 mb-2">
              Amazon Pay Gift Card
            </h2>
          </div>
          <div className="w-full mx-auto h-[1px] bg-gray-500 opacity-50"></div>
          <div className="flex items-center justify-center w-full">
            <div className="rounded-full bg-yellow-500 w-fit h-fit p-0.5 border-[2px] border-yellow-300">
              <FaIndianRupeeSign size={15} />
            </div>
            <p className="ml-1 my-1 text-[20px] font-semibold">10000</p>
          </div>
        </div>
        <div
          onClick={() => handleSingleCard("100")}
          className="rounded-xl bg-gray-700 flex flex-col w-full h-fit cursor-pointer"
        >
          <div className="flex flex-col items-center px-1 py-1 text-lg">
            <img
              src="https://az15297.vo.msecnd.net/images/rewards/rc/large/AmazonPayIN_310x216.png"
              className="rounded-2xl"
            />
            <p className="font-bold my-1">₹100</p>
            <h2 className="font-bold text-[16px] -mt-2 mb-2">
              Amazon Pay Gift Card
            </h2>
          </div>
          <div className="w-full mx-auto h-[1px] bg-gray-500 opacity-50"></div>
          <div className="flex items-center justify-center w-full">
            <div className="rounded-full bg-yellow-500 w-fit h-fit p-0.5 border-[2px] border-yellow-300">
              <FaIndianRupeeSign size={15} />
            </div>
            <p className="ml-1 my-1 text-[20px] font-semibold">100000</p>
          </div>
        </div>
        <div
          onClick={() => handleSingleCard("500")}
          className="rounded-xl bg-gray-700 flex flex-col w-full h-fit cursor-pointer"
        >
          <div className="flex flex-col items-center px-1 py-1 text-lg">
            <img
              src="https://az15297.vo.msecnd.net/images/rewards/rc/large/AmazonPayIN_310x216.png"
              className="rounded-2xl"
            />
            <p className="font-bold my-1">₹500</p>
            <h2 className="font-bold text-[16px] -mt-2 mb-2">
              Amazon Pay Gift Card
            </h2>
          </div>
          <div className="w-full mx-auto h-[1px] bg-gray-500 opacity-50"></div>
          <div className="flex items-center justify-center w-full">
            <div className="rounded-full bg-yellow-500 w-fit h-fit p-0.5 border-[2px] border-yellow-300">
              <FaIndianRupeeSign size={15} />
            </div>
            <p className="ml-1 my-1 text-[20px] font-semibold">1000000</p>
          </div>
        </div>
      </div>
      {currentCard && (
        <div className="fixed w-full z-20 h-screen -top-4">
          <SingleCard title={`${currentCard}`} close={hanldeCardClose} />
        </div>
      )}
    </div>
  );
};

const SingleCard = ({ title, close }: SingleCard) => {
  return (
    <div className="relative h-full w-full">
      <div
        className="h-full bg-gray-300 opacity-20 cursor-pointer"
        onClick={close}
      ></div>
      <div className="absolute text-center px-2 py-6 w-full h-[57%] bottom-0 -mt-16 rounded-t-[45px] bg-black border-t-4 border-yellow-400 shadow-[0px_-2px_40px_0px_#f6e05e]">
        <div className="w-full mx-auto flex flex-col items-center relative">
          <img
            src="https://az15297.vo.msecnd.net/images/rewards/rc/large/AmazonPayIN_310x216.png"
            className="w-60 h-40 rounded-lg"
          />
          <h2 className="mt-2 text-[30px] font-semibold">₹{title}</h2>

          <div className="flex w-full gap-1 items-center justify-center text-[25px] text-gray-400 my-5">
            <div className="rounded-full bg-yellow-500 w-fit h-fit p-0.5 border-[2px] border-yellow-300 text-white">
              <FaIndianRupeeSign size={20} />
            </div>
            <span className="font-semibold text-white">100000</span>
          </div>
          <button className="w-[90%] text-xl font-semibold py-5 text-center bg-blue-600 rounded-2xl">
            Claim Now
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
export default Earn;
