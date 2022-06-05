import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import Toolbar from "@mui/material/Toolbar";
import Box from "@mui/material/Box";
import styles from "../assets/css/Login.module.css";
import Dashboard from "../Components/Dashboard/Dashboard";
import { useNavigate } from "react-router-dom";
let data = {
  name: "",
  type: "",
  price: "",
};
const drawerWidth = 240;
const AddExpenditure = () => {
  const navigate = useNavigate();
  const [expensesDetails, setExpensesDetails] = useState(data);
  const handleChange = (e) => {
    const { value, name } = e.target;
    setExpensesDetails({ ...expensesDetails, [name]: value });
  };
  const handleSubmit = (expenses) => {
    const data = {};
    fetch("https://payment-split-web-app.herokuapp.com/create-expenditure", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(expensesDetails),
    })
      .then((res) => res.json())
      .then((res) => {
        navigate("/Expenditures");
      })
      .catch((err) => console.log("Error: ", err));
  };
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
        <Form
          className={styles.formContainer}
          onSubmit={(e) => {
            e.preventDefault();
            handleSubmit(expensesDetails);
          }}
        >
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter expenditures name"
              name="name"
              required
              onChange={(e) => handleChange(e)}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Type</Form.Label>
            <Form.Control
              type="text"
              placeholder="type"
              name="type"
              onChange={(e) => handleChange(e)}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Price</Form.Label>
            <Form.Control
              type="number"
              placeholder="Price"
              name="price"
              required
              onChange={(e) => handleChange(e)}
            />
          </Form.Group>
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </Box>
    </Box>
  );
};

export default AddExpenditure;
