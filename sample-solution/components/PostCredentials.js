import React, { useState } from "react";
import TextField from "@material-ui/core/TextField";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import PhotoCamera from "@material-ui/icons/PhotoCamera";
import Internships from "./Internships";

const useStyles = makeStyles((theme) => ({
  root: {
    "& .MuiTextField-root": {
      margin: theme.spacing(1),
      width: "25ch",
    },
  },
}));

export default function FormPropsTextFields({}) {
  const [name, setname] = useState();
  const onNameChange = (event) => {
    setname(event.target.value);
  };
  const [company, setcompany] = useState();
  const onComChange = (event) => {
    setcompany(event.target.value);
  };
  const [position, setposition] = useState();
  const onPosChange = (event) => {
    setposition(event.target.value);
  };
  const [review, setreview] = useState();
  const onRevChange = (event) => {
    setreview(event.target.value);
  };
  const [category, setcategory] = useState();
  const onCatChange = (event) => {
    setcategory(event.target.value);
  };

  const handlePost = async () => {
    const newpost = { name, company, position, review };
    if (category == "Software") {
      Internships.addSoftwareInternships(newpost);
      console.log("Software addition");
    } else if (category == "Law") {
      Internships.addLegalInternships(newpost);
      console.log("Law addition");
    } else if (category == "Medical") {
      Internships.addMedicalInternships(newpost);
      console.log("Med addition");
    }
    setname("");
    setcompany("");
    setposition("");
    setreview("");
    setcategory("");
  };

  const classes = useStyles();

  return (
    <form className={classes.root} noValidate autoComplete="off">
      <div>
        <TextField
          id="standard-search"
          label="Name"
          type="search"
          onChange={onNameChange}
          value={name}
        />
        <TextField
          id="standard-search"
          label="Company"
          type="search"
          onChange={onComChange}
          value={company}
        />
        <TextField
          id="standard-search"
          label="Position"
          type="search"
          onChange={onPosChange}
          value={position}
        />
        <div></div>
        <div></div>
        <TextField
          id="outlined-multiline-static"
          label="Experience"
          multiline
          rows={10}
          placeholder="Input Learning Experiences, Projects, and Reviews here!"
          variant="outlined"
          onChange={onRevChange}
          value={review}
        />

        <TextField
          id="standard-full-width"
          style={{ margin: 100 }}
          label="Category"
          fullWidth
          margin="normal"
          onChange={onCatChange}
          value={category}
          InputLabelProps={{
            shrink: true,
          }}
        />
        <div></div>
        <Button variant="contained" color="primary" onClick={handlePost}>
          Post
        </Button>
      </div>
    </form>
  );
}
