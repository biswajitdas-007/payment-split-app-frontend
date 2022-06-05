import React from "react";
import { Routes as AllRoutes, Route, BrowserRouter } from "react-router-dom";
import AddExpenditure from "../pages/AddExpenditure";
import Homepage from "../pages/Homepage";
import Login from "../pages/Login";
import Expenditure from "../pages/Expenditure";
import { PrivateRoute } from "./PrivateRoute";
const Routes = () => {
  return (
    <BrowserRouter>
      <AllRoutes>
        <Route exact element={<PrivateRoute />}>
          <Route exact path="/dashboard" element={<Homepage />} />
          <Route exact path="/AddExpenditure" element={<AddExpenditure />} />
          <Route exact path="/Expenditures" element={<Expenditure />} />
        </Route>
        <Route
          exact
          path={localStorage.getItem("user-id") ? "/dashboard" : "/"}
          element={<Login />}
        />
      </AllRoutes>
    </BrowserRouter>
  );
};

export default Routes;
