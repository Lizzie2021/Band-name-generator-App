import React from "react";
import ForwardIcon from "@material-ui/icons/Forward";
export default function BandName(props) {
  return (
    <h2>
      Your band name could be{" "}
      <ForwardIcon fontSize="inherit" color="secondary" />
      {props.bandName}
    </h2>
  );
}
