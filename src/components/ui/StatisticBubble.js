import classes from "./Bubble.module.css";

import React, { useState } from "react";
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

import { Form } from "react-bootstrap";

const StatisticBubble = (props) => {
  return (
    <div className={classes.bubble}>
      <div className={classes.titleWrapper}>
        <h6>{props.valueType}</h6>
        {props.type && (
          <div>
            <Form.Select
              aria-label="Default select example"
              className={`${classes.choiceField} ${classes.small}`}
              value={props.type}
              onChange={(e) => {
                props.onChangeType(e.target.value);
              }}
            >
              <option value="Týden">Týden</option>
              <option value="Měsíc">Měsíc</option>
            </Form.Select>
          </div>
        )}
      </div>

      <div className={classes.bubbleContent}>
        <ResponsiveContainer width="100%" height="95%" >
          <AreaChart
            data={props.data.data}
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
            <Area
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
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default StatisticBubble;
