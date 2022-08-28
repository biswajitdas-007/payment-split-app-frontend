import React, { useEffect } from "react";
import FormComponent from "../Components/Login/FormComponent";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const handleSubmit = () => {
    navigate("/dashboard");
  };
  useEffect(() => {
    if (localStorage.getItem("user-id")) {
      window.location = "/dashboard";
    }
  }, []);
  return (
    <>
      <FormComponent handleSubmit={handleSubmit} />
    </>
  );
};

export default Login;
