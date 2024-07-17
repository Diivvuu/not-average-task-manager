import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
const Login = () => {
  const user = "";
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const navigate = useNavigate();
  useEffect(() => {
    user && navigate("/dashboard");
  }, [user]);
  return (
    <div className="w-full min-h-screen flec items-center justify-center flex-col lg:flex-row">
      login
    </div>
  );
};

export default Login;
