import { memo } from "react";
import Coin from "../assets/images/coin.jpg";

const CoinButton = ({ handleClick, floatingTexts ,EarnTap}: any) => {
  return (
    <div>
      <div className="flex items-center justify-center h-full">
        <img
          src={Coin}
          alt="coin"
          onClick={handleClick}
          className="w-[88%] md:w-[80%] cursor-pointer rounded-full active:scale-105 duration-300"
        />
      </div>
      {floatingTexts.map((text: any, i: number) => (
        <span
          className="absolute font-semibold text-[50px] text-white animate-floatUp-hand pointer-events-none"
          key={i}
          style={{ top: text.y, left: text.x }}
        >
          +{+EarnTap}
        </span>
      ))}
    </div>
  );
};

export default memo(CoinButton);
