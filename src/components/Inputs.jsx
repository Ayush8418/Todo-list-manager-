import React, { useState } from "react";

function Inputs(props) {
  const [item, changeItem] = useState("");

  function handleChange(event) {
    changeItem(event.target.value);
  }
  function handleSubmit() {
    if(item !== ""){
        props.addItem(item);
        changeItem("");
    }
  }

  return (
    <div className="form">
      <input type="text" onChange={handleChange} value={item} />
      <button className="addButton" onClick={handleSubmit}>
        <span>Add</span>
      </button>
    </div>
  );
}

export default Inputs;
