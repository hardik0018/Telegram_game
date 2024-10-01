import { useState } from "react";
import Coin from "../assets/images/coin.jpg";

interface FloatingText {
  id: number;
  x: number;
  y: number;
}

const CoinButton = () => {
  const [floatingTexts, setFloatingTexts] = useState<FloatingText[]>([]);
  const [nextId, setNextId] = useState(0);

  const handleClick = (e: any) => {
    console.log(e);
    const { clientX: x, clientY: y } = e;
    const newText: FloatingText = { id: nextId, x, y };
    setFloatingTexts((prev) => [...prev, newText]);
    setNextId((prev) => prev + 1);

    setTimeout(() => {
      setFloatingTexts((prev) => prev.filter((text) => text.id !== newText.id));
    }, 900);
  };

  return (
    <div>
      <div className="flex items-center justify-center">
        <img
          src={Coin}
          alt="coin"
          onClick={handleClick}
          className="w-[90%] md:w-[80%] cursor-pointer rounded-full active:scale-110 duration-300"
        />
      </div>
      {floatingTexts.map((text) => (
        <span
          className="absolute font-semibold text-[50px] text-white animate-floatUp-hand pointer-events-none"
          key={text.id}
          style={{ top: text.y, left: text.x }}
        >
          +1
        </span>
      ))}
    </div>
  );
};

export default CoinButton;
