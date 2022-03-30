import React, { useState } from "react";
import SideBar from "./nav/SideBar";
import Home from "./sections/Home";

import classes from "./Content.module.css";
import Rooms from "./sections/Rooms";
import Statistics from "./sections/Statistics";

const Content = () => {
  const [section, setSection] = useState(1);

  const handleChangeSection = (section_id) => {
    setSection(parseInt(section_id));
  };

  return (
    <div className={`${classes.appWrapper}`}>
      <SideBar changeSection={handleChangeSection} currentSection={section}/>

      {section === 1 && <Home /> }
      {section === 2 && <Rooms /> }
      {section === 3 && <Statistics /> }
    </div>
  );
};

export default Content;
