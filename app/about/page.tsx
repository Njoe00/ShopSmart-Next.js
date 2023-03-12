import React from "react";
import Typography from "@mui/material/Typography";
import "./About.css";

function About() {
  return (
    <div className="about-page">
      <div className='about-body-style'>
        <div className='body-div-text'>
          <div>
            <h1 className='title-text'>Coming Soon</h1>
          </div>
          <div>
            <li className='points-text'>More consistent and wide spread <em>Web scarping</em></li>
            <li className='points-text'>Display <em>savings</em> for users when they check off items</li>
            <li className='points-text'>A mobile-friendly grocery list</li>
          </div>
          <div>
            <input className='email-input' type='email' name="email" placeholder="Enter Email Here"/>
            <input className='email-btn' type='submit'/>
          </div>
        </div>

      </div>

        <footer className="footer">
          <div className="waves">
            <div className="wave" id="wave1"></div>
            <div className="wave" id="wave2"></div>
            <div className="wave" id="wave3"></div>
            <div className="wave" id="wave4"></div>
            <p>
              &copy;2023 Created by Margaryta Lanova | Nicholas James Joe | Sohaib
              Al-Majmaie{" "}
            </p>
          </div>  
        </footer>
    </div>
  );
}

export default About;
