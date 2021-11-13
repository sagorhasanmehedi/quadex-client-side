import React from "react";
import { Redirect, Route } from "react-router";
import Useauth from "../../Hook/Useauth";

import Backdrop from "@mui/material/Backdrop";
import CircularProgress from "@mui/material/CircularProgress";

const Adminroute = ({ children, ...rest }) => {
  const { isadmin } = Useauth();
  const email = localStorage.getItem("email");
  console.log(isadmin);

  // chaking admin

  const [open, setOpen] = React.useState(true);
  const handleClose = () => {
    setOpen(false);
  };

  if (!isadmin) {
    console.log("inside admin route");
    return (
      <div>
        <Backdrop
          sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
          open={open}
          onClick={handleClose}
        >
          <CircularProgress color="inherit" />
        </Backdrop>
      </div>
    );
  }

  return (
    <Route
      {...rest}
      render={({ location }) =>
        email && isadmin ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: "/login",
              state: { from: location },
            }}
          />
        )
      }
    />
  );
};

export default Adminroute;
