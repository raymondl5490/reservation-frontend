import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@mui/material";

const Home: React.FC = () => {
  return (
    <div>
      <h1>Reservation System</h1>
      <Button
        variant="contained"
        color="primary"
        component={Link}
        to="/providers"
      >
        Provider Schedule
      </Button>
      <Button
        variant="contained"
        color="secondary"
        component={Link}
        to="/clients"
      >
        Client Reservation
      </Button>
    </div>
  );
};

export default Home;
