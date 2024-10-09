import axios from "axios";
import React, { Dispatch, SetStateAction, useEffect, useState } from "react";
import Data from "../data/mine";

interface ContextProps {
  id: Number;
  setId: Dispatch<SetStateAction<Number | number>>;
  coin: Number;
  setCoin: Dispatch<SetStateAction<Number | number>>;
  name: String;
  setName: Dispatch<SetStateAction<String | string>>;
  level: Number;
  setLevel: Dispatch<SetStateAction<Number | number>>;
  nextLvlup: Number;
  setNextLvlup: Dispatch<SetStateAction<Number | number>>;
  PPH: Number;
  setPPH: Dispatch<SetStateAction<Number | number>>;
  Friends: Array<any>;
  setFriends?: any;
  Energy: Number;
  setEnergy: Dispatch<SetStateAction<Number | number>>;
  MaxEnergy: Number;
  setMaxEnergy: Dispatch<SetStateAction<Number | number>>;
  EarnTap: Number;
  setEarnTap: Dispatch<SetStateAction<Number | number>>;
  Cards: Array<any>;
  setCards: any;
  hanldeSave?: any;
}

const IntialValues: ContextProps = {
  id: 0,
  setId: () => undefined,
  coin: 0,
  setCoin: () => undefined,
  name: "Hello",
  setName: () => undefined,
  level: 1,
  setLevel: () => undefined,
  nextLvlup: 1001,
  setNextLvlup: () => undefined,
  PPH: 0,
  setPPH: () => undefined,
  Friends: [],
  setFriends: () => undefined,
  Energy: 1000,
  setEnergy: () => undefined,
  MaxEnergy: 1000,
  setMaxEnergy: () => undefined,
  EarnTap: 1,
  setEarnTap: () => undefined,
  Cards: [],
  setCards: () => undefined,
};

const LevelSchema: Object = [
  { lvl: 1, maxEnergy: 1000, Tap: 1, min: 0, max: 1000 },
  { lvl: 2, maxEnergy: 2000, Tap: 2, min: 1001, max: 5000 },
  { lvl: 3, maxEnergy: 3000, Tap: 3, min: 5001, max: 10000 },
  { lvl: 4, maxEnergy: 4000, Tap: 4, min: 10001, max: 50000 },
  { lvl: 5, maxEnergy: 5000, Tap: 5, min: 50001, max: 100000 },
  { lvl: 6, maxEnergy: 6000, Tap: 6, min: 100001, max: 500000 },
  { lvl: 7, maxEnergy: 7000, Tap: 7, min: 500001, max: 1000000 },
  { lvl: 8, maxEnergy: 8000, Tap: 8, min: 1000001, max: 5000000 },
  { lvl: 9, maxEnergy: 9000, Tap: 9, min: 5000001, max: 10000000 },
  { lvl: 10, maxEnergy: 10000, Tap: 10, min: 10000001, max: 50000000 },
];

interface WithChildProps {
  children: JSX.Element;
}

const context = React.createContext(IntialValues);

export const ContextProvider = ({ children }: WithChildProps) => {
  const [id, setId] = useState(IntialValues.coin);
  const [coin, setCoin] = useState(IntialValues.coin);
  const [name, setName] = useState(IntialValues.name);
  const [Energy, setEnergy] = useState(IntialValues.Energy);
  const [Friends, setFriends] = useState(IntialValues.Friends);
  const [nextLvlup, setNextLvlup] = useState(IntialValues.nextLvlup);
  const [level, setLevel] = useState(IntialValues.level);
  const [PPH, setPPH] = useState(IntialValues.PPH);
  const [EarnTap, setEarnTap] = useState(IntialValues.EarnTap);
  const [MaxEnergy, setMaxEnergy] = useState(IntialValues.MaxEnergy);
  const [Cards, setCards] = useState(IntialValues.Cards);

  useEffect(() => {
    if (+Energy < +MaxEnergy) {
      const interval = setInterval(function () {
        setEnergy((prev) => +prev + +EarnTap);
      }, 2000);

      return () => {
        clearInterval(interval);
      };
    }
  }, [Energy]);
  useEffect(() => {
    setCards(Data);
  }, []);

  useEffect(() => {
    Object(LevelSchema).map((i: any) => {
      if (i.min <= coin && i.max >= coin) {
        if (i.lvl != level) {
          setLevel(i.lvl);
          setNextLvlup(i.max + 1);
          setEnergy(i.maxEnergy);
          setMaxEnergy(i.maxEnergy);
          setEarnTap(i.Tap);
        }
      }
    });

    const interval = setInterval(function () {
      setCoin((prev) => +prev + +PPH / 3600);
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, [coin]);

  useEffect(() => {
    hanldeSave(id, coin, PPH, level, Cards, Friends, EarnTap);
  }, [coin, PPH, Friends, Cards, level, EarnTap]);

  const hanldeSave = async (
    id: Number,
    coin: Number,
    PPH: Number,
    level: Number,
    Cards: any,
    Friends: any,
    tap: Number
  ) => {
    await axios.post(`http://localhost:4000/User/UpdateData`, {
      id,
      coin,
      PPH,
      level,
      Cards,
      Friends,
      tap,
    });
  };
  const values = {
    id,
    setId,
    coin,
    setCoin,
    Energy,
    setEnergy,
    MaxEnergy,
    setMaxEnergy,
    Friends,
    setFriends,
    level,
    setLevel,
    nextLvlup,
    setNextLvlup,
    PPH,
    setPPH,
    name,
    setName,
    EarnTap,
    setEarnTap,
    Cards,
    setCards,
    hanldeSave,
  };

  return <context.Provider value={values}>{children}</context.Provider>;
};

export const useContext = () => {
  const { ...state } = React.useContext(context);
  return { ...state };
};
