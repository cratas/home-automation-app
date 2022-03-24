import classes from "./SideBar.module.css";

const Link = (props) => {
  const activeStyle = props.isActive && `${classes.active}`;

  return (
    <div className={`${classes.link} ${activeStyle}`} onClick={props.onClick} id={props.id}>{props.children}</div>
  );
};

export default Link;
