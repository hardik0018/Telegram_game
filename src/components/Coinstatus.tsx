import { useContext } from "../context/useContext";
import RuppesCoin from "./RuppesCoin";

const Coinstatus = () => {
  const { coin } = useContext();
  return (
    <div className="flex items-center text-center">
      <RuppesCoin bordersize={5} iconsize={24} />
      <p className="ml-2 text-4xl font-bold">{`${coin}`}</p>
    </div>
  );
};

export default Coinstatus;
