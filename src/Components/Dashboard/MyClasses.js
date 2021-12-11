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
import axios from "axios";
import { useEffect, useState } from "react";
import DashboardNavBar from "./DashboardNavBar";

const MyClasses = () => {
  const [myRoutines, setMyRoutines] = useState([]);
  const email = localStorage.getItem("email");
  const [test, setTest] = useState({});

  useEffect(() => {
    function getMyRoutines() {
      axios
        .get(
          `https://onlyfit-backend-staging.herokuapp.com/v1/user/routines?emailAddress=${email}`
        )
        .then((res) => {
          setMyRoutines(res.data);
        });
    }

    getMyRoutines();
  }, []);

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

  function getInfo(ele) {
    axios
      .get(`https://onlyfit-backend-staging.herokuapp.com/v1/routine/${ele}`)
      .then((res) => {
        setTest(res.data);
      })
      .catch((error) => {
        console.log(error);
        alert("error");
      });
  }

  if (myRoutines.length > 0) {
    data = myRoutines.map((ele, index) => {
      var imageName;
      var routine;

      getInfo(ele);

      if (test.name === "cardio") {
        imageName =
          "https://images.unsplash.com/photo-1607962837359-5e7e89f86776?w=248.88&h=140&fit=crop&auto=format";
      } else if (test.name === "crossfit") {
        imageName =
          "https://images.unsplash.com/photo-1517964603305-11c0f6f66012?w=248.88&h=140&fit=crop&auto=format";
      } else if (test.name === "pesas") {
        imageName =
          "https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?w=248.88&h=140&fit=crop&auto=format";
      } else if (test.name === "tenis") {
        imageName =
          "https://www.ecestaticos.com/imagestatic/clipping/0ce/50c/0ce50c2c82d99851bcd9e3b4d4ef0a9d/para-que-es-bueno-practicar-tenis-y-las-posibles-lesiones-que-debes-vigilar.jpg?w=248.88&h=140&fit=crop&auto=format";
      } else if (test.name === "zumba") {
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
              alt={test.id}
            />
            <CardContent>
              <Typography gutterBottom variant="h4" component="div">
                {test.name}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {test.description}
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="medium">Ver Rutina</Button>
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
      <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        {data}
      </Grid>
    </div>
  );
};

export default MyClasses;
