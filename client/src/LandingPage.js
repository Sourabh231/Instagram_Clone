import React from "react";
import "./LandingPage.css";
//import lens from '../Images/lens.png'
import { useNavigate } from "react-router-dom";
export const LandingPage = () => {
  const navigate = useNavigate();
  return (
    <section className="body">
      <main>
        <section className="LandingPage-img">
          <img
            className="Landing-img"
            src=""
            alt="Instagram Home Page"
          ></img>
        </section>
        <section className="LandingPage-welcome">
          <h1>10x Team 04</h1>
          <button onClick={() => navigate("/postview")}>Enter</button>
        </section>
      </main>
    </section>
  );
};
