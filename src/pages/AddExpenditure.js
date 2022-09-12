import React, { useState } from "react";
import { Form } from "react-bootstrap";
import styles from "../assets/css/Login.module.css";
import Dashboard from "../Components/Dashboard/Dashboard";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { useNavigate } from "react-router-dom";
import {
  Box,
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Modal,
  Button,
  Drawer,
  TextField,
} from "@mui/material";
let data = {
  name: "",
  type: "",
  price: "",
};
const drawerWidth = 240;
const AddExpenditure = ({ addExpenditureModal, handleClick }) => {
  const navigate = useNavigate();
  // const [loading, setLoading] = useState(false);
  // const [expensesDetails, setExpensesDetails] = useState(data);
  // const handleChange = (e) => {
  //   const { value, name } = e.target;
  //   setExpensesDetails({
  //     ...expensesDetails,
  //     [name]: value,
  //     user: localStorage.getItem("user-id"),
  //   });
  // };
  // const handleSubmit = (expenses) => {
  //   // setExpensesDetails({
  //   //   ...expensesDetails,
  //   //   user: localStorage.getItem("user-id"),
  //   // });
  //   setLoading(true);
  //   fetch(
  //     "https://payment-split-web-app-backend.herokuapp.com/create-expenditure",
  //     {
  //       method: "POST",
  //       headers: { "Content-Type": "application/json" },
  //       body: JSON.stringify(expensesDetails),
  //     }
  //   )
  //     .then((res) => res.json())
  //     .then((res) => {
  //       setLoading(false);
  //       navigate("/Expenditures");
  //     })
  //     .catch((err) => console.log("Error: ", err));
  // };
  const theme = createTheme({
    components: {
      MuiButton: {
        styleOverrides: {
          root: {
            color: "whitesmoke",
            "&:hover": {
              background: "black",
            },
          },
        },
      },
      MuiAppBar: {
        styleOverrides: {
          root: {
            background: "#002B5B",
          },
        },
      },
      MuiModal: {
        styleOverrides: {
          root: {
            top: "20%",
            left: "30%",
            // background: "#256D85",
            // position: "absolute",
            // background: "transparent",
            // height: "50vh",
            // width: "50vw",
            // top: "50%",
            // left: "50%",
            // transform: "translate(-50%, -50%)",
            // boxShadow: 24,
            // p: 4,
          },
        },
      },
    },
  });
  return (
    // <Box sx={{ display: "flex" }}>
    //   <Dashboard />
    //   <Box
    //     component="main"
    //     sx={{
    //       flexGrow: 1,
    //       p: 3,
    //       width: { sm: `calc(100% - ${drawerWidth}px)` },
    //     }}
    //     maxWidth="sm"
    //   >
    //     <Toolbar />
    //     <Form
    //       className={styles.formContainer}
    //       onSubmit={(e) => {
    //         e.preventDefault();
    //         handleSubmit(expensesDetails);
    //       }}
    //     >
    //       <Form.Group className="mb-3" controlId="formBasicEmail">
    //         <Form.Label>Name</Form.Label>
    //         <Form.Control
    //           type="text"
    //           placeholder="Enter expenditures name"
    //           name="name"
    //           required
    //           onChange={(e) => handleChange(e)}
    //         />
    //       </Form.Group>

    //       <Form.Group className="mb-3" controlId="formBasicPassword">
    //         <Form.Label>Type</Form.Label>
    //         <Form.Control
    //           type="text"
    //           placeholder="type"
    //           name="type"
    //           onChange={(e) => handleChange(e)}
    //         />
    //       </Form.Group>
    //       <Form.Group className="mb-3" controlId="formBasicPassword">
    //         <Form.Label>Price</Form.Label>
    //         <Form.Control
    //           type="number"
    //           placeholder="Price"
    //           name="price"
    //           required
    //           onChange={(e) => handleChange(e)}
    //         />
    //       </Form.Group>
    //       <Button disabled={loading} variant="primary" type="submit">
    //         Submit
    //       </Button>
    //     </Form>
    //   </Box>
    // </Box>
    <ThemeProvider theme={theme}>
      <Modal open={addExpenditureModal}>
        <Box component="form" autoComplete="off" className={styles.Box}>
          <div>
            <TextField
              className={styles.TextField}
              label="Name of expenditure"
              helperText="Expenditure name"
              margin="dense"
              required="true"
            />
          </div>
          <div>
            <TextField
              className={styles.TextField}
              label="Price"
              type="number"
              id="outlined-size-normal"
              helperText="Expenditure Price"
              required="true"
            />
          </div>
          <div className={styles.submitBtn}>
            {/* <ThemeProvider theme={theme}> */}
            <Button className={styles.btn} onClick={handleClick}>
              Login
            </Button>
            {/* </ThemeProvider> */}
          </div>
        </Box>
      </Modal>
    </ThemeProvider>
  );
};

export default AddExpenditure;
