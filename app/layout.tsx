'use client';

import "./globals.css";
import React, { useState } from "react";
import { hydrate, render } from "react-dom";
import Link from 'next/link';
// import Typography from "@mui/material/Typography";
// import Box from "@mui/material/Box";
import Button from "@mui/material/Button" ;
// import { Divider, Alert, Modal } from "@mui/material";
// import TextField from "@mui/material/TextField";
// import ClickAwayListener from "@mui/base/ClickAwayListener";
import logo from "../public/logo.png";
// import { useLocation, useNavigate } from "react-router-dom";
// import ColoredTabs from "../ColoredTabs/ColoredTabs.jsx";
// import useLogin from "../authentication/useLogin";

// export const metadata = {
//   title: "Create Next App",
//   description: "Generated by create next app",
// };
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <nav>
          <div className='text-red-400'>
          {/* <div className="header">  */}
            {/* <div className="navigation-buttons">
            <Link href='/'>
              <img
                src={logo.src}
                alt="logo"
                className="logo"
              />
            </Link>
              <div className="logo-text">
                ShopSmart{" "}
                <style>
                  @import
                  url('https://fonts.googleapis.com/css2?family=Pacifico&family=Shadows+Into+Light&display=swap');
                </style>
              </div>
            </div>
            <div className="right-buttons-group">
              <Button
                className="sign-in-out-button"
                variant="contained"
                color="success"
                onClick={() => setSignInDrawerOpen(true)}
              >
                Login
              </Button>
            </div> */}
            test
          </div>
        </nav>
        {children}
      </body>
    </html>
  );
}
