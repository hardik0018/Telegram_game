import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { object, string } from "yup";
import { InputBlock } from "../../componet/InputBlock";
import axios from "axios";
import { toast } from "react-toastify";

const schema = object({
  title: string().required("Title is Required"),
  desc: string().required("Desc is Required"),
  code: string().required("Code is Required"),
});

const Add = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = async (data: any) => {
    let res: any = await axios.post(
      `${import.meta.env.VITE_SERVER_HOST}/Youtube/Add`,
      data
    );

    if (res.data.success) {
      toast.success("Inserted");
    } else {
      toast.error(res.data.error);
    }
  };
  return (
    <div>
      <div className="my-2 mt-6 mx-auto shadow-md border border-gray-300 shadow-gray-400 items-center w-[80%] md:w-[50%]  bg-white text-gray-700 text-md md:text-xl rounded-md ">
        <div className="text-black mx-auto bg-gray-300 rounded-xl shadow-sm shadow-gray-300">
          <div className="p-4 pl-4 text-black bg-white rounded-t-xl">
            <h2 className="font-semibold text-[22px]">Add New Youtube Video</h2>
            <p className="text-[16px] text-gray-600">
              Provide category details.
            </p>
            <div className="w-full h-0.5 mt- bg-gray-300"></div>
            <div className="mt-2">
              <div className="mt-7 flex flex-col gap-y-3">
                <InputBlock
                  lable="Title"
                  register={register("title")}
                  id="title"
                  errors={errors.title}
                />
                <InputBlock
                  lable="Desctipation"
                  register={register("desc")}
                  id="desc"
                  errors={errors.desc}
                />
                <InputBlock
                  lable="Code"
                  register={register("code")}
                  id="code"
                  errors={errors.code}
                />
              </div>
            </div>
          </div>
          <div className="flex items-center justify-end mt-2">
            <button
              onClick={handleSubmit(onSubmit)}
              className="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
            >
              Save
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Add;