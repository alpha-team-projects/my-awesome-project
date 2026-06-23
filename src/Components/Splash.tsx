import React from "react";
import "./Splash.css";
import Button from "@mui/material/Button";
const Splash: React.FC = () => {
  return (
    <div className="splashHero">
      <div className="heroText">
        <h1>APEX SKILL ACQUISITION</h1>
        <p>
          "The Distance Between Who You Are And Who You Want To Be Is Only A Step Away With Apex."
        </p>
      </div>

      <div className="courseSection">
        <h2>Courses We Offer</h2>
        <div className="courseContainer">
          <div>
            <ul>
              <li>Medicals</li>
              <li>Education</li>
              <li>Engeneering</li>
            </ul>
          </div>

          <div className="courseContainer">
            <div>
              <ul>
                <li>Architeture</li>
                <li>Aeronautics</li>
                <li>photography </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="startedContainer">
        <h2>
          If Interested, Then Why Delay? <br /> Hurry Up Now!
        </h2>
        <Button
          variant="contained"
          size="large"
          className="splash-btn"
          onClick={() => console.log("Navigating to signup/login")}
        >
          Get Started
        </Button>
      </div>
    </div>
  );
};

export default Splash;
