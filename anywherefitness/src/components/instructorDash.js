import React, { useState, useEffect } from "react";
import { Grid, Cell } from "react-mdl";
import BottomNav from "./footer";
import { axiosWithAuth } from "./axiosWithAuth";
import ClassCards from "./classCards";
import { CardStyles, ButtonGreen, Form, Label, Input } from "./login";

const InstructorDash = props => {
  const [classes, setClasses] = useState([]);
  const [hidden, setHidden] = React.useState(false);
  const [formData, setFormData] = useState({});
  console.log("instructor page", formData);

  console.log(formData);

  const handleChanges = event => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  const handleClasses = e => {
    e.preventDefault();
    axiosWithAuth()
      .post("/createclass", formData)
      .then(res => {
        axiosWithAuth()
          .get("/classes")
          .then(res => {
            console.log(res);
            setClasses(res.data);
          });
        if ((res.status = 200)) {
          document.querySelector(".hiddenSuccess").style.opacity = 1;
          setFormData({
            name: "",
            type: "",
            location: "",
            intensitylvl: "",
            length_minutes: "",
            current_size: "",
            max_size: ""
          });
        } else {
          console.log("fail");
        }
      });
  };

  useEffect(() => {
    axiosWithAuth()
      .get("/classes")
      .then(res => {
        console.log(res);
        setClasses(res.data);
      });
  }, [hidden]);

  const changeOpacity = e => {
    if (hidden === false) {
      console.log(hidden);
      document.getElementById("hidden").style.opacity = 1;
      document.getElementById("hidden").style.position = "";
      document.getElementById("hidden").style.right = "";

      setHidden(true);
    } else if (hidden === true) {
      document.getElementById("hidden").style.opacity = 0;
      document.getElementById("hidden").style.position = "absolute";
      document.getElementById("hidden").style.right = "110%";
      console.log(hidden);
      setHidden(false);
    }
  };

  return (
    <Grid>
      <Cell className="resume-left-col" col={4}>
        <div style={{ textAlign: "center" }}>
          <img
            src={require("../images/anywhere.png")}
            style={{
              color: "#fff",
              height: "250px",
              marginTop: "30px",
              borderRadius: "10%",
              border: "10px solid skyblue"
            }}
            alt={"Wakeboarding"}
          />
        </div>
        <h4 style={{ color: "black", marginLeft: "5%" }}>Welcome!</h4>
        <h3 style={{ color: "black", marginLeft: "5%" }}>
          Instructor Dashboard
        </h3>
        <hr
          style={{
            borderTop: "3px solid #833fb2",
            width: "74%",
            marginLeft: "21%"
          }}
        ></hr>
        <div className="text-card">
          <h5
            style={{
              textAlign: "left",
              paddingLeft: "16px",
              paddingRight: "16px",
              paddingTop: "16px",
              color: "darkgray"
            }}
          >
            ***Special News Bulletin!{" "}
          </h5>
          <p
            style={{
              textAlign: "left",
              paddingLeft: "16px",
              paddingRight: "16px",
              //paddingBottom: "16px",
              color: "darkgray"
            }}
          >
            -Attention all clients... member dues will be collected on the 5th
            of next month. Thank you.
          </p>
          <p
            style={{
              textAlign: "left",
              paddingLeft: "16px",
              paddingRight: "16px",
              paddingBottom: "50px",
              color: "darkgray"
            }}
          >
            New lockers will be installed during the weeks of 02/23/2020 -
            03/07/2020. Please plan accordingly, thank you!
          </p>
        </div>
      </Cell>
      <Cell className="resume-right-col" col={8} style={{ margin: "0px" }}>
        <h2 style={{ margin: "25px" }}>This month's classes</h2>
        <ButtonGreen onClick={changeOpacity} style={{ marginLeft: "28%" }}>
          Add a New Class
        </ButtonGreen>
        <div
          id="hidden"
          style={{ opacity: 0, position: "absolute", right: "110%" }}
        >
          {/* <PostClassForm /> */}
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
              <ButtonGreen
                onClick={handleClasses}
                style={{ marginLeft: "64%" }}
              >
                Submit
              </ButtonGreen>
              <div style={{ opacity: "0" }} className={"hiddenSuccess"}>
                Class Successfully Added!
              </div>
            </Form>
          </div>
        </div>
        <CardStyles>
          {classes.map(item => (
            <ClassCards key={item.id} name={item.id} data={item} />
          ))}
        </CardStyles>
      </Cell>
      <BottomNav style={{ marginTop: "20%" }} />
    </Grid>
  );
};

export default InstructorDash;
