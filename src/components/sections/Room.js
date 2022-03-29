import Carousel from "react-grid-carousel";
import ValueBubble from "../ui/ValueBubble";

import { Row, Button, Col } from "react-bootstrap";
import StatisticBubble from "../ui/StatisticBubble";
import DeviceBubble from "../ui/DeviceBubble";

import classes from "./Sections.module.css";

import { FaTemperatureHigh } from "react-icons/fa";
import { WiHumidity } from "react-icons/wi";

const Room = (props) => {
  return (
    <>
      <Row className="h-25" style={{ padding: "0.3rem" }}>
        <Col className={`${classes.bubbleWrapper}`}>
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
          <Carousel.Item>
            <DeviceBubble deviceName={"Senzor teplota"} isActive={true} hasError={false}/>
          </Carousel.Item>
          <Carousel.Item>
          <DeviceBubble deviceName={"Senzor CO2"} isActive={false} hasError={false}/>
          </Carousel.Item>
          <Carousel.Item>
          <DeviceBubble deviceName={"Svetlo 1"} isActive={true} hasError={false}/>
          </Carousel.Item>
          <Carousel.Item>
          <DeviceBubble deviceName={"Svetlo 2"} isActive={false} hasError={false}/>
          </Carousel.Item>
          <Carousel.Item>
          <DeviceBubble deviceName={"Svetlo 3"} isActive={true} hasError={false}/>
          </Carousel.Item>
        </Carousel>
      </Row>
      <Row className={`h-50`} style={{ padding: "0.3rem" }}>
        <Col className={classes.bubbleWrapper} >
          <StatisticBubble valueType="Spotřeba vody a elektřiny" />
        </Col>
      </Row>
    </>
  );
};

export default Room;
