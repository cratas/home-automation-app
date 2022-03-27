import classes from "./Bubble.module.css";

const StatisticBubble = props => {
  return (
    <div className={classes.bubble}>
      <div className={classes.titleWrapper}>
        <h6>{props.valueType}</h6>
      </div>
    </div>
  );
};

export default StatisticBubble;
