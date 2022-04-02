import { React, useEffect, useState } from "react";
import { Row, Col, Spinner } from "react-bootstrap";
import ValueBubble from "../ui/ValueBubble";
import classes from "./Sections.module.css";
import Carousel from "react-grid-carousel";

import { FaTemperatureHigh } from "react-icons/fa";
import { WiHumidity } from "react-icons/wi";

import StatisticBubble from "../ui/StatisticBubble";
import RoomBubble from "../ui/RoomBubble";

import axios from "axios";

const Home = (props) => {
  const [loadedData, setLoadedData] = useState({ data: [] });
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    let incomingData;

    axios
      .get("http://localhost:8000/api/dashboard/")
      .then((res) => {
        incomingData = res.data;
        setLoadedData({ data: incomingData });
        setIsLoaded(true);
      })
      .catch((err) => {
        "error";
      });
  }, []);

  const roomsList = loadedData.data.rooms
    ?.sort((a, b) => b.active_count - a.active_count)
    ?.sort((a, b) => b.error_count - a.error_count)
    ?.map((room) => (
      <Carousel.Item>
        <RoomBubble
          valueType={room.name}
          activeCount={room.active_count}
          nonActiveCount={room.non_active_count}
          errorCount={room.error_count}
        />
      </Carousel.Item>
    ));

  return !isLoaded ? (
    <div className={`${classes.sectionWrapper} ${classes.spinnerWrapper}`}>
      <Spinner animation="border" />
    </div>
  ) : (
    <div className={classes.sectionWrapper}>
      <div className={classes.header}>
        <div className={classes.profile}>
          <span className={classes.name}>
            Vítejte, <span style={{ fontWeight: "bold" }}>Petře!</span>
          </span>
        </div>
        <div className={classes.date}>
          <span style={{ fontWeight: "bold" }}>{props.date}</span>
        </div>
      </div>

      <div className={classes.contentWrapper} style={{ padding: "0.45rem" }}>
        <Row className={`h-25 ${classes.rowStyle} pb-1`}>
          <Col className={`${classes.bubbleWrapper}`}>
            <ValueBubble
              valueType="Teplota"
              icon={<FaTemperatureHigh size={30} />}
              unit={"°C"}
              value={loadedData.data.house_temperature}
              plus={"+"}
              customStyle={{ borderColor: "var(--color-orange)" }}
            />
          </Col>
          <Col className={classes.bubbleWrapper}>
            <ValueBubble
              valueType="Vlhkost"
              icon={<WiHumidity size={50} />}
              unit={"%"}
              value={loadedData.data.house_humidity}
              customStyle={{ borderColor: "var(--color-blue)" }}
            />
          </Col>
          <Col className={classes.bubbleWrapper}>
            <ValueBubble
              valueType="Oxid uhličitý"
              icon={
                <span style={{ fontWeight: "bold", fontSize: "1.3rem" }}>
                  CO2
                </span>
              }
              unit={"ppm"}
              value={loadedData.data.house_co2}
              customStyle={{ borderColor: "var(--color-light-text)" }}
            />
          </Col>
          <Col className={classes.bubbleWrapper}>
            <ValueBubble
              valueType="Oxid uhličitý"
              icon={
                <span style={{ fontWeight: "bold", fontSize: "1.3rem" }}>
                  CO2
                </span>
              }
              unit={"ppm"}
              value={1283}
              customStyle={{ borderColor: "var(--color-light-text)" }}
              darkTheme={true}
            />
          </Col>
        </Row>
        <Row
          className={`h-25 ${classes.rowStyle}`}
          style={{ padding: "1rem 0.3rem" }}
        >
          <Carousel cols={4} rows={1} gap={17} loop={true}>
            {roomsList}
          </Carousel>
        </Row>

        <Row className={`h-50 ${classes.rowStyle} pt-2`}>
          <Col className={classes.bubbleWrapper}>
            <StatisticBubble
              data={data}
              valueType="Celková týdenní spotřeba"
            />
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default Home;

const data = [
  {
    name: "Po",
    voda: 4000,
    elektrina: 2400,
    plyn: 2400,
  },
  {
    name: "Út",
    voda: 3000,
    elektrina: 1398,
    plyn: 2210,
  },
  {
    name: "St",
    voda: 2000,
    elektrina: 9800,
    plyn: 2290,
  },
  {
    name: "Čt",
    voda: 2780,
    elektrina: 3908,
    plyn: 2000,
  },
  {
    name: "Pá",
    voda: 1890,
    elektrina: 4800,
    plyn: 2181,
  },
  {
    name: "So",
    voda: 2390,
    elektrina: 3800,
    plyn: 2500,
  },
  {
    name: "Ne",
    voda: 3490,
    elektrina: 4300,
    plyn: 2100,
  },
];

