import { Button } from "@material-ui/core";
import React from "react";
import { actionTypes } from "../context/reducer";
import { useStateValue } from "../context/StateProvider";
import { auth, provider } from "../firebase";

import "./style/Login.css";

function Login() {
  const [{}, dispatch] = useStateValue();

  const signIn = () => {
    auth
      .signInWithPopup(provider)
      .then((result) => {
        dispatch({
          type: actionTypes.SET_USER,
          user: result.user,
        });
      })
      .catch((error) => alert(error.message));
  };

  return (
    <div className="login">
      <div className="login__container">
        <img
          src="https://img.icons8.com/pastel-glyph/64/000000/chat.gif"
          alt="Pratl Logo"
        />
        <div className="login__text">
          <h1>Sign in to Pratl</h1>
        </div>
        <Button variant="outlined" onClick={signIn}>
          Sign in with Google
        </Button>
      </div>
    </div>
  );
}

export default Login;
