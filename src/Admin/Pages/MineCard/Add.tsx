import { yupResolver } from "@hookform/resolvers/yup";
import { useFieldArray, useForm } from "react-hook-form";
import { object, mixed, string, array } from "yup";
import { InputBlock } from "../../componet/InputBlock";
import { MdDelete } from "react-icons/md";
import ErrorMessage from "../../componet/ErrorMessage";
import axios from "axios";
import SelectBox from "../../componet/SelectBox";
import { toast } from "react-toastify";
import { useState } from "react";
import Loader from "../../../components/Loader";

const schema = object({
  img: mixed().required("Image is Required"),
  title: string().required("Title is Required"),
  desc: string().required("Desc is Required"),
  category: string().required("Select One Categoty"),
  lvl: array()
    .required("Level is Required")
    .min(1, "Minimum 1 Level is Required")
    .max(30),
  condition: object(),
});

const Add = () => {
  const [loading, setLoading] = useState(false);
  const {
    register,
    handleSubmit,
    setValue,
    watch,
    formState: { errors, isLoading },
    control,
  } = useForm({
    resolver: yupResolver(schema),
  });

  const Cardlvl = useFieldArray({
    name: "lvl",
    control,
  });
  const Img: any = watch("img");
  const onSubmit = async (data: any) => {
    setLoading(true);
    const formData = new FormData();
    formData.append("lvl", JSON.stringify(data.lvl));
    formData.append("img", data.img[0]);
    formData.append("title", data.title);
    formData.append("desc", data.desc);
    formData.append("category", data.category);
    let res: any = await axios.post(
      `${import.meta.env.VITE_SERVER_HOST}/mine/Add`,
      formData
    );
    setLoading(false);
    if (res.data.success) {
      toast.success("Inserted");
    } else {
      toast.error(res.data.error);
    }
  };

  if (isLoading || loading) return <Loader />;
  return (
    <div>
      <div className="my-2 mt-6 mx-auto shadow-md border border-gray-300 shadow-gray-400 items-center w-[80%] md:w-[50%]  bg-white text-gray-700 text-md md:text-xl rounded-md ">
        <div className="text-black mx-auto bg-gray-300 rounded-xl shadow-sm shadow-gray-300">
          <div className="p-4 pl-4 text-black bg-white rounded-t-xl">
            <h2 className="font-semibold text-[22px]">Add New MineCards</h2>
            <p className="text-[16px] text-gray-600">Provide Cards details.</p>
            <div className="w-full h-0.5 mt- bg-gray-300"></div>
            <div className="mt-2">
              <div className="flex items-center justify-center w-full">
                <label
                  htmlFor="dropzone-file"
                  className="flex flex-col items-center justify-center w-full h-24 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 "
                >
                  <input
                    type="file"
                    {...register("img")}
                    accept=".png,.jpg,.jpeg"
                  />
                </label>
                <ErrorMessage errors={errors.img} />
              </div>

              <div>
                {!!Object(Img).length ? (
                  <div className="h-33 w-44 relative">
                    <img
                      alt="img"
                      loading="lazy"
                      className="h-33 w-44 my-2 rounded-lg"
                      src={`${
                        Object(Img).length ? URL.createObjectURL(Img[0]) : null
                      }`}
                    />
                    <MdDelete
                      onClick={() => setValue("img", "")}
                      className="absolute right-2 bottom-2 text-red-500 hover:text-red-600 cursor-pointer"
                    />
                  </div>
                ) : (
                  <span className="text-red-500 text-sm font-semibold">
                    Select A Image
                  </span>
                )}
              </div>
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
                <SelectBox
                  label="Category"
                  id="category"
                  option={["Markets", "PR Team", "Tech", "Specials"]}
                  register={register("category")}
                  errors={errors.category}
                />
                <div className="flex flex-col gap-2">
                  <div className="flex gap-2">
                    <label
                      htmlFor={"lvl"}
                      className="block mt-2 text-sm font-medium text-gray-900 w-[50%] md:w-[32%]"
                    >
                      Level
                    </label>
                    <label
                      htmlFor={"lvl"}
                      className="block mt-2 text-sm font-medium text-gray-900  w-[50%] md:w-[32%]"
                    >
                      Coin
                    </label>
                  </div>
                  {Cardlvl.fields.map((key: any, i: number) => {
                    return (
                      <div
                        key={key.id}
                        className="flex items-center h-full w-full gap-2 "
                      >
                        <input
                          type="number"
                          {...register(`lvl.${i}.lvl`, { valueAsNumber: true })}
                          id="desc"
                          readOnly
                          className=" bg-gray-50 border text-gray-900 border-1 text-sm rounded-lg  block w-[50%] md:w-[32%] p-2.5"
                        />
                        <input
                          type="text"
                          {...register(`lvl.${i}.coin`, {
                            valueAsNumber: true,
                          })}
                          id="desc"
                          className=" bg-gray-50 border text-gray-900 border-1 text-sm rounded-lg  block  w-[50%] md:w-[32%] p-2.5"
                        />
                        {i != 0 && i == Cardlvl.fields.length - 1 && (
                          <MdDelete
                            onClick={() => Cardlvl.remove(i)}
                            className="text-red-500 hover:text-red-600 text-3xl"
                          />
                        )}
                      </div>
                    );
                  })}
                  <ErrorMessage errors={errors.lvl} />
                  <button
                    onClick={() =>
                      Cardlvl.append({
                        lvl: Cardlvl.fields.length + 1,
                        coin: 0,
                      })
                    }
                    className="text-white w-fit bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
                  >
                    Add
                  </button>
                </div>
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
