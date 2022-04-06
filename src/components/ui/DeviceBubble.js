import classes from "./Bubble.module.css";
import { Form } from "react-bootstrap";
import axios from "axios";

import { useState } from "react";

var options = {
  year: "numeric",
  month: "numeric",
  day: "numeric",
};

const DeviceBubble = (props) => {
  const [isActive, setIsActive] = useState(props.isActive);

  var date;
  if (props.lastTime !== null) {
    date = new Date(props.lastTime).toLocaleTimeString("cs-CZ", options);
  } else {
    date = "Není známo";
  }

  const handeFormCheck = () => {
    setIsActive((oldState) => !oldState);

    axios
      .post("http://localhost:8000/api/device/status/", {
        id: props.deviceId,
        state: !isActive,
      })
      .then((res) => {
        let incomingData = res.data;
        console.log(incomingData);
      })
      .catch((e) => console.log(e));
  };

  var bubbleStyle;
  if (isActive && !props.hasError) {
    bubbleStyle = `${classes.bubble} ${classes.activeDevice}`;
  } else if (!isActive && props.hasError) {
    bubbleStyle = `${classes.bubble} ${classes.errorDevice}`;
  } else {
    bubbleStyle = `${classes.bubble} ${classes.notActiveDevice}`;
  }

  return (
    <div className={bubbleStyle}>
      <div className={classes.titleWrapper}>
        <h6>{props.deviceName}</h6>
        <Form>
          <Form.Check
            disabled={props.hasError}
            type="switch"
            id="custom-switch"
            checked={isActive}
            onChange={handeFormCheck}
            className={classes.formCheck}
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
          <h6>Poslední aktualizace</h6>
        </div>
        <div className={classes.statusWrapper}>
          <h6>
            <span style={{ fontWeight: "bold" }}>{date}</span>
          </h6>
        </div>
      </div>
    </div>
  );
};

export default DeviceBubble;
