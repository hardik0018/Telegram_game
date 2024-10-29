import ErrorMessage from "./ErrorMessage";

export const InputBlock = ({
  lable,
  id,
  register,
  type,
  readOnly,
  errors,
}: any) => {
  return (
    <div className="">
      <label
        htmlFor={id}
        className="block mb-2 text-sm font-medium text-gray-300 "
      >
        {lable}
      </label>
      <input
        {...register}
        type={type ? type : "text"}
        id={id}
        name={id}
        className={`bg-gray-50 border text-gray-900 border-1 text-sm rounded-lg  block w-full p-2.5 `}
        placeholder={lable}
        readOnly={readOnly}
      />
      <ErrorMessage errors={errors} />
    </div>
  );
};
