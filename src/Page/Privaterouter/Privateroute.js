import { CircularProgress } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import { Redirect, Route } from "react-router";
import Useauth from "../../Hook/Useauth";

const Privateroute = ({ children, ...rest }) => {
  const email = localStorage.getItem("email");

  return (
    <Route
      {...rest}
      render={({ location }) =>
        email ? (
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

export default Privateroute;
