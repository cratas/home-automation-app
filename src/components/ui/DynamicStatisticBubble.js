import classes from "./Bubble.module.css";

import React, { useState, useEffect } from "react";
import {
  BarChart,
  Bar,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  Area,
  AreaChart,
  ResponsiveContainer,
} from "recharts";

import axios from "axios";

import { Form } from "react-bootstrap";

const DynamicStatisticBubble = (props) => {
  const [loadedStatistics, setLoadedStatistics] = useState({ data: [] });
  const [statisticsType, setStatisticsType] = useState("Týden");
  const [statisticsDevice, setStatisticsDevice] = useState();


  const handleTypeChange = (type) => {
    setStatisticsType(type);
  };

  const handleDeviceChange = (device) => {
    setStatisticsDevice(device);
  }

  useEffect(() => {
    axios
      .get("http://localhost:8000/api/statistics/device/")
      .then((res) => {
        let incomingData = res.data;
        setLoadedStatistics({ data: incomingData });
        setStatisticsDevice(incomingData[0].name)
      })
      .catch((e) => console.log(e));
  }, []);

  const deviceSelect = loadedStatistics.data.map((device) => (
    <option value={device.name} style={{textAlign: 'left'}}>
      {device.name}
    </option>
  ));

  return (
    <div className={classes.bubble}>
      <div className={classes.titleWrapper}>
        <h6>{props.valueType}</h6>
        <div className={classes.selectsWrapper}>
          <Form.Select
            aria-label="Default select example"
            className={classes.choiceField}
            style={{ width: "19rem" , marginRight: '2rem'}}
            onChange={(e) => {
              handleDeviceChange(e.target.value);
            }}
          >
            {deviceSelect}
          </Form.Select>
          <Form.Select
            aria-label="Default select example"
            className={classes.choiceField}
            onChange={(e) => {
              handleTypeChange(e.target.value);
            }}
          >
            <option value="Týden">Týden</option>
            <option value="Měsíc">Měsíc</option>
          </Form.Select>
        </div>
      </div>

      <div className={classes.bubbleContent}>
        <ResponsiveContainer width="100%" height="95%">
          <AreaChart
            data={loadedStatistics}
            margin={{
              top: 10,
              right: 30,
              left: 0,
              bottom: 0,
            }}
          >
            <Legend />
            <CartesianGrid vertical={false} stroke="#ebebeb" />
            <XAxis dataKey="day" />
            <YAxis />
            <Tooltip />
            {/* <Area
              type="monotone"
              dataKey={props.dataKey[0]}
              stroke="var(--color-light-text)"
              strokeWidth={2}
              fill="#8884d8"
            />
            <Area
              type="monotone"
              dataKey={props.dataKey[1]}
              stroke="var(--color-light-text)"
              strokeWidth={2}
              fill="#82ca9d"
            /> */}
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default DynamicStatisticBubble;
