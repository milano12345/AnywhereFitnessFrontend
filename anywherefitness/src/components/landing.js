import React, { Component } from "react";
import { Grid, Cell } from "react-mdl";

class Landing extends Component {
  render() {
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
          <h3 style={{ color: "black", marginLeft: "5%" }}>Dashboard</h3>
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
              -Attention all clients... member dues will be collected on the 5th
              of next month. Thank you.
            </p>
          </div>
        </Cell>
        <Cell className="resume-right-col" col={8} style={{ margin: "0px" }}>
          <h2 style={{ margin: "25px" }}>About Me</h2>
          <p style={{ margin: "25px" }}>
            Lorem ipsum, or lipsum as it is sometimes known, is dummy text used
            in laying out print, graphic or web designs. The passage is
            attributed to an unknown typesetter in the 15th century who is
            thought to have scrambled parts of Malorum for use in a type
            specimen book.
          </p>
          <p style={{ margin: "25px" }}>
            Lorem ipsum, or lipsum as it is sometimes known, is dummy text used
            in laying out print, graphic or web designs. The passage is
            attributed to an unknown typesetter in the 15th century who is
            thought to have scrambled parts of Malorum for use in a type
            specimen book.
          </p>
          <p style={{ margin: "25px" }}>
            Lorem ipsum, or lipsum as it is sometimes known, is dummy text used
            in laying out print, graphic or web designs. The passage is
            attributed to an unknown typesetter in the 15th century who is
            thought to have scrambled parts of Malorum for use in a type
            specimen book.
          </p>
          <p style={{ margin: "25px" }}>
            Lorem ipsum, or lipsum as it is sometimes known, is dummy text used
            in laying out print, graphic or web designs. The passage is
            attributed to an unknown typesetter in the 15th century who is
            thought to have scrambled parts of Malorum for use in a type
            specimen book.
          </p>
          <p style={{ margin: "25px" }}>
            Lorem ipsum, or lipsum as it is sometimes known, is dummy text used
            in laying out print, graphic or web designs. The passage is
            attributed to an unknown typesetter in the 15th century who is
            thought to have scrambled parts of Malorum for use in a type
            specimen book.
          </p>
          <p style={{ margin: "25px" }}>
            Lorem ipsum, or lipsum as it is sometimes known, is dummy text used
            in laying out print, graphic or web designs. The passage is
            attributed to an unknown typesetter in the 15th century who is
            thought to have scrambled parts of Malorum for use in a type
            specimen book.
          </p>
        </Cell>
      </Grid>
    );
  }
}

export default Landing;
