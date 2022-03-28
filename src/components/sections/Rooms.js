import React from "react";

import classes from "./Sections.module.css";

const Rooms = () => {
  return (
    <div className={classes.sectionWrapper}>
      <div className={classes.header}>
        <h4><strong>Přehled místností v domě</strong></h4>
      </div>
    </div>
  );
};

export default Rooms;
