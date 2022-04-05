import classes from "./Bubble.module.css";
import { Form } from "react-bootstrap";
import { FaRegLightbulb } from "react-icons/fa";
import { RiWindyFill, RiFireLine } from "react-icons/ri";

import SmartDeviceItem from "./SmartDeviceItem";

const SmartDeviceBubble = () => {
  return (
    <div className={classes.bubble} style={{ backgroundColor: "#fff" }}>
      <div className={classes.titleWrapper}>
        <h6>Chytra zařízení</h6>
      </div>
      <div className={classes.smartDeviceContent}>
        <SmartDeviceItem
          icon={
            <FaRegLightbulb size={20} className={classes.smartDeviceIcon} />
          }
          isActive={true}
          name={"Lampa"}
        />
        <SmartDeviceItem
          icon={
            <FaRegLightbulb size={20} className={classes.smartDeviceIcon} />
          }
          name={"Lustr"}
        />
        <SmartDeviceItem
          icon={
            <FaRegLightbulb size={20} className={classes.smartDeviceIcon} />
          }
          name={"LED pásek"}
        />
        <SmartDeviceItem
          icon={<RiFireLine size={20} className={classes.smartDeviceIcon} />}
          name={"Topení"}
          isActive={true}

        />
        <SmartDeviceItem
          icon={<RiWindyFill size={20} className={classes.smartDeviceIcon} />}
          name={"Klima"}
          isActive={true}

        />
      </div>
    </div>
  );
};

export default SmartDeviceBubble;
