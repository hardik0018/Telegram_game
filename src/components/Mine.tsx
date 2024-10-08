import { useEffect, useState } from "react";
import { CgClose } from "react-icons/cg";
import RuppesCoin from "./RuppesCoin";
import Coinstatus from "./Coinstatus";
import Data from "../data/mine";
import { useContext } from "../context/useContext";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

type SingleCard = {
  data: any;
  close?: React.MouseEventHandler;
  handleUpdate: React.MouseEventHandler;
};
const Mine = () => {
  const { Cards, setCards, setCoin, setPPH, coin } = useContext();
  const Menus = ["Markets", "PR Team", "Tech", "Specials"];
  const [currentMenu, setCurrentMenu] = useState("Markets");
  const [currentCard, setCurrentCard] = useState(false);

  const handleSingleCard = (e: any) => {
    setCurrentCard(e);
  };
  const hanldeCardClose = () => {
    setCurrentCard(false);
  };
  useEffect(() => {
    console.log(currentMenu);
    if (Cards) {
      let filterdata = Data.filter((item) => {
        if (item.category == currentMenu) return item;
      });
      setCards(filterdata);
    }
  }, [currentMenu]);

  const hanldeUpdate = (e: any) => {
    let cardData: any = [...Cards];
    cardData.map((item: any) => {
      const { id, currentlvl, level } = item;

      if (item.id === e) {
        console.log(id, currentlvl);
        console.log(coin, level[currentlvl - 1].coin);
        if (coin >= level[currentlvl - 1].coin) {
          setCoin((prev) => +prev - level[currentlvl - 1].coin);
          setPPH((prev) => +prev + level[currentlvl - 1].PPH);
          console.log(level[currentlvl - 1].coin);
          item.currentlvl++;
          toast.success("Success");
        } else {
          toast.error("Coin balance is insufficient");
        }
      }
    });
    console.log(cardData);
    setCards(cardData);
    setCurrentCard(false);
  };
  return (
    <section className="relative ">
      <div className="mx-1.5 flex flex-col items-center mt-10">
        <Coinstatus />
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
          {Cards.map((item) => {
            return (
              <div
                onClick={() => handleSingleCard(item)}
                key={item.id}
                className="rounded-xl bg-gray-700 flex flex-col w-full h-fit"
              >
                <div className="flex items-center px-1 py-1 gap-3">
                  <img src={item.img} className="w-1/3 h-14 rounded-md" />
                  <div className="flex flex-col w-2/3">
                    <h2 className="font-bold">{item.title}</h2>
                    <p className="text-[12px] mt-1">Profit Per hour</p>
                    <div className="flex items-center -mt-2">
                      <RuppesCoin bordersize={2} iconsize={10} />
                      <p className="text-[14px] ml-1 font-semibold">
                        {item.level[item.currentlvl - 1].PPH}
                      </p>
                    </div>
                  </div>
                </div>
                <div className="w-full mx-auto h-[1px] bg-gray-500 opacity-50"></div>
                <div className="flex px-2 py-1 items-center gap-3">
                  <p className="w-1/3 text-[15px] font-semibold">
                    lvl {item.level[item.currentlvl - 1].lvl}
                  </p>

                  <div className="flex items-center w-2/3">
                    <RuppesCoin bordersize={2} iconsize={10} />
                    <p className="ml-1 text-[15px] font-semibold">
                      {item.level[item.currentlvl - 1].coin}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      {currentCard && (
        <div className="fixed w-full z-20 h-screen -top-4">
          <SingleCard
            data={currentCard}
            close={hanldeCardClose}
            handleUpdate={hanldeUpdate}
          />
        </div>
      )}
    </section>
  );
};

const SingleCard = ({ data, close, handleUpdate }: SingleCard) => {
  return (
    <div className="relative h-full w-full mt-4">
      <div
        className="h-full bg-gray-300 opacity-20 cursor-pointer"
        onClick={close}
      ></div>
      <div className="absolute text-center px-2 py-6 w-full h-[65%] bottom-0 -mt-16 rounded-t-[45px] bg-black border-t-4 border-yellow-400 shadow-[0px_-2px_40px_0px_#f6e05e]">
        <div className="w-full mx-auto flex flex-col items-center relative">
          <img src={`${data.img}`} className="w-60 h-40 rounded-lg" />
          <h2 className="mt-2 text-[30px] font-semibold">{data.title}</h2>
          <p className="text-gray-300 my-1 font-semibold">{data.desc}</p>
          <p className="text-gray-400 mt-1 text-sm font-semibold">
            Profit Per hour
          </p>
          <div className="flex w-full gap-1 items-center justify-center text-[12px] text-gray-400">
            <RuppesCoin bordersize={2} iconsize={8} />
            <span className=" font-semibold text-gray-400">
              +{data.level[data.currentlvl - 1].PPH}
            </span>
          </div>
          <div className="flex w-full gap-1 items-center justify-center text-[25px] text-gray-400 my-5">
            <RuppesCoin bordersize={2} iconsize={8} />
            <span className="font-semibold text-white">
              +{data.level[data.currentlvl - 1].coin}
            </span>
          </div>
          <button
            onClick={() => handleUpdate(data.id)}
            className="w-[90%] text-xl font-semibold py-5 text-center bg-blue-600 rounded-2xl"
          >
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
