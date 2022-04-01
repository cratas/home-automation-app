import { Form, Row, Button } from "react-bootstrap";
import { useState, React } from "react";
import { MySelect, MultiValue, Option } from "./Option";
import buttonStyle from "../nav/SideBar.module.css";
import { useEffect } from "react";

const ExportForm = (props) => {
  const [fromDate, setFromDate] = useState(new Date());
  const [untilDate, setUntilDate] = useState(new Date());
  const [selectedDevice, setSelectedDevice] = useState(null);
  const [validated, setValidated] = useState(false);
  const [deviceOptions, setDeviceOptions] = useState([]);

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
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    setValidated(true);
  };
  return (
    <Form
      className="p-5"
      noValidate
      validated={validated}
      onSubmit={handleSubmit}
    >
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
  );
};

export default ExportForm;
