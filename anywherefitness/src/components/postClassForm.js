import React, { useState } from "react";
import { ButtonGreen, Form, Label, Input } from "./login";
import { axiosWithAuth } from "./axiosWithAuth";

const PostClassForm = props => {
  const [formData, setFormData] = useState({});

  console.log(formData);

  const handleChanges = event => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  const handleClasses = e => {
    e.preventDefault();
    console.log(formData);
    axiosWithAuth()
      .post("/createclass", formData)
      .then(res => {
        console.log(res);
        window.location.reload(false);
        // setFormData(initialState);
      });
  };

  return (
    <div className="form-wrapper">
      <Form className="ClassForm">
        <Label>
          Name
          <Input
            name="name"
            type="text"
            value={formData.name}
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
        <ButtonGreen style={{ marginLeft: "64%" }} onClick={handleClasses}>
          Submit
        </ButtonGreen>
      </Form>
    </div>
  );
};

export default PostClassForm;
