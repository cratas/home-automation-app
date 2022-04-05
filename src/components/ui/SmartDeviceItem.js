import classes from "./Bubble.module.css";
import { Form } from "react-bootstrap";
import { useState } from "react";

import { FaRegLightbulb } from "react-icons/fa";
import { RiWindyFill, RiFireLine } from "react-icons/ri";

import axios from "axios";

const SmartDeviceItem = (props) => {
  const [isActive, setIsActive] = useState(props.isActive);

  const smartDeviceItemStyle = isActive
    ? `${classes.smartDeviceItem} ${classes.active}`
    : `${classes.smartDeviceItem}`;

  const handeFormCheck = () => {
    setIsActive((oldState) => !oldState);

    axios
      .post("http://localhost:8000/api/device/status/", {
        id: props.deviceId,
        state: !isActive,
        isSmartDevice: true,
      })
      .then((res) => {
        let incomingData = res.data;
        console.log(incomingData);
      })
      .catch((e) => console.log(e));
  };

  let icon;
  if (props.type === "LIGHT") {
    icon = <FaRegLightbulb size={20} className={classes.smartDeviceIcon} />;
  } else if (props.type === "HEATING") {
    icon = <RiFireLine size={20} className={classes.smartDeviceIcon} />;
  } else {
    icon = <RiWindyFill size={20} className={classes.smartDeviceIcon} />;
  }

  return (
    <div className={smartDeviceItemStyle}>
      <div>
        {icon}
        <span>{props.name}</span>
      </div>

      <div>
        <Form.Check
          type="switch"
          id="custom-switch"
          className={classes.formCheck}
          checked={isActive}
          onChange={handeFormCheck}
        />
      </div>
    </div>
  );
};

export default SmartDeviceItem;
