import { FunctionComponent } from "react";
import CardColumns from "./CardColumns";
import styles from "./WhatidoComponent.module.css";

export type WhatIDoType = {
  className?: string;
};

const WhatIDo: FunctionComponent<WhatIDoType> = ({ className = "" }) => {
  return (
    <section className={[styles.whatIDoContentWrapper, className].join(" ")}>
      <div className={styles.whatIDoContent}>
        <div className={styles.whatIDoHeader}>
          <div className={styles.whatIDo}>What I Do</div>
          <div className={styles.exploreServicesWrapper}>
            <div className={styles.exploreServices}>Explore my services</div>
          </div>
        </div>
        <div className={styles.serviceCards}>
          <div className={styles.cardContainer}>
            <CardColumns
              dataAnalyticsVisualizatio="Data Analytics & Visualization"
              fromDataInceptionToAction="From data inception to actionable insights, I design compelling analytic and visualization solutions. Leveraging Python, R, and state-of-the-art visualization libraries, I empower decision-making and drive your business forward with clear, data-driven narratives."
              imageSrc="/path/to/data-analytics-visualization-image.jpg" // Optional image source
              propWidth="380px"
            />
            <CardColumns
              dataAnalyticsVisualizatio="Predictive Analytics and Forecasting"
              fromDataInceptionToAction="From data to foresight, I craft predictive analytics and forecasting solutions that steer your business with precision. Using advanced machine learning techniques, I build models that anticipate trends, empowering strategic decisions and ensuring future success."
              propWidth="380px"
              propFlex="unset"
              propMinWidth="unset"
              imageSrc="/path/to/predictive-analytics-image.jpg" // Optional image source
            />
            <CardColumns
              dataAnalyticsVisualizatio="Natural Language Processing"
              fromDataInceptionToAction="From text to insight, I develop NLP solutions that decode linguistic nuances and revolutionize data engagement. I have worked with Language-based models on the Benchmark datasets to determine the answerability of queries and utilized POS tagging and dependency parsing to detect patterns in deceptive reviews. By leveraging these advanced techniques, I enhance your business's ability to understand and leverage textual data."
              propWidth="380px"
              propFlex="unset"
              propMinWidth="unset"
              imageSrc="/path/to/natural-language-processing-image.jpg" // Optional image source
            />
            <CardColumns
              dataAnalyticsVisualizatio="AI Chatbots"
              fromDataInceptionToAction="From design to deployment, I build AI Chatbots that enhance customer interactions, streamline processes, and elevate your brand's engagement, bringing innovative solutions to your audience's fingertips."
              imageSrc="/path/to/ai-chatbots-image.jpg" // Optional image source
              propWidth="380px"
              propFlex="unset"
              propMinWidth="unset"
            />
            <CardColumns
              dataAnalyticsVisualizatio="Machine Learning"
              fromDataInceptionToAction="From concept to automation, I craft Machine Learning solutions that decode patterns and optimize performance, driving your business into the era of intelligent automation."
              imageSrc="/path/to/machine-learning-image.jpg" // Optional image source
              propWidth="380px"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatIDo;
