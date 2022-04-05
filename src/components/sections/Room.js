import { React, useState } from "react";
import Carousel from "react-grid-carousel";
import ValueBubble from "../ui/ValueBubble";

import { Row, Col, Spinner } from "react-bootstrap";
import StatisticBubble from "../ui/StatisticBubble";
import DeviceBubble from "../ui/DeviceBubble";
import SmartDeviceBubble from "../ui/SmartDeviceBubble";

import classes from "./Sections.module.css";

import { FaTemperatureHigh } from "react-icons/fa";
import { WiHumidity } from "react-icons/wi";
import { useEffect } from "react";

import axios from "axios";

const Room = (props) => {
  const [loadedStatistics, setLoadedStatistics] = useState({ data: [] });
  const [isLoaded, setIsLoaded] = useState(false);
  const [statisticsType, setStatisticsType] = useState("Měsíc");

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
        setIsLoaded(true);
      })
      .catch((err) => {
        "error";
      });
  };

  useEffect(() => {
    let incomingData;

    axios
      .get("http://localhost:8000/api/statistics/values/", {
        params: {
          room: props.data.name,
          interval: 30,
        },
      })
      .then((res) => {
        incomingData = res.data;
        setLoadedStatistics({ data: incomingData });
        setIsLoaded(true);
      })
      .catch((err) => {
        "error";
      });
  }, []);

  const devicesList = props.data.devices
    ?.sort((a, b) => Number(b.has_error) - Number(a.has_error))
    ?.sort((a, b) => Number(b.is_active) - Number(a.is_active))
    .map((device) => (
      <Carousel.Item key={device.identifier}>
        <DeviceBubble
          key={device.identifier + '1'}
          deviceId={device.identifier}
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
        <Col className={classes.bubbleWrapper} xl={5}>
          <ValueBubble
            valueType="Oxid uhličitý"
            icon={
              <span style={{ fontWeight: "bold", fontSize: "1.3rem" }}>
                CO2
              </span>
            }
            unit={"ppm"}
            value={props.data.co2}
            customStyle={{ borderColor: "var(--color-light-text)" }}
          />
        </Col>
      </Row>
      <Row className="h-25" style={{ padding: "1rem 0.6rem" }}>
        <Carousel cols={4} rows={1} gap={20} loop={true}>
          {devicesList}
        </Carousel>
      </Row>
      <Row className={`h-50`} style={{ padding: "0.3rem" }}>
        <Col className={classes.bubbleWrapper} xl={9}>
          {!isLoaded ? (
            <div className={classes.loaderWrapper}>
              <Spinner animation="border" />
            </div>
          ) : (
            <StatisticBubble
              valueType="Teplota a vlhkost"
              dataKey={["vlhkost", "teplota"]}
              data={loadedStatistics}
              type={statisticsType}
              onChangeType={handleTypeChange}
            />
          )}
        </Col>
        <Col className={classes.bubbleWrapper} xl={3}>
          <SmartDeviceBubble smartDevicesData={props.data.smart_devices} />
        </Col>
      </Row>
    </>
  );
};

export default Room;
