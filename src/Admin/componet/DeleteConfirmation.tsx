import { IoMdClose } from "react-icons/io";
import { RiDeleteBin6Fill } from "react-icons/ri";

const DeleteConfirmation = ({ close, Yes, item, id }:any) => {

  return (
    <div className="fixed top-0 left-0 h-full w-full bg-gray-100 opacity-95">
      <div className="relative flex items-center justify-center h-full ">
        <div className="absolute z-50 opacity-100 p-4 text-center bg-white rounded-lg shadow-sm shadow-gray-400 border border-gray-400 sm:p-5">
          <button
            type="button"
            onClick={() => {
              close();
            }}
            className="text-gray-400 absolute top-2.5 right-2.5 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center "
            data-modal-toggle="deleteModal"
          >
            <IoMdClose className="w-5 h-5" />
            <span className="sr-only">Close modal</span>
          </button>

          <RiDeleteBin6Fill className="text-gray-700 w-11 h-11 mb-3.5 mx-auto" />
          <p className="mb-4 text-gray-700 ">
            Are you sure you want to delete the {item}?
          </p>
          <div className="flex justify-center items-center space-x-4">
            <button
              data-modal-toggle="deleteModal"
              type="button"
              onClick={() => {
                close();
              }}
              className="py-2 px-3 text-sm font-medium text-gray-700 bg-white rounded-lg border border-gray-200 hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-primary-300 hover:text-gray-900 focus:z-10 "
            >
              No, cancel
            </button>
            <button
              onClick={() => {
                Yes(id);
              }}
              className="py-2 px-3 text-sm font-medium text-center text-white bg-red-600 rounded-lg hover:bg-red-700 focus:ring-4 focus:outline-none focus:ring-red-300 "
            >
              Yes, I'm sure
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DeleteConfirmation;
