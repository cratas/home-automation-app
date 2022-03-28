import { React, useState, useRef } from "react";

import classes from "./Sections.module.css";
import { Carousel, Row, Button } from "react-bootstrap";

import ValueBubble from "./../ui/ValueBubble.js";

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
        <h4>
          <strong>Přehled místností v domě</strong>
        </h4>
      </div>

      <div className={classes.contentWrapper}>
        <Button variant="primary" onClick={onPrevClick}>
          Previous
        </Button>
        <Button variant="primary" onClick={onNextClick}>
          Next
        </Button>
        <Carousel
          activeIndex={index}
          onSelect={handleSelect}
          variant="dark"
          indicators={false}
          ref={ref}
          controls={false}
        >
          <Carousel.Item>
            <div className={classes.roomWrapper}>
              <Row className="h-25" style={{ backgroundColor: "red" }}></Row>
            </div>
          </Carousel.Item>
          <Carousel.Item>
            <div className={classes.roomWrapper}>
              <Row className="h-25" style={{ backgroundColor: "red" }}>
                sdf
              </Row>
              <Row className="h-25" style={{ backgroundColor: "red" }}>
                sdf
              </Row>
            </div>
          </Carousel.Item>
        </Carousel>
      </div>
    </div>
  );
};

export default Rooms;
