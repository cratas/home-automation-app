import classes from "./Bubble.module.css";

import { FaTemperatureHigh } from "react-icons/fa";

import { CircularProgressbarWithChildren  } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

const HumididtyBubble = () => {
  const percentage = 66;
  return (
    <div className={classes.bubble}>
      <div className={classes.bubbleIconWrapper}>
        <CircularProgressbarWithChildren value={percentage}>
            <FaTemperatureHigh size={'25%'}/>
        </CircularProgressbarWithChildren >
      </div>
      <div className={classes.bubbleContent}>
        <h6>Vnitřní teplota</h6>
        +25
      </div>
    </div>
  );
};

export default HumididtyBubble;
