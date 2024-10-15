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
}) => {
  const [confidelete, setConfidelete] = useState(false);

  const hanldeDeleteCloseOpen = (id) => {
    setConfidelete(!confidelete);
    if (id) {
      hanldeDelete(id);
    }
  };

  const hanldeYes = (id) => {
    hanldeDeleteCloseOpen(id);
  };
  return (
    <div className="overflow-x-auto">
      <table className="w-full text-sm text-left text-gray-500 ">
        <thead className="text-xs text-white uppercase bg-blue-600 ">
          <tr>
            {img && <th></th>}
            {headvalue &&
              headvalue.map((item, index) => {
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
            data.map((item, index) => {
              return (
                <tr className="border-b" key={index}>
                  {!!img && (
                    <th className="w-10 h-16 md:h-20 md:w-20">
                      <img
                        loading="lazy"
                        alt="img"
                        className="rounded-xl w-10 h-10 md:w-20 md:h-20 p-1 md:p-2"
                        src={`${
                          import.meta.env.VITE_PUBLIC_SERVER_HOST
                        }/images/${item.img}`}
                      />
                    </th>
                  )}
                  {headvalue.map((i) => {
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
                          hanldeDeleteCloseOpen(false);
                        }}
                        className="text-red-600 text-2xl md:text-3xl cursor-pointer"
                      />
                      {confidelete && (
                        <DeleteConfirmation
                          close={hanldeDeleteCloseOpen}
                          Yes={hanldeYes}
                          item={item[unique]}
                          id={item[unique]}
                        />
                      )}
                    </th>
                  )}
                </tr>
              );
            })}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
