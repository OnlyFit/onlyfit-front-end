import axios from "axios";
import React, { useRef, useState } from "react";
import { useHistory } from "react-router";

const Login = (props) => {
  const emailRef = useRef();
  const passwordRef = useRef();

  const history = useHistory();

  const loginRequest = () => {
    axios.post("http://localhost:8080/v1/auth", {
        email: emailRef.current.value,
        password: passwordRef.current.value
    }).then(response => {
        console.log(response)
        history.push("/dashboard")
    }).catch(error => {
        alert(error)
    });
  };

  return (
    <div>
      <h1>Login!!</h1>
      <div>
        <label>email</label>
        <input ref={emailRef} />
        <label>password</label>
        <input type="password" ref={passwordRef} />
        <button onClick={loginRequest}>Login</button>
      </div>
    </div>
  );
};

export default Login;
