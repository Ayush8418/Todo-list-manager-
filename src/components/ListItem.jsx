import React, { useState } from "react";

function ListItem(props) {
  const [status, setstatus] = useState(false);
  function handleClick() {
    setstatus((prev) => {
      return !prev;
    });
  }

  return (
    <div onClick={handleClick} onDoubleClick={() => props.onChecked(props.id)}>
      <li
        style={
          status
            ? { textDecoration: "line-through" }
            : { textDecoration: "none" }
        }
      >
        {props.item}
      </li>
    </div>
  );
}

export default ListItem;
