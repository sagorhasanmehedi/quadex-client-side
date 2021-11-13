import React from "react";
import PropTypes from "prop-types";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import MailIcon from "@mui/icons-material/Mail";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Manageallorder from "../Manageallorder/Manageallorder";
import Makeadmin from "../Makeadmin/Makeadmin";
import Manageproducts from "../Manageproducts/Manageproducts";
import Addproduct from "../Addproduct/Addproduct";
import "./Dashbord.css";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  useHistory,
  useRouteMatch,
  NavLink,
} from "react-router-dom";
import MyOrder from "../Myorder/MyOrder";
import Review from "../Review/Review";
import Pay from "../Pay/Pay";
import Useauth from "../../../Hook/Useauth";
import Adminroute from "../../Privaterouter/Adminroute";
import { Helmet } from "react-helmet";

const drawerWidth = 240;

const Dashbord = (props) => {
  let { path, url } = useRouteMatch();
  const { user, logout, isadmin } = Useauth();

  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  // redirect to login
  const history = useHistory();
  const handellogin = () => {
    history.push("/login");
  };
  const drawer = (
    <div>
      <Toolbar />
      <Divider />

      {isadmin ? (
        <List sx={{ pl: "25px" }}>
          <NavLink
            style={{
              textDecoration: "none",
              color: "#757575",
              display: "flex",
              alignItems: "center",
              marginTop: "40px",
            }}
            to={`${url}`}
          >
            <i style={{ fontSize: "19px" }} class="fas fa-asterisk"></i>
            <p className="dashbord-menu" style={{ marginLeft: "30px" }}>
              MANAGE PRODUCT
            </p>
          </NavLink>
          <br />
          <NavLink
            style={{
              textDecoration: "none",
              color: "#757575",
              display: "flex",
              alignItems: "center",
            }}
            to={`${url}/manageallorder`}
          >
            <i style={{ fontSize: "19px" }} class="fas fa-briefcase"></i>
            <p className="dashbord-menu" style={{ marginLeft: "30px" }}>
              MANAGE ORDER
            </p>
          </NavLink>
          <br />
          <NavLink
            style={{
              textDecoration: "none",
              color: "#757575",
              display: "flex",
              alignItems: "center",
            }}
            to={`${url}/makeadmin`}
          >
            <i style={{ fontSize: "19px" }} class="fas fa-user-shield"></i>
            <p className="dashbord-menu" style={{ marginLeft: "30px" }}>
              MAKE ADMIN
            </p>
          </NavLink>
          <br />
          <NavLink
            style={{
              textDecoration: "none",
              color: "#757575",
              display: "flex",
              alignItems: "center",
            }}
            to={`${url}/addproduct`}
          >
            <i style={{ fontSize: "19px" }} class="fas fa-calendar-check"></i>
            <p className="dashbord-menu" style={{ marginLeft: "30px" }}>
              ADD PRODUCT
            </p>
          </NavLink>
        </List>
      ) : (
        <List sx={{ pl: "25px" }}>
          <NavLink
            style={{
              textDecoration: "none",
              color: "#757575",
              display: "flex",
              alignItems: "center",
              marginTop: "40px",
            }}
            to={`${url}`}
          >
            <i style={{ fontSize: "19px" }} class="fas fa-shopping-cart"></i>
            <p className="dashbord-menu" style={{ marginLeft: "30px" }}>
              MY ORDER
            </p>
          </NavLink>
          <br />
          <NavLink
            style={{
              textDecoration: "none",
              color: "#757575",
              display: "flex",
              alignItems: "center",
            }}
            to={`${url}/review`}
          >
            <i style={{ fontSize: "19px" }} class="fas fa-thumbs-up"></i>
            <p className="dashbord-menu" style={{ marginLeft: "30px" }}>
              REVIEW
            </p>
          </NavLink>
          <br />
          <NavLink
            style={{
              textDecoration: "none",
              color: "#757575",
              display: "flex",
              alignItems: "center",
            }}
            to={`${url}/pay`}
          >
            <i style={{ fontSize: "23px" }} class="fab fa-paypal"></i>
            <p className="dashbord-menu" style={{ marginLeft: "30px" }}>
              PAY
            </p>
          </NavLink>
        </List>
      )}
    </div>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: "flex" }}>
      <Helmet>
        <title>Quadex | DASHBORD</title>
      </Helmet>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
          backgroundColor: "black",
        }}
      >
        <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
          <Box sx={{ display: "flex" }}>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
              sx={{ mr: 2, display: { sm: "none" } }}
            >
              <MenuIcon />
            </IconButton>

            <Typography
              className="dashbord-emailname"
              variant="h6"
              noWrap
              component="div"
            >
              {user.email}
            </Typography>
          </Box>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
            }}
          >
            <NavLink
              style={{
                textDecoration: "none",
                marginRight: "35px",
                color: "white",
              }}
              to="/home"
              className="dashbord-menu-home"
            >
              HOME
            </NavLink>
            {user.email ? (
              <Box>
                <button
                  onClick={() => logout(history)}
                  className="dashbord-button"
                >
                  LOG OUT
                </button>
              </Box>
            ) : (
              <Box>
                <button onClick={handellogin} className="dashbord-button">
                  LOG IN
                </button>
              </Box>
            )}
          </Box>
        </Toolbar>
      </AppBar>
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: "none", sm: "block" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 3,
          width: { sm: `calc(100% - ${drawerWidth}px)` },
        }}
      >
        <Toolbar />

        {isadmin ? (
          <Switch>
            <Adminroute exact path={`${path}`}>
              <Manageproducts />
            </Adminroute>
            <Adminroute path={`${path}/manageallorder`}>
              <Manageallorder />
            </Adminroute>
            <Adminroute path={`${path}/makeadmin`}>
              <Makeadmin />
            </Adminroute>
            <Adminroute path={`${path}/addproduct`}>
              <Addproduct />
            </Adminroute>
          </Switch>
        ) : (
          <Switch>
            <Route exact path={path}>
              <MyOrder />
            </Route>
            <Route path={`${path}/review`}>
              <Review />
            </Route>
            <Route path={`${path}/pay`}>
              <Pay />
            </Route>
          </Switch>
        )}
      </Box>
    </Box>
  );
};

Dashbord.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default Dashbord;
