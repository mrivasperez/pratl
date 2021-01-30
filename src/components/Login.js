import { Button } from "@material-ui/core";
import React from "react";
import { auth, provider } from "../firebase";

import "./style/Login.css";

function Login() {
  const signIn = () => {
    auth
      .signInWithPopup(provider)
      .then((result) => console.log(result))
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
