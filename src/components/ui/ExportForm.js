import { Form, Row, Button } from "react-bootstrap";
import { useState, React, useRef } from "react";
import { MySelect, MultiValue, Option } from "./Option";
import buttonStyle from "../nav/SideBar.module.css";
import { useEffect } from "react";
import axios from "axios";

import { CSVLink } from "react-csv";

const ExportForm = (props) => {
  const [fromDate, setFromDate] = useState(new Date());
  const [untilDate, setUntilDate] = useState(new Date());
  const [selectedDevice, setSelectedDevice] = useState([]);
  const [deviceOptions, setDeviceOptions] = useState([]);
  const [isShownWarning, setIsShownWarning] = useState(false);
  const [csvData, setCsvData] = useState();
  const csvLink = useRef();

  useEffect(() => {
    let loadedOptions = [];

    props.options.map((device) =>
      loadedOptions.push({ value: device.id, label: device.name })
    );

    setDeviceOptions(loadedOptions);
  }, []);

  const handleSelectedDevice = (selected) => {
    setSelectedDevice(selected);
  };

  const handleFromDate = (event) => {
    setFromDate(event.target.value);
  };

  const handleUntilDate = (event) => {
    setUntilDate(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const form = event.currentTarget;

    if (form.checkValidity() === false || selectedDevice.length < 1) {
      setIsShownWarning(true);
    } else {
      setIsShownWarning(false);

      axios
        .post("http://localhost:8000/api/export/", {
          devices: selectedDevice,
          from: fromDate,
          until: untilDate,
        })
        .then((res) => {
          let incomingData = res.data;
          setCsvData(incomingData);
        })
        .catch((e) => console.log(e))
        .then(() => {
          if (csvData.length > 0) csvLink.current.link.click();
        });
    }
  };

  return (
    <Form className="p-5 pt-4" onSubmit={handleSubmit}>
      <Form.Group as={Row} className="p-2">
        <Form.Label>
          <strong>Od</strong>
        </Form.Label>
        <Form.Control
          required
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
          required
          type="date"
          name="date_of_birth"
          onChange={handleUntilDate}
          value={untilDate}
        />
      </Form.Group>
      <Form.Group as={Row} className="mt-3">
        <Form.Label style={{ marginLeft: "0.5rem" }}>
          <strong>Vybrané senzory</strong>
        </Form.Label>
        <MySelect
          options={deviceOptions}
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
        {isShownWarning && (
          <p style={{ marginLeft: "0.5rem", color: "red" }}>
            Vyberte prosím alespoň jeden senzor.
          </p>
        )}
        {csvData?.length < 1 && (
          <p style={{ marginLeft: "0.5rem", color: "red" }}>
            Ve vybraném časovém intervalu nebyly pro vybrané senzory naměřeny
            žádné hodnoty.
          </p>
        )}
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
        {csvData && (
          <CSVLink
            data={csvData}
            filename="sensors_data.csv"
            separator={","}
            style={{ visibility: "hidden" }}
            ref={csvLink}
            target="_blank"
          >
            Download me
          </CSVLink>
        )}
      </Form.Group>
    </Form>
  );
};

export default ExportForm;
