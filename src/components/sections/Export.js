import { useState, React, useEffect } from "react";

import classes from "./Sections.module.css";
import ExportForm from "../ui/ExportForm";

import { Spinner } from "react-bootstrap";


import axios from "axios";

const Export = (props) => {
  const [loadedData, setLoadedData] = useState({ data: [] });
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    let incomingData;

    axios
      .get("http://localhost:8000/api/export/")
      .then((res) => {
        incomingData = res.data;
        setLoadedData({ data: incomingData });
        setIsLoaded(true);
      })
      .catch((err) => {
        "error";
      });
  }, []);

  return !isLoaded ? (
    <div className={`${classes.sectionWrapper} ${classes.spinnerWrapper}`}>
      <Spinner animation="border" />
    </div>
  ) : (
    <div className={classes.sectionWrapper}>
      <div className={classes.header}>
        <div className={classes.profile}>
          <h5>
            <strong>Export naměřených hodnot</strong>
          </h5>
        </div>
        <div className={classes.date}>
          <span style={{ fontWeight: "bold" }}>{props.date}</span>
        </div>
      </div>

      <div className={`p-2 ${classes.contentWrapper} ${classes.exportWrapper}`}>
        <ExportForm options={loadedData.data}/>
      </div>
    </div>
  );
};

export default Export;
