import { useForm } from "react-hook-form";
import { InputBlock } from "./componet/InputBlock";
import { CgSpinner } from "react-icons/cg";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

function Login() {
  const [spin, setSpin] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const navigate = useNavigate();
  const onSubmit = async (data: any) => {
    setSpin(true);

    try {
      const response = await axios.post(
        `${import.meta.env.VITE_SERVER_HOST}/Admin/login`,
        {
          username: data.userName,
          password: data.password,
        }
      );
      if (response.data.success) {
        toast.success("Login successful!");
        localStorage.setItem("token", response.data.token);
        navigate("/Admin");
      } else {
        toast.error(response.data.message || "Login failed.");
      }
    } catch (error) {
      console.error("Login error:", error);
      toast.error("An error occurred during login.");
    } finally {
      setSpin(false);
    }
  };

  return (
    <div className="font-[sans-serif] text-gray-200 bg-gray-900 flex items-center justify-center h-screen w-screen px-2">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="w-full md:w-1/2 bg-gray-800 p-10 rounded-lg"
      >
        <div className="mb-12">
          <h3 className="text-4xl text-center md:text-left font-extrabold text-blue-600">
            Login
          </h3>
        </div>
        <div className="space-y-3">
          <InputBlock
            register={register("userName", {
              required: "Username is required",
            })}
            id={"userName"}
            lable="UserName"
            readOnly={false}
            errors={errors.userName}
          />
          <InputBlock
            register={register("password", {
              required: "Password is required",
              minLength: {
                value: 6,
                message: "Password must be at least 6 characters long",
              },
            })}
            id={"password"}
            lable="Password"
            readOnly={false}
            errors={errors.password}
          />
        </div>

        <div className="mt-12">
          <button
            type="submit"
            className="w-full shadow-xl py-2.5 px-4 flex justify-center items-center rounded-md bg-blue-600 hover:bg-blue-700 focus:outline-none"
            disabled={spin}
          >
            {spin ? (
              <CgSpinner className="w-6 h-6 animate-spin mr-1" />
            ) : (
              "Login"
            )}
          </button>
        </div>
      </form>
    </div>
  );
}

export default Login;
