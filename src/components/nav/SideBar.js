import React from "react";

import classes from "./SideBar.module.css";

import { Button } from "react-bootstrap";

import { RiHomeWifiLine } from "react-icons/ri";
import { MdQueryStats } from "react-icons/md";
import { MdOutlineEdgesensorLow, MdOutlineSpaceDashboard } from "react-icons/md";
import { SiHomeassistant } from "react-icons/si";
import { RiLogoutBoxLine } from "react-icons/ri";

import Link from "./Link";

const SideBar = (props) => {
  const changeSection = (e) => {
    const section = e.currentTarget.id;
    props.changeSection(section);
  };

  const isHomeActive = props.currentSection === 1 ? true : false;
  const isRoomsActive = props.currentSection === 2 ? true : false;
  const isDevicesActive = props.currentSection === 3 ? true : false;
  const isStatisticsActive = props.currentSection === 4 ? true : false;

  return (
    <div className={`${classes.sideBar}`}>
      <div className={classes.logo}>
        <SiHomeassistant size={40} />
        <p className='mt-1'>Smart home</p>
      </div>
      <div className={classes.links}>
        <Link isActive={isHomeActive} onClick={changeSection} id="1">
          <MdOutlineSpaceDashboard size={20} className={classes.icon}/>
          <span className={classes.linkText}>Přehled</span>
        </Link>

        <Link isActive={isRoomsActive} onClick={changeSection} id="2">
          <RiHomeWifiLine size={20} className={classes.icon}/>
          <span className={classes.linkText}>Místnosti</span>
        </Link>

        <Link isActive={isDevicesActive} onClick={changeSection} id="3">
          <MdOutlineEdgesensorLow size={20} className={classes.icon}/>
          <span className={classes.linkText}>Senzory</span>
        </Link>

        <Link isActive={isStatisticsActive} onClick={changeSection} id="4">
          <MdQueryStats size={20} className={classes.icon} />
          <span className={classes.linkText}>Statistiky</span>
        </Link>
      </div>
      <Button variant="primary" className={classes.button} active >
        <RiLogoutBoxLine size={20} />
        <span className={classes.linkText}>Odhlásit se</span>
      </Button>
    </div>
  );
};

export default SideBar;
