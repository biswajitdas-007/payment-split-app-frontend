import logo from "./logo.svg";
import "./App.css";
import Routes from "./Routes/Routes";
import { useEffect, useState } from "react";

function App() {
  const [user, setUser] = useState("");
  // const checkAuth = () => {
  //   fetch("https://payment-split-web-app-backend.herokuapp.com/login/success", {
  //     method: "GET",
  //     // credentials: "include",
  //     headers: {
  //       Accept: "application/json",
  //       "Content-Type": "application/json",
  //       // "Access-Control-Allow-Credentials": true,
  //     },
  //   })
  //     .then((response) => {
  //       if (response.status === 200) return response.json();
  //       throw new Error("authentication has been failed!");
  //     })
  //     .then((resObject) => {
  //       console.log("Object: ", resObject);
  //       setUser(resObject.user);
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     });
  // };
  // useEffect(() => {
  //   checkAuth();
  // }, []);
  return (
    <>
      <Routes />
    </>
  );
}

export default App;
