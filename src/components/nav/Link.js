import classes from "./SideBar.module.css";

// link components for switching between section in sidebar
const Link = (props) => {
  // style of link depends of isActive state 
  const activeStyle = props.isActive && `${classes.active}`;

  return (
    <div className={`${classes.link} ${activeStyle}`} onClick={props.onClick} id={props.id}>{props.children}</div>
  );
};

export default Link;
