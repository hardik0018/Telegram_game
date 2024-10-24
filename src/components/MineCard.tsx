import { memo } from "react";
import RuppesCoin from "./RuppesCoin";

const MineCard = ({ FilterCard }: any) => {
  return (
    <>
      {!!FilterCard.length &&
        FilterCard.map((item: any) => {
          const { img, currentlvl, lvl, maxlvl, title } = item;
          return (
            <div
              key={item._id}
              className="rounded-xl bg-gray-700 flex flex-col w-full h-fit"
            >
              <div className="flex items-center px-1 py-1 gap-3">
                <img
                  src={`${import.meta.env.VITE_SERVER_HOST}/images/${img}`}
                  className="w-1/3 h-14 rounded-md"
                />
                <div className="flex flex-col w-2/3">
                  <h2 className="font-bold">{title}</h2>
                  <p className="text-[12px] mt-1">Profit Per hour</p>
                  <div className="flex items-center -mt-2">
                    <RuppesCoin bordersize={2} iconsize={10} />
                    <p className="text-[14px] ml-1 font-semibold">
                      {lvl[currentlvl - 1].PPH}
                    </p>
                  </div>
                </div>
              </div>
              <div
                className={`w-full mx-auto h-[1px] bg-gray-500 opacity-50 `}
              ></div>
              <div
                className={`flex px-2 py-1 items-center gap-3 ${
                  maxlvl == currentlvl ? "text-gray-400" : "text-gray-300"
                }`}
              >
                <p className="w-1/3 text-[15px] font-semibold">
                  lvl {lvl[currentlvl - 1].lvl}
                </p>

                <div className="flex items-center w-2/3">
                  <RuppesCoin bordersize={2} iconsize={10} />
                  <p className="ml-1 text-[15px] font-semibold">
                    {lvl[currentlvl - 1].coin}
                  </p>
                </div>
              </div>
            </div>
          );
        })}
    </>
  );
};

export default memo(MineCard);
