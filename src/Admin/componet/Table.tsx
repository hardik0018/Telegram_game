import { useState } from "react";
import { CgEye } from "react-icons/cg";
import { FaRegEdit } from "react-icons/fa";
import { RiDeleteBin3Line } from "react-icons/ri";
import { Link } from "react-router-dom";
import DeleteConfirmation from "./DeleteConfirmation";

const Table = ({
  hanldeDelete,
  headvalue,
  img,
  data,
  see,
  unique,
  update,
  action,
  Deletelable,
}: any) => {
  const [confidelete, setConfidelete] = useState(false);
  const [id, setId] = useState("");
  const [lable, setLable] = useState("");

  const hanldeDeleteCloseOpen = (val: Boolean, id: any,label?:any) => {
    setId(id);
    setConfidelete(!confidelete);
    setLable(label)
    if (val) {
      hanldeDelete(id);
    }
  };

  const hanldeYes = (id: any) => {
    hanldeDeleteCloseOpen(true, id);
  };
  return (
    <div className="overflow-x-auto">
      <table className="w-full text-sm text-left text-gray-500 ">
        <thead className="text-xs text-white uppercase bg-blue-600 ">
          <tr>
            {img && <th></th>}
            {headvalue &&
              headvalue.map((item: any, index: number) => {
                return (
                  <th key={index} scope="col" className="px-4 py-3">
                    {item}
                  </th>
                );
              })}
            {action && (
              <th scope="col" className="px-4 py-3">
                Action
              </th>
            )}
          </tr>
        </thead>
        <tbody>
          {data &&
            data.map((item: any, index: number) => {
              return (
                <tr className="border-b" key={index}>
                  {!!img && (
                    <th className="w-10 h-16 md:h-20 md:w-20">
                      <img
                        loading="lazy"
                        alt="img"
                        className="rounded-xl w-10 h-10 md:w-20 md:h-20 p-1 md:p-2"
                        src={`${import.meta.env.VITE_SERVER_HOST}/images/${
                          item.img
                        }`}
                      />
                    </th>
                  )}
                  {headvalue.map((i: number) => {
                    return (
                      <th key={i} scope="col" className="px-4 py-3">
                        {item[`${i}`]}
                      </th>
                    );
                  })}
                  {action && (
                    <th className="flex h-16 items-center">
                      {see && (
                        <Link to={`${see}/${item[unique]}`}>
                          <CgEye className="text-green-600 text-2xl md:text-3xl mr-2" />
                        </Link>
                      )}
                      {update && (
                        <Link to={`${update}/${item[unique]}`}>
                          <FaRegEdit className="text-blue-600 text-2xl md:text-3xl mr-2" />
                        </Link>
                      )}
                      <RiDeleteBin3Line
                        onClick={() => {
                          hanldeDeleteCloseOpen(false, item[unique],item[Deletelable]);
                        }}
                        className="text-red-600 text-2xl md:text-3xl cursor-pointer"
                      />
                    </th>
                  )}
                </tr>
              );
            })}
        </tbody>
      </table>
      {confidelete && (
        <DeleteConfirmation
          close={hanldeDeleteCloseOpen}
          Yes={hanldeYes}
          id={id}
          item={lable}
        />
      )}
    </div>
  );
};

export default Table;
