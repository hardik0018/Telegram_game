import {
  IoCheckmarkCircleOutline,
  IoCopyOutline,
  IoGiftSharp,
} from "react-icons/io5";
import { LuDog, LuRefreshCw } from "react-icons/lu";
import RuppesCoin from "../components/RuppesCoin";
import { FaRegShareFromSquare } from "react-icons/fa6";
import { useEffect, useState } from "react";
import { useContext } from "../context/useContext";
import { toast } from "react-toastify";

const Friends = () => {
  const { Friends } = useContext();
  const [isSharing, setIsSharing] = useState(false);
  const [copy, setcopy] = useState(false);

  const [referID, setReferID] = useState("");
  const [count, setcount] = useState<Number>(0);

  useEffect(() => {
    const telegramData = localStorage.getItem("telegramData");

    console.log(Friends);

    if (telegramData) {
      setReferID(telegramData);
      setcount(Friends.length);
    }
  }, [Friends]);

  const handleShareClick = async () => {
    const url = encodeURIComponent(
      `https://t.me/BigEarnMoneyNewBot?start=${referID}`
    );

    const text = encodeURIComponent(
      "Join me on @BigEarnMoneyNewBot to start earning money together!"
    );
    const telegramLink = `https://t.me/share/url?url=${url}&text=${text}`;

    window.open(telegramLink, "_self");
    setIsSharing(!isSharing);
  };

  const handleCopyClick = () => {
    if (!copy) {
      const linkToCopy: string = `https://t.me/BigEarnMoneyNewBot?start=${referID}`;

      navigator.clipboard.writeText(linkToCopy);
      toast.success("Copied");
      setcopy(true);
    }
  };

  return (
    <div>
      <div className="text-center w-full text-white px-2 py-10 relative">
        <h2 className="text-3xl font-bold">Invite Friends</h2>
        <p className="text-sm my-2">You and your friend will receive bonuses</p>

        <div className="w-full mt-7 rounded-2xl bg-gray-800 flex items-center gap-x-2 px-1 py-3 text-left">
          <IoGiftSharp size={55} className="ml-2" />
          <div className="">
            <p className="font-semibold text-xl">Invite a friend</p>
            <div className="flex w-full gap-1 items-center">
              <RuppesCoin bordersize={2} iconsize={12} />
              <span className="text-yellow-500 font-semibold">+5,000</span>
              for you and your friend
            </div>
          </div>
        </div>
        {/* reffer link */}
        <div className="w-full h-[55px] my-5 flex gap-1 ">
          <div
            className="h-full w-[82%] gap-2 flex items-center cursor-pointer justify-center bg-[#5D65F3] rounded-xl"
            onClick={handleShareClick}
          >
            <p className="font-semibold text-lg">Invite Your Friends Now</p>
            <FaRegShareFromSquare size={22} />
          </div>
          <button
            className="h-full w-[18%] flex items-center justify-center cursor-pointer bg-[#494fca] rounded-xl"
            onClick={handleCopyClick}
          >
            {copy ? (
              <IoCheckmarkCircleOutline size={30} />
            ) : (
              <IoCopyOutline size={24} />
            )}
          </button>
        </div>
        <div className="text-left flex items-center w-full relative">
          <p className="font-semibold">List of Your Friends ({`${count}`})</p>
          <LuRefreshCw size={24} className="absolute right-2 cursor-pointer" />
        </div>
        {/* List of Your Friends */}
        <div className="mt-2 mb-16">
          {Friends.map((friend: any, idx: number) => (
            <FriendList name={friend.name} key={idx} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Friends;

export const FriendList = ({ name }: { name: string }) => {
  return (
    <div className="w-full my-2 rounded-2xl bg-gray-800 flex items-center gap-x-2 px-1 py-3 text-left">
      <LuDog size={33} className="ml-2" />
      <div>
        <p className="font-semibold text-sm">{name}</p>
        <div className="flex w-full gap-1 items-center text-[13px] text-gray-400">
          <p>Level:</p>
          <RuppesCoin bordersize={2} iconsize={8} />
          <span className=" font-semibold text-white">100</span>
          <p>(100)</p>
        </div>
      </div>
    </div>
  );
};
