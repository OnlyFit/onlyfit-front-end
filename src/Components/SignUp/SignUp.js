import { Avatar, Button, CardMedia, Container, TextField, Typography } from "@mui/material";
import { Box } from "@mui/system";
import axios from "axios";
import React, { useRef, useState } from "react";
import { useHistory } from "react-router";
import LockOutlined from "@mui/icons-material/LockOutlined";



const SignUp = () => {
    const nameRef = useRef();
    const lastNameRef = useRef();
    const emailRef = useRef();
    const passwordRef = useRef();
    const history = useHistory();
    const [role, setRole] = useState("");

    var tokenPrint = <p></p>

    const handleSignup = () => {
        axios.post("https://onlyfit-backend-staging.herokuapp.com/v1/user", {
            name: nameRef.current.value,
            lastName: lastNameRef.current.value,
            email: emailRef.current.value,
            password: passwordRef.current.value,
            rol: "USER",
            routines: []
        }).then(response => {
            alert("Success!!")
            console.log(response);
            tokenPrint = <p>${response.data}</p>
            history.push("/")
        }).catch(error => {
            console.log(nameRef.current.value, lastNameRef.current.value, emailRef.current.value);
            alert(error);
            tokenPrint = <p>${error}</p>
        });
    }

    return (
        <Container component="main" maxWidth="xs">
            <CardMedia component="img" image="/static/images/logo_onlyfit.png" />
            <Box sx={{ marginTop: -6, display: "flex", flexDirection: "column", alignItems: "center" }}>
                <Avatar sx={{ m: 1, bgcolor: "primary.main" }}>
                </Avatar>
                <Typography component="h1" variant="h5">Log in</Typography>
                <Box component="form" sx={{ mt: 1 }}>
                    <TextField margin="normal" required fullWidth label="Name" name="name" type="name" autoComplete="name" inputRef={nameRef} />
                    <TextField margin="normal" required fullWidth label="LastName" name="lastName" type="lastName" autoComplete="lastName" inputRef={lastNameRef} />
                    <TextField margin="normal" required fullWidth label="Email" name="email" type="email" autoComplete="email" inputRef={emailRef} />
                    <TextField margin="normal" required fullWidth label="Password" name="password" type="password" autoComplete="current-password" inputRef={passwordRef} />
                    <Button fullWidth variant="contained" sx={{ mt: 3, mb: 3 }} onClick={handleSignup}>Create Account</Button>
                </Box>
            </Box>
        </Container>

    );
}

export default SignUp;