import { Button, createStyles, makeStyles } from "@material-ui/core";
import React from "react";

// Styling with material-ui hook API: https://material-ui.com/styles/basics/
const useStyles = makeStyles(() =>
  createStyles({
    button: {
    },
  })
);

const SubmitButton = (props) => {
  const classes = useStyles();
  return (
    <Button type="submit" className="green-button" disabled={props.disabled}>Create</Button>
  );
};

export default SubmitButton;
