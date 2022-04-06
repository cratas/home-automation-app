import { React, useState, useRef, useEffect } from "react";
import { Carousel } from "react-bootstrap";
import Room from "./Room";
import { MdArrowBackIos, MdArrowForwardIos } from "react-icons/md";
import classes from "./Sections.module.css";

import axios from "axios";

const Rooms = (props) => {
  // index of current house in carousel
  const [index, setIndex] = useState(0);
  // ref on carousel component
  const ref = useRef(null);
  // state for saving loaded data from backend
  const [loadedData, setLoadedData] = useState({ data: [] });
  // state saving current room name
  const [currentRoom, setCurrentRoom] = useState("");

  // useEffect hook executed when component is rendered, get all rooms with data from backend
  useEffect(() => {
    let incomingData;

    axios
      .get("http://localhost:8000/api/rooms/")
      .then((res) => {
        incomingData = res.data;
        setLoadedData({ data: incomingData });
        setCurrentRoom(incomingData[0].name);
      })
      .catch((err) => {
        "error";
      });
  }, []);

  // carousel handler
  const onPrevClick = () => {
    ref.current.prev();
  };

  // carousel handler
  const onNextClick = () => {
    ref.current.next();
  };

  // carousel handler
  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
    setCurrentRoom(loadedData.data[selectedIndex].name);
  };

  // dynamically creating list of rooms bubbles by data from backend
  const roomsList = loadedData.data.map((room) => (
    <Carousel.Item style={{ height: "100%" }} key={room.name}>
      <Room data={room} key={room.name + "1"} />
    </Carousel.Item>
  ));

  return (
    <div
      className={classes.sectionWrapper}
      style={{ display: !props.visibility && "none" }}
    >
      {/*  rendring header with heading and arrows for switching rooms */}
      <div className={classes.header}>
        <h5>
          <strong>Přehled místností v domě</strong>
        </h5>

        <div className={classes.roomsScrollers}>
          <MdArrowBackIos
            onClick={onPrevClick}
            size={30}
            className={classes.roomIcon}
          />
          <strong>{currentRoom}</strong>
          <MdArrowForwardIos
            onClick={onNextClick}
            size={30}
            className={classes.roomIcon}
          />
        </div>
      </div>

      {/* rednering carousel with room bubbles */}
      <div className={classes.contentWrapper}>
        <Carousel
          activeIndex={index}
          onSelect={handleSelect}
          variant="dark"
          indicators={false}
          interval={null}
          ref={ref}
          controls={false}
          style={{
            display: "flex",
            alignItems: "space-around",
            height: "100%",
          }}
        >
          {roomsList}
        </Carousel>
      </div>
    </div>
  );
};

export default Rooms;
