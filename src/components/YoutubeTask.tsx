import { MdOutlineNavigateNext } from "react-icons/md";
import TrueCheck from "./TrueCheck";
import RuppesCoin from "./RuppesCoin";
import { FaYoutube } from "react-icons/fa";
import { CgClose } from "react-icons/cg";
import { Link } from "react-router-dom";
import { memo, useState } from "react";

const YoutubeTask = ({ Youtube, handleCliam }: any) => {
 
  const [currentYoutubeCard, setcurrentYoutubeCard] = useState(false);
  return (
    <>
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
                  <span className=" font-semibold text-white">+{coin}</span>
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
      {currentYoutubeCard && (
        <div className="fixed w-full z-20 h-screen -top-4">
          <SingleYoutubeCard
            item={currentYoutubeCard}
            close={() => setcurrentYoutubeCard(false)}
            handleCliam={handleCliam}
          />
        </div>
      )}
    </>
  );
};

const SingleYoutubeCard = ({ item, close, handleCliam }: any) => {
  const [userCode, setUserCode] = useState("");
  const { title, desc, coin, link } = item;
  return (
    <div className="relative h-full w-full mt-4 o">
      <div
        className="h-full bg-gray-300 opacity-30 cursor-pointer"
        onClick={close}
      ></div>
      <div className="absolute text-center px-2 py-2 w-full h-[65%] bottom-0 -mt-16 rounded-t-[45px] bg-black border-t-4 border-yellow-400 shadow-[0px_-2px_40px_0px_#f6e05e]">
        <div className="w-full mx-auto flex flex-col items-center relative">
          <FaYoutube className="w-56 h-36 rounded-lg text-red-500" />
          <h2 className="text-[30px] font-semibold">{title}</h2>
          <p className="text-gray-300 my-1 font-semibold">{desc}</p>
          <Link
            to={link}
            target="_blank"
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

export default memo(YoutubeTask);
