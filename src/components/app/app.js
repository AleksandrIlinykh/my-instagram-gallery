import "./app.css";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPhotos } from "../../services/actions/photos";

//--------------------------FROM_MATERIAL_UI-----------------
import AppBar from "@mui/material/AppBar";

import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import CssBaseline from "@mui/material/CssBaseline";
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Link from "@mui/material/Link";
import { createTheme, ThemeProvider } from "@mui/material/styles";

//--------------------------FROM_MATERIAL_UI-----------------

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getPhotos());
  }, [dispatch]);

  const { photos } = useSelector((store) => ({
    photos: store.photos.data,
  }));

  return (
    <>
      <AppBar position="relative">
        <Toolbar>
          <Typography variant="h6" color="inherit" noWrap>
            Album layout
          </Typography>
          <Typography variant="h6" color="inherit" noWrap>
            Album layout
          </Typography>
          <Typography variant="h6" color="inherit" noWrap>
            Album layout
          </Typography>
        </Toolbar>
      </AppBar>
      {!photos.length ||
        photos.map((photo) => (
          <div>
            <img src={photo.media_url}></img>
          </div>
        ))}
    </>
  );
}

export default App;
