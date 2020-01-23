import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { ButtonGreen, Form, Label, Input } from "./login";
import { axiosWithAuth } from "./axiosWithAuth";

const PostClassForm = props => {
  const initialState = [
    {
      name: "",
      type: "",
      length_minutes: "",
      intensitylvl: "",
      location: "",
      current_size: "",
      max_size: ""
    }
  ];
  const [formData, setFormData] = useState(initialState);

  console.log(formData);

  const handleChanges = event => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  const handleClasses = e => {
    e.preventDefault();
    console.log(formData);
    axiosWithAuth()
      .post("/classes")
      .then(res => {
        console.log(res);
        window.reload();
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
            name="intensity_lvl"
            type="text"
            value={formData.intensity_lvl}
            onChange={handleChanges}
          />
        </Label>
        <Label>
          Length(minutes)
          <Input
            name="length_minutes"
            type="text"
            value={formData.length_minutes}
            onChange={handleChanges}
          />
        </Label>
        <Label>
          Current Size
          <Input
            name="current_size"
            type="text"
            value={formData.current_size}
            onChange={handleChanges}
          />
        </Label>
        <Label>
          Max Size
          <Input
            name="max_size"
            type="text"
            value={formData.max_size}
            onChange={handleChanges}
          />
        </Label>
        <ButtonGreen onClick={handleClasses}>Submit</ButtonGreen>
      </Form>
    </div>
  );
};

export default PostClassForm;
