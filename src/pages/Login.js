import React from "react";
import FormComponent from "../Components/Login/FormComponent";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const handleSubmit = () => {
    fetch("/auth/google", {
      method: "GET",
      headers: { "Content-Type": "application/json" },
    })
      .then((res) => res.json())
      .then((res) => {
        localStorage.setItem("user-details", JSON.stringify(res));
        navigate("/dashboard");
      })
      .catch((err) => console.log("error: ", err));
  };
  return (
    <>
      <FormComponent handleSubmit={handleSubmit} />
    </>
  );
};

export default Login;
