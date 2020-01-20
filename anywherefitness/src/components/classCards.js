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
  @media (min-width: 480px) {
    width: 100% !important;
  }
`;

const useStyles = makeStyles(theme => ({
  //   card: {
  //     maxWidth: "100%",
  //     margin: "1%"
  //   },
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

  function handleExpandClick() {
    setExpanded(!expanded);
  }

  return (
    <Card className={classes.card}>
      <CardHeader
        avatar={
          <Avatar aria-label="recipe" className={classes.avatar}>
            i
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title={props.data.name}
        subheader={props.data.type}
      />
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
