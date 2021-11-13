import { useContext } from "react";
import { Mycontext } from "../Page/Context/Authprovider";

const Useauth = () => {
  return useContext(Mycontext);
};

export default Useauth;
