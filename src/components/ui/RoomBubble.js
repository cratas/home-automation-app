import classes from "./Bubble.module.css";

import {
  MdOutlineMobileOff,
  MdOutlineMobileFriendly,
  MdReportGmailerrorred,
} from "react-icons/md";

const RoomBubble = (props) => {
  var bubbleStyle;
  if (props.errorCount > 0) {
    bubbleStyle = `${classes.bubble} ${classes.errorRoom}`;
  } else if (props.activeCount > 0 && props.errorCount === 0) {
    bubbleStyle = `${classes.bubble} ${classes.activeRoom}`;
  } else if (
    props.nonActiveCount > 0 &&
    props.activeCount === 0 &&
    props.errorCount === 0
  ) {
    bubbleStyle = `${classes.bubble} ${classes.notActiveRoom}`;
  }

  return (
    <div className={bubbleStyle}>
      <div className={classes.titleWrapper}>
        <h6>{props.valueType}</h6>
      </div>

      <div
        className={classes.bubbleContent}
        style={{
          flexDirection: "column",
          alignItems: "flex-start",
          justifyContent: "flex-end",
        }}
      >
        <div className={classes.statusWrapper}>
          <MdOutlineMobileFriendly size={20} style={{ color: "green" }} />
          <h6>
            <span style={{ fontWeight: "bold" }}>{props.activeCount}</span>{" "}
            aktivní
          </h6>
        </div>
        <div className={classes.statusWrapper}>
          <MdOutlineMobileOff size={20} style={{ marginLeft: "1px" }} />
          <h6>
            <span style={{ fontWeight: "bold" }}>{props.nonActiveCount}</span>{" "}
            neaktivní
          </h6>
        </div>
        <div className={classes.statusWrapper}>
          <MdReportGmailerrorred
            size={24}
            style={{ color: "red", marginTop: "-3px" }}
          />
          <h6>
            <span style={{ fontWeight: "bold" }}>{props.errorCount}</span>{" "}
            neodpovídá
          </h6>
        </div>
      </div>
    </div>
  );
};

export default RoomBubble;
