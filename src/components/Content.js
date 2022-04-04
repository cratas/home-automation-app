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

      <Home date={date} visibility={section === 1 ? true : false}/> 
      <Rooms visibility={section === 2 ? true : false}/> 
      <Statistics date={date} visibility={section === 3 ? true : false}/>
      <Export date={date} visibility={section === 4 ? true : false}/>

    </div>
  );
};

export default Content;
