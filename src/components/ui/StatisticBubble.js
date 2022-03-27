import classes from "./Bubble.module.css";

import React, { PureComponent } from "react";
import {
  BarChart,
  Bar,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const data = [
  {
    name: "Po",
    uv: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: "Út",
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: "St",
    uv: 2000,
    pv: 9800,
    amt: 2290,
  },
  {
    name: "Čt",
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    name: "Pá",
    uv: 1890,
    pv: 4800,
    amt: 2181,
  },
  {
    name: "So",
    uv: 2390,
    pv: 3800,
    amt: 2500,
  },
  {
    name: "Ne",
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
];

const StatisticBubble = (props) => {
  return (
    <div className={classes.bubble}>
      <div className={classes.titleWrapper}>
        <h6>{props.valueType}</h6>
      </div>

      <div className={classes.bubbleContent}>
        <ResponsiveContainer width="95%" height="80%">
          <BarChart
            width={500}
            height={300}
            data={data}
            margin={{
              top: 5,
              right: 30,
              left: 20,
              bottom: 5,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="pv" fill="#8884d8" />
            <Bar dataKey="uv" fill="#82ca9d" />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default StatisticBubble;
