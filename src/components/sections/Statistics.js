import { React, useEffect, useState } from "react";
import { Row, Col } from "react-bootstrap";
import StatisticBubble from "../ui/StatisticBubble";

import classes from "./Sections.module.css";

import axios from "axios";

const Statistics = (props) => {
  const [loadedStatistics, setLoadedStatistics] = useState({ data: [] });
  const [statisticsType, setStatisticsType] = useState("Týden");

  const handleTypeChange = (type) => {
    setStatisticsType(type);

    const interval = type === "Týden" ? 7 : 30;
    let incomingData;

    axios
      .get("http://localhost:8000/api/statistics/values/", {
        params: {
          room: props.data.name,
          interval: interval,
        },
      })
      .then((res) => {
        incomingData = res.data;
        setLoadedStatistics({ data: incomingData });
      })
      .catch((err) => {
        "error";
      });
  };

  useEffect(() => {
    let incomingData;

    axios
      .get("http://localhost:8000/api/statistics/values/")
      .then((res) => {
        incomingData = res.data;
        setLoadedStatistics(incomingData);
        console.log(incomingData);
      })
      .catch((err) => {
        "error";
      });
  }, []);

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
            <StatisticBubble
              valueType="Teplota a vlhkost"
              dataKey={["vlhkost", "teplota"]}
              data={loadedStatistics}
              type={statisticsType}
              onChangeType={handleTypeChange}
            />
          </Col>
        </Row>
        <Row className={`h-50 pt-2`}>
          <Col className={`${classes.bubbleWrapper}`}>
            <StatisticBubble
              valueType="Teplota a vlhkost"
              dataKey={["vlhkost", "teplota"]}
              data={loadedStatistics}
              type={statisticsType}
              onChangeType={handleTypeChange}
            />
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default Statistics;
