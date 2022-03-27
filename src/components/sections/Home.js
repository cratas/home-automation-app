import React from "react";
import { Row, Col } from "react-bootstrap";
import ValueBubble from "../ui/ValueBubble";
import classes from "./Sections.module.css";

import { FaTemperatureHigh } from "react-icons/fa";
import { WiHumidity } from "react-icons/wi";
import StatisticBubble from "../ui/StatisticBubble";
import RoomBubble from "../ui/RoomBubble";

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
            <StatisticBubble valueType="Spotřeba vody a elektřiny"/>
          </Col>

        </Row>
      </div>
    </div>
  );
};

export default Home;
