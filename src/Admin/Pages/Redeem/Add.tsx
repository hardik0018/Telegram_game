import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { number, object, string } from "yup";
import { InputBlock } from "../../componet/InputBlock";
import axios from "axios";
import { toast } from "react-toastify";
import { useState } from "react";
import Loader from "../../../components/Loader";
import SelectBox from "../../componet/SelectBox";

const schema = object({
  coin: number().required("Coin is Required"),
  rupees: number().required("Rupees is Required"),
  qty: number().required("qty is Required"),
  condition: object().nullable(),
  cndReason: string().nullable(),
  cndValue: number().nullable(),
});

const Add = () => {
  const [loading, setLoading] = useState(false);
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = async (data: any) => {
    setLoading(true);
    if (data.cndReason && data.cndValue) {
      data.condition = { reason: data.cndReason, value: data.cndValue };
    }
    let res: any = await axios.post(
      `${import.meta.env.VITE_SERVER_HOST}/Redeem/Add`,
      data
    );
    setLoading(false);

    if (res.data.success) {
      toast.success("Inserted");
    } else {
      toast.error(res.data.error);
    }
  };

  if (loading) return <Loader />;
  return (
    <div>
      <div className="my-2 mt-6 mx-auto shadow-md border border-gray-300 shadow-gray-400 items-center w-[80%] md:w-[50%]  bg-white text-gray-700 text-md md:text-xl rounded-md ">
        <div className="text-black mx-auto bg-gray-300 rounded-xl shadow-sm shadow-gray-300">
          <div className="p-4 pl-4 text-black bg-white rounded-t-xl">
            <h2 className="font-semibold text-[22px]">Add New Youtube Video</h2>
            <p className="text-[16px] text-gray-600">Provide Video details.</p>
            <div className="w-full h-0.5 mt- bg-gray-300"></div>
            <div className="mt-2">
              <div className="mt-7 flex flex-col gap-y-3">
                <InputBlock
                  lable="Coin"
                  register={register("coin", { valueAsNumber: true })}
                  id="coin"
                  errors={errors.coin}
                />
                <InputBlock
                  lable="Rupees"
                  register={register("rupees", { valueAsNumber: true })}
                  id="rupees"
                  errors={errors.rupees}
                />
                <InputBlock
                  lable="Qty"
                  register={register("qty", { valueAsNumber: true })}
                  id="qty"
                  errors={errors.qty}
                />
                <SelectBox
                  label={"Condition Reason"}
                  id={"condition"}
                  option={["Invite A Friend", "Level", "PPH"]}
                  register={register("cndReason")}
                  errors={errors.cndReason}
                />
                {watch("cndReason") && (
                  <InputBlock
                    lable={`Condition Value in Number (${watch("cndReason")})`}
                    register={register("cndValue", { valueAsNumber: true })}
                    id="cndValue"
                    errors={errors.cndValue}
                  />
                )}
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
