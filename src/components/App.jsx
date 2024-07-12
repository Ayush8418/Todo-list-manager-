import React, { useState } from "react";
import List from "./List";
import Heading from "./Heading";
import Inputs from "./Inputs";
import Calander from "./Calander";
import Quotes from "./Quotes";

function App() {
  const [listOfItems, updateListOfItems] = useState([]);

  function addItem(item) {
    updateListOfItems((prevVal) => {
      return [...prevVal, item];
    });
  }
  function removeItem(id) {
    console.log(id);
    updateListOfItems((prevVal) => {
      return prevVal.filter((item, index) => index !== id);
    });
  }
  function ClearAll(){
    if(listOfItems.length > 0){
      if (window.confirm('Are you sure you want to clear the array?')) {
          updateListOfItems([]);
      }
    }
  }

  return (
    <div className="container">

      <Heading />

      <Inputs addItem={addItem} />

      <div>
        <List listOfItems={listOfItems} removeItem={removeItem} />
      </div>

      <div className="clearDiv">
        <button className="clearButton" onClick={ClearAll}> Clear </button>
      </div>
      <p className="note">*double click on item to clear it</p>
      
      <Calander />

      <Quotes />
      
    </div>
  );
}

export default App;
