import React from "react";
import { HP } from "../../script/HP";
import { Align } from "./../layout_settings";

export default function Row({
  style,
  children,
  hAlign = Align.left,
  vAlign = Align.center,
}) {
  let custom = { display: "flex", justifyContent: hAlign, alignItems: vAlign };

  return <div style={HP.combineStyles(custom, style)}>{children}</div>;
}
