import React from "react";
import Jumbotron from "../components/Jumbotron";
import Alert from "@mui/material/Alert";

const NoMatch = () => {
  return (
    <Alert variant="outlined" severity="error">
      This is an error alert — check it out!
    </Alert>
  );
};

export default NoMatch;
