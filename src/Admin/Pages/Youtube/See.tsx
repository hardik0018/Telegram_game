import { useState } from "react";
import Table from "../../componet/Table";
import Search from "../../componet/Search";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { toast } from "react-toastify";
import Loader from "../../../components/Loader";

const See = () => {
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(false);
  const { data, refetch, isFetching, isLoading } = useQuery({
    queryKey: ["YoutubeData"],
    queryFn: async () => {
      let res: any = await axios.get(
        `${import.meta.env.VITE_SERVER_HOST}/Youtube/get`
      );
      return res.data.data;
    },
    refetchOnWindowFocus: false,
  });
  const hanldeDelete = async (id: any) => {
    setLoading(true);
    let res = await axios.delete(
      `${import.meta.env.VITE_SERVER_HOST}/Youtube/delete/${id}`
    );
    setLoading(false);
    if (res.data.success) {
      toast.success("Deleted");
      refetch();
    } else {
      toast.error(res.data.error);
    }
  };
  if (isFetching || isLoading || loading) return <Loader />;
  return (
    <div className="min-h-screen">
      <section className=" p-3 sm:p-5">
        <h2 className="text-3xl font-bold my-2">Youtube Video</h2>
        <div className="mx-auto">
          <Search
            search={search}
            setSearch={setSearch}
            to={"/Admin/Youtube/Add"}
          />
          <div className="bg-white relative shadow-md sm:rounded-lg overflow-hidden">
            <Table
              headvalue={["title", "desc"]}
              img={false}
              action={true}
              unique={"_id"}
              Deletelable={"title"}
              data={data}
              see={false}
              deleteAction={true}
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
