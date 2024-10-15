import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import ToastShow from "../componet/ToastContainer";
import Context from "../context/Context";
import { useForm } from "react-hook-form";
import { AdminLogin } from "./api/api";
import { toast } from "react-toastify";
import { InputBlock } from "./Pages/Product/Update";
import Loader from "../componet/Loader/Loader";

function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm();
  const { setUserType } = useContext(Context);
  const navigate = useNavigate();

  const Login = handleSubmit(async (value) => {
    let res = await AdminLogin(value.userName);
    if (res.success) {
      toast.success("Login");
      setUserType("Admin");
      setTimeout(() => {
        navigate("/Admin");
      }, 800);
    } else {
      toast.error(res.message);
    }
  });

  if (isSubmitting) return <Loader />;
  return (
    <div>
      <title>Login</title>
      <ToastShow />
      <div className="font-[sans-serif] text-[#333] bg-white flex items-center justify-center md:h-screen p-4 -mt-10">
        <div className="max-w-6xl rounded-md p-6">
          <div className="grid md:grid-cols-2 items-center gap-8">
            <div className="max-md:order-1">
              <img
                loading="lazy"
                src="https://readymadeui.com/signin-image.webp"
                className="lg:w-11/12 w-full object-cover"
                alt="login-image"
              />
            </div>
            <form className="max-w-md w-full mx-auto">
              <div className="mb-12">
                <h3 className="text-4xl font-extrabold text-blue-600">Login</h3>
              </div>
              <div>
                <InputBlock
                  register={register("userName")}
                  id={"userName"}
                  lable="Enter the UserName"
                  readOnly={false}
                  errors={errors.userName}
                />
              </div>

              <div className="mt-12">
                <button
                  onClick={Login}
                  type="submit"
                  className="w-full shadow-xl py-2.5 px-4 text-sm font-semibold rounded-full text-white bg-blue-600 hover:bg-blue-700 focus:outline-none"
                >
                  Login
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
