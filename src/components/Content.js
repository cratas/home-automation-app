import React, { useState } from "react";
import SideBar from "./nav/SideBar";
import Home from "./sections/Home";
import Rooms from "./sections/Rooms";
import Statistics from "./sections/Statistics";
import Export from "./sections/Export";
import LoginForm from "./LoginForm";
import classes from "./Content.module.css";

// format for date
var options = {
  weekday: "long",
  year: "numeric",
  month: "long",
  day: "numeric",
};

// main component with whole content
const Content = () => {
  const date = new Date().toLocaleDateString("cs-CZ", options); // current date
  const [section, setSection] = useState(1); // visible section state
  const [isLogged, setIsLogged] = useState(true); // is user logged or not

  const logIn = () => {
    setIsLogged(true);
  };

  const logOut = () => {
    setIsLogged(false);
  };

  // function handling section switch
  const handleChangeSection = (section_id) => {
    setSection(parseInt(section_id));
  };

  // main content components
  const loggedContent = (
    <>
      <SideBar
        changeSection={handleChangeSection}
        currentSection={section}
        logOutHandler={logOut}
      />

      <Home date={date} visibility={section === 1 ? true : false} />
      <Rooms visibility={section === 2 ? true : false} />
      <Statistics date={date} visibility={section === 3 ? true : false} />
      <Export date={date} visibility={section === 4 ? true : false} />
    </>
  );

  // login form component
  const loginForm = <LoginForm logInHandler={logIn} />;

  // returning main content or login form
  return (
    <div className={`${classes.appWrapper}`}>
      {isLogged ? loggedContent : loginForm}
    </div>
  );
};

export default Content;
