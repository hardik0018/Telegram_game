import ErrorMessage from "./ErrorMessage";

const SelectBox = ({ label, id, option, register, errors }: any) => {
  return (
    <form>
      <div className="w-full">
        <label
          htmlFor={id}
          className="mb-2.5 block text-sm font-medium text-[#07074D]"
        >
          {label}
        </label>
        <select
          {...register}
          className="w-full rounded-md border border-[#e0e0e0] bg-white py-2 px-2 text-gray-600 font-medium text-sm outline-none focus:border-blue-600 focus:shadow-md"
        >
          <option value={""}>Choose</option>
          {option.map((item: any) => {
            return (
              <option key={item} value={item}>
                {item}
              </option>
            );
          })}
        </select>
        <ErrorMessage errors={errors} />
      </div>
    </form>
  );
};

export default SelectBox;
