import { Avatar, Button, CardMedia, Container, TextField, Typography } from "@mui/material";
import { Box } from "@mui/system";
import axios from "axios";
import React, { useRef } from "react";
import { useHistory } from "react-router";
import LockOutlined from "@mui/icons-material/LockOutlined";

const Login = (props) => {
  const emailRef = useRef();
  const passwordRef = useRef();
  const history = useHistory();

  const loginRequest = () => {
    axios.post("https://onlyfit-backend-staging.herokuapp.com/v1/auth", {
      email: emailRef.current.value,
      password: passwordRef.current.value
    }).then((res) => {
      localStorage.setItem("accessToken", res.data.accessToken)
      history.push("/dashboard")
    }).catch(error => {
      alert(error)
    });
  };

  const createAccountRequest = () => {
    history.push("/signup")
  }

  return (
    <div>
      <Container component="main" maxWidth="xs">
        <CardMedia component="img" image="/static/images/logo_onlyfit.png" />
        <Box sx={{ marginTop: -6, display: "flex", flexDirection: "column", alignItems: "center" }}>
          <Avatar sx={{ m: 1, bgcolor: "primary.main" }}>
            <LockOutlined />
          </Avatar>
          <Typography component="h1" variant="h5">Log in</Typography>
          <Box component="form" sx={{ mt: 1 }}>
            <TextField margin="normal" required fullWidth label="Email" name="email" type="email" autoComplete="email" inputRef={emailRef} />
            <TextField margin="normal" required fullWidth label="Password" name="password" type="password" autoComplete="current-password" inputRef={passwordRef} />
            <Button fullWidth variant="contained" sx={{ mt: 3, mb: 3 }} onClick={loginRequest}>Log in</Button>
            <Button fullWidth variant="outlined" sx={{ mt: -1, mb: 3 }}>Crear Cuenta</Button>
          </Box>
        </Box>
      </Container>
    </div>
  );
};

export default Login;
