import React, { useState } from "react";
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
import MenuIcon from "@mui/icons-material/Menu";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";

import styles from "./Dashboard.module.css";
import profile_image from "../../assets/images/profile_image.jpeg";

const navItems = ["Home", "Add Expenditure", "Contact"];

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
  const [mobileOpen, setMobileOpen] = useState(false);
  const [addExpenditureModal, setAddExpenditureModal] = useState(false);
  const [state, setState] = useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });
  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };
  const list = (anchor) => (
    <Box
      sx={{ width: anchor === "top" || anchor === "bottom" ? "auto" : 250 }}
      role="presentation"
      // onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        {["Home", "Add Expenditure", "Contact"].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              <ListItemIcon>
                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );
  const handleNavbarClick = (item) => {
    if (item === "Add Expenditure") {
      setAddExpenditureModal(true);
    } else {
      setAddExpenditureModal(false);
    }
  };
  const navigate = useNavigate();
  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const handleClick = () => {
    setAddExpenditureModal(false);
  };
  return (
    <>
      <ThemeProvider theme={theme}>
        <Box sx={{ flexGrow: 1 }}>
          <AppBar position="static">
            <Toolbar>
              <div className={styles.hamburger}>
                <IconButton
                  size="large"
                  edge="start"
                  color="inherit"
                  aria-label="open drawer"
                  sx={{ mr: 2 }}
                  onClick={toggleDrawer("left", true)}
                >
                  <MenuIcon />
                </IconButton>
              </div>
              <Typography
                variant="h6"
                noWrap
                component="div"
                sx={{ flexGrow: 1, display: { xs: "none", sm: "block" } }}
              >
                Biswajit Das
              </Typography>
              <Box sx={{ display: { xs: "none", sm: "block" } }}>
                {navItems.map((item) => (
                  <Button key={item} onClick={() => handleNavbarClick(item)}>
                    {item}
                  </Button>
                ))}
              </Box>
            </Toolbar>
          </AppBar>
          <Box>
            <Drawer
              anchor="left"
              open={state["left"]}
              onClose={toggleDrawer("left", false)}
            >
              {list("left")}
            </Drawer>
          </Box>
        </Box>
      </ThemeProvider>
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
    </>
  );
}

export default Dashboard;
