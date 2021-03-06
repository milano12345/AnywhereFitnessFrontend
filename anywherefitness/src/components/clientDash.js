import React, { useState, useEffect } from "react";
import { Grid, Cell } from "react-mdl";
import BottomNav from "./footer";
import { axiosWithAuth } from "./axiosWithAuth";
import ClassCards from "./classCards";
import { CardStyles } from "./login";

const ClientDash = props => {
  const [classes, setClasses] = useState([]);
  const [bulletin, setBulletin] = useState([])

  const newBulletin = () => {
    setBulletin(bulletin => [...bulletin, "Attention all clients. Member dues will be collected on the 5th!"])
    newBulletin2()
    newBulletin3()
  }
  const newBulletin2 = () => setBulletin(bulletin => [...bulletin, "Stay safe!, wear a mask!"])
  const newBulletin3 = () => setBulletin(bulletin => [...bulletin, "Coronavirus is out there! Be safe!"])
  console.log(classes);
  useEffect(() => {
    axiosWithAuth()
      .get("/classes")
      .then(res => {
        console.log(res);
        setClasses(res.data);
      });
  }, []);

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
        <h3 style={{ color: "black", marginLeft: "5%" }}>Client Dashboard</h3>
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
            {bulletin[0]}
            {console.log(bulletin)}
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

            {bulletin[1]}
            <br />
            {bulletin[2]}
            <button onClick={newBulletin}>Click here to see bulletins</button>
          </p>
        </div>
      </Cell>
      <Cell className="resume-right-col" col={8} style={{ margin: "0px" }}>
        <h2 style={{ margin: "25px" }}>This month's classes</h2>
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

export default ClientDash;
