import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { ButtonGreen, Form, Label, Input } from "./login"


const PostClassForm = props => {
    const initialState = [{ "name": "", type: "", location: "", intensity_lvl: "", length_minutes: "", current_size: "", max_size: "" }]
    const [formData, setFormData] = useState([initialState])
    console.log(formData)

    return (
        <Form className="LoginForm">
            <Label>
                Name
  <Input
                    name="name"
                    type="text"
                    value={formData.name}
                    onChange={setFormData}
                />
            </Label>
            <Label>
                Type
  <Input
                    name="type"
                    type="text"
                    value={formData.type}
                    onChange={setFormData}
                />
            </Label>
            <Label>
                Location
  <Input
                    name="location"
                    type="text"
                    value={formData.location}
                    onChange={setFormData}
                />
            </Label>
            <Label>
                Intensity Level(1-10)
  <Input
                    name="intensity_lvl"
                    type="text"
                    value={formData.intensity_lvl}
                    onChange={setFormData}
                />
            </Label>
            <Label>
                Length(minutes)
  <Input
                    name="length_minutes"
                    type="text"
                    value={""}
                    onChange={setFormData}
                />
            </Label>
            <Label>
                Current Size
  <Input
                    name="current_size"
                    type="text"
                    value={""}
                    onChange={setFormData}
                />
            </Label>
            <Label>
                Max Size
  <Input
                    name="max_size"
                    type="text"
                    value={formData.max_size}
                    onChange={setFormData}
                />
            </Label>
            <ButtonGreen>Submit</ButtonGreen>
        </Form>
    )
}

export default PostClassForm;