import { useState, React } from "react";
import { Form, Col, Row } from "react-bootstrap";
import classes from "./Sections.module.css";
// import DatePicker from 'react-date-picker';

import MySelect from "../ui/Option";
import { default as ReactSelect } from "react-select";

import { components } from "react-select";

const colourOptions = [
  { value: "ocean1", label: "Ocean" },
  { value: "blue", label: "Blue" },
  { value: "purple", label: "Purple" },
  { value: "red", label: "Red" },
  { value: "orange", label: "Orange" },
  { value: "yellow", label: "Yellow" },
  { value: "green", label: "Green" },
  { value: "forest", label: "Forest" },
  { value: "slate", label: "Slate" },
  { value: "silver", label: "Silver" },
];

const Option = (props) => {
  return (
    <div>
      <components.Option {...props}>
        <input
          type="checkbox"
          checked={props.isSelected}
          onChange={() => null}
        />{" "}
        <label>{props.label}</label>
      </components.Option>
    </div>
  );
};

const MultiValue = (props) => (
  <components.MultiValue {...props}>
    <span>{props.data.label}</span>
  </components.MultiValue>
);


const Export = () => {
  const [fromDate, setFromDate] = useState(new Date());
  const [untilDate, setUntilDate] = useState(new Date());
  const [selectedDevice, setSelectedDevice] = useState(null);

  const handleSelectedDevice = (selected) => {
    setSelectedDevice(selected)

    console.log(selected)
  };

  const handleFromDate = (event) => {
    setFromDate(event.target.value);
  };

  const handleUntilDate = (event) => {
    setUntilDate(event.target.value);
  };

  return (
    <div className={classes.sectionWrapper}>
      <div className={classes.header}>
        <div className={classes.profile}>
          <h5>
            <strong>Export naměřených hodnot</strong>
          </h5>
        </div>
      </div>

      <div className={`p-2 ${classes.contentWrapper} ${classes.exportWrapper}`}>
        <Form className="p-5">
          <Form.Group as={Row}>
            <Col>
              <Form.Label className={{}}>
                <strong>Od</strong>
              </Form.Label>
            </Col>
            <Col>
              <Form.Control
                type="date"
                name="date_of_birth"
                onChange={handleFromDate}
                value={fromDate}
                style={{ maxWidth: "13rem" }}
              />
            </Col>
          </Form.Group>
          <hr />
          <Form.Group as={Row}>
            <Col>
              <Form.Label>
                <strong>Do</strong>
              </Form.Label>
            </Col>
            <Col>
              <Form.Control
                type="date"
                name="date_of_birth"
                onChange={handleUntilDate}
                value={untilDate}
                style={{ maxWidth: "13rem" }}
              />
            </Col>
          </Form.Group>
          <hr />

          <Form.Group>
            <MySelect
              options={colourOptions}
              isMulti
              closeMenuOnSelect={false}
              hideSelectedOptions={false}
              components={{ Option, MultiValue }}
              onChange={handleSelectedDevice}
              allowSelectAll={true}
              value={selectedDevice}
            />
          </Form.Group>
        </Form>
      </div>
    </div>
  );
};

export default Export;
