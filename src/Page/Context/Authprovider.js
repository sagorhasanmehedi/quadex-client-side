import React, { createContext } from "react";
import Usefirebase from "../../Hook/Usefirebase";

export const Mycontext = createContext();
const Authprovider = ({ children }) => {
  return (
    <Mycontext.Provider value={Usefirebase()}>{children}</Mycontext.Provider>
  );
};

export default Authprovider;
