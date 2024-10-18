import { useState } from "react";
import Table from "../../componet/Table";
import Search from "../../componet/Search";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import Loader from "../../../components/Loader";
const See = () => {
  const [search, setSearch] = useState("");
  const { data, isFetching } = useQuery({
    queryKey: ["UsersData"],
    queryFn: async () => {
      let res: any = await axios.get(
        `${import.meta.env.VITE_SERVER_HOST}/User/get`
      );
      return res.data.data;
    },
    refetchOnWindowFocus: false,
  });

  if (isFetching) return <Loader />;
  return (
    <div className="min-h-screen">
      <section className="p-3 sm:p-5">
        <h2 className="text-3xl font-bold my-2">Users</h2>
        <div className="mx-auto">
          <Search search={search} setSearch={setSearch} to={false} />
          <div className="bg-white relative shadow-md sm:rounded-lg overflow-hidden">
            <Table
              headvalue={["name", "PPH", "coin", "level"]}
              img={false}
              action={true}
              deleteAction={false}
              data={data}
              unique={"teleID"}
              see={false}
              update={"/Admin/User/update"}
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default See;
