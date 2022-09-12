import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import userData from "../assets/dummy-data/users.json";
import Navbar from "../Components/NavBar/Navbar";
import styles from "../styles/Details.module.css";
import AddExpenditure from "./AddExpenditure";
const Details = () => {
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
      <div>
        {userData.map((user, index) => (
          <div className={styles.container} key={index}>
            <div>
              <h2>{user.name}</h2>
              <h4>{user.email}</h4>
              <h4>Phone: {user.phone}</h4>
              <h4 className={index % 2 == 0 ? styles.due : styles.credit}>
                Amount: {user.amount}
              </h4>
            </div>
          </div>
        ))}
      </div>
      {addExpenditureModal && (
        <AddExpenditure
          addExpenditureModal={addExpenditureModal}
          handleClick={handleClick}
        />
      )}
    </>
  );
};

export default Details;
