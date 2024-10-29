import { LuDog } from "react-icons/lu";
import RuppesCoin from "./RuppesCoin";
import { memo } from "react";

const FriendList = ({ Friends }: any) => {

  return (
    <>
      {Friends &&
        Friends.map((friend: any, idx: number) => (
          <SingleFriendList name={friend.name} key={idx} />
        ))}
    </>
  );
};
const SingleFriendList = ({ name }: { name: string }) => {

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
export default memo(FriendList);
