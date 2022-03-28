import classes from "./Bubble.module.css";

import { FiMoreHorizontal } from "react-icons/fi";

const HumididtyBubble = (props) => {
  const bubbleClasses = props.darkTheme
    ? `${classes.bubble} ${classes.darkBubble}`
    : `${classes.bubble}`;

  return (
    <div className={bubbleClasses}>
      <div className={classes.titleWrapper}>
        <h6>{props.valueType}</h6>
        <FiMoreHorizontal size={25} style={{ cursor: "pointer" }} />
      </div>

      <div className={classes.bubbleContent}>
        <div className={classes.leftSide}>
          <div className={classes.iconWrapper} style={props.customStyle}>
            {props.icon}
          </div>
        </div>
        <div className={classes.rightSide}>
          {props.plus}
          <span className={classes.valueText}>{props.value}</span>
          {props.unit}
        </div>
      </div>
    </div>
  );
};

export default HumididtyBubble;
