import { React, useEffect } from "react";
import Carousel from "react-grid-carousel";
import ValueBubble from "../ui/ValueBubble";

import { Row, Col } from "react-bootstrap";
import StatisticBubble from "../ui/StatisticBubble";
import DeviceBubble from "../ui/DeviceBubble";

import classes from "./Sections.module.css";

import { FaTemperatureHigh } from "react-icons/fa";
import { WiHumidity } from "react-icons/wi";


const Room = (props) => {
  const devicesList = props.data.devices?.map((device) => (
    <Carousel.Item>
      <DeviceBubble
        deviceName={device.name}
        isActive={device.is_active}
        hasError={device.has_error}
        lastTime={device.last_time}
      />
    </Carousel.Item>
  ));

  return (
    <>
      <Row className="h-25" style={{ padding: "0.3rem" }}>
        <Col className={`${classes.bubbleWrapper}`}>
          <ValueBubble
            valueType="Teplota"
            icon={<FaTemperatureHigh size={30} />}
            unit={"°C"}
            value={props.data.temperature}
            plus={"+"}
            customStyle={{ borderColor: "var(--color-orange)" }}
          />
        </Col>
        <Col className={classes.bubbleWrapper}>
          <ValueBubble
            valueType="Vlhkost"
            icon={<WiHumidity size={50} />}
            unit={"%"}
            value={props.data.humidity}
            customStyle={{ borderColor: "var(--color-blue)" }}
            darkTheme={true}
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
          />
        </Col>
      </Row>
      <Row className="h-25" style={{ padding: "1rem 0.6rem" }}>
        <Carousel cols={4} rows={1} gap={17} loop={true}>
            {devicesList}
        </Carousel>
      </Row>
      <Row className={`h-50`} style={{ padding: "0.3rem" }}>
        <Col className={classes.bubbleWrapper}>
          <StatisticBubble valueType="Spotřeba vody a elektřiny" />
        </Col>
      </Row>
    </>
  );
};

export default Room;
