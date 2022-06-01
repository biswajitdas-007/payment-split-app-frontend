// expenditure;

import React, { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import { Table } from "react-bootstrap";
import Dashboard from "../Components/Dashboard/Dashboard";
const drawerWidth = 240;
const Expenditure = () => {
  const [expenditures, setExpenditures] = useState("");
  const getExpenditures = () => {
    fetch("http://localhost:4000/expenditure", {
      method: "GET",
      headers: { "Content-Type": "application/json" },
    })
      .then((res) => res.json())
      .then((res) => {
        console.log("res: ", res);
        setExpenditures(res);
      })
      .catch((err) => console.log("error: ", err));
  };
  useEffect(() => {
    getExpenditures();
  }, []);
  return (
    <>
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
                <th>Type</th>
                <th>Price</th>
              </tr>
            </thead>
            <tbody>
              {expenditures &&
                expenditures.map((item, index) => {
                  return (
                    <tr key={index}>
                      <td>{index + 1}</td>
                      <td>{item.name}</td>
                      <td>{item.type}</td>
                      <td>{item.price}</td>
                    </tr>
                  );
                })}
            </tbody>
          </Table>
        </Box>
      </Box>
      w
    </>
  );
};

export default Expenditure;
