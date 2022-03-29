import { React, useState, useRef } from "react";

import classes from "./Sections.module.css";
import { Carousel, Row, Button } from "react-bootstrap";

import Room from "./Room";


import {
  MdArrowBackIos,
  MdArrowForwardIos,
} from "react-icons/md";

const Rooms = () => {
  const [index, setIndex] = useState(0);
  const ref = useRef(null);

  const onPrevClick = () => {
    ref.current.prev();
  };
  const onNextClick = () => {
    ref.current.next();
  };

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <div className={classes.sectionWrapper}>
      <div className={classes.header}>
        <h5>
          <strong>Přehled místností v domě</strong>
        </h5>

        <div>
          <MdArrowBackIos
            onClick={onPrevClick}
            size={30}
            className={classes.roomIcon}
          />
          <strong>Kuchyně</strong>
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
          <Carousel.Item style={{ height: "100%" }}> 
            <Room />
          </Carousel.Item>
          <Carousel.Item style={{ height: "100%" }}>
            <Room />
          </Carousel.Item>
        </Carousel>
      </div>
    </div>
  );
};

export default Rooms;
