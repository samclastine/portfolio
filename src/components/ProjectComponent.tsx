import React, { FunctionComponent, useState } from "react";
import { Button } from "@mui/material";
import Card from "../components/Card";
import styles from "./Projects.module.css";

const Projects: FunctionComponent = () => {
  const [showAll, setShowAll] = useState(true);

  const handleViewAllClick = () => {
    setShowAll(!showAll);
  };

  const projects = [
    { image: "/Image-p1.png", title: "Data visualization (visual information) mediated through language", description: "Generative AI" },
    { image: "/Image-p2.png", title: "Predicting Stock Price Reactions to ESG News Using Neural Network", description: "Time Series Forcasting" },
    { image: "/Image-p3.png", title: "Classifying Machine Reading Comprehension using SQUAD", description: "Machine Learning / NLP" },
    { image: "/Image-p4.png", title: "Fake (Deceptive) Review Detection", description: "Machine Learning / NLP" },
    { image: "/Image-p5.png", title: "Conversational AI for Medical Healthcare Chatbot and Cancer Diagnostics Image Interpretation", description: "Deep Learning / Computer Vision" },
    { image: "/Image-p6.png", title: "F1 Racing Data Analysis using Tableau", description: "Data Visualization" },
  ];

  const additionalProjects = [
    { image: "/Image-p7.png", title: "Defence against Trojan attack on Deep Neural Network", description: "Neural Network" },
    { image: "/Image-p8.png", title: "Impact of COVID 19 on Food Security Visualization Dashboard Based on Machine Learning", description: "Data Visualization / Machine Learning" },


    // Add more projects as needed
  ];

  return (
    <section className={styles.projectsContentWrapper}>
      <div className={styles.projectsContent}>
        <div className={styles.projectsHeader}>
          <div className={styles.projectsHeader1}>
            <div className={styles.projectsTitleContainer}>
              <div className={styles.projectTitle}>
                <h1 className={styles.projects}>Projects</h1>
                <div className={styles.someOfMyWorkWrapper}>
                  <div className={styles.someOfMy}>Some of my Work</div>
                </div>
              </div>
            </div>
            <div className={styles.skills}>
              <Button
                className={styles.skillItems}
                disableElevation
                variant="contained"
                sx={{
                  textTransform: "none",
                  color: "#f5f5f5",
                  fontSize: "16",
                  background: "#484e53",
                  borderRadius: "50px",
                  "&:hover": { background: "#484e53" },
                  width: 193,
                  height: 55,
                }}
              >
                Machine learning
              </Button>

              <Button
                className={styles.skillItems3}
                disableElevation
                variant="outlined"
                sx={{
                  textTransform: "none",
                  color: "#a9a9a9",
                  fontSize: "16",
                  borderColor: "#484e53",
                  borderRadius: "50px",
                  "&:hover": { borderColor: "#484e53" },
                  width: 129,
                  height: 55,
                }}
              >
                AI/LLMs
              </Button>
            </div>
          </div>
        </div>
        <div className={styles.projectCards}>
          {projects.map((project, index) => (
            <Card
              key={index}
              image={project.image}
              title={project.title}
              description={project.description}
            />
          ))}
          {showAll && additionalProjects.map((project, index) => (
            <Card
              key={index + projects.length}  // Ensure unique key for additional projects
              image={project.image}
              title={project.title}
              description={project.description}
            />
          ))}
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
              margin: "10px 0 30px 0"
            }}
            onClick={handleViewAllClick}
          >
            View All
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Projects;
