const ErrorMessage = ({ errors }: any) => {
  return errors ? (
    <span className="mt-2 text-sm md:text-md lg:text-md lg:font-semibold text-red-500 ">
      {errors.message}
    </span>
  ) : null;
};

export default ErrorMessage;
