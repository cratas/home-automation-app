import React from "react";
import { Row, Col } from "react-bootstrap";
import ValueBubble from "../ui/ValueBubble";
import classes from "./Sections.module.css";

import { FaTemperatureHigh } from "react-icons/fa";
import { WiHumidity } from "react-icons/wi";
import StatisticBubble from "../ui/StatisticBubble";
import RoomBubble from "../ui/RoomBubble";

const data = [
  {
    name: "Po",
    voda: 4000,
    elektrina: 2400,
    amt: 2400,
  },
  {
    name: "Út",
    voda: 3000,
    elektrina: 1398,
    amt: 2210,
  },
  {
    name: "St",
    voda: 2000,
    elektrina: 9800,
    amt: 2290,
  },
  {
    name: "Čt",
    voda: 2780,
    elektrina: 3908,
    amt: 2000,
  },
  {
    name: "Pá",
    voda: 1890,
    elektrina: 4800,
    amt: 2181,
  },
  {
    name: "So",
    voda: 2390,
    elektrina: 3800,
    amt: 2500,
  },
  {
    name: "Ne",
    voda: 3490,
    elektrina: 4300,
    amt: 2100,
  },
];

const Home = () => {
  return (
    <div className={classes.sectionWrapper}>
      <div className={classes.header}>
        <div className={classes.profile}>
          <span className={classes.name}>
            Vítejte, <span style={{ fontWeight: "bold" }}>Adame!</span>
          </span>
        </div>
        <div className={classes.date}>
          <span style={{ fontWeight: "bold" }}>Sobota</span>, 24 Duben 2022
        </div>
      </div>

      <div className={classes.contentWrapper}>
        <Row className="h-25 pb-2">
          <Col className={classes.bubbleWrapper}>
            <ValueBubble
              valueType="Teplota"
              icon={<FaTemperatureHigh size={30} />}
              unit={"°C"}
              value={27}
              plus={"+"}
              customStyle={{ borderColor: "var(--color-orange)" }}
            />
          </Col>
          <Col className={classes.bubbleWrapper}>
            <ValueBubble
              valueType="Vlhkost"
              icon={<WiHumidity size={50} />}
              unit={"%"}
              value={51}
              customStyle={{ borderColor: "var(--color-blue)" }}
            />
          </Col>
          <Col className={classes.bubbleWrapper}>
            <ValueBubble
              valueType="Oxid uhličitý"
              icon={<span style={{fontWeight: 'bold', fontSize: '1.3rem'}}>CO2</span>}
              unit={"ppm"}
              value={1283}
              customStyle={{ borderColor: "var(--color-light-text)" }}
            />
          </Col>
        </Row>

        <Row className="h-25 pt-2">
          <Col className={classes.bubbleWrapper}>
            <RoomBubble valueType="Chodba" />
          </Col>
          <Col className={classes.bubbleWrapper}>
            <RoomBubble valueType="Obývák" />
          </Col>
          <Col className={classes.bubbleWrapper}>
            <RoomBubble valueType="Kuchyně" />
          </Col>
          <Col className={classes.bubbleWrapper}>
            <RoomBubble valueType="WC" />
          </Col>
          <Col className={classes.bubbleWrapper}>
            <RoomBubble valueType="Ložnice" />
          </Col>
        </Row>

        <Row className="h-50 pt-3">
          <Col className={classes.bubbleWrapper}>
            <StatisticBubble data={data} valueType="Spotřeba vody a elektřiny"/>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default Home;
