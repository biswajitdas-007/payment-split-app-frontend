import React from "react";
import { Outlet, Navigate } from "react-router-dom";

export const PrivateRoute = (isAuth) =>
  isAuth ? <Outlet /> : <Navigate to="/" />;
