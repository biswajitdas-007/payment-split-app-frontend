import React, { useState } from "react";
import { Box, TextField, Button } from "@mui/material";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import styles from "./FormComponent.module.css";

import login_icon from "../../assets/SVGs/undraw_mobile_login_re_9ntv.svg";
import { hover } from "@testing-library/user-event/dist/hover";
let data = {
  email: "",
  password: "",
};

const theme = createTheme({
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          fontSize: "1rem",
          background: "#2B4865",
          color: "whitesmoke",
          "&:hover": {
            background: "black",
          },
        },
      },
    },
  },
});

const FormComponent = ({ handleSubmit }) => {
  const [userDetails, setUserDetails] = useState(data);
  const handleChange = (e) => {
    const { value, name } = e.target;
    setUserDetails({ ...userDetails, [name]: value });
  };
  return (
    <div className={styles.form}>
      <div>
        <img src={login_icon} alt="login-icon" className={styles.loginImage} />
      </div>
      <div>
        <Box component="form" autoComplete="off" className={styles.Box}>
          <div>
            <TextField
              className={styles.TextField}
              label="Email ID"
              helperText="User registered email id."
              margin="dense"
              required="true"
            />
          </div>
          <div>
            <TextField
              className={styles.TextField}
              label="Password"
              id="outlined-size-normal"
              helperText="User password."
              required="true"
            />
          </div>
          <div className={styles.submitBtn}>
            <ThemeProvider theme={theme}>
              <Button className={styles.btn} onClick={handleSubmit}>
                Login
              </Button>
            </ThemeProvider>
          </div>
        </Box>
      </div>
    </div>
  );
};

export default FormComponent;
