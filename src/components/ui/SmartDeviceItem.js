import classes from "./Bubble.module.css";
import { Form } from "react-bootstrap";
import { useState } from "react";
import { useEffect } from "react";

const SmartDeviceItem = (props) => {
  const [isActive, setIsActive] = useState(props.isActive);

  const smartDeviceItemStyle = isActive
    ? `${classes.smartDeviceItem} ${classes.active}`
    : `${classes.smartDeviceItem}`;


    const handeFormCheck = () => {
        setIsActive((oldState) => !oldState);
    };

    useEffect(() => {
        setIsActive(props.isActive)
    }, [])

  return (
    <div className={smartDeviceItemStyle}>
      <div>
        {props.icon}
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
