import { React, useEffect, useState } from "react";
import { Row, Col } from "react-bootstrap";

import classes from "./Sections.module.css";

import DynamicStatisticBubble from "../ui/DynamicStatisticBubble";

const Statistics = (props) => {
  return  (
    <div className={classes.sectionWrapper} style={{display: !props.visibility && 'none'}}>
      <div className={classes.header}>
        <h5>
          <strong>Stastistiky naměřených hodnot</strong>
        </h5>
        <div className={classes.date}>
          <span style={{ fontWeight: "bold" }}>{props.date}</span>
        </div>
      </div>


      <div className={`${classes.contentWrapper}`}>
        <Row className={`h-50 pb-2`}>
          <Col className={`${classes.bubbleWrapper}`}>
            <DynamicStatisticBubble
              valueType="Teplota a vlhkost"
            />
          </Col>
        </Row>
        <Row className={`h-50 pt-2`}>
          <Col className={`${classes.bubbleWrapper}`}>
            <DynamicStatisticBubble
              valueType="Teplota a vlhkost"
            />
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default Statistics;
