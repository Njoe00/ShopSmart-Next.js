"use client"

// import "../public/styles.css"
// import "tailwindcss/tailwind.css"
import React, { useState } from "react";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Link from "next/link";
// import { useNavigate } from "react-router-dom";
import Title from "./Title";

import "./Homepage.css";

function Homepage() {
  // const navigate = useNavigate();

  return ( 
    <div className="homepage">
      <Title />
      <div className="get_started_button">
        <Link href='/search'>
          <Button
            variant="text"
            color="success"
            className="search-button"
          >
            <Typography variant="h6" gutterBottom className="start-searching-btn">
                Start Searching    
              {/* <style>
                @import
                url('https://fonts.googleapis.com/css2?family=Anton&display=swap');
              </style> */}
            </Typography>
          </Button>
        </Link>
      </div>
    </div>
  );
}

export default Homepage;
