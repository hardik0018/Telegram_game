import React, { Dispatch, SetStateAction, useEffect } from "react";

interface ContextProps {
  coin: Number;
  setCoin: Dispatch<SetStateAction<Number | number>>;
  name: String;
  setName: Dispatch<SetStateAction<String | string>>;
  level: Number;
  setLevel: Dispatch<SetStateAction<Number | number>>;
  PPH: Number;
  setPPH: Dispatch<SetStateAction<Number | number>>;
  Friends: Object;
  setFriends: Dispatch<SetStateAction<Number | number>>;
  Energy: Number;
  setEnergy: Dispatch<SetStateAction<Number | number>>;
  EarnTap: Number;
  setEarnTap: Dispatch<SetStateAction<Number | number>>;
}

const IntialValues: ContextProps = {
  coin: 0,
  setCoin: () => undefined,
  name: "Hello",
  setName: () => undefined,
  level: 1,
  setLevel: () => undefined,
  PPH: 0,
  setPPH: () => undefined,
  Friends: {},
  setFriends: () => undefined,
  Energy: 50,
  setEnergy: () => undefined,
  EarnTap: 1,
  setEarnTap: () => undefined,
};

interface WithChildProps {
  children: JSX.Element;
}

const context = React.createContext(IntialValues);

export const ContextProvider = ({ children }: WithChildProps) => {
  const [coin, setCoin] = React.useState(IntialValues.coin);
  const [name, setName] = React.useState(IntialValues.name);
  const [Energy, setEnergy] = React.useState(IntialValues.Energy);
  const [Friends, setFriends] = React.useState(IntialValues.Friends);
  const [level, setLevel] = React.useState(IntialValues.level);
  const [PPH, setPPH] = React.useState(IntialValues.PPH);
  const [EarnTap, setEarnTap] = React.useState(IntialValues.EarnTap);
  const values = {
    coin,
    setCoin,
    Energy,
    setEnergy,
    Friends,
    setFriends,
    level,
    setLevel,
    PPH,
    setPPH,
    name,
    setName,
    EarnTap,
    setEarnTap,
  };

  useEffect(() => {
    if (+Energy < 50) {
      const interval = setInterval(function () {
        setEnergy((prev) => +prev + 1);
      }, 2000);

      return () => {
        clearInterval(interval);
      };
    }
  }, [Energy]);

  return <context.Provider value={values}>{children}</context.Provider>;
};

export const useContext = () => {
  const { ...state } = React.useContext(context);
  return { ...state };
};
