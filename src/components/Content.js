import React, { useState } from "react";
import SideBar from "./nav/SideBar";
import Home from "./sections/Home";

import classes from "./Content.module.css";
import Rooms from "./sections/Rooms";
import Statistics from "./sections/Statistics";
import Export from "./sections/Export";

var options = {
  weekday: "long",
  year: "numeric",
  month: "long",
  day: "numeric",
};


const Content = () => {
  const date = new Date().toLocaleDateString("cs-CZ", options);
  const [section, setSection] = useState(1);

  const handleChangeSection = (section_id) => {
    setSection(parseInt(section_id));
  };

  return (
    <div className={`${classes.appWrapper}`}>
      <SideBar changeSection={handleChangeSection} currentSection={section}/>

      {section === 1 && <Home date={date}/> }
      {section === 2 && <Rooms /> }
      {section === 3 && <Statistics /> }
      {section === 4 && <Export date={date}/> }

    </div>
  );
};

export default Content;
