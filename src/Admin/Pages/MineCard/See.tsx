import { useState } from "react";
import Table from "../../componet/Table";
import Search from "../../componet/Search";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { toast } from "react-toastify";
const See = () => {
  const [search, setSearch] = useState("");
  const { data, refetch } = useQuery({
    queryKey: ["MineData"],
    queryFn: async () => {
      let res: any = await axios.get(
        `${import.meta.env.VITE_SERVER_HOST}/mine/get`
      );
      return res.data.data;
    },
  });
  const hanldeDelete = async (id: any) => {
    let res = await axios.delete(
      `${import.meta.env.VITE_SERVER_HOST}/mine/delete?id=${id}`
    );
    if (res.data.success) {
      toast.success("Deleted");
      refetch();
    } else {
      toast.error(res.data.error);
    }
  };
  return (
    <div className="min-h-screen">
      <section className=" p-3 sm:p-5">
        <h2 className="text-3xl font-bold my-2">Mine Cards</h2>
        <div className="mx-auto">
          <Search
            search={search}
            setSearch={setSearch}
            to={"/Admin/Cards/Add"}
          />
          <div className="bg-white relative shadow-md sm:rounded-lg overflow-hidden">
            <Table
              headvalue={["title", "desc"]}
              img={true}
              action={true}
              unique={"_id"}
              Deletelable={"title"}
              data={data}
              see={false}
              update={false}
              hanldeDelete={hanldeDelete}
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default See;
