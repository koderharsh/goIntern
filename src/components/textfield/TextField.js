import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import "./textfield.css";

const useStyles = makeStyles({
  root: {
    fontSize: 100,
    "& label.Mui-focused": {
      color: "#8edaee",
    },
    "& .MuiInput-underline:after": {
      borderBottomColor: "#8edaee",
    },
  },
  resize: {
    fontSize: 25,
    color: "#363636",
    fontFamily: "Noto Sans KR",
  },
});

const TextFields = (props) => {
  const classes = useStyles();
  const {
    type = "text",
    label = "input",
    child,
    value,
    setValue,
    name = "input",
  } = props;
  return (
    <div className='input-wrapper'>
      <TextField
        id='standard-multiline-flexible'
        multiline
        variant='standard'
        minRows={1}
        value={value}
        onChange={setValue}
        type={type}
        name={name}
        label={label}
        className={classes.root}
        InputProps={{
          classes: {
            input: classes.resize,
          },
        }}
      />
      {child && child}
    </div>
  );
};

export default TextFields;
