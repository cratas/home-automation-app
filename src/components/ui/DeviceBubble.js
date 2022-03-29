import classes from "./Bubble.module.css";
import { Form } from "react-bootstrap";

import { useState } from "react";

const DeviceBubble = (props) => {
  const [isActive, setIsActive] = useState(props.isActive);

  const handeFormCheck = () => {
    setIsActive((oldState) => !oldState);
  };

  var bubbleStyle;
  if (isActive && !props.hasError) {
    bubbleStyle = `${classes.bubble} ${classes.activeDevice}`
  } else if(!isActive && props.hasError) {
    bubbleStyle = `${classes.bubble} ${classes.errorDevice}`
  } else {
    bubbleStyle = `${classes.bubble} ${classes.notActiveDevice}`
  }

  return (
    <div className={bubbleStyle}>
      <div className={classes.titleWrapper}>
        <h6>{props.deviceName}</h6>
        <Form>
          <Form.Check
            type="switch"
            id="custom-switch"
            checked={isActive}
            onChange={handeFormCheck}
          />
        </Form>
      </div>

      <div
        className={classes.bubbleContent}
        style={{
          flexDirection: "column",
          alignItems: "flex-start",
          justifyContent: "flex-end",
        }}
      >
        <div className={`$(classes.statusWrapper) mt-5`}>
          {/* <MdOutlineMobileFriendly size={20} style={{ color: "green" }} /> */}
          <h6>
            Poslední aktualizace
          </h6>
        </div>
        <div className={classes.statusWrapper}>
          {/* <MdOutlineMobileOff size={20} style={{ marginLeft: "1px" }} /> */}
          <h6>
            <span style={{ fontWeight: "bold" }}>dnes 14:32</span>
          </h6>
        </div>

      </div>
    </div>
  );
};

export default DeviceBubble;
