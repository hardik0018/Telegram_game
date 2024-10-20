import { useState } from "react";
import Search from "../../componet/Search";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import Loader from "../../../components/Loader";
import { FaRegEdit } from "react-icons/fa";
import { CgEye } from "react-icons/cg";
import { Link } from "react-router-dom";

const See = () => {
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(false);
  const { data, isFetching, isLoading } = useQuery({
    queryKey: ["OrderData"],
    queryFn: async () => {
      let res: any = await axios.get(
        `${import.meta.env.VITE_SERVER_HOST}/Order/get`
      );
      return res.data.data;
    },
    refetchOnWindowFocus: false,
  });

  if (isFetching || isLoading || loading) return <Loader />;
  return (
    <div className="min-h-screen">
      <section className=" p-3 sm:p-5">
        <h2 className="text-3xl font-bold my-2">Youtube Video</h2>
        <div className="mx-auto">
          <div className="flex justify-between">
            <div className="w-[70%]">
              <Search search={search} setSearch={setSearch} />
            </div>
          </div>
          <div className="bg-white relative shadow-md sm:rounded-lg overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full text-sm text-left text-gray-500 ">
                <thead className="text-xs text-white uppercase bg-blue-600 ">
                  <tr>
                    {[
                      "OrderId",
                      "TeleID",
                      "Name",
                      "Rupees",
                      "Date",
                      "Status",
                      "Action",
                    ].map((key: string, i: number) => {
                      return (
                        <th scope="col" key={i} className="px-4 py-3">
                          {key}
                        </th>
                      );
                    })}
                  </tr>
                </thead>
                <tbody>
                  {data &&
                    data.reverse().map((key: any, i: number) => {
                      const { orderId, teleID, name, rupees, status, date } =
                        key;
                      return (
                        <tr className="border-b" key={i}>
                          <th scope="col" className="px-4 py-3">
                            {orderId}
                          </th>
                          <th scope="col" className="px-4 py-3">
                            {teleID}
                          </th>
                          <th scope="col" className="px-4 py-3">
                            {name}
                          </th>
                          <th scope="col" className="px-4 py-3">
                            {rupees}
                          </th>
                          <th scope="col" className="px-4 py-3">
                            {date}
                          </th>
                          <th
                            scope="col"
                            className={`px-4 py-3 ${
                              status ? "text-green-400" : "text-red-400"
                            }`}
                          >
                            {status ? "Success" : "Pending"}
                          </th>

                          <th className="flex h-14 items-center">
                            <Link to={`update/${orderId}`}>
                              <FaRegEdit className="text-blue-600 text-2xl md:text-3xl mr-2" />
                            </Link>
                          </th>
                        </tr>
                      );
                    })}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default See;
