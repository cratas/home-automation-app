import { React } from "react";
import { Row, Col } from "react-bootstrap";

import classes from "./Sections.module.css";

import DynamicStatisticBubble from "../ui/DynamicStatisticBubble";

const Statistics = (props) => {
  return (
    <div
      className={classes.sectionWrapper}
      style={{ display: !props.visibility && "none" }}
    >
      {/* rendering header with heading and date */}
      <div className={classes.header}>
        <h5>
          <strong>Vizualizace naměřených hodnot</strong>
        </h5>
        <div className={classes.date}>
          <span style={{ fontWeight: "bold" }}>{props.date}</span>
        </div>
      </div>

      {/* rendering dynamic statistic bubbles */}
      <div className={`${classes.contentWrapper}`}>
        <Row className={`h-50 pb-2`}>
          <Col className={`${classes.bubbleWrapper}`}>
            <DynamicStatisticBubble valueType="Možnosti vizualizace" />
          </Col>
        </Row>
        <Row className={`h-50 pt-2`}>
          <Col className={`${classes.bubbleWrapper}`}>
            <DynamicStatisticBubble valueType="Možnosti vizualizace" />
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default Statistics;
