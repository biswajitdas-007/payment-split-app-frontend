import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import styles from "../../assets/css/Login.module.css";
let data = {
  email: "",
  password: "",
};
const FormComponent = ({ handleSubmit }) => {
  const [userDetails, setUserDetails] = useState(data);
  const handleChange = (e) => {
    const { value, name } = e.target;
    setUserDetails({ ...userDetails, [name]: value });
  };
  return (
    <div>
      <Form
        className={styles.formContainer}
        onSubmit={(e) => {
          e.preventDefault();
          handleSubmit(userDetails);
        }}
      >
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter email"
            name="email"
            onChange={(e) => handleChange(e)}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Password"
            name="password"
            onChange={(e) => handleChange(e)}
          />
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </div>
  );
};

export default FormComponent;
