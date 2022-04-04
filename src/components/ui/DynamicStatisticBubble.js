import classes from "./Bubble.module.css";
import React, { useState, useEffect } from "react";
import {
  BarChart,
  Bar,
  Cell,
  Line,
  LineChart,
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
import randomColor from "randomcolor";

import { Form } from "react-bootstrap";

const DynamicStatisticBubble = (props) => {
  const [loadedDevices, setloadedDevices] = useState([]);
  const [loadedStatistics, setLoadedStatistics] = useState([]);
  const [loadedHeaders, setLoadedHeaders] = useState([]);

  const [statisticsType, setStatisticsType] = useState("Měsíc");
  const [statisticsDevice, setStatisticsDevice] = useState();
  const [chartType, setChartType] = useState("AREA");

  const handleTypeChange = (type) => {
    setStatisticsType(type);
  };

  const handleDeviceChange = (device) => {
    setStatisticsDevice(device);
  };

  const handleChartTypeChange = (chartType) => {
    setChartType(chartType);
  };

  useEffect(() => {
    const interval = statisticsType === "Týden" ? 7 : 30;

    let incomingData;

    axios
      .get("http://localhost:8000/api/statistics/device/", {
        params: {
          device: statisticsDevice,
          interval: interval,
        },
      })
      .then((res) => {
        incomingData = res.data;
        setLoadedStatistics(incomingData.data);
        setLoadedHeaders(incomingData.headers);
      })
      .catch((err) => {
        "error";
      });
  }, [statisticsDevice, statisticsType]);

  useEffect(() => {
    let incomingDevices;

    axios
      .get("http://localhost:8000/api/export/")
      .then((res) => {
        incomingDevices = res.data;
        setloadedDevices(incomingDevices);
        setStatisticsDevice(incomingDevices[0].name);
      })
      .then((res) => {
        axios
          .get("http://localhost:8000/api/statistics/device/", {
            params: {
              device: incomingDevices[0].id,
              interval: 30,
            },
          })
          .then((res) => {
            let incomingData = res.data;
            setLoadedStatistics(incomingData.data);
            setLoadedHeaders(incomingData.headers);
          })
          .catch((err) => {
            "error";
          });
      })
      .catch((e) => console.log(e));
  }, []);

  const deviceSelect = loadedDevices.map((device) => (
    <option value={device.id} style={{ textAlign: "left" }}>
      {device.name}
    </option>
  ));

  let chart;
  if (chartType === "AREA") {
    chart = (
      <AreaChart
        data={loadedStatistics}
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
        {loadedHeaders.map((value) => (
          <Area
            type="monotone"
            dataKey={value}
            strokeWidth={2}
            stroke="var(--color-light-text)"
            // strokeOpacity="1"
            fill={randomColor()}
          />
        ))}
      </AreaChart>
    );
  } else if (chartType === "LINE") {
    chart = (
      <LineChart
        data={loadedStatistics}
        margin={{
          top: 10,
          right: 30,
          left: 0,
          bottom: 0,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="day" />
        <YAxis />
        <Tooltip />
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
        {loadedHeaders.map((value) => (
          <Line
            type="monotone"
            dataKey={value}
            strokeWidth={2}
            stroke={randomColor()}
            activeDot={{ r: 8 }}
          />
        ))}
      </LineChart>
    );
  } else if (chartType === "BAR") {
    chart = (
      <BarChart
        data={loadedStatistics}
        margin={{
          top: 10,
          right: 30,
          left: 0,
          bottom: 0,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="day" />
        <YAxis />
        <Tooltip />
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
        {loadedHeaders.map((value) => (
          <Bar dataKey={value} fill={randomColor()} />
        ))}
      </BarChart>
    );
  }

  return (
    <div className={classes.bubble}>
      <div className={classes.titleWrapper}>
        <h6>{props.valueType}</h6>
        <div className={classes.selectsWrapper}>
          <Form.Select
            className={`${classes.choiceField} ${classes.medium}`}
            style={{ marginRight: "1rem" }}
            onChange={(e) => {
              handleChartTypeChange(e.target.value);
            }}
          >
            <option value="AREA">Plošný graf</option>
            <option value="LINE">Čárový graf</option>
            <option value="BAR">Sloupcový graf</option>
          </Form.Select>
          <Form.Select
            className={classes.choiceField}
            style={{ width: "12rem", marginRight: "1rem" }}
            onChange={(e) => {
              handleDeviceChange(e.target.value);
            }}
          >
            {deviceSelect}
          </Form.Select>
          <Form.Select
            className={`${classes.choiceField} ${classes.medium}`}
            onChange={(e) => {
              handleTypeChange(e.target.value);
            }}
          >
            <option value="Měsíc">Měsíc</option>
            <option value="Týden">Týden</option>
          </Form.Select>
        </div>
      </div>

      <div className={classes.bubbleContent}>
        <ResponsiveContainer width="100%" height="95%">
          {chart}
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default DynamicStatisticBubble;
