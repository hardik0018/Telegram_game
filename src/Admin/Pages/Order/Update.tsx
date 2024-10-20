import { useParams } from "react-router-dom";
import { InfoBlock } from "../Users/Update";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import Loader from "../../../components/Loader";
import { useState } from "react";
import { toast } from "react-toastify";

const Update = () => {
  const { slug } = useParams();
  const [code, setCode] = useState("");
  const { data, isFetching, refetch } = useQuery({
    queryKey: [`Order-${slug}`],
    queryFn: async () => {
      let res: any = await axios.get(
        `${import.meta.env.VITE_SERVER_HOST}/Order/getone/${slug}`
      );

      return res.data.data[0];
    },
    refetchOnWindowFocus: false,
  });

  const handleCompleteOrder = async () => {
    
    if (code.length>12) {
      let res = await axios.patch(
        `${import.meta.env.VITE_SERVER_HOST}/Order/update/${slug}`,
        { code }
      );
      if (res.data.success) {
        toast.success("Updated");
        refetch();
      } else {
        toast.error(res.data.message);
      }
    }else{
      toast.error("Code Mininum length 12 required")
    }
  };

  if (isFetching) return <Loader />;
  return (
    <div>
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
                <InfoBlock lable="OrderId" value={data.orderId} />
                <InfoBlock lable="Telegram Id" value={data.teleID} />
                <InfoBlock lable="Name" value={data.name} />
                <InfoBlock lable="Ruppes" value={`${data.rupees}`} />
                <InfoBlock lable="Date" value={data.date} />
                <InfoBlock
                  lable="Coin"
                  value={
                    <span
                      className={`${
                        data.status
                          ? "text-green-700 bg-green-200"
                          : "text-red-700 bg-red-200"
                      } font-semibold rounded-md px-2 py-1 `}
                    >
                      {data.status ? "Success" : "Pending"}
                    </span>
                  }
                />
                {!data.status && (
                  <div className="px-4 py-3 sm:px-6">
                    <div className="bg-gray-50 sm:grid sm:grid-cols-3 sm:gap-4 ">
                      <dt className="text-sm font-medium text-gray-500">
                        Code
                      </dt>
                      <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                        <input
                          type="text"
                          className={`bg-gray-50 border-2 border-gray-300 text-gray-900 border-1 text-sm rounded-lg block w-full p-2.5 `}
                          placeholder={"Code"}
                          onChange={(e: any) => setCode(e.target.value)}
                        />
                      </dd>
                    </div>
                    <div className="flex items-center justify-end mt-2 w-full">
                      <button
                        onClick={handleCompleteOrder}
                        className="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mb-2"
                      >
                        Complete Order
                      </button>
                    </div>
                  </div>
                )}
                {data.status && <InfoBlock lable="Code" value={data.code} />}
              </dl>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Update;
