import axios from "axios";

export const FetchRedeemData = async () => {
  let res: any = await axios.get(
    `${import.meta.env.VITE_SERVER_HOST}/Redeem/get`
  );
  return res.data.data;
};

