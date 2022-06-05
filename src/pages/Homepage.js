import React, { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import { Table } from "react-bootstrap";
import Dashboard from "../Components/Dashboard/Dashboard";
import { useLocation, useSearchParams } from "react-router-dom";
import { getListSubheaderUtilityClass } from "@mui/material";

const drawerWidth = 240;

const Homepage = () => {
  const [users, setUsers] = useState("");
  // const ID = useLocation().id;
  const [searchParams, setSearchParams] = useSearchParams("");

  if (useSearchParams.get("id")) {
    localStorage.setItem("user-id", useSearchParams.get("id"));
  } else {
    searchParams.delete("id");
    setSearchParams(searchParams);
  }
  const getUsers = () => {
    fetch("https://payment-split-web-app.herokuapp.com/user", {
      method: "GET",
      headers: { "Content-Type": "application/json" },
    })
      .then((res) => res.json())
      .then((res) => setUsers(res))
      .catch((err) => console.log("error: ", err));
  };
  useEffect(() => {
    getUsers();
  }, []);
  return (
    <Box sx={{ display: "flex" }}>
      <Dashboard />
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 3,
          width: { sm: `calc(100% - ${drawerWidth}px)` },
        }}
        maxWidth="sm"
      >
        <Toolbar />
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>Total Due</th>
            </tr>
          </thead>
          <tbody>
            {users &&
              users.map((user, index) => {
                return (
                  <tr key={index}>
                    <td>{index + 1}</td>
                    <td>{user.firstName}</td>
                    <td>{user.totalDue}</td>
                  </tr>
                );
              })}
          </tbody>
        </Table>
      </Box>
    </Box>
  );
};

export default Homepage;
