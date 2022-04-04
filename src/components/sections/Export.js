import { useState, React, useEffect } from "react";

import classes from "./Sections.module.css";
import ExportForm from "../ui/ExportForm";


import axios from "axios";

const Export = (props) => {
  const [loadedData, setLoadedData] = useState({ data: [] });

  useEffect(() => {
    let incomingData;

    axios
      .get("http://localhost:8000/api/export/")
      .then((res) => {
        incomingData = res.data;
        setLoadedData({ data: incomingData });
      })
      .catch((err) => {
        "error";
      });
  }, []);

  return (
    <div className={classes.sectionWrapper} style={{display: !props.visibility && 'none', padding : '0 0.14rem'}}>
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
