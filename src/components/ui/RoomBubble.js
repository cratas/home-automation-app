import classes from "./Bubble.module.css";
import { Button } from "react-bootstrap";


import {
  MdOutlineMobileOff,
  MdOutlineMobileFriendly,
  MdReportGmailerrorred,
} from "react-icons/md";

const RoomBubble = (props) => {


  
  return (
    <div className={classes.bubble}>
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
            <span style={{ fontWeight: "bold" }}>1</span> aktivní
          </h6>
        </div>
        <div className={classes.statusWrapper}>
          <MdOutlineMobileOff size={20} style={{marginLeft: '1px'}}/>
          <h6>
            <span style={{ fontWeight: "bold"}}>2</span> neaktivní
          </h6>
        </div>
        <div className={classes.statusWrapper}>
          <MdReportGmailerrorred size={24} style={{ color: "red", marginTop: '-3px'}} />
          <h6>
            <span style={{ fontWeight: "bold" }}>0</span> neodpovídá
          </h6>
        </div>
      </div>
    </div>
  );
};

export default RoomBubble;
