import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import Textbox from "../components/Textbox";
const Login = () => {
  const user = "";
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const navigate = useNavigate();

  const submitHandler = async (data) => {
    console.log("Submit");
  };

  useEffect(() => {
    user && navigate("/dashboard");
  }, [user]);
  return (
    <div className="w-full min-h-screen flex items-center justify-center flex-col lg:flex-row bg-[#f3f4f6]">
      <div className="w-full md:w-auto flex gap-0 md:gap-40 flex-col md:flex-row items-center justify-center">
        {/* left side */}
        <div className="h-full w-full lg:w-2/3 flex flex-col items-center justify-center">
          <div className="w-full md:max-w-lg 2xl:max-w-3xl flex flex-col items-center justify-center gap-5 md:gap-y-10 2xl:-mt-20">
            <span className="flex gap-1 py-1 px-3 border rounded-full text-sm md:text-base bordergray-300 text-gray-600">
              Efficiently Manage your Workload!
            </span>
            <p className="flex flex-col gap-0 md:gap-4 text-4xl md:text-6xl 2xl:text-7xl font-black text-center text-blue-700">
              <span>Stay-organized</span>
              <span>Anywhere</span>
            </p>

            <div className="cell">
              <div className="circle rotate-in-up-left"></div>
            </div>
          </div>
        </div>

        {/* right side */}
        <div>
          <form onSubmit={handleSubmit(submitHandler)} className="">
            <div>
              <p>Welcome back!</p>
              <p>Keep all your credentials safe!</p>
            </div>
            <div>
              <Textbox
                className="w-full rounded-full"
                placeholder="email@example.com"
                type="email"
                name="email"
                label="Email Address"
                register={register("email", {
                  required: "Email Address is required",
                })}
                error={errors.email ? errors.email.message : ""}
              />
              <Textbox
                className="w-full rounded-full"
                placeholder="your password"
                type="password"
                name="password"
                label="Password"
                register={register("password", {
                  required: "Password is required",
                })}
                error={errors.password ? errors.password.message : ""}
              />
              <Textbox />
              <span>Forgot password?</span>
              {/* <Button type="submit" label="submit" /> */}
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
