import { React, useState } from "react";

import { Row, Col, Spinner } from "react-bootstrap";
import Carousel from "react-grid-carousel";

import ValueBubble from "../ui/ValueBubble";
import StatisticBubble from "../ui/StatisticBubble";
import DeviceBubble from "../ui/DeviceBubble";
import SmartDeviceBubble from "../ui/SmartDeviceBubble";

import { FaTemperatureHigh } from "react-icons/fa";
import { WiHumidity } from "react-icons/wi";
import { useEffect } from "react";

import classes from "./Sections.module.css";

import axios from "axios";

const Room = (props) => {
  // state saving loaded statistic from backend
  const [loadedStatistics, setLoadedStatistics] = useState({ data: [] });
  // state for spinner conditional rendering while loading data from backend
  const [isLoaded, setIsLoaded] = useState(false);
  // state saving type of time period in chart
  const [statisticsType, setStatisticsType] = useState("Měsíc");

  // if type of time period is changed, get request on backend for new data will be sent
  const handleTypeChange = (type) => {
    setStatisticsType(type);

    // setting interval
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

  // useEffect hook executed when component is rendered, get data from backend
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

  // dynamically creating list of device bubbles by data from backend
  // sort them by status
  const devicesList = props.data.devices
    ?.sort((a, b) => Number(b.has_error) - Number(a.has_error))
    ?.sort((a, b) => Number(b.is_active) - Number(a.is_active))
    .map((device) => (
      <Carousel.Item key={device.identifier}>
        <DeviceBubble
          key={device.identifier + "1"}
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
      {/* rendering bubble with avg values in current room */}
      <Row
        className={`h-25 ${classes.rowStyle} pb-1`}
        style={{ padding: "0.3rem" }}
      >
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

      {/* showing list of devices in room */}
      <Row className="h-25" style={{ padding: "1rem 0.6rem" }}>
        <Carousel cols={4} rows={1} gap={20} loop={true}>
          {devicesList}
        </Carousel>
      </Row>
      <Row className={`h-50 ${classes.rowStyle}`} style={{ padding: "0.3rem" }}>
        {/* rendering statistics chart with temperature and humidity in current room */}
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
        {/* rendering bubble with all smart devices in current room */}
        <Col className={classes.bubbleWrapper} xl={3}>
          <SmartDeviceBubble smartDevicesData={props.data.smart_devices} />
        </Col>
      </Row>
    </>
  );
};

export default Room;
