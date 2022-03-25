import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import classes from "./Sections.module.css";

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
        <Row className="h-50" style={{backgroundColor: 'var(--color-platinum)'}}>
          <Col>1 of 2</Col>
        </Row>
        <Row className="h-50" style={{backgroundColor: 'var(--color-platinum)'}}>
          <Col>1 of 2</Col>
        </Row>
      </div>
    </div>
  );
};

export default Home;
