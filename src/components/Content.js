import React, { useState } from "react";
import SideBar from "./nav/SideBar";
import Home from "./sections/Home";

import classes from "./Content.module.css";
import Rooms from "./sections/Rooms";
import Statistics from "./sections/Statistics";
import Export from "./sections/Export";
import LoginForm from "./LoginForm";

var options = {
  weekday: "long",
  year: "numeric",
  month: "long",
  day: "numeric",
};

const Content = () => {
  const date = new Date().toLocaleDateString("cs-CZ", options);
  const [section, setSection] = useState(1);
  const [isLogged, setIsLogged] = useState(true);

  const logIn = () => {
    setIsLogged(true);
  }

  const logOut = () => {
    setIsLogged(false);
  }

  const handleChangeSection = (section_id) => {
    setSection(parseInt(section_id));
  };

  const loggedContent = (
    <>
      <SideBar changeSection={handleChangeSection} currentSection={section} logOutHandler={logOut}/>

      <Home date={date} visibility={section === 1 ? true : false} />
      <Rooms visibility={section === 2 ? true : false} />
      <Statistics date={date} visibility={section === 3 ? true : false} />
      <Export date={date} visibility={section === 4 ? true : false} />
    </>
  );

  const loginForm = <LoginForm logInHandler={logIn}/>;

  return (
    <div className={`${classes.appWrapper}`}>
      {isLogged ? loggedContent : loginForm}
    </div>
  );
};

export default Content;
