import { useState } from "react";
import { CgClose } from "react-icons/cg";
import RuppesCoin from "../components/RuppesCoin";
import { useQuery } from "@tanstack/react-query";
import { FetchRedeemData } from "../Admin/api/api";
import Loader from "../components/Loader";
import { Link } from "react-router-dom";
import { useContext } from "../context/useContext";
import { toast } from "react-toastify";
import axios from "axios";

const Earn = () => {
  const [currentCard, setCurrentCard] = useState("");
  const {
    coin: CurrentCoin,
    setCoin,
    level,
    Friends,
    PPH,
    id,
    name,
  } = useContext();
  const { data, isFetching, isLoading } = useQuery({
    queryKey: ["RedeemData"],
    queryFn: () => FetchRedeemData(),
    refetchOnWindowFocus: false,
    staleTime: Infinity,
  });
  const handleSingleCard = (e: any) => {
    setCurrentCard(e);
  };

  const hanldeOrder = (item: any) => {
    const { coin, condition, rupees } = item;
    if (coin <= CurrentCoin) {
      if (condition) {
        const { reason, value } = condition;
        if (reason == "Level") {
          if (value <= level) {
            ConfirmOrder(coin, rupees, item._id);
          } else {
            toast.error(`Minimum ${value} Level is Required`);
          }
        } else if (reason == "Invite A Friend") {
          if (value <= Friends.length) {
            ConfirmOrder(coin, rupees, item._id);
          } else {
            toast.error(`Minimum ${value} Friend Is Invite`);
          }
        } else if (reason == "PPH") {
          if (value <= PPH) {
            ConfirmOrder(coin, rupees, item._id);
          } else {
            toast.error(`Minimum ${value} Profit Per Hours Required`);
          }
        }
      } else {
        ConfirmOrder(coin, rupees, item._id);
      }
    } else {
      toast.error("Coin is Not Efficiency");
    }
  };

  const ConfirmOrder = async (coin: number, rupees: number, Redeemid: any) => {
    let date = new Date();
    let orderId = `${date.getDate()}${date.getMonth()}${date.getFullYear()}${date.getMilliseconds()}`;
    let res = await axios.post(
      `${import.meta.env.VITE_SERVER_HOST}/Order/Add`,
      {
        Redeemid,
        rupees,
        orderId,
        teleID: id,
        name,
      }
    );
 
    if (res.data.success) {
      toast.success("Success");
      setCoin((pre) => +pre - coin);
    } else {
      toast.error(res.data.message);
    }
  };

  if (isFetching || isLoading) return <Loader />;
  return (
    <div className="text-center">
      <h2 className="font-bold text-2xl my-2">Rewards</h2>
      <div className="flex justify-end w-full">
        <Link to={"/RedeemHistory"} className="underline  pr-4">
          My Rewards
        </Link>
      </div>
      <div className="grid grid-cols-2 gap-2 mt-3 mb-24 mx-2">
        {data &&
          data.map((item: any) => {
      
            return (
              <div
                key={item._id}
                onClick={() => handleSingleCard(item)}
                className="rounded-xl bg-gray-700 flex flex-col w-full h-fit cursor-pointer"
              >
                <div className="flex flex-col items-center px-1 py-1 text-lg">
                  <img
                    src="https://az15297.vo.msecnd.net/images/rewards/rc/large/AmazonPayIN_310x216.png"
                    className="rounded-2xl"
                  />
                  <p className="font-bold my-1">₹{item.rupees}</p>
                  <h2 className="font-bold text-[16px] -mt-2 mb-2">
                    Amazon Pay Gift Card
                  </h2>
                </div>
                <div className="w-full mx-auto h-[1px] bg-gray-500 opacity-50"></div>
                <div className="flex items-center justify-center w-full">
                  <RuppesCoin bordersize={2} iconsize={15} />
                  <p className="ml-1 my-1 text-[20px] font-semibold">
                    {item.coin}
                  </p>
                </div>
              </div>
            );
          })}
      </div>
      {currentCard && (
        <div className="fixed w-full z-20 h-screen -top-4">
          <SingleCard
            item={currentCard}
            close={() => setCurrentCard("")}
            hanldeOrder={hanldeOrder}
          />
        </div>
      )}
    </div>
  );
};

const SingleCard = ({ item, close, hanldeOrder }: any) => {
  return (
    <div className="relative h-full w-full mt-5">
      <div
        className="h-full bg-gray-300 opacity-20 cursor-pointer"
        onClick={close}
      ></div>
      <div className="absolute text-center px-2 py-6 w-full h-[58%] bottom-0 -mt-16 rounded-t-[45px] bg-black border-t-4 border-yellow-400 shadow-[0px_-2px_40px_0px_#f6e05e]">
        <div className="w-full mx-auto flex flex-col items-center relative">
          <img
            src="https://az15297.vo.msecnd.net/images/rewards/rc/large/AmazonPayIN_310x216.png"
            className="w-60 h-40 rounded-lg"
          />
          <h2 className="mt-2 text-[30px] font-semibold">₹{item.rupees}</h2>

          <div className="flex w-full gap-1 items-center justify-center text-[25px] text-gray-400 my-5">
            <RuppesCoin bordersize={2} iconsize={18} />
            <span className="font-semibold text-white">{item.coin}</span>
          </div>
          <button
            onClick={() => hanldeOrder(item)}
            className="w-[90%] text-xl font-semibold py-5 text-center bg-blue-600 rounded-2xl"
          >
            Claim Now
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
export default Earn;
