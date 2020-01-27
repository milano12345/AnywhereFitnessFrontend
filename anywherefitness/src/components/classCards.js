//this comes from material ui

import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import clsx from "clsx";
// import Card from "@material-ui/core/Card";

import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Collapse from "@material-ui/core/Collapse";
import Avatar from "@material-ui/core/Avatar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import FavoriteIcon from "@material-ui/icons/Favorite";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import { ButtonRed } from "./login";
import styled from "styled-components";

export const Card = styled.div`
  margin: 1%;
  box-shadow: 0px 2px 1px -1px rgba(0, 0, 0, 0.2),
    0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 1px 3px 0px rgba(0, 0, 0, 0.12);
  border-radius: 4px;
  color: rgba(0, 0, 0, 0.87);
  transition: box-shadow 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
  background-color: #fff;
  width: 48%;
  height: 1%;
  @media (max-width: 800px) {
    width: 100% !important;
  }
`;

export const Select = styled.select`
  padding: 0.5em;
  color: black;
  background-color: lightgray;
  border: silver;
  border-radius: 3px;
  width: 85%;
  opacity: 0;
  margin-bottom: 0.5em;
  position: relative;
`;

const useStyles = makeStyles(theme => ({
  media: {
    height: 0,
    paddingTop: "56.25%" // 16:9
  },
  expand: {
    transform: "rotate(0deg)",
    marginLeft: "auto",
    transition: theme.transitions.create("transform", {
      duration: theme.transitions.duration.shortest
    })
  },
  expandOpen: {
    transform: "rotate(180deg)"
  },
  avatar: {
    backgroundColor: "cadetblue"
  }
}));

function ClassCards(props) {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);
  const [opacity, setOpacity] = React.useState(false);
  const [formData, setFormData] = React.useState({});

  console.log(formData);
  const handleChanges = event => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  const handleClick = e => {
    if (opacity === false) {
      console.log(opacity);
      Array.from(document.getElementsByClassName("options")).forEach(function(
        item
      ) {
        item.style.opacity = 1;
        item.style.height = "10%";

        setOpacity(true);
      });
    } else if (opacity === true) {
      Array.from(document.getElementsByClassName("options")).forEach(function(
        item
      ) {
        item.style.opacity = 0;
      });
      setOpacity(false);
    }
  };

  function handleExpandClick() {
    setExpanded(!expanded);
  }

  return (
    <Card className="cardStyle">
      <CardHeader
        avatar={
          <Avatar aria-label="recipe" className={classes.avatar}>
            i
          </Avatar>
        }
        action={
          <IconButton onClick={handleClick} aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title={props.data.name}
        subheader={props.data.type}
      />
      <Select name="options" className="options" onChange={handleChanges}>
        <option name="option" value={formData.null}>
          Please Select An Option
        </option>
        <option name="delete" value={formData.delete}>
          Delete This Class
        </option>
        <option name="edit" value={formData.edit}>
          Edit This Class
        </option>
      </Select>
      <CardMedia
        className={classes.media}
        image="https://images.pexels.com/photos/841130/pexels-photo-841130.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
        title="Workout"
      />
      <CardContent>
        {/* <Typography variant="body2" color="textSecondary" component="p">
          <p style={{ fontSize: "14px", fontWeight: "800" }}>
            Location: {props.data.location}
          </p>
          <p style={{ fontSize: "14px", fontWeight: "800" }}>
            Intensity Level : {props.data.intensitylvl}
          </p>
        </Typography> */}
        <Typography paragraph style={{ fontWeight: "800" }}>
          Date: TBA <br /> Location: {props.data.location} <br />
          Intensity Level: {props.data.intensitylvl}
          <br />
          Length: {props.data.length_minutes} minutes
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
        <div>Add to Favorites</div>
        <IconButton
          className={clsx(classes.expand, {
            [classes.expandOpen]: expanded
          })}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </IconButton>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography paragraph style={{ fontWeight: "800" }}>
            Current Size: {props.data.current_size} <br />
            Max Size: {props.data.max_size} <br />
            <br />
            Sign Up Now{" "}
            <ButtonRed style={{ marginLeft: "24%" }}>Click Here</ButtonRed>
          </Typography>
        </CardContent>
      </Collapse>
    </Card>
  );
}

export default ClassCards;
