import { useState, React, useEffect } from "react";

import classes from "./Sections.module.css";
import ExportForm from "../ui/ExportForm";

const Export = (props) => {

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
        <ExportForm />
      </div>
    </div>
  );
};

export default Export;
