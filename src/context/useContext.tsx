import React from "react";

interface ContextProps {
  coin: Number;
  setCoin?: React.Dispatch<Number>;
}

const IntialValues: ContextProps = {
  coin: 0,
  setCoin: () => undefined,
};

interface WithChildProps {
  children: JSX.Element;
}

const context = React.createContext(IntialValues);

export const ContextProvider = ({ children }: WithChildProps) => {
  const [coin, setCoin] = React.useState(IntialValues.coin);
  const values = {
    coin,
    setCoin,
  };
  return <context.Provider value={values}>{children}</context.Provider>;
};

export const useContext = () => {
  const { ...state } = React.useContext(context);
  return { ...state };
};
