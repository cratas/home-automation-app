import React from "react";
import { Row, Col, Spinner } from "react-bootstrap";
import StatisticBubble from "../ui/StatisticBubble";

import classes from "./Sections.module.css";

const Statistics = (props) => {
  return (
    <div className={classes.sectionWrapper}>
      <div className={classes.header}>
        <h5>
          <strong>Stastistiky naměřených hodnot</strong>
        </h5>
        <div className={classes.date}>
          <span style={{ fontWeight: "bold" }}>{props.date}</span>
        </div>
      </div>

      <div className={classes.contentWrapper} >
        <Row className={`h-50 pb-2`}>
          <Col className={`${classes.bubbleWrapper}`}>
            <StatisticBubble
              data={"sdf"}
              valueType="Celková týdenní spotřeba"
            />
          </Col>
        </Row>
        <Row className={`h-50 pt-2`}>
          <Col className={`${classes.bubbleWrapper}`}>
            <StatisticBubble
              data={"sdf"}
              valueType="Celková týdenní spotřeba"
            />
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default Statistics;
