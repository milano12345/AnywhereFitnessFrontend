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
                borderRadius: "80%",
                marginTop: "30px"
              }}
              alt={"Wakeboarding"}
            />
          </div>
          <h2>Daniel Milano</h2>
          <h3 style={{ color: "grey" }}>Programmer</h3>
          <hr style={{ borderTop: "3px solid #833fb2", width: "50%" }}></hr>
          <div className="text-card">
            <p
              style={{ textAlign: "left", padding: "16px", color: "darkgray" }}
            >
              Daniel is a driven, motivated individual with a passion for
              learning new technologies. He has been tinkering with websites
              since the young age of 10. From running bots on Runescape to save
              precious time, utilizing post data on Firefox to hack Facebook
              games in the early stages of the website, and to full design
              customization on his MySpace profile. Daniel now spends his time
              more productively, learning full stack web development so he can
              contribute something meaningful to mankind.
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
        </Cell>
      </Grid>
    );
  }
}

export default Landing;
