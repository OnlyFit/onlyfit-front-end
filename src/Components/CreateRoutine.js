import {
  NativeSelect,
  InputLabel,
  FormControl,
  FormLabel,
  Avatar,
  Button,
  CardMedia,
  Container,
  TextField,
  Typography,
  RadioGroup,
  Radio,
  FormControlLabel,
  Select,
  MenuItem
  
} from "@mui/material";
import { Box } from "@mui/system";
import axios from "axios";
import React, { useRef } from "react";

const CreateRoutine = (props) => {
  const nameRef = useRef();
  const descriptionRef = useRef();
  const purposeRef = useRef();
  const emailCoachRef = useRef();
  const paymentRef = useRef();

  var tokenPrint = <p></p>;
  
  const CreateRoutine = () => {
    axios
      .post("https://onlyfit-backend-staging.herokuapp.com/v1/routine", {
        name: nameRef.current.value,
        description: descriptionRef.current.value,
        purpose: purposeRef.current.value,
        emailCoach: emailCoachRef.current.value,
        payment: paymentRef.current.value,
      })
      .then((response) => {
        alert("Success!!");
        console.log(response);
        tokenPrint = <p>${response.data}</p>;
      })
      .catch((error) => {
        console.log(
          nameRef.current.value,
          descriptionRef.current.value,
          purposeRef.current.value,
          emailCoachRef.current.value,
          paymentRef.current.value
        );
        alert(error);
        tokenPrint = <p>${error}</p>;
      });
  };
  return (
    <Container component="main" maxWidth="xs">
      <CardMedia component="img" image="/static/images/logo_onlyfit.png" />
      <Box
        sx={{
          marginTop: -6,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Avatar sx={{ m: 1, bgcolor: "primary.main" }}></Avatar>
        <Typography component="h1" variant="h5">
          Create Routine
        </Typography>
        <Box component="form" sx={{ mt: 1 }}>
        <TextField
            margin="normal"
            required
            fullWidth
            label="name"
            name="name"
            type="name"
            autoComplete="name"
            inputRef={nameRef}
          />

          <TextField
            margin="normal"
            required
            fullWidth
            label="Description"
            name="description"
            type="description"
            autoComplete="description"
            inputRef={descriptionRef}
          />
          <TextField
            margin="normal"
            required
            fullWidth
            label="purpose"
            name="purpose"
            type="purpose"
            autoComplete="purpose"
            inputRef={purposeRef}
          />
          <TextField
            margin="normal"
            required
            fullWidth
            label="EmailCoach"
            name="emailCoach"
            type="email"
            autoComplete="email"
            inputRef={emailCoachRef}
          />
          <FormControl component="fieldset">
            <FormLabel component="legend">is it paid?</FormLabel>
            <RadioGroup aria-label="gender" name="radio-buttons-group">
              <FormControlLabel
                value="false"
                inputRef={paymentRef}
                control={<Radio />}
                label="No"
              />
              <FormControlLabel
                value="true"
                inputRef={paymentRef}
                control={<Radio />}
                label="Si"
              />
            </RadioGroup>
          </FormControl>
          <Button
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 3 }}
            onClick={CreateRoutine}
          >
            Create Routine
          </Button>
        </Box>
      </Box>
    </Container>
  );
  console.log(paymentRef);
};

export default CreateRoutine;
