import React from "react";
import FormComponent from "../Components/Login/FormComponent";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const handleSubmit = () => {
    window.open(
      "https://payment-split-web-app-backend.herokuapp.com/auth/google",
      "_self"
    );
  };
  return (
    <>
      <FormComponent handleSubmit={handleSubmit} />
    </>
  );
};

export default Login;
