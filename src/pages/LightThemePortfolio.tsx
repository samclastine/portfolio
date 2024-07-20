import { FunctionComponent, useCallback } from "react";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import FrameComponent2 from "../components/FrameComponent2";
import FrameComponent1 from "../components/FrameComponent1";
import CardColumns from "../components/CardColumns";
import ChatbotCard from "../components/ChatbotCard";
import ProjectsHeader from "../components/ProjectsHeader";
import Card1 from "../components/Card1";
import ContactForm from "../components/ContactForm";
import FooterContact from "../components/FooterContact";
import styles from "./LightThemePortfolio.module.css";

const LightThemePortfolio: FunctionComponent = () => {
  const navigate = useNavigate();

  const onAkarIconsmoonFillClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  return (
    <div className={styles.lightThemePortfolio}>
      <FrameComponent2
        frame70="Contact"
        group="/akariconsmoonfill.svg"
        heroImage="/hero-background@2x.png"
        rectangleDivBackgroundColor="#e0e8f6"
        onGroupIconClick={onAkarIconsmoonFillClick}
      />
      <FrameComponent1 />
      <section className={styles.services}>
        <div className={styles.servicesContainer}>
          <div className={styles.servicesContent}>
            <div className={styles.servicesTitle}>
              <h1 className={styles.whatIDo}>What I do</h1>
              <div className={styles.servicesSubtitle}>
                <div className={styles.myServices}>My Services</div>
              </div>
            </div>
          </div>
          <div className={styles.cards}>
            <div className={styles.cardContainer}>
              <CardColumns
                dataAnalyticsVisualizatio={` Data Analytics & Visualization`}
                fromDataInceptionToAction="From data inception to actionable insights, I design compelling analytics and visualization solutions that illuminate trends, empower decision-making, and drive your business forward."
                propWidth="289px"
                propFlex="unset"
                propMinWidth="unset"
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
            <ChatbotCard propGap="27px" />
          </div>
        </div>
      </section>
      <section className={styles.portfolio}>
        <div className={styles.portfolioContent}>
          <ProjectsHeader />
          <div className={styles.projects}>
            <Card1
              image="/image@2x.png"
              title="Project name/description"
              description="Technology used"
            />
            <Card1
              image="/image-1@2x.png"
              title="Project name/description"
              description="Web Design / Usability Testing"
            />
            <Card1
              image="/image-2@2x.png"
              title="Project name/description"
              description="Web Design / Usability Testing"
            />
            <Card1
              image="/image-3@2x.png"
              title="Educational Platform"
              description="Web Design / Usability Testing"
            />
            <Card1
              image="/image-4@2x.png"
              title="Educational Platform"
              description="Web Design / Usability Testing"
            />
            <Card1
              image="/image-5@2x.png"
              title="Educational Platform"
              description="Web Design / Usability Testing"
            />
          </div>
          <div className={styles.viewAllButton}>
            <Button
              className={styles.viewAllContainer}
              disableElevation
              variant="outlined"
              sx={{
                textTransform: "none",
                color: "#484e53",
                fontSize: "20",
                borderColor: "#484e53",
                borderRadius: "50px",
                "&:hover": { borderColor: "#484e53" },
                width: 210,
                height: 56,
              }}
            >
              View all
            </Button>
          </div>
        </div>
      </section>
      <ContactForm />
      <FooterContact />
    </div>
  );
};

export default LightThemePortfolio;
