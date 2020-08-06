import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import clsx from "clsx";
import { axiosWithAuth } from "./axiosWithAuth";
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

export const Checkbox = styled.img`
  width: 14%;
  opacity: 0;
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

const useStyles = makeStyles((theme) => ({
  media: {
    height: 0,
    paddingTop: "56.25%", // 16:9
  },
  expand: {
    transform: "rotate(0deg)",
    marginLeft: "auto",
    transition: theme.transitions.create("transform", {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: "rotate(180deg)",
  },
  avatar: {
    backgroundColor: "cadetblue",
  },
}));

const ClassCards = (props) => {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);
  const [opacity, setOpacity] = React.useState(false);
  const [formData, setFormData] = React.useState({});

  const image = (cards) => {
    console.log(cards[Math.floor(Math.random() * cards.length)]);
    return cards[Math.floor(Math.random() * cards.length)].toString();
  };

  const cards = [
    "https://images.pexels.com/photos/2479184/pexels-photo-2479184.jpeg?cs=srgb&dl=pexels-derick-santos-2479184.jpg&fm=jpg",
    "https://images.pexels.com/photos/2475877/pexels-photo-2475877.jpeg?cs=srgb&dl=pexels-li-sun-2475877.jpg&fm=jpg",
    "https://images.pexels.com/photos/416778/pexels-photo-416778.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    "https://images.pexels.com/photos/221247/pexels-photo-221247.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260",
    "https://images.pexels.com/photos/841130/pexels-photo-841130.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    "https://images.pexels.com/photos/4720236/pexels-photo-4720236.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    "https://images.pexels.com/photos/1552242/pexels-photo-1552242.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    "https://images.pexels.com/photos/1671217/pexels-photo-1671217.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    "https://images.pexels.com/photos/260352/pexels-photo-260352.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    "https://images.pexels.com/photos/1153369/pexels-photo-1153369.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    "https://images.pexels.com/photos/2294361/pexels-photo-2294361.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    "https://images.pexels.com/photos/221210/pexels-photo-221210.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    "https://images.pexels.com/photos/1552249/pexels-photo-1552249.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    "https://images.pexels.com/photos/791763/pexels-photo-791763.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    "https://images.pexels.com/photos/28080/pexels-photo.jpg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260",
    "https://images.pexels.com/photos/17840/pexels-photo.jpg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    "https://images.pexels.com/photos/1552248/pexels-photo-1552248.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    "https://images.pexels.com/photos/2827400/pexels-photo-2827400.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    "https://images.pexels.com/photos/903171/pexels-photo-903171.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
  ];

  const handleChanges = (event) => {
    event.preventDefault();
    setFormData({ ...formData, [event.target.name]: event.target.value });
    if ((formData.options = "Delete This Class")) {
      Array.from(document.getElementsByClassName("confirmDelete")).forEach(
        function (item) {
          item.style.opacity = 1;
        }
      );
    } else if ((formData.options = "Edit This Class")) {
      Array.from(document.getElementsByClassName("confirmEdit")).forEach(
        function (item) {
          item.style.opacity = 0;
        }
      );
    }
  };

  // function shuffle(array) {
  //   if (array.length > 0) {
  //     const newimg = array.splice(0, 1);
  //     return newimg;
  //   } else {
  //     console.log("no more images");
  //   }
  // }

  const handleClick = (e) => {
    e.preventDefault();
    if (opacity === false) {
      console.log(opacity);
      Array.from(document.getElementsByClassName("options")).forEach(function (
        item
      ) {
        item.style.opacity = 1;
        item.style.height = "10%";
        setOpacity(true);
      });
    } else if (opacity === true) {
      Array.from(document.getElementsByClassName("options")).forEach(function (
        item
      ) {
        item.style.opacity = 0;
      });
      setOpacity(false);
    }
  };

  const handleDelete = () => {
    axiosWithAuth()
      .delete(`/${props.data.id}`)
      .then((res) => {
        console.log(res);
        console.log("props!", props);
        props.props.history.push("/client");
        props.props.history.push("/instructor");
      });
  };

  function handleExpandClick(e) {
    e.preventDefault();
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

      <Checkbox
        src="https://img.icons8.com/flat_round/64/000000/checkmark.png"
        alt="checkbox-confirm-delete"
        className="confirmDelete"
        onClick={handleDelete}
      />
      <CardMedia
        className={classes.media}
        image={image(cards)}
        title="Workout"
      />
      <CardContent>
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
        <div>Expand to Sign Up</div>
        <IconButton
          className={clsx(classes.expand, {
            [classes.expandOpen]: expanded,
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
};

export default ClassCards;
