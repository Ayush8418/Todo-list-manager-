import React from "react";

function ListItem2(props) {
  return <li onDoubleClick={() => props.onChecked(props.id)}> {props.item} </li>;
}

export default ListItem2;

