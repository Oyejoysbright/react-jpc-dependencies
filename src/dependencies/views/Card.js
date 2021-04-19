import React from "react";
import { HP } from "./../../script/HP";

export default function Card({ style, children }) {
  let custom = {
    position: "relative",
    borderRadius: 7,
    padding: 10,
    margin: 5,
    boxShadow: "0px 1px 1px rgba(10, 10, 10, .2)",
  };

  return <div style={HP.combineStyles(custom, style)}>{children}</div>;
}
