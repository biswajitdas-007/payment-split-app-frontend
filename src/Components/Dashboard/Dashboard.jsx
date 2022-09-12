import React, { useState } from "react";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { useNavigate } from "react-router-dom";

import styles from "./Dashboard.module.css";
import profile_image from "../../assets/images/profile_image.jpeg";
import Navbar from "../NavBar/Navbar";
import AddExpenditure from "../../pages/AddExpenditure";

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

function Dashboard(props) {
  const { window } = props;
  const navigate = useNavigate();
  const [addExpenditureModal, setAddExpenditureModal] = useState(false);
  const handleNavbarClick = (item) => {
    if (item === "Add Expenditure") {
      setAddExpenditureModal(true);
    } else {
      setAddExpenditureModal(false);
    }
    if (item === "Details") {
      navigate("/details");
    } else if (item === "Home") {
      navigate("/dashboard");
    }
  };
  const handleClick = () => {
    setAddExpenditureModal(false);
  };
  return (
    <>
      <Navbar handleNavbarClick={handleNavbarClick} />
      <div className={styles.bodyContainer}>
        <div className={styles.containers}>
          <img
            src={profile_image}
            alt="profile_image"
            className={styles.profile_image}
          />
        </div>
        <div className={styles.containers}>
          <h2>Biswajit Das</h2>
          <p>
            Email:{" "}
            <span>
              <b>biswajitdas7894@gmail.com</b>
            </span>
          </p>
          <p>
            Phone:{" "}
            <span>
              <b>+918249267182</b>
            </span>
          </p>
          <p>
            Amount you received:{" "}
            <span>
              <b> &#8377; 5000 </b>
            </span>
          </p>
          <p>
            Total amount to be paid:{" "}
            <span>
              <b> &#8377; 10000 </b>
            </span>
          </p>
        </div>
      </div>
      {addExpenditureModal && (
        <AddExpenditure
          addExpenditureModal={addExpenditureModal}
          handleClick={handleClick}
        />
      )}
    </>
  );
}

export default Dashboard;
