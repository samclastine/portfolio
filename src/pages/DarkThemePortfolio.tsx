import { FunctionComponent, useCallback } from "react";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import FrameComponent2 from "../components/FrameComponent2";
import FrameComponent1 from "../components/FrameComponent1";
import CardColumns from "../components/CardColumns";
import ChatbotCard from "../components/ChatbotCard";
import ProjectsHeader from "../components/ProjectsHeader";
import Card from "../components/Card";
import FrameComponent from "../components/FrameComponent";
import Footer from "../components/Footer";
import styles from "./DarkThemePortfolio.module.css";

const DarkThemePortfolio: FunctionComponent = () => {
  const navigate = useNavigate();

  const onGroupIconClick = useCallback(() => {
    navigate("/light-theme-portfolio");
  }, [navigate]);

  return (
    <div className={styles.darkThemePortfolio}>
      <FrameComponent2
        frame70="Contact Me"
        group="/group.svg"
        heroImage="/hero-image@2x.png"
        onGroupIconClick={onGroupIconClick}
      />
      <FrameComponent1 />
      <section className={styles.servicesContentWrapper}>
        <div className={styles.servicesContent}>
          <div className={styles.servicesHeader}>
            <div className={styles.whatIDoParent}>
              <h1 className={styles.whatIDo}>What I do</h1>
              <div className={styles.myServicesWrapper}>
                <div className={styles.myServices}>My Services</div>
              </div>
            </div>
          </div>
          <div className={styles.serviceCards}>
            <div className={styles.cardContainer}>
              <CardColumns
                dataAnalyticsVisualizatio={` Data Analytics & Visualization`}
                fromDataInceptionToAction="From data inception to actionable insights, I design compelling analytics and visualization solutions that illuminate trends, empower decision-making, and drive your business forward."
              />
              <CardColumns
                dataAnalyticsVisualizatio="Predictive Analytics and Forecasting"
                fromDataInceptionToAction="From data to foresight, I craft predictive analytics and forecasting solutions that steer your business with precision, empowering strategic decisions and ensuring future success"
                propWidth="unset"
                propFlex="1"
                propMinWidth="197px"
              />
              <CardColumns
                dataAnalyticsVisualizatio="Natural Language Processing"
                fromDataInceptionToAction="From text to insight, I craft Natural Language Processing solutions that decode language intricacies, revolutionizing data comprehension and empowering your business for success in the digital age"
                propWidth="289px"
                propFlex="unset"
                propMinWidth="unset"
              />
            </div>
            <ChatbotCard />
          </div>
        </div>
      </section>
      <section className={styles.projectsContentWrapper}>
        <div className={styles.projectsContent}>
          <ProjectsHeader />
          <div className={styles.projectCards}>
            <Card
              image="/image@2x.png"
              title="Project name/description"
              description="Technology used"
            />
            <Card
              image="/image-1@2x.png"
              title="Project name/description"
              description="Web Design / Usability Testing"
            />
            <Card
              image="/image-2@2x.png"
              title="Project name/description"
              description="Web Design / Usability Testing"
            />
            <Card
              image="/image-3@2x.png"
              title="Educational Platform"
              description="Web Design / Usability Testing"
            />
            <Card
              image="/image-4@2x.png"
              title="Educational Platform"
              description="Web Design / Usability Testing"
            />
            <Card
              image="/image-5@2x.png"
              title="Educational Platform"
              description="Web Design / Usability Testing"
            />
          </div>
          <div className={styles.projectsContact}>
            <Button
              className={styles.projectsContactChild}
              disableElevation
              variant="outlined"
              sx={{
                textTransform: "none",
                color: "#fff",
                fontSize: "15",
                borderColor: "#484e53",
                borderRadius: "75px",
                "&:hover": { borderColor: "#484e53" },
                width: 210,
                height: 56,
              }}
            >
              View All
            </Button>
          </div>
        </div>
      </section>
      <FrameComponent />
      <Footer />
    </div>
  );
};

export default DarkThemePortfolio;
