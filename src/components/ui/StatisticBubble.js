import { React } from "react";
import { Form } from "react-bootstrap";
import {
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  Area,
  AreaChart,
  ResponsiveContainer,
} from "recharts";

import classes from "./Bubble.module.css";
import { AiOutlineWarning } from "react-icons/ai";
import randomColor from "randomcolor";

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
              <option value="Měsíc">Měsíc</option>
              <option value="Týden">Týden</option>
            </Form.Select>
          </div>
        )}
      </div>

      <div className={classes.bubbleContent}>
        <ResponsiveContainer width="100%" height="95%">
          {props.data.data.length === 0 ? (
            <text className={classes.chartNoData}>
              <AiOutlineWarning
                size={40}
                style={{ color: "var(--color-orange)" }}
              />
              Nebyly naměřeny žádné hodnoty.
            </text>
          ) : (
            <AreaChart
              data={props.data.data}
              margin={{
                top: 10,
                right: 30,
                left: 0,
                bottom: 0,
              }}
            >
              <Legend
                formatter={(value, entry, index) => (
                  <span
                    style={{
                      color: "var(--color-light-text)",
                      fontWeight: "bold",
                      fontFamily: "var(--font-family)",
                    }}
                  >
                    {value}
                  </span>
                )}
              />
              <CartesianGrid vertical={false} stroke="#ebebeb" />
              <XAxis dataKey="day" />
              <YAxis />
              <Tooltip />
              <Area
                type="monotone"
                dataKey={props.dataKey[0]}
                stroke="var(--color-light-text)"
                strokeWidth={2}
                opacity={1}
                fill={randomColor()}
              />
              <Area
                type="monotone"
                dataKey={props.dataKey[1]}
                stroke="var(--color-light-text)"
                // opacity={1}
                strokeWidth={2}
                fill={randomColor()}
              />
            </AreaChart>
          )}
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default StatisticBubble;
