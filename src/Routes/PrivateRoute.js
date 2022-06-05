import React from "react";
import { Outlet, Navigate } from "react-router-dom";

export const PrivateRoute = (isAuth) =>
  isAuth ? <Outlet /> : <Navigate to="/" />;

export const LoginPrivateRoute = () => {
  localStorage.getItem("user-id") ? (
    <Navigate to="/dashboard" />
  ) : (
    <Navigate to="/" />
  );
};
