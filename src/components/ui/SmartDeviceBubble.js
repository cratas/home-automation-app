import classes from "./Bubble.module.css";

import SmartDeviceItem from "./SmartDeviceItem";

const SmartDeviceBubble = (props) => {
  const smartDevicesItems = props.smartDevicesData.map((smartDevice) => (
    <SmartDeviceItem
      key={smartDevice.identifier}
      isActive={smartDevice.is_active}
      name={smartDevice.name}
      type={smartDevice.type}
      deviceId={smartDevice.identifier}
    />
  ));

  return (
    <div className={classes.bubble} style={{ backgroundColor: "#fff" }}>
      <div className={classes.titleWrapper}>
        <h6>Chytra zařízení</h6>
      </div>
      <div className={classes.smartDeviceContent}>
        {smartDevicesItems}
      </div>
    </div>
  );
};

export default SmartDeviceBubble;
