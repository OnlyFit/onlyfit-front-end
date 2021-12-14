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
import { useLocation, useHistory } from "react-router-dom";

const RoutineInfo = () => {
  const history = useHistory();
  const idRoutine = localStorage.getItem("idRoutine");
  const [routine, setRoutine] = useState();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    function getRoutineById() {
      axios
        .get(
          `https://onlyfit-backend-staging.herokuapp.com/v1/routine/${idRoutine}`
        )
        .then((res) => {
          setRoutine(res.data);
        })
        .catch((error) => {
          console.log(error);
        })
        .finally(() => {
          setLoading(false);
        });
    }

    getRoutineById();
  }, []);

  function data() {
    var imageName;
    if (routine.name === "cardio") {
      imageName =
        "https://www.youtube.com/embed/x5BuK8JqODU";
    } else if (routine.name === "crossfit") {
      imageName =
        "https://www.youtube.com/embed/gf7GbOISg4o";
    } else if (routine.name === "pesas") {
      imageName =
        "https://www.youtube.com/embed/KUsxf3ZFA28";
    } else if (routine.name === "tenis") {
      imageName =
        "https://www.youtube.com/embed/fb7atwtG7e4";
    } else if (routine.name === "zumba") {
      imageName =
        "https://youtube.com/embed/Z7llArCgpPU";
    }

    if (!loading) {
      return (
        <Grid container s={12} style={{ paddingTop: "40px", height:'100vh' }}>
          <Card xs={12} style={{width:'100%', height:'100%'}}>
            <CardMedia
              component="iframe"
              image={imageName}
              alt={routine.id}
              height='100%'
            />
          </Card>
        </Grid>
      );
    } else {
      return <div></div>;
    }
  }

  if (!loading) {
    return (
      <div>
        <DashboardNavBar />
        <Box sx={{ m: 9 }} />
        <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
          {data()}
        </Grid>
      </div>
    );
  } else {
    return <div></div>;
  }
};
export default RoutineInfo;
