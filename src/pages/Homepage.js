import React, { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import { Table } from "react-bootstrap";
import Dashboard from "../Components/Dashboard/Dashboard";
import { useSearchParams } from "react-router-dom";
import { getListSubheaderUtilityClass } from "@mui/material";

const drawerWidth = 240;

const Homepage = () => {
  const [users, setUsers] = useState("");
  const queryParams = new URLSearchParams(window.location.search);
  const ID = queryParams.get("id");
  const getUsers = () => {
    console.log("Random");
    fetch("https://payment-split-web-app-backend.herokuapp.com/get-users", {
      method: "GET",
      headers: { "Content-Type": "application/json" },
    })
      .then((res) => res.json())
      .then((res) => setUsers(res))
      .catch((err) => console.log("error: ", err));
  };
  useEffect(() => {
    getUsers();
    if (ID) {
      localStorage.setItem("user-id", ID);
      window.location = "/dashboard";
    }
  }, []);
  return (
    <Box>
      <Dashboard />
      {/* <Box
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
              <th>Email</th>
              <th>Image</th>
            </tr>
          </thead>
          <tbody>
            {users &&
              users.map((user, index) => {
                return (
                  <tr key={index}>
                    <td>{index + 1}</td>
                    <td>{user.name}</td>
                    <td>{user.email}</td>
                    <td>
                      <img src={user.img} alt="user" />
                    </td>
                  </tr>
                );
              })}
          </tbody>
        </Table>
      </Box> */}
    </Box>
  );
};

export default Homepage;
