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
import { useHistory } from "react-router";


const CreateRoutine = (props) => {
  const nameRef = useRef();
  const descriptionRef = useRef();
  const purposeRef = useRef();
  const paymentRef = useRef();
  const history = useHistory();

  const [nameRoutine, setNameRoutine] = React.useState('');
  

  const handleChange = (event) => {
    setNameRoutine(event.target.value);
  };

  var tokenPrint = <p></p>;
  
  const CreateRoutine = () => {
    axios
      .post("https://onlyfit-backend-staging.herokuapp.com/v1/routine", {
        name: nameRef.current.value,
        description: descriptionRef.current.value,
        purpose: purposeRef.current.value,
        emailCoach: localStorage.getItem("userMail"),
        payment: paymentRef.current.value,
      })
      .then((response) => {
        alert("Success!!");
        console.log(response);
        tokenPrint = <p>${response.data}</p>;
        history.push("/coach-home");
      })
      .catch((error) => {
        console.log(
          nameRef.current.value,
          descriptionRef.current.value,
          purposeRef.current.value,
          localStorage.getItem("userMail"),
          paymentRef.current.value
        );
        alert(error);
        tokenPrint = <p>${error}</p>;
      });
  };

  const returnCoach = () => {
    history.push("/coach-home");
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
          Crear Rutina
        </Typography>
        <Box component="form" sx={{ mt: 1 }}>
          
        <Box sx={{ minWidth: 120 }}>
          <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">Nombre</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={nameRoutine}
              label="Name"
              onChange={handleChange}
              inputRef={nameRef}
            >
              <MenuItem value={"cardio"}>Cardio</MenuItem>
              <MenuItem value={"pesas"}>Pesas</MenuItem>
              <MenuItem value={"crossfit"}>Crossfit</MenuItem>
              <MenuItem value={"zumba"}>Zumba</MenuItem>
              <MenuItem value={"tenis"}>Tenis</MenuItem>
            </Select>
          </FormControl>
        </Box>

          <TextField
            margin="normal"
            required
            fullWidth
            label="Descripcion"
            name="description"
            type="description"
            autoComplete="description"
            inputRef={descriptionRef}
          />
          <TextField
            margin="normal"
            required
            fullWidth
            label="Proposito"
            name="purpose"
            type="purpose"
            autoComplete="purpose"
            inputRef={purposeRef}
          />
          <FormControl component="fieldset">
            <FormLabel component="legend">Es de pago?</FormLabel>
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
            Crear
          </Button>
          <Button
            fullWidth
            variant="contained"
            sx={{ mt: 0, mb: 3 }}
            onClick={returnCoach}
          >
            Volver
          </Button>
        </Box>
      </Box>
    </Container>
  );
  console.log(paymentRef);
};

export default CreateRoutine;
