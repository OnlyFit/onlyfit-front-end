import {
  Stack,
  Grid,
  Alert,
  AlertTitle,
  Card,
  CardMedia,
  CardContent,
  Typography,
  CardActions,
  Button,
  Box,
  AppBar,
} from "@mui/material";
import { maxWidth } from "@mui/system";
import axios from "axios";
import { useEffect, useState } from "react";
import DashboardNavBar from "./DashboardNavBar";
import ReviewCard from "./ReviewCard";
import ReviewCard01 from "./ReviewCard01";

const UserDashboard = () => {
  const [routines, setRoutines] = useState("");

  useEffect(() => {
    function getAllRoutines() {
      axios
        .get("https://onlyfit-backend-staging.herokuapp.com/v1/routine")
        .then((res) => {
          setRoutines(res.data);
        })
        .catch((error) => {
          console.log(error);
        });
    }

    getAllRoutines();
  }, []);

  function handleRegisterRoutine(routine) {
    const userEmail = localStorage.getItem("email");
    axios
      .put(
        `https://onlyfit-backend-staging.herokuapp.com/v1/user/routines?emailAddress=${userEmail}&routine=${routine}`
      )
      .then((response) => {
        alert("Success!!");
      })
      .catch((error) => {
        console.log(error);
      });
  }

  let data = (
    <Grid container spacing={3}>
      <Grid item xs={12} style={{ paddingTop: "5%", marginLeft: "2%" }}>
        <Alert severity="info">
          <AlertTitle>INFORMACION</AlertTitle>
          No hay rutinas asignadas en este pefil —{" "}
          <strong>agrega una rutina o comunicate con servicio tecnico</strong>
        </Alert>
      </Grid>
    </Grid>
  );

  if (routines.length > 0) {
    data = routines.map((ele, index) => {
      var imageName;
      if (ele.name === "cardio") {
        imageName =
          "https://images.unsplash.com/photo-1607962837359-5e7e89f86776?w=248.88&h=140&fit=crop&auto=format";
      } else if (ele.name === "crossfit") {
        imageName =
          "https://images.unsplash.com/photo-1517964603305-11c0f6f66012?w=248.88&h=140&fit=crop&auto=format";
      } else if (ele.name === "pesas") {
        imageName =
          "https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?w=248.88&h=140&fit=crop&auto=format";
      } else if (ele.name === "tenis") {
        imageName =
          "https://www.ecestaticos.com/imagestatic/clipping/0ce/50c/0ce50c2c82d99851bcd9e3b4d4ef0a9d/para-que-es-bueno-practicar-tenis-y-las-posibles-lesiones-que-debes-vigilar.jpg?w=248.88&h=140&fit=crop&auto=format";
      } else if (ele.name === "zumba") {
        imageName =
          "https://static2.abc.es/media/bienestar/2021/01/19/zumba-kUnF--620x349@abc.jpg?w=248.88&h=140&fit=crop&auto=format";
      }

      return (
        <Grid item s={12} style={{ paddingTop: "40px" }}>
          <Card sx={{ maxWidth: 600 }}>
            <CardMedia
              component="img"
              height="140"
              image={imageName}
              alt={ele.id}
            />
            <CardContent>
              <Typography gutterBottom variant="h4" component="div">
                {ele.name}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {ele.description}
              </Typography>
            </CardContent>
            <CardActions>
              <Button
                size="medium"
                onClick={() => handleRegisterRoutine(ele.description)}
              >
                Añadir a Mis Clases
              </Button>
            </CardActions>
          </Card>
        </Grid>
      );
    });
  }

  return (
    <div>
      <DashboardNavBar />
      <Box sx={{ m: 9 }} />
      <Box
        sx={{
          width: "maxWidth",
          height: 95,
          backgroundColor: "primary.main",
        }}
      >
        <Typography align="center" sx={{ fontSize: 70 }} color="common.white">
          Clases Gratis
        </Typography>
      </Box>
      <Box sx={{ m: -4 }} />
      <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        {data}
      </Grid>
      <Box sx={{ m: 5 }} />
      <Box
        sx={{
          width: "maxWidth",
          height: 95,
          backgroundColor: "primary.main",
        }}
      >
        <Typography align="center" sx={{ fontSize: 70 }} color="common.white">
          Clases de Pago
        </Typography>
      </Box>
    </div>
  );
};

export default UserDashboard;
