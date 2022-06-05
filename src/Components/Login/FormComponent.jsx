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
      <Button variant="primary" type="submit" onClick={handleSubmit}>
        Login
      </Button>
    </div>
  );
};

export default FormComponent;
