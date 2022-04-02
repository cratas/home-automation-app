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
            data={props.data}
            margin={{
              top: 5,
              right: 30,
              left: 20,
              bottom: 5,
            }}
          >
            <CartesianGrid vertical={false} stroke="#ebebeb"/>
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend  />
            <Bar dataKey="voda" fill="var(--color-blue)"/>
            <Bar dataKey="elektrina" fill="var(--color-orange)" />
            <Bar dataKey="plyn" fill="var(--color-graph-grey)" barSize={5}/>

          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default StatisticBubble;
