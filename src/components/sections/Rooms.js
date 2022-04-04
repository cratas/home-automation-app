import { React, useState, useRef, useEffect } from "react";

import classes from "./Sections.module.css";
import { Carousel } from "react-bootstrap";

import Room from "./Room";

import axios from "axios";

import { MdArrowBackIos, MdArrowForwardIos } from "react-icons/md";

const Rooms = (props) => {
  const [index, setIndex] = useState(0);
  const ref = useRef(null);
  const [loadedData, setLoadedData] = useState({ data: [] });
  const [currentRoom, setCurrentRoom] = useState("");

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

  const onPrevClick = () => {
    ref.current.prev();
  };
  const onNextClick = () => {
    ref.current.next();
  };

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
    setCurrentRoom(loadedData.data[selectedIndex].name);
  };

  const roomsList = loadedData.data
    .map((room) => (
      <Carousel.Item style={{ height: "100%" }}>
        <Room data={room}/>
      </Carousel.Item>
    ));

  return (
    <div className={classes.sectionWrapper} style={{display: !props.visibility && 'none'}}>
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
