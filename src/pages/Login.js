import React from "react";
import FormComponent from "../Components/Login/FormComponent";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const handleSubmit = (userDetails) => {
    console.log("FOrm: ", userDetails);
    fetch("http://localhost:4000/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(userDetails),
    })
      .then((res) => res.json())
      .then((res) => navigate("/dashboard"))
      .catch((err) => console.log("error: ", err));
  };
  return (
    <>
      <FormComponent handleSubmit={handleSubmit} />
    </>
  );
};

export default Login;
