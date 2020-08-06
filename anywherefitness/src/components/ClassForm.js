import React from "react";
import { ButtonGreen, Form2, Label, Input } from "./login";
import { axiosWithAuth } from "./axiosWithAuth";

function ClassForm(props) {
  const [formData, setFormData] = React.useState({
    name: props.class.name,
    type: props.class.type,
    location: props.class.location,
    intensitylvl: props.class.intensitylvl,
    length_minutes: props.class.length_minutes,
    current_size: props.class.current_size,
    max_size: props.class.max_size,
  });

  console.log("class", formData);
  console.log("classprops", props);

  const handleChanges = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  const handleClasses = (e) => {
    e.preventDefault();
    axiosWithAuth()
      .put(`/${props.class.id}`, formData)
      .then((res) => {
        console.log(res);
        console.log("propsClassForm", props);
        props.history.props.history.push("/client");
        props.history.props.history.push("/instructor");
      });
  };

  return (
    <div className="form-wrapper">
      <Form2 className="ClassForm">
        <Label>
          Name
          <Input
            name="name"
            type="text"
            defaultValue={formData.name}
            onChange={handleChanges}
          />
        </Label>
        <Label>
          Type
          <Input
            name="type"
            type="text"
            value={formData.type}
            onChange={handleChanges}
          />
        </Label>
        <Label>
          Location
          <Input
            name="location"
            type="text"
            value={formData.location}
            onChange={handleChanges}
          />
        </Label>
        <Label>
          Intensity Level(1-10)
          <Input
            name="intensitylvl"
            type="number"
            value={formData.intensitylvl}
            onChange={handleChanges}
          />
        </Label>
        <Label>
          Length(minutes)
          <Input
            name="length_minutes"
            type="number"
            value={formData.length_minutes}
            onChange={handleChanges}
          />
        </Label>
        <Label>
          Current Size
          <Input
            name="current_size"
            type="number"
            value={formData.current_size}
            onChange={handleChanges}
          />
        </Label>
        <Label>
          Max Size
          <Input
            name="max_size"
            type="number"
            value={formData.max_size}
            onChange={handleChanges}
          />
        </Label>
        <ButtonGreen onClick={handleClasses} style={{ marginLeft: "64%" }}>
          Submit
        </ButtonGreen>
      </Form2>
    </div>
  );
}

export default ClassForm;
