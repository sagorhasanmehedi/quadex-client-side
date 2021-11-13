import { useEffect, useState } from "react";
import {
  GoogleAuthProvider,
  getAuth,
  signInWithPopup,
  onAuthStateChanged,
  signOut,
  createUserWithEmailAndPassword,
  updateProfile,
  signInWithEmailAndPassword,
  getIdToken,
} from "firebase/auth";
import initializefirebase from "../Firebase/Init.firebase";
import axios from "axios";
import { useHistory } from "react-router";

initializefirebase();
const Usefirebase = () => {
  const [user, setuser] = useState({});
  const [isadmin, setisadmin] = useState(false);

  const auth = getAuth();

  //   google log in
  const googlelogin = (history, redirect_URL) => {
    const googleprovider = new GoogleAuthProvider();
    signInWithPopup(auth, googleprovider)
      .then((result) => {
        saveuserinfo(result.user.displayName, result.user.email, "PUT");
        localStorage.setItem("email", result.user.email);
        history.push(redirect_URL);
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  // create password based account
  const createaccount = (name, email, password, history, redirect_URL) => {
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        localStorage.setItem("email", userCredential.user.email);
        updateProfile(auth.currentUser, {
          displayName: name,
        })
          .then(() => {
            saveuserinfo(name, email, "POST");
            console.log("user create with displayName");
            history.push(redirect_URL);
          })
          .catch((error) => {
            console.log(error.message);
          });
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  // log in with password
  const passwordlogin = (email, password, history, redirect_URL) => {
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        localStorage.setItem("email", userCredential.user.email);
        console.log("log in with password");
        history.push(redirect_URL);
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  // on user state change
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setuser(user);
        getIdToken(user).then((idToken) =>
          localStorage.setItem("token", idToken)
        );
      } else {
        setuser({});
      }
    });
  }, []);

  //   log out
  const logout = (history) => {
    signOut(auth)
      .then(() => {
        localStorage.removeItem("email");
        history.push("/home");
        // Sign-out successful.
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  // post user info to database
  const saveuserinfo = (name, email, method) => {
    const data = { name, email };
    fetch("https://desolate-shelf-75033.herokuapp.com/user", {
      method: method,
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((data) => console.log(data))
      .catch((error) => console.log(error));
  };

  // chaking admin
  useEffect(() => {
    if (user.email) {
      axios
        .get(
          `https://desolate-shelf-75033.herokuapp.com/admin?email=${user.email}`
        )
        .then((data) => setisadmin(data.data));
    }
  }, [user.email]);

  console.log(user);

  return {
    user,
    logout,
    googlelogin,
    createaccount,
    passwordlogin,
    isadmin,
  };
};

export default Usefirebase;
