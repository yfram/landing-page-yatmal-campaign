import { TextField } from "@mui/material";
import React from "react";
import { useState } from "react";

function RequiredField({ text, errorCheck, altHelperText, onChange }) {
  let [curText, setCurText] = useState();
  let helperText = altHelperText || "נדרשים מינימום שני אותיות";
  if (curText === undefined) {
    helperText = "";
  }
  let error;
  if (errorCheck === undefined) {
    //check that text has two letters at least that are not whitespace
    error = curText === undefined ? true : curText.length < 2 || curText.trim().length < 2;
  }
  else {
    error = errorCheck(curText === undefined ? "" : curText);
  }
  return (
    <TextField id="outlined-basic"
      onChange={
        (e) => {
          setCurText(e.target.value);
          if (onChange !== undefined) {
            onChange(e.target.value);
          }
        }
      }
      helperText={error ? helperText : ""}
      error={curText === undefined ? false : error}
      label={
        <>
          <span>{text}</span>
          <span style={{
            color: "red"
          }}>*</span>
        </>
      } variant="outlined" />
  );
}

export default RequiredField;

