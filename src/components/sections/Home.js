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
  // state for saving loaded data from backend
  const [loadedData, setLoadedData] = useState({ data: [] });
  // state for saving loaded statistic data into charts from backend
  const [loadedStatistics, setLoadedStatistics] = useState({ data: [] });
  // sate for spinner conditional rendering while loading data from backend
  const [isLoaded, setIsLoaded] = useState(false);

  // useEffect hook executed when component is rendered, get data from backend
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

    axios
      .get("http://localhost:8000/api/statistics/")
      .then((res) => {
        incomingData = res.data;
        setLoadedStatistics({ data: incomingData });
      })
      .catch((err) => {
        "error";
      });
  }, []);

  // dynamically creating list of room bubbles by data from backend
  // sort them by status
  const roomsList = loadedData.data.rooms
    ?.sort((a, b) => b.active_count - a.active_count)
    ?.sort((a, b) => b.error_count - a.error_count)
    ?.map((room) => (
      <Carousel.Item key={room.name + "2"}>
        <RoomBubble
          key={room.name + "3"}
          valueType={room.name}
          activeCount={room.active_count}
          nonActiveCount={room.non_active_count}
          errorCount={room.error_count}
        />
      </Carousel.Item>
    ));

  // showing spinner until the data arrives from backend
  return !isLoaded ? (
    <div className={`${classes.sectionWrapper} ${classes.spinnerWrapper}`}>
      <Spinner animation="border" />
    </div>
  ) : (
    // rendring header with welcome text and date
    <div
      className={classes.sectionWrapper}
      style={{ display: !props.visibility && "none" }}
    >
      <div className={classes.header}>
        <div className={classes.profile}>
          <span className={classes.name}>
            V??tejte, <span style={{ fontWeight: "bold" }}>Pet??e!</span>
          </span>
        </div>
        <div className={classes.date}>
          <span style={{ fontWeight: "bold" }}>{props.date}</span>
        </div>
      </div>

      {/* rendering bubble with avg values in house */}
      <div className={classes.contentWrapper}>
        <Row className={`h-25 ${classes.rowStyle} pb-1`}>
          <Col className={`${classes.bubbleWrapper}`}>
            <ValueBubble
              valueType="Teplota"
              icon={<FaTemperatureHigh size={30} />}
              unit={"??C"}
              value={loadedData.data.house_temperature}
              plus={"+"}
              customStyle={{ borderColor: "var(--color-orange)" }}
            />
          </Col>
          <Col className={classes.bubbleWrapper}>
            <ValueBubble
              valueType="Vlhkost"
              icon={<WiHumidity size={50} />}
              darkTheme={true}
              unit={"%"}
              value={loadedData.data.house_humidity}
              customStyle={{ borderColor: "var(--color-blue)" }}
            />
          </Col>
          <Col className={classes.bubbleWrapper} xl={5}>
            <ValueBubble
              valueType="Oxid uhli??it??"
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
        </Row>
        {/* showing list of houses in house */}
        <Row className={`h-25`} style={{ padding: "1rem 0.3rem" }}>
          <Carousel cols={4} rows={1} gap={17} loop={true}>
            {roomsList}
          </Carousel>
        </Row>

        {/* rendering statistics chart with consumption in house */}
        <Row className={`h-50 ${classes.rowStyle}`}>
          <Col className={classes.bubbleWrapper}>
            <StatisticBubble
              data={loadedStatistics}
              dataKey={["voda", "elekt??ina"]}
              valueType="Spot??eba za uplynul?? m??s??c"
            />
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default Home;
