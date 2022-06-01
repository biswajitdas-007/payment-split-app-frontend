import { createContext, useState } from "react";

const UserContext = createContext();

const UserContextProvider = ({ children }) => {
  const [userDetails, setUserDetails] = useState("");

  const toggleUser = (data, temp) => {
    console.log("temp: ", temp);
    setUserDetails(data);
  };
  const value = {
    userDetails,
    toggleUser,
  };
  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};

export { UserContext, UserContextProvider };
