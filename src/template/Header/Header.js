import React from "react";
import { Link } from "react-router-dom";
import Grid from "@mui/material/Grid";
import Avataar from "../felters/Avatar/Avatar";
import AppBarList from "./AppBarList";
import logo from "../../Images/logo.png";
import { Box } from "@mui/material";
export default function Header() {
  return (
    <Box
      className="app-bar"
      style={{
        position: "fixed",
        top: "0",
        width: "100%",
        boxShadow: "0px 12px 14px rgba(0, 0, 0, 0.1)",
      }}
    >
      <Grid
        container
        alignItems="center"
        justifyContent="space-between"
        className="app-bar-content"
      >
        <Grid item>
          <Avataar />
        </Grid>

        <Grid item>
          <Box className="app-bar-logo">
            <Link to="/home">
              <img src={logo} alt="Link Image" width="100%" />
            </Link>
          </Box>
        </Grid>
        <Grid item>
          <ul
            className="app-bar-nav"
            style={{
              listStyle: "none",
              display: "flex",
              alignItems: "center",
              margin: 0,
            }}
          >
            <Grid container spacing={5}>
              <Grid item>
                <AppBarList />
              </Grid>

            </Grid>
          </ul>
        </Grid>
      </Grid>
    </Box>
  );
}
