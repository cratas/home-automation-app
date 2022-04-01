import { useState, React } from "react";
import { Form, Col, Row, Button } from "react-bootstrap";
import classes from "./Sections.module.css";
import buttonStyle from "../nav/SideBar.module.css";

import { MySelect, MultiValue, Option } from "../ui/Option";

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

const Export = () => {
  const [fromDate, setFromDate] = useState(new Date());
  const [untilDate, setUntilDate] = useState(new Date());
  const [selectedDevice, setSelectedDevice] = useState(null);

  const handleSelectedDevice = (selected) => {
    setSelectedDevice(selected);

    console.log(selected);
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
          <Form.Group as={Row} className="p-2">
            <Form.Label>
              <strong>Od</strong>
            </Form.Label>
            <Form.Control
              type="date"
              name="date_of_birth"
              onChange={handleFromDate}
              value={fromDate}
            />
          </Form.Group>

          <Form.Group as={Row} className="mt-3 p-2">
            <Form.Label>
              <strong>Do</strong>
            </Form.Label>
            <Form.Control
              type="date"
              name="date_of_birth"
              onChange={handleUntilDate}
              value={untilDate}
            />
          </Form.Group>

          <Form.Group as={Row} className="mt-3">
            <Form.Label style={{marginLeft: '0.5rem'}}>
              <strong>Vybrané senzory</strong>
            </Form.Label>
            <MySelect
              options={colourOptions}
              isMulti
              closeMenuOnSelect={false}
              hideSelectedOptions={false}
              components={{
                Option,
                MultiValue,
              }}
              onChange={handleSelectedDevice}
              allowSelectAll={true}
              value={selectedDevice}
            />
          </Form.Group>
          <Form.Group
            as={Row}
            className="mt-5"
            style={{ display: "flex", justifyContent: "center" }}
          >
            <Button
              variant="primary"
              type="submit"
              className={buttonStyle.button}
              style={{ maxWidth: "12rem" }}
            >
              Exportovat
            </Button>
          </Form.Group>
        </Form>
      </div>
    </div>
  );
};

export default Export;
