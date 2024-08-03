import { FunctionComponent, useCallback } from "react";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import NavbarComponent from "../components/NavbarComponent";

// import ProjectsHeader from "../components/ProjectsHeader";
// import Card from "../components/Card";
import FrameComponent from "../components/FrameComponent";
import Footer from "../components/Footer";
import styles from "./DarkThemePortfolio.module.css";
import WhoiamComponent from "../components/WhoiamComponent";
import AboutMe from "../components/AboutmeComponent";
import WhatIDo from "../components/WhatidoComponent";
import Projects from "../components/ProjectComponent";

const DarkThemePortfolio: FunctionComponent = () => {
  const navigate = useNavigate();

  const onGroupIconClick = useCallback(() => {
    navigate("/light-theme-portfolio");
  }, [navigate]);

  return (
    <div className={styles.darkThemePortfolio}>
      <NavbarComponent
        frame70="Contact Me"
        group="/group.svg"
        heroImage=""
        onGroupIconClick={onGroupIconClick}
      />
      <WhoiamComponent />
      <AboutMe />
      <WhatIDo />
      <Projects />
    

      <FrameComponent />
      <Footer />
    </div>
  );
};

export default DarkThemePortfolio;
