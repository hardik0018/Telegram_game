import { memo, useCallback, useState } from "react";
import Coin from "../assets/images/coin.jpg";
import { useContext } from "../context/useContext";
interface FloatingText {
  id: number;
  x: number;
  y: number;
}

const CoinButton = () => {
  const { setCoin, setEnergy, Energy, EarnTap } = useContext();
  const [floatingTexts, setFloatingTexts] = useState<FloatingText[]>([]);
  const [nextId, setNextId] = useState(0);

  const handleClick = useCallback((e: any) => {
    if (+Energy > 0) {
      const { clientX: x, clientY: y } = e;
      setNextId((prev) => prev + 1);
      const newText: FloatingText = { id: nextId, x, y };
      setFloatingTexts((prev) => [...prev, newText]);
      hanldeCoinStatus();
      setTimeout(() => {
        setFloatingTexts((prev) =>
          prev.filter((text) => text.id !== newText.id)
        );
      }, 2000);
    }
  }, []);

  const hanldeCoinStatus = useCallback(() => {
    setCoin((prev) => +prev + +EarnTap);
    setEnergy((prev) => +prev - +EarnTap);
  }, [floatingTexts]);

  return (
    <div>
      <div className="flex items-center justify-center">
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
