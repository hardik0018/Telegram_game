import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { Link, useParams } from "react-router-dom";
import Loader from "../../../components/Loader";
import { useState } from "react";
import { toast } from "react-toastify";

const Update = () => {
  const { slug } = useParams();
  const [banReason, setBanReason] = useState("");
  const [validation, setValidation] = useState(false);
  const [loading, setLoading] = useState(false);
  const { data, isFetching, refetch } = useQuery({
    queryKey: [`User-${slug}`],
    queryFn: async () => {
      let res: any = await axios.get(
        `${import.meta.env.VITE_SERVER_HOST}/User/getUser/${slug}`
      );

      return res.data.data;
    },
    refetchOnWindowFocus: false,
  });

  const { data: Redeem } = useQuery({
    queryKey: [`User-Redeem-${slug}`],
    queryFn: async () => {
      let res: any = await axios.get(
        `${import.meta.env.VITE_SERVER_HOST}/User/reward/${slug}`
      );
      console.log(res);
      return res.data.data;
    },
    refetchOnWindowFocus: false,
  });

  const SliceText = (value: any) => {
    let date = new Date(value);

    return `${date.getDate()}/${date.getMonth()}/${date.getFullYear()}`;
  };

  const handleSubmit = async () => {
    setValidation(true);
    if (banReason) {
      setLoading(true);
      let res = await axios.post(
        `${import.meta.env.VITE_SERVER_HOST}/User/Ban`,
        {
          banReason,
          id: slug,
        }
      );
      if (res.data.success) {
        toast.success("Banned");
        refetch();
      } else {
        toast.error(res.data.message);
      }
      setLoading(false);
    }
  };

  const removeBan = async () => {
    setLoading(true);
    let res = await axios.get(
      `${import.meta.env.VITE_SERVER_HOST}/User/RemoveBan/${slug}`
    );
    if (res.data.success) {
      toast.success("Remove Ban ");
      refetch();
    } else {
      toast.error(res.data.message);
    }
    setLoading(false);
  };

  if (isFetching || loading) return <Loader />;
  return (
    <div className="flex justify-center w-full">
      {data && (
        <div className="bg-white max-w-2xl shadow-md shadow-gray-300 my-10 border border-gray-300 overflow-hidden sm:rounded-lg w-full">
          <div className="px-4 py-4  sm:px-6">
            <h3 className="text-lg leading-6 font-medium text-gray-900">
              User Info
            </h3>
            <p className="mt-1 max-w-2xl text-sm text-gray-500">
              Details and informations about user.
            </p>
          </div>

          <div className="border-t border-gray-200">
            <dl>
              <InfoBlock lable="Telegram Id" value={data.teleID} />
              <InfoBlock lable="Name" value={data.name} />
              <InfoBlock lable="Profit Per Hour" value={data.PPH} />
              <InfoBlock lable="Level" value={data.level} />
              <InfoBlock lable="Coin" value={data.coin} />
              <InfoBlock
                lable="Coin"
                value={
                  data.status ? (
                    <span className="text-green-700 bg-green-200 font-semibold rounded-md px-2 py-1">
                      Active
                    </span>
                  ) : (
                    <span className="text-red-700 bg-red-200 font-semibold rounded-md px-2 py-1">
                      Inactive
                    </span>
                  )
                }
              />
              <div className="bg-gray-50 px-4 py-3 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <dt className="text-sm font-medium text-gray-500">Redeem</dt>
                <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                  {!!Redeem.length ? (
                    Redeem.map((key: any) => {
                      return (
                        <Link
                          to={`/Admin/User/update/${key.orderId}`}
                          key={key.orderId}
                          className={`w-full md:w-fit ${
                            key.status ? "bg-green-300" : "bg-red-300"
                          } rounded-md px-4 py-2 flex gap-x-2 my-1 cursor-pointer`}
                        >
                          <p className="flex">
                            Order Id:
                            <span className="font-semibold">{key.orderId}</span>
                          </p>
                          <p className="flex">
                            Amount:
                            <span className="font-semibold">{key.rupees}</span>
                          </p>
                        </Link>
                      );
                    })
                  ) : (
                    <span>Not Any Redeem Points</span>
                  )}
                </dd>
              </div>

              <div className="bg-gray-50 px-4 py-3 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <dt className="text-sm font-medium text-gray-500">Friends</dt>
                <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                  {data.friends.length ? (
                    data.friends.map((key: any) => {
                      return (
                        <Link
                          to={`/Admin/User/update/${key.teleID}`}
                          key={key.teleID}
                          className="w-full md:w-fit bg-gray-300 rounded-md px-4 py-2 flex gap-x-2 my-1 cursor-pointer"
                        >
                          <p className="flex">
                            TeleID:
                            <span className="font-semibold"> {key.teleID}</span>
                          </p>
                          <p className="flex">
                            Name:
                            <span className="font-semibold">{key.name}</span>
                          </p>
                        </Link>
                      );
                    })
                  ) : (
                    <span>Not Any Friends Invited</span>
                  )}
                </dd>
              </div>
            </dl>
          </div>
          {data.ban == null ? (
            <div className="border-t border-gray-200">
              <div className="bg-gray-50 px-4 py-3 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <dt className="text-sm font-medium text-gray-500">Ban</dt>
                <div>
                  <label
                    htmlFor="countries"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Select a Reason To Ban
                  </label>
                  <select
                    id="countries"
                    onChange={(e: any) => setBanReason(e.target.value)}
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  >
                    <option selected value="">
                      Choose a country
                    </option>
                    <option value="Fraud">Fraud</option>
                    <option value="Spam">Spam</option>
                  </select>
                  {validation && banReason.length == 0 && (
                    <span className="mt-2 text-sm md:text-md lg:text-md lg:font-semibold text-red-500 ">
                      Please a Select
                    </span>
                  )}
                </div>
              </div>
              <div className="flex items-center justify-end mt-2">
                <button
                  onClick={handleSubmit}
                  className="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
                >
                  Submit
                </button>
              </div>
            </div>
          ) : (
            <div className="border-t border-gray-200">
              <div className="bg-gray-50 px-4 py-3 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6 w-full md:w-fit">
                <dt className="text-sm font-medium text-gray-500">Ban</dt>
                <div className="w-full bg-red-300 rounded-md px-4 py-2 flex gap-x-2 my-1 cursor-pointer">
                  <p className="flex">
                    Reason:
                    <span className="font-semibold">{data.ban.reason}</span>
                  </p>
                  <p className="flex">
                    Date:
                    <span className="font-semibold">
                      {SliceText(data.ban.date)}
                    </span>
                  </p>
                </div>
              </div>
              <div className="flex items-center justify-end mt-2">
                <button
                  onClick={removeBan}
                  className="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
                >
                  Remove Ban
                </button>
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export const InfoBlock = ({ lable, value }: any) => {
  return (
    <div className="bg-gray-50 px-4 py-3 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
      <dt className="text-sm font-medium text-gray-500">{lable}</dt>
      <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
        {value}
      </dd>
    </div>
  );
};

export default Update;
